import { Component, EventEmitter, Output } from '@angular/core';
import {NavigationTabs} from '../../models/enums';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})

export class TabsComponent{
  @Output() tabSelected = new EventEmitter<NavigationTabs>();
  selectedTab: NavigationTabs = NavigationTabs.details;
  navigationTabs = NavigationTabs;
  
  onSelect(tab: NavigationTabs) {  
    this.selectedTab = tab;    
    this.tabSelected.emit(tab);
  }
}
