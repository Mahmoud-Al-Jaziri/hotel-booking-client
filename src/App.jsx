import BookingTable from "./components/BookingTable";
import NavBar from "./components/NavBar";
import { Button } from "react-bootstrap";
import { useState, useContext } from "react";
import { BookingContext } from "./contexts/BookingContext";
import BookingModal from "./components/BookingModal";

function App() {
  const {showModal, setShowModal, selectedBooking, setSelectedBooking} = useContext(BookingContext)
  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h1>Grand Reserve</h1>
          <Button variant="dark" onClick={
            ()=>{setSelectedBooking(null)
                setShowModal(true)}
          }>+ New Booking</Button>
        </div>
        <BookingTable />
      </div>
      <BookingModal
        show={showModal}
        onHide={()=>setShowModal(false)}
        selectedBooking={selectedBooking}
      />
    </>
  )
}

export default App
