// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewPage.css"

const API = import.meta.env.VITE_API_URL;

function NewPage() {
  const navigate = useNavigate();
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    isFavorite: false,
  });

  const addSong = () => {
    const songData = {
      name: song.name,
      artist: song.artist,
      album: song.album,
      time: song.time,
      is_favorite: song.isFavorite,
    };
    try {
      fetch(`${API}/songs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(songData),
      })
        .then((res) => res.json())
        .then(() => navigate("/songs"));
    } catch (error) {
      return error;
    }
  };

  const handleTextChange = (e) => {
    setSong({ ...song, [e.target.id]: e.target.value });
  };

  const handleArtistChange = (e) => {
    setSong({ ...song, [e.target.id]: e.target.value });
  };

  const handleAlbumChange = (e) => {
    setSong({ ...song, [e.target.id]: e.target.value });
  };

  const handleTimeChange = (e) => {
    setSong({ ...song, [e.target.id]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setSong({ ...song, [e.target.id]: e.target.value });
  };

  const submitButton = (e) => {
    e.preventDefault();
    addSong();
  };

  return (
    <div>
      <form onSubmit={submitButton}>
        <h2>New</h2>
        <div>
          <label htmlFor="song">Song Name</label>
          <input
            type="text"
            value={song.name}
            id="song"
            onChange={handleTextChange}
            placeholder="Name of Song"
            required
          />
        </div>
        <div>
          <label htmlFor="artist">Artist</label>
          <input
            type="text"
            value={song.artist}
            id="artist"
            onChange={handleArtistChange}
            placeholder="Name of Artist"
            required
          />
        </div>
        <div>
          <label htmlFor="album">Album</label>
          <input
            type="text"
            value={song.album}
            id="album"
            onChange={handleAlbumChange}
            placeholder="Name of Album"
            required
          />
        </div>
        <div>
          <label htmlFor="time">Time</label>
          <input
            type="text"
            value={song.time}
            id="time"
            onChange={handleTimeChange}
            placeholder="time"
            required
          />
        </div>
        <div>
          <label htmlFor="isFavorite">Favorite</label>
          <input
            id="isFavorite"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={song.isFavorite}
          />
        </div>

        <button>SUBMIT</button>
      </form>
    </div>
  );
}

export default NewPage;
