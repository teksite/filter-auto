// app/wizard/components/SelectableList.tsx
"use client";
import { Card } from "./card";

type SelectableListProps<T extends { id: string; title: string }> = {
    data: T[];
    onSelect: (item: T) => void;
    selectedItemId?: string;
    columns?: number;
    disabled?: boolean;
};

export default function SelectableList<T extends { id: string; title: string }>({
                                                                                    data,
                                                                                    onSelect,
                                                                                    selectedItemId,
                                                                                    columns = 5,
                                                                                    disabled = false,
                                                                                }: SelectableListProps<T>) {
    return (
        <ul
            className={`
        grid gap-4
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-${columns}
      `}
            style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
        >
            {data.map((item) => (
                <li
                    key={item.id}
                    onClick={() => !disabled && onSelect(item)}
                    className={disabled ? "opacity-50 pointer-events-none" : ""}
                >
                    <Card title={item.title} selected={selectedItemId === item.id} />
                </li>
            ))}
        </ul>
    );
}
