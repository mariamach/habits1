import { Component } from '@angular/core';

import {
  ActionSheet,
  ActionSheetController,
  ActionSheetOptions,
  Config,
  NavController
} from 'ionic-angular';

import { ConferenceData } from '../../providers/conference-data';

import { SessionDetailPage } from '../session-detail/session-detail';
import { SpeakerDetailPage } from '../speaker-detail/speaker-detail';

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