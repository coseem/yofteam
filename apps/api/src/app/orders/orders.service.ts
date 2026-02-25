import { Injectable } from '@nestjs/common';
import { OrderDto, OrderStatus } from '@yofteam/shared-types';

@Injectable()
export class OrdersService {
  private readonly orders: OrderDto[] = [
    {
      id: 'ord-1',
      title: 'Install kitchen sink',
      description: 'Need a professional executor to install kitchen sink',
      status: OrderStatus.PENDING,
      clientId: '1',
      price: 80,
    },
  ];

  list(): OrderDto[] {
    return this.orders;
  }
}
