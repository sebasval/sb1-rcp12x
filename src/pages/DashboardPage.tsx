import { Layout } from '@/components/Layout';
import { ConfigSection } from '@/components/ConfigSection';
import { ImageUpload } from '@/components/ImageUpload';
import { ResultsSection } from '@/components/ResultsSection';
import { LoadingOverlay } from '@/components/LoadingOverlay';
import { useSprayAnalyzer } from '@/hooks/useSprayAnalyzer';
import { useState } from 'react';

export function DashboardPage() {
  const [files, setFiles] = useState<FileList | null>(null);
  const { isConnected, apiUrl, loading, results, analyzeImages, downloadExcel } = useSprayAnalyzer();

  const handleAnalyze = () => {
    if (files) {
      analyzeImages(files);
    }
  };

  return (
    <Layout>
      <ConfigSection isConnected={isConnected} apiUrl={apiUrl} />
      <ImageUpload
        files={files}
        setFiles={setFiles}
        onAnalyze={handleAnalyze}
        disabled={!isConnected || loading}
      />
      {loading && <LoadingOverlay />}
      {results && (
        <ResultsSection
          results={results}
          onDownload={downloadExcel}
        />
      )}
    </Layout>
  );
}