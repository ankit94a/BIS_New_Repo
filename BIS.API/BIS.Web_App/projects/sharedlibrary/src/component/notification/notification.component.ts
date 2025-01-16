import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { SharedLibraryModule } from '../../shared-library.module';
import { NotificationModel } from '../../model/notification.model';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [SharedLibraryModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent implements OnInit {
  private notificationSubject = new BehaviorSubject<NotificationModel[]>([]);
  notifications$ = this.notificationSubject.asObservable();
  showOnlyUnread = false;
  currentPage = 1;
  isNotifcationAlertMessage: boolean = false;
  allNotifications:any[] = [];
  @Input() count: number = 0;
  constructor(private dialog:MatDialog){
    this.allNotifications.push("Data for verification (from Staff to GS1 and from GS1 to Col_Int)")
    this.allNotifications.push("Tps to task from GOC/CDR")
  }
  ngOnInit(): void {
    
    // this.signalRService.startConnection();
    // this.signalRService.onNotificationReceived((message) => {
    //   const currentNotifications = this.notificationSubject.value;
    //   this.notificationSubject.next([message, ...currentNotifications]);
    //   this.count++;
    // });
  }
  getAllNotification(event: Event, pageNumber: number,dropdown:HTMLElement){

  }
  openNotification(notif:NotificationModel){
    // let diologConfig = new MatDialogConfig()
    // diologConfig.data = notif;
    // const dialogRef = this.dialog.open(diologConfig)
  }
}
