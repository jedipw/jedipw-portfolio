import { useState } from "react";
import { ProjectTimelineImageMobileProps } from "../../types";

function ProjectTimelineImageMobile(props: ProjectTimelineImageMobileProps) {
    const [loaded, setIsLoaded] = useState(false);
    const imageStyle = !loaded ? { display: "none" } : {}

    return (
        <img
            src={props.url}
            alt={props.alt}
            className="project-img-mobile rounded-3 bg-green-1 p-1 m-1"
            onLoad={() => setIsLoaded(true)}
            style={imageStyle}
        />
    );
}

export default ProjectTimelineImageMobile;