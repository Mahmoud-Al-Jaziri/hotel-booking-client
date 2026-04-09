import { Modal, Button } from "react-bootstrap";
import BookingForm from "./BookingForm";

export default function BookingModal({show,onHide}){
    return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>New Booking</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <BookingForm onHide={onHide}/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Cancel</Button>
        <Button type="submit" variant="dark" form="booking-form">Save</Button>
      </Modal.Footer>
    </Modal>
  )
}