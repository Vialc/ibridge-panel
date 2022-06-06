
export function Drawler() {
  return (
    <div className="col-start-1 col-end-2 row-start-1 row-end-3">
      <nav className="flex h-[96vh] mt-[1vh] rounded ml-3  w-10/12 bg-slate-500">
        <ul className="flex items-center flex-col w-full justify-center mb-28 gap-9">
          <li><a href="#">Principal</a></li>
          <li><a href="#">Clientes</a></li>
          <li><a href="#">Chamadas</a></li>
          <li><a href="#">Ocorrências</a></li>
          <li><a href="#">Sair</a></li>
        </ul>
      </nav>
    </div>
  )
}
