/*
 * @description: 功能
 * @author: Yoke
 * @Date: 2023-12-29 10:46:43
 */
import { NavLink } from 'react-router-dom';
import Routes from '../routers';
import "./index.css";
const Layout = () => {
    return (
        <div>
            <nav>
                <ul className='ul'>
                    <li>
                        <NavLink to='/'>主页</NavLink>
                    </li>
                    <li>
                        <NavLink to='/list'>列表页面</NavLink>
                    </li>
                    <li>
                        <NavLink to='/popularize'>vue子应用</NavLink>
                    </li>
                </ul>
            </nav>
            <Routes />
        </div>
    )
}
export default Layout;