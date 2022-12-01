import React from 'react';
import undergrad from "../images/Undergrad-icon.jpg";

function JustinEducation(props) {
    return (
        <div className="jpage">
            <h1 className="jh1"> University of Iowa 08/2019-05/2023</h1>
            <div className="row1">
                <div className="col-4 col-6-medium col-12-small">
                    <section className="box-style1">
                        <div className="image-fit"><img src={undergrad}/></div>
                        <h3><u><a>B.S.E Electrical & Computer Engineering</a></u></h3>
                        <u><a
                            href="https://catalog.registrar.uiowa.edu/liberal-arts-sciences/computer-science/computer-science-minor/"
                            target="_blank" style={{"color": 'black'}}>
                            <p style={{"margin": '2.5%'}}>Computer Science Minor</p>
                        </a></u>
                        University of Iowa
                        <p>August 2019 - May 2023</p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default JustinEducation;