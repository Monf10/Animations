import {motion} from "framer-motion"
import { useState } from "react";
import NotificationVisual from "./components/NotificationVisual";

function App() {
  const [noticationOpen , setNoticationOpen] = useState(false)
  const close = () => setNoticationOpen(false)
  const open = () => setNoticationOpen(true)
  return (
    <div >
      <motion.button
      whileHover={{scale :1.1 }}     
      whileTap = {{scale : 0.9}} 
      className= "clickMebtn"
      onClick={() => (noticationOpen ? close() : open())}
      >
        Click Me
      </motion.button>

      {noticationOpen && <NotificationVisual
      noticationOpen = {noticationOpen}
      handleClose = {close}
      text = {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
      ></NotificationVisual>}
    </div>
    );
   
   
}

export default App;