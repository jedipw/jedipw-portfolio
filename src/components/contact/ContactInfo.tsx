import { useInView } from "framer-motion";
import { useRef } from "react";
import { contact } from "../../content/contact";

function ContactInfo() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref}>
            <div className="row mt-5" style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>
                {contact.map((content, index) =>
                    <div key={index} className="col-lg-4">
                        <div className="d-none d-lg-block">
                            <i className={`${content.icon} fa-5x bg-green-1 green-3 p-4 rounded-circle`}></i>
                            <h2 className="text-white roboto-bold fs-3 mt-5">{content.name.toUpperCase()}</h2>
                            {content.link === '' ?
                                <p className="text-white roboto-regular fs-3 mt-4">{content.value}</p> :
                                <a className="link-underline-light d-inline-block" href={content.link} target="_blank" rel="noreferrer">
                                    <p className="text-white roboto-regular fs-3 mt-3">{content.value}</p>
                                </a>
                            }
                        </div>
                        <div className="d-block d-lg-none">
                            <i className={`${content.icon} fa-4x bg-green-1 green-3 p-4 rounded-circle`}></i>
                            <h2 className="text-white roboto-bold fs-3 mt-4">{content.name.toUpperCase()}</h2>
                            {content.link === '' ?
                                <p className="text-white roboto-regular fs-3">{content.value}</p> :
                                <a className="link-underline-light d-inline-block" href={content.link} target="_blank" rel="noreferrer">
                                    <p className="text-white roboto-regular fs-3">{content.value}</p>
                                </a>
                            }
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default ContactInfo;