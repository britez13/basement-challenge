import { Dispatch, useContext } from 'react'
import {GlobalStateContext} from '../context/globalState'

export const useGlobalContext = () => {    
    return useContext(GlobalStateContext)
}
