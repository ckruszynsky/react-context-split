export type Country = {
  __typename: "country";
  name: string;
  id: string;
  flagUrl: string;
  independent: boolean;
  unMember: boolean;
  region: string;
  capital: string;
  subregion: string;
};
