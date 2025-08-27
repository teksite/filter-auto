"use client";

import {BrandType, CityType, MileageType, ModelType, OptionType} from "@/models";


type Props = {
    selectedBrand: BrandType | null;
    selectedModel: ModelType | null;
    selectedYear: string | null;
    selectedOption: OptionType | null;
    selectedMileage?: MileageType | null;
    selectedCity?: CityType | null;
    selectedInfo?: string | null;
};

export default function SummaryStep({
                                        selectedBrand,
                                        selectedModel,
                                        selectedYear,
                                        selectedOption,
                                        selectedMileage,
                                        selectedCity,
                                        selectedInfo,
                                    }: Props) {

    console.log(selectedInfo)

    return (
        <div className="space-y-2">
            <h2 className="mb-4 font-bold">خلاصه انتخاب‌ها</h2>
            <p>برند: {selectedBrand?.title || "-"}</p>
            <p>مدل: {selectedModel?.title || "-"}</p>
            <p>سال تولید: {selectedYear || "-"}</p>
            <p>آپشن: {selectedOption?.title || "-"}</p>
            <p>کارکرد: {selectedMileage?.title || "-"}</p>
            <p>شهر: {selectedCity?.title || "-"}</p>
            <p>اطلاعات تماس: {selectedInfo || "-"}</p>
        </div>
    );
}
