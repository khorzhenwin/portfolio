import React, { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";

export default function Spotify() {
  const [url, setUrl] = useState(null);
  const [authCode, setAuthCode] = useState(null);

  const AUTHORIZE = "https://accounts.spotify.com/authorize";
  let urlPath = AUTHORIZE;
  urlPath += "?client_id=" + process.env.NEXT_PUBLIC_CLIENT_ID;
  urlPath += "&response_type=code";
  urlPath +=
    "&redirect_uri=" + encodeURIComponent(process.env.NEXT_PUBLIC_REDIRECT_URI);
  urlPath +=
    "&scope=user-read-private user-read-email user-read-playback-state playlist-read-private playlist-read-collaborative user-follow-read user-read-currently-playing user-read-playback-position user-modify-playback-state user-library-read user-library-modify user-top-read user-read-recently-played user-follow-modify";
  urlPath += "&show_dialog=true";

  useEffect(() => {
    if (url) window.location.href = url;
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    setAuthCode(urlParams.get("code"));
  }, [url]);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.has("code")) {
      const code = urlParams.get("code");
      if (code) setAuthCode(urlParams.get("code"));
    }
  }, [authCode]);

  // localStorage.setItem("client_id", process.env.CLIENT_ID);
  // localStorage.setItem("client_secret", process.env.CLIENT_SECRET);
  // localStorage.setItem("redirect_uri", process.env.REDIRECT_URI);
  return (
    <>
      <Button onClick={() => setUrl(urlPath)}>Login</Button>
      <p>{authCode}</p>
    </>
  );
}
