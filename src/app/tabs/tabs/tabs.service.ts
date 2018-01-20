import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { TabComponent } from './../tab/tab.component';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TabsService {
  private tabSubject = new ReplaySubject<TabComponent>(1);

  constructor() { }

  setActiveTab(tab: TabComponent) {
    this.tabSubject.next(tab);
  }

  getActiveTab(): Observable<TabComponent> {
    return this.tabSubject.asObservable();
  }

}
