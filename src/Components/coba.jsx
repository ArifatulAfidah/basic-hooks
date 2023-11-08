import React, { Children } from "react";
export default function coba({Children}){
    return(
        <div className={'bg-black'}>
        <div className={'bg-violet-900/20 text-violet-50 min-h-screen flex items-center justify-center antialisased tracking-light'}>
        <div className={'max-w-lg w-full'}>
        {Children}
        </div>
        </div>
        </div>
    )
}