import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Header() {
    const history = useHistory();
    return (<>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a class="navbar-brand" href="/">
                    <a src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
                        Rail Nexus
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 hover hover-overlay">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact-us">
                                Contact Us
                            </Link>
                        </li>
                        <li className="nav-item dropdown ">
                            <Link
                                className="nav-link dropdown-toggle"
                                to="/"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Features
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link className="dropdown-item" to="/">
                                        Action
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/">
                                        Another action
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/">
                                        Something else here
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        {/* <li className="nav-item">
                            <Link
                                className="nav-link disabled"
                                to = "/"
                                tabIndex={-1}
                                aria-disabled="true"
                            >
                                Disabled
                            </Link>
                        </li> */}
                    </ul>
                    <div className="d-flex">

                        <button className="btn btn-outline-info" type="submit" onClick={() => history.push("/login")}>
                            Login/Signup
                        </button>
                    </div>
                </div>
            </div>
        </nav>


    </>);
}

export default Header;