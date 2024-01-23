import cityCounty from "@/assets/api/CityCount.json";
import { City } from "@/typescript/types/cityTown";

const cities: string[] = cityCounty.map((city: City) => city.CityName);

const getTown = (changed: string) => {
  const findCity = cityCounty.find((city) => {
    return city.CityName === changed;
  });
  return findCity;
};

export { cities, getTown };
