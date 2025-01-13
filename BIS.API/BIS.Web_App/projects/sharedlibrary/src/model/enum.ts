export class EnumBase {
    public get PermissionAction() {
        return PermissionAction;
      }
      public get PermissionItem() {
        return PermissionItem;
      }
}


export enum PermissionItem {
    Dashboard = 'Dashboard',
    User = 'User',
    Sample = 'Sample',
    Supplier = 'Supplier',
    Buyer = "Buyer",
    Category = 'Category',
    Facility = 'Facility',
    Inventory = 'Inventory',
    UserRole = 'UserRole',
    Catalogue = 'Catalogue',
    BuyerPo = 'BuyerPo',
    SupplierOrder = 'SupplierOrder',
    InventoryInward='InventoryInward',
    ChannelSku='ChannelSku',
    CustomerOrder='CustomerOrder',
    Dispatch='Dispatch',
    UserMapping='UserMapping',
    Report='Report',
    InventoryQC = 'InventoryQC',
    InventoryPackaging = 'InventoryPackaging',
    InventoryProcess = 'InventoryProcess',
    InventoryTransfer = 'InventoryTransfer',
    Attribute = 'Attribute'
  }
  
  
  export enum PermissionAction {
    Read = 'Read',
    Create = 'Create',
    Update = 'Update',
    ReadAll = 'ReadAll',
    Delete = 'Delete',
  
  }