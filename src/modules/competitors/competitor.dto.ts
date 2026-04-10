export interface CompetitorRequestDTO {
  name: string;
  email: string;
  phone: string;
  age: string;
  education: string;
  competedIn: string[] | null;
  profileImgUrl: string | null;
}

export interface CompetitorDatabaseDTO {
  id: string;
  name: string;
  email: string;
  phone: string;
  age: string;
  education: string;
  competedIn: string[] | null;
  profileImgUrl: string | null;
  createdAt: string;
}
