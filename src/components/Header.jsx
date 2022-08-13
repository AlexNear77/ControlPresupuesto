import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto';

const Header = ({presupuesto, setPresupuesto,setIsValidPresupuesto, isValidPresupuesto}) => {
    return ( 
        <header>
            <h1>Planificador de Gatos Personales</h1>
            { isValidPresupuesto ? 
            ( 
                <h1>Presupuestos</h1> 
            ) 
            : 
            (
                <NuevoPresupuesto
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto}
                />
            )}
        </header>
     );
}
 
export default Header;