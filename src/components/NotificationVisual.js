import {motion} from "framer-motion"
import AnimationEngine from "./AnimationEngine"
// როგორც ანიმაციას ვწერთით სხვადასხვა მდოგმარეობებში cssში იგივეს ვაკეთებთ აქაც, თუმცა ვიყენებთ ობიექტს
const dropIn ={
    //შიდა მახასიათებლები და მნისვენელობები თქვენ უნდა მოიფიქროთ
    hidden  : {
        y : "-100vh", 
        opacity : 0,

    },
    visible : {
        y : "0",
        opacity :1
    },
    exit : {
        y : "100vh",
        opacity : 0,
    },
}
const NotificationVisual =({handleClose,text}) => {
    return(
        //ვიძახებთ ძრავას და მის შიგნით ვქმნით დივს
        <AnimationEngine onClick={handleClose}>
            <motion.div
            className="animation-div"
            variants={dropIn} //გადავეცით ზემოთ აღწერილი ობიექტი, იმისთვის რომ ამუშავდეს სტილი
            initial = "hidden"
            animate = "visible"
            exit = "exit">
                {/* ტექსტს მიიღებს გამოზახებისას  */}
                <p>{text}</p> 
                <button  className="closeBtn" onClick={handleClose}> Close</button>
            </motion.div>
        </AnimationEngine>
    )}
export default NotificationVisual