export interface Competitor {
  id: string;
  name: string;
  age: string;
  education: string;
  competitionsWon: string[] | null;
  competedIn: string[] | null;
  profileImgUrl: string;
}
