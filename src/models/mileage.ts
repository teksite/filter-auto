export type MileageType = {
    id: string;
    title: string;
};


export type normalizedMileageTypeFilterData = {
    mileages: Record<string, MileageType>;

};