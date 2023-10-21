import { io } from "socket.io-client";
const URL = process.env.NODE_ENV === 'production' ? 'https://abhiisketch-book-server.onrender.com' : 'http://localhost:5000'
export const socket = io(URL);
// export const socket =io('http://localhost:5000')atus