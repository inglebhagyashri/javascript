//  program 1
let x = 10
let y = 30
 if(x>y){
    console.log("x is greater")
 }
else{
    console.log("y is greater")
}
//  program 2
// ternary operator
age= 19
let q1=age= 18? console.log("can drive"):console.log("can't drive")

//  program 3
// switch case without break
let city = "nagpur"
switch(city){
    case "nagpur":
        console.log("MH")
        case " jaipur":
            console.log("RJ")
                case "indor":
                     console.log("MP")
}
// program 4
// SWITCH CASE WITH BREAK
let city2 = "nagpur"
switch(city2){
case "nagpur":
console.log("MH")
break
case " jaipur":
console.log("RJ")
break
case "indor":
console.log("MP")
break
}
// program 5
//  switch case with nore than one obtion
let city3 = "jaipur"
switch(city3){
    case "nagpur":
        case "mumbai":
            console.log("MH")
            break
            case "jaipur":
                case " varanasi":
                    console.log("MP")
                    break
                    default:
                    console.log("incorrect input")
                 

}
// program 6
let a = 10
let b = 30
let c = 40
let greatest = true
switch (greatest){
    case a>b && a>c:
        console.log(" a is greater")
        case b>a && b>c:
            console.log("b is greater")
            default :
            console.log("c is greater")
}
