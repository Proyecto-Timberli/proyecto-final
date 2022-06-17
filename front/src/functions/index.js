import axios from 'axios';


export function scroll(a, b) {
    window.scrollTo(a || 0, b || 0)
}
export async function sendCheckoutForm(id) {
    return await axios.post('http://localhost:3001/api/user/donation',{
        id,
        amount: 10000
    })
}