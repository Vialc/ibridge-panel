import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { useData } from '../../../hooks/useData';
import { ClientType } from '../../../types/DataTypes'

const rows =
[
  { id: 1, chamadas_total: 'Hello', chamadas_falha_operadora: 'World' },
  { id: 2, chamadas_total: 'DataGridPro', chamadas_falha_operadora: 'is Awesome' },
  { id: 3, chamadas_total: 'MUI', chamadas_falha_operadora: 'is Amazing' },
];

const columns: GridColDef[] = [
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

const { data, error, isLoading } = useData()

const datas = data![0].clientes //JSON.parse(localStorage.getItem('recentData')!)

// const rows: GridRowsProp = Object.values(datas).map((value, index) => {
//   const {
//     chamadas_total,
//     chamadas_falha_operadora,
//     chamadas_telefone_incorreto,
//     chamadas_nao_atendida,
//     chamadas_atendimento_maquina,
//     chamadas_atendimento_humano,
//     chamadas_abandono_pre_fila,
//     chamadas_abandono_fila,
//     chamadas_atendimento_pa,
//     ocorrencias_total,
//     ocorrencias_sem_contato,
//     ocorrencias_com_contato,
//     ocorrencias_abordagem,
//     ocorrencias_fechamento,
//   } = value
//   return (
    
//     [{id: index + 1,
//       chamadas_total,
//       chamadas_falha_operadora,
//       chamadas_telefone_incorreto,
//       chamadas_nao_atendida,
//       chamadas_atendimento_maquina,
//       chamadas_atendimento_humano,
//       chamadas_abandono_pre_fila,
//       chamadas_abandono_fila,
//       chamadas_atendimento_pa,
//       ocorrencias_total,
//       ocorrencias_sem_contato,
//       ocorrencias_com_contato,
//       ocorrencias_abordagem,
//       ocorrencias_fechamento, }]
//   )
// })

function chama() {
  console.log(Object.values(datas))
  console.log(datas)
}

  return (
    <section className='h-80 w-full'>
      <button onClick={chama}>PEGAR OBJETOS</button>
      <DataGrid rows={rows} columns={columns} />
    </section>
  );
}
