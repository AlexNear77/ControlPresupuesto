import { useState, useEffect} from 'react'

export const Filtros = ({setFiltro, filtro}) => {
  return (
    <div className='filtros sombra contenedor'>
        <div className="campo">
            <label >Filtrar Gastos</label>
            <select
                value={filtro}
                onChange={e => setFiltro(e.target.value)}
            >
                        <option value="">-- Todas las categorias --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
            </select>
        </div>
    </div>
  )
}
