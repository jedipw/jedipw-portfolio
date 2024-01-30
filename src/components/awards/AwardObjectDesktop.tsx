import { useInView } from "framer-motion";
import { useRef } from "react";
import { AwardObjectProps } from "../../types";

function AwardObjectDesktop(props: AwardObjectProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref}>
            <div className="award-card" style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>
                <h3 className="award-title fs-2 roboto-bold">{props.name}</h3>
                <h4 className="roboto-bold fs-3 green-4">{props.date}</h4>
                <p className="fs-5 roboto-regular pt-4">
                    {props.description}
                </p>
                {props.img.length > 0 && (
                    <div className="row bg-green-4 p-3 rounded-5 award-box mt-4 mb-4">
                        <div className="container-fluid d-md-flex justify-content-center">
                            {props.img.map((content, index) =>
                                <img key={index} src={content.url} alt={content.alt} className="award-img rounded-5 m-2" />)
                            }
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default AwardObjectDesktop;