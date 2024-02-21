import { create } from "zustand";

interface TaskDateProps {
  selectDate: string;
  setSelectDate: (date: string)=>void;
}

const useTaskDate = create<TaskDateProps>((set)=>({
  selectDate: "",
  setSelectDate: (date: string) => set({selectDate: date})
}))

export default useTaskDate;