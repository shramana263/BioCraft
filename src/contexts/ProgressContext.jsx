import { createContext, useContext, useEffect, useState } from "react";
import axiosClient from "../axios-client";

const ProgressContext = createContext({
    isNext:0,
    setNext:()=>{},
    nextButton:false,
    setNextButton:()=>{}

});

export const ProgressProvider = ({ children }) => {

    const [isNext, setNext]=useState(0)
    const [nextButton, setNextButton]=useState(false)

    useEffect(()=>{
        (axiosClient.get('/index/progress'))
            .then(response => {
              console.log(response.data.step)
              setNext(prev=>response.data.step)
                return response.data.step;
            })
            .catch(err => {
                throw err;
            });
    },[isNext])
    
    return(
        <ProgressContext.Provider value={{
            isNext, setNext, nextButton, setNextButton
        }} >
            {children}
        </ProgressContext.Provider>
    )

}

export const useProgressContext=()=>useContext(ProgressContext)