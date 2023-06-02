import AddNewTransaction from "./add-item";
import Balance from "./balance";
import Expenses from "./expenses";
import Income from "./income";
import PieChart from "./chart";
import Navbar from "./navbar";
import React, {useState} from 'react';
import expenses from "./expenses";

function Finance() {
    const [status, setStatus] = useState("all");

    const renderView = () => {
        if (status === "expenses") return <Expenses />

        else if (status === "income") return <Income />

        else return 
    }

    return (
        <div>
            <div>
                <div>
                    <PieChart />
                </div>

                <div>
                    <AddNewTransaction />

                    <Balance />
                </div>
            </div>

            <div>
                <Navbar setStatus={setStatus} />
            
                {renderView()}
            </div>
        </div>
    );
}

export default Finance;