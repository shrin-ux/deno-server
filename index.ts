import { Application, Router } from "oak";

const app = new Application();
const router = new Router();
const PORT = 8000;


app.use(router.routes());
app.use(router.allowedMethods());


router.get("/", ({request,response}) => {
    response.body = "Hello, World!";
});


console.info(`Server running on port ${PORT}`);
 await app.listen({ port: PORT });