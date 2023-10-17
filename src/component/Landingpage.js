import Landingpagenavbar from "./Landingpagenavbar";

import { BiSolidHome } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BiSolidBarChartAlt2, BiTrendingUp, BiTimeFive } from "react-icons/bi";
import { BsTag, BsPin } from "react-icons/bs";
import {
  FaEllipsisVertical,
  FaXmark,
  FaWhatsapp,
  FaFacebookMessenger,
  FaFacebook,
  FaApple,
} from "react-icons/fa6";
import { ImArrowUp, ImArrowDown } from "react-icons/im";
import { FaRegCommentAlt, FaRegBookmark } from "react-icons/fa";
import { LiaBeerSolid } from "react-icons/lia";
import { ImRedo2 } from "react-icons/im";

import image01 from "./images/1688528667.8369_5YWy3Y_100x100.jpg";
import image02 from "./images/1683959060.7184_AvuQUL_100x100.jpg";
import image03 from "./images/1683179392.1419_yMavUr_100x100.jpg";
import image04 from "./images/1683179692.3556_A5eWY2_100x100.jpg";
import image05 from "./images/1683178299.2874_je3YRE_100x100.jpg";

import image06 from "./images/1683177904.702_eWU6aP_100x100.jpg";
import image07 from "./images/1683177896.0516_u6Y9Ez_100x100.jpg";
import image08 from "./images/1690955443.5452_7YTELa_100x100.jpg";
import image09 from "./images/1683178299.2874_je3YRE_100x100.jpg";
import image010 from "./images/1683179603.0589_Ty2yGa_100x100.jpg";

import image011 from "./images/1683179692.3556_A5eWY2_100x100.jpg";
import image012 from "./images/1683958069.2788_PA7eVy_100x100.jpg";
import image013 from "./images/1683177950.2793_EBe3AN_100x100.jpg";
import image014 from "./images/1683179381.1971_6eBEty_100x100.jpg";
import image015 from "./images/1683177917.8813_mUvytE_100x100.jpg";

import image016 from "./images/1683177931.2445_REjytU_100x100.jpg";
import image017 from "./images/1683179392.1419_yMavUr_100x100.jpg";
import image018 from "./images/1683959060.7184_AvuQUL_100x100.jpg";
import image019 from "./images/1683177922.4407_yhu7AJ_100x100.jpg";
import image020 from "./images/1683957644.4526_uVapyL_100x100.jpg";
import image021 from "./images/1683179408.2452_Azy2Uj_100x100.jpg";

import image022 from "./images/1683179404.4309_eXYZuQ_100x100.jpg";
import image023 from "./images/1683177960.4258_YLeRan_100x100.jpg";
import image024 from "./images/1683179413.4983_vaJesy_100x100.jpg";
import image025 from "./images/1683177711.2658_byvY8y_100x100.jpg";
import image026 from "./images/1683179419.2504_byMAvY_100x100.jpg";
import image027 from "./images/1685593389.6421_XAHana_100x100.jpg";
import image028 from "./images/1685593026.5861_YqePyN_100x100.jpg";
import image029 from "./images/1683134128.0915_yMa9yN_100x100.jpg";

import image030 from "./images/422a147f25cc6e22ca812e91576fd6404a4339885697a2a88f57281db890e2d5.jpeg";
import image031 from "./images/1683178299.2874_je3YRE_100x100.jpg";
import image032 from "./images/aEqj7De_460swp.webp";
import image033 from "./images/4af7428c-414c-42c2-9db8-7b612cfcc4ed.png";
import image034 from "./images/2160713664247422441.jpeg";
import image035 from "./images/7103302163924574107.jpeg";
import image036 from "./images/google-icon-512x512-tqc9el3r-removebg-preview.png";
import image037 from "./images/1688528667.8369_5YWy3Y_100x100.jpg";
import image038 from "./images/1688110686.0681_y3EbAZ_100x100.jpg";
import image039 from "./images/1683179603.0589_Ty2yGa_100x100.jpg";

