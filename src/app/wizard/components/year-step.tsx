"use client";

import { ModelType } from "@/models";
import { mockNormalizedFilter } from "@/mock/mock-normalized-data";
import SelectableList from "@/app/wizard/components/card-list";

type Props = {
    selectedModel: ModelType;
    selectedYear: number | null;
    setSelectedYear: (year: number) => void;
    setCurrentStep: (step: number) => void;
};

export default function YearStep({ selectedModel, selectedYear, setSelectedYear, setCurrentStep }: Props) {
    // گرفتن سال‌های تولید از productionYears بر اساس مدل انتخاب شده
    const productionYears = mockNormalizedFilter.productionYears[selectedModel.id] || {};
    const years = Object.keys(productionYears).map((y) => Number(y));

    const handleSelect = (year: number) => {
        setSelectedYear(year);
        setCurrentStep(3);
    };

    return (
        <div>
            <h2 className="mb-4 font-bold">انتخاب سال برای {selectedModel.title}</h2>
            <SelectableList<number>
                data={years}
                selectedItemId={selectedYear ?? undefined}
                onSelect={handleSelect}
                columns={5}
            />
        </div>
    );
}
