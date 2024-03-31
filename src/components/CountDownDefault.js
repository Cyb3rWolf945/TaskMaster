import React from 'react'

function CountDownDefault({Counter}) {
    return (
        <>
            <div className='flex flex-col items-center justify-center'>
                <div className=''>
                    <span className='font-semibold text-2xl'> 0 </span>
                </div>
                <span className='font-medium text-base'>
                    Hours
                </span>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <div className=''>
                    <span className='font-semibold text-2xl'> 
                    {
                        Counter === 'P' ? '25' : Counter === 'S' ? '5' : '15'
                    }
                     </span>
                </div>
                <span className='font-medium text-base'>
                    minutes
                </span>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <div className=''>
                    <span className='font-semibold text-2xl'> 0 </span>
                </div>
                <span className='font-medium text-base'>
                    seconds
                </span>
            </div>


        </>
    )
}

export default CountDownDefault