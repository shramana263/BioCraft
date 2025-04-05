import axiosClient from "../axios-client";

export function fetchUser(){
    return axiosClient.get("/user")
    .then(({data})=>{
        return data;
    })

}

export function fetchUsers(){
    return axiosClient.get("/users")
    .then(({data})=>{
        return data.data;
    })
}
