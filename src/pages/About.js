import AboutMe from '../components/AboutMe';
import SimpleCard from '../components/SimpleCard';
import Headshot from '../components/Headshot';
import Resume from '../components/Resume';
import './About.css';
import headshot1 from '../assets/images/headshot_1.jpg';
import headshot2 from '../assets/images/headshot_2.jpg';
import headshot3 from '../assets/images/headshot_3.jpg';
import tchalla from '../assets/images/tchalla.png';

function About() {
    return (
        <div className="App">
            <div id="about-background"></div>
            <div className="row">
                <div className="col-md-8">
                    <Headshot title='headshot-1' image={headshot1} />
                    <Resume/>
                </div>
                <div className="col-md-3">
                    <AboutMe />
                    <Headshot title='headshot-2' image={headshot2} />
                </div>
                <div className="col-md-1"></div>
            </div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-4 custom-row">
                    <SimpleCard
                        src={tchalla}
                        title="T'challa"
                        text="Here's my cat T'challa, he helps me code by either sleeping on my lap or by attempting to knock over any
                    glass on my desk."
                        mainClass='cat-card'
                        imgClass='cat-img'
                    />
                </div>
                <div className="col-md-4 custom-row">
                    <SimpleCard
                        src={headshot3}
                        title='Modular Synthesizer'
                        text='This is my modular synthesizer, The mess of wires changes from week to week, to create fun
                        new sounds.'
                        mainClass='modular-card'
                        imgClass='modular-img'
                    />
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    )
}
export default About;