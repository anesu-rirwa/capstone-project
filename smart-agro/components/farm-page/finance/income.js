import {data} from './data'

function Income() {
    const incomes = data.filter(income => { return income.status === "income"})

    const renderIncome = () => {
        return incomes.map(income => { return (
            <tr>
                <th scope="row">{income.date}</th>
                <td>{income.name}</td>
                <td>{income.price}</td>
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
                    {renderIncome()}    
                </tbody>
            </table>
        </div>
    );
}

export default Income;