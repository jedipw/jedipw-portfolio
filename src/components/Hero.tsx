import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

class Hero extends React.Component<{}, { loaded: boolean }> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            loaded: false
        }
    }

    handleImageLoaded = () => {
        this.setState({ loaded: true });
    }

    scrollToContact = () => {
        const contact = document.getElementById("contact");

        if (contact) {
            window.scrollTo({
                top: contact.offsetTop - 50,
                behavior: 'smooth',
            });
        }
    };

    render() {
        const { loaded } = this.state;
        const imageStyle = !loaded ? { display: "none" } : {}

        const variants = {
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
        };

        return <div id="hero" className="container-fluid min-vh d-flex justify-content-center align-items-center p-5">
            <div className="row hero-div pt-5">
                <div className="container-fluid d-flex align-items-center mb-5">
                    {!loaded && <div className="profile-pic-loading" />}
                    <img src="/images/profile.png" alt="profilePic" className="profile-pic" onLoad={this.handleImageLoaded.bind(this)} style={imageStyle} />
                    <div className="ps-3">
                        <motion.div
                            variants={variants}
                            transition={{ duration: 0.4 }}
                            initial="hidden"
                            animate="visible"
                            className="roboto-bold fs-2 text-dark"
                        >
                            Hi there! I'm
                        </motion.div>
                        <TypeAnimation className="roboto-bold fs-1 mb-5 name"
                            sequence={[
                                '', 600,
                                'Pawin Nakvisai (Jedi)', 1000,
                            ]}
                            speed={1}
                            omitDeletionAnimation={true}
                        />
                    </div>

                </div>
                <div className="roboto-regular fs-5">
                    I am currently a fourth-year computer science student at the School of Information Technology, KMUTT,
                    and a full-stack software engineer intern at Agoda.
                    My passion lies in website and mobile application development, along with a keen interest in data science.
                    This website serves as a platform to showcase my skills, projects, and awards.
                    If you have any questions or would like to collaborate with me, please feel free to reach out.
                </div>
                <div className="d-flex justify-content-center pt-5">
                    <button
                        type="button"
                        className="btn roboto-bold green-3 contact-button fs-5 rounded-4 bg-white p-2"
                        onClick={() => this.scrollToContact()}
                    >
                        Contact Me
                        <i className="fa-regular fa-paper-plane ms-2"></i>
                    </button>
                </div>
            </div>

            <div className="container-fluid position-absolute bottom-0 d-none d-lg-flex justify-content-center align-items-center mb-3">
                <i className="fa-solid fa-computer-mouse me-2 green-3"></i>
                <p className="roboto-bold fs-5 mt-3">Scroll down</p>
                <i className="fa-solid fa-arrow-down ms-2 green-3"></i>
            </div>
        </div>
    }
}

export default Hero;