import { ProjectTimelineImageMobileProps } from "../../types";

function ProjectTimelineImageMobile(props: ProjectTimelineImageMobileProps) {
    return (
        <img src={props.url} alt={props.alt} className="project-img-mobile rounded-3 bg-green-1 p-1 m-1" />
    );
}

export default ProjectTimelineImageMobile;