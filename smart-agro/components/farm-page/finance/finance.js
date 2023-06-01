import AddNewTransaction from "./add-item";
import Balance from "./balance";
import Expenses from "./expenses";
import Income from "./income";
import PieChart from "./chart";

function Finance() {

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

            <div className="d-flex flex-row justify-space-around">
                <Income />

                <Expenses />
            </div>
        </div>
    );
}

export default Finance;