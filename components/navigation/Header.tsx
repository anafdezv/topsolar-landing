import React, { useEffect, useState } from 'react'
import { HeaderLogo } from '@/assets/brand/';
import { Button } from '@/components/ui/';


export const Header = () => {
    const [top, setTop] = useState(true);

    useEffect(() => {
        const scrollHandler = () => {
            window.scrollY > 40 ? setTop(false) : setTop(true);
        };
        window.addEventListener('scroll', scrollHandler);
        scrollHandler();

        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    return (
        <div className={`z-10 bg-white h-16 md:h-auto sticky top-0 w-full py-3 px-4 flex justify-between items-center ${top ? '' : 'shadow-lg'}`}><HeaderLogo />{!top && <Button>Get your quote</Button>}</div>
    )
}
