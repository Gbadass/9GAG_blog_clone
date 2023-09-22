import Navigation from "./Navigation"
import { FaCaretDown,FaFileImage,FaAngleDown } from "react-icons/fa";
import image1 from "./images/1683179404.4309_eXYZuQ_100x100.jpg"
import image2 from "./images/1683177960.4258_YLeRan_100x100.jpg"
import { useState } from "react";




function Createpost() {

  const [interestModal, setInterestModal] = useState(false);
  const [textInput, setTextInput] = useState(false);
  const [imageInput, setImageInput] = useState(true);
  const [selectedInterests, setSelectedInterests] = useState([]);

  const toggleInterestModall = (interest) => {
    // Check if the interest is already selected, and toggle its selection
    const isSelected = selectedInterests.includes(interest);
    if (isSelected) {
      setSelectedInterests(selectedInterests.filter((item) => item !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  
    setInterestModal(false);
  };
  

  const toggleInterestModal = () => {
    setInterestModal(!interestModal);
  }

  const toggleTextInput = () => {

    setTextInput(true); 
    setImageInput(false); 

    
    
  }

  const toggleImageInput = () => {
    setImageInput(true); 
    setTextInput(false); 
    
  
  }


  return(
<div>
<Navigation/>
<section className="section02">
  <div className="section02-innerd1">
    <div className="section02-innerd1-div1">
    <h1 className="section02-h01">Create Post</h1>
    <div className="section02-innerd1-div1-innerd">
      <div className="images-videos-text-div">
      <p className={`images-videos-text-div-p1 ${imageInput? "add-border-bottom" : ""}`} onClick={toggleImageInput}>Images & Videos</p>
      <p className={`images-videos-text-div-p2 ${textInput? "add-border-bottom" : ""}`} onClick={toggleTextInput}>Text</p>
      </div>
   {interestModal && (
            <div className="create-post-interest-div">
            <div className="create-post-interest-div-inner1">
              <img className="create-post-interest-div-inner1-img" src={image1} alt="" />
              <p className="create-post-interest-div-inner1-p1">Cat</p>
            </div>
            <div className="create-post-interest-div-inner1">
              <img className="create-post-interest-div-inner1-img" src={image1} alt="" />
              <p className="create-post-interest-div-inner1-p1">Food and Drink</p>
            </div>
        </div>
   )}
      <div className="section02-innerd1-div1-innerd-innerdiv1">
        <div className="section02-innerd1-div1-innerd-innerdiv1-innerd" >
          <p>Choose an interest</p>
          <FaCaretDown className="caret-down" onClick={toggleInterestModal} />
        </div>


        <input className="section02-innerd1-div1-innerd-innerdiv1-innerd-input" placeholder="Title" type="text" />
        
            {imageInput && (
              <div>
        <div className="image-insert-cover">
        <div className="centered-div">
          <FaFileImage className="image-icon"/>
        <p className="centered-div-p1">Choose a photo or video to upload</p>
        {/* <input type="file" className="centered-div-image-input" /> */}
        <button className="choose-file-button">Choose file..</button>
        <p className="centered-div-or">or</p>
        <div className="input-and-buttonn">
          <input className="style-placeholder" placeholder="Paste Image or Video URL" type="text" />
          <div className="buttonn-divv">
          <button className="">Use Link</button>
          </div>
         
        </div>
    
        </div>
        <p className="support-p">Support links with PNG, JPG, GIF or MP4 file. </p>
       
      </div>
              <input className="down-input" type="text" />
              <div className="post-butonn-div">
              <button className="">Post</button>
              </div>
              </div>
            )}

        {textInput && (
          <div>
          <input className="image-insert-cover02" type="text" />
          <input className="down-input02" type="text" />
        <div className="post-butonn-div">
        <button className="">Post</button>
        </div>
          </div>
        )}
       


         
       


        
      </div>
    </div>

    </div>
    <div className="section02-innerd1-div2">
      <div className="section02-innerd1-div2-innerd">
      <h2 className="section02-innerd1-div2-innerd-h1">9GAG Rules</h2>
      <FaAngleDown className="caret-downn-1"/>
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
  )
}

export default Createpost