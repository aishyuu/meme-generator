import "../style.css"
import React from 'react'

export default function Content() {

    let url;
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function handleClick() {
        let numRandom = Math.floor(Math.random() * allMemes.length);
        url = allMemes[numRandom].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return(
        <div className="content">
            <div className="text--boxes">
                <input className="top--text" name="topText" value={meme.topText} onChange={handleChange} type="text" placeholder="Top Text" />
                <input className="bottom--text" name="bottomText" value={meme.bottomText} onChange={handleChange} type="text" placeholder="Bottom Text" />
                <button onClick={handleClick} className="submit--button"><i className="bi bi-card-image"></i>  Get new meme image</button>
            </div>
            <div className="meme">
                <img className="meme--image" src={meme.randomImage} />
                <h1 className="meme--text top">{meme.topText}</h1>
                <h1 className="meme--text bottom">{meme.bottomText}</h1>
            </div>
        </div>
    )
}