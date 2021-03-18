import axios from 'axios'

export const sellBooks = async (titles, stocks) => {
    const req = axios.post('api/sellBooks', {
        titles,
        stocks
    })
    const res = await req
    return await res
}