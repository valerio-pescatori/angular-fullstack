import * as express from 'express';
import * as path from 'path';
import setMongo from './mongo';
import setRoutes from './routes';

const app = express();
/* to fix "implicit 'any' type" error */
// import type { ErrorRequestHandler } from 'express';
// const errorHandler: ErrorRequestHandler = (err, req, res, next) => {};
// app.use(errorHandler);

app.set('port', process.env.PORT || 3000);

//rendo statica public
// app.use(express.static(path.join(__dirname, '../front-end/assets/')));

// Setto il router
const main = async (): Promise<any> => {
  try {
    await setMongo();
    setRoutes(app);

    app.listen(app.get('port'), () =>
      console.log(`Server started on port ${app.get('port')}`)
    );
  } catch (err) {
    console.error(err);
  }
};
main();
export { app };
