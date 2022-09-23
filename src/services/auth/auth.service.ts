import { Injectable, OnModuleInit } from '@nestjs/common'
import { Logger } from '@nestjs/common'
import * as jwt from 'jsonwebtoken'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { createHash } from 'crypto'

@Injectable()
export class AuthService implements OnModuleInit {
  private readonly loggers = new Logger(AuthService.name)
  constructor(
     private readonly repos: PrismaService
     ) {}
  onModuleInit() {}
  async createUser(): Promise<string> {
    const password = createHash('sha256').update('admin').digest('base64')
    await this.repos.login.create({
      data: {
        username: 'admin',
        password,
        email: 'admid@admin.com',
        createdBy: 'system',
        updatedBy: 'system',
      },
    })
    return 'test'
  }
}
