import { Routes, Route } from "react-router-dom";
import { Inicio } from "../pages/Inicio";
import { Nosotros } from "../pages/Nosotros";
import { LaFinca } from "../pages/LaFinca";
import { Accesibilidad } from "../pages/Accesibilidad";

export const AppNav = () => {

  return (  
      <Routes>
        <Route path="/*" element={<Inicio/>} />
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="/lafinca" element={<LaFinca/>} />
      </Routes>

  )
}
