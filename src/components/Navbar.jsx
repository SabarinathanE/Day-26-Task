import { Link } from "react-router-dom";

export default function All() {
    return (
        <div>
            <nav className="navbar navbar-light bg-dark">
                <div className="row" style={{width: "100%"}}>
                    <div className="col-4 navbar-title" style={{color:"white"}}>
                        <h3>Courses</h3>
                    </div>
                    <div className="navbar-all col-8">
                    <ul className="nav">
                    <li className="nav-item">
                    <Link to="/" style={{color:"white"}}>
                    <a className="nav-link active" aria-current="page" href="#" style={{color:"white"}}>
                        <h5>All</h5>
                        </a>
                    </Link>
                            
                        </li>
                        <li className="nav-item">
                        <Link to="/Database" style={{color:"white"}}>
                    <a className="nav-link active" aria-current="page" href="#" style={{color:"white"}}>
                        <h5>Database</h5>
                        </a>
                    </Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/DataScience" style={{color:"white"}}>
                    <a className="nav-link active" aria-current="page" href="#" style={{color:"white"}}>
                        <h5>DataScience</h5>
                    </a>
                    </Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/FullStackDevelopment" style={{color:"white"}}>
                    <a className="nav-link active" aria-current="page" href="#" style={{color:"white"}}>
                        <h5>FullStackDevelopment</h5>
                        </a>
                    </Link>
                        </li>
                    </ul>
                    </div>
            </div>
            </nav>
        </div>
    )
}

// 
// <Link to="/all" style={{color:"white"}}><h5></h5></Link>
// <Link to="/all" style={{color:"white"}}><h5></h5></Link>
// <Link to="/all" style={{color:"white"}}><h5></h5></Link>