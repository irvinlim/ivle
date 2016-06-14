var Args = Npm.require('args-js');
import { APIArgs, httpGet } from '../../http';

export const LibraryEReserves = {
    LibEreserves: function() {
        const args = APIArgs([
            { CourseID: Args.STRING | Args.Required },
            { TitleOnly: Args.BOOL | Args.Optional, _default: false },
        ], arguments);
        return httpGet("Lapi.svc/LibEreserves", args);
    },
    LibEreserveFiles: function() {
        const args = APIArgs([
            { FolderID: Args.STRING | Args.Required },
        ], arguments);
        return httpGet("Lapi.svc/LibEreserveFiles", args);
    },
};