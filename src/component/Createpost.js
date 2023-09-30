import Navigation from "./Navigation";
import { FaCaretDown, FaFileImage, FaAngleDown } from "react-icons/fa";
import image1 from "./images/1683179404.4309_eXYZuQ_100x100.jpg";
import image2 from "./images/1683177960.4258_YLeRan_100x100.jpg";
import { useState, useEffect } from "react";
import { useImage } from "@chakra-ui/react";
import { IoCloseCircle } from "react-icons/io5";


function Createpost() {
  const [interestModal, setInterestModal] = useState(false);
  const [textInput, setTextInput] = useState(false);
  const [imageInput, setImageInput] = useState(true);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [text, setText] = useState("");
  const [imageFile, setImageFile] = useState("");
  const [apiPost, setApiPost] = useState();
  const [interest, setInterest] = useState([]);
  const [toggleInterest, setToggleInterest] = useState(null);
  let postData = [];
  const userId = localStorage.getItem("userrId")
  const [postdisplay, setPostDisplay]=useState()
  const [realimage, setRealImage] = useState("")
  

  // const toggleInterestModall = (interest) => {
  //   // Check if the interest is already selected, and toggle its selection
  //   const isSelected = selectedInterests.includes(interest);
  //   if (isSelected) {
  //     setSelectedInterests(
  //       selectedInterests.filter((item) => item !== interest)
  //     );
  //   } else {
  //     setSelectedInterests([...selectedInterests, interest]);
  //   }

  //   setInterestModal(false);
  // };

  const toggleInterestModal = () => {
    setInterestModal(!interestModal);
  };

  const toggleTextInput = () => {
    setTextInput(true);
    setImageInput(false);
  };

  const toggleImageInput = () => {
    setImageInput(true);
    setTextInput(false);
  };



  const isPostDisabled = !title || !text || !tag;

  const handlePostInput = (e) => {
    let { name, value } = e.target;
    if (name === "title") {
      setTitle(value);
    } else if (name === "tag") {
      setTag(value);
    } else if (name === "text") {
      setText(value);
    }
  };

  const handleImageUpload = (e) => {
   let file = e.target.files[0];
   if (file) {
     const imageUrl = URL.createObjectURL(file);
     const useImage = setRealImage(file)
     console.log(useImage)
     setImageFile(imageUrl);
     console.log("Selected file:", file);
   }
 };



  const handleSubmit = (e) => {
    e.preventDefault();    
    const category_IDD = localStorage.getItem('postCategoryId')
    if (title && text && tag) {
      postData = {
        category_id:category_IDD,
        user_id:userId,
        title: title,
        body: text,
        img: realimage,
        tag: tag
       

      };
      console.log(postData);
      console.log(toggleInterest)
    }
    const formData = new FormData();
    formData.append("title", postData.title);
    formData.append("body", postData.body);
    formData.append("tag", postData.tag);
    formData.append("img", postData.img);
    formData.append("user_id", postData.user_id);
    formData.append("category_id", postData.category_id);




    fetch(`http://localhost:8000/api/v1/posts`, {
      method: "POST",
      // headers: { "content-type": "application/json" },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setApiPost(data);
        alert('post succesful')
        console.log(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };




  useEffect(() => {
    fetch(`http://localhost:8000/api/v1/categories`)
      .then((resp) => resp.json())
      .then((data) => {
        setInterest(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const selectedInterest = (interest,category) => {
    setToggleInterest(interest,category);
    console.log(interest)
    localStorage.setItem('postCategoryId', category)
 
    
  };

  return (
    <div>
      <Navigation />
      <section className="section02">
        <div className="section02-innerd1">
          <div className="section02-innerd1-div1">
            <h1 className="section02-h01">Create Post</h1>
            <div className="section02-innerd1-div1-innerd">
              <div className="images-videos-text-div">
                <p
                  className={`images-videos-text-div-p1 ${
                    imageInput ? "add-border-bottom" : ""
                  }`}
                  onClick={toggleImageInput}
                >
                  Images & Videos
                </p>
                <p
                  className={`images-videos-text-div-p2 ${
                    textInput ? "add-border-bottom" : ""
                  }`}
                  onClick={toggleTextInput}
                >
                  Text
                </p>
              </div>
              {interestModal && (
                <div className="create-post-interest-div">
                  {interest && interest.map((item)=>(
                  <div className="create-post-interest-div-inner1">
                  <img
                    className="create-post-interest-div-inner1-img"
                    src={item.img}
                    alt=""
                  />
                  <p className="create-post-interest-div-inner1-p1" onClick={()=>selectedInterest(item.name,item._id)}>{item.name}</p>
                </div>
                  ))}
                </div>
                
              )}

              <div className="section02-innerd1-div1-innerd-innerdiv1">

                <div className="newest-divborder">
                  <div className="newest-divborder-innerd1">
                <p>{toggleInterest==null? 'Choose an Interest':toggleInterest}</p>
                <FaCaretDown className="caret-down" onClick={toggleInterestModal} />
                  </div>
                </div>


                <form action="/upload" method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>
                  <input
                    className="section02-innerd1-div1-innerd-innerdiv1-innerd-input"
                    placeholder="Title"
                    value={title}
                    name="title"
                    onChange={handlePostInput}
                    type="text"
                    required
                  />

                  {imageInput && (
                    <div>

                      {imageFile?(
                        <div>
                                  <img
                                  src={imageFile}
                                  alt="Uploaded"
                                  className="uploaded-image"
                                />
                                <IoCloseCircle className="close-icon"/>
                                </div>
                      ):(
                        <div className="image-insert-cover">
                             
                        <div className="centered-div">
                     
                          <div className="image-icon-div">
                          <FaFileImage className="image-icon" />
                          </div>
                      
                          <p className="centered-div-p1">
                            Choose a photo or video to upload
                          </p>
                          <label
                            className="choose-file-button"
                            htmlFor="imageUpload"
                          
                          >
                            Choose file..
                          </label>
                          <input
                            type="file"
                            accept="image/*"
                            id="imageUpload"
                            name="image"
                            className="input-field"
                            onChange={handleImageUpload}
                            hidden
                          />
                          <p className="centered-div-or">or</p>
                          <div className="input-and-buttonn">
                            <input
                              className="style-placeholder"
                              placeholder="Paste Image or Video URL"
                              type="text"
                            />
                            <div className="buttonn-divv">
                              <button className="">Use Link</button>
                            </div>
                          </div>
                        </div>
                        <p className="support-p">
                          Support links with PNG, JPG, GIF or MP4 file.{" "}
                        </p>
                      </div>
                      )}

                      <input
                        className="down-input"
                        placeholder="Add at least 1 tag"
                        type="text"
                        value={tag}
                        name="tag"
                        onChange={handlePostInput}
                        required
                      />
                      <div className="post-butonn-div">
                        <button
                          className=""
                          disabled={isPostDisabled}
                          type="submit"
                        >
                          Post
                        </button>
                      </div>
                    </div>
                  )}

                  {textInput && (
                    <div>
                      <textarea  id="" cols="30" rows="10"                         className="image-insert-cover02"
                        type="text"
                        placeholder="Text (optional)"
                        value={text}
                        name="text"
                        onChange={handlePostInput}
                        required>
                        

                      </textarea>

                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
          <div className="section02-innerd1-div2">
            <div className="section02-innerd1-div2-innerd">
              <h2 className="section02-innerd1-div2-innerd-h1">9GAG Rules</h2>
              <FaAngleDown className="caret-downn-1" />
            </div>
            <div className="rules-text-div">
              <ol className="rules-text-div-ol">
                <li>No Pornography </li>
                <li>No violence of gory content</li>
                <li>No hate speech and bullying </li>
                <li>No spamming and manipulation</li>
                <li>No deceptive content </li>
                <li>No illegal activities</li>
                <li>No impersonation </li>
                <li>No copyright infringement</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Createpost;
