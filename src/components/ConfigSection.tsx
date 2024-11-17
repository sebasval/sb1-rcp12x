import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, XCircle } from 'lucide-react';

interface ConfigSectionProps {
  isConnected: boolean;
  apiUrl: string;
}

export function ConfigSection({ isConnected, apiUrl }: ConfigSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Configuration</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">API Status:</span>
          {isConnected ? (
            <Badge variant="success" className="flex items-center gap-1">
              <CheckCircle2 className="h-3 w-3" />
              Connected
            </Badge>
          ) : (
            <Badge variant="destructive" className="flex items-center gap-1">
              <XCircle className="h-3 w-3" />
              Disconnected
            </Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground">
          Using API at: {apiUrl}
        </p>
      </CardContent>
    </Card>
  );
}