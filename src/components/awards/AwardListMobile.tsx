import AwardObjectMobile from './AwardObjectMobile';
import { awards } from '../../content/awards';

function AwardListMobile() {
    return <div className="d-flex d-md-none timeline-award-mobile">
        <div className="outer-award-mobile">
            {awards.map((award) =>
                <AwardObjectMobile
                    key={award.id}
                    name={award.name}
                    date={award.date}
                    description={award.description}
                    img={award.img}
                />)}
        </div>
    </div>
}

export default AwardListMobile;