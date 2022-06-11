import { useEffect, useState } from "react";
import ClientContext from "./ClientContext";
import { ClientRowType, ClientType, DataDayType, DataType } from "../../types/DataTypes";
import _ from "lodash";

const ClientContextProvider = ({ children }: { children: JSX.Element }) => {
  const [uniqueClientRow, setUniqueClientRow] = useState({} as ClientRowType)
  const [totalClientsRows, setTotalClientsRows] = useState([] as ClientRowType[])
  const [clientOcurrencesForBarChart, setClientOcurrencesForBarChart] = useState([] as number[])
  const [clientCallsForPieChart, setClientCallsForPieChart] = useState([] as number[])
  const [clientCallsForLineChart, setClientCallsForLineChart] = useState([] as DataDayType[][])
  const [clientOcurrencesForLineChart, setClientOcurrencesForLineChart] = useState([] as DataDayType[][])

  const [filter, setFilter] = useState('')



  const rowsAfter: any = []
  const [rows, setRows] = useState(rowsAfter)
  const [clientList, setClientList] = useState([''])


  const [somaChamadasTotal, setSomaChamadasTotal] = useState([0])
  const [somaChamadasFalhaOperadora, setSomaChamadasFalhaOperadora] = useState([0])
  const [somaChamadasTelefoneIncorreto, setSomaChamadasTelefoneIncorreto] = useState([0])
  const [somaChamadasNaoAtendida, setSomaChamadasNaoAtendida] = useState([0])
  const [somaChamadasAtendimentoMaquina, setSomaChamadasAtendimentoMaquina] = useState([0])
  const [somaChamadasAtendimentoHumano, setSomaChamadasAtendimentoHumano] = useState([0])
  const [somaChamadasAbandonoPreFila, setSomaChamadasAbandonoPreFila] = useState([0])
  const [somaChamadasAbandonoFila, setSomaChamadasAbandonoFila] = useState([0])
  const [somaChamadasAtendimentoPa, setSomaChamadasAtendimentoPa] = useState([0])
  const [somaOcorrenciasTotal, setSomaOcorrenciasTotal] = useState([0])
  const [somaOcorrenciasSemContato, setSomaOcorrenciasSemContato] = useState([0])
  const [somaOcorrenciasComContato, setSomaOcorrenciasComContato] = useState([0])
  const [somaOcorrenciasAbordagem, setSomaOcorrenciasAbordagem] = useState([0])
  const [somaOcorrenciasFechamento, setSomaOcorrenciasFechamento] = useState([0])

  let clientsRow: string[] = []

  function loadData(data: DataType) {           
    const dataGrouped = _.groupBy(data, (value) => value.geral.data)
  
    clientsRow = Object.keys(_.groupBy(data, (value) => Object.keys(value.clientes)))[0].split(",")
    setClientList(clientsRow)
  
  
    const arrayClientes = Object.keys(dataGrouped).map((key) => _.get(dataGrouped, `${key}[0].clientes`))
  
    for (let i = 0; i < clientsRow.length; i++) {
      const clientValues = Object.keys(arrayClientes).map((key) => _.get(arrayClientes, `${key}.${clientsRow[i]}`))
      
      rowsAfter.push(clientValues)
    }
  
    setRows(rowsAfter)
  
    const clientValuesPerDay = Object.keys(arrayClientes).map((key) => _.get(arrayClientes, `${key}.${clientsRow[0]}`))
  
  
    const soma_chamadas_total = _.map(rows, (value, key) => _.sum([_.sumBy(value, (v: ClientType) => v.chamadas_total)]))
    const soma_chamadas_falha_operadora = _.map(rows, (value, key) => _.sum([_.sumBy(value, (v: ClientType) => v.chamadas_falha_operadora)]))
    const soma_chamadas_telefone_incorreto = _.map(rows, (value, key) => _.sum([_.sumBy(value, (v: ClientType) => v.chamadas_telefone_incorreto)]))
    const soma_chamadas_nao_atendida = _.map(rows, (value, key) => _.sum([_.sumBy(value, (v: ClientType) => v.chamadas_nao_atendida)]))
    const soma_chamadas_atendimento_maquina = _.map(rows, (value, key) => _.sum([_.sumBy(value, (v: ClientType) => v.chamadas_atendimento_maquina)]))
    const soma_chamadas_atendimento_humano = _.map(rows, (value, key) => _.sum([_.sumBy(value, (v: ClientType) => v.chamadas_atendimento_humano)]))
    const soma_chamadas_abandono_pre_fila = _.map(rows, (value, key) => _.sum([_.sumBy(value, (v: ClientType) => v.chamadas_abandono_pre_fila)]))
    const soma_chamadas_abandono_fila = _.map(rows, (value, key) => _.sum([_.sumBy(value, (v: ClientType) => v.chamadas_abandono_fila)]))
    const soma_chamadas_atendimento_pa = _.map(rows, (value, key) => _.sum([_.sumBy(value, (v: ClientType) => v.chamadas_atendimento_pa)]))
    const soma_ocorrencias_total = _.map(rows, (value, key) => _.sum([_.sumBy(value, (v: ClientType) => v.ocorrencias_total)]))
    const soma_ocorrencias_sem_contato = _.map(rows, (value, key) => _.sum([_.sumBy(value, (v: ClientType) => v.ocorrencias_sem_contato)]))
    const soma_ocorrencias_com_contato = _.map(rows, (value, key) => _.sum([_.sumBy(value, (v: ClientType) => v.ocorrencias_com_contato)]))
    const soma_ocorrencias_abordagem = _.map(rows, (value, key) => _.sum([_.sumBy(value, (v: ClientType) => v.ocorrencias_abordagem)]))
    const soma_ocorrencias_fechamento = _.map(rows, (value, key) => _.sum([_.sumBy(value, (v: ClientType) => v.ocorrencias_fechamento)]))
    
    setSomaChamadasTotal(soma_chamadas_total)
    setSomaChamadasFalhaOperadora(soma_chamadas_falha_operadora)
    setSomaChamadasTelefoneIncorreto(soma_chamadas_telefone_incorreto)
    setSomaChamadasNaoAtendida(soma_chamadas_nao_atendida)
    setSomaChamadasAtendimentoMaquina(soma_chamadas_atendimento_maquina)
    setSomaChamadasAtendimentoHumano(soma_chamadas_atendimento_humano)
    setSomaChamadasAbandonoPreFila(soma_chamadas_abandono_pre_fila)
    setSomaChamadasAbandonoFila(soma_chamadas_abandono_fila)
    setSomaChamadasAtendimentoPa(soma_chamadas_atendimento_pa)
    setSomaOcorrenciasTotal(soma_ocorrencias_total)
    setSomaOcorrenciasSemContato(soma_ocorrencias_sem_contato)
    setSomaOcorrenciasComContato(soma_ocorrencias_com_contato) 
    setSomaOcorrenciasAbordagem(soma_ocorrencias_abordagem)
    setSomaOcorrenciasFechamento(soma_ocorrencias_fechamento)
  


    const finalRows: ClientRowType[] =[]
    if(filter.length > 1){
      const index = clientList.indexOf(filter, 0)
      const newRow = {
        id: index,
        cliente: clientList[index],
        chamadas_total: somaChamadasTotal[index],
        chamadas_falha_operadora: somaChamadasFalhaOperadora[index],
        chamadas_telefone_incorreto: somaChamadasTelefoneIncorreto[index],
        chamadas_nao_atendida: somaChamadasNaoAtendida[index],
        chamadas_atendimento_maquina: somaChamadasAtendimentoMaquina[index],
        chamadas_atendimento_humano: somaChamadasAtendimentoHumano[index],
        chamadas_abandono_pre_fila: somaChamadasAbandonoPreFila[index],
        chamadas_abandono_fila: somaChamadasAbandonoFila[index], 
        chamadas_atendimento_pa: somaChamadasAtendimentoPa[index],
        ocorrencias_total: somaOcorrenciasTotal[index],
        ocorrencias_sem_contato: somaOcorrenciasSemContato[index],
        ocorrencias_com_contato: somaOcorrenciasComContato[index],
        ocorrencias_abordagem: somaOcorrenciasAbordagem[index],
        ocorrencias_fechamento: somaOcorrenciasFechamento[index]
      }
      finalRows.push(newRow)

      setClientOcurrencesForBarChart([
        soma_ocorrencias_sem_contato[index],
        somaOcorrenciasComContato[index],
        somaOcorrenciasAbordagem[index],
        somaOcorrenciasFechamento[index]
      ])

      setClientCallsForPieChart([
        somaChamadasFalhaOperadora[index],
        somaChamadasTelefoneIncorreto[index],
        somaChamadasNaoAtendida[index],
        somaChamadasAtendimentoMaquina[index],
        somaChamadasAtendimentoHumano[index],
        somaChamadasAbandonoPreFila[index],
        somaChamadasAbandonoFila[index],
        somaChamadasAtendimentoPa[index],
      ])

      const clientValuesPerDay = Object.keys(arrayClientes).map((key) => _.get(arrayClientes, `${key}.${clientsRow[index]}`))
      const clientTotalCalls = Object.values(clientValuesPerDay).map((value, index) => _.get(clientValuesPerDay, `${index}.chamadas_total`)).reverse()
      const clientTotalOcurrences = Object.values(clientValuesPerDay).map((value, index) => _.get(clientValuesPerDay, `${index}.ocorrencias_total`)).reverse()
      setClientCallsForLineChart(clientTotalCalls)
      setClientOcurrencesForLineChart(clientTotalOcurrences)

    }else {
      for (let i = 0; i < clientList.length; i++) {
        const newRow = {
          id: i,
          cliente: clientList[i],
          chamadas_total: somaChamadasTotal[i],
          chamadas_falha_operadora: somaChamadasFalhaOperadora[i],
          chamadas_telefone_incorreto: somaChamadasTelefoneIncorreto[i],
          chamadas_nao_atendida: somaChamadasNaoAtendida[i],
          chamadas_atendimento_maquina: somaChamadasAtendimentoMaquina[i],
          chamadas_atendimento_humano: somaChamadasAtendimentoHumano[i],
          chamadas_abandono_pre_fila: somaChamadasAbandonoPreFila[i],
          chamadas_abandono_fila: somaChamadasAbandonoFila[i], 
          chamadas_atendimento_pa: somaChamadasAtendimentoPa[i],
          ocorrencias_total: somaOcorrenciasTotal[i],
          ocorrencias_sem_contato: somaOcorrenciasSemContato[i],
          ocorrencias_com_contato: somaOcorrenciasComContato[i],
          ocorrencias_abordagem: somaOcorrenciasAbordagem[i],
          ocorrencias_fechamento: somaOcorrenciasFechamento[i]
        }
        finalRows.push(newRow)
    }
    setClientOcurrencesForBarChart([])
    setClientCallsForPieChart([])
    setClientCallsForLineChart([])
    setClientOcurrencesForLineChart([])
   }
   
   setTotalClientsRows(finalRows)

  }

  useEffect(() => {
    const metaData = JSON.parse(localStorage.getItem('recentData')!) 
  
   loadData(metaData)
  
  }, [filter])

  return (
    <ClientContext.Provider value={{clientOcurrencesForLineChart, totalClientsRows, uniqueClientRow, clientOcurrencesForBarChart, clientList, setFilter, clientCallsForPieChart, clientCallsForLineChart}} >
      {children}
    </ClientContext.Provider>
  )
}

export { ClientContextProvider };