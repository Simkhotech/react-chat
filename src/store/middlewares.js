import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

const productionMiddlewares = [thunkMiddleware];
const devMiddlewares = [...productionMiddlewares, loggerMiddleware];

const middlewaresList = process.env.NODE_ENV === 'production' ? productionMiddlewares : devMiddlewares;

export default middlewaresList;
