function Navbar({setStatus}) {

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <ul className="navbar-nav d-flex flex-row justify-content-around">
                    <li className="nav-item">
                        <button onClick={() => {setStatus("all")}} className="nav-link btn p-2" aria-current="page">All</button>
                    </li>

                    <li className="nav-item">
                        <button onClick={() => {setStatus("income")}} className="nav-link btn p-2">Income</button>
                    </li>

                    <li className="nav-item">
                        <button onClick={() => {setStatus("expenses")}} className="nav-link btn p-2">Expenses</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;