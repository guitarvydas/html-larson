// liveupdate.js
import net from 'net';
import crypto from 'crypto';

export default function liveUpdate(key, value) {
    return new Promise((resolve, reject) => {
        const socket = new net.Socket();
        
        socket.connect(8966, 'localhost', () => {
            // Create WebSocket handshake key
            const wsKey = crypto.randomBytes(16).toString('base64');
            
            // Send handshake
            const handshake = 
                `GET / HTTP/1.1\r\n` +
                `Host: localhost:8966\r\n` +
                `Upgrade: websocket\r\n` +
                `Connection: Upgrade\r\n` +
                `Sec-WebSocket-Key: ${wsKey}\r\n` +
                `Sec-WebSocket-Version: 13\r\n` +
                `\r\n`;
            
            socket.write(handshake);
        });

        socket.on('data', (data) => {
            if (data.toString().includes('101 Switching Protocols')) {
                // Handshake successful, send message
                const mevent = [{[key]: value}];
                const jsonMev = JSON.stringify(mevent);
                
                // Create WebSocket frame
                const frameBuffer = Buffer.alloc(10 + jsonMev.length);
                
                // First byte: FIN=1, RSV1-3=0, Opcode=1 (text)
                frameBuffer[0] = 0x81;
                
                // Second byte: Mask bit and payload length
                frameBuffer[1] = 0x80 | jsonMev.length;
                
                // Masking key (4 bytes)
                const maskKey = Buffer.from([0x01, 0x02, 0x03, 0x04]);
                maskKey.copy(frameBuffer, 2);
                
                // Mask the payload
                const payload = Buffer.from(jsonMev);
                for (let i = 0; i < payload.length; i++) {
                    frameBuffer[i + 6] = payload[i] ^ maskKey[i % 4];
                }
                
                socket.write(frameBuffer.slice(0, 6 + jsonMev.length));
                
                // Close after brief delay
                setTimeout(() => {
                    socket.end();
                    resolve();
                }, 50);
            }
        });

        socket.on('error', (error) => {
            console.error('Socket error:', error);
            resolve();  // Still resolve to continue program flow
        });
    });
}
