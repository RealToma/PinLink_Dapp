import { useEffect, useState } from 'react';

export const Loader = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        document.documentElement.style.overflow = 'hidden';
        document.documentElement.scrollTop = 0;
        const timer = setTimeout(() => {
            setIsLoading(false);
            document.documentElement.style.overflow = 'auto';
        }, 500);
        return () => clearTimeout(timer);
    },[])


return (
   <>
   {isLoading&&
       <div className="preload">
       <div className="loader">
       </div>
     </div>
   }
   </>
)
}