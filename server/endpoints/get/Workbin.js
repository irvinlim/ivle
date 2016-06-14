var Args = Npm.require('args-js');
import { APIArgs, httpGet } from '../../http';

export const Workbin = {
    Workbins: function() {
        const args = APIArgs([
            { CourseID: Args.STRING | Args.Required },
            { Duration: Args.INT | Args.Optional, _default: 0 },
            { WorkbinID: Args.STRING | Args.Optional },
            { TitleOnly: Args.BOOL | Args.Optional, _default: false },
        ], arguments);
        return httpGet("Lapi.svc/Workbins", args);
    },
    DownloadFile: function() {
        const args = APIArgs([
            { ID: Args.STRING | Args.Required },
            { target: Args.STRING | Args.Optional, _default: "workbin" },
        ], arguments);
        return httpGetRaw("downloadfile.ashx", args);
    },
};