import AboutMe from '../components/AboutMe';
import SimpleCard from '../components/SimpleCard';
import Headshot from '../components/Headshot';
import './About.css';

function About() {
    return (
        <div className="App">
            <div className="background"></div>
            <div className="row">
                <div className="col-md-8">
                    <Headshot title='headshot-1' image='/assets/images/headshot_1.jpg' />
                </div>
                <div className="col-md-3">
                    <AboutMe />
                    <Headshot title='headshot-2' image='/assets/images/headshot_2.jpg' />
                </div>
                <div className="col-md-1"></div>
            </div>
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