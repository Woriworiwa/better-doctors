import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Doctor } from 'src/app/models/doctor.model';
import {NavigationTabs} from '../../models/enums';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})

export class TabsComponent{
  @Input() doctor = {} as Doctor;
  @Output() tabSelected = new EventEmitter<NavigationTabs>();
  selectedTab: NavigationTabs = NavigationTabs.todo;
  navigationTabs = NavigationTabs;  
  
  onSelect(tab: NavigationTabs) {  
    this.selectedTab = tab;    
    this.tabSelected.emit(tab);
  }
}
