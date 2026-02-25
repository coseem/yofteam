import { Controller, Get, UseGuards } from '@nestjs/common';
import { OrderDto, Role } from '@yofteam/shared-types';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';
import { OrdersService } from './orders.service';

@Controller('orders')
@UseGuards(JwtAuthGuard, RolesGuard)
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  @Roles(Role.CLIENT, Role.EXECUTOR, Role.ADMIN)
  findAll(): OrderDto[] {
    return this.ordersService.list();
  }
}
