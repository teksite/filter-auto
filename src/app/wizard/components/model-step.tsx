"use client";

import {ModelType} from "@/models";
import {mockNormalizedFilter} from "@/mock/mock-normalized-data";
import SelectableList from "@/app/wizard/components/card-list";

type Brand = typeof mockNormalizedFilter.brands[string];
type Model = typeof mockNormalizedFilter.models[string];

type ModelStepProps = {
    selectedBrand: Brand;
    selectedModel: Model | null;
    setSelectedModel: (model: ModelType) => void;
    setCurrentStep: (step: number) => void;
};

export default function ModelStep({ selectedBrand, selectedModel, setSelectedModel, setCurrentStep }: ModelStepProps) {
    const models = selectedBrand.modelIds.map((id) => mockNormalizedFilter.models[id]);

    const handleSelect = (model: Model) => {
        setSelectedModel(model);
        setCurrentStep(2);
    };

    return (
        <div>
            <h2 className="mb-4 font-bold">انتخاب مدل برای {selectedBrand.title}</h2>
            <SelectableList<Model>
                data={models}
                selectedItemId={selectedModel?.id}
                onSelect={handleSelect}
                columns={5}
            />
        </div>
    );
}
