import { IoAdapter } from '@nestjs/platform-socket.io'
import { ConfigService } from '@nestjs/config'
import { INestApplication, Logger } from '@nestjs/common'
// import { Server, ServerOptions } from 'socket.io'
// import redisIoAdapter from 'socket.io-redis'

export class RedisIoAdapter extends IoAdapter {
  private readonly configService: ConfigService
  private readonly logger: Logger

  constructor(app: INestApplication) {
    super(app)
    this.configService = app.get(ConfigService)
    this.logger = new Logger('RedisIoAdapter')
  }

  // createIOServer(port: number, options?: ServerOptions): Server {
  //   this.logger.log(`Create io server with redis info ${JSON.stringify(this.configService.get('redis'))}`)
  //   const server = super.createIOServer(port, options)
  //   const redisAdapter = redisIoAdapter({
  //     host: this.configService.get<string>('redis.host') || 'localhost',
  //     port: this.configService.get<string>('redis.port') || 6379,
  //     password: this.configService.get<string>('redis.password') || undefined, // Redis Password
  //   })
  //   server.adapter(redisAdapter)
  //   return server
  // }
}
