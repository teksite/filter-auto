"use client";

import { BrandType, ModelType } from "@/models";
import { mockNormalizedFilter } from "@/mock/mock-normalized-data";

type Props = {
    selectedBrand: BrandType | null;
    selectedModel: ModelType | null;
    selectedYear: number | null;
    selectedOption: string | null;
};

export default function SummaryStep({ selectedBrand, selectedModel, selectedYear, selectedOption }: Props) {
    const optionTitle = selectedOption ? mockNormalizedFilter.options[selectedOption].title : "-";

    return (
        <div className="space-y-2">
            <h2 className="mb-4 font-bold">خلاصه انتخاب‌ها</h2>
            <p>برند: {selectedBrand?.title || "-"}</p>
            <p>مدل: {selectedModel?.title || "-"}</p>
            <p>سال تولید: {selectedYear || "-"}</p>
            <p>آپشن: {optionTitle}</p>
        </div>
    );
}
