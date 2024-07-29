import ProjectTitle from './ProjectTitle';
import ProjectObject from './ProjectObject';
import ProjectDescription from './ProjectDescription';
import { other_projects } from '../../content/other_projects';

function OtherProjects() {
    return <div>
        <div className="d-flex justify-content-center align-items-center ms-5 me-5 text-center">
            <ProjectTitle>OTHER PROJECTS</ProjectTitle>
        </div>
        <div className="d-flex justify-content-center align-items-center">
            <ProjectDescription>
                These are some additional projects I have developed that enable me to enhance my skills in web development,
                mobile application development, AI development, and data science.
            </ProjectDescription>
        </div>
        <div className="container">
            <div className="row row-cols-xl-3 mt-4">
                {other_projects.map((other_project) =>
                    <div className="col d-flex justify-content-center">
                        <ProjectObject
                            key={other_project.id}
                            name={other_project.name}
                            description={other_project.description}
                            imageUrl={other_project.imageUrl}
                            jumpIdDesktop={other_project.jumpIdDesktop}
                            jumpIdMobile={other_project.jumpIdMobile} />
                    </div>
                )}
            </div>
        </div>
    </div>
}

export default OtherProjects;