import ReactDOM from "react-dom";
import Button from "./Button";
import { useEffect } from "react";
export default function Modal({ onCLose }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return ()=>{
        document.body.classList.remove("overflow-hidden");
    }
  }, []);
  return ReactDOM.createPortal(
    <div>
      <div className="fixed inset-0 bg-gray-300 opacity-80">
        <div className="fixed inset-40 p-10 bg-white">
          <div className="flex flex-col justify-between h-full">
            I am Model
            <div className="flex justify-end">
              <Button onClick={onCLose} primary>
                Accept
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}
