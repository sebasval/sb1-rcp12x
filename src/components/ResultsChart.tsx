import { useEffect, useRef } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Analysis {
  file_name: string;
  coverage_percentage: number;
}

interface ResultsChartProps {
  data: Analysis[];
}

export function ResultsChart({ data }: ResultsChartProps) {
  const chartData = {
    labels: data.map(d => d.file_name),
    datasets: [
      {
        label: 'Coverage %',
        data: data.map(d => d.coverage_percentage),
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: 'Coverage Percentage',
        },
      },
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Spray Coverage Analysis Results',
      },
    },
  };

  return (
    <div className="w-full aspect-[2/1]">
      <Bar data={chartData} options={options} />
    </div>
  );
}