//  import { Link } from "react-router-dom";
import { FaSistrix } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { MdCreate } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Landingpage() {
  const [modal, setModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [loginModal02, setLoginModal02] = useState(false);
  const [agemodal, setAgeModal] = useState(false);
  const Navigate = useNavigate();


  const toggleModal = () => {
    setModal(!modal);
    if (!modal) {
      setLoginModal(false);
    }
  };

  const toggleLogin = () => {
    setLoginModal(!loginModal);
    setModal(false);
  };

  const toggleLogin02 = () => {
    setLoginModal02(!loginModal02);
    setLoginModal(false);
    setModal(false);
  };

  const toggleAgeModal = () => {
    setAgeModal(!agemodal);
    setLoginModal02(false);
    setLoginModal(false);
    setModal(false);
  };

  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [apiData, setApiData] = useState();
  const [loginemail, setLoginEmail] = useState("");
  const [loginpassword, setLoginPassword] = useState("");
  const [age, setAge] = useState("");
  const [newage, setNewAge]=useState()
  let userData = [];
  let LoginUserData = {};
  let interestData = {};
  let ageData=[]

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "fullname") {
      setFullName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleAgeChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "age") {
      setAge(value);
    } 
  };

  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "email02") {
      setLoginEmail(value);
    } else if (name === "password02") {
      setLoginPassword(value);
    }
  };

  const isSignupDisabled = !fullname || !email || !password;
  const isLoginDisabled = !loginemail || !loginpassword;
  const isAgeDisabled = !age;

  const handleAgeSubmit = (e) => {
    e.preventDefault();
    if (age) {
      ageData={
        age:age
      }
      console.log(age)
    }
    const userID = localStorage.getItem('userrId')

    fetch(`http://localhost:8000/api/v1/users/${userID}`, {
      method: "PUT",
      headers: { "Content-Type": "Application/Json" },
      body: JSON.stringify(ageData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setNewAge(data);
        alert("update succesful");
        // toggleAgeModal();
        console.log(data);
      })
      .catch((error) => {
        console.log("error updating age", error);
      });

      Navigate('/')

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullname && email && password) {
      userData = {
        fullname: fullname,
        email: email,
        phone: "0000000000",
        password: password
      };
      console.log(userData);
    }

    fetch(`http://localhost:8000/api/v1/users`, {
      method: "POST",
      headers: { "Content-Type": "Application/Json" },
      body: JSON.stringify(userData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setApiData(data);
        alert("signUp succesful");
        const userId = data.userId;
        localStorage.setItem("userrId", userId);
        toggleAgeModal();
        console.log(data);
      })
      .catch((error) => {
        console.log("error signing up", error);
      });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log(loginemail, loginpassword);
    if (loginemail && loginpassword) {
      LoginUserData = {
        email: loginemail,
        password: loginpassword,
      };
      console.log(LoginUserData);
    }

    fetch(`http://localhost:8000/api/v1/users/auth`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(LoginUserData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.msg === "login succesfull") {
          alert("Login successful");
          const userData = data.user;
          const userId = data.userId;
          localStorage.setItem("userrId", userId);
          console.log(userData);
          console.log(userId);
          Navigate("/");
        } else {
          alert("Invalid credentials. Please check your email and password.");
        }
      })
      .catch((error) => {
        console.log("Error message", error);
      });
  };



  return (
    <div>
      {/* <Landingpagenavbar/> */}
      <nav>
        <header>
          <div className="navbar-div01">
            <IoMdMenu className="menu-icon" />
            <Link className="navbar-div01-h1">9GAG</Link>
            <div className="emoji-div">
              <div className="emoji-frame">🔀</div>
              <Link className="shuffle-p">Shuffle</Link>
            </div>
            <div className="emoji-div">
              <div className="emoji-frame">📱</div>
              <Link className="shuffle-p">Get App</Link>
            </div>
            <div className="emoji-div">
              <div className="emoji-frame">🏴‍☠️</div>
              <Link className="shuffle-p">Memeland</Link>
            </div>
            <div className="emoji-div">
              <div className="emoji-frame">💫</div>
              <Link className="shuffle-p">9GAG Vibes</Link>
            </div>
            <div className="emoji-div">
              <div className="emoji-frame">📍</div>
              <Link className="shuffle-p">Local</Link>
            </div>
          </div>
          <div className="navbar-div02">
            <div className="icon-div">
              <FaSistrix className="search-icon" />
            </div>
            <div className="icon-div">
              {/* <FaBell className="notification-icon"/> */}
              {modal && (
                <div className="modal">
                  <div className="overlay"> </div>
                  <div className="signup-login-container">
                    <FaXmark
                      onClick={toggleModal}
                      className="signup-login-container-cancle-icon"
                    />
                    <h1 className="signup-login-container-h1">9</h1>
                    <h1 className="signup-login-container-h2">
                      9GAG is the HQ of meme
                    </h1>
                    <p className="signup-login-container-p1">
                      By continuing, you agree to 9GAG's Terms of Service and
                      acknowledge that you've <br /> read our Privacy Policy
                    </p>
                    <div className="signup-login-container-innerd">
                      <FaFacebook className="signup-login-container-innerd-facebook-icon" />
                      <p className="signup-login-container-innerd-p1">
                        Continue with Facebook
                      </p>
                    </div>
                    <div className="signup-login-container-innerd2">
                      <img src={image036} className="google-image01" alt="" />
                      <p className="signup-login-container-innerd-p3">
                        Continue with Google
                      </p>
                    </div>
                    <div className="signup-login-container-innerd2">
                      <FaApple className="signup-login-container-innerd-apple-icon" />
                      <p className="signup-login-container-innerd-p3">
                        Continue with Apple
                      </p>
                    </div>
                    <Link className="signup-login-container-innerd4-link">
                      <div
                        className="signup-login-container-innerd4"
                        onClick={toggleLogin}
                      >
                        <p className="signup-login-container-innerd-p4">
                          Use email
                        </p>
                      </div>
                    </Link>

                    <div className="member-login-div">
                      <p className="member-login-div-p1"> Already a member?</p>
                      <Link
                        className="member-login-div-link"
                        onClick={toggleLogin02}
                      >
                        Log in
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {loginModal && (
                <div className="modal">
                  <div className="overlay"> </div>
                  <div className="login-container">
                    <div className="login-container-innerd">
                      <FaXmark
                        onClick={toggleLogin}
                        className="signup-login-container-cancle-icon"
                      />
                      <p className="login-container-p1">Sign up</p>
                    </div>
                    <hr className="login-container-hr" />

                    <div className="login-container-input-divs">
                      <form action="" onSubmit={handleSubmit}>
                        <input
                          value={fullname}
                          onChange={handleInputChange}
                          className="login-container-input-divs-inpt1"
                          placeholder="Full name"
                          name="fullname"
                          type="text"
                          required
                        />{" "}
                        <br /> <br />
                        <input
                          value={email}
                          onChange={handleInputChange}
                          className="login-container-input-divs-inpt1"
                          placeholder="Email address"
                          name="email"
                          type="email"
                          required
                        />{" "}
                        <br /> <br />
                        <input
                          value={password}
                          onChange={handleInputChange}
                          className="login-container-input-divs-inpt1"
                          placeholder="Password"
                          name="password"
                          type="password"
                          required
                        />
                        <button
                          className="login-container-btn002"
                          type="submit"
                          disabled={isSignupDisabled}
                          onClick={handleSubmit}
                        >
                          Sign up
                        </button>
                      </form>
                    </div>
                    {/* <button className="login-container-btn">Sign up</button> */}
                    <div className="member-login-div">
                      <p className="member-login-div-p1"> Already a member?</p>
                      <Link
                        className="member-login-div-link "
                        onClick={toggleLogin02}
                      >
                        Log in
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {loginModal02 && (
                <div className="modal">
                  <div className="overlay"> </div>
                  <div className="login-container02">
                    <div className="login-container-innerd">
                      <FaXmark
                        onClick={toggleLogin02}
                        className="signup-login-container-cancle-icon"
                      />
                      <p className="login-container-p1">Log in</p>
                    </div>
                    <hr className="login-container-hr" />

                    <div className="signup-login-container-innerd">
                      <FaFacebook className="signup-login-container-innerd-facebook-icon" />
                      <p className="signup-login-container-innerd-p1">
                        Continue with Facebook
                      </p>
                    </div>
                    <div className="signup-login-container-innerd2">
                      <img src={image036} className="google-image01" alt="" />
                      <p className="signup-login-container-innerd-p3">
                        Continue with Google
                      </p>
                    </div>
                    <div className="signup-login-container-innerd2">
                      <FaApple className="signup-login-container-innerd-apple-icon" />
                      <p className="signup-login-container-innerd-p3">
                        Continue with Apple
                      </p>
                    </div>

                    <div className="login-container-input-divs">
                      <form action="" onSubmit={handleLoginSubmit}>
                        <input
                          className="login-container-input-divs-inpt1"
                          value={loginemail}
                          placeholder="Email address"
                          type="text"
                          name="email02"
                          onChange={handleLoginInputChange}
                          required
                        />
                        <br /> <br />
                        <input
                          className="login-container-input-divs-inpt1"
                          value={loginpassword}
                          placeholder="Password"
                          type="password"
                          name="password02"
                          onChange={handleLoginInputChange}
                          required
                        />
                        <button
                          className="login-container-btn002"
                          disabled={isLoginDisabled}
                          type="submit"
                        >
                          Log in
                        </button>
                      </form>
                    </div>

                    <div className="member-login-div02">
                      <Link className="member-login-div-link">
                        Forget Password
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {agemodal && (
                <div className="modal">
                  <div className="overlay"> </div>
                  <div className="age-container02">
                    <div className="login-container-innerd">
                      <FaXmark
                        // onClick={toggleLogin02}
                        className="signup-login-container-cancle-icon"
                      />
                      <p className="login-container-p1">Verify your age</p>
                    </div>
                    <hr className="login-container-hr" />
                    <p className="above16-age">
                      You must be at least 16 years old to use 9GAG
                    </p>

                    <div className="age-container-input-divs">
                      <form action="">
                        <input
                          className="login-container-input-divs-inpt1"
                          placeholder="Your age"
                          type="text"
                          name="age"
                          required
                          onChange={handleAgeChange}
                        />
                        <button
                          className="age-container-btn02"
                          disabled={isAgeDisabled}
                          onClick={handleAgeSubmit}
                        >
                          Save
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              )}


              <div className="sign-login-link-covers">
                <Link
                  className="sign-login-link-covers-link"
                  onClick={toggleModal}
                >
                  Sign Up
                </Link>
                <p className="sign-login-link-covers-p">/</p>
                <Link className="sign-login-link-covers-link">Log In</Link>
              </div>
            </div>
            <div className="profile-frame"></div>

            <div className="post-frame" onClick={toggleModal}>
              <MdCreate className="write-icon" />
              <p className="post-p">Post</p>
            </div>
          </div>
        </header>
      </nav>
      <section className="section01-sect">
        <div className="section01-sect-div1">
          <div className="sidbar-signup">
            <p className="sidbar-signup-h2">New to 9GAG</p>
            <p className="sidbar-signup-p2">Sign up now to see more content</p>
            <button className="sidbar-signup-btn" onClick={toggleModal}>
              Sign Up
            </button>
          </div>
          <div className="section01-sect-div1-innnerd">
            <div className="section01-sect-div1-innnerd-innerdiv1">
              <BiSolidHome className="home-icon" />
              <Link className="link02">Home</Link>
            </div>
            <div className="section01-sect-div1-innnerd-innerdiv2">
              <BiSolidBarChartAlt2 className="home-icon" />
              <Link className="link02">Top</Link>
            </div>
            <div className="section01-sect-div1-innnerd-innerdiv2">
              <BiTrendingUp className="home-icon" />
              <Link className="link02">Trending</Link>
            </div>
            <div className="section01-sect-div1-innnerd-innerdiv2">
              <BiTimeFive className="home-icon" />
              <Link className="link02">Fresh</Link>
            </div>
          </div>
          <div className="section01-sect-div1-innnerd3">
            <div className="section01-sect-div1-innnerd3-innerd1">
              <div className="following-p1">
                <p>Interest</p>

                <div className="tag-and-p-cover-outtercover">
                <div className="tag-and-p-cover">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image06}
                    alt=""
                  />
                  <p>Anime & Manga</p>
                </div>
                <div className="pin-cover-div2">
                  <BsPin className="pin-tag2" />
                </div>
                </div>


                <div className="tag-and-p-cover-outtercover">
                <div className="tag-and-p-cover">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image07}
                    alt=""
                  />
                  <p>Latest News</p>
                </div>
                <div className="pin-cover-div2">
                  <BsPin className="pin-tag2" />
                </div>
                </div>

                <div className="tag-and-p-cover-outtercover">
                <div className="tag-and-p-cover">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image08}
                    alt=""
                  />
                  <p>Girl SFW</p>
                </div>
                <div className="pin-cover-div2">
                  <BsPin className="pin-tag2" />
                </div>
                </div>

                <div className="tag-and-p-cover-outtercover">
                <div className="tag-and-p-cover">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image09}
                    alt=""
                  />
                  <p>Humor</p>
                </div>
                <div className="pin-cover-div2">
                  <BsPin className="pin-tag2" />
                </div>
                </div>
                
                <div className="tag-and-p-cover-outtercover">
                <div className="tag-and-p-cover">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image010}
                    alt=""
                  />
                  <p>Bitcoin</p>
                </div>
                <div className="pin-cover-div2">
                  <BsPin className="pin-tag2" />
                </div>
                </div>


                <div className="tag-and-p-cover-outtercover">
                <div className="tag-and-p-cover">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image011}
                    alt=""
                  />
                  <p>Gaming</p>
                </div>
                <div className="pin-cover-div2">
                  <BsPin className="pin-tag2" />
                </div>
                </div>


                <div className="tag-and-p-cover-outtercover">
                <div className="tag-and-p-cover">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image012}
                    alt=""
                  />
                  <p>WTF</p>
                </div>
                <div className="pin-cover-div2">
                  <BsPin className="pin-tag2" />
                </div>
                </div>

                
                <div className="tag-and-p-cover-outtercover">
                <div className="tag-and-p-cover">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image013}
                    alt=""
                  />
                  <p>Relationship & Dating</p>
                </div>
                <div className="pin-cover-div2">
                  <BsPin className="pin-tag2" />
                </div>
                </div>


                <div className="tag-and-p-cover-outtercover">
                <div className="tag-and-p-cover">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image014}
                    alt=""
                  />
                  <p>Motor Vehicle</p>
                </div>
                <div className="pin-cover-div2">
                  <BsPin className="pin-tag2" />
                </div>
                </div>

                <div className="tag-and-p-cover-outtercover">
                <div className="tag-and-p-cover">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image015}
                    alt=""
                  />
                  <p>Animal & Pet</p>
                </div>
                <div className="pin-cover-div2">
                  <BsPin className="pin-tag2" />
                </div>
                </div>

                <div className="tag-and-p-cover-outtercover">
                <div className="tag-and-p-cover">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image016}
                    alt=""
                  />
                  <p>Science & Tech</p>
                </div>
                <div className="pin-cover-div2">
                  <BsPin className="pin-tag2" />
                </div>
                </div>

                <div className="tag-and-p-cover-outtercover">
                <div className="tag-and-p-cover">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image017}
                    alt=""
                  />
                  <p>Comic</p>
                </div>
                <div className="pin-cover-div2">
                  <BsPin className="pin-tag2" />
                </div>
                </div>
                <div className="tag-and-p-cover-outtercover">
                <div className="tag-and-p-cover">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image018}
                    alt=""
                  />
                  <p>Wholesome</p>
                </div>
                <div className="pin-cover-div2">
                  <BsPin className="pin-tag2" />
                </div>
                </div>
                <div className="tag-and-p-cover-outtercover">
                <div className="tag-and-p-cover">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image019}
                    alt=""
                  />
                  <p>Sport</p>
                </div>
                <div className="pin-cover-div2">
                  <BsPin className="pin-tag2" />
                </div>
                </div>
                <div className="tag-and-p-cover-outtercover">
                <div className="tag-and-p-cover">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image020}
                    alt=""
                  />
                  <p>Ask & Tell</p>
                </div>
                <div className="pin-cover-div2">
                  <BsPin className="pin-tag2" />
                </div>
                </div>

                <div className="tag-and-p-cover-outtercover">
                <div className="tag-and-p-cover">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image021}
                    alt=""
                  />
                  <p>Movies & Tv</p>
                </div>
                <div className="pin-cover-div2">
                  <BsPin className="pin-tag2" />
                </div>
                </div>

                <div className="tag-and-p-cover-outtercover">
                <div className="tag-and-p-cover">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image022}
                    alt=""
                  />
                  <p>Cat</p>
                </div>
                <div className="pin-cover-div2">
                  <BsPin className="pin-tag2" />
                </div>
                </div>

                <div className="tag-and-p-cover-outtercover">
                <div className="tag-and-p-cover">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image023}
                    alt=""
                  />
                  <p>Food & Drink</p>
                </div>
                <div className="pin-cover-div2">
                  <BsPin className="pin-tag2" />
                </div>
                </div>

                <div className="tag-and-p-cover-outtercover">
                <div className="tag-and-p-cover">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image024}
                    alt=""
                  />
                  <p>Lifestyle</p>
                </div>
                <div className="pin-cover-div2">
                  <BsPin className="pin-tag2" />
                </div>
                </div>

                <div className="tag-and-p-cover-outtercover">
                <div className="tag-and-p-cover">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image025}
                    alt=""
                  />
                  <p>Superhero</p>
                </div>
                <div className="pin-cover-div2">
                  <BsPin className="pin-tag2" />
                </div>
                </div>

                <div className="tag-and-p-cover-outtercover">
                <div className="tag-and-p-cover">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image026}
                    alt=""
                  />
                  <p>Crypto</p>
                </div>
                <div className="pin-cover-div2">
                  <BsPin className="pin-tag2" />
                </div>
                </div>
                
                <div className="tag-and-p-cover-outtercover">
                <div className="tag-and-p-cover">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image027}
                    alt=""
                  />
                  <p>Random</p>
                </div>
                <div className="pin-cover-div2">
                  <BsPin className="pin-tag2" />
                </div>
                </div>

                <div className="tag-and-p-cover-outtercover">
                <div className="tag-and-p-cover">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image028}
                    alt=""
                  />
                  <p>Woah</p>
                </div>
                <div className="pin-cover-div2">
                  <BsPin className="pin-tag2" />
                </div>
                </div>
                <div className="tag-and-p-cover-outtercover">
                <div className="tag-and-p-cover">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image029}
                    alt=""
                  />
                  <p>Russso Ukrian War</p>
                </div>
                <div className="pin-cover-div2">
                  <BsPin className="pin-tag2" />
                </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="section01-sect-div2">
          <div className="section01-sect-div2-inner1">
            <Link className="section01-sect-div2-inner1-link">Home</Link>
            <Link className="section01-sect-div2-inner1-link">Top</Link>
            <Link className="section01-sect-div2-inner1-link">Trending</Link>
            <Link className="section01-sect-div2-inner1-link">Fresh</Link>
          </div>
          <hr className="category-selected-line" />
          <hr className="category-line" />

          <img className="ad-image" src={image030} alt="" />
          <div className="tips-category">
            <button className="tips-category-btn">apple</button>
            <button className="tips-category-btn">iphone</button>
            <button className="tips-category-btn">stick</button>
            <button className="tips-category-btn">one piece</button>
            <button className="tips-category-btn">trump</button>
            <button className="tips-category-btn">latest news</button>
            <button className="tips-category-btn">most commented</button>
          </div>


          <div className="blog-post-div">
            <div className="blog-post-div-inner1">
              <div className="blog-post-div-inner1-div1">
                <img className="blog-post-image01" src={image031} alt="" />
                <p className="blog-post-div-inner1-p1">Humor</p>
                <p className="blog-post-div-inner1-p2">16h</p>
                <p className="blog-post-div-inner1-p2">cheared by</p>
              </div>
              <div className="blog-post-div-inner1-div2">
                <FaEllipsisVertical className="mini-menu-icon" />
                <FaXmark className="cancle-icon" />
              </div>
            </div>
            <h1 className="blog-post-div-h1">
              have you ever tried to eat clock?
            </h1>
            <div className="blog-post-div-inner2">
              <img className="blog-post-div-inner2-img" src={image032} alt="" />
            </div>
            <div className="tips-category2">
              <button className="tips-category-btn">apple</button>
              <button className="tips-category-btn">iphone</button>
              <button className="tips-category-btn">stick</button>
              <button className="tips-category-btn">one piece</button>
            </div>
            <div className="comments-and-like-div">
              <div className="comments-and-like-div-innerd1">
                <ImArrowUp className="comments-and-like-div-innerd1-arrow-up" />
                <p className="comments-and-like-div-innerd1-p1">5.9K</p>
                <ImArrowDown className="comments-and-like-div-innerd1-arrow-down" />
              </div>
              <div className="comments-and-like-div-innerd2">
                <FaRegCommentAlt className="comments-and-like-div-innerd1-arrow-up" />
                <p className="comments-and-like-div-innerd1-p1">5.9K</p>
                {/* <ImArrowDown className="comments-and-like-div-innerd1-arrow-down"/> */}
                <p className="comments-and-like-div-innerd1-p1">Comments</p>
              </div>
              <div className="comments-and-like-div-innerd2">
                <LiaBeerSolid className="comments-and-like-div-innerd1-cheers" />
                {/* <p className="comments-and-like-div-innerd1-p1">5.9K</p> */}
                {/* <ImArrowDown className="comments-and-like-div-innerd1-arrow-down"/> */}
                <p className="comments-and-like-div-innerd1-p1">Cheers</p>
              </div>
              <div className="comments-and-like-div-innerd2">
                <FaRegBookmark className="comments-and-like-div-innerd1-save" />
                {/* <p className="comments-and-like-div-innerd1-p1">5.9K</p> */}
                {/* <ImArrowDown className="comments-and-like-div-innerd1-arrow-down"/> */}
                <p className="comments-and-like-div-innerd1-p1">Save</p>
              </div>

              <div className="comments-and-like-social-divs">
                <FaWhatsapp className="comments-and-like-social-divs-whatsapp-icon" />
                <FaFacebookMessenger className="comments-and-like-social-divs-messenger-icon" />
              </div>
              <div className="comments-and-like-share-divs">
                <ImRedo2 className="send-arrow" />
                <p className="comments-and-like-div-innerd1-p1">Share</p>
              </div>
            </div>
            <hr className="post-bottom-hr" />
          </div>
        </div>

        <div className="section01-sect-div3">
          <div className="airtel-ads-div">
            <img src={image033} alt="" />
          </div>
          <div className="airtel-ads-div">
            <img src={image034} alt="" />
          </div>
          <div className="airtel-ads-div">
            <img src={image035} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landingpage;
