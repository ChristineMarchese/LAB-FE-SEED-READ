
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./ShowPage.css";

function ShowPage() {
 const [song, setSong] = useState("");
 const { id } = useParams();
 const  navigate = useNavigate();
 const API = import.meta.env.VITE_API_URL;

 useEffect(() => {
  fetchSongs();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

async function fetchSongs() {
   try{
     let result = await axios.get(`${API}/songs/${id}`);
     console.log(result.data);
     setSong(result.data);
    } catch (error) {
      console.log(error);
    }
}
 
async function onHandleDelete() {
    try {
      let result = await axios.delete(`${API}/songs/${id}`);
      console.log(result);
      navigate("/songs");
    } catch (error) {
      console.log(error)
    }
}

  

    function onHandleBack() {
      navigate("/songs");
      }

     function onHandleEdit() {
      navigate(`/songs/${id}/edit`);
      }


  return (

  <div>

    <h2>Show</h2>
    <div>
    <h3>{song.is_favorite ? <span>⭐️</span> : <span>{""}</span>}{" "}
            {song.name} - By {song.artist}</h3>
    </div>
     <div>
      <p>{song.album}</p>
    </div>
    <div>
     <p>{song.time}</p>
    </div>
    <button onClick={onHandleBack}>BACK</button>
    <button onClick={onHandleEdit}>EDIT</button>
    <button onClick={onHandleDelete}>DELETE</button>
    </div>
  );
  
}


export default ShowPage;