import React ,{useState} from "react";
import GenericTemplate from "../templates/genericTemplate"

import { SocketProvider, useSocket } from '../templates/useSocket';


const Test:React.FC = () => {
    const [value, setValue] = useState<string>("no");
    const socket = useSocket((socket) => {
    socket.on('wes', (res:string) => {
        setValue(res);
    });
    }, (socket) => {
    socket.off('wes');
    });
    return (
        <GenericTemplate title="test">
            <SocketProvider>
                {value}
            </SocketProvider>
        </GenericTemplate>
    )
}

export default Test