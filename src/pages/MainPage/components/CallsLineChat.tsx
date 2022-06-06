import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Total de Chamadas por dia',
    },
  },
};

const labels = ['16/05/2022', '17/05/2022', '18/05/2022', '19/05/2022', '20/05/2022'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: '#ac26a9',
      backgroundColor: '#ac26a9',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: '#4ab871',
      backgroundColor: '#4ab871',
    },
    {
      label: 'Dataset 3',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: '#f97868',
      backgroundColor: '#f97868',
    },
    {
      label: 'Dataset 4',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: '#ec9124',
      backgroundColor: '#ec9124',
    },
    {
      label: 'Dataset 5',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: '#67a8c5',
      backgroundColor: '#67a8c5',
    },
    {
      label: 'Dataset 6',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: '#978d78',
      backgroundColor: '#978d78',
    },
    {
      label: 'Dataset 7',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: '#767c91',
      backgroundColor: '#767c91',
    },
    {
      label: 'Dataset 8',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: '#541f27',
      backgroundColor: '#541f27',
    },
  ],
};

export function CallsLineChat() {
  return (
    <Line options={options} data={data} />
  )
}
