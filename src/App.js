import Formulario from "./componentes/Formulario";
import ListadoSeries from "./componentes/ListadoSeries";
import TotalSeries from "./componentes/TotalSeries";
import ContextoFuncion from "./contextos/ContextoFuncion";
import ContextoSeries from "./contextos/ContextoSeries";

function App() {
  return (
    <>
      <ContextoSeries.Provider>
        <ContextoFuncion.Provider>
          <div className="container">
            <header className="cabecera row">
              <h1 className="col">Mis series</h1>
            </header>
            <section className="crear-serie row">
              <Formulario />
            </section>
            <section className="listado">
              <TotalSeries />
              <ListadoSeries />
            </section>
          </div>
        </ContextoFuncion.Provider>
      </ContextoSeries.Provider>
    </>
  );
}

export default App;
