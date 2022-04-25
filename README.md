# Full Stack Angular App

Sviluppata sulle orme di [DavideViolante/Angular-Full-Stack](https://github.com/DavideViolante/Angular-Full-Stack)

## Developement mode

Eseguendo il comando `npm run-script dev` si runneranno [concorrentemente](https://github.com/open-cli-tools/concurrently) i seguenti comandi:

1. `mongod`: Starta il daemon di MongoDB, quindi un database MongoDB locale.
2. `ng serve --open`: Builda e serve l'app Angular, rebuildando ad ogni cambiamento, apre inoltre l'app nel browser.
3. `tsc -w -p back-end`: Compila i file TypeScript in JavaScript dalla cartella `back/end` nella cartella `dist/back-end`, inoltre osserva i cambiamenti.
4. `nodemon dist/back-end/app.js`: [Nodemon](https://github.com/remy/nodemon) sarta l'applicazione Node mentre osserva gli aggiornamenti, restartando quando avvengono.

## Production mode

Eseguendo il comando `npm run-script prod` si runneranno [concorrentemente](https://github.com/open-cli-tools/concurrently) i seguenti comandi:

1. `mongod`: Come sopra.
2. `ng build`: Builda l'app Angular.
3. `tsc -p back-end`: Come sopra, ma senza osservare i cambiamenti.
4. `node dist/back-end/app.js`: Starta il server back-end utilizzando Node.
