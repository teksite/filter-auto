"use client";

import { ModelType } from "@/models";
import { mockNormalizedFilter } from "@/mock/mock-normalized-data";
import SelectableList from "@/app/wizard/components/card-list";

type Props = {
    selectedModel: ModelType;
    selectedYear: number;
    selectedOption: string | null;
    setSelectedOption: (optionId: string) => void;
    setCurrentStep: (step: number) => void;
};

export default function OptionStep({ selectedModel, selectedYear, selectedOption, setSelectedOption, setCurrentStep }: Props) {
    const optionIds = mockNormalizedFilter.productionYears[selectedModel.id][selectedYear];
    const options = optionIds.map((id) => mockNormalizedFilter.options[id]);

    const handleSelect = (option: typeof options[number]) => {
        setSelectedOption(option.id);
        setCurrentStep(4);
    };

    return (
        <div>
            <h2 className="mb-4 font-bold">انتخاب آپشن برای {selectedModel.title} در سال {selectedYear}</h2>
            <SelectableList<typeof options[number]>
                data={options}
                selectedItemId={selectedOption ?? undefined}
                onSelect={handleSelect}
                columns={5}
            />
        </div>
    );
}
