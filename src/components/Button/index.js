import * as React from "react";

export default function ButtonComponent() {
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
                    <div class="ln_solid"></div>
                    <div class="item form-group text-center">
                      <div class="col-md-6 col-sm-6 offset-md-3">
                        <button
                          class="btn btn-primary"
                          type="button"
                        >
                          Cancel
                        </button>
                        <button
                          class="btn btn-success"
                          type="reset"
                        >
                          Save
                        </button>
                        <button
                          type="submit"
                          class="btn btn-primary"
                        >
                          Close
                        </button>
                        <button
                          type="submit"
                          class="btn btn-gray"
                        >
                          Edit
                        </button>
                        <button
                          type="submit"
                          class="btn btn-primary"
                        >
                          Add
                        </button>
                        <button
                          type="submit"
                          class="btn btn-primary"
                        >
                          View
                        </button>
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
