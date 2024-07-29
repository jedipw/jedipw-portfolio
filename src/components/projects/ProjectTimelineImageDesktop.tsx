import { ProjectTimelineImageDesktopProps } from "../../types";

function ProjectTimelineImageDesktop(props: ProjectTimelineImageDesktopProps) {
    return (
        <img
            src={props.img[props.startIndex + props.colIndex].url}
            alt={props.img[props.startIndex + props.colIndex].alt}
            className={`project-img-${props.count} rounded-3 m-3`}
        />
    );
}

export default ProjectTimelineImageDesktop;