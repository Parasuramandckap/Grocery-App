
let submit = document.querySelector("#submit")
//console.log(submit)
let input = document.querySelector("#grocery")
//console.log(input)
let container = document.querySelector(".grocery-container")
//console.log(container)
let ul = document.querySelector(".ul-main")
//console.log(ul)

let pTag = document.querySelector(".alert")

let clear = document.querySelector(".clear-btn")
submit.addEventListener("click", (e) => {
    e.preventDefault()
    //console.log("hi")
    if (input.value !== '') {

        container.classList.add('show')
        let li = document.createElement("li")
        li.innerText = input.value

        ul.appendChild(li)
        pTag.style.color = "green"
        let deletebtn = document.createElement("button")
        deletebtn.innerText = "X"
        li.appendChild(deletebtn)
        display("items add")
        input.value = ''



        deletebtn.addEventListener("click", (e) => {
            display("items removed")
            e.target.parentElement.remove();
            pTag.style.color = "red"

            
        })



    }
    else {
        display("empty value canot be add")
        pTag.style.color = "red"
        

    }



})


function display(text) {
    pTag.innerText = text
    window.setTimeout(() => {
        pTag.innerText = " "
    }, 1000)
}

clear.addEventListener("click", (e) => {
    //console.log(e.target.children)
    pTag.style.color = "red"
    container.classList.remove('show')
    display("no task")
    let lis = document.querySelectorAll("li")
    for(let i=0;i<lis.length;i++){
        lis[i].remove()
    }


})


