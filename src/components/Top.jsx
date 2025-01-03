//トップページここでタイマー
import { useState } from "react";
import { useEffect } from "react";
import BrakeTimer from "./BrakeTimer";

//user input 
//user start
//user pause
//user stop
//user rest

const PomodoroTimer = () => {

    const [TimeLeft , setTimeLeft] = useState(25 * 60);
    const [IsActive , setIsActive ] = useState (false);

//main timer counter
    useEffect(() => {
        let Interval = null ;

        if (IsActive && TimeLeft > 0 ){
            Interval = setInterval (() => {
                setTimeLeft(prevTimer => prevTimer - 1);
            } , 1000);
        } else if(TimeLeft === 0 ){
            setIsActive(false);
        }

        return () => {
            if (Interval) {
              clearInterval(Interval);
            };
        } 
    },[IsActive, TimeLeft]);


//main timer alert && breakTimer

    useEffect((BrakeTimer) => {
        if( ! IsActive && TimeLeft === 0){
            alert(" Time is up !");

            return(BrakeTimer);
        }
    },[IsActive, TimeLeft]);



    const startTimer = () => {
        setIsActive(true);
    };

    const stopTimer = () => {
        setIsActive(false);
    };

    const resetTimer = () => {
        setIsActive (false);
        setTimeLeft (25 * 60);
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60 ;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };


    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <h1 className="text-blue-600 text-5xl font-bold mb-4">
                Pomodoro Timer
            </h1>
            
            <p className="text-lg mb-8">Try to focus</p>
    
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="text-6xl font-bold mb-8 ">
                {formatTime(TimeLeft)}
                </div>
    
                <div className="space-x-4">
                    <button 
                        onClick={IsActive ? stopTimer : startTimer}
                        className={`px-6 py-2 rounded font-bold ${
                        IsActive 
                            ? 'bg-red-500 hover:bg-red-600' 
                            : 'bg-green-500 hover:bg-green-600'
                        } text-white`}
                    >
                        {IsActive ? 'Stop' : 'Start'}
                    </button>
            
                    <button 
                        onClick={resetTimer}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded font-bold"
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PomodoroTimer;