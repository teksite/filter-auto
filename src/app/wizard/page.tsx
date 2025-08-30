"use client";

import {useState} from "react";
import StepsSidebar from "@/app/wizard/components/steps-sidebar";
import BrandStep from "@/app/wizard/components/brand-step";
import ModelStep from "@/app/wizard/components/model-step";
import YearStep from "@/app/wizard/components/year-step";
import OptionStep from "@/app/wizard/components/option-step";
import SummaryStep from "@/app/wizard/components/summary-step";
import CityStep from "@/app/wizard/components/city-step";
import MileageStep from "@/app/wizard/components/mieage-step";
import UserInfoStep from "@/app/wizard/components/info-step";
import {BrandType, MileageType, ModelType, OptionType, CityType} from "@/models";

export default function WizardPage() {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [selectedBrand, setSelectedBrand] = useState<BrandType | null>(null);
    const [selectedModel, setSelectedModel] = useState<ModelType | null>(null);
    const [selectedYear, setSelectedYear] = useState<string | null>(null);
    const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
    const [selectedMileage, setSelectedMileage] = useState<MileageType | null>(null);
    const [selectedCity, setSelectedCity] = useState<CityType | null>(null);
    const [userName, setUserName] = useState<string | null>(null);
    const [userPhone, setUserPhone] = useState<string | null>(null);
    const [userRecommender, setUserRecommender] = useState<string | null>(null);

    const steps = [
        "انتخاب برند",
        "انتخاب مدل",
        "انتخاب سال",
        "انتخاب آپشن",
        "انتخاب کارکرد",
        "انتخاب شهر",
        "اطلاعات تماس",
        "خلاصه"
    ];

    const resetStepsFrom = (step: number) => {
        if (step <= 0) {
            setSelectedModel(null);
            setSelectedYear(null);
            setSelectedOption(null);
            setSelectedMileage(null);
            setSelectedCity(null);
            setUserName(null);
            setUserPhone(null);
        }
        if (step <= 1) {
            setSelectedYear(null);
            setSelectedOption(null);
            setSelectedMileage(null);
            setSelectedCity(null);
            setUserName(null);
            setUserPhone(null);
        }
        if (step <= 2) {
            setSelectedOption(null);
            setSelectedMileage(null);
            setSelectedCity(null);
            setUserName(null);
            setUserPhone(null);
        }
        if (step <= 3) {
            setSelectedMileage(null);
            setSelectedCity(null);
            setUserName(null);
            setUserPhone(null);
        }
        if (step <= 4) {
            setSelectedCity(null);
            setUserName(null);
            setUserPhone(null);
        }
        if (step <= 5) {
            setUserName(null);
            setUserPhone(null);
        }
        if (step <= 6) {
            setUserName(null);
            setUserPhone(null);
        }
    };

    let maxStepEnabled = 0;
    if (selectedBrand) maxStepEnabled = 1;
    if (selectedBrand && selectedModel) maxStepEnabled = 2;
    if (selectedBrand && selectedModel && selectedYear) maxStepEnabled = 3;
    if (selectedBrand && selectedModel && selectedYear && selectedOption) maxStepEnabled = 4;
    if (selectedBrand && selectedModel && selectedYear && selectedOption && selectedMileage) maxStepEnabled = 5;
    if (selectedBrand && selectedModel && selectedYear && selectedOption && selectedMileage && selectedCity) maxStepEnabled = 6;
    if (selectedBrand && selectedModel && selectedYear && selectedOption && selectedMileage && selectedCity && userName) maxStepEnabled = 7;
    return (
        <div className="grid gap-3 mg:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 min-h-screen p-8 w-3/4 mx-auto">
            <div>
                <StepsSidebar
                    steps={steps}
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                    maxStepEnabled={maxStepEnabled}
                    selectedValues={{
                        brand: selectedBrand?.title,
                        model: selectedModel?.title,
                        year: selectedYear || "",
                        option: selectedOption?.title,
                        mileage: selectedMileage?.title,
                        city: selectedCity?.title,
                        userInfo: userName ? `${userName}${userPhone ? ` - ${userPhone}` : ""}` : ""
                    }}
                />
            </div>

            <div className="lg:col-span-2 xl:col-span-4">
                <div className="p-6">
                    {currentStep === 0 && (
                        <BrandStep
                            selectedBrand={selectedBrand}
                            setSelectedBrand={(b) => {
                                setSelectedBrand(b);
                                resetStepsFrom(0);
                                setCurrentStep(1);
                            }}
                            setCurrentStep={setCurrentStep}
                        />
                    )}

                    {currentStep === 1 && selectedBrand && (
                        <ModelStep
                            selectedBrand={selectedBrand}
                            selectedModel={selectedModel}
                            setSelectedModel={(m) => {
                                setSelectedModel(m);
                                resetStepsFrom(1);
                                setCurrentStep(2);
                            }}
                            setCurrentStep={setCurrentStep}
                        />
                    )}

                    {currentStep === 2 && selectedModel && (
                        <YearStep
                            selectedModel={selectedModel}
                            selectedYear={selectedYear}
                            setSelectedYear={(y) => {
                                setSelectedYear(y);
                                resetStepsFrom(2);
                                setCurrentStep(3);
                            }}
                            setCurrentStep={setCurrentStep}
                        />
                    )}

                    {currentStep === 3 && selectedYear && (
                        <OptionStep
                            selectedModel={selectedModel}
                            selectedYear={selectedYear}
                            selectedOption={selectedOption}
                            setSelectedOption={(o) => {
                                setSelectedOption(o);
                                resetStepsFrom(3);
                                setCurrentStep(4);
                            }}
                            setCurrentStep={setCurrentStep}
                        />
                    )}

                    {currentStep === 4 && (
                        <MileageStep
                            selectedMileage={selectedMileage}
                            setSelectedMileage={(m) => {
                                setSelectedMileage(m);
                                resetStepsFrom(4);
                                setCurrentStep(5);
                            }}
                        />
                    )}

                    {currentStep === 5 && (
                        <CityStep
                            selectedCity={selectedCity}
                            setSelectedCity={(c) => {
                                setSelectedCity(c);
                                resetStepsFrom(5);
                                setCurrentStep(6);
                            }}
                        />
                    )}

                    {currentStep === 6 && (
                        <UserInfoStep
                            userName={userName}
                            setUserName={setUserName}

                            userRecommender={userRecommender}
                            setUserRecommender={setUserRecommender}

                            userPhone={userPhone}
                            setUserPhone={setUserPhone}

                            setCurrentStep={(step) => {
                                resetStepsFrom(6);
                                setCurrentStep(step);
                            }}
                        />
                    )}

                    {currentStep === 7 && (
                        <SummaryStep
                            selectedBrand={selectedBrand}
                            selectedModel={selectedModel}
                            selectedYear={selectedYear}
                            selectedOption={selectedOption}
                            selectedMileage={selectedMileage}
                            selectedCity={selectedCity}
                            selectedInfo={`${userName} -  ${userPhone} - ${userRecommender ?? '-' }`}

                        />
                    )}
                </div>
            </div>
        </div>
    );
}
