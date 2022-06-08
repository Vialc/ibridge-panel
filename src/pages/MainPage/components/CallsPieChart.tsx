import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { DataType } from '../../../types/DataTypes';

ChartJS.register(ArcElement, Tooltip, Legend);



export function CallsPieChart() {
  let numberArrayOrigin: number[] = []
  const [dataArray, setDataArray] = useState(numberArrayOrigin);

  function loadData(data: DataType) {

    const dataGrouped = _.groupBy(data, (value) => value.geral.data)

    const chamadas_falha_operadora = _.map(dataGrouped, (value, key) => _.sum([_.sumBy(dataGrouped[key], (v) => v.geral.chamadas_falha_operadora)]))
    const chamadas_telefone_incorreto = _.map(dataGrouped, (value, key) => _.sum([_.sumBy(dataGrouped[key], (v) => v.geral.chamadas_telefone_incorreto)]))
    const chamadas_nao_atendida = _.map(dataGrouped, (value, key) => _.sum([_.sumBy(dataGrouped[key], (v) => v.geral.chamadas_nao_atendida)]))
    const chamadas_atendimento_maquina = _.map(dataGrouped, (value, key) => _.sum([_.sumBy(dataGrouped[key], (v) => v.geral.chamadas_atendimento_maquina)]))
    const chamadas_atendimento_humano = _.map(dataGrouped, (value, key) => _.sum([_.sumBy(dataGrouped[key], (v) => v.geral.chamadas_atendimento_humano)]))
    const chamadas_abandono_pre_fila = _.map(dataGrouped, (value, key) => _.sum([_.sumBy(dataGrouped[key], (v) => v.geral.chamadas_abandono_pre_fila)]))
    const chamadas_abandono_fila = _.map(dataGrouped, (value, key) => _.sum([_.sumBy(dataGrouped[key], (v) => v.geral.chamadas_abandono_fila)]))
    const chamadas_atendimento_pa = _.map(dataGrouped, (value, key) => _.sum([_.sumBy(dataGrouped[key], (v) => v.geral.chamadas_atendimento_pa)]))

    
    setDataArray([
      _.sum(chamadas_falha_operadora),
      _.sum(chamadas_telefone_incorreto),
      _.sum(chamadas_nao_atendida),
      _.sum(chamadas_atendimento_maquina),
      _.sum(chamadas_atendimento_humano),
      _.sum(chamadas_abandono_pre_fila),
      _.sum(chamadas_abandono_fila),
      _.sum(chamadas_atendimento_pa),
    ])
  } 


  useEffect(() => {
    const metaData = JSON.parse(localStorage.getItem('recentData')!)

    loadData(metaData)

  }, [])

   const data = {
    labels: ['Falha operadora', 'telefone incorreto', 'não atendida', 'atendimento maquina', 'atendimento humano', 'abandono pré-fila', 'abandono fila', 'atendimento PA'],
    datasets: [
      {
        label: '# of Votes',
        data: dataArray,
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
