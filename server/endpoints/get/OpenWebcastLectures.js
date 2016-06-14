var Args = Npm.require('args-js');
import { APIArgs, httpGet } from '../../http';

export const OpenWebcastLectures = {
    OpenWebcasts: function() {
        const args = APIArgs([
            { AcadYear: Args.STRING | Args.Optional },
            { Semester: Args.INT | Args.Optional },
            { MediaChannelID: Args.STRING | Args.Optional },
            { TitleOnly: Args.BOOL | Args.Optional, _default: false },
        ], arguments);
        return httpGet("Lapi.svc/OpenWebcasts", args);
    },
};