import { Row, Col, Image, Button, Modal, Carousel } from "react-bootstrap";
import { useState } from "react";

export default function Room({ room }) {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className="my-5 p-3 shadow-sm bg-light rounded">
                <Row >
                    <Col md={4}>
                        <Image
                            src={room.imageurls[0]}
                            fluid
                        />
                    </Col>
                    <Col md={8}>
                        <h5>{room.name}</h5>
                        <h6>{room.phonenumber}</h6>
                        <h6>{room.rentperday}</h6>
                        <h6>{room.type}</h6>
                        <div className="d-flex flex-row-reverse mt-5">
                            <Button variant="dark" onClick={() => setShow(true)}>View Details</Button>
                        </div>
                    </Col>
                </Row>
            </div>

            
            <Modal
                show={show}
                centered
                onHide={() => setShow(false)} 
            >
                <button 
                    onClick={() => setShow(false)}
                    className="btn-close"></button>
                <Modal.Header >
                    <p className="lead">{room.name}</p>
                </Modal.Header>
                <Carousel>
                    {room.imageurls.map(item => (
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={item}
                                alt="First slide"
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
                <Modal.Footer><p>{room.description}</p></Modal.Footer>
            </Modal>
        </>
    )
}