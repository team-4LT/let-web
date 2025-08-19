import { create } from 'zustand'

interface SelectedMeal {
  selectedMeal : number
  setSelectedMeal : (val : number) => void;
}
export const selectedMealStore = create<SelectedMeal>((set)=>({
  selectedMeal : -1,
  setSelectedMeal : (selectedMeal) => set({selectedMeal})
}))