function formatCash(str) {
    return str.toString().split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + ',')) + prev
    })
}

export default formatCash;