var Args = Npm.require('args-js');
import { APIArgs, httpGet } from '../../http';

export const StudentEvents = {
    StudentEvents: function() {
        const args = APIArgs([
            { TitleOnly: Args.BOOL | Args.Optional, _default: false },
        ], arguments);
        return httpGet("Lapi.svc/StudentEvents", args);
    },
    StudentEvents_Categories: function() {
        const args = APIArgs([
            { IncludeEvents: Args.BOOL | Args.Optional, _default: false },
            { TitleOnly: Args.BOOL | Args.Optional, _default: false },
        ], arguments);
        return httpGet("Lapi.svc/StudentEvents_Categories", args);
    },
    StudentEvents_Committees: function() {
        const args = APIArgs([
            { IncludeEvents: Args.BOOL | Args.Optional, _default: false },
            { TitleOnly: Args.BOOL | Args.Optional, _default: false },
        ], arguments);
        return httpGet("Lapi.svc/StudentEvents_Committees", args);
    },
    StudentEvents_Category: function() {
        const args = APIArgs([
            { CategoryID: Args.STRING | Args.Required },
            { TitleOnly: Args.BOOL | Args.Optional, _default: false },
        ], arguments);
        return httpGet("Lapi.svc/StudentEvents_Category", args);
    },
    StudentEvents_Committee: function() {
        const args = APIArgs([
            { CommitteeID: Args.STRING | Args.Required },
            { TitleOnly: Args.BOOL | Args.Optional, _default: false },
        ], arguments);
        return httpGet("Lapi.svc/StudentEvents_Committee", args);
    },
};