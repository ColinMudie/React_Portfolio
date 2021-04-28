import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectContent from "./ProjectContent";

function ProjectItem (props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    return (
        <motion.li className='project-li' layout onClick={toggleOpen} initial={{ borderRadius: 10}} >
            <motion.div whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.95 }}>
            <h1>{props.title}</h1>
            <img className='project-image' src={props.image} alt={props.title}/>
            </motion.div>
            <motion.div className="avatar" layout />
            <AnimatePresence>
                {isOpen && <ProjectContent content={props.content} url={props.url} github={props.github}/>}
                </AnimatePresence>
        </motion.li>
    );
}
export default ProjectItem;