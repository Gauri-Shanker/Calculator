// let display = document.getElementById("display")
const solve = (char) => {
    let display = document.getElementById("display")
    display.value += char;
}
const cleart = () => {
    let dis = document.getElementById("display")
    dis.value = ""
}
const back = () => {
    let dis = document.getElementById("display")
    dis.value = dis.value.slice(0, -1);
}
const result = () => {
    let dis = document.getElementById("display")
    let expression = dis.value;
    try {dis.value = eval(expression);
    }
    catch{
        dis.value="Invalid Syntax"
    }
}