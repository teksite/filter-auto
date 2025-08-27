"use client";
import SelectableList from "@/app/wizard/components/card-list";
import {getCityList} from "@/libs/utils";
import {CityType} from "@/models";

type Props = {
    selectedCity: CityType | null;
    setSelectedCity: (city: CityType) => void;
};

export default function CityStep({ selectedCity, setSelectedCity }: Props) {
    const cities = getCityList();

    const handleSelect = (city: CityType) => {
        setSelectedCity(city);
    };

    return (
        <div>
            <h2 className="mb-6 font-bold">شهر خود را انتخاب کنید</h2>
            <SelectableList<CityType>
                data={cities}
                selectedItemId={selectedCity?.id}
                onSelect={handleSelect}
                columns={3}
            />
        </div>
    );
}
