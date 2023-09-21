import { Link } from "react-router-dom";
import { FaSistrix } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { MdCreate } from "react-icons/md";
import { useState } from "react";



function Landingpagenavbar(){

  const [modal, setModal]= useState(false)
   const toggleModal = () => {
    setModal(!modal)
   }

  return(
<div>
<nav>
  <header>
    <div className="navbar-div01">
<IoMdMenu className="menu-icon"/>
<Link className="navbar-div01-h1">9GAG</Link>
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
{/* <FaBell className="notification-icon"/> */}

<div className="sign-login-link-covers">
<Link className="sign-login-link-covers-link" onClick={toggleModal}>Sign Up</Link>
<p className="sign-login-link-covers-p">/</p>
<Link className="sign-login-link-covers-link">Log In</Link>

</div>
</div>
<div className="profile-frame">

</div>
<div className="post-frame">
<MdCreate className="write-icon"/>
<p className="post-p">Post</p>
</div>

    </div>
  </header>
</nav>
</div>
  )
}

export default Landingpagenavbar