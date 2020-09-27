import { Socket } from 'dgram';
import React, { useContext, useEffect, useState, createContext, ReactChildren } from 'react';
import io from 'socket.io-client';

export const socketContext = createContext(io());

export const SocketProvider:React.FC<React.ReactNode> = ({children}) => {

    const [socket, _] = useState(() => io());

    useEffect(() => {
        return function cleanup() {
            socket.close();
        }
    }, []);

    return (
        <socketContext.Provider value={socket}>
            {children}
        </socketContext.Provider>
    )
}

export const useSocket = (setEvent:(socket:SocketIOClient.Socket)=> void, removeEvent:(socket:SocketIOClient.Socket)=>void):SocketIOClient.Socket => {
    const socket = useContext(socketContext);

    socket.on('connect', () => {
        console.log('Socket.IO connected!')
    })

    useEffect(() => {
        setEvent(socket);
        return () => {
            removeEvent(socket);
        }
    }, []);

    return socket;
}
