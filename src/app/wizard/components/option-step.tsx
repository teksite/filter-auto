"use client";

import { ModelType, OptionType } from "@/models";
import { mockNormalizedFilter } from "@/mock/mock-normalized-data";
import SelectableList from "@/app/wizard/components/card-list";
import {getOptionsByModelIdAndYear} from "@/libs/utils";

type Props = {
    selectedModel: ModelType | null;
    selectedYear: string | null;
    selectedOption: OptionType | null;
    setSelectedOption: (option: OptionType) => void;
    setCurrentStep: (step: number) => void;
};

export default function OptionStep({ selectedModel, selectedYear, selectedOption, setSelectedOption, setCurrentStep }: Props) {
    if (!selectedModel || !selectedYear) return null;

    const yearKey = String(selectedYear);
    const options = getOptionsByModelIdAndYear(selectedModel.id, selectedYear);

    const handleSelect = (option: OptionType) => {
        setSelectedOption(option);
        setCurrentStep(4);
    };

    return (
        <div>
            <h2 className="mb-6 font-bold">آپشن را مشخص کنید (سال {selectedYear})</h2>
            <SelectableList<OptionType>
                data={options}
                selectedItemId={selectedOption?.id}
                onSelect={handleSelect}
                columns={4}
            />
        </div>
    );
}
