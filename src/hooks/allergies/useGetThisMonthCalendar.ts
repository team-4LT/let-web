const isLeapYear = (year: number): boolean =>
  (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

export const useGetThisMonthProps = () => {
  const now = new Date()
  const month = now.getMonth();
  const year = now.getFullYear();

  const daysThisMonth = []

  const lastDay = month ===1
                ? (isLeapYear(year) ? 29 : 28)
                : [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];

  for(let i=1; i<=lastDay; i++){
    daysThisMonth.push(i)
  }

  const startWeek = new Date(year, month, 1).getDay();

  return {
    startWeek,
    daysThisMonth,
    year,
    month
  }
}