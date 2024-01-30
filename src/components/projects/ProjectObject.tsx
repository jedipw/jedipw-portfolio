import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ProjectObjectProps } from '../../types';

function ProjectObject(props: ProjectObjectProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const scrollToTimeline = (screenType: string) => {
        if (screenType === "desktop") {
            const jumpIdDesktop = props.jumpIdDesktop;
            const contentDesktop = document.getElementById(jumpIdDesktop);

            if (contentDesktop) {
                window.scrollTo({
                    top: contentDesktop.offsetTop - 100,
                    behavior: 'smooth',
                });
            }
        }
        if (screenType === "mobile") {
            const jumpIdMobile = props.jumpIdMobile;
            const contentMobile = document.getElementById(jumpIdMobile);

            if (contentMobile) {
                window.scrollTo({
                    top: contentMobile.offsetTop - 100,
                    behavior: 'smooth',
                });
            }
        }
    };

    return (
        <section ref={ref}>
            <div className="project-object bg-green-1 mb-5 rounded-top-5 rounded-5" style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>
                <div className="grid-container">
                    <div className="image-container">
                        <img alt={props.name} src={props.imageUrl} className="project-image rounded-top-5" />
                    </div>
                    <div className="content-container">
                        <div className="p-3">
                            <p className="roboto-bold fs-3 green-4">{props.name}</p>
                            <p className="roboto-regular fs-5">{props.description}</p>
                        </div>
                        <div className="d-none d-md-flex buttons-container">
                            <button
                                type="button"
                                className="btn roboto-bold green-3 link-button fs-5 rounded-4 bg-white p-2 mb-3 ms-3"
                                onClick={() => scrollToTimeline("desktop")}
                            >
                                Jump
                                <i className="fa-solid fa-arrow-down ps-2"></i>
                            </button>
                        </div>
                        <div className="d-flex d-md-none buttons-container">
                            <button
                                type="button"
                                className="btn roboto-bold green-3 link-button fs-5 rounded-4 bg-white p-2 mb-3 ms-3"
                                onClick={() => scrollToTimeline("mobile")}
                            >
                                Jump
                                <i className="fa-solid fa-arrow-down ps-2"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectObject;