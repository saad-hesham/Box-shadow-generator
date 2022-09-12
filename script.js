// call inputs and set important data
const data = {
    info:[
        {input:document.getElementById("horizon")},//horizontal input
        {input:document.getElementById("vertical")},//vertical input
        {input:document.getElementById("blur")},//blur radius input
        {input:document.getElementById("spread")},//spread radius input
        {input:document.getElementById("color")},//color input
    ]
}
let valuesArr = []; //this array will contain the data of the inputs
function applyChanges(){//this function will apply the changes to the box 
    document.querySelector(".box").style.boxShadow=finalvalue
    document.querySelector(".valueContainer").innerHTML = `box-shadow :${finalvalue}`
    
    
}
let changeValues = function(input,V){//v short for value 
    input.parentElement.children[0].children[1].innerHTML =input.value+"px" //this line will change the values of the span 
    
V=input.value;
valuesArr.push(V)
console.log(valuesArr)
function returnValues(){ //this function will return the last value of the array
    let value = null;
    for(let i=0 ;i<= valuesArr.length-1 ;i++){
        value = [`${valuesArr[i-5]}px ${valuesArr[i-4]}px ${valuesArr[i-3]}px ${valuesArr[i-2]}px ${valuesArr[i-1]}`]
    
    }
    return value
}
finalvalue = returnValues()
applyChanges()

}

// looping on data object and add changvalue function to all inputs
data.info.map(function(i){
    window.addEventListener("input",function(){
        changeValues(i.input)
    })
})

window.addEventListener("input",function(){ //this function will add event on the inputs 
    changeValues(data.info[0].input)
})

