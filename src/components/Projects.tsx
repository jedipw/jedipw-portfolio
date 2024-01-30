import FeaturedProject from './projects/FeaturedProjects';
import OtherProjects from './projects/OtherProjects';
import ProjectTimelineDesktop from './projects/ProjectTimelineDesktop';
import ProjectTimelineMobile from './projects/ProjectTimelineMobile';

function Projects() {
    return <div id="projects">
        <div className="container-fluid min-vh bg-green-2 align-items-center p-5">
            <FeaturedProject />
            <OtherProjects />
        </div>
        <div className="container-fluid d-flex min-vh">
            <ProjectTimelineDesktop />
            <ProjectTimelineMobile />
        </div>
    </div>
}

export default Projects;