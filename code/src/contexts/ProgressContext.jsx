import { createContext, useContext, useEffect, useState } from "react";
import axiosClient from "../axios-client";
import { useStateContext } from "./StateContext";

const ProgressContext = createContext({
    isNext:0,
    setNext:()=>{},
    nextButton:false,
    setNextButton:()=>{}

});

export const ProgressProvider = ({ children }) => {

    const [isNext, setNext]=useState(0)
    const [nextButton, setNextButton]=useState(false)
    const {token}= useStateContext()

    useEffect(()=>{
        (axiosClient.get('/index/progress'))
            .then(response => {
              console.log(response.data.step)
              const newStep= response.data.step
              setNext(newStep)
            })
            .catch(err => {
                throw err;
            });
    },[isNext, token])
    
    return(
        <ProgressContext.Provider value={{
            isNext, setNext, nextButton, setNextButton
        }} >
            {children}
        </ProgressContext.Provider>
    )

}

export const useProgressContext=()=>useContext(ProgressContext)