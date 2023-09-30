
import { BiSolidHome} from "react-icons/bi";
import { Link } from "react-router-dom";
import { BiSolidBarChartAlt2,BiTrendingUp,BiTimeFive } from "react-icons/bi";
import { BsTag,BsPin } from "react-icons/bs";
import {FaEllipsisVertical,FaXmark,FaWhatsapp,FaFacebookMessenger } from "react-icons/fa6";
import { ImArrowUp,ImArrowDown } from "react-icons/im";
import { FaRegCommentAlt,FaRegBookmark} from "react-icons/fa";
import { LiaBeerSolid } from "react-icons/lia";
import { ImRedo2 } from "react-icons/im";






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

 import image030 from "./images/422a147f25cc6e22ca812e91576fd6404a4339885697a2a88f57281db890e2d5.jpeg"
 import image031 from "./images/1683178299.2874_je3YRE_100x100.jpg"
 import image032 from "./images/aEqj7De_460swp.webp"
 import image033 from "./images/4af7428c-414c-42c2-9db8-7b612cfcc4ed.png"
 import image034 from "./images/2160713664247422441.jpeg"
 import image035 from "./images/7103302163924574107.jpeg"
import { useEffect, useState } from "react";


function Section1(){

  const [postdata, setPostData]= useState()
  const givenTime = new Date(postdata);

  const [hoursSinceGivenTime, setHoursSinceGivenTime] = useState(0);

  useEffect(()=>{
    fetch(`http://localhost:8000/api/v1/posts`)
    .then((resp) => resp.json())
    .then((data) => {
      setPostData(data)
      // alert("fetch succesful")
      console.log(data)
      console.log(data.category_id)
    })
    .catch((error) => {
      console.log(error.message)
    })

  


  },[])

  

  return(
    <div>
      <section className="section01-sect">
        <div className="section01-sect-div1">
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
                <p>Following</p>

                <div className="tag-and-p-cover">
                  <div className="interest-image-and-p">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image06}
                    alt=""
                  />
                  <p>Anime & Manga</p>
                  </div>
                  <BsPin className="pin-tag1" />
                </div>
                <div className="tag-and-p-cover">
                  <div className="interest-image-and-p">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image07}
                    alt=""
                  />
                  <p>Latest News</p>
                  </div>
                  <BsPin className="pin-tag1" />
                </div>
                <div className="tag-and-p-cover">
                  <div className="interest-image-and-p">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image08}
                    alt=""
                  />
                  <p>Girls SFW</p>
                  </div>
                  <BsPin className="pin-tag1" />
                </div>
                <div className="tag-and-p-cover">
                  <div className="interest-image-and-p">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image09}
                    alt=""
                  />
                  <p>Humor</p>
                  </div>
                  <BsPin className="pin-tag1" />
                </div>

                

              </div>
            </div>
          </div>
          <div className="section01-sect-div1-innnerd3">
            <div className="section01-sect-div1-innnerd3-innerd1">
              <div className="following-p1">
                <p>Interest</p>

                <div className="tag-and-p-cover">
                  <div className="interest-image-and-p">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image06}
                    alt=""
                  />
                  <p>Anime & Manga</p>
                  </div>
                  <BsPin className="pin-tag2" />
                </div>
                <div className="tag-and-p-cover">
                  <div className="interest-image-and-p">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image07}
                    alt=""
                  />
                  <p>Latest News</p>
                  </div>
                  <BsPin className="pin-tag2" />
                </div>
                <div className="tag-and-p-cover">
                  <div className="interest-image-and-p">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image08}
                    alt=""
                  />
                  <p>Girls SFW</p>
                  </div>
                  <BsPin className="pin-tag2" />
                </div>
                <div className="tag-and-p-cover">
                  <div className="interest-image-and-p">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image09}
                    alt=""
                  />
                  <p>Humor</p>
                  </div>
                  <BsPin className="pin-tag2" />
                </div>
                <div className="tag-and-p-cover">
                  <div className="interest-image-and-p">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image010}
                    alt=""
                  />
                  <p>Bitcoin</p>
                  </div>
                  <BsPin className="pin-tag2" />
                </div>
                <div className="tag-and-p-cover">
                  <div className="interest-image-and-p">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image011}
                    alt=""
                  />
                  <p>Gaming</p>
                  </div>
                  <BsPin className="pin-tag2" />
                </div>
                <div className="tag-and-p-cover">
                  <div className="interest-image-and-p">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image012}
                    alt=""
                  />
                  <p>WTF</p>
                  </div>
                  <BsPin className="pin-tag2" />
                </div>
                <div className="tag-and-p-cover">
                  <div className="interest-image-and-p">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image013}
                    alt=""
                  />
                  <p>Relationship & Dating</p>
                  </div>
                  <BsPin className="pin-tag2" />
                </div>
                <div className="tag-and-p-cover">
                  <div className="interest-image-and-p">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image014}
                    alt=""
                  />
                  <p>Motor Vehicle</p>
                  </div>
                  <BsPin className="pin-tag2" />
                </div>
                <div className="tag-and-p-cover">
                  <div className="interest-image-and-p">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image015}
                    alt=""
                  />
                  <p>Animals & Pets</p>
                  </div>
                  <BsPin className="pin-tag2" />
                </div>
                <div className="tag-and-p-cover">
                  <div className="interest-image-and-p">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image016}
                    alt=""
                  />
                  <p>Science & Tech</p>
                  </div>
                  <BsPin className="pin-tag2" />
                </div>
                <div className="tag-and-p-cover">
                  <div className="interest-image-and-p">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image017}
                    alt=""
                  />
                  <p>Comic</p>
                  </div>
                  <BsPin className="pin-tag2" />
                </div>
                <div className="tag-and-p-cover">
                  <div className="interest-image-and-p">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image018}
                    alt=""
                  />
                  <p>Wholesome</p>
                  </div>
                  <BsPin className="pin-tag2" />
                </div>
                <div className="tag-and-p-cover">
                  <div className="interest-image-and-p">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image019}
                    alt=""
                  />
                  <p>Sports</p>
                  </div>
                  <BsPin className="pin-tag2" />
                </div>
                <div className="tag-and-p-cover">
                  <div className="interest-image-and-p">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image020}
                    alt=""
                  />
                  <p>Ask or Tell</p>
                  </div>
                  <BsPin className="pin-tag2" />
                </div>
                <div className="tag-and-p-cover">
                  <div className="interest-image-and-p">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image021}
                    alt=""
                  />
                  <p>Movies & Tv</p>
                  </div>
                  <BsPin className="pin-tag2" />
                </div>

                <div className="tag-and-p-cover">
                  <div className="interest-image-and-p">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image022}
                    alt=""
                  />
                  <p>Cats</p>
                  </div>
                  <BsPin className="pin-tag2" />
                </div>
                <div className="tag-and-p-cover">
                  <div className="interest-image-and-p">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image023}
                    alt=""
                  />
                  <p>Food and Drink</p>
                  </div>
                  <BsPin className="pin-tag2" />
                </div>
                <div className="tag-and-p-cover">
                  <div className="interest-image-and-p">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image024}
                    alt=""
                  />
                  <p>Lifestyle</p>
                  </div>
                  <BsPin className="pin-tag2" />
                </div>
                <div className="tag-and-p-cover">
                  <div className="interest-image-and-p">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image025}
                    alt=""
                  />
                  <p>Superhero</p>
                  </div>
                  <BsPin className="pin-tag2" />
                </div>
                <div className="tag-and-p-cover">
                  <div className="interest-image-and-p">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image026}
                    alt=""
                  />
                  <p>Crypto</p>
                  </div>
                  <BsPin className="pin-tag2" />
                </div>
                <div className="tag-and-p-cover">
                  <div className="interest-image-and-p">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image027}
                    alt=""
                  />
                  <p>Random</p>
                  </div>
                  <BsPin className="pin-tag2" />
                </div>
                <div className="tag-and-p-cover">
                  <div className="interest-image-and-p">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image028}
                    alt=""
                  />
                  <p>Woah</p>
                  </div>
                  <BsPin className="pin-tag2" />
                </div>
                <div className="tag-and-p-cover">
                  <div className="interest-image-and-p">
                  <img
                    className="tag-and-p-cover-image01"
                    src={image029}
                    alt=""
                  />
                  <p>Russso Ukrian War</p>
                  </div>
                  <BsPin className="pin-tag2" />
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="section01-sect-div2">
          <div className="section01-sect-div2-inner1">
            <Link className="section01-sect-div2-inner1-link">
            Home
            </Link>
            <Link className="section01-sect-div2-inner1-link">
            Top
            </Link>
            <Link className="section01-sect-div2-inner1-link">
            Trending
            </Link>
            <Link className="section01-sect-div2-inner1-link">
            Fresh
            </Link>
          </div>
          {/* <hr className="category-selected-line" />  */}
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
            <button className="tips-category-btn">weekly highlights</button> 

          </div>

          <div className="blog-post-div">
            {postdata && postdata.map((item)=> (
            <div className="mapped-div">
            <div className="blog-post-div-inner1">
              <div className="blog-post-div-inner1-div1">
              <img className="blog-post-image01" src={item.category_id.img} alt="" />
              <p className="blog-post-div-inner1-p1">{item.category_id.name}</p>
              <p className="blog-post-div-inner1-p2">16h</p>
              <p className="blog-post-div-inner1-p2">cheared by</p>
              </div> 
              <div className="blog-post-div-inner1-div2">
                <FaEllipsisVertical className="mini-menu-icon"/>
                <FaXmark className="cancle-icon"/>
              </div>
            </div>
            <Link className="singlepost-link" to="/singlepostpage">
            <h1 className="blog-post-div-h1">{item.title}</h1>
            <div className="blog-post-div-inner2">
              <img className="blog-post-div-inner2-img" src={item.img} alt="" />
            </div>
            </Link>

            <div className="tips-category2">
            <button className="tips-category-btn">apple</button>
            <button className="tips-category-btn">iphone</button>
            <button className="tips-category-btn">stick</button>
            <button className="tips-category-btn">one piece</button>
          </div>
            <div className="comments-and-like-div">
              <div className="comments-and-like-div-innerd1">
                <ImArrowUp className="comments-and-like-div-innerd1-arrow-up"/>
                <p className="comments-and-like-div-innerd1-p1">5.9K</p>
                <ImArrowDown className="comments-and-like-div-innerd1-arrow-down"/>
              </div>
              <div className="comments-and-like-div-innerd2">
                <FaRegCommentAlt className="comments-and-like-div-innerd1-arrow-up"/>
                <p className="comments-and-like-div-innerd1-p1">5.9K</p>
                {/* <ImArrowDown className="comments-and-like-div-innerd1-arrow-down"/> */}
                <p className="comments-and-like-div-innerd1-p1-1">Comments</p>
              
              </div>
              <div className="comments-and-like-div-innerd2">
                <LiaBeerSolid className="comments-and-like-div-innerd1-cheers"/>
                <p className="comments-and-like-div-innerd1-p1-1">Cheers</p>
                
              </div>
              <div className="comments-and-like-div-innerd2-1">
                <FaRegBookmark className="comments-and-like-div-innerd1-save"/>
                <p className="comments-and-like-div-innerd1-p1">Save</p>
                
              </div>

              <div className="comments-and-like-social-divs-1">
                  <FaWhatsapp className="comments-and-like-social-divs-whatsapp-icon"/>
                  <FaFacebookMessenger className="comments-and-like-social-divs-messenger-icon"/>
              </div>
              <div className="comments-and-like-share-divs">
                <ImRedo2 className="send-arrow"/>
                <p className="comments-and-like-div-innerd1-p1">Share</p>
              </div>
              
            </div>
            <hr className="post-bottom-hr"/>
            </div>
            ))}


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
  )
}

export default Section1