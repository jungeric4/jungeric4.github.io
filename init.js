
navbar = String.raw`
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <a class="nav-item nav-link" href="#" style="color:#FFFFFF">Navbar</a>
                  <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="#">Home</a>
                    <a class="nav-item nav-link" href="#">Features</a>
                  </div>
                </div>
              </nav>`;

function loadNavbar() {
    $('body').prepend(navbar);
}

function initPage() {
    loadNavbar()
}
