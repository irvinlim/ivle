var Args = Npm.require('args-js');
import { APIArgs, httpGet } from '../../http';

export const Timetable = {
    Timetable_Student: function() {
        const args = APIArgs([
            { AcadYear: Args.STRING | Args.Required },
            { Semester: Args.INT | Args.Required },
        ], arguments);
        return httpGet("Lapi.svc/Timetable_Student", args);
    },
    Timetable_Module: function() {
        const args = APIArgs([
            { CourseID: Args.STRING | Args.Required },
        ], arguments);
        return httpGet("Lapi.svc/Timetable_Module", args);
    },
    Timetable_Student_Module: function() {
        const args = APIArgs([
            { CourseID: Args.STRING | Args.Required },
        ], arguments);
        return httpGet("Lapi.svc/Timetable_Student_Module", args);
    },
    Timetable_ModuleExam: function() {
        const args = APIArgs([
            { CourseID: Args.STRING | Args.Required },
        ], arguments);
        return httpGet("Lapi.svc/Timetable_ModuleExam", args);
    },
};