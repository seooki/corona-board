import React from "react";
import { useEffect, useState } from "react";
import getDate from "../../services/getDate";
import "../../styles/SelectDate.scss";

export const SelectDate = () => {
  const [date, setDate] = useState("");
  const [year, setYear] = useState([]);
  const [month, setMonth] = useState([]);
  const [day, setDay] = useState([]);

  useEffect(() => {
    const date = getDate();
    setDate(date);
    console.log(date);
  }, []);

  function dateChange<T>(e: T): T {
    console.log(e.target.value);
  }

  return (
    <div className="addDate">
      <input type="date" onChange={dateChange}></input>
      <button className="submitDate" type="submit">
        확인
      </button>
    </div>
  );
};
