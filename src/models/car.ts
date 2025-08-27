export type OptionType = {
    id: string;
    title: string;
};

export type ModelType = {
    id: string;
    title: string;
    brandId: string;
};

export type BrandType = {
    id: string;
    title: string;
    logo: string;
    favorite: "0" | "1";
    modelIds: string[];
};

export type ProductionYearsType = Record<
    string,
    Record<string, string[]>
>;

export type normalizedFilterData = {
    brands: Record<string, BrandType>;
    models: Record<string, ModelType>;
    options: Record<string, OptionType>;
    productionYears: ProductionYearsType;
};