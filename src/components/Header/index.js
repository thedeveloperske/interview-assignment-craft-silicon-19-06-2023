import * as React from "react";

//client types
const clientTypes = ["Enterprise", "Governent Institution", "Limited Company"];

//segment types
const segmentTypes = ["Corporate", "Individual", "SME"];

//sub segment types
const subSegmentTypes = [
  "Public Limited Company",
  "Sole Business",
  "Private Limited Company",
];

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
                        Basic Data <small>Search & View Data</small>
                      </h2>
                      <div className="clearfix"></div>
                    </div>
                    <div class="form-group row">
                      <div class="col-md-4 left-margin">
                        <form class="form-horizontal form-label-left">
                          <div class="form-group row">
                            <label>Client ID</label>
                            <input
                              type="text"
                              class="form-control"
                            />
                          </div>
                          <div class="form-group row">
                            <label>Client Type</label>
                            <select
                              class="select2_single form-control"
                              tabindex="-1"
                              disabled
                            >
                              <option>Enterprise</option>
                              {clientTypes.map((clientType) => (
                                <option value={clientType}>
                                  {" "}
                                  {clientType}
                                </option>
                              ))}
                            </select>
                          </div>
                        </form>
                      </div>
                      <div class="row">
                        <div class="col-md-4 left-margin">
                          <form class="form-horizontal form-label-left">
                            <div class="form-group row">
                              <label>Segment Type</label>
                              <select
                                class="select2_single form-control"
                                tabindex="-1"
                                disabled
                              >
                                <option>Corporate</option>
                                {segmentTypes.map((segmentType) => (
                                  <option value={segmentType}>
                                    {" "}
                                    {segmentType}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div class="form-group row">
                              <label>Sub Segment Type</label>
                              <select
                                class="select2_single form-control"
                                tabindex="-1"
                              >
                                <option>Public Limited Company</option>
                                {subSegmentTypes.map((subSegmentType) => (
                                  <option value={subSegmentType}>
                                    {" "}
                                    {subSegmentType}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div class="col-md-12 left-margin">
                        <form class="form-horizontal form-label-left">
                          <div class="form-group row">
                            <label>Company Name</label>
                            <input
                              disabled
                              type="text"
                              class="form-control"
                            />
                          </div>
                        </form>
                      </div>
                      <div class="col-md-12 left-margin">
                        <form class="form-horizontal form-label-left">
                          <div class="form-group row">
                            <label>Base ID</label>
                            <input
                              type="text"
                              class="form-control"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
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
