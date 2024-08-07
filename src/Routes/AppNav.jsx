import { Routes, Route, Navigate } from 'react-router-dom';
import { Inicio } from '../pages/Inicio';
import { Nosotros } from '../pages/Nosotros';
import { LaFinca } from '../pages/LaFinca';
import { FinDeSemana } from '../pages/FinDeSemana';
import { TalleresPedagogicos } from '../pages/TalleresPedagogicos';
import { Ubicacion } from '../pages/Ubicacion';
import { Donaciones } from '../pages/Donaciones';
import { Contacto } from '../pages/Contacto';

export const AppNav = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigate to='/inicio' />} />
			<Route path='/inicio' element={<Inicio />} />
			<Route path='/nosotros' element={<Nosotros />} />
			<Route path='/lafinca' element={<LaFinca />} />
			<Route path='/findesemana' element={<FinDeSemana />} />
			<Route path='/talleres' element={<TalleresPedagogicos />} />
			<Route path='/ubicacion' element={<Ubicacion />} />
			<Route path='/donaciones' element={<Donaciones />} />
			<Route path='/contacto' element={<Contacto />} />
		</Routes>
	);
};
