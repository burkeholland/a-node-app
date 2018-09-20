import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import * as path from 'path';
import * as logger from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as favicon from 'serve-favicon';

import index from './routes/index';
import users from './routes/users';
import api from './routes/api';

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/api', api);

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  const err = new Error('Not Found');
  res.status(400);
  next(err);
});

// patch error object to account for status
interface Error {
  status?: number;
  message: string;
}

// error handler
app.use((err: Error, req: Request, res: Response) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
