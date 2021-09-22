import React, { useState } from "react";
import "./styles.css";

const genresDictionary = {
  Rock: [
    {
      title: "Shy Away",
      rating: "⭐⭐⭐⭐⭐",
      artist: "Twenty One Pilots "
    },
    {
      title: "Serotonin",
      rating: "⭐⭐⭐⭐",
      artist: "Girl In Red"
    },
    {
      title: "Broken Bells",
      rating: "⭐⭐⭐",
      artist: "Greta Van Fleet"
    }
  ],
  Pop: [
    {
      title: "Stay ",
      rating: "⭐⭐⭐⭐⭐",
      artist: "Justin Bieber"
    },
    {
      title: "Levitating",
      rating: "⭐⭐⭐⭐",
      artist: "Dua Lipa"
    },
    {
      title: "All I Know So Far",
      rating: "⭐⭐⭐",
      artist: "Pink"
    }
  ],
  HipHop: [
    {
      title: "Rapstar ",
      rating: "⭐⭐⭐⭐⭐",
      artist: "Polo G"
    },
    {
      title: "Every Chance I Get",
      rating: "⭐⭐⭐⭐",
      artist: "DJ Khaled"
    },
    {
      title: "Wants And Needs",
      rating: "⭐⭐⭐",
      artist: "Drake"
    }
  ]
};

var songsWeKnow = Object.keys(genresDictionary);
console.log(songsWeKnow);

export default function App() {
  var [song, setSong] = useState(genresDictionary["Rock"]);

  function songClickHandler(music) {
    var song = genresDictionary[music];
    setSong(song);
  }
  return (
    <div className="App">
      <h1>Wanna Know Current Trending Songs?</h1>

      <h3> Choose Genre </h3>
      {songsWeKnow.map(function (music) {
        return (
          <button
            style={{ margin: "1rem" }}
            onClick={() => songClickHandler(music)}
            key={music}
          >
            {" "}
            {music}{" "}
          </button>
        );
      })}

      <div>
        <ol>
          {/* {song} */}
          {song.map((songEntry) => {
            const songJSX = (
              <li>
                <span> Title: {songEntry.title} </span>
                <span> Rating: {songEntry.rating}</span>
                <span> Artist: {songEntry.artist}</span>
              </li>
            );
            return songJSX;
          })}
        </ol>
      </div>
    </div>
  );
}
