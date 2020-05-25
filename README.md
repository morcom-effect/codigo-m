# Aprendiendo HTML

Un documento HTML es un archivo que contiene leguaje marcado de hipertexto. El codigo de HTML esta basado en tags, o palabras escondidas, que proveen instrucciones para formatear el documento. Un tag comienza con un soporte angular `<`. El tag tambien termina con un soporte angular `>` o `/>`. El tag le dice al programa, usualmente un buscador como Google Chrome, que hacer con el texto. Por ejemplo `<a href="http://google.com">Link a Google</a>`indica que el texto sera un link a la pagina de inicio de Google.

HTML es definido por el consorcio de la red mundial (World Wide Web Consortium), una organizacion que rige los estandares del Internet. Cada version de HTML tiene una colleccion de definiciones. Recuerda que el HTML no es un lenguaje de programacion, aunque usualmente nos referimos a el como un lenguaje, un lenguaje de programacion requiere el procesamiento de declaraciones logicas y matematicas. HTML solo permite al desarrollador creat documentos de texto que se vean atractivos y placenteros. En la mayoria de los casos el codigo HTML va acompañado de Javascript y CSS, los cuales cubriremos mas adelante.

## Elementos HTML

Un elemento de HTML como ya vimos anteriormente usualmente consiste en un tag de comienzo y un tag final, con el contenido interno insertado entre ambos tags. A continuacion pueden ver la anatomia de un elemento HTML

    <div>Esto es un elemento de html</div>
   > <div>Esto es un elemento de html</div>

#### Tipo de tag

El tipo de tag describe como se comporta este elemento. El estandar de HTML tiene aproximadamente 250 tags con funcionalidades diferentes.

