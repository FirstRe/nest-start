import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module';
// import { PureUTModule } from './pure-utility-token/pure-utility-token.module'
// import { CollectionModule } from './collection/collection.module'
// import { UtilityTokenDistributionModule } from './utility-token-distribution/utility-token-distribution.module'

@Module({
  imports: [AuthModule],
})
export class ServicesModule {}
