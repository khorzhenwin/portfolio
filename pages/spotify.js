import React, { useEffect, useState } from "react";

export default function Spotify() {
  const AUTHORIZE = "https://accounts.spotify.com/authorize";
  let url = AUTHORIZE;
  url += "?client_id=" + process.env.NEXT_PUBLIC_CLIENT_ID;
  url += "&response_type=code";
  url +=
    "&redirect_uri=" + encodeURIComponent(process.env.NEXT_PUBLIC_REDIRECT_URI);
  url +=
    "&scope=user-read-private user-read-email user-read-playback-state playlist-read-private playlist-read-collaborative user-follow-read user-read-currently-playing user-read-playback-position user-modify-playback-state user-library-read user-library-modify user-top-read user-read-recently-played user-follow-modify";
  url += "&show_dialog=true";

  useEffect(() => {
    window.location.href = url;
  }, []);

  // localStorage.setItem("client_id", process.env.CLIENT_ID);
  // localStorage.setItem("client_secret", process.env.CLIENT_SECRET);
  // localStorage.setItem("redirect_uri", process.env.REDIRECT_URI);
  return <></>;
}
