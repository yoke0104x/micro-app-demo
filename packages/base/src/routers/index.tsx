/*
 * @description: layout
 * @author: Yoke
 * @Date: 2023-12-29 10:39:24
 */

import { useRoutes } from "react-router-dom";
import router from "./router";

const Router = () => {
    return useRoutes(router);
}
export default Router;