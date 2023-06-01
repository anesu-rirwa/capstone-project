import Link from "next/link";

import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import GrassSharpIcon from "@mui/icons-material/GrassSharp";
import Inventory2SharpIcon from "@mui/icons-material/Inventory2Sharp";

import Dashboard from "@/components/farm-page/dashboard";
import Crops from "@/components/farm-page/crops";
import Livestock from "@/components/farm-page/livestock";
import Inventory from "@/components/farm-page/inventory";
import Finance from "@/components/farm-page/finance/finance";

function FarmHome() {
    let view = "finance";

    const renderView = (option) => {
        view = option;
    }

    const farmContent = () => {
        if (view === "crops") {
            return <Crops />
        }
        else if (view === "livestock") {
            return <Livestock />
        }
        else if (view === "inventory") {
            return <Inventory />
        }
        else if (view === "finance") {
            return <Finance />
        }
        else return <Dashboard />
    }
        
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <div className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <span className="fs-5 d-none d-sm-inline">Bindura Farm</span>
                        </div>

                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            
                            <li className="nav-item">
                                <button onClick={() => renderView("dashboard")} className="nav-link align-middle px-0">
                                    <HomeIcon className="text-white"/>    
                                    <span className="ms-1 d-none d-sm-inline text-white">Home</span>
                                </button>
                            </li>
                            
                            <li>
                                <button onClick={() => renderView("crops")} className="nav-link px-0 align-middle">
                                    <GrassSharpIcon className="text-success"/>
                                    <span className="ms-1 d-none d-sm-inline text-white">Crops</span></button>
                            </li>

                            <li>
                                <button href="#" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-table text-success"></i> <span className="ms-1 d-none d-sm-inline text-white">Livestock</span></button>
                            </li>

                            <li>
                                <button href="#" className="nav-link px-0 align-middle">
                                    <Inventory2SharpIcon className="text-warning"/>
                                    <span className="ms-1 d-none d-sm-inline text-white">Inventory</span></button>
                            </li>                            

                            <li>
                                <button href="#" className="nav-link px-0 align-middle">
                                    <AccountBalanceWalletIcon className="text-primary" />
                                    <span className="ms-1 d-none d-sm-inline text-white">Finances</span></button>
                            </li>
                            
                        </ul>

                        <hr/>
                        
                        <div className="dropdown pb-4">
                            <Link href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <AccountCircleSharpIcon />
                                <span className="d-none d-sm-inline mx-1">Account</span>
                            </Link>

                            <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                                <li>
                                    <button className="dropdown-item" href="#">New project...</button>
                                </li>
                                
                                <li>
                                    <button className="dropdown-item" href="#">Settings</button>
                                </li>
                                
                                <li>
                                    <button className="dropdown-item" href="#">Profile</button>
                                </li>
                                
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>

                                <li>
                                    <button className="dropdown-item" href="#">Sign out</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col py-3">
                    {farmContent()}
                </div>
            </div>
        </div>
    );
}

export default FarmHome;