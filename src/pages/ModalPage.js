import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";
export default function ModalPage() {
    const [showModel,setShowModel]=useState(false);
    const handelClick= ()=>{
        setShowModel((prev)=>!prev);
    }
    const handelClose=()=>{
        setShowModel(false);
    }
  return (
    <div>
      <Button onClick={handelClick} primary>Open Model</Button>
     {showModel && <Modal onCLose={handelClose}></Modal> } 
    </div>
  );
}
