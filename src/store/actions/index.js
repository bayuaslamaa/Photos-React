import axios from 'axios'


export const SET_PHOTOS = 'SET_PHOTOS'



export const setPhotos = (data) => {
    return { type: SET_PHOTOS, payload: data }
}

function fetchPhotos() {
    return axios.get('https://jsonplaceholder.typicode.com/photos')
}

export const getPhotos = () => {
    return dispatch => {
        fetchPhotos()
            .then(({ data }) => dispatch(setPhotos(data)))
            .catch(console.log)
    }
}