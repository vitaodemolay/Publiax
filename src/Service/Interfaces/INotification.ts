export interface INotification {
   notificationId: string,
   sender: string;
   body: string;
   subject: string;
   status: number;
   registerDate: Date;
}