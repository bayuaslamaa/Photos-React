import * as types from '../actions/index'

const initial = {
    photos: []
}


export default function reducer(state = initial, action) {
    const { type, payload } = action
    switch (type) {
        case types.SET_PHOTOS:
            return { ...state, photos: payload }

        default:
            return state
    }
}