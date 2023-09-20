import Navigation from "./Navigation"
import { FaCaretDown,FaFileImage,FaAngleDown } from "react-icons/fa";


function Createpost() {
  return(
<div>
<Navigation/>
<section className="section02">
  <div className="section02-innerd1">
    <div className="section02-innerd1-div1">
    <h1 className="section02-h01">Create Post</h1>
    <div className="section02-innerd1-div1-innerd">
      <div className="images-videos-text-div">
      <p className="images-videos-text-div-p1">Images & Videos</p>
      <p className="images-videos-text-div-p2">Text</p>
      </div>
   
      <div className="section02-innerd1-div1-innerd-innerdiv1">
        <div className="section02-innerd1-div1-innerd-innerdiv1-innerd">
          <p>Choose an interest</p>
          <FaCaretDown className="caret-down"/>
        </div>

        <input className="section02-innerd1-div1-innerd-innerdiv1-innerd-input" placeholder="Title" type="text" />

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