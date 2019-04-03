
navbar_truss = String.raw`
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <a class="navbar-brand" style="color:#85bee5;" href="../index.html">MOD</a>
                  <div class="navbar-nav">
                    <a class="nav-item nav-link" href="encoder.html">Digital Encoder</a>
                    <a class="nav-item nav-link active" href="#">3D Truss</a>
                  </div>
                </div>
              </nav>`;

navbar_encoder = String.raw`
              <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                              <a class="navbar-brand" style="color:#85bee5;" href="../index.html">MOD</a>
                                <div class="navbar-nav">
                                  <a class="nav-item nav-link active" href="#">Digital Encoder</a>
                                  <a class="nav-item nav-link" href="truss3d.html">3D Truss</a>
                                </div>
                              </div>
                            </nav>`;

sidebar = String.raw`
<div class="container-fluid">
              <div class="row">
                  <nav class="col-md-1 d-none d-md-block mt-4  bg-light sidebar">
                      <div class="sidebar-sticky">
                          <ul class="nav flex-column">
                              <li class="nav-item">
                                  <a class="nav-link" href="#overview-text">
                                      Overview
                                  </a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" href="#design-text">
                                      Design
                                  </a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" href="#validation-text">
                                      Validation
                                  </a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" href="#report">
                                      Report
                                  </a>
                              </li>
                          </ul>
                          </ul>
                      </div>
                  </nav>`;

function loadNavbar_encoder() {
  $('body').prepend(navbar_encoder);
}

function loadNavbar_truss() {
  $('body').prepend(navbar_truss);
}

function loadSidebar() {
  $('body').prepend(sidebar);
}

function initPage_encoder() {
  loadSidebar();
  loadNavbar_encoder();
}

function initPage_truss() {
  loadSidebar();
  loadNavbar_truss();
}

