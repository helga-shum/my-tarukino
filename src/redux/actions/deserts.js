import axios from 'axios';
export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload
})

export const fetchDeserts = (category) => (dispatch) => {
    dispatch(setLoaded(false))
    axios.get(`/deserts?${category !== null ? `category=${category}` : ''}`).then(({ data }) => {
        dispatch(setDeserts(data))

    })
}

export const setDeserts = (items) => ({
    type: 'SET_DESERTS',
    payload: items
});

