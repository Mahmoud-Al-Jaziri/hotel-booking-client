import { Form, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { BookingContext } from "../contexts/BookingContext";

export default function BookingForm({onHide}){
    const [form,setForm] = useState({
        guest: "",
        room: "",
        room_type: "",
        check_in: "",
        check_out: "",
        guests: 1,
        status: "pending",
        total: ""
    })

    const handleChange = (e)=>{
        //It's called a computed property name in JavaScript — the [] tells JS to evaluate what's inside and use that as the key name.
        //That's what makes handleChange work for all fields with just one function
        setForm({...form, [e.target.name]: e.target.value})
    }

    const { handleCreate, selectedBooking, handleUpdate } = useContext(BookingContext)

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(selectedBooking){
            handleUpdate(selectedBooking.id, form)
        } else{
            handleCreate(form)
        }
        onHide()
    }

    //If selectedBooking has a value → pre-fill the form with it
    //If selectedBooking is null → reset the form to empty
    useEffect(()=>{
        if(selectedBooking){
            setForm(selectedBooking)
        }else{
            setForm({
                guest: "",
                room: "",
                room_type: "",
                check_in: "",
                check_out: "",
                guests: 1,
                status: "pending",
                total: ""
            })
        }
    },[selectedBooking])

    return(
        <Form onSubmit={handleSubmit} id="booking-form">
            <Row className="mb-3">
                <Col>
                    <Form.Label>Guest Name</Form.Label>
                    <Form.Control
                        name="guest"
                        value={form.guest}
                        onChange={handleChange}
                        placeholder="e.g. James Harrington"
                    />
                </Col>
                <Col>
                    <Form.Label>Room Name</Form.Label>
                    <Form.Control 
                        name="room"
                        value={form.room}
                        onChange={handleChange}
                        placeholder="e.g. Garden View"
                    />
                </Col>
                <Row className="mb-3">
                    <Col>
                        <Form.Label>Room Type</Form.Label>
                        <Form.Select name="room_type" value={form.room_type} onChange={handleChange}>
                        <option value="">Select type...</option>
                        <option value="standard">Standard</option>
                        <option value="deluxe">Deluxe</option>
                        <option value="suite">Suite</option>
                        <option value="presidential">Presidential</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Label>Status</Form.Label>
                        <Form.Select name="status" value={form.status} onChange={handleChange}>
                        <option value="pending">Pending</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="cancelled">Cancelled</option>
                        </Form.Select>
                    </Col>
                    </Row>

                    <Row className="mb-3">
                    <Col>
                        <Form.Label>Check In</Form.Label>
                        <Form.Control name="check_in" value={form.check_in} onChange={handleChange} placeholder="e.g. 2026-04-10"/>
                    </Col>
                    <Col>
                        <Form.Label>Check Out</Form.Label>
                        <Form.Control name="check_out" value={form.check_out} onChange={handleChange} placeholder="e.g. 2026-04-14"/>
                    </Col>
                    </Row>

                    <Row className="mb-3">
                    <Col>
                        <Form.Label>Guests</Form.Label>
                        <Form.Control type="number" name="guests" value={form.guests} onChange={handleChange} min={1}/>
                    </Col>
                    <Col>
                        <Form.Label>Total (USD)</Form.Label>
                        <Form.Control type="number" name="total" value={form.total} onChange={handleChange} placeholder="e.g. 2800"/>
                    </Col>
                    </Row>
            </Row>
        </Form>
    )
}