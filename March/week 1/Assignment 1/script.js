function btnClick(){
    let promt = prompt("enter the number upto which you want to print FizzBuzz series")
    let number = parseInt(promt)
    for (let i = 1; i<=number; i++){
        if((i % 3==0) && (i % 5 == 0) ){
            document.write(" FizzBuzz ")
        }
        else if(i % 3==0){
            document.write(" Fizz ")
        }
        else if(i % 5 == 0){
            document.write(" Buzz ")
        }
        
        else{
            document.write(` ${i} `)
        }
    }
    
}