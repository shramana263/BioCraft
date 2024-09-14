import axiosClient from "../axios-client";

export function authLogin(payload){
    return axiosClient.post("/login",payload)
    .then(({data})=>{
        return data
    })
    .catch((error)=>{
        throw error
    })
}

export function authLogout(){
    return axiosClient.post("/logout")
    .then(()=>{

    })
    .catch((error)=>{
        throw error
    });
}

export function authRegister(payload){
    return axiosClient.post("/registration",payload)
    .then(({data})=>{
        return data
    })
    .catch((error)=>{
        throw error
    })
}