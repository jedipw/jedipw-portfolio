import { useState } from "react";
import { SkillsImageProps } from "../../types";

function SkillsImage(props: SkillsImageProps) {
    const [loaded, setIsLoaded] = useState(false);
    const imageStyle = !loaded ? { display: "none" } : {}

    return (
        <>
            {!loaded && <div className="skills-icon-loading rounded-3" />}
            <img
                src={props.url}
                alt={props.alt}
                className="skills-icon rounded-3"
                onLoad={() => setIsLoaded(true)}
                style={imageStyle}
            />
        </>

    );
}

export default SkillsImage;