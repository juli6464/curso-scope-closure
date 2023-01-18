
function greeting() {
    let username = 'Julian';

    function displayUserName() {
        return `Hola ${username}`;
    }
    return displayUserName;
}

const g = greeting();
console.log(g); //retornamos definicion
console.log(g()); //retornamos valor  Hola julian