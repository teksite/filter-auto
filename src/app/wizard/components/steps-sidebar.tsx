"use client";

import { Dispatch, SetStateAction } from "react";

type SelectedValuesType = {
    brand?: string;
    model?: string;
    year?: string;
    option?: string;
    mileage?: string;
    city?: string;
    userInfo?: string;
};

type StepsSidebarProps = {
    steps: string[];
    currentStep: number;
    setCurrentStep: Dispatch<SetStateAction<number>>;
    maxStepEnabled: number;
    selectedValues: SelectedValuesType;
};

export default function StepsSidebar({
                                         steps,
                                         currentStep,
                                         setCurrentStep,
                                         maxStepEnabled,
                                         selectedValues,
                                     }: StepsSidebarProps) {

    const valueLabels = [
        selectedValues.brand,
        selectedValues.model,
        selectedValues.year,
        selectedValues.option,
        selectedValues.mileage,
        selectedValues.city,
        selectedValues.userInfo,
    ];

    return (
        <div className="flex flex-wrap lg:flex-col gap-3">
            {steps.map((step, index) => {
                const valueLabel = valueLabels[index] || "";

                const isActive = currentStep === index;
                const isEnabled = index <= maxStepEnabled;

                const containerClass = `
                    p-3 rounded border cursor-pointer text-sm w-32 lg:w-full
                    ${isActive ? "bg-orange-600/10 border-orange-600" : ""}
                    ${!isActive && isEnabled ? "bg-green-600/10 border-green-600" : ""}
                    ${!isActive && !isEnabled ? "bg-gray-100 border-gray-200 cursor-not-allowed text-gray-400" : ""}
                `;

                const textClass = `
                    ${isActive ? "text-orange-600 font-bold" : ""}
                    ${!isActive && isEnabled ? "text-green-600" : ""}
                    ${!isActive && !isEnabled ? "text-gray-400" : ""}
                `;

                return (
                    <div
                        key={index}
                        className={containerClass}
                        onClick={() => isEnabled && setCurrentStep(index)}
                    >
                        <div>{step}</div>
                        <div className={textClass}>{valueLabel || "-"}</div>
                    </div>
                );
            })}
        </div>
    );
}
