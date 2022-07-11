# Typescript bases

Bases para el aprendizaje de typescript


### Bases
Dentro de la carpeta bases se encuentra ejemplos dividido por secciones sobre las bases de typescript.

1. Tipos basicos - Funciones
2. Objetos literales
3. Clases
4. Interfaces
5. Genéricos



### Instalación

Para instalar typescript solo en el proyecto
```bash
npm install --save-dev typescript
```

Para los ejemplos se debe instalar typescript de manera global:
```bash
npm install -g typescript
```

Una vez instalado, verificamos
```
tsc --version
```

Para compilar el codigo de typescript a su equivalente en js se necesita ejecutar el comando:
```
tsc -w
```
En este caso cada archivo tendra su equivalente a js con el mismo nombre pero con diferente extensión




### Puesta en ejecución

Para ver los resultados de codigo se debe abrir el archivo `index.html`.

Posterior para ver una sección en específico configurar el script correspondiente a la sección dentro del archivo index.html

```html

<body>
  <h1 class="title">Curso de Typescript</h1>
  <p class="description">JS con superpoderes</p>
  <script src="./app.js"></script>
  <!-- <script src="./1tipos-funciones/index.js"></script> -->

  ...
</body>

```


