document.querySelector("header").innerHTML = ` <div class="container">
<div class="row align-items-center">
  <div class="col col-lg-3 col-5 headimg">
    <div class="site_logo">
      <a class="site_link dynamic_link" data-link="index.html">
        <img src="assets/images/logo 2.png" alt="Collab - Online Learning Platform">
      </a>
    </div>
  </div>
  <div class="col col-lg-6 col-2">
    <nav class="main_menu navbar navbar-expand-lg">
      <div class="main_menu_inner collapse navbar-collapse justify-content-center" id="main_menu_dropdown">
        <ul class="main_menu_list unordered_list_center">
          <li>
            <a class="nav-link dynamic_link" data-link="index.html" id="home_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">Home</a>
           
          </li>
          <li class="dropdown">
            <a class="nav-link" id="service_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Academics
            </a>
            <ul class="dropdown-menu" aria-labelledby="service_submenu">
              <li>
                <a class="nav-link" id="courses_layout_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Courses
                </a>
                
              </li>
              <li>
              <a class="nav-link" id="courses_layout_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Research
              </a>
              
            </li>
              
              
            </ul>
          </li>
          <li>
            <a class="nav-link dynamic_link" data-link="./Faculty.html" id="pages_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Faculties
            </a>
           
          </li>
          <li>
            <a class="nav-link" id="pages_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Placement
            </a>
           
          </li>
          <li>
            <a class="nav-link" id="pages_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Campus Life
            </a>
           
          </li>
          <li>
            <a class="nav-link" id="pages_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Students
            </a>
           
          </li>
          <li class="dropdown">
            <a class="nav-link" href="#" id="blog_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             More
            </a>
            <ul class="dropdown-menu" aria-labelledby="blog_submenu">
             
              <li><a>Newsletter</a></li>
              <li><a>Gallery</a></li>
              <li><a>Innovation and Startup</a></li>
            </ul>
          </li>
         
        </ul>
      </div>
    </nav>
  </div>
  <div class="col col-lg-3 col-5">
    <ul class="header_btns_group unordered_list_end">
      <li>
        <button class="mobile_menu_btn" type="button" data-bs-toggle="collapse" data-bs-target="#main_menu_dropdown" aria-controls="main_menu_dropdown" aria-expanded="false" aria-label="Toggle navigation">
          <i class="far fa-bars"></i>
        </button>
      </li>
      <!-- <li>
        <a class="btn border_dark" href="login.html">
          <span>
            <small>Login</small>
            <small>Login</small>
          </span>
        </a>
      </li> -->
      <li>
        <a class="btn btn_dark">
          <span>
            <small>Contact Us</small>
            <small>Contact Us</small>
          </span>
        </a>
      </li>
    </ul>
  </div>
</div>
</div>`