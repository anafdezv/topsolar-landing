import React from 'react'

export const FormButtonBack = ({ onClick, ...props }: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & { onClick: () => void }) => {
    return (
        <button
            {...props}
            onClick={onClick}
            className='cursor-pointer w-full transition text-md md:text-lg ease-in-out rounded-lg bg-gray-200 px-5 py-2 text-sm font-medium text-black hover:bg-gray-300 focus:outline-none focus:ring disabled:cursor-not-allowed disabled:bg-gray-100'
        >
            Back
        </button>
    )
}
