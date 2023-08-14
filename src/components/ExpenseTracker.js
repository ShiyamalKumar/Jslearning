import React, { useState } from "react";

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);

  const addExpense = () => {
    const newExpense = {
      title,
      amount,
    };
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  const deleteExpense = (index) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense, i) => i !== index));
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
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
      <button onClick={addExpense}>Add Expense</button>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, i) => (
            <tr key={i}>
              <td>{expense.title}</td>
              <td>{expense.amount}</td>
              <td>
                <button onClick={() => deleteExpense(i)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTracker;
