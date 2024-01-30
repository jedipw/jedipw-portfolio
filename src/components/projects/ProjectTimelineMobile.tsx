import ProjectTimelineObjectMobile from './ProjectTimelineObjectMobile';
import { projects } from '../../content/projects';

function ProjectTimelineMobile() {
    return <div className="container-fluid d-flex d-md-none min-vh bg-white">
        <div className="timeline-mobile">
            <div className="outer-mobile">
                {projects.map((project) =>
                    <ProjectTimelineObjectMobile
                        key={project.id}
                        name={project.name}
                        date={project.date}
                        description={project.description}
                        tools={project.tools}
                        jumpIdMobile={project.jumpIdMobile}
                        img={project.img}
                        link={project.link}
                    />)}
            </div>
        </div>
    </div>
}

export default ProjectTimelineMobile;