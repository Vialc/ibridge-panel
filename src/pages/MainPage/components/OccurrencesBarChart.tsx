import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useContext } from 'react';
import GeneralContext from '../../../contexts/DataGeneral/GeneralContext';
import ClientContext from '../../../contexts/DataClient/ClientContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
      text: 'Ocorrências',
    },
  },
};

const labels = ['Sem contato', 'Com contato', 'Abordagem', 'Fechamento'];



export default function OccurrencesBarChart() {
  const general = useContext(GeneralContext)
  const client = useContext(ClientContext)
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: client.clientOcurrencesForBarChart.length > 0 ? client.clientOcurrencesForBarChart : general.generalOcurrencesForBarChart,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <Bar options={options} data={data} />
  )
}
