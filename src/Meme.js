
import React from "react";

export default function Meme() {
    const [meme, setMeme] = React.useState({
      topText: "",
      bottomText: "",
      url: ""
    });
  
    
    const [allMeme, setAllmeme] = React.useState([])
  
    React.useEffect(()=>{
      fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllmeme(data.data.memes))
    },[])
    
    function newImage() {
      const randomNo = Math.floor(Math.random() * allMeme.length);
  
      setMeme(prevMeme => ({
        ...prevMeme,
        url: allMeme[randomNo].url
      }));
      
    }
    console.log(meme.url)
    function handleChange(event){
        const {name,value} = event.target
        setMeme(prevMeme => ({
          ...prevMeme,
          [name]: value
        }))
    }
    return (
      <div className="meme">
        <input 
        name="topText"
        value={meme.topText}
        onChange={handleChange}
        type="text" 
        placeholder="top line" />
        <input 
        name="bottomText"
        value={meme.bottomText}
        onChange={handleChange}
        type="text" 
        placeholder="bottom line" />
        <button onClick={newImage}>
          {/* <img src=".\src\images\Get a new meme image 🖼.png" /> */}
          <h3>Get a new meme image</h3>
        </button>
        <div className="image-container">
          <h3 className="meme--text top">{meme.topText}</h3>
        <img className="meme-image" src={meme.url}></img>
        <h3 className="meme--text bottom">{meme.bottomText}</h3>
        </div> 
      </div>
    );
  }
  