"use client";

import { ModelType } from "@/models";
import SelectableList from "@/app/wizard/components/card-list";
import {getProductionYearsByModelId} from "@/libs/utils";

type Props = {
    selectedModel: ModelType | null;
    selectedYear: string | null;
    setSelectedYear: (year: string) => void;
    setCurrentStep: (step: number) => void;
};

export default function YearStep({ selectedModel, selectedYear, setSelectedYear, setCurrentStep }: Props) {
    if (!selectedModel) return null;

    const years = getProductionYearsByModelId(selectedModel.id).map(y => ({ id: y, title: y }));

    const handleSelect = (year: { id: string; title: string }) => {
        setSelectedYear(year.id);
        setCurrentStep(3);
    };

    return (
        <div>
            <h2 className="mb-6 font-bold">سال تولید را مشخص کنید ({selectedModel.title})</h2>
            <SelectableList<{ id: string; title: string }>
                data={years}
                selectedItemId={selectedYear ?? undefined}
                onSelect={handleSelect}
                columns={5}
            />
        </div>
    );
}
