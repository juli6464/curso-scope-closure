// scope decide a qué variables tienes acceso en cada parte del código.
function greeting() {
    let userName = 'Ana';
    console.log(userName);

    if (userName === 'Ana'){
        console.log(`Hello ${userName}!`)
    }
}

greeting();
console.log(userName);