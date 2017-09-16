import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

<<<<<<< HEAD
import { HabitsApp } from './app.component';
=======
import { ConferenceApp } from './app.component';
>>>>>>> 240fbe1ed9e9e667480d8f876c2c8523c2b7bdbd

import { AboutPage } from '../pages/about/about';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
<<<<<<< HEAD
import { SchedulePage } from '../pages/schedule/schedule';
=======
import { MapPage } from '../pages/map/map';
import { SchedulePage } from '../pages/schedule/schedule';
import { ScheduleFilterPage } from '../pages/schedule-filter/schedule-filter';
>>>>>>> 240fbe1ed9e9e667480d8f876c2c8523c2b7bdbd
import { SessionDetailPage } from '../pages/session-detail/session-detail';
import { SignupPage } from '../pages/signup/signup';
import { SpeakerDetailPage } from '../pages/speaker-detail/speaker-detail';
import { ChatbotPage } from '../pages/chatbot/chatbot';
import { TabsPage } from '../pages/tabs-page/tabs-page';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { SupportPage } from '../pages/support/support';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';


@NgModule({
  declarations: [
<<<<<<< HEAD
    HabitsApp,
    AboutPage,
    AccountPage,
    LoginPage,
    SchedulePage,
=======
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    SchedulePage,
    ScheduleFilterPage,
>>>>>>> 240fbe1ed9e9e667480d8f876c2c8523c2b7bdbd
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    ChatbotPage,
    TabsPage,
    TutorialPage,
    SupportPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
<<<<<<< HEAD
    IonicModule.forRoot(HabitsApp, {}, {
=======
    IonicModule.forRoot(ConferenceApp, {}, {
>>>>>>> 240fbe1ed9e9e667480d8f876c2c8523c2b7bdbd
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs-page' },
        { component: SchedulePage, name: 'Schedule', segment: 'schedule' },
        { component: SessionDetailPage, name: 'SessionDetail', segment: 'sessionDetail/:sessionId' },
<<<<<<< HEAD
        { component: ChatbotPage, name: 'Chatbot', segment: 'chatbot' },
        { component: SpeakerDetailPage, name: 'SpeakerDetail', segment: 'speakerDetail/:speakerId' },
=======
        { component: ScheduleFilterPage, name: 'ScheduleFilter', segment: 'scheduleFilter' },
        { component: ChatbotPage, name: 'Chatbot', segment: 'chatbot' },
        { component: SpeakerDetailPage, name: 'SpeakerDetail', segment: 'speakerDetail/:speakerId' },
        { component: MapPage, name: 'Map', segment: 'map' },
>>>>>>> 240fbe1ed9e9e667480d8f876c2c8523c2b7bdbd
        { component: AboutPage, name: 'About', segment: 'about' },
        { component: TutorialPage, name: 'Tutorial', segment: 'tutorial' },
        { component: SupportPage, name: 'SupportPage', segment: 'support' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: AccountPage, name: 'AccountPage', segment: 'account' },
        { component: SignupPage, name: 'SignupPage', segment: 'signup' }
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
<<<<<<< HEAD
    HabitsApp,
    AboutPage,
    AccountPage,
    LoginPage,
    SchedulePage,
=======
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    SchedulePage,
    ScheduleFilterPage,
>>>>>>> 240fbe1ed9e9e667480d8f876c2c8523c2b7bdbd
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    ChatbotPage,
    TabsPage,
    TutorialPage,
    SupportPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConferenceData,
    UserData,
    SplashScreen
  ]
})
export class AppModule { }
