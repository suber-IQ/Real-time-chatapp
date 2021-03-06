const socket = io()

let name;
let textarea = document.querySelector("#textarea");
let messageArea = document.querySelector(".message__area")

do{
  name = prompt("Please Inter Your Name")
}while(!name)

textarea.addEventListener("keyup", (e) =>{
    if(e.key === "Enter"){
          sendMessage(e.target.value)
    }
})

const sendMessage = (message) => {
      let msg = {
          user: name,
          message: message.trim()
      }

      // Append message
      appendMessage(msg,"outgoing")
    //   reset textarea message
      textarea.value = ""

      scrollToBottom();

    //   Send to server
    socket.emit("message", msg)
}

const appendMessage = (msg, type) => {
   let mainDiv = document.createElement("div")
   let className = type;
   mainDiv.classList.add(className, "message")

   let markup = `
   <h4>${msg.user}</h4>
   <p>${msg.message}</p>
   `
   mainDiv.innerHTML = markup
   messageArea.appendChild(mainDiv)

}

// Recive messages

socket.on("message",(msg) => {
    appendMessage(msg,"incoming")
    scrollToBottom();
})

// Scroll to Bottom

const scrollToBottom = () => {
     messageArea.scrollTop = messageArea.scrollHeight
}



// +++++++++++++++++++++++++++++++++++++++

// ⭐ Practice from me

// const socket = io();

// let name;
// let textarea = document.querySelector("#textarea")
// let messageArea = document.querySelector(".message__area")

// do {
//     name = prompt("Please Enter Your Name")
// } while (!name);

// textarea.addEventListener("keyup", (e) => {
//       if(e.key === "Enter"){
//           sendMessage(e.target.value)
//       }
// })

// const sendMessage = (message) => {
//     let msg = {
//         user: name,
//         message: message
//     }
//     appendMessage(msg,"outgoing")
// }

// const appendMessage = (msg, type) =>{
//     let mainDiv = document.createElement("div")
//     let className = type;
//     mainDiv.classList.add(className,"message");

//    let markup = `
//    <h4>${msg.user}</h4>
//     <p>${msg.message}</p>
//    `
//    mainDiv.innerHTML = markup
//    messageArea.appendChild(mainDiv)

   
// }