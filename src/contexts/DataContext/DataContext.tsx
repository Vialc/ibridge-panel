import React, { createContext, useState } from 'react';

type ClientType = {
  data: string,
  hora: string,
  chamadas_total: number,
  chamadas_falha_operadora: number,
  chamadas_telefone_incorreto: number,
  chamadas_nao_atendida: number,
  chamadas_atendimento_maquina: number,
  chamadas_atendimento_humano: number,
  chamadas_abandono_pre_fila: number,
  chamadas_abandono_fila: number,
  hamadas_atendimento_pa: number,
  ocorrencias_total: number,
  ocorrencias_sem_contato: number,
  ocorrencias_com_contato: number,
  ocorrencias_abordagem: number,
  ocorrencias_fechamento: number
}

type DataType = {
  geral: {
    data: string,
    hora: string,
    clientes: string,
    contas_quantidade: number,
    chamadas_total: number,
    chamadas_falha_operadora: number,
    chamadas_telefone_incorreto: number,
    chamadas_nao_atendida: number,
    chamadas_atendimento_maquina: number,
    chamadas_atendimento_humano: number,
    chamadas_abandono_pre_fila: number,
    chamadas_abandono_fila: number,
    hamadas_atendimento_pa: number,
    ocorrencias_total: number,
    ocorrencias_sem_contato: number,
    ocorrencias_com_contato: number,
    ocorrencias_abordagem: number,
    ocorrencias_fechamento: number
  };
  cliente: {}
}

type PropsDataContext = {
  dataState: DataType;
  setDataState: React.Dispatch<React.SetStateAction<DataType>>;
};

const DEFAULT_VALUE = {
  dataState: {
    geral: {
      data: '',
      hora: '',
      clientes: '',
      contas_quantidade: 0,
      chamadas_total: 0,
      chamadas_falha_operadora: 0,
      chamadas_telefone_incorreto: 0,
      chamadas_nao_atendida: 0,
      chamadas_atendimento_maquina: 0,
      chamadas_atendimento_humano: 0,
      chamadas_abandono_pre_fila: 0,
      chamadas_abandono_fila: 0,
      hamadas_atendimento_pa: 0,
      ocorrencias_total: 0,
      ocorrencias_sem_contato: 0,
      ocorrencias_com_contato: 0,
      ocorrencias_abordagem: 0,
      ocorrencias_fechamento: 0
    },
    cliente: {}
  },
  setDataState: () => {},
}

const DataContext = createContext<PropsDataContext>(DEFAULT_VALUE)

const DataContextProvider = ({ children }: { children: JSX.Element }) => {
  const [dataState, setDataState] = useState(DEFAULT_VALUE.dataState);
  return (
    <DataContext.Provider
      value={{
        dataState,
        setDataState,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export { DataContextProvider };
export default DataContext;