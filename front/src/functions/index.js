
export function scroll(a, b) {
    window.scrollTo(a || 0, b || 0)
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
    if (tipoOrden === "proyectos") {
        array = array.sort((a, b) => {
            return b.projects.length - a.projects.length
        })
    }
}

const dateOptions = {
    timeZone: 'UTC',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};
export const formatDate = date => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString('es-ES', dateOptions);
};