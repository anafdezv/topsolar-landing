import React from 'react'

export const Button = ({ children, props }: { children: string; props?: React.ButtonHTMLAttributes<HTMLButtonElement> }): JSX.Element => {
    return (
        <button {...props} className="transition text-md md:text-lg ease-in-out rounded-lg bg-orange-600 px-5 py-2 text-sm font-medium text-white hover:bg-orange-700  focus:outline-none focus:ring ">
            {children}
        </button>
    )
}
