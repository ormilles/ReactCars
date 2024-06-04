import './ExpenseForm.css';
import React, { useState } from "react";

const ExpenseForm = ({ onAddExpense }) => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [error, setError] = useState("");

    const titleChangeHandler = (event) => setTitle(event.target.value);
    const amountChangeHandler = (event) => setAmount(event.target.value);
    const dateChangeHandler = (event) => setDate(event.target.value);

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            id: Math.random().toString(),
            title,
            amount: +amount,
            date: new Date(date),
        };

        onAddExpense(expenseData);

        setTitle("");
        setAmount("");
        setDate("");
        setError("");
    };

    return (
        <form onSubmit={submitHandler}>
            {error && <p className="error">{error}</p>}
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={amount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2024-12-31"
                        value={date}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add new item</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
