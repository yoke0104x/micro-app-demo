import Home from "../views/Home";
import List from "../views/List";
import VueApp from "../views/Vue";

/*
 * @description: 路由
 * @author: Yoke
 * @Date: 2023-12-29 10:39:37
 */
export default [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/list",
        element: <List />,
    },
    {
        path: "/popularize/*",
        element: <VueApp />
    }
]