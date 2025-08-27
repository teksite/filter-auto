"use client";
import { useState } from "react";

type Props = {
    userName: string | null;
    setUserName: (name: string) => void;
    userPhone: string | null;
    setUserPhone: (phone: string) => void;
    userRecommender: string | null;
    setUserRecommender: (rec: string) => void;
    setCurrentStep: (step: number) => void;
};

export default function UserInfoStep({
                                         userName,
                                         setUserName,
                                         userPhone,
                                         setUserPhone,
                                         setCurrentStep,
                                         userRecommender,
                                         setUserRecommender
                                     }: Props) {
    const [localName, setLocalName] = useState(userName || "");
    const [localPhone, setLocalPhone] = useState(userPhone || "");
    const [localRecommender, setLocalRecommender] = useState(userRecommender || "");

    const handleNext = () => {
        if (!localName.trim() || !localPhone.trim()) return;
        setUserName(localName.trim());
        setUserPhone(localPhone.trim());
        setUserRecommender(localRecommender.trim());
        setCurrentStep(7);
    };

    return (
        <div className="max-w-md mx-auto">
            <h2 className="mb-6 text-xl font-bold">اطلاعات کاربر</h2>
            <div className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="نام و نام خانوادگی"
                    value={localName}
                    onChange={(e) => setLocalName(e.target.value)}
                    className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="tel"
                    placeholder="شماره تلفن"
                    value={localPhone}
                    onChange={(e) => setLocalPhone(e.target.value)}
                    className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="text"
                    placeholder="نام ‌معرف"
                    value={localRecommender}
                    onChange={(e) => setLocalRecommender(e.target.value)}
                    className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    onClick={handleNext}
                    disabled={!localName.trim() || !localPhone.trim()}
                    className={`mt-4 p-2 rounded text-white transition
                        ${!localName.trim() || !localPhone.trim() ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
                >
                    مرحله بعد
                </button>
            </div>
        </div>
    );
}
