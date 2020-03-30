const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
const fetch = require('node-fetch');
const { URLSearchParams } = require('url');

app.post('/getList', getUserToken);

function getUserToken(req, res) {
  var url = 'https://www.linkedin.com/oauth/v2/accessToken';
  const params = new URLSearchParams();
  params.append('client_id', '81x6qs4gsfa91h');
  params.append('client_secret', 'Zo9dQxkEQE4SMkrI');
  params.append('redirect_uri', 'http://localhost:3000/linkedin');
  params.append(
    'code',
    req.body.code
  );
  params.append('grant_type', 'authorization_code');
  fetch(url, { method: 'POST', body: params })
    .then(res => {
      return res.json();
    })
    .then(json => {
      getUserDetails(req, res, json.access_token)

    });
}

function getUserDetails(req, res, val) {
  var url1 = 'https://api.linkedin.com/v2/me';
  fetch(url1, {
    method: 'get',
    headers: {
      Authorization:
        `Bearer ${val}`
    }
  })
    .then(res => {
      return res.json();
    })
    .then(json => {
      res.send(json)

    });

}

app.listen(3003, () => console.log('Example app listening on port 3003!'));
