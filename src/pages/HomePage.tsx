import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Droplets, BarChart, FileSpreadsheet, ArrowRight } from 'lucide-react';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <header className="bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Droplets className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-bold">Spray Analyzer</span>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/login">
                <Button variant="ghost">Log in</Button>
              </Link>
              <Link to="/login">
                <Button>Get Started</Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Advanced Spray Pattern Analysis
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Optimize your spray applications with our cutting-edge image analysis technology.
              Get precise coverage measurements and detailed insights in seconds.
            </p>
            <Link to="/login">
              <Button size="lg" className="gap-2">
                Start Analyzing Now
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900 w-12 h-12 flex items-center justify-center mb-4">
                  <Droplets className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Precise Analysis</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Advanced image processing algorithms for accurate spray coverage measurement.
                </p>
              </Card>

              <Card className="p-6">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900 w-12 h-12 flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Visual Insights</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Interactive charts and visualizations for better understanding of spray patterns.
                </p>
              </Card>

              <Card className="p-6">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900 w-12 h-12 flex items-center justify-center mb-4">
                  <FileSpreadsheet className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Detailed Reports</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Export comprehensive analysis reports in Excel format for further analysis.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Spray Analyzer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}