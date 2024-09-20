Instalacion inicial

* npm i -D @babel/preset-env @babel/cli @babel/core 
* npm i @babel/polyfill
* npm i core-js  

compilacion con Babel:
* npx babel src/ -d dist/ --config-file ./babel.config.json
* importante, mantener la estructura ./src para que al compilar se genere la carpeta ./dist con ES5

