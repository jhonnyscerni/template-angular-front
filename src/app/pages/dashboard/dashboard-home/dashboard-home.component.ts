import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Title } from '@angular/platform-browser';
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {
  currentUser: any;

  constructor(private notificationService: NotificationService,
    private authService: AuthService,
    private titleService: Title) {
  }

  ngOnInit() {
    this.currentUser = this.authService.getUsuarioAutenticado();
    this.titleService.setTitle('angular-material-template - Dashboard');

    setTimeout(() => {
      this.notificationService.openSnackBar('Welcome!');
    });
  }
}
