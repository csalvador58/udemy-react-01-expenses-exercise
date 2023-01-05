import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const expensesContent = (filteredExpenses.length > 0) ?
     filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    )) : <p>No expenses found.</p>;

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          year={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
}

export default Expenses;
