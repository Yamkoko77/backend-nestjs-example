import {
  WebSocketGateway,
  MessageBody,
  SubscribeMessage,
  WsResponse,
  ConnectedSocket,
} from '@nestjs/websockets'
import { Socket } from 'socket.io'
import { CatTalkInterface } from './cats.interface'

@WebSocketGateway()
export class CatsGateway {
  @SubscribeMessage('talk')
  talk(
    @ConnectedSocket() client: Socket,
    @MessageBody() body,
  ): WsResponse<CatTalkInterface> {
    client.emit('message', {
      id: body.id,
      title: body.title,
      message: body.message,
      createdAt: new Date(),
    })
    return body
  }
}
