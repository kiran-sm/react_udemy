import React from "react";
import "./ExpenseDate.css";
import Card from "./Card";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "short" });
  const year = props.date.toLocaleString("en-US", { year: "numeric" });
  const day = props.date.toLocaleString("en-US", { day: "numeric" });

  return (
    <Card className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </Card>
  );
}

export default ExpenseDate;
