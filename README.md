# IVLE OAuth
A package that wraps the NUS IVLE LAPI into an OAuth flow for Meteor.

## Getting Started
    meteor add irvinlim:ivle

## Basic Usage
You can use the following to initiate the OAuth login flow on the client:

    var callback = Accounts.oauth.credentialRequestCompleteHandler(function(error) {
      if (error) 
        console.error('Login failed:', error.reason || error);
      else 
        console.log('Logged in!');
    });
    IVLE.requestCredential(callback);

For now, usage is limited to user accounts.

## Acknowledgments
This package was inspired by [this gist](https://gist.github.com/lukasvan3l/355a4fc1968c5f438b85).

## References
- [IVLE LAPI Documentation](https://wiki.nus.edu.sg/display/ivlelapi/Home)
