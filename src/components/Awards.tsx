import AwardTitle from './awards/AwardTitle';
import AwardListDesktop from './awards/AwardListDesktop';
import AwardListMobile from './awards/AwardListMobile';

function Awards() {
    return <div id="awards" className="container-fluid min-vh bg-green-1 align-items-center pt-5">
        <div className="d-flex justify-content-center align-items-center ms-5 me-5">
            <AwardTitle>AWARDS</AwardTitle>
        </div>
        <div className="container-fluid d-flex min-vh">
            <AwardListDesktop />
            <AwardListMobile />
        </div>
    </div>
}

export default Awards;