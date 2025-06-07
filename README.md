# 💬 Real-Time Chat Application

This is a simple real-time chat application built using **Node.js**, **Socket.IO**, **HTML**, and **CSS**.

## 🌟 Features

- Join the chat by entering your username.
- Real-time messaging between users.
- Notification when a user joins or leaves the chat.
- User messages appear on the left or right based on sender.
- GitHub-dark styled interface.
- Option to exit the chat (logout button).
- No database needed initially (temporary session-based chat).

## 🛠️ Technologies Used

- **Node.js** (Backend Server)
- **Express.js** (Serving static files)
- **Socket.IO** (Real-time WebSockets)
- **HTML5** & **CSS3** (Frontend Interface)
- **Vanilla JavaScript** (Client-side logic)

## 🚀 How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the server:
   ```bash
   node server.js
   ```

4. Open your browser and go to:
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
/public
  ├── index.html         # Login Page
  ├── chat.html          # Chat Page
  ├── styles.css         # Styling (dark theme)
  └── script.js          # Frontend JS logic

server.js                # Main Node.js server file
```

## 📌 Notes

- All messages are stored in memory temporarily.
- You can add a database like MongoDB later to persist chat history.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).