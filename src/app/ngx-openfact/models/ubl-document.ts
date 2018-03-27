export interface UBLDocument {
  id: string;
  assignedId: string;
  type: string;
  currency: string;
  amount: number;
  tax: number;
  issueDate: Date;
  supplierName: string;
  supplierAssignedId: string;
  customerName: string;
  customerAssignedId: string;
  tags: string[];
}
