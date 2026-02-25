export enum OrderStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  CANCELED = 'canceled',
}

export interface OrderDto {
  id: string;
  title: string;
  description: string;
  status: OrderStatus;
  clientId: string;
  executorId?: string;
  price: number;
}
