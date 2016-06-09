IVLE = {
    serviceName: "ivle",
    whitelistedFields: ['id', 'email', 'name', 'gender', 'faculty', 'major', 'firstMajor', 'secondMajor', 'matriculationYear', 'photo']
};

OAuth.registerService(IVLE.serviceName, 2, null, function(query) {
    const config = ServiceConfiguration.configurations.findOne({service: IVLE.serviceName});
    if (!config)
        throw new ServiceConfiguration.ConfigError();

    const response = getToken(query),
          identity = getIdentity(config.apiKey, query.token);

    return {
        serviceData: serviceData = {
            accessToken:        response.accessToken,
            expiresAt:          response.expiresIn,
            id:                 identity.UserID,
            email:              identity.Email,
            name:               identity.Name,
            gender:             identity.Gender,
            faculty:            identity.Faculty,
            major:              identity.FirstMajor,
            firstMajor:         identity.FirstMajor,
            secondMajor:        identity.SecondMajor,
            matriculationYear:  identity.MatriculationYear,
            photo:              identity.Photo,
        },
        options: {
            profile: { name: identity.Name }
        }
    };
});

var getToken = function(query) {
    var config = ServiceConfiguration.configurations.findOne({service: IVLE.serviceName});
    if (!config)
        throw new ServiceConfiguration.ConfigError();

    var response;

    // Validate access token with LAPI server
    try {
        response = HTTP.get(
            "https://ivle.nus.edu.sg/api/Lapi.svc/Validate", {params: {
                APIKey: config.apiKey,
                Token:  query.token,
            }});
    } catch (err) {
        throw _.extend(
            new Error("Failed to complete OAuth handshake with IVLE. " + err.message),
            {response: err.response}
        );
    }

    // Check if validation was successful
    if (!response.data.Success) {
        throw new Error("Failed to validate user with given access token.");
    } else {
        return {
            accessToken: response.data.Token,
            expiresIn: new Date(response.data.ValidTill_js),
        };
    }
}

var getIdentity = function (apiKey, authToken) {
    // Get profile of user
    try {
        return HTTP.get(
            "https://ivle.nus.edu.sg/api/Lapi.svc/Profile_View",
            { params: { APIKey: apiKey, AuthToken: authToken } }).data.Results[0];
    } catch (err) {
        throw _.extend(
            new Error("Failed to fetch profile from IVLE. " + err.message),
            { response: err.response }
        );
    }
};
