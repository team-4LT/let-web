// 윤년인지 판단
const isLeapYear = (year: number): boolean =>
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

// 이번 달 정보 가져오기
export const useGetThisMonthProps = () => {
    const now = new Date(); // 현재 날짜
    const month = now.getMonth(); // 현재 월 (+1 해 줘야함)
    const year = now.getFullYear(); // 현재 연도

    const daysThisMonth = []; // 이번 달 일들을 담을 배열 (1~31 사이)

    // 이번 달 마지막 날짜 계산
    const lastDay =
        month === 1 // 만약 2월이면 (index 기준 1)
            ? isLeapYear(year)
                ? 29
                : 28 // 윤년이면 29일, 아니면 28일
            : [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]; // 그 외의 달은 배열에서 해당 월의 일 수를 가져오기

    // 1일부터 마지막 날짜까지 배열에 추가
    for (let i = 1; i <= lastDay; i++) {
        daysThisMonth.push(i); // 해당 월의 마지막 날짜까지 배열에 추가
    }

    // 이번 달 1일의 요일을 구하기 (0: 일요일 ~ 6: 토요일)
    const startWeek = new Date(year, month, 1).getDay();

    return {
        startWeek, // 이번 달 1일의 요일
        daysThisMonth, // 이번 달 날짜 리스트
        year, // 올해 연도
        month, // 현재 월
    };
};
