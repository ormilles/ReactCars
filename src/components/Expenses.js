import React from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses({ expenses, onUpdateTitle }) {
    return (
        <div className="expenses">
            {expenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    id={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    onUpdateTitle={onUpdateTitle}
                />
            ))}
        </div>
    );
}

export default Expenses;
