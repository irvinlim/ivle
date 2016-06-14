var Args = Npm.require('args-js');
import { APIArgs, httpGet } from '../../http';

export const Forum = {
    Forums: function() {
        const args = APIArgs([
            { CourseID: Args.STRING | Args.Required },
            { Duration: Args.INT | Args.Optional, _default: 0 },
            { IncludeThreads: Args.BOOL | Args.Optional, _default: false },
            { TitleOnly: Args.BOOL | Args.Optional, _default: false },
        ], arguments);
        return httpGet("Lapi.svc/Forums", args);
    },
    Forum: function() {
        const args = APIArgs([
            { ForumID: Args.STRING | Args.Required },
            { Duration: Args.INT | Args.Optional, _default: 0 },
            { IncludeThreads: Args.BOOL | Args.Optional, _default: false },
        ], arguments);
        return httpGet("Lapi.svc/Forum", args);
    },
    Forum_Headings: function() {
        const args = APIArgs([
            { ForumID: Args.STRING | Args.Required },
            { Duration: Args.INT | Args.Optional, _default: 0 },
            { IncludeThreads: Args.BOOL | Args.Optional, _default: false },
        ], arguments);
        return httpGet("Lapi.svc/Forum_Headings", args);
    },
    Forum_HeadingThreads: function() {
        const args = APIArgs([
            { HeadingID: Args.STRING | Args.Required },
            { Duration: Args.INT | Args.Optional, _default: 0 },
            { GetMainTopicsOnly: Args.BOOL | Args.Optional, _default: false },
        ], arguments);
        return httpGet("Lapi.svc/Forum_HeadingThreads", args);
    },
    Forum_Threads: function() {
        const args = APIArgs([
            { ThreadID: Args.STRING | Args.Required },
            { Duration: Args.INT | Args.Optional, _default: 0 },
            { GetSubThreads: Args.BOOL | Args.Optional, _default: false },
        ], arguments);
        return httpGet("Lapi.svc/Forum_Threads", args);
    },
    Forum_Thread: function() {
        const args = APIArgs([
            { ThreadID: Args.STRING | Args.Required },
        ], arguments);
        return httpGet("Lapi.svc/Forum_Thread", args);
    },
    Forum_SaleOfUsedTextbooks: function() {
        const args = APIArgs([
            { Duration: Args.INT | Args.Optional, _default: 0 },
            { IncludeThreads: Args.BOOL | Args.Optional, _default: false },
        ], arguments);
        return httpGet("Lapi.svc/Forum_SaleOfUsedTextbooks", args);
    },
    Forum_StudentFeedback: function() {
        const args = APIArgs([
            { Duration: Args.INT | Args.Optional, _default: 0 },
            { IncludeThreads: Args.BOOL | Args.Optional, _default: false },
        ], arguments);
        return httpGet("Lapi.svc/Forum_StudentFeedback", args);
    },
};