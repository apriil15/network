// 1. "ts-node ./src/tcp.ts"
// 2. open other terminal and run "nc 127.0.0.1 8080"

import { createServer } from 'net'

const server = createServer(socket => {
  console.log(
    `TCP handshake successful with ${socket.remoteAddress}:${socket.remotePort}`
  )

  socket.write('Hello client!')

  socket.on('data', data => {
    console.log(`received data ${data.toString()}`)
  })
})

server.listen(8080, '127.0.0.1')
