var Args = Npm.require('args-js');
import { APIArgs, httpGet } from '../../http';

export const LessonPlan = {
    LessonPlan_Events: function() {
        const args = APIArgs([
            { CourseID: Args.STRING | Args.Required },
            { EventDate: Args.STRING | Args.Required },
        ], arguments);
        return httpGet("Lapi.svc/LessonPlan_Events", args);
    },
    Lessonplan_Summary_Name: function() {
        const args = APIArgs([
            { CourseID: Args.STRING | Args.Required },
        ], arguments);
        return httpGet("Lapi.svc/Lessonplan_Summary_Name", args);
    },
    Lessonplan_Summary_Week: function() {
        const args = APIArgs([
            { CourseID: Args.STRING | Args.Required },
            { WeekNo: Args.INT | Args.Required },
        ], arguments);
        return httpGet("Lapi.svc/Lessonplan_Summary_Week", args);
    },
    Lessonplan_Summary_Week_Event: function() {
        const args = APIArgs([
            { CourseID: Args.STRING | Args.Required },
            { WeekNo: Args.INT | Args.Required },
        ], arguments);
        return httpGet("Lapi.svc/Lessonplan_Summary_Week_Event", args);
    },
    Lessonplan_Summary_Topic: function() {
        const args = APIArgs([
            { CourseID: Args.STRING | Args.Required },
            { TopicNo: Args.STRING | Args.Required },
        ], arguments);
        return httpGet("Lapi.svc/Lessonplan_Summary_Topic", args);
    },
    Lessonplan_Summary_Topic_Event: function() {
        const args = APIArgs([
            { CourseID: Args.STRING | Args.Required },
            { TopicNo: Args.STRING | Args.Required },
        ], arguments);
        return httpGet("Lapi.svc/Lessonplan_Summary_Topic_Event", args);
    },
};