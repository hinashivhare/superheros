import React from 'react';
import Fade from 'react-reveal/Fade';
import BgImage from "./images/BG.png";
import Protest from "./images/Protest.png";
import SpiderMan from "./images/spider-man.png";
import IronMan from "./images/iron-man.png";
import Hulk from "./images/hulk.png";
import Avengers from "./images/Avengers.png";
import Logo from "./images/Logo.png";
import { Button } from 'antd';
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom';
import CharacterModal from "./CharacterModal";

function LandingPage(props) {

    const handleDonateButton = () => {
        props.history.push({
            pathname: '/donate'
        })
    }

    return (
        <div className="landing-page">
            <header style={{ backgroundImage: `url(${BgImage})` }} className="App-header">
                <Link to="/"><img className="logo" src={Logo} /></Link>
                <img className="protest-img" src={Protest} />
                <div className="message">
                    <div className="title">NOT ALL HEROES WEAR CAPES</div>
                    <div className="content">This time we can’t save the world without your help. We need your help protecting
                    our superpowers from getting outlawed. Help us build support for the cause and in turn we promise to protect
                    the world from all its evil.</div>
                    <Button className='donate-button' onClick={handleDonateButton}>DONATE NOW!</Button>
                </div>
            </header>
            <div className="mission">
                <h1 className="title">OUR MISSION</h1>
                <div className="text">Yes, it’s right we need faith in today’s time when we know nothing is going right
                nor the politics nor the terrorism, people need hope and strength from superheroes. And that’s why
                we need superheroes. They give us a sense of right to fight the injustice that is happening around
                us.
                <br/>
                Governments around the world are starting a petition to outlaw super-powers from being used. Our hope is
                to gather enough support to stop this from happening so that we can continue fighting the bad and keeping
                this world a safe place to live.
                </div>
            </div>
            <div className="donate-cta">
                <Button className='donate-button' onClick={handleDonateButton}>DONATE NOW!</Button>
            </div>
            <div className="heroes">
                <h1 className="title">WHO WE ARE</h1>
                <div className="hero">
                    <Fade left>
                        <img className="hero-img" src={SpiderMan} />
                    </Fade>
                    <Fade right>
                        <div className="hero-text">
                            <h1 className="">Spider Man</h1>
                            <p>Spider-Man is a hero because he chooses to use his powers for the betterment of humankind
                            rather than himself. Any lesser man would use them for solely their own benefit. Peter
                                learned that the hard way.</p>
                            <p>Peter does these things because he knows the guilt associated with choosing not to. He
                                does what’s right regardless of the consequences, no matter how great.</p>
                            <CharacterModal id={'1009610'} />
                        </div>

                    </Fade>
                </div>
                <div className="hero upper-margin">
                    <Fade left>
                        <div className="hero-text">
                            <h1 className="">Iron Man</h1>
                            <p>Genius. Billionaire. Philanthropist. Tony Stark's confidence is only matched by his
                                high-flying abilities as the hero called Iron Man.</p>
                            <p>Although he is well known for being a snarky and sarcastic, he truly cares about the
                            people he’s trying to protect. His entire company is centered around protecting the
                                world. He wants people to be safe and be able to live their lives out in peace.</p>
                            <CharacterModal id={'1009368'} />
                        </div>
                    </Fade>
                    <Fade right>
                        <img className="hero-img" src={IronMan} />
                    </Fade>
                </div>
                <div className="hero upper-margin">
                    <Fade left>
                        <img className="hero-img" src={Hulk} />
                    </Fade>
                    <Fade right>
                        <div className="hero-text">
                            <h1 className="">Hulk</h1>
                            <p>A hero of few words and incredible strength, the Hulk has long been pursued by those who
                                want to use his immense power for their own purposes.</p>
                            <p>As a member of the Avengers, Hulk helps smash the unimaginable threats that no Hero could
                            face alone, hoping to at least prove to the world that he is the strongest HERO there
                                is!</p>
                            <CharacterModal id={'1009351'} />
                        </div>
                    </Fade>
                </div>
                <div className="hero upper-margin">
                    <Fade left>
                        <div className="hero-text">
                            <h1 className="">And many more</h1>
                            <p>All these superheroes would together dedicate their powers to save the world and to fight
                                the battles that we never could.</p>
                            <p>The Avengers Initiative was a secret project created by S.H.I.E.L.D. to create the
                            Avengers, a response team comprised of the most able individuals humankind has to offer.
                            The Initiative will defend Earth from imminent global threats that are beyond the
                                war fighting capability of conventional military forces.</p>
                        </div>
                    </Fade>
                    <Fade right>
                        <img className="hero-img large" src={Avengers} />
                    </Fade>
                </div>
            </div>
            <div className="donate-cta">
                <Button className='donate-button' onClick={handleDonateButton}>DONATE NOW!</Button>
            </div>
        </div>
    );
}

export default withRouter(LandingPage);
