let a=parseInt(prompt("enter a number"));


let palindrome=(a)=>{
    let temp=a;
    let b;
    let c=0;
    while(a>0){
        b=a%10;
        a=parseInt(a/10);
        c=c*10+b
    }
    if(temp==c){
        return `palindrome`
    }
    else{
        return `not a palindrome`
    }
}
let result=palindrome(a);
console.log(result);
document.write(`The Given Number ${a} and it is ${result}`)