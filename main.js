
// these are the  few exaples of the call back

console.log("user 1 made request")
console.log("in database the data register in 5 sec")
console.log("then they are going to start the work")
console.log("the process is going to complete and we are going to reach out")

console.log("user 2 made request")
setTimeout(callback, 5000)

console.log("user 3 made request")
console.log("in database the data register in 5 sec")
console.log("Data deliverd to the user 3")


 
function callback(){
    console.log("the data will be registerd in database and deliverd ton the user 1 in 5sec")
}



function first(){
    console.log("this is the first statment")
}

function second(){
    console.log("this the the second statment")
}

function third(){
    console.log("this is the third statment")
}

first()


// promise with some basic examples

let data1=new Promise((resolve, reject)=>{

    setTimeout(()=>{
        resolve("the promise has been fullfilled")
    })
    })
    
    
    data1.then((value)=>{
        console.log(value)
    })






let data2=new Promise((resolve, reject)=>{

setTimeout(()=>{
    
    reject(new Error("the promise has been rejected"))
})
})


data2.catch((error)=>{
    console.log("some error occured so that it is rejected")
})

//closure function with example






function first(){

    let a =12345
    function second(){
        console.log(a)
    }
    second()
}


function name1(){
    let fname="aaditya"
    function name2(){
        console.log(fname)
        let age=24
        function name3(){
            console.log(age)
        }
        name3()
    }
    name2()
}
name1()


// async & await in javascript


async function temp(){

    let bangalore=new Promise((resolve, reject)=>{

        setTimeout(()=>{
            resolve("21 degree")
        })
        });

        let tamilnadu=new Promise((resolve, reject)=>{

            setTimeout(()=>{
                resolve("40 degree")
            })
            });


            let bangWether= await bangalore
            let tamilnaduWether= await tamilnadu


            return({bangWether, tamilnaduWether})



}
let a=temp()
console.log(a);
a.then((value)=>{
    console.log(value)
})
















