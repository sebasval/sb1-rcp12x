import { useState, useEffect } from 'react';

interface Analysis {
  file_name: string;
  coverage_percentage: number;
  total_area: number;
  sprayed_area: number;
}

interface Summary {
  average_coverage: number;
  min_coverage: number;
  max_coverage: number;
  total_images: number;
  total_area_analyzed: number;
  total_area_sprayed: number;
}

interface AnalysisResults {
  analysis_id: string;
  analyses: Analysis[];
  summary: Summary;
}

export function useSprayAnalyzer() {
  const [isConnected, setIsConnected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<AnalysisResults | null>(null);
  const [currentAnalysisId, setCurrentAnalysisId] = useState<string | null>(null);

  const API_URL = window.location.hostname === 'localhost'
    ? 'http://localhost:8000'
    : 'https://spray-production.up.railway.app';

  useEffect(() => {
    checkApiStatus();
  }, []);

  async function checkApiStatus() {
    try {
      const response = await fetch(`${API_URL}/health`);
      const data = await response.json();
      setIsConnected(data.status === 'healthy');
    } catch (error) {
      setIsConnected(false);
      console.error('API Connection Error:', error);
    }
  }

  async function analyzeImages(files: FileList) {
    setLoading(true);
    
    const formData = new FormData();
    Array.from(files).forEach(file => {
      formData.append('files', file);
    });

    try {
      const response = await fetch(`${API_URL}/analyze-batch`, {
        method: 'POST',
        body: formData
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Error analyzing images');
      }
      
      const data = await response.json();
      setCurrentAnalysisId(data.analysis_id);
      setResults(data);
    } catch (error) {
      console.error('Error:', error);
      alert(error instanceof Error ? error.message : 'Error analyzing images');
    } finally {
      setLoading(false);
    }
  }

  async function downloadExcel() {
    if (!currentAnalysisId) {
      alert('No analysis results available');
      return;
    }

    try {
      const response = await fetch(`${API_URL}/download-excel/${currentAnalysisId}`);
      if (!response.ok) throw new Error('Error downloading file');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `analisis_rociado_${new Date().toISOString().slice(0,19).replace(/[-:]/g, '')}.xlsx`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    } catch (error) {
      console.error('Error downloading Excel:', error);
      alert('Error downloading Excel file');
    }
  }

  return {
    isConnected,
    apiUrl: API_URL,
    loading,
    results,
    analyzeImages,
    downloadExcel
  };
}