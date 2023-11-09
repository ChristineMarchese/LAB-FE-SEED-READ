// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./IndexPage.css"

function IndexPage() {
  const [music, setMusic] = useState([]);
  const API = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  function newSong() {
    navigate("/songs/new");
  }

  const fetchData = async () => {
    try {
      fetch(`${API}/songs`)
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
          setMusic(res);
        });
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
    <div>
      <h2 className="header">Index</h2>
      <button onClick={newSong}>New Song</button>
      <table className="table">
        <tbody>
          <tr>
            <th>Fav</th>
            <th>Song</th>
            <th>Artist</th>
            <th>Time</th>
          </tr>
          {music.map((element, index) => {
            return (
              <tr key={index}>
                <td>
                  <Link to={`/songs/${element.id}`}>
                    {element.is_favorite ? <span>⭐️</span> : " "}
                  </Link>
                </td>
                <td>
                  <Link to={`/songs/${element.id}`}> {element.name}</Link>
                </td>
                <td>
                  <Link to={`/songs/${element.id}`}> {element.artist}</Link>
                </td>
                <td>
                  <Link to={`/songs/${element.id}`}>{element.time}</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default IndexPage;
