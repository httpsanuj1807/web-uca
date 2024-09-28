import { Home } from "./Pages/Home";
import { Signup } from "./Pages/Signup";


const routes = [
    {
        path : "/",
        element : <Home/>
    },
    {
        path : "/home",
        element : <Home />
    },
    {
        path : "/signup",
        element : <Signup/>
    }
];

export default routes;