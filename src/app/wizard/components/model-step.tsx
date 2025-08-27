"use client";

import { BrandType, ModelType } from "@/models";
import SelectableList from "@/app/wizard/components/card-list";
import { getModelsByBrandId } from "@/libs/utils";

type Props = {
    selectedBrand: BrandType | null;
    selectedModel: ModelType | null;
    setSelectedModel: (model: ModelType) => void;
    setCurrentStep: (step: number) => void;
};

export default function ModelStep({ selectedBrand, selectedModel, setSelectedModel, setCurrentStep }: Props) {
    if (!selectedBrand) return null;

    const models = getModelsByBrandId(selectedBrand.id);

    const handleSelect = (model: ModelType) => {
        setSelectedModel(model);
        setCurrentStep(2);
    };

    return (
        <div>
            <h2 className="mb-6 font-bold">مدل خودروی خود را مشخص کنید ({selectedBrand.title})</h2>
            <SelectableList<ModelType>
                data={models}
                selectedItemId={selectedModel?.id}
                onSelect={handleSelect}
                columns={5}
            />
        </div>
    );
}
