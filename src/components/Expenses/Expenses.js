import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList'
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

  

  return (
    <li>
      <Card className='expenses'>
        <ExpensesFilter
          year={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
}

export default Expenses;
