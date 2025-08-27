"use client";
import SelectableList from "@/app/wizard/components/card-list";
import {getMileageList} from "@/libs/utils";
import {MileageType} from "@/models";

type Props = {
    selectedMileage: MileageType | null;
    setSelectedMileage: (mileage: MileageType) => void;
};

export default function MileageStep({ selectedMileage, setSelectedMileage }: Props) {
    const mileages = getMileageList();

    const handleSelect = (mileage: MileageType) => {
        setSelectedMileage(mileage);
    };

    return (
        <div>
            <h2 className="mb-6 font-bold">کارکرد خودروی خود را مشخص کنید</h2>
            <SelectableList<MileageType>
                data={mileages}
                selectedItemId={selectedMileage?.id}
                onSelect={handleSelect}
                columns={3}
            />
        </div>
    );
}
