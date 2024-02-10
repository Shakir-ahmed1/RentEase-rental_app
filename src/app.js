const express = require('express');
const morgan = require('morgan');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const { connectDb } = require('./api/config/database');
const openapiSpecification = require('./swagger/swaggerConfig')
const userRoutes = require('./api/routes/User');
require('./api/helpers/envPath');
const erroHandler = require('./api/middelware/userErrorHandler');

const app = express();
app.use(morgan('tiny'));
app.use([express.json(), express.urlencoded({ extended: true })]);
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

// routes
app.use('/api/users', userRoutes);
app.use(erroHandler);

connectDb().then(app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`app listening at port ${process.env.PORT}`);
}));