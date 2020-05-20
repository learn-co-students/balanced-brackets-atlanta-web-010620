let items = {
    '{':'}',
    '[':']',
    '(':')'
}

function isBalanced(string){
    // check for too short strings 
    if (string.length <=1 || string.length % 2 > 0){
        return false; 
    }
    // make an array to push open characters to 
    // when you encounter a closing character, if the last element of the open array isn't the pair for that character, return false 
    let open = []; 
    let letters = string.split(''); 
    let response = true; 
    letters.forEach(letter => {
        if (items[letter]){
            open.push(letter); 
        }else if(items[open[open.length-1]] === letter){
            open.pop(); 
        }else{
            if (items[open[open.length-1]] !== letter){
                response = false; 
            }
        }
    })
    return response; 
}

// console.log(items['(']
isBalanced('([])[{}]{(([))}')