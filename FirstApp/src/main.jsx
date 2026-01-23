import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Arr_Str from './Components/Render_StaticArr_Str'
import Arr_obj from './Components/Arr_Obj.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Arr_Str/>
    <Arr_obj/> */}
  </StrictMode>
)
