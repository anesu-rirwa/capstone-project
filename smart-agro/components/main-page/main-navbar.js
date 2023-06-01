import Link from "next/link";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid ms-5">
                    <label className="navbar-brand text-success">Smart Agro</label>

                    <div className="" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" href="/home">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" href="#products">Products</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" href="#contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="me-5">
                        <Link href="/login" className="btn btn-sm bg-primary text-white me-2">Login</Link>  
                        
                        <label>/</label>

                        <Link href="/signup" className="btn btn bg-success text-white ms-2">Sign Up</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;