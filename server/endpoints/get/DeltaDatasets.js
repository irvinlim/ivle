var Args = Npm.require('args-js');
import { APIArgs, httpGet } from '../../http';

export const DeltaDatasets = {
    Delta_ModuleTimeTable: function() {
        const args = APIArgs([
            { LastModified: Args.INT | Args.Optional },
            { ModuleCode: Args.STRING | Args.Optional },
        ], arguments);
        return httpGet("Lapi.svc/Delta_ModuleTimeTable", args);
    },
};