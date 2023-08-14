import React, { useState } from "react";

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(new Date());

  const addExpense = () => {
    const newExpense = {
      title,
      amount,
      date,
    };
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  const deleteExpense = (index) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense, i) => i !== index));
  };

  return (
    <div>
        <div className="maininput">
      <h1>Expense Tracker</h1>
      <div className="inputs">
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      
      <input
        type="number"
        placeholder="Amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="date"
        placeholder="Date"
        onChange={(e) => setDate(e.target.value)}
      />
      <div className="submitbutton">
      <button onClick={addExpense}>Add Expense</button>
      </div>
      </div>
      </div>  

    <div className="tablemain">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, i) => (
            <tr key={i}>
              <td>{expense.title}</td>
              <td>{expense.amount}</td>
              <td>{expense.date}</td>
              <td>
                <button onClick={() => deleteExpense(i)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default ExpenseTracker;
