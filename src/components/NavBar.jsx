import {Link} from "react-router-dom"

export default function NavBar() {
    return (
        <nav className="NavBar">
            {/* <ul> */}
            <Link to="/">Home</Link>
            <Link to="/articles">Articles</Link>
            <Link to="/topics">Topics</Link>
            <Link to="/account">Account</Link>
            {/* </ul> */}
        </nav>
    )
}