import { Resolver, Mutation, Args, Query, Context } from '@nestjs/graphql'
import { Inject, Logger, UseGuards } from '@nestjs/common'
import { logContext } from 'src/common/helpers/log'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { AuthService } from './auth.service'

// import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  private readonly loggers = new Logger(AuthResolver.name)

  constructor() {}
  @Inject(AuthService) private authService: AuthService // @Inject(InvoiceService) private invoiceService: InvoiceService

  @Query()
  async test(
     // @Args('projectId') projectId: string
     ): Promise<string> {
    const logctx = logContext(AuthResolver, this.test)
    const user = 'name'
    await this.authService.createUser()
    this.loggers.debug({ user }, logctx)
    return 'test2'
  }
}
