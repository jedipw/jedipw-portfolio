import { useState } from "react";
import { ProjectTimelineImageDesktopProps } from "../../types";

function ProjectTimelineImageDesktop(props: ProjectTimelineImageDesktopProps) {
    const [loaded, setIsLoaded] = useState(false);
    const imageStyle = !loaded ? { display: "none" } : {}

    return (
        <img
            src={props.img[props.startIndex + props.colIndex].url}
            alt={props.img[props.startIndex + props.colIndex].alt}
            className={`project-img-${props.count} rounded-3 m-3`}
            onLoad={() => setIsLoaded(true)}
            style={imageStyle}
        />
    );
}

export default ProjectTimelineImageDesktop;