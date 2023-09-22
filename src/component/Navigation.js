
import { Link } from "react-router-dom";
import { FaSistrix } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { MdCreate } from "react-icons/md";
import { useState } from "react";









function Navigation(){


const [profileDropdown, setProfileDropdown] = useState(false)

const toggleProfileDropdown = () => {
setProfileDropdown(!profileDropdown)
}


  return(
    <div>
<nav>
  <header>
    <div className="navbar-div01">
<IoMdMenu className="menu-icon"/>
<Link className="navbar-div01-h1" to="/">9GAG</Link>
<div className="emoji-div">
  <div className="emoji-frame">
    🔀
  </div>
  <Link className="shuffle-p">Shuffle</Link>
</div>
<div className="emoji-div">
  <div className="emoji-frame">
    📱
  </div>
  <Link className="shuffle-p">Get App</Link>
</div>
<div className="emoji-div">
  <div className="emoji-frame">
    🏴‍☠️
  </div>
  <Link className="shuffle-p">Memeland</Link>
</div>
<div className="emoji-div">
  <div className="emoji-frame">
    💫
  </div>
  <Link className="shuffle-p">9GAG Vibes</Link>
</div>
<div className="emoji-div">
  <div className="emoji-frame">
    📍
  </div>
  <Link className="shuffle-p">Local</Link>
</div>
    </div>
    <div className="navbar-div02">

      <div className="icon-div">
      <FaSistrix className="search-icon"/>
      </div>
<div className="icon-div">
<FaBell className="notification-icon"/>
</div>
<div className="profile-frame" onClick={toggleProfileDropdown}>

</div>
{profileDropdown && (
  <div className="profileframe-dropdown">
  <div className="profileframe-dropdown-innerd1">
  <Link className="profileframe-dropdown-link" to="/profile">My Profile</Link>
  <Link className="profileframe-dropdown-link2">Customize with tag</Link>
  <Link className="profileframe-dropdown-link2">Saved</Link>
  <Link className="profileframe-dropdown-link2">Settings</Link>
  <Link className="profileframe-dropdown-link2">Dark Mode</Link>
  <Link className="profileframe-dropdown-link2">Download 9GAG App</Link>
  <Link className="profileframe-dropdown-link2">Help Center</Link>
  <Link className="profileframe-dropdown-link2">Report Problems</Link>
  <Link className="profileframe-dropdown-link2">Log Out</Link>
  <Link className="profileframe-dropdown-link3">Terms & Condition</Link>
  <Link className="profileframe-dropdown-link3">Advertise</Link>
  <Link className="profileframe-dropdown-link3">Contact</Link>
  <Link className="profileframe-dropdown-link4">9GAG &copy; 2023</Link>
  </div>

</div>
)}

<Link to="/createpost" className="createpost-link">
<div className="post-frame">
<MdCreate className="write-icon"/>
<p className="post-p">Post</p>
</div>
</Link>

    </div>
  </header>
</nav>
    </div>
  )
}

export default Navigation;