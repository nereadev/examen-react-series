function App() {
  return (
    <>
      <div className="container">
        <header className="cabecera row">
          <h1 className="col">Mis series</h1>
        </header>
        <section className="crear-serie row">
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
        </section>
        <section className="listado">
          <h3 className="total">Listando 3 series</h3>
          <ul className="series">
            <li className="serie"><img className="poster" src="https://m.media-amazon.com/images/M/MV5BMTQzODk5N2UtYjE4ZC00YWM1LWJkMGYtYmY2NjNjMjIzZDRmXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg" alt="Six feet under" />Six feet under (HBO, año 2001)</li>
            <li className="serie"><img className="poster" src="img/tv.jpg" alt="Six feet under" />Casi feliz (Netflix, año 2020)</li>
            <li className="serie"><img className="poster" src="https://m.media-amazon.com/images/M/MV5BYjg1ZmQ0ZDktMjNhZS00MDJjLTllZTItMmIyYTBkYjM2MzQzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg" alt="Six feet under" />Atypical (Netflix, año 2017)</li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default App;
