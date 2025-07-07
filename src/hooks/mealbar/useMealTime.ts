export const useMealTime = () => {
    const now = new Date();
    const hour = now.getHours();
    const date = new Date().toISOString();

    const condition = hour < 10 ? "아침" : hour < 15 ? "점심" : "저녁";
    return { condition, date };
};
