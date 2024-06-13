import react from 'react';


function Header(param) {
  return (
    <>
      <header>
        <nav>
          <div style="width:15%" class="nav-title-div">
            MyBerr
          </div>
          <div class="nav-menu-div">
            <span class="nav-menu-el" href="">Home</span>
            <span class="nav-menu-el" href="">Gigs</span>
            <span class="nav-menu-el" href="">Freelancer</span>
            <span class="nav-menu-el" href="">About Us</span>
            <span class="nav-menu-el" href="">Contact Us</span>
          </div>
          <div style="width:30%" class="nav-inp-div">
            <form>
              <input type="text" value="" name="navSearch" id="nav-search-input" />
              <button>Search</button>
            </form>
          </div>
        </nav>
      </header>
    </>
    );
}

export default Header;
