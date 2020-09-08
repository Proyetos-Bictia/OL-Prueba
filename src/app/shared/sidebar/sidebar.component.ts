import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { SidebarService } from 'src/app/core/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() isDeploy: boolean = true

  metaData: any[] = []

  constructor(private sidebarService: SidebarService) { }

  ngOnInit() {
    this.metaData = this.sidebarService.menu
  }

}
