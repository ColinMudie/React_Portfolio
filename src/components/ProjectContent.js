import React from 'react';
import { motion } from "framer-motion";

function ProjectContent(props) {
    // if the project contains a front end live link, render the link
    if (props.url){
        return (
            <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div >
                    <p className='project-content'>{props.content} </p>
                    <a className='project-github' href={props.github} target='_blank' rel='noreferrer'>Github </a>
                    <a className='project-link' href={props.url} target='_blank' rel='noreferrer'>Live Link</a>
                </div>
            </motion.div>
        );
    } 
    // if the project doesn't contain a live link do not render a link
    else {
        return (
            <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div >
                    <p className='project-content'>{props.content} </p>
                    <a className='project-github' href={props.github} target='_blank' rel='noreferrer'>Github</a>
                </div>
            </motion.div>
        )
    }
    
}
export default ProjectContent;
