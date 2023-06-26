import { useEffect, useState } from "react"
import Room from "../components/Room";
import { Container } from "react-bootstrap";

export default function Home() {

    const [rooms, setRooms] = useState()
    useEffect(() => {
        fetch("/api/rooms")
            .then(res => res.json())
            .then(data => setRooms(data))
    }, [])

    return (
        <Container>
            {rooms && rooms?.map(room => (<Room {...{room }} key={room._id} />))}
        </Container>
    )
}