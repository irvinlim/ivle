var Args = Npm.require('args-js');
import { APIArgs, httpGet } from '../../http';

export const Module = {
    Modules: function() {
        const args = APIArgs([
            { Duration: Args.INT | Args.Optional, _default: 0 },
            { IncludeAllInfo: Args.BOOL | Args.Optional, _default: false },
        ], arguments);
        return httpGet("Lapi.svc/Modules", args);
    },
    Modules_Staff: function() {
        const args = APIArgs([
            { Duration: Args.INT | Args.Optional, _default: 0 },
            { IncludeAllInfo: Args.BOOL | Args.Optional, _default: false },
        ], arguments);
        return httpGet("Lapi.svc/Modules_Staff", args);
    },
    Modules_Student: function() {
        const args = APIArgs([
            { Duration: Args.INT | Args.Optional, _default: 0 },
            { IncludeAllInfo: Args.BOOL | Args.Optional, _default: false },
        ], arguments);
        return httpGet("Lapi.svc/Modules_Student", args);
    },
    Module: function() {
        const args = APIArgs([
            { CourseID: Args.STRING | Args.Required },
            { Duration: Args.INT | Args.Optional, _default: 0 },
            { IncludeAllInfo: Args.BOOL | Args.Optional, _default: false },
            { TitleOnly: Args.BOOL | Args.Optional, _default: false },
        ], arguments);
        return httpGet("Lapi.svc/Module", args);
    },
    Modules_Search: function() {
        const args = APIArgs([
            { IncludeAllInfo: Args.BOOL | Args.Optional, _default: false },
            [
                { ModuleCode: Args.STRING },
                { ModuleTitle: Args.STRING },
                { LecturerName: Args.STRING },
                { Department: Args.STRING },
                { Semester: Args.INT },
                { AcadYear: Args.STRING },
                { ModNameExact: Args.STRING },
                { LecNameExact: Args.STRING },
            ]
        ], arguments);
        return httpGet("Lapi.svc/Modules_Search", args);
    },
    Module_Lecturers: function() {
        const args = APIArgs([
            { CourseID: Args.STRING | Args.Required },
            { Duration: Args.INT | Args.Optional, _default: 0 },
        ], arguments);
        return httpGet("Lapi.svc/Module_Lecturers", args);
    },
    DisplayPhoto: function() {
        const args = APIArgs([
            { CourseID: Args.STRING | Args.Required },
            { UserID: Args.STRING | Args.Required },
        ], arguments);
        return httpGetRaw("DisplayPhoto.ashx", args);
    },
    Module_Information: function() {
        const args = APIArgs([
            { CourseID: Args.STRING | Args.Required },
            { Duration: Args.INT | Args.Optional, _default: 0 },
        ], arguments);
        return httpGet("Lapi.svc/Module_Information", args);
    },
    Module_Weblinks: function() {
        const args = APIArgs([
            { CourseID: Args.STRING | Args.Required },
        ], arguments);
        return httpGet("Lapi.svc/Module_Weblinks", args);
    },
    Module_ReadingFormatted: function() {
        const args = APIArgs([
            { CourseID: Args.STRING | Args.Required },
            { Duration: Args.INT | Args.Optional, _default: 0 },
        ], arguments);
        return httpGet("Lapi.svc/Module_ReadingFormatted", args);
    },
    Module_ReadingUnformatted: function() {
        const args = APIArgs([
            { CourseID: Args.STRING | Args.Required },
            { Duration: Args.INT | Args.Optional, _default: 0 },
        ], arguments);
        return httpGet("Lapi.svc/Module_ReadingUnformatted", args);
    },
    Module_ReadingsFormatted_Coop: function() {
        const args = APIArgs([
            { date: Args.STRING | Args.Optional },
        ], arguments);
        return httpGet("Lapi.svc/Module_ReadingsFormatted_Coop", args);
    },
    Module_Reading: function() {
        const args = APIArgs([
            { CourseID: Args.STRING | Args.Required },
            { Duration: Args.INT | Args.Optional, _default: 0 },
        ], arguments);
        return httpGet("Lapi.svc/Module_Reading", args);
    },
    Modules_Taken: function() {
        const args = APIArgs([
            { StudentID: Args.STRING | Args.Required },
        ], arguments);
        return httpGet("Lapi.svc/Modules_Taken", args);
    },
};