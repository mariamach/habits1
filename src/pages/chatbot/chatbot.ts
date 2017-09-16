import { Component } from '@angular/core';

import {
  ActionSheet,
  ActionSheetController,
<<<<<<< HEAD
=======
  ActionSheetOptions,
>>>>>>> 240fbe1ed9e9e667480d8f876c2c8523c2b7bdbd
  Config,
  NavController
} from 'ionic-angular';

import { ConferenceData } from '../../providers/conference-data';

<<<<<<< HEAD
=======
import { SessionDetailPage } from '../session-detail/session-detail';
import { SpeakerDetailPage } from '../speaker-detail/speaker-detail';
>>>>>>> 240fbe1ed9e9e667480d8f876c2c8523c2b7bdbd

// TODO remove
export interface ActionSheetButton {
  text?: string;
  role?: string;
  icon?: string;
  cssClass?: string;
  handler?: () => boolean|void;
};

@Component({
  selector: 'page-chatbot',
  templateUrl: 'chatbot.html'
})
export class ChatbotPage {
  actionSheet: ActionSheet;
  speakers: any[] = [];

  constructor(
    public actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController,
    public confData: ConferenceData,
    public config: Config
  ) {}

  }