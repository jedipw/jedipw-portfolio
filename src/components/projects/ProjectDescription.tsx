import { useInView } from "framer-motion";
import { useRef } from "react";

function ProjectDescription(props: any) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref}>
            <p
                className="project-description text-center pt-4 fs-5 ms-3 me-3"
                style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
            >
                {props.children}
            </p>
        </section>
    );
}

export default ProjectDescription;