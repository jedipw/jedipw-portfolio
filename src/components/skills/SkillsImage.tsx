import { useState } from "react";
import { SkillsImageProps } from "../../types";

function SkillsImage(props: SkillsImageProps) {
    const [loaded, setIsLoaded] = useState(false);
    const imageStyle = !loaded ? { display: "none" } : {}

    return (
        <>
            {!loaded && <div className="skills-icon-loading rounded-3 d-flex justify-content-center align-items-center"><img src="/icons/loading.png" alt="loading" width={30} height={30} /></div>}
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