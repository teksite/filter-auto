"use client";

import { BrandType } from "@/models";
import { mockNormalizedFilter } from "@/mock/mock-normalized-data";
import SelectableList from "@/app/wizard/components/card-list";

type Props = {
    selectedBrand: BrandType | null;
    setSelectedBrand: (brand: BrandType) => void;
    setCurrentStep: (step: number) => void;
};

export default function BrandStep({ selectedBrand, setSelectedBrand, setCurrentStep }: Props) {
    const brands = Object.values(mockNormalizedFilter.brands);

    const handleSelect = (brand: BrandType) => {
        setSelectedBrand(brand);
        setCurrentStep(1);
    };

    return (
        <div>
            <h2 className="mb-4 font-bold">انتخاب برند</h2>
            <SelectableList<BrandType>
                data={brands}
                selectedItemId={selectedBrand?.id}
                onSelect={handleSelect}
                columns={5}
            />
        </div>
    );
}
