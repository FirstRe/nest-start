import { Module } from '@nestjs/common'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { AuthResolver } from './auth.resolver'
import { AuthService } from './auth.service'

@Module({
  providers: [AuthService, AuthResolver,PrismaService],
//   exports: [AuthService],
})
export class AuthModule {}
