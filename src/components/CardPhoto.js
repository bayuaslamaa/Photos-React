import React from 'react'
import { Container, Card } from 'react-bootstrap'

export default function CardPhoto(props) {
    const { photo } = props

    return (
        <Container>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={photo} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                     </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}