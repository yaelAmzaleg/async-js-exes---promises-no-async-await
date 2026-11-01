//exe1
// const delayedGreet = (name, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(`Hello, ${name}!`), delay)
//     });
// }
// delayedGreet("yael", 5000).then((result) => {
//     console.log(result)
// })
//exe3
// const randomOperation = () => {
//     return new Promise((resolve, reject) => {
//         if (Math.random() < 0.5) {
//             resolve("Success!");
//         } else {
//             reject("Failure!");
//         }
//     }
//     )
// }
// randomOperation().then((result)=>console.log(result)).catch((error)=>console.log(error))
//exe4
// const raceTimers = () => {
//     const timerA = new Promise((resolve) => setTimeout(() => resolve("Timer A finished"), 2000));
//     const timerB = new Promise((resolve) => setTimeout(() => resolve("Timer B finished"), 3000));

//     return Promise.race([timerA, timerB]);
// }

// raceTimers().then((result) => {
//     console.log(result);
// });
//exe6
// const waitAll= () => {
// const a= new Promise((resolve,reject) => setTimeout(() => resolve("First"), 1000))
// const b=new Promise((resolve,reject) => setTimeout(() => resolve("Second"), 2000))
// const c=new Promise((resolve,reject) => setTimeout(() => resolve("Third"), 3000))
// return Promise.all([a,b,c])
// }
// waitAll().then((result)=>console.log(result)).catch((error) => console.error("Error:", error));

//exe8
const sayHi = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Hi!");
            resolve();
        }, 1000);
    });
};
const sayHowAreYou = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("How are you?");
            resolve();
        }, 2000);
    });
};
const sayGoodbye = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Goodbye!");
            resolve();
        }, 1000);
    });
};

const chainedGreetings = () => {
    return sayHi()
        .then(() => sayHowAreYou())
        .then(() => sayGoodbye());
};
chainedGreetings();