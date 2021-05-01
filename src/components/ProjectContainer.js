import React from 'react';
import { AnimateSharedLayout, motion } from "framer-motion";
import ProjectItem from "./ProjectItem";

function ProjectContainer () {
    return (
        <AnimateSharedLayout>
            <motion.ul className='project-ul' layout initial={{ borderRadius: 25 }}>
                <ProjectItem key='1' 
                    title='Eat Da Burger' 
                    content="This app tracks burgers you want to eat and burgers you've devoured! 
                            The goal with this app was to combine a MySQL database with Express, 
                            Express-handlebars, and some ORM to Create, Read, Update, and Delete data 
                            from the MySQL db. The burger app follows the MVC design pattern."
                    url='https://eat-da-cheese-curd-burger.herokuapp.com/'
                    github='https://github.com/ColinMudie/BurgerEater'
                    image='src/assets/images/eat_da_burger.png'
                    />
                <ProjectItem key='2' 
                    title='Planet Fitness Quiz' 
                    content='This is a fun timed quiz for the member service representatives of 
                            the Planet Fitness in Mount Pleasant to take and test their knowledge. 
                            The Quiz also features the use of local storage to save different users attempts onto the same computer 
                            to be viewed later on the scoredboard. The scoreboard will sort the highest score to the top.'
                    url='https://colinmudie.github.io/Planet_Fitness_Quiz/'
                    github='https://github.com/ColinMudie/Planet_Fitness_Quiz'
                    image='src/assets/images/planet_fitness_quiz.png'
                    />
                <ProjectItem key='3'
                    title='MAJC'
                    content="MAJC is a top-down RPG built using Phaser v3-- 
                            a javascript game framework used to make HTML5 games for dekstop and mobile-- 
                            and MySQL for storing user and game information hosted on a server created using 
                            Node.js. Made with the help of Mariah Truttling, Andrew Chappell, and Joshua Korf."
                    url='https://who-knows10120.herokuapp.com/'
                    github='https://github.com/ColinMudie/MAJC'
                    image='src/assets/images/majc.png'
                />
                <ProjectItem key='4'
                    title='Note Taker'
                    content="This is an app devised for creating and retrieving notes taken by the user. 
                            The purpose of the app was to utilize express.js and Heroku to operate the app"
                    url='https://damp-ridge-49255.herokuapp.com/'
                    github='https://github.com/ColinMudie/Note_Taker'
                    image='src/assets/images/note_taker.png'
                />
            </motion.ul>
        </AnimateSharedLayout>
    );
}
export default ProjectContainer;