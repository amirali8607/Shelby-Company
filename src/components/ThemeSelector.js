import './ThemeSelector.css'
import {useTheme} from '../hooks/useTheme'
import modeIcon from '../assist/modeIcon.svg'
const themeArray = ['darkred','darkblue','darkgreen']
export default function ThemeSelector() {
   const { changeColor,changeMode,mode } = useTheme()
   const toggleMode = () => {
      changeMode(mode === 'dark' ? 'light' : 'dark')
   }
   return (
   <div className="themeSlc">
      <div className="themeTog">
         <img src={modeIcon} onClick={toggleMode} style={ {
            filter:mode === 'dark' ? 'invert(100%)' : 'invert(20%)'
         } }/>
      </div>
      <div className="themeBtn">
         {themeArray.map(color => (
            <div
               key={color}
               onClick={() => changeColor(color)}
               style={ {
                  background:color
               } }
            />
         ))}
      </div>
   </div>
  )
}
