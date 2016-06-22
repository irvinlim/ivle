import { getAPIKey } from './util';

export const registerService = function() {
    OAuth.registerService(IVLE.serviceName, 2, null, function(query) {
        const response = getToken(query),
              identity = getProfile(query);

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
};

const getToken = function(query) {
    let response;

    // Validate access token with LAPI server
    try {
        response = HTTP.get(
            "https://ivle.nus.edu.sg/api/Lapi.svc/Validate", {params: {
                APIKey: getAPIKey(),
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

const getProfile = function(query) {
    return IVLE.get.Profile.Profile_View({ accessToken: query.token })[0];
}