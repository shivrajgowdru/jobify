import React,{useState, useReducer ,useContext} from "react";

const initialState = {
  loading:false,
  showAlert:false,
  alertType:"",
  alertType:"",
}

const AppContext = React.createContext()
const AppProvider = ({children}) => {
  const [state,setState] = useState(initialState)

 return(
   <AppContext.Provider value={{...state}}>
   {children}
   </AppContext.Provider>
 )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider , initialState , useAppContext }