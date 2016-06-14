var Args = Npm.require('args-js');
import { APIArgs, httpGet } from '../../http';

export const Announcement = {
    Announcements: function() {
        const args = APIArgs([
            { CourseID: Args.STRING | Args.Required },
            { Duration: Args.INT | Args.Optional, _default: 0 },
            { TitleOnly: Args.BOOL | Args.Optional, _default: false },
        ], arguments);
        return httpGet("Lapi.svc/Announcements", args);
    },
    Announcements_Unread: function() {
        const args = APIArgs([
            { TitleOnly: Args.BOOL | Args.Optional, _default: false },
        ], arguments);
        return httpGet("Lapi.svc/Announcements_Unread", args);
    },
};