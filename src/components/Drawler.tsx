import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Drawler() {
  const [openMenu, setOpenMenu] = useState(false)

  function handleMenu() {
    setOpenMenu(!openMenu)
  }
  return (
    <div className={ openMenu ? `transition-transform col-start-1 row-start-1 row-end-3 w-1/6 absolute z-10` : `transition-transform col-start-1 col-end-2 row-start-1 row-end-3`}>
      <nav className="flex relative h-[96vh] mt-[1vh] rounded ml-3  w-10/12 bg-slate-500">
        <div className='absolute flex justify-center w-full mt-3 hover:cursor-pointer' onClick={handleMenu} >
          <MenuIcon />
        </div>
        <ul className="flex items-center flex-col w-full justify-center mb-28 gap-9">
          <li><Link to="/"><DashboardIcon />{openMenu ? 'Principal' : ''}</Link></li>
          <li><Link to="/tree"><AccountTreeIcon />{openMenu ? 'Clientes' : ''}</Link></li>
          <li><a href="#"><PhoneCallbackIcon />{openMenu ? 'Chamadas' : ''}</a></li>
          <li><a href="#"><CreateNewFolderIcon />{openMenu ? 'OcorrĂȘncias' : ''}</a></li>
          <li><a href="#"><LogoutIcon />{openMenu ? 'Sair' : ''}</a></li>
        </ul>
      </nav>
    </div>
  )
}
