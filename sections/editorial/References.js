import React from "react";

const References = ({ data }) => {
    return (
        <div className="tb-section padding-left-sm-3-p padding-right-sm-3-p">
        <div className="tb-section-inner tb-wrap">
          <div className="tb-row">
            <div className="tb-col-lg-8">

              <div className="tb-heading tb-heading-xsm anim-fadeinup">
                <h3 className="tb-heading-title"><em>References</em></h3>
              </div>
              <div className="text-gray">
                <ol>
                  {data.map((reference, index) => {
                    if (reference.url) {
                    return (
                      <li key={index}>
                        <a href={reference.url} target="_blank" rel="noopener noreferrer">
                          {reference.title}
                        </a>
                      </li>
                    )
                    } else {
                    return (
                      <li key={index}>
                        <span>{reference.title}</span>
                      </li>
                    )
                    }
                  })}
                </ol>
              </div>
            </div> 
          </div> 
        </div>
      </div>
    );
};

export default References;