Puede ver una lista de los elementos en este [enlace](https://developer.mozilla.org/en-US/docs/Web/HTML/Element). Una version en español con descripciones limitadas la encuentra [aqui](https://developer.mozilla.org/es/docs/Web/HTML/Elemento).

#### Atributos

Cada tipo de tag tiene una serie de atributos que permiten modificar su comportamiento. Algunos atributos son comunes entre todos los elementos, como por ejemplo `class`, `style` y `id`.

Para ver que atributos contiene un tag especifico puede buscarlo en los links anteriores y navegar a ese elemto especifico. [Aqui](https://developer.mozilla.org/es/docs/Web/HTML/Elemento/a) esta el enlace al tag `a` como ejemplo.

`a` es un elemento cuya funcionalidad es crear un enlace a otra pagina y tiene un atributo muy importante `href`. Este atributo identifica cual es la pagina a la que se navegara una vez el usuario lo presione.

    <a href="http://google.com">Link a Google</a>
> <a href="http://google.com">Link a Google</a>


#### Contenido interno

El contenido interno es todo lo que se encuentra entre el tag de apertura y el tag final. Este contenido puede ser puro texto, como pueden ser otros elementos HTML. Con el pasar de este curso veran la utilidad de insertar elementos HTML dentro de otros elemntos.

Un ejemplo de esto es un bloque de texto con un enlace:

    <div>Este es mi bloque de texto con un <a href="http://google.com">link a Google</a></div>

> <div>Este es mi bloque de texto con un <a href="http://google.com">link a Google</a></div>

## Estructura de un documento HTML

Un documento HTML se compone de al menos 5 elementos basicos.

### Tipo de documento

El tipo de documento o `doctype` indica que version de html se utiliza. La version defacto es HTML 5, y para propositos de este tutorial solo usaremos esa.

    <!doctype html>

### Elemento HTML principal

El elemento HTML principal simplemente contiene todo el documento, y en casos mas especificos puede determinar algunos atributos como el lenguaje del documento (Expañol, Ingles, etc.) 

    <html> </html>
    
### Encabezado del documento

El encabezado del documento es utilizado para importar documentos que necesitaremos en el cuerpo del documento y contiene algunos atributos de la pagina como el titulo de la pestaña (tab) en el buscador.

    <head>
        <title>A Profile Title</title>
    </head>

### Cuerpo del documento

El cuerpo del documento contiene todo el contenido que sera desplegado al usuario en el buscador.

    <body>
        <div> Todo el texto a desplegar en la pagina. </div>
    </body>
    
### Un documento modelo

Aqui se muestra un documento modelo con titulo y un cuerpo basico.

    <!doctype html>
    <html>
         <head>
            <title> A Profile Title </title>
         </head>
         <body>
            <div> Todo el texto a desplegar en la pagina. </div>
         </body>
    </html>


## Modelo de Objetos del Documento (DOM)

El Modelo de Objetos del Documento (DOM) es una interface para documentos HTML. Proporciona una representación estructural del documento, permitiendo la modificación de su contenido o su presentación visual. Esencialmente, comunica las páginas web con los scripts o los lenguajes de programación. Buscadores como Google Chrome, se encargan de crear un DOM, basado en un file HTML el cual utilizan para desplegarle al usuario.

Vamos a inspecionar el DOM de esta pagina que estas leyendo ahora mismo. Presiona Command+Option+C (Mac) o Control+Shift+C (Windows). Toma tiempo de observar el documento y ver los diferentes tags atributos y contenido interno de los elementos.

![DevTool](https://developers.google.com/web/tools/chrome-devtools/images/panels/elements.png)

# Creando nuestra pagina de presentacion HTML

En este ejercicio crearemos un documeto html basico con texto sin estilos que contendra el contenido de nuestra pagina de presentacion. Al final del ejercicio deberemos tener algo como lo siguiente:

(foto pagina luis)

## Elementos que utilizaremos

| Tag         | Descripcion | HTML      | En el DOM |
| ----------- | ----------- | -----------  | -------- |
| [`div`](https://developer.mozilla.org/es/docs/Web/HTML/Elemento/div) | Unidad basica para contener otros elementos HTML o texto | `<div>Texto</div>` | <div>Texto</div> |
| [`a`](https://developer.mozilla.org/es/docs/Web/HTML/Elemento/a) | Link a otra pagina | `<a href="https://google.com">Link a google</div>` | <a href="https://google.com">Link a google</a> |
| [`button`](https://developer.mozilla.org/es/docs/Web/HTML/Elemento/button) | Boton para presionar en la pagina | `<button onclick="alert('Ouch!')">Presioname Suave</button>` |  No Disponible |
| [`img`](https://developer.mozilla.org/es/docs/Web/HTML/Elemento/img) | Elemento para desplegar una imagen | `<img src="https://secure.img1-fg.wfcdn.com/im/98270403/resize-h800-w800%5Ecompr-r85/8470/84707680/Pokemon+Pikachu+Wall+Decal.jpg" width="50px"></img>` |  <img src="https://secure.img1-fg.wfcdn.com/im/98270403/resize-h800-w800%5Ecompr-r85/8470/84707680/Pokemon+Pikachu+Wall+Decal.jpg" width="50px"></img> |
| [`script`](https://developer.mozilla.org/es/docs/Web/HTML/Elemento/script) | Elemento para importar un codigo de Javascript | `<script src="./calculator.js"></script>` |  No disponible |
| [`link`](https://developer.mozilla.org/es/docs/Web/HTML/Elemento/link) | Elemento para importar estilos CSS entre otros | `<link rel="stylesheet" href="./calculator.css">` |  No disponible |

## Crear documento html basico y abrirlo en el buscador Chrome

1. Abre el directorio `aprendiendo-html` en Visual Studio Code

2. Abre el documento `profile.html` en el buscador y observa la pagina en blanco

3. Copia y pega el documento html modelo en el archivo y guarda el documento (Ctrl+S Windows - CMD+S Mac)

    <!doctype html>
    <html>
         <head>
            <title> A Profile Title </title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
         </head>
         <body>
            <div> Todo el texto a desplegar en la pagina. </div>
             <a href="http://google.com" target="_blank" class="fa fa-linkedin"></a>
             <a href="http://google.com" target="_blank" class="fa fa-github"></a>
             <a href="http://google.com" class="fa fa-calculator"></a>
         </body>
    </html>
    
4. Reinicia el documento en el buscador Chrome para ver los cambios reflejados (Ctrl+R Windows - CMD+R Mac)

5 Crea tu contenido e insertalo con los tags correspondientes en el documento html.

6. Para insertar la foto en el documento necesitas copiar y pegar la foto al lado del archivo profile.html.

7. Cambiale el nombre a la foto a `me.jpg` o `me.png` dependiendo de la extension del archivo.

8. Añade el tag de la imagen apuntando a la foto copiada

    <img src="./me.jpg" style="width: 80px;" alt="Entra la descripcion de la foto si deseas">





