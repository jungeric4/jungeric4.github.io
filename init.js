
navbar = String.raw`
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <a class="nav-item nav-link" href="#" style="color:#FFFFFF">Navbar</a>
                  <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="#">Home</a>
                    <a class="nav-item nav-link" href="#">Features</a>
                  </div>
                </div>
              </nav>`;

sidebar = String.raw`
<div class="container-fluid">
              <div class="row">
                  <nav class="col-md-2 d-none d-md-block bg-light sidebar">
                      <div class="sidebar-sticky">
                          <ul class="nav flex-column">
                              <li class="nav-item">
                                  <a class="nav-link" href="#Overview Text">
                                      Overview
                                  </a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" href="#Design Text">
                                      Design
                                  </a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" href="#Validation Text">
                                      Validation
                                  </a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" href="#Report">
                                      Report
                                  </a>
                              </li>
                          </ul>
                          </ul>
                      </div>
                  </nav>`;

function loadNavbar() {
  $('body').prepend(navbar);
}

function loadSidebar(){
  $('body').prepend(sidebar);
}

function initPage() {
  loadSidebar();
  loadNavbar();
}

