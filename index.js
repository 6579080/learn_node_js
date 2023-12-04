
const PORT = process.env.PORT || 5000;
// const Router = require('./framework/Router');
const Application = require('./framework/Application');
const userRouter = require('./src/user-router');

const app = new Application();





app.addRouter(userRouter);


app.listen(PORT, () => console.log(`server started on PORT ${PORT}`));






