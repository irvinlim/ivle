var Args = Npm.require('args-js');
import { APIArgs, httpGet } from '../../http';

export const IVLENews = {
    PublicNews: function() {
        const args = APIArgs([
            { TitleOnly: Args.BOOL | Args.Optional, _default: false },
        ], arguments);
        return httpGet("Lapi.svc/PublicNews", args);
    },
};