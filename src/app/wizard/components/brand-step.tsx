"use client";

import {BrandType} from "@/models";
import SelectableList from "@/app/wizard/components/card-list";
import {getBrands} from "@/libs/utils";

type Props = {
    selectedBrand: BrandType | null;
    setSelectedBrand: (brand: BrandType) => void;
    setCurrentStep: (step: number) => void;
};

export default function BrandStep({selectedBrand, setSelectedBrand, setCurrentStep}: Props) {
    const brands = getBrands();

    const handleSelect = (brand: BrandType) => {
        setSelectedBrand(brand);
        setCurrentStep(1);
    };

    return (
        <div>
            <h2 className="mb-6 font-bold">
                برند خودروی خود را مشخص کنید
            </h2>
            <SelectableList<BrandType>
                data={brands}
                selectedItemId={selectedBrand?.id}
                onSelect={handleSelect}
                columns={5}
            />
        </div>
    );
}
