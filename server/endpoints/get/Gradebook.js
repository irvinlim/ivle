var Args = Npm.require('args-js');
import { APIArgs, httpGet } from '../../http';

export const Gradebook = {
    Gradebook_ViewItems: function() {
        const args = APIArgs([
            { CourseID: Args.STRING | Args.Required },
        ], arguments);
        return httpGet("Lapi.svc/Gradebook_ViewItems", args);
    },
};