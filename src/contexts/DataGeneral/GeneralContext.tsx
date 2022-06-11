import { createContext } from 'react';
import { PropsGeneralContext } from '../../types/DataTypes';

const GeneralContext = createContext<PropsGeneralContext>(null!)


export default GeneralContext;