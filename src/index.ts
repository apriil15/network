// 1. "npm run start"
// 2. open other terminal and run "nc -u 127.0.0.1 5500"

// -u: UDP mode

import { createSocket } from 'dgram'

const socket = createSocket('udp4')

socket.bind(5500, '127.0.0.1')

socket.on('message', (msg, info) => {
  console.log(msg, info)
})
