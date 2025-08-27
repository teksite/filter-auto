
import {mockNormalizedFilter} from "@/mock/mock-normalized-data";
import {mockNormalizedmiles} from "@/mock/mock-normalized-mile";
import {mockNormalizedCities} from "@/mock/mock-normalized-city";
import {CityType, MileageType, OptionType} from "@/models";

export function getBrands() {
    return Object.values(mockNormalizedFilter.brands);
}

export function getBrandById(brandId: string) {
    return mockNormalizedFilter.brands[brandId] || null;
}

export function getModelsByBrandId(brandId: string) {
    const brand = getBrandById(brandId);
    if (!brand) return [];
    return brand.modelIds.map((id) => mockNormalizedFilter.models[id]);
}

export function getModelById(modelId: string) {
    return mockNormalizedFilter.models[modelId] || null;
}

export function getBrandByModelId(modelId: string) {
    const model = getModelById(modelId);
    if (!model) return null;
    return getBrandById(model.brandId);
}

export function getFavoriteBrands() {
    return Object.values(mockNormalizedFilter.brands).filter((b) => b.favorite === "1");
}

export function getOptionsByModelIdAndYear(modelId: string, year: string): OptionType[] {
    const yearKey = String(year);
    const optionIds = mockNormalizedFilter.productionYears[modelId]?.[yearKey] || [];
    return optionIds.map((id: string) => mockNormalizedFilter.options[id]);
}

// گرفتن سال‌های تولید یک مدل
export function getProductionYearsByModelId(modelId: string): string[] {
    const yearsObj = mockNormalizedFilter.productionYears[modelId] || {};
    return Object.keys(yearsObj);
}


export function getMileageList(): MileageType[] {
    return Object.values(mockNormalizedmiles.mileages);
}

export function getCityList(): CityType[] {
    return Object.values(mockNormalizedCities.cities);
}