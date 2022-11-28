import React from 'react'

export const FormButtonNext = ({ onClick, ...props }: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & { onClick: () => void }) => {
    return (
        <button
            {...props}
             onClick={onClick}
            className='cursor-pointer w-full transition text-md md:text-lg ease-in-out rounded-lg bg-orange-600 px-5 py-2 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring disabled:cursor-not-allowed disabled:bg-orange-300'
        >
            Next
        </button>
    )
}
