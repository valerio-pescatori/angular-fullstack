const exphbs = require('express-handlebars');
import * as express from 'express';
import * as path from 'path';

const app = express();
app.set('port', process.env.PORT || 3000);

//rendo statica public
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () =>
  console.log(`Server started on port ${app.get('port')}`)
);
