"use client";

import { useState } from "react";
import StepsSidebar from "@/app/wizard/components/steps-sidebar";
import BrandStep from "@/app/wizard/components/brand-step";
import ModelStep from "@/app/wizard/components/model-step";
import YearStep from "@/app/wizard/components/year-step";
import OptionStep from "@/app/wizard/components/option-step";
import SummaryStep from "@/app/wizard/components/summary-step";
import { mockNormalizedFilter } from "@/mock/mock-normalized-data";

type Brand = typeof mockNormalizedFilter.brands[string];
type Model = typeof mockNormalizedFilter.models[string];
type Year = typeof mockNormalizedFilter.years[string]["models"][number];
type Option = typeof mockNormalizedFilter.years[string]["models"][number]["options"][number];

export default function WizardPage() {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
    const [selectedModel, setSelectedModel] = useState<Model | null>(null);
    const [selectedYear, setSelectedYear] = useState<Year | null>(null);
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    const steps = ["انتخاب برند", "انتخاب مدل", "انتخاب سال", "انتخاب آپشن", "خلاصه"];

    // مشخص کردن حداکثر مرحله‌ای که فعال هست
    let maxStepEnabled = 0;
    if (selectedBrand) maxStepEnabled = 1;
    if (selectedBrand && selectedModel) maxStepEnabled = 2;
    if (selectedBrand && selectedModel && selectedYear) maxStepEnabled = 3;
    if (selectedBrand && selectedModel && selectedYear && selectedOption) maxStepEnabled = 4;

    const handleBrandChange = (brand: Brand) => {
        setSelectedBrand(brand);
        setSelectedModel(null);
        setSelectedYear(null);
        setSelectedOption(null);
        setCurrentStep(1);
    };

    const handleModelChange = (model: Model) => {
        setSelectedModel(model);
        setSelectedYear(null);
        setSelectedOption(null);
        setCurrentStep(2);
    };

    const handleYearChange = (year: Year) => {
        setSelectedYear(year);
        setSelectedOption(null);
        setCurrentStep(3);
    };

    const handleOptionChange = (option: Option) => {
        setSelectedOption(option);
        setCurrentStep(4);
    };

    return (
        <div className="flex min-h-screen p-8 gap-8">
            <StepsSidebar
                steps={steps}
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                maxStepEnabled={maxStepEnabled}
            />

            <div className="flex-1 p-6">
                {currentStep === 0 && (
                    <BrandStep selectedBrand={selectedBrand} setSelectedBrand={handleBrandChange} setCurrentStep={setCurrentStep} />
                )}

                {currentStep === 1 && selectedBrand && (
                    <ModelStep
                        selectedBrand={selectedBrand}
                        selectedModel={selectedModel}
                        setSelectedModel={handleModelChange}
                        setCurrentStep={setCurrentStep}
                    />
                )}

                {currentStep === 2 && selectedModel && (
                    <YearStep
                        selectedModel={selectedModel}
                        selectedYear={selectedYear}
                        setSelectedYear={handleYearChange}
                        setCurrentStep={setCurrentStep}
                    />
                )}

                {currentStep === 3 && selectedYear && (
                    <OptionStep
                        selectedYear={selectedYear}
                        selectedOption={selectedOption}
                        setSelectedOption={handleOptionChange}
                        setCurrentStep={setCurrentStep}
                    />
                )}

                {currentStep === 4 && (
                    <SummaryStep
                        selectedBrand={selectedBrand}
                        selectedModel={selectedModel}
                        selectedYear={selectedYear}
                        selectedOption={selectedOption}
                    />
                )}
            </div>
        </div>
    );
}
