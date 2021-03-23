const Formulario = () => {

    return (
        <form className="col">
            <div className="form-group row align-items-center">
                <label htmlFor="nombre" className="col-2">Nombre: </label>
                <input type="text" className="form-control col-6" id="nombre" />
                <label htmlFor="anyo" className="col-1">Año: </label>
                <input type="number" className="form-control col" id="anyo" />
            </div>
            <div className="form-group row align-items-center">
                <label htmlFor="plataforma" className="col-2">Plataforma: </label>
                <select id="plataforma" className="form-control col">
                    <option value="">Selecciona plataforma</option>
                    <option value="Netflix">Netflix</option>
                    <option value="HBO">HBO</option>
                    <option value="Prime">Prime</option>
                    <option value="Filmin">Filmin</option>
                </select>
                <button className="btn btn-info col-2" type="submit">Añadir serie</button>
            </div>
        </form>
    );
};

export default Formulario;