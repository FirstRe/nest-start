import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ServicesModule } from './services/services.module'

@Module({
  imports: [
  GraphQLModule.forRoot({
    typePaths: ['**/*.graphql'],
    installSubscriptionHandlers: true,
    introspection: process.env.GRAPHQL_INTROSPECTION === 'true' || false,
    debug: process.env.GRAPHQL_DEBUG === 'true' || false,
    playground: {
      endpoint: '/graphql',
      subscriptionEndpoint: '/graphql',
      cdnUrl: 'https://cdn.jsdelivr.net/npm',
    },
    context: ({ req }) => ({ request: req }),
    // formatError: process.env.GRAPHQL_FORMAT_ERROR === 'true' ? gqlErrorFilter : undefined,
  }),
  ServicesModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
