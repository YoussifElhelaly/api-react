import { Link, NavLink } from 'react-router-dom'
import './navbar.css'

export default function Nav() {
    return (
        <nav>
            <div className="container">
                <Link to="/">Nav</Link>
                <ul>
                    <li>
                        <NavLink to={"/"}>
                            home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contact"}>
                            contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/categories"}>
                            All Categories
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}