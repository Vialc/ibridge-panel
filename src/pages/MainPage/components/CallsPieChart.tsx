import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useContext } from 'react';
import { Pie } from 'react-chartjs-2';
import ClientContext from '../../../contexts/DataClient/ClientContext';
import GeneralContext from '../../../contexts/DataGeneral/GeneralContext';

ChartJS.register(ArcElement, Tooltip, Legend);



export function CallsPieChart() {
  const general = useContext(GeneralContext)
  const client = useContext(ClientContext)

   const data = {
    labels: ['Falha operadora', 'telefone incorreto', 'não atendida', 'atendimento maquina', 'atendimento humano', 'abandono pré-fila', 'abandono fila', 'atendimento PA'],
    datasets: [
      {
        label: '# of Votes',
        data: client.clientCallsForPieChart.length > 0 ? client.clientCallsForPieChart : general.generalCallsForPieChart,
        backgroundColor: [
          '#ac26a9',
          '#4ab871',
          '#f97868',
          '#ec9124',
          '#67a8c5',
          '#978d78',
          '#767c91',
          '#541f27',
        ],
        borderColor: [
          '#ac26a9',
          '#4ab871',
          '#f97868',
          '#ec9124',
          '#67a8c5',
          '#978d78',
          '#767c91',
          '#541f27',
        ],
        borderWidth: 1,
      },
    ],
  };


  return (
    <Pie data={data} />
  )
}
