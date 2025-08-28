export interface RankList {
    menuId: number;
    menuName: string;
    menuScore: number;
    currentRank: number;
}

export interface RankInfo {
    menus: RankList[];
    total: number;
    page: number;
    size: number;
}
