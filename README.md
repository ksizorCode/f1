# PWA 
Ver ejemplo: https://ksizorcode.github.io/f1/

Web que se puede almacenar en el dispositivo sin necesidad de que cuente con conexión a internet; simulando el funcinonamiento de una app nativa.
Esto obliga a cachear determinados recursos para que se guarden en local. Esto se hará en un archivo llamado service-workers (sw).

## Cómo hacer una PWA básica

### manifest.json
Recoge los valores de la webApp o PWA: Nombre, orientación, descripcion, ruta a iconos, color de fondo, idioma, etc...


### service-workers.js
Recoge una serie de instrucciones para gesgionar los recursos a almacenar en la memoria caché


### Otros archivos necesarios:
Los archivos necearios para que se ejecute la aplicación; esto puede ir desde el index.html, style.css y otros archivos (imágenes, js, json, etc...)
