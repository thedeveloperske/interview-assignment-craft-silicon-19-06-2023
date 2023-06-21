import * as React from "react";

//line of business
const linesOfBusiness = [
  "Automotive Industry",
  "Information Technology",
  "Goverment Institutions",
  "Insurance and Licensing",
  "Hotel, Travels & Accomodations",
];

//identification types
const identifcationTypes = [
  "Self Identity",
  "Governent Identity",
  "Private Identity Found",
];

//open
const openedBys = ["Self", "Governent Sponsored", "Bank"];

//relationship managers
const relationshipManagers = ["Manager 1", "Manager 2", "Manager 3"];

//countries
const countries = ["Kenya", "Tanzania", "Uganda"];

//wards
const wards = ["Majuju", "Machini", "Dala dala wa kushoto"];

//districts
const districts = ["Chembecheme Unyagoni", "Nyoka ya Moyo", "Shingo la Meza"];

//regions
const regions = ["Arusha", "Dodoma", "Moshi"];

export default function TabComponent() {
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
                        <i className="fa fa-briefcase"></i> Capture Data{" "}
                        <small>Enter Data</small>
                      </h2>
                      <div className="clearfix"></div>
                    </div>
                    <div className="x_content">
                      <ul
                        className="nav nav-tabs bar_tabs"
                        id="myTab"
                        role="tablist"
                      >
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            id="home-tab"
                            data-toggle="tab"
                            href="#corporate"
                            role="tab"
                            aria-controls="home"
                            aria-selected="true"
                          >
                            Corporate
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="profile-tab"
                            data-toggle="tab"
                            href="#address"
                            role="tab"
                            aria-controls="profile"
                            aria-selected="false"
                          >
                            Address
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="contact-tab"
                            data-toggle="tab"
                            href="#special"
                            role="tab"
                            aria-controls="contact"
                            aria-selected="false"
                          >
                            Special Offers
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="contact"
                            data-toggle="tab"
                            href="#director"
                            role="tab"
                            aria-controls="contact"
                            aria-selected="false"
                          >
                            Director Details
                          </a>
                        </li>
                      </ul>
                      <div
                        className="tab-content"
                        id="myTabContent"
                      >
                        <div
                          className="tab-pane fade active"
                          id="corporate"
                          role="tabpanel"
                          aria-labelledby="home-tab"
                        >
                          <div className="x_panel">
                            <div className="x_title">
                              <h2>
                                <i className=""></i> Corporate Details{" "}
                                <small>Basic Information</small>
                              </h2>
                              <div className="clearfix"></div>
                              <br />
                            </div>
                            <form
                              id="demo-form2"
                              data-parsley-validate
                              class="form-horizontal form-label-left"
                            >
                              <div class="item form-group">
                                <label
                                  class="col-form-label col-md-3 col-sm-3 label-align"
                                  for="first-name"
                                >
                                  Company Name <span class="required">*</span>
                                </label>
                                <div class="col-md-9 col-sm-9 ">
                                  <input
                                    type="text"
                                    id="first-name"
                                    required="required"
                                    class="form-control "
                                  />
                                </div>
                              </div>
                              <div class="item form-group">
                                <label
                                  class="col-form-label col-md-3 col-sm-3 label-align"
                                  for="last-name"
                                >
                                  Line Of Business{" "}
                                  <span class="required">*</span>
                                </label>
                                <div class="col-md-3 col-sm-3 ">
                                  <select
                                    class="select2_single form-control"
                                    tabindex="-1"
                                  >
                                    <option></option>
                                    {linesOfBusiness.map((line) => (
                                      <option value={line}> {line}</option>
                                    ))}
                                  </select>
                                </div>
                                <label
                                  class="col-form-label col-md-3 col-sm-3 label-align"
                                  for="last-name"
                                >
                                  Line of Business Info{" "}
                                </label>
                                <div class="col-md-3 col-sm-3 ">
                                  <input
                                    type="text"
                                    id="first-name"
                                    required="required"
                                    class="form-control "
                                  />
                                </div>
                              </div>

                              <div class="item form-group">
                                <label
                                  class="col-form-label col-md-3 col-sm-3 label-align"
                                  for="last-name"
                                >
                                  Identification Type{" "}
                                  <span class="required">*</span>
                                </label>
                                <div class="col-md-3 col-sm-3 ">
                                  <select
                                    class="select2_single form-control"
                                    tabindex="-1"
                                  >
                                    <option></option>
                                    {identifcationTypes.map(
                                      (identification) => (
                                        <option value={identification}>
                                          {" "}
                                          {identification}
                                        </option>
                                      )
                                    )}
                                  </select>
                                </div>
                                <label
                                  class="col-form-label col-md-3 col-sm-3 label-align"
                                  for="last-name"
                                >
                                  Registration Number{" "}
                                  <span class="required">*</span>
                                </label>
                                <div class="col-md-3 col-sm-3 ">
                                  <input
                                    type="text"
                                    id="first-name"
                                    required="required"
                                    class="form-control "
                                  />
                                </div>
                              </div>
                              <div class="item form-group">
                                <label
                                  class="col-form-label col-md-3 col-sm-3 label-align"
                                  for="last-name"
                                >
                                  Date of Registration{" "}
                                  <span class="required">*</span>
                                </label>
                                <div class="col-md-3 col-sm-3 ">
                                  <input
                                    type="date"
                                    id="first-name"
                                    required="required"
                                    class="form-control "
                                  />
                                </div>
                                <label
                                  class="col-form-label col-md-3 col-sm-3 label-align"
                                  for="last-name"
                                >
                                  Registered Office{" "}
                                </label>
                                <div class="col-md-3 col-sm-3 ">
                                  <input
                                    type="text"
                                    id="first-name"
                                    required="required"
                                    class="form-control "
                                  />
                                </div>
                              </div>
                              <div class="item form-group">
                                <label
                                  class="col-form-label col-md-3 col-sm-3 label-align"
                                  for="last-name"
                                >
                                  Business Started Year{" "}
                                </label>
                                <div class="col-md-3 col-sm-3 ">
                                  <input
                                    type="number"
                                    id="first-name"
                                    required="required"
                                    class="form-control "
                                  />
                                </div>
                                <label
                                  class="col-form-label col-md-3 col-sm-3 label-align"
                                  for="last-name"
                                >
                                  Number of Employees{" "}
                                </label>
                                <div class="col-md-3 col-sm-3 ">
                                  <input
                                    type="text"
                                    id="first-name"
                                    required="required"
                                    class="form-control "
                                  />
                                </div>
                              </div>
                              <div class="item form-group">
                                <label
                                  class="col-form-label col-md-3 col-sm-3 label-align"
                                  for="first-name"
                                >
                                  Commments
                                </label>
                                <div class="col-md-9 col-sm-9 ">
                                  <input
                                    type="text"
                                    id="first-name"
                                    required="required"
                                    class="form-control "
                                  />
                                </div>
                              </div>
                              <div class="item form-group">
                                <label
                                  class="col-form-label col-md-3 col-sm-3 label-align"
                                  for="first-name"
                                >
                                  Website
                                </label>
                                <div class="col-md-9 col-sm-9 ">
                                  <input
                                    type="text"
                                    id="first-name"
                                    required="required"
                                    class="form-control "
                                  />
                                </div>
                              </div>
                              <div class="item form-group">
                                <label
                                  class="col-form-label col-md-3 col-sm-3 label-align"
                                  for="first-name"
                                >
                                  Opened By
                                </label>
                                <div class="col-md-9 col-sm-9 ">
                                  <select
                                    class="select2_single form-control"
                                    tabindex="-1"
                                  >
                                    <option></option>
                                    {openedBys.map((openedBy) => (
                                      <option value={openedBy}>
                                        {" "}
                                        {openedBy}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              </div>
                              <div class="item form-group">
                                <label
                                  class="col-form-label col-md-3 col-sm-3 label-align"
                                  for="last-name"
                                >
                                  Relationship Manager{" "}
                                  <span class="required">*</span>
                                </label>
                                <div class="col-md-3 col-sm-3 ">
                                  <select
                                    class="select2_single form-control"
                                    tabindex="-1"
                                  >
                                    <option></option>
                                    {relationshipManagers.map((manager) => (
                                      <option value={manager}>
                                        {" "}
                                        {manager}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                                <label
                                  class="col-form-label col-md-3 col-sm-3 label-align"
                                  for="last-name"
                                >
                                  Opened On <span class="required">*</span>
                                </label>
                                <div class="col-md-3 col-sm-3 ">
                                  <input
                                    type="date"
                                    id="first-name"
                                    required="required"
                                    class="form-control "
                                  />
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="address"
                          role="tabpanel"
                          aria-labelledby="profile-tab"
                        >
                          <div className="x_panel">
                            <div className="x_title">
                              <h2>
                                <i className=""></i> Mailing Address{" "}
                                <small>Where to Contact</small>
                              </h2>
                              <div className="clearfix"></div>
                              <br />
                              <form
                                id="demo-form2"
                                data-parsley-validate
                                class="form-horizontal form-label-left"
                              >
                                <div class="item form-group">
                                  <label
                                    class="col-form-label col-md-3 col-sm-3 label-align"
                                    for="first-name"
                                  >
                                    Residential Address{" "}
                                    <span class="required">*</span>
                                  </label>
                                  <div class="col-md-9 col-sm-9 ">
                                    <input
                                      type="text"
                                      id="first-name"
                                      required="required"
                                      class="form-control "
                                    />
                                  </div>
                                </div>
                                <div class="item form-group">
                                  <label
                                    class="col-form-label col-md-3 col-sm-3 label-align"
                                    for="first-name"
                                  >
                                    Business Address{" "}
                                  </label>
                                  <div class="col-md-9 col-sm-9 ">
                                    <input
                                      type="text"
                                      id="first-name"
                                      required="required"
                                      class="form-control "
                                    />
                                  </div>
                                </div>
                                <div class="item form-group">
                                  <label
                                    class="col-form-label col-md-3 col-sm-3 label-align"
                                    for="first-name"
                                  >
                                    Office Address{" "}
                                  </label>
                                  <div class="col-md-9 col-sm-9 ">
                                    <input
                                      type="text"
                                      id="first-name"
                                      required="required"
                                      class="form-control "
                                    />
                                  </div>
                                </div>
                                <div class="item form-group">
                                  <label
                                    class="col-form-label col-md-3 col-sm-3 label-align"
                                    for="first-name"
                                  >
                                    Mailing Address{" "}
                                    <span class="required">*</span>
                                  </label>
                                  <div class="col-md-9 col-sm-9 ">
                                    <input
                                      type="text"
                                      id="first-name"
                                      required="required"
                                      class="form-control "
                                    />
                                  </div>
                                </div>

                                <div class="item form-group">
                                  <label
                                    class="col-form-label col-md-3 col-sm-3 label-align"
                                    for="first-name"
                                  >
                                    Home Country Address{" "}
                                  </label>
                                  <div class="col-md-9 col-sm-9 ">
                                    <input
                                      type="text"
                                      id="first-name"
                                      required="required"
                                      class="form-control "
                                    />
                                  </div>
                                </div>

                                <div class="item form-group">
                                  <label
                                    class="col-form-label col-md-3 col-sm-3 label-align"
                                    for="first-name"
                                  >
                                    Address 2
                                  </label>
                                  <div class="col-md-9 col-sm-9 ">
                                    <input
                                      type="text"
                                      id="first-name"
                                      required="required"
                                      class="form-control "
                                    />
                                  </div>
                                </div>

                                <div class="item form-group">
                                  <label
                                    class="col-form-label col-md-3 col-sm-3 label-align"
                                    for="last-name"
                                  >
                                    Region
                                  </label>
                                  <div class="col-md-3 col-sm-3 ">
                                    <input
                                      type="text"
                                      id="first-name"
                                      required="required"
                                      class="form-control "
                                    />
                                  </div>
                                  <label
                                    class="col-form-label col-md-3 col-sm-3 label-align"
                                    for="last-name"
                                  >
                                    Street
                                  </label>
                                  <div class="col-md-3 col-sm-3 ">
                                    <input
                                      type="text"
                                      id="first-name"
                                      required="required"
                                      class="form-control "
                                    />
                                  </div>
                                </div>
                                <div class="item form-group">
                                  <label
                                    class="col-form-label col-md-3 col-sm-3 label-align"
                                    for="last-name"
                                  >
                                    Country
                                  </label>
                                  <div class="col-md-3 col-sm-3 ">
                                    <select
                                      class="select2_single form-control"
                                      tabindex="-1"
                                    >
                                      <option></option>
                                      {countries.map((country) => (
                                        <option value={country}>
                                          {" "}
                                          {country}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                  <label
                                    class="col-form-label col-md-3 col-sm-3 label-align"
                                    for="last-name"
                                  >
                                    Street
                                  </label>
                                  <div class="col-md-3 col-sm-3 ">
                                    <select
                                      class="select2_single form-control"
                                      tabindex="-1"
                                    >
                                      <option></option>
                                      {regions.map((region) => (
                                        <option value={region}>
                                          {" "}
                                          {region}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </div>
                                <div class="item form-group">
                                  <label
                                    class="col-form-label col-md-3 col-sm-3 label-align"
                                    for="last-name"
                                  >
                                    Phone(Home)
                                  </label>
                                  <div class="col-md-3 col-sm-3 ">
                                    <input
                                      type="tel"
                                      id="first-name"
                                      required="required"
                                      class="form-control "
                                    />
                                  </div>
                                  <label
                                    class="col-form-label col-md-3 col-sm-3 label-align"
                                    for="last-name"
                                  >
                                    Ward <span class="required">*</span>
                                  </label>
                                  <div class="col-md-3 col-sm-3 ">
                                    <select
                                      class="select2_single form-control"
                                      tabindex="-1"
                                    >
                                      <option></option>
                                      {wards.map((ward) => (
                                        <option value={ward}> {ward}</option>
                                      ))}
                                    </select>
                                  </div>
                                </div>
                                <div class="item form-group">
                                  <label
                                    class="col-form-label col-md-3 col-sm-3 label-align"
                                    for="last-name"
                                  >
                                    Distirct <span class="required">*</span>
                                  </label>
                                  <div class="col-md-3 col-sm-3 ">
                                    <select
                                      class="select2_single form-control"
                                      tabindex="-1"
                                    >
                                      <option></option>
                                      {districts.map((district) => (
                                        <option value={district}>
                                          {" "}
                                          {district}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                  <label
                                    class="col-form-label col-md-3 col-sm-3 label-align"
                                    for="last-name"
                                  >
                                    Phone(Work){" "}
                                  </label>
                                  <div class="col-md-3 col-sm-3 ">
                                    <input
                                      type="tel"
                                      id="first-name"
                                      required="required"
                                      class="form-control "
                                    />
                                  </div>
                                </div>
                                <div class="item form-group">
                                  <label
                                    class="col-form-label col-md-3 col-sm-3 label-align"
                                    for="last-name"
                                  >
                                    Mobile <span class="required">*</span>
                                  </label>
                                  <div class="col-md-3 col-sm-3 ">
                                    <input
                                      type="tel"
                                      id="first-name"
                                      required="required"
                                      class="form-control "
                                    />
                                  </div>
                                  <label
                                    class="col-form-label col-md-3 col-sm-3 label-align"
                                    for="last-name"
                                  >
                                    Fax
                                  </label>
                                  <div class="col-md-3 col-sm-3 ">
                                    <input
                                      type="text"
                                      id="first-name"
                                      required="required"
                                      class="form-control "
                                    />
                                  </div>
                                </div>
                                <div class="item form-group">
                                  <label
                                    class="col-form-label col-md-3 col-sm-3 label-align"
                                    for="last-name"
                                  >
                                    Land Mark
                                  </label>
                                  <div class="col-md-3 col-sm-3 ">
                                    <input
                                      type="text"
                                      id="first-name"
                                      required="required"
                                      class="form-control "
                                    />
                                  </div>
                                  <label
                                    class="col-form-label col-md-3 col-sm-3 label-align"
                                    for="last-name"
                                  >
                                    Email <span class="required">*</span>
                                  </label>
                                  <div class="col-md-3 col-sm-3 ">
                                    <input
                                      type="email"
                                      id="first-name"
                                      required="required"
                                      class="form-control "
                                    />
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="special"
                          role="tabpanel"
                          aria-labelledby="contact-tab"
                        >
                          <div className="x_panel">
                            <div className="x_title">
                              <h2>
                                <i className=""></i> Special Offers{" "}
                                <small>Tick Where Appropriate</small>
                              </h2>
                              <div className="clearfix"></div>
                            </div>
                            <div>
                              <input
                                type="checkbox"
                                class="js-switch"
                              />{" "}
                              Can Send Greetings
                            </div>
                            <div>
                              <input
                                type="checkbox"
                                class="js-switch"
                              />{" "}
                              Can Send Associate Special Message
                            </div>
                            <div>
                              <input
                                type="checkbox"
                                class="js-switch"
                              />{" "}
                              Can Send Our Special Offers
                            </div>
                            <div>
                              <input
                                type="checkbox"
                                class="js-switch"
                              />{" "}
                              Statement Online
                            </div>
                            <div>
                              <input
                                type="checkbox"
                                class="js-switch"
                              />{" "}
                              Mobile Alert
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="director"
                          role="tabpanel"
                          aria-labelledby="contact-tab"
                        >
                          <div className="x_panel">
                            <div className="x_title">
                              <h2>
                                <i className=""></i> Personal Details{" "}
                                <small>Bio Data Details</small>
                              </h2>
                              <div className="clearfix"></div>
                              <table
                                id="datatable"
                                class="table table-striped table-bordered table-responsive"
                              >
                                <thead>
                                  <tr>
                                    <th>Client Name</th>
                                    <th>Relation</th>
                                    <th>Share (%)</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>61</td>
                                  </tr>
                                </tbody>
                              </table>
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
        </div>
      </div>
    </div>
  );
}
