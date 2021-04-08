import { Socket } from 'phoenix';

const TOKEN = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJVc2VyOjEiLCJleHAiOjE2MjA0ODg3NzAsImlhdCI6MTYxNzg5Njc3MCwiaXNzIjoiTGVyb0FwcCIsImp0aSI6IjlkOTc0ZjFkLTY5NzgtNGI4Zi04N2RiLTNlYzA4YWZhMTFkZSIsInBlbSI6e30sInN1YiI6IlVzZXI6MSIsInR5cCI6ImFjY2VzcyJ9.hbO0xwjkzrvAip9f_WhIEc0mn6YZoXWyfevbD4Abhl8mHbRnu8jtFaR0AcnCNpgBkowWp9tC9dGiuYYeK8gZKA"

const socket = new Socket("ws://localhost:4000/socket", {params: {token: TOKEN}})

socket.connect();

const channel = socket.channel(`conversation:1`);
channel.join().receive('ok', (responsePayload) => {
  // do something like display the content of responsePayload.challenge
  console.log(responsePayload);
});
