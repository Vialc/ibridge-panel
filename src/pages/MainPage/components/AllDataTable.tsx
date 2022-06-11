import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useContext } from 'react';
import ClientContext from '../../../contexts/DataClient/ClientContext';


const columns: GridColDef[] = [
  {field: 'cliente', headerName: 'Cliente'},
  { field: 'chamadas_total', headerName: 'Total de Chamadas' },
  { field: 'chamadas_falha_operadora', headerName: 'Falha Operadora' },
  { field: 'chamadas_telefone_incorreto', headerName: 'Telefone Incorreto' },
  { field: 'chamadas_nao_atendida', headerName: 'Não Atendida' },
  { field: 'chamadas_atendimento_maquina', headerName: 'Atendimento Máquina' },
  { field: 'chamadas_atendimento_humano', headerName: 'Atendimento Humano' },
  { field: 'chamadas_abandono_pre_fila', headerName: 'Abandono Pré-fila' },
  { field: 'chamadas_abandono_fila', headerName: 'Abandono Fila' },
  { field: 'chamadas_atendimento_pa', headerName: 'Atendimento PA' },
  { field: 'ocorrencias_total', headerName: 'Total de Ocorrências' },
  { field: 'ocorrencias_sem_contato', headerName: 'Ocorrências sem Contato' },
  { field: 'ocorrencias_com_contato', headerName: 'Ocorrências com contato' },
  { field: 'ocorrencias_abordagem', headerName: 'Ocorrências Abordagem' },
  { field: 'ocorrencias_fechamento', headerName: 'Ocorrências Fechamento' },
];

export function AllDataTable() {

  const client = useContext(ClientContext) 

  return (
    <section className='h-80 w-full'>
      <DataGrid rows={client.totalClientsRows} columns={columns} />
    </section>
  );
}
