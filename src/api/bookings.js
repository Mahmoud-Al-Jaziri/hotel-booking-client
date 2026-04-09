import axios from "axios";

const API_URL = "http://localhost:3000"

export const getBookings = ()=>{
    return axios.get(`${API_URL}/bookings`)
    .then((res)=> res.data)
};

export const getBookingById = (id)=>{
    return axios.get(`${API_URL}/bookings/${id}`)
    .then((res)=>res.data)
};

export const createBooking = (data)=>{
    return axios.post(`${API_URL}/bookings`,data)
    .then((res)=>res.data)
};

export const updateBooking = (id,data)=>{
    return axios.put(`${API_URL}/bookings/${id}`,data)
    .then((res)=>res.data)
};

export const deleteBooking = (id)=>{
    return axios.delete(`${API_URL}/bookings/${id}`)
    .then((res)=>res.data)
}
