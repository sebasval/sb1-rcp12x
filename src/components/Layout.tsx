import { ReactNode } from 'react';
import { Droplets } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="flex items-center gap-2 mb-8">
          <Droplets className="h-8 w-8 text-blue-500" />
          <h1 className="text-3xl font-bold tracking-tight">Spray Analyzer</h1>
        </header>
        <main className="space-y-6">{children}</main>
      </div>
    </div>
  );
}