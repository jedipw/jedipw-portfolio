import ProjectTitle from './ProjectTitle';
import ProjectObject from './ProjectObject';
import ProjectDescription from './ProjectDescription';
import { featured_projects } from '../../content/featured_projects';

function FeaturedProject() {
    return <div>
        <div className="d-flex justify-content-center align-items-center ms-5 me-5 text-center">
            <ProjectTitle>FEATURED PROJECTS</ProjectTitle>
        </div>
        <div className="d-flex justify-content-center align-items-center">
            <ProjectDescription>
                These three projects hold a special place for me!
                They provide me with the opportunity to acquire expertise in web development, mobile application development, and AI development.
                If you're curious to delve deeper, feel free to hit the "Jump" button and explore further.
            </ProjectDescription>
        </div>
        <div className="container">
            <div className="row row-cols-xl-3 mt-4">
                {featured_projects.map((featured_project) =>
                    <div className="col d-flex justify-content-center">
                        <ProjectObject
                            key={featured_project.id}
                            name={featured_project.name}
                            description={featured_project.description}
                            imageUrl={featured_project.imageUrl}
                            jumpIdDesktop={featured_project.jumpIdDesktop}
                            jumpIdMobile={featured_project.jumpIdMobile}
                        />
                    </div>
                )}
            </div>
        </div>
    </div>
}

export default FeaturedProject;