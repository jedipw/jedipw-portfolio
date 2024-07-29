import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ProjectTimelineObjectMobileProps } from '../../types';
import ProjectTimelineImageMobile from './ProjectTimelineImageMobile';

function ProjectTimelineObjectMobile(props: ProjectTimelineObjectMobileProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <span ref={ref} id={props.jumpIdMobile}>
            <div className="project-card-mobile" style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>
                <h3 className="title-mobile fs-2 roboto-bold green-4">{props.name}</h3>
                <h4 className="roboto-bold fs-3 green-3">{props.date}</h4>
                <p className="fs-5 roboto-regular pt-4">{props.description}</p>
                <p className="fs-5 roboto-regular pt-4"><strong>Tools:</strong> {props.tools}</p>
                {props.link.map((content, index) =>
                    <a key={index} href={content.url} target="_blank" rel="noreferrer">
                        <button
                            type="button"
                            className="btn roboto-bold green-3 contact-button fs-5 rounded-4 bg-white p-2 mt-4 me-1">
                            {content.buttonName}
                            <i className="fa-solid fa-up-right-from-square ps-2"></i>
                        </button>
                    </a>)}
                <div className="row mt-5 mb-3">
                    {props.img.map((content, index) =>
                        <ProjectTimelineImageMobile
                            key={index}
                            url={content.url}
                            alt={content.alt}
                        />
                    )}
                </div>
            </div>
        </span>
    );
}

export default ProjectTimelineObjectMobile;