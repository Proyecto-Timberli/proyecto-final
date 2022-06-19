import axios from 'axios';


export function scroll(a, b) {
    window.scrollTo(a || 0, b || 0)
}
export async function sendCheckoutForm(id, amount) {
    return await axios.post('http://localhost:3001/api/user/donation', {
        id,
        amount,
    })
}

export function ordenar(array, tipoOrden) {
    if (tipoOrden === "nombre") {
        array = array.sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase())
                return -1
            if (a.name.toLowerCase() > b.name.toLowerCase())
                return 1

            return 0
        }
        )
    }
    if (tipoOrden === "fecha") {
        array = array.sort((a, b) => {
            return a.id - b.id
        })
    }
}