import { data } from "./data";

function expenses() {
    const expenses = data.filter(expense => { return expense.status === "expense"})

    const renderExpenses = () => {
        return expenses.map(expense => { return (
            <tr>
                <th scope="row">{expense.date}</th>
                <td>{expense.name}</td>
                <td>{expense.price}</td>
            </tr>
        )
        })
    }

    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Item</th>
                        <th scope="col">Amount</th>
                    </tr>
                </thead>

                <tbody>
                    {renderExpenses()}    
                </tbody>
            </table>
        </div>
    );
}

export default expenses;