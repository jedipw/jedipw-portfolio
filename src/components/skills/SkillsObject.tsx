import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { SkillsObjectProps } from '../../types';

function SkillsObject(props: SkillsObjectProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return <section ref={ref}>
        <div className="justify-content-center bg-green-1 p-3 rounded-5 skills-object mb-4 pb-3" style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>
            <h2 className="roboto-bold green-4 text-center fs-2 mb-4 mt-3">{props.name.toUpperCase()}</h2>
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-2">
                    {props.description.map((content, index) =>
                        <div key={index} className="d-flex mb-3 skills-description align-items-center">
                            <img src={content.imgUrl} alt={content.alt} className="skills-icon rounded-3"></img>
                            <p className="roboto-bold fs-5 ms-3 align-self-end">{content.name}</p>
                        </div>)}
                </div>
            </div>
        </div>
    </section>
}

export default SkillsObject;