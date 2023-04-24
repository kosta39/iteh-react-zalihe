import { Link } from 'react-router-dom'

function Nav() {

    return (
        <div className="nav">
            <Link to={"/"}>Home</Link>
            <Link to={"/filter"}>Filter</Link>
        </div>
    )
}

export default Nav;