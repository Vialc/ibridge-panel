import { createContext } from "react";
import { PropsClientContext } from "../../types/DataTypes";

const ClientContext = createContext<PropsClientContext>(null!)


export default ClientContext;