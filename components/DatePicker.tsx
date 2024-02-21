import { useUserQuery } from "@/queries/fetch-user";
import { useState } from "react";
import useTaskDate from "@/hooks/useTaskStatus";

const DatePicker = () => {
  const { data: fetchedUser } = useUserQuery();

  const {selectDate, setSelectDate} = useTaskDate();

  const handleSelectDate = (e: any) => {
    setSelectDate(e.target.value);
  };



  return (
    <div>
      <label htmlFor="date" className="text-white text-xl">Select task by date: </label>
      <input
        className="rounded-md py-1 px-1"
        type="date"
        id="date"
        name="date"
        value={selectDate}
        onChange={handleSelectDate}
      />
    </div>
  );
};

export default DatePicker;
