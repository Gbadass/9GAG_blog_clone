import Navigation from "./Navigation"
import { BiSolidBarChartAlt2,BiTrendingUp,BiTimeFive } from "react-icons/bi";
import { BsTag,BsPin } from "react-icons/bs";
import { BiSolidHome} from "react-icons/bi";
import { Link } from "react-router-dom";
import {
  FaEllipsisVertical,
} from "react-icons/fa6";

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
import { useState } from "react";

function Profile() {

const [upvotes, setUpVotes] = useState(true);
const [post, setPost] = useState(false);
const [comments, setComments] = useState(false);
const [saved, setSaved] = useState(false);

const toogleUpVotes =() =>{
  setUpVotes(true);
  setPost(false);
  setComments(false);
  setSaved(false);

}

const tooglePost =() =>{
  setUpVotes(false);
  setPost(true);
  setComments(false);
  setSaved(false);

}

const toogleComments =() =>{

  setUpVotes(false);
  setPost(false);
  setComments(true);
  setSaved(false);
}

const toogleSaved =() =>{
  setUpVotes(false);
  setPost(false);
  setComments(false);
  setSaved(true);
}

  return(
    <div>
 <Navigation/>
 <section className="profile-section01-sect">
 <div className="profile-section01-sect-div1">
          <div className="section01-sect-div1-innnerd">
              <div className="section01-sect-div1-innnerd-innerdiv1">
              <BiSolidHome className="home-icon"/>
              <Link className="link02">Home</Link>
              </div>
              <div className="section01-sect-div1-innnerd-innerdiv2">
              <BiSolidBarChartAlt2 className="home-icon"/>
              <Link className="link02">Top</Link>
              </div>
              <div className="section01-sect-div1-innnerd-innerdiv2">
              <BiTrendingUp className="home-icon"/>
              <Link className="link02">Trending</Link>
              </div>
              <div className="section01-sect-div1-innnerd-innerdiv2">
              <BiTimeFive className="home-icon"/>
              <Link className="link02">Fresh</Link>
              </div>
          </div>
          <div className="section01-sect-div1-innnerd2">
            <div className="section01-sect-div1-innnerd2-innerd1">
              <div className="following-p1">
                <div className="following-edit-div">
                <p>Following</p>
                <p>Edit</p>

                </div>
       
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
              </div>
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
        <div className="profile-section01-sect-div2">
          <div className="profile-section01-sect-div2-innerd">
            <img src="" alt="" />
            <div className="profile-section01-sect-div2-innerd-div1">
              <p className="profile-section01-sect-div2-innerd-div1-p1">gerald</p>
              <div className="profile-section01-sect-div2-innerd-div1-innerd">
              <p className="profile-section01-sect-div2-innerd-div1-p2">
                @streetboycloth &#183;
              </p>
              <p className="profile-section01-sect-div2-innerd-div1-p3">0 days</p>
              </div>

            </div>
          </div>
          <p className="my-funny-collection-p">My Funny Collection</p>
          <div className="profile-section01-sect-div2-innerd2">
            <div className="profile-section01-sect-div2-innerd2-div1">
              <p className={`profile-section01-sect-div2-innerd2-div1-p1 ${upvotes ? "add-border-bottom" : "" } ${upvotes? "color-white" : ""}`   } onClick={toogleUpVotes}>Upvotes</p>
              <p className={`profile-section01-sect-div2-innerd2-div1-p1 ${post ? "add-border-bottom" : ""} ${post? "color-white" : ""}`} onClick={tooglePost}>Posts</p>
              <p className={`profile-section01-sect-div2-innerd2-div1-p1 ${comments ? "add-border-bottom" : ""} ${comments ? "color-white" : ""}`} onClick={toogleComments}>Comments</p>
              <p className={`profile-section01-sect-div2-innerd2-div1-p1 ${saved ? "add-border-bottom"  : ""} ${saved ? "color-white" : ""} `} onClick={ toogleSaved}>Saved</p>
            </div>
            <FaEllipsisVertical className="mini-menu-icon2" />
          </div>
          <hr className="profile-section01-sect-div2-innerd2-hr"/>
          <div className="profile-section01-sect-relative-div">
            {upvotes && (
            <div className="post-display-div">
            <p className="post-display-div-p1">No upvoted posts</p>
          </div>
            )}
             {post && (
              <div className="post-display-div2">
              <p className="post-display-div-p1">No Posts</p>
          </div>
            )}
             {comments && (
              <div className="post-display-div2">
              <p className="post-display-div-p1">No Comments</p>
          </div>
            )}
           {saved && (
              <div className="post-display-div2">
              <p className="post-display-div-p1">No Saved</p>
          </div>
            )}
          </div>



        </div>
 </section>
    </div>

  )
}

export default Profile