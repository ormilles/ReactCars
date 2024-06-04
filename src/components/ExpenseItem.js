import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from './Card';
import React from "react";

function ExpenseItem({ id, title, amount, date, onUpdateTitle }) {

    const clickFunc = () => {
        const newTitle = "---";
        onUpdateTitle(id, newTitle);
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
            <button onClick={clickFunc}>Change</button>
        </Card>
    );
}

export default ExpenseItem;
