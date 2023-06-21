import * as React from "react";

export default function Header() {
  return (
    <div>
      <div className="nav-md">
        <div className="container body">
          <div className="main_container">
            <div
              className="right_col"
              role="main"
            >
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="x_panel">
                    <div className="x_title">
                      <h2>
                        <i className="fa fa-bars"></i> Summary{" "}
                        <small>Summary Details</small>
                      </h2>
                      <div className="clearfix"></div>
                    </div>
                    <div className="x_content"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
