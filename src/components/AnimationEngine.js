import {motion} from "framer-motion"

// შექმენით ძრავა, სადაც აღვწერეთ ანიმაციის ზოგადი ქცევა. ეტალური მნიშვნელობები უნდა მიიღოს მემკვიდრეობით/ გამოძახებისას
const AnimationEngine = ({children, onClick}) =>{ // არგუმენტების გასაზღვრა აუცილებელია იმის მიხედვით რა ვიზუალის შექმნას გეგმავთ
    return(
    <motion.div
        className="animationEngine"
        onClick={onClick}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
    >
        {/*  დივის შიგნით რა მოხდება ესეც განსაზღვრულია შვილობილი მნიშვნელობით */}
        {children}
    </motion.div>)

};

export default AnimationEngine