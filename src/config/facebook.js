// https://www.facebook.com/v9.0/dialog/oauth?client_id={app-id}&redirect_uri={redirect-uri}&state={state-param}

const url="https://www.facebook.com/v9.0/dialog/oauth?";
const client_id=111111;
const redirect_uri=11111;
const state='';

fetch(url)
  .then(res => res.json())
  .then(rows => {
    console.log(rows)
  })