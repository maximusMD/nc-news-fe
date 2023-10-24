import {Link} from "react-router-dom"

export default function NavBar() {
    return (
        <nav>
            <ul>
            <Link to="/articles"> Articles </Link>
            <Link to="/topics">Topics</Link>
            <Link to="/users">Users</Link>
            </ul>
        </nav>
    )
}