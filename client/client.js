IVLE = {
    serviceName: 'ivle',
    requestCredential: function (options, credentialRequestCompleteCallback) {
        // Method signature to support both (options, callback) and (callback).
        // In case we add options in the future.
        if (!credentialRequestCompleteCallback && typeof options === 'function') {
            credentialRequestCompleteCallback = options;
            options = {};
        } else if (!options) {
            options = {};
        }

        // Fetch the service configuration from the database.
        // If none exist, throw the default ServiceConfiguration error.
        let config = ServiceConfiguration.configurations.findOne({service: IVLE.serviceName});
        if (!config) {
            credentialRequestCompleteCallback &&
            credentialRequestCompleteCallback(new ServiceConfiguration.ConfigError());
            return;
        }

        // Pass in necessary options for OAuth.
        // Note that credentialToken and state are never used by IVLE Login's OAuth flow, but are required by Meteor's OAuth package.
        const credentialToken = Random.id(),
              loginStyle = OAuth._loginStyle(IVLE.serviceName, config, options),
              loginUrl = "https://ivle.nus.edu.sg/api/login/?apikey=" + encodeURIComponent(config.apiKey) + "&url=" +
                         ( OAuth._redirectUri(IVLE.serviceName, config) + encodeURIComponent("&state=" + OAuth._stateParam(loginStyle, credentialToken)) ),
              popupOptions = { width: 445, height: 625 };

        // Launch popup/redirect for authentication with IVLE.
        OAuth.launchLogin({
            loginService: IVLE.serviceName,
            loginStyle: loginStyle,
            loginUrl: loginUrl,
            credentialRequestCompleteCallback: credentialRequestCompleteCallback,
            credentialToken: credentialToken,
            popupOptions: popupOptions
        });
    }
};
