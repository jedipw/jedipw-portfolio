import { useState } from "react";
import { AwardImageMobileProps } from "../../types";

function AwardImageMobile(props: AwardImageMobileProps) {
    const [loaded, setIsLoaded] = useState(false);
    const imageStyle = !loaded ? { display: "none" } : {}

    return (
        <img
            src={props.url}
            alt={props.alt}
            className="award-img-mobile bg-green-4 rounded-3 p-1 m-1"
            onLoad={() => setIsLoaded(true)}
            style={imageStyle}
        />
    );
}

export default AwardImageMobile;