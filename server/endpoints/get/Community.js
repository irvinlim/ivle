var Args = Npm.require('args-js');
import { APIArgs, httpGet } from '../../http';

export const Community = {
    Communities: function() {
        const args = APIArgs([
            { Duration: Args.INT | Args.Optional, _default: 0 },
        ], arguments);
        return httpGet("Lapi.svc/Communities", args);
    },
    Community_Search: function() {
        const args = APIArgs([
            { Keyword: Args.STRING | Args.Optional },
            { SearchType: Args.STRING | Args.Required, check: p => p == "C" || p == "T" || p == "O" || p == "M" },
            { ActiveOnly: Args.BOOL | Args.Optional, _default: false },
            { TitleOnly: Args.BOOL | Args.Optional, _default: false },
        ], arguments);
        return httpGet("Lapi.svc/Community_Search", args);
    },
    CommunityCategories: function() {
        const args = APIArgs([
            { ActiveOnly: Args.BOOL | Args.Optional, _default: false },
        ], arguments);
        return httpGet("Lapi.svc/CommunityCategories", args);
    },
    CommunityTags: function() {
        const args = APIArgs([
            { ActiveOnly: Args.BOOL | Args.Optional, _default: false },
        ], arguments);
        return httpGet("Lapi.svc/CommunityTags", args);
    },
    Community: function() {
        const args = APIArgs([
            { ComID: Args.STRING | Args.Required },
            { Duration: Args.INT | Args.Optional, _default: 0 },
        ], arguments);
        return httpGet("Lapi.svc/Community", args);
    },
    CommunityMembers: function() {
        const args = APIArgs([
            { ComID: Args.STRING | Args.Required },
        ], arguments);
        return httpGet("Lapi.svc/CommunityMembers", args);
    },
    CommunityAnnouncements: function() {
        const args = APIArgs([
            { ComID: Args.STRING | Args.Required },
            { Duration: Args.INT | Args.Optional, _default: 0 },
        ], arguments);
        return httpGet("Lapi.svc/CommunityAnnouncements", args);
    },
    CommunityWorkbinFolders: function() {
        const args = APIArgs([
            { ComID: Args.STRING | Args.Required },
            { Duration: Args.INT | Args.Optional, _default: 0 },
            { IncludingFiles: Args.BOOL | Args.Optional, _default: false },
        ], arguments);
        return httpGet("Lapi.svc/CommunityWorkbinFolders", args);
    },
    CommunityWorkbinFiles: function() {
        const args = APIArgs([
            { FolderID: Args.STRING | Args.Required },
            { Duration: Args.INT | Args.Optional, _default: 0 },
        ], arguments);
        return httpGet("Lapi.svc/CommunityWorkbinFiles", args);
    },
    CommunityForumHeadings: function() {
        const args = APIArgs([
            { ComID: Args.STRING | Args.Required },
            { Duration: Args.INT | Args.Optional, _default: 0 },
            { IncludingPosts: Args.BOOL | Args.Optional, _default: false },
        ], arguments);
        return httpGet("Lapi.svc/CommunityForumHeadings", args);
    },
    CommunityForumPosts: function() {
        const args = APIArgs([
            { HeadingID: Args.STRING | Args.Required },
            { Duration: Args.INT | Args.Optional, _default: 0 },
        ], arguments);
        return httpGet("Lapi.svc/CommunityForumPosts", args);
    },
    CommunityWeblinks: function() {
        const args = APIArgs([
            { ComID: Args.STRING | Args.Required },
        ], arguments);
        return httpGet("Lapi.svc/CommunityWeblinks", args);
    },
    DownloadFile: function() {
        const args = APIArgs([
            { ID: Args.STRING | Args.Required },
            { target: Args.STRING | Args.Optional, _default: "community" },
        ], arguments);
        return httpGetRaw("downloadfile.ashx", args);
    },
    Community_GetTask: function() {
        const args = APIArgs([
            { TaskID: Args.STRING | Args.Required },
        ], arguments);
        return httpGet("Lapi.svc/Community_GetTask", args);
    },
    Community_GetAllTasks: function() {
        const args = APIArgs([
            { ComID: Args.STRING | Args.Required },
        ], arguments);
        return httpGet("Lapi.svc/Community_GetAllTasks", args);
    },
    Community_GetSubTask: function() {
        const args = APIArgs([
            { TaskID: Args.STRING | Args.Required },
        ], arguments);
        return httpGet("Lapi.svc/Community_GetSubTask", args);
    },
    Community_GetComment: function() {
        const args = APIArgs([
            { CommentID: Args.STRING | Args.Required },
        ], arguments);
        return httpGet("Lapi.svc/Community_GetComment", args);
    },
    Community_GetAllComments: function() {
        const args = APIArgs([
            { TaskID: Args.STRING | Args.Required },
        ], arguments);
        return httpGet("Lapi.svc/Community_GetAllComments", args);
    },
};