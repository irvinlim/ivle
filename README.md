# IVLE OAuth
A package that uses the NUS IVLE LAPI for OAuth login flow and IVLE API calls.

## Getting Started
    meteor add irvinlim:ivle
    meteor add service-configuration

## Basic Usage
### Configuration
On the server, add service configurations for IVLE:

    ServiceConfiguration.configurations.remove({
        service: 'ivle'
    });
     
    ServiceConfiguration.configurations.insert({
        service: 'ivle',
        apiKey: '<API_KEY>'
    });

Make sure that you define your IVLE LAPI key in `settings.json` (or equivalent), instead of checking your API key into version control. If you don't have a key you can request one [here](http://ivle.nus.edu.sg/LAPI/default.aspx).

### OAuth Login
You can use the following to initiate the OAuth login flow on the client:

    var callback = Accounts.oauth.credentialRequestCompleteHandler(function(error) {
      if (error) 
        console.error('Login failed:', error.reason || error);
      else 
        console.log('Logged in!');
    });
    IVLE.requestCredential(callback);

It is recommended to use [accounts-ivle](https://github.com/irvinlim/meteor-accounts-ivle), which does the relevant OAuth business behind the scenes and logs in a Meteor user using this authentication method.

### HTTP GET
To perform GET requests from the LAPI, the method definition is of the form: `IVLE.get.{Section}.{EndpointName}`. For example, to access [Modules](https://wiki.nus.edu.sg/display/ivlelapi/Module), the method is `IVLE.get.Module.Modules`.

Arguments follow exactly as outlined in the LAPI documentation, except for `APIKey` and `AuthToken` arguments. The method expects either a `accessToken` (identical to `AuthToken`), `user` (Meteor user object), or `userId` (Meteor user ID) parameter. It is recommended to use [accounts-ivle](https://github.com/irvinlim/meteor-accounts-ivle) in conjunction with this package, as the access token can be retrieved directly from the user's data after authentication.

For more information about arguments schema and default values, you can view the endpoint schema definitions [here](https://github.com/irvinlim/meteor-ivle/tree/master/server/endpoints/get).

Methods are only available on the server, so `Meteor.call` must be used to run it on the client:

    Meteor.call("IVLE.get.Module.Modules", { user: Meteor.user(), Duration: 10, IncludeAllInfo: false }, function(error, response) {
        if (error) {
            console.log(error);
        } else {
            response.forEach(function(mod) {
                console.log(mod.CourseCode);
            });
        }
    });

If we are on the server, we can call the methods directly.

    import { IVLE } from 'irvinlim:ivle';

    const mods = IVLE.get.Module.Modules({ user: userId, Duration: 10, IncludeAllInfo: false });
    mods.forEach(function(mod) {
        console.log(mod.CourseCode);
    });

### HTTP Post
POST features coming soon!

## Acknowledgments
This package was inspired by [this gist](https://gist.github.com/lukasvan3l/355a4fc1968c5f438b85).

## References
- [IVLE LAPI Documentation](https://wiki.nus.edu.sg/display/ivlelapi/Home)
