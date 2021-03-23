# App series

Aquí tienes una app React sólo con una maqueta (con Bootstrap ya cargado). El listado de series que ves es falso, tendrás que programar la app para que el usuario pueda ir creando series desde el formulario y que vayan apareciendo en el listado de abajo. El mensaje "Listando 3 series" tiene que reflejar el número real de series que hay.

Crea las variables de estado que creas necesarias, teniendo en cuenta que tanto las series como la función para añadir una serie tienen que estar en un Context.

La lista de plataformas es fija, es la que ves en el HTML del select y puedes dejarla así.

## Fase 1: sin imagen

Tienes que dividir la interfaz en componentes. Además de App, tiene que haber:
- un componente para el formulario
- un componente para el total de series
- un componente para el listado de series
- un componente para <ins>cada</ins> serie

Cuando el usuario envíe el formulario:
- Primero se debe comprobar que no exista ya en el listado una serie con el mismo título. Si existe, no ocurrirá nada.
- Si no existe, se debe añadir la nueva serie a la lista de series.

## Fase 2: con imagen
Cada serie debe tener una imagen asociada. Cuando el usuario envíe el formulario de nueva serie, la app se conectará a la API de [OMDb](http://www.omdbapi.com/) para buscar la imagen de la serie. Si la API no devuelve ninguna imagen, la nueva serie llevará la imagen genérica (img/tv.jpg). Si la API devuelve una imagen (propiedad "Poster"), la nueva serie llevará dicha imagen.

El endpoint para pedir los datos es `http://www.omdbapi.com?apikey=TUAPIKEY&t=NOMBREDELASERIE`. Recuerda que el nombre de la serie se lo tienes que enviar codificado con `encodeURI()`.
