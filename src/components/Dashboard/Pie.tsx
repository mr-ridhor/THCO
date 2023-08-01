import React from 'react';
import Chart from 'react-apexcharts';

interface PieProps {
  data: number[];
  labels: string[];
}

const Pie: React.FC<PieProps> = ({ data, labels }) => {
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'donut',
    },
    labels: labels,
    colors: ['red','blue','yellow'],
    legend: {
      position: 'top',
    },
  };

  const series = data.map((value, index) => ({
    name: labels[index],
    data: value,
  }));

  return <Chart options={options} series={series} type="donut" height={100} />;
};

export default Pie;
