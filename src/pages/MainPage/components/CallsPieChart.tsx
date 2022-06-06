import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Falha operadora', 'telefone incorreto', 'não atendida', 'atendimento maquina', 'atendimento humano', 'abandono pré-fila', 'abandono fila', 'atendimento PA'],
  datasets: [
    {
      label: '# of Votes',
      data: [8001, 2093, 860, 9570, 1804, 14, 516, 1288],
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

export function CallsPieChart() {
  return (
    <Pie data={data} />
  )
}
