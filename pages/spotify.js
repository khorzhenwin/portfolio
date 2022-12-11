import React, { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import querystring from "querystring";

function getAuthorizationPath() {
  const PATH = "https://accounts.spotify.com/authorize";
  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
  const responseType = "code";
  const redirectUri = encodeURI(process.env.NEXT_PUBLIC_REDIRECT_URI);
  const scope =
    "user-read-private user-read-email user-read-playback-state playlist-read-private playlist-read-collaborative user-follow-read user-read-currently-playing user-read-playback-position user-modify-playback-state user-library-read user-library-modify user-top-read user-read-recently-played user-follow-modify";

  return `${PATH}?client_id=${clientId}&response_type=${responseType}&redirect_uri=${redirectUri}&scope=${scope}&show_dialog=true`;
}

export default function Spotify() {
  const [url, setUrl] = useState(null);
  const [authCode, setAuthCode] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  async function getToken(authCode) {
    const path = "https://accounts.spotify.com/api/token";

    const body = querystring.stringify({
      grant_type: "authorization_code",
      code: authCode,
      redirect_uri: encodeURI(process.env.NEXT_PUBLIC_REDIRECT_URI),
      client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
      client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
    });

    const header = {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(
          process.env.NEXT_PUBLIC_CLIENT_ID +
            ":" +
            process.env.NEXT_PUBLIC_CLIENT_SECRET
        ).toString("base64"),
    };

    const response = await fetch(path, {
      method: "POST",
      headers: header,
      body,
    });
    return response.json();
  }

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.has("code")) {
      urlParams.get("code")
        ? setAuthCode(urlParams.get("code"))
        : setAuthCode(null);
    }
  }, [authCode]);

  useEffect(() => {
    if (url) {
      window.location.href = url;
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      setAuthCode(urlParams.get("code"));
    }

    if (authCode) {
      getToken(authCode).then((res) => {
        setAccessToken(res.access_token);
        setRefreshToken(res.refresh_token);
      });
    }
  }, [url, authCode]);

  return (
    <>
      <Button onClick={() => setUrl(getAuthorizationPath())}>Login</Button>
      <p>AuthCode: {authCode}</p>
      <br />
      <p>AccessToken: {accessToken}</p>
      <br />
      <p>RefreshToken: {refreshToken}</p>
      <br />
    </>
  );
}
