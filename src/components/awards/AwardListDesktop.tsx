import { awards } from "../../content/awards";
import AwardObjectDesktop from "./AwardObjectDesktop";

function AwardListDesktop() {
    return <div className="d-none d-md-flex timeline-award">
        <div className="outer-award">
            {awards.map((award) =>
                <AwardObjectDesktop
                    key={award.id}
                    name={award.name}
                    date={award.date}
                    description={award.description}
                    img={award.img}
                />
            )}
        </div>
    </div>
}

export default AwardListDesktop;