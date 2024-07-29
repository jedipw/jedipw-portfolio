import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ProjectTimelineObjectDesktopProps } from '../../types';
import ProjectTimelineImageDesktop from './ProjectTimelineImageDesktop';

function ProjectTimelineObjectDesktop(props: ProjectTimelineObjectDesktopProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} id={props.jumpIdDesktop}>
            <div className="project-card" style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>
                <h3 className="title fs-2 roboto-bold green-4">{props.name}</h3>
                <h4 className="roboto-bold fs-3 green-3">{props.date}</h4>
                <p className="fs-5 roboto-regular pt-4">{props.description}</p>
                <p className="fs-5 roboto-regular pt-4">
                    <strong>Tools:</strong> {props.tools}
                </p>
                {props.link.map((content, index) =>
                    <a key={index} href={content.url} target="_blank" rel="noreferrer">
                        <button
                            type="button"
                            className="btn roboto-bold green-3 contact-button fs-5 rounded-4 bg-white p-2 mt-4 me-3"
                        >
                            {content.buttonName}
                            <i className="fa-solid fa-up-right-from-square ps-2"></i>
                        </button>
                    </a>)}
                <div className="row bg-green-1 p-5 rounded-5 mt-5 mb-4">
                    {props.imgPattern.map((count, rowIndex) => {
                        const startIndex = rowIndex === 0 ? 0 : props.imgPattern.slice(0, rowIndex).reduce((acc, val) => acc + val, 0);
                        return (
                            <div key={rowIndex} className="container-fluid d-flex justify-content-center">
                                {[...Array(count)].map((_, colIndex) => (
                                    <ProjectTimelineImageDesktop
                                        key={colIndex}
                                        startIndex={startIndex}
                                        colIndex={colIndex}
                                        img={props.img}
                                        count={count}
                                    />
                                ))}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default ProjectTimelineObjectDesktop;