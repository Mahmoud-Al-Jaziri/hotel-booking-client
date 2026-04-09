import { useContext } from "react";
import { BookingContext } from "../contexts/BookingContext";

//When selectedBooking is null → creating, when it has a value → editing
export default function BookingTable (){
    const { bookings, handleDelete, setShowModal, setSelectedBooking } = useContext(BookingContext);
      return (
    <>
      <div>
        <h4>All Bookings</h4>
        <table className="table table-bordered mt-3">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Guest</th>
              <th>Room</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Status</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td>{booking.guest}</td>
                <td>{booking.room}</td>
                <td>{booking.check_in}</td>
                <td>{booking.check_out}</td>
                <td>{booking.status}</td>
                <td>${booking.total}</td>
                <td>
                  <button className="btn btn-primary btn-sm me-2"
                    onClick={()=> {
                      setSelectedBooking(booking)
                      setShowModal(true)
                    }}
                  >
                    Edit
                  </button>
                
                  <button className="btn btn-danger btn-sm"
                    onClick={()=> handleDelete(booking.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
      </tbody>
        </table>
      </div>
    </>
        )
}