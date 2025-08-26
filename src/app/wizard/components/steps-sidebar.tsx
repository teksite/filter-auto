"use client";

import { Dispatch, SetStateAction } from "react";

type StepsSidebarProps = {
    steps: string[];
    currentStep: number;
    setCurrentStep: Dispatch<SetStateAction<number>>;
    maxStepEnabled: number; // حداکثر مرحله‌ای که کاربر می‌تونه انتخاب کنه
};

export default function StepsSidebar({ steps, currentStep, setCurrentStep, maxStepEnabled }: StepsSidebarProps) {
    return (
        <div className="flex flex-col gap-4 w-1/4">
            {steps.map((step, index) => (
                <div
                    key={index}
                    className={`p-4 rounded border cursor-pointer 
            ${currentStep === index ? "bg-blue-500 text-white" : index <= maxStepEnabled ? "bg-green-200 cursor-pointer" : "bg-gray-200 cursor-not-allowed text-gray-400"}`}
                    onClick={() => index <= maxStepEnabled && setCurrentStep(index)}
                >
                    {step}
                </div>
            ))}
        </div>
    );
}
