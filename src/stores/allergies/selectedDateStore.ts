import { create } from 'zustand'

interface SelectedDate {
  selectedDate : number
  setSelectedDate : (val : number) => void;
}
export const selectedDateStore = create<SelectedDate>((set)=>({
  selectedDate : 1,
  setSelectedDate : (selectedDate) => set({selectedDate})
}))