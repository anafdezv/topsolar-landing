import React from 'react'

export interface TilesInputOptionProps {
    name: string;
    label: string;
    icon: JSX.Element
    value: string;
}


export const TilesInput = ({ label, options = [], onChange, name }: { label: string; options: TilesInputOptionProps[], onChange: (e: string) => void; name: string }) => {
    return (
        <span className='w-full flex flex-col gap-9 items-center'>
            <h4 className="text-xl md:text-2xl font-semibold">{label}</h4>
            <ul className="flex flex-col md:flex-row gap-4">
                {options.map((option: TilesInputOptionProps) =>
                    <li key={`form-option-${option.value}`}>
                        <input type="radio"
                            required
                            id={option.name}
                            name={name}
                            value={option.value}
                            className="hidden peer"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
                        />
                        <label
                            htmlFor={option.name}
                            className=" inline-flex flex-col justify-center items-center p-5 h-full w-full md:w-40 fill-gray-500 text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-orange-600 peer-checked:text-orange-600 peer-checked:fill-orange-600 hover:text-gray-600 hover:bg-gray-50 ">
                            {option.icon}
                            <h6 className="w-full text-lg font-semibold text-center">
                                {option.label}
                            </h6>
                        </label>
                    </li>)}

            </ul></span>
    )
}
