import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ResultsChart } from './ResultsChart';
import { formatNumber } from '@/lib/utils';

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

interface ResultsSectionProps {
  results: {
    analyses: Analysis[];
    summary: Summary;
  };
  onDownload: () => void;
}

export function ResultsSection({ results, onDownload }: ResultsSectionProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Analysis Results</CardTitle>
        <Button onClick={onDownload} variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Download Excel
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        <ResultsChart data={results.analyses} />
        
        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>File</TableHead>
                <TableHead>Coverage (%)</TableHead>
                <TableHead>Total Area</TableHead>
                <TableHead>Sprayed Area</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {results.analyses.map((analysis) => (
                <TableRow key={analysis.file_name}>
                  <TableCell className="font-medium">{analysis.file_name}</TableCell>
                  <TableCell>{analysis.coverage_percentage.toFixed(2)}%</TableCell>
                  <TableCell>{formatNumber(analysis.total_area)}</TableCell>
                  <TableCell>{formatNumber(analysis.sprayed_area)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <Card className="bg-muted">
          <CardHeader>
            <CardTitle className="text-lg">Analysis Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p>Average Coverage: <span className="font-semibold">{results.summary.average_coverage.toFixed(2)}%</span></p>
                <p>Minimum Coverage: <span className="font-semibold">{results.summary.min_coverage.toFixed(2)}%</span></p>
                <p>Maximum Coverage: <span className="font-semibold">{results.summary.max_coverage.toFixed(2)}%</span></p>
              </div>
              <div className="space-y-2">
                <p>Total Images: <span className="font-semibold">{results.summary.total_images}</span></p>
                <p>Total Area Analyzed: <span className="font-semibold">{formatNumber(results.summary.total_area_analyzed)}</span></p>
                <p>Total Area Sprayed: <span className="font-semibold">{formatNumber(results.summary.total_area_sprayed)}</span></p>
              </div>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}