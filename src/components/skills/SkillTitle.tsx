import { useInView } from "framer-motion";
import { useRef } from "react";

function SkillTitle(props: any) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref}>
            <span
                className="roboto-bold green-1 fs-1 mb-5"
                style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
            >
                {props.children}
            </span>
        </section>
    );
}

export default SkillTitle;