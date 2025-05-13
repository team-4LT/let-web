export const MealTime = () => {
    const now = new Date();
    const hour = now.getHours();

    const condition = hour < 9 ? "breakfast" : hour < 14 ? "lunch" : "dinner";
    return {condition};
}