import * as React from "react";

export default function FooterComponent() {
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
                        <i className="fa fa-cogs"></i> Behind The Scenes{" "}
                        <small>What is Happening?</small>
                      </h2>
                      <div className="clearfix"></div>
                    </div>
                    <div class="form-group row">
                      <div class="col-md-3 left-margin">
                        <form class="form-horizontal form-label-left">
                          <div class="form-group row">
                            <label>Status</label>
                            <input
                              type="text"
                              class="form-control"
                              disabled
                            />
                          </div>
                          <div class="form-group row">
                            <label>Created By</label>
                            <input
                              type="text"
                              class="form-control"
                              disabled
                            />
                          </div>
                        </form>
                      </div>
                      <div class="col-md-3 left-margin">
                        <form class="form-horizontal form-label-left">
                          <div class="form-group row">
                            <label>Open Date</label>
                            <input
                              type="text"
                              class="form-control"
                              disabled
                            />
                          </div>
                          <div class="form-group row">
                            <label>Modified By</label>
                            <input
                              type="text"
                              class="form-control"
                              disabled
                            />
                          </div>
                        </form>
                      </div>
                      <div class="col-md-3 left-margin">
                        <form class="form-horizontal form-label-left">
                          <div class="form-group row">
                            <label>Closed Date</label>
                            <input
                              type="text"
                              class="form-control"
                              disabled
                            />
                          </div>
                          <div class="form-group row">
                            <label>Supervised By</label>
                            <input
                              type="text"
                              class="form-control"
                              disabled
                            />
                          </div>
                        </form>
                      </div>
                      <div class="col-md-3 left-margin">
                        <form class="form-horizontal form-label-left">
                          <div class="form-group row">
                            <label>Created On</label>
                            <input
                              type="text"
                              class="form-control"
                              disabled
                            />
                          </div>
                          <div class="form-group row">
                            <label>Supervised On</label>
                            <input
                              type="text"
                              class="form-control"
                              disabled
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
