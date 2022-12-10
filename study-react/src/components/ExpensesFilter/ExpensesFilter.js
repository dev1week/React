import React, { useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const [enteredFilterData, setEnteredFilterData] = useState("");

  const fliterChangeHandler = (event) => {
    setEnteredFilterData(event.target.value);
  };

  props.onSaveFilterData(enteredFilterData.toString());
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={fliterChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
