import SkillTitle from './skills/SkillTitle';
import SkillsObject from './skills/SkillsObject';
import { skills } from '../content/skills';

function Skills() {
    return <div id="skills" className="container-fluid align-items-center min-vh bg-green-4 pt-5 p-md-5 justify-content-center pb-5">
        <div className="d-flex justify-content-center align-items-center ms-5 me-5">
            <SkillTitle>SKILLS</SkillTitle>
        </div>
        <div className="container d-flex justify-content-around">
            <div className="row row-cols-xl-2 mt-5">
                <div className="col-xl">
                    {skills.map((skill, index) =>
                        index % 2 !== 1 && (
                            <SkillsObject
                                key={skill.id}
                                name={skill.name}
                                description={skill.description}
                            />
                        )
                    )}
                </div>
                <div className="col-xl">
                    {skills.map((skill, index) =>
                        index % 2 !== 0 && (
                            <SkillsObject
                                key={skill.id}
                                name={skill.name}
                                description={skill.description}
                            />
                        )
                    )}
                </div>
            </div>
        </div>
    </div>
}

export default Skills;