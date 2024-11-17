import { UploadCloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface ImageUploadProps {
  files: FileList | null;
  setFiles: (files: FileList | null) => void;
  onAnalyze: () => void;
  disabled: boolean;
}

export function ImageUpload({ files, setFiles, onAnalyze, disabled }: ImageUploadProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Images</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="border-2 border-dashed rounded-lg p-6 text-center">
          <UploadCloud className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <Input
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => setFiles(e.target.files)}
            className="hidden"
            id="image-upload"
          />
          <label
            htmlFor="image-upload"
            className="block text-sm text-muted-foreground mb-2 cursor-pointer"
          >
            {files?.length
              ? `${files.length} image${files.length === 1 ? '' : 's'} selected`
              : 'Drop images here or click to upload'}
          </label>
          <Button
            onClick={onAnalyze}
            disabled={!files?.length || disabled}
            className="w-full sm:w-auto"
          >
            Analyze Images
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}