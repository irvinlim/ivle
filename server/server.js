import { endpointsGET } from './endpoints';
import { registerService } from './service';
import { extend } from './util';

// Declare a global IVLE object that will be exported from this package.
IVLE = {

    serviceName: 'ivle',

    // Whitelisted fields.
    whitelistedFields: ['id', 'email', 'name', 'gender', 'faculty', 'major', 'firstMajor', 'secondMajor', 'matriculationYear', 'photo'],

    // Perform GET LAPI requests on the server; e.g. IVLE.get.Module.Modules({ userId: userId });
    get: endpointsGET,
};

// Declare Meteor methods so they can be called on the client; e.g. Meteor.call("IVLE.get.Module.Modules", { user: Meteor.user() }, callback);
const methods = {};
Object.keys(endpointsGET).forEach(function (methodGroupKey) {
    Object.keys(endpointsGET[methodGroupKey]).forEach(function (methodKey) {
        const method = endpointsGET[methodGroupKey][methodKey];

        methods["IVLE.get." + methodGroupKey + "." + methodKey] = function(arg) {
            check(arg, Object);
            return method(arg);
        };
    });
});
Meteor.methods(methods);

// Register the service for OAuth flow.
registerService();