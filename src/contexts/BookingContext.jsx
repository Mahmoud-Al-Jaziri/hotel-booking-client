import { createContext, useState, useEffect } from "react";
import { createBooking, getBookings, deleteBooking, updateBooking } from "../api/bookings";

export const BookingContext = createContext();

export default function BookingProvider({children}){
    const [showModal, setShowModal] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState(null);

    const [bookings, setBookings] = useState([])
    useEffect(()=>{
        getBookings().then((data)=>setBookings(data))
    },[]);

    const handleCreate = async (data)=> {
        const newBooking = await createBooking(data)
        setBookings((prevBooking)=>[...prevBooking,newBooking])
    };

    const handleDelete = async (id)=>{
        await deleteBooking(id)
        setBookings((prev)=> prev.filter((b)=> b.id !== id))
    };

    const handleUpdate = async (id,data)=>{
        const updated = await updateBooking(id,data)
        setBookings((prev)=>prev.map((booking)=> booking.id === id ? updated:booking))
    };

    return(
        <BookingContext.Provider value={{bookings, setBookings, handleCreate, handleDelete, showModal, setShowModal, selectedBooking, setSelectedBooking, handleUpdate}}>
            {children}
        </BookingContext.Provider>
    )
}