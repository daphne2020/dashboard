export interface TNewBoardData {
  name: string;
  items: TItems;
}
[];

export interface TItems {
  complete: number;
  id: number | string;
  priority: number;
  title: string | any;
  chat: number;
  attachment: number;
  assignees:
    | {
        avt: string;
      }[]
    | never[];
}
[];
