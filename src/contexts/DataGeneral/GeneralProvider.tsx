import _ from "lodash"
import { useEffect, useState } from "react"
import { useData } from "../../hooks/useData"
import { DataDayType, DataType } from "../../types/DataTypes"
import GeneralContext from "./GeneralContext"


const GeneralContextProvider = ({ children }: { children: JSX.Element }) => {
  const [generalOcurrencesForBarChart, setGeneralOcurrencesForBarChart] = useState([] as number[])
  const [generalOcurrencesForLineChart, setgeneralOcurrencesForLineChart] = useState([] as DataDayType[][])
  const [generalCallsForPieChart, setgeneralCallsForPieChart] = useState([] as number[])
  const [generalCallsForLineChart, setgeneralCallsForLineChart] = useState([] as DataDayType[][])
  const [daysList, setdaysList] = useState([] as string[])

  const { data, error, isLoading } = useData()

  if (isLoading) return <div>Loading...</div>

  if (data) {
    const dataString = JSON.stringify(data)
    localStorage.setItem('recentData', dataString)
  }

  function loadData(data: DataType) {
    const dataGrouped = _.groupBy(data, (value) => value.geral.data)

    /*Montagem do array de datas */
    const dataList = Object.keys(dataGrouped).map((key, index) => key).reverse()
    setdaysList(dataList)

    /*Tratamento de dados para o Gráfico em linha de chamadas*/
    const chamadas_total = Object.keys(dataGrouped).map((key) => _.get(dataGrouped, `${key}[0].geral.chamadas_total`)).reverse()
    setgeneralCallsForLineChart(chamadas_total)

    /*Tratamento de dados para o Gráfico pizza de chamadas */
    const chamadas_falha_operadora = _.map(dataGrouped, (value, key) => _.sum([_.sumBy(dataGrouped[key], (v) => v.geral.chamadas_falha_operadora)]))
    const chamadas_telefone_incorreto = _.map(dataGrouped, (value, key) => _.sum([_.sumBy(dataGrouped[key], (v) => v.geral.chamadas_telefone_incorreto)]))
    const chamadas_nao_atendida = _.map(dataGrouped, (value, key) => _.sum([_.sumBy(dataGrouped[key], (v) => v.geral.chamadas_nao_atendida)]))
    const chamadas_atendimento_maquina = _.map(dataGrouped, (value, key) => _.sum([_.sumBy(dataGrouped[key], (v) => v.geral.chamadas_atendimento_maquina)]))
    const chamadas_atendimento_humano = _.map(dataGrouped, (value, key) => _.sum([_.sumBy(dataGrouped[key], (v) => v.geral.chamadas_atendimento_humano)]))
    const chamadas_abandono_pre_fila = _.map(dataGrouped, (value, key) => _.sum([_.sumBy(dataGrouped[key], (v) => v.geral.chamadas_abandono_pre_fila)]))
    const chamadas_abandono_fila = _.map(dataGrouped, (value, key) => _.sum([_.sumBy(dataGrouped[key], (v) => v.geral.chamadas_abandono_fila)]))
    const chamadas_atendimento_pa = _.map(dataGrouped, (value, key) => _.sum([_.sumBy(dataGrouped[key], (v) => v.geral.chamadas_atendimento_pa)]))
    setgeneralCallsForPieChart([
      _.sum(chamadas_falha_operadora),
      _.sum(chamadas_telefone_incorreto),
      _.sum(chamadas_nao_atendida),
      _.sum(chamadas_atendimento_maquina),
      _.sum(chamadas_atendimento_humano),
      _.sum(chamadas_abandono_pre_fila),
      _.sum(chamadas_abandono_fila),
      _.sum(chamadas_atendimento_pa),
    ])

    /*Tratamento de dados para o Gráfico em linha de ocorrências*/
    const ocorrencias_total = Object.keys(dataGrouped).map((key) => _.get(dataGrouped, `${key}[0].geral.ocorrencias_total`)).reverse()
    setgeneralOcurrencesForLineChart(ocorrencias_total)

    /*Tratamento de dados para o gráfico em barra de ocorrências*/
    const ocorrencias_sem_contato = _.map(dataGrouped, (value, key) => _.sum([_.sumBy(dataGrouped[key], (v) => v.geral.ocorrencias_sem_contato)]))
    const ocorrencias_com_contato = _.map(dataGrouped, (value, key) => _.sum([_.sumBy(dataGrouped[key], (v) => v.geral.ocorrencias_com_contato)]))
    const ocorrencias_abordagem = _.map(dataGrouped, (value, key) => _.sum([_.sumBy(dataGrouped[key], (v) => v.geral.ocorrencias_abordagem)]))
    const ocorrencias_fechamento = _.map(dataGrouped, (value, key) => _.sum([_.sumBy(dataGrouped[key], (v) => v.geral.ocorrencias_fechamento)]))

    setGeneralOcurrencesForBarChart([
      _.sum(ocorrencias_sem_contato),
      _.sum(ocorrencias_com_contato),
      _.sum(ocorrencias_abordagem),
      _.sum(ocorrencias_fechamento),
    ])
  }

  useEffect(() => {
    const metaData = JSON.parse(localStorage.getItem('recentData')!)

    loadData(metaData)

  }, [])

  return (
    <GeneralContext.Provider value={{generalCallsForLineChart, generalCallsForPieChart, generalOcurrencesForBarChart, generalOcurrencesForLineChart, daysList}} >
      {children}
    </GeneralContext.Provider>
  )
}

export { GeneralContextProvider };