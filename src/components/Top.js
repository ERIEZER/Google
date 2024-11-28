//トップページここで実際の操作をする
import { useState } from "react";
import { useEffect } from "react";


const Top = () =>{

    userinput  = input (prompt());
    const [Timer , setTimer] = useState(3600);

    let totalTime = 3600;
    let remainTime = totalTime;
    let timerInterval = nill;


    return(
        <>
          <body class = " bg-gray-100 flex items-center justify-center min-h-scree ">

            <h1 class = "text-blue-600 text-5xl font-bold">
            Pomodoro Timer
            </h1>

            <b> try to focus </b>

           
                <div class =" text-center">
                    <div class =" circle ralative" id = " timer-circle">
                        <div class = " mt-4 text-lg">
                            <span id = "time-display" class = "font-bold">
                                10:00
                            </span>
                            
                            <div class ="mt-4">
                                <button id = "start-btn" class = "bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                                onChange={startHandler()}
                                >
                                    start
                                </button>

                                <button id = "reset-btn" class = "bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                                onChange={resetHandler()}
                                >
                                    reset
                                </button>
                            
                            </div>
                        </div>
                    </div>
                </div>

          </body>
        
        
        
        </>
    )

}

export default Top;