import Navigation from "./Navigation"
import Section1 from "./Section1"
import { useState } from "react";
import image037 from "./images/1688528667.8369_5YWy3Y_100x100.jpg";
import image038 from "./images/1688110686.0681_y3EbAZ_100x100.jpg";
import image039 from "./images/1683179603.0589_Ty2yGa_100x100.jpg";
import image06 from "./images/1683177904.702_eWU6aP_100x100.jpg";
import image07 from "./images/1683177896.0516_u6Y9Ez_100x100.jpg";
import image08 from "./images/1690955443.5452_7YTELa_100x100.jpg";
import image09 from "./images/1683178299.2874_je3YRE_100x100.jpg";
import image012 from "./images/1683958069.2788_PA7eVy_100x100.jpg";
import image013 from "./images/1683177950.2793_EBe3AN_100x100.jpg";
import { useEffect } from "react";

function Home() {

  const [isFollowing, setIsFollowing] = useState(false);
  const [isFollowing2, setIsFollowing2] = useState(false);
  const [isFollowing3, setIsFollowing3] = useState(false);
  const [isFollowing4, setIsFollowing4] = useState(false);
  const [isFollowing5, setIsFollowing5] = useState(false);
  const [isFollowing6, setIsFollowing6] = useState(false);
  const [isFollowing7, setIsFollowing7] = useState(false);
  const [isFollowing8, setIsFollowing8] = useState(false);
  const [unseen, setUnseen] = useState(true);
  const [categories, setCategories] = useState([]);
  const [categoryid, setCategoryId] = useState()
  const [categoryIdObj, setCategoryIdObj] = useState([]);

  const unSeen = () => {
    setUnseen(!unseen);
    // setAgeModal(false)
  };

  const handleFollowClick = (categoryId) => {
    setIsFollowing(!isFollowing);
    setCategoryIdObj((prevCategoryIds) => [...prevCategoryIds, categoryId]);
      


  };

  const handleFollowClick2 = (categoryId) => {
    setIsFollowing2(!isFollowing2);
    localStorage.setItem('categoryIDD', categoryId)
    setCategoryIdObj((prevCategoryIds) => [...prevCategoryIds, categoryId]);


  };

  console.log(categoryIdObj)

  const handleFollowClick3 = (categoryId) => {
    setIsFollowing3(!isFollowing3);
    setCategoryIdObj((prevCategoryIds) => [...prevCategoryIds, categoryId]);
  };

  const handleFollowClick4 = (categoryId) => {
    setIsFollowing4(!isFollowing4);
  };

  const handleFollowClick5 = (categoryId) => {
    setIsFollowing5(!isFollowing5);
  };

  const handleFollowClick6 = (categoryId) => {
    setIsFollowing6(!isFollowing6);
  };

  const handleFollowClick7 = (categoryId) => {
    setIsFollowing7(!isFollowing7);
  };

  const handleFollowClick8 = (categoryId) => {
    setIsFollowing8(!isFollowing7);
  };

  useEffect(() => {
    fetch(`http://localhost:8000/api/v1/categories`)
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const submitCategory = () =>{

    const category_id = localStorage.getItem("categoryIDD")
    const userID = localStorage.getItem('userrId')
    console.log(category_id)

    fetch(`http://localhost:8000/api/v1/users/${userID}`, {
      method: "PUT",
      headers: { "Content-Type": "Application/Json" },
      body: JSON.stringify(categoryIdObj)
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategoryId(data);
        alert("update succesful");
        console.log(data);
        console.log(categoryIdObj)
      })
      .catch((error) => {
        console.log("error updating category", error);
      });
  }



  return(
    <div>

    <Navigation/>
    <Section1/>
    {unseen && (
                <div className="modal">
                  <div className="overlay"> </div>
                  <div className="interest-container02">
                    <div className="interest-container-innerd">
                      <p className="interest-container-p1">Interest</p>
                      <p
                        className="interest-container-p1"
                      onClick={(e) =>{e.preventDefault(); unSeen();}}
                      >
                        Skip
                      </p>
                    </div>
                    <hr className="interest-container-hr" />
                    <p className="above16-age">
                      Pick 3 or more you'd like to see in your home feed.
                    </p>

                    <div className="interest-container-input-divs">
                      <div className="interest-object-div">
                        <div className="interest-object-div-innerd">
                          <img src={image037} alt="" />
                          <p className="interest-object-div-innerd-p1">
                            {categories[0]?.name}
                          </p>
                        </div>
                        <div className="interest-object-div-innerd">
                          <button
                            className="interest-object-div-innerd-btn"
                            onClick={() => handleFollowClick(categories[0]._id)}
                          >
                            {" "}
                            {isFollowing ? "Following" : "Follow"}
                          </button>
                        </div>
                      </div>

                      <div className="interest-object-div2">
                        <div className="interest-object-div-innerd">
                          <img src={image038} alt="" />
                          <p className="interest-object-div2-innerd-p1">
                            {categories[1]?.name}
                          </p>
                        </div>
                        <div className="interest-object-div-innerd">
                          <button
                            className="interest-object-div2-innerd-btn"
                            onClick={() =>
                              handleFollowClick2(categories[1]._id)
                            }
                          >
                            {" "}
                            {isFollowing2 ? "Following" : "Follow"}
                          </button>
                        </div>
                      </div>

                      <div className="interest-object-div3">
                        <div className="interest-object-div-innerd">
                          <img src={image06} alt="" />
                          <p className="interest-object-div3-innerd-p1">
                            {categories[2]?.name}
                          </p>
                        </div>
                        <div className="interest-object-div-innerd">
                          <button
                            className="interest-object-div3-innerd-btn"
                            onClick={() =>
                              handleFollowClick3(categories[2]._id)
                            }
                          >
                            {isFollowing3 ? "Following" : "Follow"}
                          </button>
                        </div>
                      </div>

                      <div className="interest-object-div4">
                        <div className="interest-object-div-innerd">
                          <img src={image07} alt="" />
                          <p className="interest-object-div4-innerd-p1">
                            {categories[3]?.name}
                          </p>
                        </div>
                        <div className="interest-object-div-innerd">
                          <button
                            className="interest-object-div4-innerd-btn"
                            onClick={() =>
                              handleFollowClick4(categories[3]._id)
                            }
                          >
                            {" "}
                            {isFollowing4 ? "Following" : "Follow"}
                          </button>
                        </div>
                      </div>

                      <div className="interest-object-div5">
                        <div className="interest-object-div-innerd">
                          <img src={image08} alt="" />
                          <p className="interest-object-div5-innerd-p1">
                            {categories[4]?.name}
                          </p>
                        </div>
                        <div className="interest-object-div-innerd">
                          <button
                            className="interest-object-div5-innerd-btn"
                            onClick={() =>
                              handleFollowClick5(categories[4]._id)
                            }
                          >
                            {" "}
                            {isFollowing5 ? "Following" : "Follow"}
                          </button>
                        </div>
                      </div>

                      <div className="interest-object-div6">
                        <div className="interest-object-div-innerd">
                          <img src={image09} alt="" />
                          <p className="interest-object-div6-innerd-p1">
                            {categories[5]?.name}
                          </p>
                        </div>
                        <div className="interest-object-div-innerd">
                          <button
                            className="interest-object-div6-innerd-btn"
                            onClick={() =>
                              handleFollowClick6(categories[5]._id)
                            }
                          >
                            {" "}
                            {isFollowing6 ? "Following" : "Follow"}
                          </button>
                        </div>
                      </div>

                      <div className="interest-object-div7">
                        <div className="interest-object-div-innerd">
                          <img src={image039} alt="" />
                          <p className="interest-object-div7-innerd-p1">
                            {categories[6]?.name}
                          </p>
                        </div>
                        <div className="interest-object-div-innerd">
                          <button
                            className="interest-object-div7-innerd-btn"
                            onClick={() =>
                              handleFollowClick7(categories[6]._id)
                            }
                          >
                            {" "}
                            {isFollowing7 ? "Following" : "Follow"}
                          </button>
                        </div>
                      </div>

                      <div className="interest-object-div8">
                        <div className="interest-object-div-innerd">
                          <img src={image012} alt="" />
                          <p className="interest-object-div8-innerd-p1">
                            {categories[7]?.name}
                          </p>
                        </div>
                        <div className="interest-object-div-innerd">
                          <button
                            className="interest-object-div8-innerd-btn"
                            onClick={() =>
                              handleFollowClick8(categories[7]._id)
                            }
                          >
                            {isFollowing8 ? "Following" : "Follow"}
                          </button>
                        </div>
                      </div>

                      <div className="interest-object-div9">
                        <div className="interest-object-div-innerd">
                          <img src={image013} alt="" />
                          <p className="interest-object-div9-innerd-p1"> WTF</p>
                        </div>
                        <div className="interest-object-div-innerd">
                          <button className="interest-object-div9-innerd-btn">
                            Follow
                          </button>
                        </div>
                      </div>
                    </div>
                    <button className="interest-container-btn" onClick={submitCategory}>Save</button>
                  </div>
                </div>
              )}

    </div>


  )
}

export default Home