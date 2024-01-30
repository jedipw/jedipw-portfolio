import React from 'react';

class Navbar extends React.Component<{}, { activeSection: string, isNavOpen: boolean }> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            activeSection: 'hero',
            isNavOpen: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const scrollPosition = window.scrollY;
        const navbarHeight = 50;
        const heroSection = document.getElementById('hero');
        const skillsSection = document.getElementById('skills');
        const projectsSection = document.getElementById('projects');
        const awardsSection = document.getElementById('awards');
        const contactSection = document.getElementById('contact');

        if (heroSection && scrollPosition >= heroSection.offsetTop - navbarHeight && scrollPosition < skillsSection!.offsetTop - navbarHeight) {
            this.setState({ activeSection: 'hero' });
        } else if (skillsSection && scrollPosition >= skillsSection.offsetTop - navbarHeight && scrollPosition < projectsSection!.offsetTop - navbarHeight) {
            this.setState({ activeSection: 'skills' });
        } else if (projectsSection && scrollPosition >= projectsSection.offsetTop - navbarHeight && scrollPosition < awardsSection!.offsetTop - navbarHeight) {
            this.setState({ activeSection: 'projects' });
        } else if (awardsSection && scrollPosition >= awardsSection.offsetTop - navbarHeight && scrollPosition < contactSection!.offsetTop - navbarHeight) {
            this.setState({ activeSection: 'awards' });
        } else if (contactSection && scrollPosition >= contactSection.offsetTop - navbarHeight) {
            this.setState({ activeSection: 'contact' });
        }
    };

    scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);

        if (section) {
            window.scrollTo({
                top: section.offsetTop - 50,
                behavior: 'smooth',
            });
        }
    };

    handleClick = () => {
        this.setState({ isNavOpen: !this.state.isNavOpen });
    };

    render() {
        const { activeSection, isNavOpen } = this.state;

        return (
            <div className={`container-fluid d-flex position-fixed bg-white z-1 ${activeSection !== 'hero' && 'shadow-bottom'}`}>
                <h1 onClick={() => this.scrollToSection('hero')} className="righteous fs-4 mt-3 mb-3 ms-2 ms-md-4 user-select-none cursor-pointer">Jedipw</h1>
                <div className="d-none d-md-flex position-absolute end-0 me-5 mt-3">
                    <p onClick={() => this.scrollToSection('hero')} className={`user-select-none cursor-pointer nav-button roboto-bold fs-5 ${activeSection === 'hero' ? 'active' : 'text-secondary'}`}>Home</p>
                    <p onClick={() => this.scrollToSection('skills')} className={`user-select-none cursor-pointer nav-button roboto-bold fs-5 ms-5 ${activeSection === 'skills' ? 'active' : 'text-secondary'}`}>Skills</p>
                    <p onClick={() => this.scrollToSection('projects')} className={`user-select-none cursor-pointer nav-button roboto-bold fs-5 ms-5 ${activeSection === 'projects' ? 'active' : 'text-secondary'}`}>Projects</p>
                    <p onClick={() => this.scrollToSection('awards')} className={`user-select-none cursor-pointer nav-button roboto-bold fs-5 ms-5 ${activeSection === 'awards' ? 'active' : 'text-secondary'}`}>Awards</p>
                    <p onClick={() => this.scrollToSection('contact')} className={`user-select-none cursor-pointer nav-button roboto-bold fs-5 ms-5 ${activeSection === 'contact' ? 'active' : 'text-secondary'}`}>Contact</p>
                </div>
                {isNavOpen ? <div className="bg-danger">
                    <div className="d-flex d-md-none position-absolute end-0 me-4 mt-3">
                        <i onClick={() => this.handleClick()} className="fa-solid fa-xmark fa-2x text-secondary"></i>
                    </div>
                    <div className={"container-fluid d-flex position-absolute start-0 top-50 mt-4 justify-content-around d-sm-none bg-white flex-wrap pb-2"}>
                        <div><p onClick={() => { this.scrollToSection('hero'); this.handleClick(); }} className={`user-select-none cursor-pointer nav-button roboto-bold fs-5 ${activeSection === 'hero' ? 'active' : 'text-secondary'}`}>Home</p></div>
                        <div><p onClick={() => { this.scrollToSection('skills'); this.handleClick(); }} className={`user-select-none cursor-pointer nav-button roboto-bold fs-5 ms-5 ${activeSection === 'skills' ? 'active' : 'text-secondary'}`}>Skills</p></div>
                    </div>
                    <div className={"container-fluid d-flex position-absolute start-0 top-100 mt-5 justify-content-around d-sm-none bg-white flex-wrap"}>
                        <div><p onClick={() => { this.scrollToSection('projects'); this.handleClick(); }} className={`user-select-none cursor-pointer nav-button roboto-bold fs-5 ${activeSection === 'projects' ? 'active' : 'text-secondary'}`}>Projects</p></div>
                        <div><p onClick={() => { this.scrollToSection('awards'); this.handleClick(); }} className={`user-select-none cursor-pointer nav-button roboto-bold fs-5 ms-5 ${activeSection === 'awards' ? 'active' : 'text-secondary'}`}>Awards</p></div>
                    </div>
                    <div className={"container-fluid d-flex position-absolute start-0 top-custom mt-5 justify-content-around d-sm-none bg-white rounded-5 rounded-top-0 flex-wrap shadow-bottom"}>
                        <div><p onClick={() => { this.scrollToSection('contact'); this.handleClick(); }} className={`user-select-none cursor-pointer nav-button roboto-bold fs-5 ${activeSection === 'contact' ? 'active' : 'text-secondary'}`}>Contact</p></div>
                    </div>
                </div>
                    :
                    <div className="d-flex d-md-none position-absolute end-0 me-4 mt-3">
                        <i onClick={() => this.handleClick()} className="fa-solid fa-bars fa-2x text-secondary"></i>
                    </div>
                }
            </div>
        );
    }
}

export default Navbar;
