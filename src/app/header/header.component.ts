import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { TabsService } from './../tabs/tabs/tabs.service';
import { TabComponent } from './../tabs/tab/tab.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public title: string;
  private tabSubsriber: Subscription;

  constructor(private tabsService: TabsService) { }

  ngOnInit() {
    this.tabSubsriber = this.tabsService.getActiveTab()
      .subscribe((tab: TabComponent) => {
        this.title = tab.tabTitle;
      });
  }

  ngOnDestroy() {
    this.tabSubsriber.unsubscribe();
  }

}
