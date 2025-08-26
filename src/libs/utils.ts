
// گرفتن همه برندها
import {mockNormalizedFilter} from "@/mock/mock-normalized-data";

export function getBrands() {
    return Object.values(mockNormalizedFilter.brands);
}

// گرفتن یک برند با id
export function getBrandById(brandId: string) {
    return mockNormalizedFilter.brands[brandId] || null;
}

// گرفتن همه مدل‌های یک برند
export function getModelsByBrandId(brandId: string) {
    const brand = getBrandById(brandId);
    if (!brand) return [];
    return brand.modelIds.map((id) => mockNormalizedFilter.models[id]);
}

// گرفتن یک مدل با id
export function getModelById(modelId: string) {
    return mockNormalizedFilter.models[modelId] || null;
}

// گرفتن برند از روی مدل
export function getBrandByModelId(modelId: string) {
    const model = getModelById(modelId);
    if (!model) return null;
    return getBrandById(model.brandId);
}

// گرفتن برندهای محبوب
export function getFavoriteBrands() {
    return Object.values(mockNormalizedFilter.brands).filter((b) => b.favorite === "1");
}