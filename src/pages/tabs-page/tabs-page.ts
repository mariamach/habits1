import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { AboutPage } from '../about/about';
<<<<<<< HEAD
=======
import { MapPage } from '../map/map';
>>>>>>> 240fbe1ed9e9e667480d8f876c2c8523c2b7bdbd
import { SchedulePage } from '../schedule/schedule';
import { ChatbotPage } from '../chatbot/chatbot';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = SchedulePage;
  tab2Root: any = ChatbotPage;
<<<<<<< HEAD
  tab3Root: any = AboutPage;
=======
  tab3Root: any = MapPage;
  tab4Root: any = AboutPage;
>>>>>>> 240fbe1ed9e9e667480d8f876c2c8523c2b7bdbd
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
