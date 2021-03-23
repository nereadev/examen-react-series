import { useCallback, useEffect, useState } from "react";

const useFetch = url => {
    const [datosApi, setDatosApi] = useState(null);
    const pedirDatos = useCallback(async url => {
        const resp = await fetch(url);
        const datosJson = await resp.json();
        setDatosApi(datosJson);
    }, []);
    return (
        { datosApi, pedirDatos }
    );
};

export default useFetch;