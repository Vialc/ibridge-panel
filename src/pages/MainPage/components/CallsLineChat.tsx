import { useContext } from 'react';
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
import GeneralContext from '../../../contexts/DataGeneral/GeneralContext';
import ClientContext from '../../../contexts/DataClient/ClientContext';

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


export function CallsLineChat() {

  const general = useContext(GeneralContext)
  const client = useContext(ClientContext)

  let labels = general.daysList;
  

  const data = {
    labels,
    datasets: [
      {
        label: 'Total de Ligações',
        data: client.clientCallsForLineChart.length > 0 ? client.clientCallsForLineChart : general.generalCallsForLineChart,
        borderColor: '#ac26a9',
        backgroundColor: '#ac26a9',
      },
      {
        label: 'Total de Ocorrências',
        data: client.clientOcurrencesForLineChart.length > 0 ? client.clientOcurrencesForLineChart : general.generalOcurrencesForLineChart,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };


  return (
    <Line options={options} data={data} />
  )
}
