import { createContext, useReducer } from "react";
export const ThemeContext = createContext()
const themeReducer = (state,action) => {
   switch (action.type) {
      case "CHANGE_COLOR":
         return {...state,color: action.payload}
      case "CHANGE_MODE":
         return {...state,mode: action.payload}
      default:
         return state
   }
}
//اینجا کامپوننت اصلی ما به جای چیلدرن مینشیند
export function ThemeFunction({children}){
   const [state,dispatch] = useReducer(themeReducer,{
      color:'darkred',
      mode:'dark'
   })
   const changeColor = (color) => {
      //این مورد برای راهنمای تم ردیوسر هست <تایپ و پی لود
      dispatch({type:'CHANGE_COLOR',payload:color})
   }
   const changeMode = (mode) => {
      dispatch({type:'CHANGE_MODE',payload:mode})
   }
   return(
    <ThemeContext.Provider value={ {...state,changeColor,changeMode} }>
      {children}
    </ThemeContext.Provider>
   )
}