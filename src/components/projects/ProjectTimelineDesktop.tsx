import { projects } from '../../content/projects';
import ProjectTimelineObjectDesktop from './ProjectTimelineObjectDesktop';

function ProjectTimelineDesktop() {
    return <div className="container-fluid d-none d-md-flex min-vh bg-white">
        <div className="timeline">
            <div className="outer">
                {projects.map((project) =>
                    <ProjectTimelineObjectDesktop
                        key={project.id}
                        name={project.name}
                        date={project.date}
                        description={project.description}
                        tools={project.tools}
                        jumpIdDesktop={project.jumpIdDesktop}
                        img={project.img}
                        imgPattern={project.imgPattern}
                        link={project.link}
                    />)}
            </div>
        </div>
    </div>
}

export default ProjectTimelineDesktop;