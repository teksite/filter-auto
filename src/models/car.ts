export type BrandType = {
    id: string,
    title:string,
    logo:string,
    favorite:"0"|"1",
    modelIds:string[],
}

export type ModelType= {
    id: string,
    title:string,
    brandId:string,
    years:string[],
}

export type YearType= {
    id: string,
    title:string,
    ModelId:string,
    options:string[],
}

export type OptionType= {
    id: string,
    title:string,
    yearId:string,
    usesId:string[],
}

export type UseType= {
    id: string,
    title:string,
}

export type CityType= {
    id: string,
    title:string,
}

export type LicensesFitlerData = {
    brands: Record<string, BrandType>;
    models: Record<string, ModelType>;
    years: Record<string, YearType>;
    options: Record<string, OptionType>;
    uses: Record<string, UseType>;
    cities: Record<string, CityType>;

};