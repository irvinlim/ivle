var Args = Npm.require('args-js');
import { APIArgs, httpGet } from '../../http';

export const Poll = {
    Polls: function() {
        const args = APIArgs([
            { CourseID: Args.STRING | Args.Required },
            { PollID: Args.STRING | Args.Optional },
            { TitleOnly: Args.BOOL | Args.Optional, _default: false },
        ], arguments);
        return httpGet("Lapi.svc/Polls", args);
    },
    Poll_GetVotedUser: function() {
        const args = APIArgs([
            { PollID: Args.STRING | Args.Required },
            { PollQuestionID: Args.STRING | Args.Required },
            { PollQuestionOptionID: Args.STRING | Args.Required },
        ], arguments);
        return httpGet("Lapi.svc/Poll_GetVotedUser", args);
    },
    Poll_GetVotedUser_Other: function() {
        const args = APIArgs([
            { PollID: Args.STRING | Args.Required },
            { PollQuestionID: Args.STRING | Args.Required },
        ], arguments);
        return httpGet("Lapi.svc/Poll_GetVotedUser_Other", args);
    },
};