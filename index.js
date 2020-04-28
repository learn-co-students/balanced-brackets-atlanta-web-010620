
function isBalanced(string){
    let array = string.split('')
    let allowedStack = []
    let rightFace = ['(', '[', '{']
    for (let i = 0; i < array.length; i++){
        if (rightFace.includes(array[i])) {
            allowedStack.push(getTarget(array[i]))
        } else if (array[i] !== allowedStack.pop()) {
            return false
        }
    }
    if (allowedStack.length > 0) {
        return false
    } else {
        return true
    }
}

function createBracketHash(array) {
    let object = {}
    let rightFace = ['(', '[', '{']
    for (let i=0; i < array.length; i++) {
        object[i] = {
            char: array[i],
            checked: false,
            rightFace: rightFace.includes(array[i])
        }
    }
    return object
}

function getTarget(char) {
    if (char === '(') {
        return ')'
    } else if (char === '[') {
        return ']'
    } else {
        return '}'
    }
}