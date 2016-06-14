var Args = Npm.require('args-js');
import { APIArgs, httpGet } from '../../http';

export const WebcastLectures = {
    Webcasts: function() {
        const args = APIArgs([
            { CourseID: Args.STRING | Args.Required },
            { Duration: Args.INT | Args.Optional, _default: 0 },
            { MediaChannelID: Args.STRING | Args.Optional },
        ], arguments);
        return httpGet("Lapi.svc/Webcasts", args);
    },
};