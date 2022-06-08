import { useEffect, useState } from 'react';
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
import { useData } from '../../../hooks/useData';
import { DataType } from '../../../types/DataTypes';
import _ from 'lodash';

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
  const dataStorage = useData()
  const [chartData, setChartData] = useState({});
 // const [totalCalls, setTotalCalls] = useState({});

  let labels = Object.keys(chartData).map((key, index) => key)

  labels = labels.reverse()

  function loadData(data: DataType) {
    const dayValues = _.groupBy(data, (value) =>  value.geral.data)
    setChartData(dayValues)

    // const totalCallsValues = Object.keys(chartData).map((key) => _.get(chartData, `${key}[0].geral.chamadas_total`))  

    // setTotalCalls(totalCallsValues)
  }

  useEffect(() => {
    const metaData = JSON.parse(localStorage.getItem('recentData')!) 
    
    loadData(metaData)
    
  }, [])
  

  const data = {
    labels,
    datasets: [
      {
        label: 'Total de Ligações',
        data: Object.keys(chartData).map((key) => _.get(chartData, `${key}[0].geral.chamadas_total`)).reverse(),
        borderColor: '#ac26a9',
        backgroundColor: '#ac26a9',
      },
    ],
  };


  return (
    <Line options={options} data={data} />
  )
}
