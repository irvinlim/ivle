import { getAPIKey, extend, propExistsDeep } from './util';
var Args = Npm.require('args-js');

/**
 * Gets the Results from the HTTP response from a LAPI call.
 */
export const httpGet = function(path, args) {
    const res = httpGetResponse(path, args);

    if (propExistsDeep(res, ['data', 'Results'])) {
        return res.data.Results;
    } else {
        return [];
    }
};

/**
 * Gets the raw HTTP GET response from the server.
 */
export const httpGetRaw = function(path, args) {
    const res = httpGetResponse(path, args);

    if (propExistsDeep(res, ['data'])) {
        return res.data;
    } else {
        return null;
    }
};

/**
 * Returns HTTP GET response from the server.
 */
const httpGetResponse = function(path, args) {
    const baseURL = "https://ivle.nus.edu.sg/api/";
    const accessToken = resolveAccessToken(args);
    const apiKey = getAPIKey();

    // If we cannot resolve an access token or API key, return null.
    if (!accessToken || !apiKey)
        return null;

    // Delete user argument if exists.
    delete args.user;

    // Extend args with API key.
    extend(args, { APIKey: apiKey, AuthToken: accessToken });

    // Perform HTTP GET.
    let res;
    try {
        res = HTTP.get(baseURL + path, {
            params: args
        });
    } catch (err) {
        // If error encountered, log it first.
        throw _.extend(
            new Error("Failed to communicate with IVLE LAPI. " + err.message),
            {response: err.response}
        );
        return null;
    }

    return res;
};

/**
 * Wrapper for Args function (in args-js npm package).
 * Concat necessary API arguments for every exposed function.
 */
export const APIArgs = function(options, args) {
    // Temporarily do not use argument group, until args.js is fixed.
    return Args([
        { userId:        Args.STRING | Args.Optional },
        { accessToken:   Args.STRING | Args.Optional },
        { user:          Args.OBJECT | Args.Optional },
    ].concat(options), args);
};

/**
 * Attempt to resolve an access token based on three possible ways to pass in a user's identity:
 *  - Access token directly,
 *  - Meteor user object, or
 *  - Meteor user ID.
 *
 * Note that it should be safe to retrieve user's access token by user ID without running the 
 * risk of exposing the access token to public eye. The access token will be used only for
 * the HTTP GET request, which is performed on the server anyway.
 */
const resolveAccessToken = function(args) {
    if (args.accessToken) {
        // Only if access token is provided directly. Typically when accounts-ivle is not used.
        return args.accessToken;
    } else if (propExistsDeep(args.user, ['services', 'ivle', 'accessToken'])) {
        // Full information usually only available on the server, unless published.
        return args.user.services.ivle.accessToken;
    } else if (args.userId || propExistsDeep(args.user, ['_id'])) {
        // Fallback for client mode, or when userId passed in.
        const userId = args.userId ? args.userId : args.user.userId ? args.user.userId : args.user._id;
        const user = Meteor.users.findOne(userId);
        
        // Check if access token exists (set during OAuth).
        if (propExistsDeep(user, ['services', 'ivle', 'accessToken']))
            return user.services.ivle.accessToken;
        else
            return null;
    } else 
        return null;
};