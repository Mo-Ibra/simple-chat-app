const socket = io();
const chatBox = document.querySelector(".chat-messages");
const input = document.querySelector("input");
const button = document.querySelector(".send-btn");
const logoutBtn = document.querySelector(".logout-btn");

const username = sessionStorage.getItem("username") || "مجهول";
socket.emit("join", username);

function appendMessage(data, isMe = false) {
  const msg = document.createElement("div");
  msg.classList.add("message");

  if (data.user === "system") {
    msg.classList.add("system");
    msg.innerText = data.text;
  } else if (data.user === username) {
    msg.classList.add("me");
    msg.innerHTML = `<strong>أنا:</strong> ${data.text}`;
  } else {
    msg.classList.add("other");
    msg.innerHTML = `<strong>${data.user}:</strong> ${data.text}`;
  }

  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

socket.on("message", (data) => {
  appendMessage(data);
});

button.addEventListener("click", () => {
  const message = input.value;
  if (message.trim()) {
    socket.emit("chatMessage", message);
    input.value = "";
  }
});

logoutBtn.addEventListener("click", () => {
  sessionStorage.removeItem("username");
  window.location.href = "/";
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") button.click();
});
