export class BaseEntity {
    id: number;
    isActive: boolean;
    createdOn:Date;
    UpdatedOn:Date;
    createdBy:string;
    UpdatedBy:string;
    isView: boolean = false;
    CorpsId:number;
    DivisionId:number;
}

export class CommonModel {
    id: number;
    isActive: boolean;
    createdOn:Date;
    UpdatedOn:Date;
    createdBy:string;
    UpdatedBy:string;
    isView: boolean = false;
}