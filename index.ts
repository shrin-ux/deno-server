import { Application, Router } from "oak";
import { PORT } from "./constants/constants.ts";

const app = new Application();
const router = new Router();


app.use(router.routes());
app.use(router.allowedMethods());


router.get("/", ({request,response}) => {
    response.body = "Hello,Deno World!";
});


console.info(`Server running on port ${PORT}`);
 await app.listen({ port: PORT });