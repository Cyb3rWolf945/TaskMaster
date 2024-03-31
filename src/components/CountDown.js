import { Button } from '@nextui-org/react';
import React, { useEffect, useState } from 'react'
import CountDownDefault from './CountDownDefault';


function CountDown({Counter}) {

    const [TimeStarted, setTimeStarted] = useState(new Date().getTime());
    const [TimerOn, setTimerOn] = useState(false);

    const getTimeLeft = (min) => {
        
        const currentTime = new Date().getTime(); // Current timestamp in milliseconds
        const endTime = TimeStarted + min * 60000; // End timestamp in milliseconds
    
        const totalTimeLeft = endTime - currentTime; // Difference in milliseconds
    
        if (totalTimeLeft <= 0) {
            setTimerOn(false);
            return { hours: 0, minutes: 0, seconds: 0 }; // Return 0 time if time's up
        }
    
        const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
        const seconds = Math.floor((totalTimeLeft / 1000) % 60);
    

        return { hours, minutes, seconds };
    }
    
    
    
    const [timeLeft, setTimeLeft] = useState();
    
    const handleCLick = (minutes) => {
    
        const dataInicio = new Date().getTime();
        setTimerOn(true);
        setTimeStarted(dataInicio);

    
        const Timer = setInterval(() => {
            setTimeLeft(getTimeLeft(minutes));
        }, 1000);
    
        return () => {
            clearInterval(Timer);
        };

    }
  



  return (
    <div className='w-full flex-col items-center justify-center p-4'>

        <div className='w-full flex justify-around px-2'>

            {
                TimerOn ? (

                timeLeft != undefined && timeLeft != null ? Object.entries(timeLeft).map(el => {
                    const label = el[0];
                    const value = el[1];
                    return (
                        <div className='flex flex-col items-center justify-center' key={label}>
                            <div className=''>
                            <span className='font-semibold text-2xl'> {value} </span>
                            </div>
                                <span className='font-medium text-base'>    
                                    {label}
                                </span>
                        </div>
                    );
                }) : '')

                : (
                           <CountDownDefault Counter={Counter}/>          
                )



            }

        </div>

        <div className='flex w-full justify-center'>

            {
                Counter === 'P' ? (   
                <Button onClick={() => { handleCLick(25)}} className='mt-4 uppercase font-semibold text-lg tracking-wider'>
                    START
                </Button>
                ) : Counter === 'S' ? (
                    <Button onClick={() => { handleCLick(5)}} className='mt-4 uppercase font-semibold text-lg tracking-wider'>
                        START
                    </Button>
                ) : 
                (
                    <Button onClick={() => { handleCLick(15)}} className='mt-4 uppercase font-semibold text-lg tracking-wider'>
                        START
                    </Button>
                )
            }
        </div>

    </div>
  )
}

export default CountDown