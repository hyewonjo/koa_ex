const Koa = require('koa');

const app = new Koa();
const router = require('../routes'); // url 매핑이 다 된 Router 인스턴스 리턴

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(4000, () => {
    console.log('heurm server is listening to port 4000');
});