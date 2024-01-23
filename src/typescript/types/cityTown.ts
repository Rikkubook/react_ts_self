type City = {
  CityName: string;
  CityEngName: string;
  AreaList: Area[];
};

type Area = {
  ZipCode: string;
  AreaName: string;
  AreaEngName: string;
};

export type { City, Area };
