export type Eater = {
    eaterId: number;
    user: {
        userId: number;
        studentId: number;
        realName: string;
    };
    eaten: boolean;
};
