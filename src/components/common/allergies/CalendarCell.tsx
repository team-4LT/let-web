import MealCell from "@/components/common/allergies/MealCell";
import { MealData } from "@/types/props/allergies/mealData";

interface CalendarCellProps {
  day: number | null
  index: number
  weekIdx: number
  month: number
  selectedDate: number | undefined
  mealMap: Map<number, MealData>
  setSelectedDate: (day: number) => void
  setSelectedMeal: (mealId: number) => void
}

const CalendarCell = ({
  day,
  index,
  weekIdx,
  month,
  selectedDate,
  mealMap,
  setSelectedDate,
  setSelectedMeal,
}: CalendarCellProps) => {
  if (day === null) {
    return (
      <MealCell
        key={`${weekIdx}-${index}`}
        isSelected={false}
        mealId={-1}
        mealDate=""
      />
    );
  }

  const meal = mealMap.get(day);
  if (meal) {
    return (
      <MealCell
        key={meal.mealId}
        mealId={meal.mealId}
        mealDate={meal.mealDate.slice(8, 10)}
        calorie={meal.calorie}
        menus={meal.menus}
        isSelected={selectedDate === day}
        onClick={() => {
          setSelectedDate(day);
          setSelectedMeal(meal.mealId);
        }}
      />
    );
  }

  return (
    <MealCell
      key={`${month}-${day}`}
      isSelected={selectedDate === day}
      mealId={-1}
      mealDate={day.toString()}
    />
  );
};

export default CalendarCell;