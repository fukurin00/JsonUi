import React, {useState} from "react";
import GenericTemplate from "../templates/genericTemplate";

import { SocketProvider, useSocket } from '../templates/useSocket';

type HumanOpt ={
  id: number
  x: number 
  y: number
  elapsedTime: number
  status: string
};


type HumanState = {
  data: HumanOpt[],
  idList: number[]
}


class Human extends React.Component<{}, HumanState>{
 
  handle(msg: string){
    const payload = JSON.parse(msg);
    console.log("get human" ,payload.id, payload);

    let humans: HumanOpt[] = this.state.data;
    let idList: number[] = this.state.idList;
    const i :number= idList.indexOf(payload.id);
    if (i  === -1){
        humans.unshift(payload)
        idList.push(payload.id)
    }else{
        humans[i] = payload
    }

    this.setState({data: humans, idList: idList});
    console.log(this.state.data)
  }


  render(){
  return (
    <GenericTemplate title="Human">
      <>Humans</>
    </GenericTemplate>
  )
  }
};

export default Human;