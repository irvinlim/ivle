var Args = Npm.require('args-js');
import { APIArgs, httpGet } from '../../http';

export const MyOrganizer = {
    MyOrganizer_Personal: function() {
        const args = APIArgs([
            { StartDate: Args.STRING | Args.Optional },
            { EndDate: Args.STRING | Args.Optional },
        ], arguments);
        return httpGet("Lapi.svc/MyOrganizer_Personal", args);
    },
    MyOrganizer_IVLE: function() {
        const args = APIArgs([
            { StartDate: Args.STRING | Args.Optional },
            { EndDate: Args.STRING | Args.Optional },
        ], arguments);
        return httpGet("Lapi.svc/MyOrganizer_IVLE", args);
    },
    MyOrganizer_Events: function() {
        const args = APIArgs([
            { StartDate: Args.STRING | Args.Optional },
            { EndDate: Args.STRING | Args.Optional },
        ], arguments);
        return httpGet("Lapi.svc/MyOrganizer_Events", args);
    },
    MyOrganizer_SpecialDays: function() {
        const args = APIArgs([
            { StartDate: Args.STRING | Args.Optional },
            { EndDate: Args.STRING | Args.Optional },
        ], arguments);
        return httpGet("Lapi.svc/MyOrganizer_SpecialDays", args);
    },
    MyOrganizer_AcadSemesterInfo: function() {
        const args = APIArgs([
            { AcadYear: Args.STRING | Args.Required },
            { Semester: Args.INT | Args.Required },
        ], arguments);
        return httpGet("Lapi.svc/MyOrganizer_AcadSemesterInfo", args);
    },
    Timetable_Student: function() {
        const args = APIArgs([
            { AcadYear: Args.STRING | Args.Required },
            { Semester: Args.INT | Args.Required },
        ], arguments);
        return httpGet("Lapi.svc/Timetable_Student", args);
    },
    CodeTable_WeekTypes: function() {
        const args = APIArgs([
            // No additional parameters.
        ], arguments);
        return httpGet("Lapi.svc/CodeTable_WeekTypes", args);
    },
};