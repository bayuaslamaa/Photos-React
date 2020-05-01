import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'
import { getPhotos } from '../store/actions/index'
import CardPhoto from '../components/CardPhoto'

export default function Photos() {
    const dispatch = useDispatch()
    const photos = useSelector(state => state.photos)
    useEffect(() => {
        dispatch(getPhotos())
    }, [dispatch])
    return (
        <Container>
            {
                photos.map(photo => (photo.id < 20) ? (<CardPhoto photo={photo} key={photo.id} />) : '')
            }
        </Container>
    )
}