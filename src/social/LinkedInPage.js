import React, { Component } from 'react';

import { LinkedIn } from 'react-linkedin-login-oauth2';

class LinkedInPage extends Component {
  state = {
    code: '',
    errorMessage: '',
    accessToken:''
  };


  handleSuccess = (data) => {
    this.setState({
      code: data.code,
      errorMessage: '',
    });
    this.GetToken(data.code);
  }

  handleFailure = (error) => {
    this.setState({
      code: '',
      errorMessage: error.errorMessage,
    });
  }
  
   GetToken=(code)=>{
     
     let url ="https://linkedin.com/oauth/v2/accessToken?";
     const param="client_id=864ud6057l7ldu&client_secret=7BPgQrg3PFYVT0MA&grant_type=authorization_code&redirect_uri=http://localhost:3000/linkedin&code="+code;
     
  //    var data = querystring.stringify({
  //     grant_type: "authorization_code",
  //     code: code,
  //     redirect_uri:"http://localhost:3000/linkedin",//should match as in Linkedin application setup
  //     client_id: '864ud6057l7ldu',
  //     client_secret:"7BPgQrg3PFYVT0MA"// the secret
  // });

     
     var options = {
      host: 'www.linkedin.com',
      path: '/oauth/v2/accessToken',
      protocol: 'https:',
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(param)
      }
  };

  var req = http.request(options, function (res) {
    var data = '';
   res.setEncoding('utf8');
   res.on('data', function (chunk) {
       data += chunk;

   });
   res.on('end', function () {
       //once the access token is received store in DB
      //  this.setState({accessToken: JSON.parse(data)});
   });
   req.on('error', function (e) {
       console.log("problem with request: " + e.message);
   });

});
req.write(data);
req.end();
  }

  render() {
    const { code, errorMessage , accessToken} = this.state;
    return (
      <div>
        <LinkedIn
          clientId="864ud6057l7ldu"
          onFailure={this.handleFailure}
          onSuccess={this.handleSuccess}
          redirectUri={`${window.location.origin}/linkedin`}
        >
          {/* <img src={require('./assets/linkedin.png')} alt="Log in with Linked In" style={{ maxWidth: '180px' }} /> */}
          <h2>Login with Linkedin</h2>
        </LinkedIn>
        {!code && <div>No code</div>}
        {code && <div>Code: {code}</div>}
        {errorMessage && <div>{errorMessage}</div>}
       <div>Token : {accessToken}</div>
      </div>
    );
  }
}

export default LinkedInPage;