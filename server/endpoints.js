import { Module } from './endpoints/get/Module';
import { Consultation } from './endpoints/get/Consultation';
import { RostersGroups } from './endpoints/get/RostersGroups';
import { Announcement } from './endpoints/get/Announcement';
import { Forum } from './endpoints/get/Forum';
import { WebcastLectures } from './endpoints/get/WebcastLectures';
import { Poll } from './endpoints/get/Poll';
import { Workbin } from './endpoints/get/Workbin';
import { Gradebook } from './endpoints/get/Gradebook';
import { LibraryEReserves } from './endpoints/get/LibraryEReserves';
import { MyOrganizer } from './endpoints/get/MyOrganizer';
import { Community } from './endpoints/get/Community';
import { OpenWebcastLectures } from './endpoints/get/OpenWebcastLectures';
import { StudentEvents } from './endpoints/get/StudentEvents';
import { IVLENews } from './endpoints/get/IVLENews';
import { Timetable } from './endpoints/get/Timetable';
import { DeltaDatasets } from './endpoints/get/DeltaDatasets';
import { Profile } from './endpoints/get/Profile';
import { LessonPlan } from './endpoints/get/LessonPlan';

export const endpointsGET = { 
    Module, Consultation, RostersGroups, Announcement, Forum, WebcastLectures, Poll, Workbin, Gradebook, LibraryEReserves, MyOrganizer, Community, 
    OpenWebcastLectures, StudentEvents, IVLENews, Timetable, DeltaDatasets, Profile, LessonPlan 
};