
import { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import "./EditPage.css";



 function EditPage() {
const API = import.meta.env.VITE_API_URL;
const navigate = useNavigate();
const { id } = useParams();

const [name, setName] = useState("");
const [artist, setArtist] = useState("");
const [album, setAlbum] = useState("");
const [time, setTime] = useState("");
const [is_favorite, setis_Favorite] = useState(false);



 useEffect(() => {
   editLog();
 }, []);

async function editLog() {
  try {
     let result = await axios.get(`${API}/songs/${id}`);
     setName(result.data.name);
     setArtist(result.data.artist);
     setAlbum(result.data.album);
     setTime(result.data.time);
     setis_Favorite(result.data.is_favorite);
   } catch(error){
      console.log(error);
   }
}
async function submitButton(e) {
  e.prevent.default();
    try {
      let result = await axios.put(`${API}/songs/${id}`, {
        name: name,
        artist: artist,
        album: album,
        time: time,
        is_favorite: is_favorite,
      });
       navigate("/songs/")
    } catch(error){
      console.log(error);
    }
}

  return (
     <div className="editPage">
    <div>Edit</div>
     <form onSubmit={submitButton}> 
      <div className='form-input'>
       <label>Song Name</label> 
       <input 
        type="text"
         value={name} 
         onChange={(e) => setName(e.target.value)}
         placeholder='Name of Song'
         required 
          />
      </div>
      <div className="artist-input">
        <label>Artist</label>
        <input 
        type="text" 
        value={artist} 
        onChange={(e) => setArtist(e.target.value)}
         placeholder='Name of Artist'
          required 
          />
      </div>
      <div className="album-input">
        <label>Album</label>
        <input 
        type="text" 
        value={album}
         onChange={(e) => setAlbum(e.target.value)}
          placeholder='Name of Album' 
          required
           />
      </div>
       <div className="time-input">
        <label>Time</label>
        <input 
        type="text" 
        value={time} 
        onChange={(e) => setTime(e.target.value)} 
        placeholder='Time'
        required 
        />
      </div>
      <div className="fav-input">
        <label>Favorite</label>
        <input 
        type="checkbox"
         checked={is_favorite} 
         onChange={(e) => setis_Favorite(e.target.checked) }
          />
      </div>
      <br />
      <div className="sub">
     <button type="submit">SUBMIT</button>
     </div>
    </form>
  
    </div>
  )
}
export default EditPage;