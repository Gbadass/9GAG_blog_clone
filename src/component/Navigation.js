
import { Link } from "react-router-dom";
import { FaSistrix } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { MdCreate } from "react-icons/md";
import { useState } from "react";

import { BiSolidHome} from "react-icons/bi";
import { BiSolidBarChartAlt2,BiTrendingUp,BiTimeFive } from "react-icons/bi";
import { BsTag,BsPin } from "react-icons/bs";



import image01 from "./images/1688528667.8369_5YWy3Y_100x100.jpg"
 import image02 from "./images/1683959060.7184_AvuQUL_100x100.jpg"
 import image03 from "./images/1683179392.1419_yMavUr_100x100.jpg"
 import image04 from "./images/1683179692.3556_A5eWY2_100x100.jpg"
 import image05 from "./images/1683178299.2874_je3YRE_100x100.jpg"

 import image06 from "./images/1683177904.702_eWU6aP_100x100.jpg"
 import image07 from "./images/1683177896.0516_u6Y9Ez_100x100.jpg"
 import image08 from "./images/1690955443.5452_7YTELa_100x100.jpg"
 import image09 from "./images/1683178299.2874_je3YRE_100x100.jpg"
 import image010 from "./images/1683179603.0589_Ty2yGa_100x100.jpg"
 
 import image011 from "./images/1683179692.3556_A5eWY2_100x100.jpg"
 import image012 from "./images/1683958069.2788_PA7eVy_100x100.jpg"
 import image013 from "./images/1683177950.2793_EBe3AN_100x100.jpg"
 import image014 from "./images/1683179381.1971_6eBEty_100x100.jpg"
 import image015 from "./images/1683177917.8813_mUvytE_100x100.jpg"

 import image016 from "./images/1683177931.2445_REjytU_100x100.jpg"
 import image017 from "./images/1683179392.1419_yMavUr_100x100.jpg"
 import image018 from "./images/1683959060.7184_AvuQUL_100x100.jpg"
 import image019 from "./images/1683177922.4407_yhu7AJ_100x100.jpg"
 import image020 from "./images/1683957644.4526_uVapyL_100x100.jpg"
 import image021 from "./images/1683179408.2452_Azy2Uj_100x100.jpg"
 
 import image022 from "./images/1683179404.4309_eXYZuQ_100x100.jpg"
 import image023 from "./images/1683177960.4258_YLeRan_100x100.jpg"
 import image024 from "./images/1683179413.4983_vaJesy_100x100.jpg"
 import image025 from "./images/1683177711.2658_byvY8y_100x100.jpg"
 import image026 from "./images/1683179419.2504_byMAvY_100x100.jpg"
 import image027 from "./images/1685593389.6421_XAHana_100x100.jpg"
 import image028 from "./images/1685593026.5861_YqePyN_100x100.jpg"
 import image029 from "./images/1683134128.0915_yMa9yN_100x100.jpg"








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
<div className="emoji-containerrr">
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