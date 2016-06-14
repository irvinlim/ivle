var Args = Npm.require('args-js');
import { APIArgs, httpGet } from '../../http';

export const Consultation = {
    Consultation_ModuleFacilitatorsWithSlots: function() {
        const args = APIArgs([
            { CourseID: Args.STRING | Args.Required },
            { IncludeAllInfo: Args.BOOL | Args.Optional, _default: false },
            { SlotType: Args.STRING | Args.Required, _check: p => p == "S" || p == "A" },
        ], arguments);
        return httpGet("Lapi.svc/Consultation_ModuleFacilitatorsWithSlots", args);
    },
    ConsultationSlots: function() {
        const args = APIArgs([
            { LecID: Args.STRING | Args.Required },
            { SlotType: Args.STRING | Args.Required, _check: p => p == "S" || p == "A" },
        ], arguments);
        return httpGet("Lapi.svc/ConsultationSlots", args);
    },
    Consultation_SignedUpSlots: function() {
        const args = APIArgs([
            // No additional parameters
        ], arguments);
        return httpGet("Lapi.svc/Consultation_SignedUpSlots", args);
    },
};