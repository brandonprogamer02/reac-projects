

function filter(array, fn) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        const retorno = fn(array[i], i)
        if(retorno){
            newArray.push(array[i])
        }
    }
    return newArray
}

function map(array, fn) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        const retorno = fn(array[i], i)
        newArray.push(retorno) 
    }
    return newArray
}

const array = [1, 2, 3, 4]
console.log(
    'Este es el Resultado del  Filter\n',
    filter( array,
    (element, index) => false)
)
console.log('----------------------------------------------')
console.log(
    'Este es el Resultado del Map\n',
    map(
        array,
        (element, index) => element + 10
    )
)