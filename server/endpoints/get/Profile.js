var Args = Npm.require('args-js');
import { APIArgs, httpGet } from '../../http';

export const Profile = {
    Profile_View: function() {
        const args = APIArgs([
            // No additional parameters.
        ], arguments);
        return httpGet("Lapi.svc/Profile_View", args);
    },
};