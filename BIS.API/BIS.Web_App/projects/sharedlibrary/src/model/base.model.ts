export class BaseEntity {
    id: number;
    isActive: boolean;
    createdAt:Date;
    lastUpdatedAt:Date;
    createdBy:string;
    lastUpdatedBy:string;
    isView: boolean = false;
}