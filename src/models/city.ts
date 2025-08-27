export type CityType = {
    id: string;
    title: string;
};

export type normalizedCityFilterData = {
    cities: Record<string, CityType>;
};