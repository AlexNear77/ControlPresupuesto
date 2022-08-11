const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {
    return ( 
        <div className="contenedor-presupuesto contenedor sombra">
            <form className="formulario" >
                <div className="campo">
                    <label > Definir Presupuesto</label>

                    <input 
                        type="text"
                        className="nuevo-presupuesto" 
                        placeholder="Agrega tu presupuesto"
                        value={presupuesto}
                        onChange={e => setPresupuesto(e.target.value)}
                    />
                </div>

                <input type="submit" value="Añadir"/>
            </form>

        </div>
     );
}
 
export default NuevoPresupuesto;