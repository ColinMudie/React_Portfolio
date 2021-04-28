import AboutMe from '../components/AboutMe';
import SimpleCard from '../components/SimpleCard';

function About () {
    return (
        <div className="App">
            <AboutMe/>
            <SimpleCard 
            src='/assets/images/tchalla.png' 
            title="T'challa"
            text="Here's my cat T'challa, he helps me code by either sleeping on my lap or by attempting to knock over any
                    glass on my desk."
            class='cat-card'
            />
            <SimpleCard 
            src='/assets/images/Modular_rig.jpg'
            title='Modular Synthesizer'
                text='This is my modular synthesizer, The mess of wires changes from week to week, to create fun
                        new sounds.'
            class='modular-card'
            />
        </div>
    )
}
export default About;