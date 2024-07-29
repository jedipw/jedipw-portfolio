import { useState } from "react";
import { AwardImageDesktopProps } from "../../types";

function AwardImageDesktop(props: AwardImageDesktopProps) {
    const [loaded, setIsLoaded] = useState(false);
    const imageStyle = !loaded ? { display: "none" } : {}

    return (
        <img
            src={props.url}
            alt={props.alt}
            className="award-img rounded-5 m-2"
            onLoad={() => setIsLoaded(true)}
            style={imageStyle}
        />
    );
}

export default AwardImageDesktop;