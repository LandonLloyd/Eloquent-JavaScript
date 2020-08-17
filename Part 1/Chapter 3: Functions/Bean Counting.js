//Count how many times a certain character appears in a certain string i.e 'school' the letter 'o' appears 2 times.
function beanCounting(str, n){
    let split = str.split('');
    let counter = 0;
    for(let i = 0; i < split.length; i++){
    if(split[i] === n){
counter++
    }
    }
    return counter
}

beanCounting('bannana', 'n')
