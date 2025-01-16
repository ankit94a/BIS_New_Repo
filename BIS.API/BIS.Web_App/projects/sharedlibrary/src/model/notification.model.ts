import { NotifType, RoleType } from "./enum";

export class NotificationModel 
 {
    senderEntityId? : number;
    senderEntityName? : string; 
     receiverEntityId? : number;
     receiverEntityType? : RoleType;
     receiverUserName? : string;
     notificationType? : NotifType;
     content? : string;
     senderEntityType? : RoleType
    isActionRequired? : boolean;
    isReaded?:boolean;

 }