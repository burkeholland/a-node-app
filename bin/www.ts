import * as errorHandler from 'errorhandler';

import app from '../app';

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(
    `  App is running at http://localhost:${port}`,
  );
  console.log('  Press CTRL-C to stop\n');
});

export default server;
