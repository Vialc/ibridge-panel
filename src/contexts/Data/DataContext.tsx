import { createContext } from 'react';
import { PropsDataContext } from '../../types/DataTypes';

const DataContext = createContext<PropsDataContext>(null!)


export default DataContext;