const Router = require('koa-router');
const router = new Router();

const {
    CompanyController
} = require('../controllers');

router.get('/companies', CompanyController.create);

module.exports = router;