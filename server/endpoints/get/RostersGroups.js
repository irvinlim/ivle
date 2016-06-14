var Args = Npm.require('args-js');
import { APIArgs, httpGet } from '../../http';

export const RostersGroups = {
    Class_Roster: function() {
        const args = APIArgs([
            { CourseID: Args.STRING | Args.Required },
        ], arguments);
        return httpGet("Lapi.svc/Class_Roster", args);
    },
    Guest_Roster: function() {
        const args = APIArgs([
            { CourseID: Args.STRING | Args.Required },
        ], arguments);
        return httpGet("Lapi.svc/Guest_Roster", args);
    },
    GroupsByUserAndModule: function() {
        const args = APIArgs([
            { CourseID: Args.STRING | Args.Optional },
            { AcadYear: Args.STRING | Args.Optional },
            { Semester: Args.INT | Args.Optional },
        ], arguments);
        return httpGet("Lapi.svc/GroupsByUserAndModule", args);
    },
    GroupsByUser: function() {
        const args = APIArgs([
            // No additional parameters.
        ], arguments);
        return httpGet("Lapi.svc/GroupsByUser", args);
    },
    Module_ClassGroups: function() {
        const args = APIArgs([
            { CourseID: Args.STRING | Args.Required },
            { flag: Args.STRING | Args.Required, _check: p => p == "E" || p == "A" },
        ], arguments);
        return httpGet("Lapi.svc/Module_ClassGroups", args);
    },
    Module_ClassGroupUsers: function() {
        const args = APIArgs([
            { ClassGroupID: Args.STRING | Args.Required },
        ], arguments);
        return httpGet("Lapi.svc/Module_ClassGroupUsers", args);
    },
    Module_OfficialGroupUsers: function() {
        const args = APIArgs([
            { CourseID: Args.STRING | Args.Optional },
            { ModuleCode: Args.STRING | Args.Optional },
            { GroupName: Args.STRING | Args.Optional },
            { AcadYear: Args.STRING | Args.Optional },
            { Semester: Args.INT | Args.Optional },
            { GroupType: Args.STRING | Args.Optional },
        ], arguments);
        return httpGet("Lapi.svc/Module_OfficialGroupUsers", args);
    },
    GroupProjectsByUser: function() {
        const args = APIArgs([
            { CourseID: Args.STRING | Args.Required },
            { IncludeGroups: Args.BOOL | Args.Optional, _default: false },
            { GroupType: Args.STRING | Args.Required, _check: p => p == "E" || p == "A" },
        ], arguments);
        return httpGet("Lapi.svc/GroupProjectsByUser", args);
    },
    Project_SelfEnrolGroups: function() {
        const args = APIArgs([
            { ProjectID: Args.STRING | Args.Required },
        ], arguments);
        return httpGet("Lapi.svc/Project_SelfEnrolGroups", args);
    },
    ProjectGroupUsers: function() {
        const args = APIArgs([
            { ProjectGroupID: Args.STRING | Args.Required },
        ], arguments);
        return httpGet("Lapi.svc/ProjectGroupUsers", args);
    },
    Project_EnrolledGroups: function() {
        const args = APIArgs([
            // No additional parameters.
        ], arguments);
        return httpGet("Lapi.svc/Project_EnrolledGroups", args);
    },
};