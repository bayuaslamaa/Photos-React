import React from 'react'
import { Container, Card } from 'react-bootstrap'

export default function CardPhoto(props) {
    const { photo } = props

    return (
        <Container>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={photo.thumbnailUrl} />
                <Card.Body>
                    <Card.Title>No. {photo.id}</Card.Title>
                    <Card.Text>
                        {photo.title}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}