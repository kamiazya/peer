import { Injectable, ApplicationRef } from '@angular/core';

import { PlatformService } from '../platform/platform.service';
import { StreamService } from '../stream/stream.service';


@Injectable()
export class PeerService {

  public active: boolean;

  private _id: string;

  get id(): string {
    return this._id;
  }

  public peer: PeerJs.Peer;

  constructor(
    private ref: ApplicationRef,
    private platform: PlatformService,
    private stream: StreamService,
  ) {
    if (platform.isBrowser) {

      this.active = true;

      this.peer = new Peer({
        host: 'localhost',
        port: 9000,
      });

      this.peer.on('open', (id) => {
        this._id = id;
        this.ref.tick();
      });

      this.peer.on('call', async (call) => {

        call.answer(await this.stream.stream$.toPromise());

        call.on('stream', (remoteStream) => {

        });
      });
      // this.peer.

    }
  }


  call(id: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const call = this.peer.call(id, await this.stream.stream$.toPromise());
      this.ref.tick();

      call.on('stream', (stream) => {
        this.ref.tick();
        resolve(stream);
      });
    });

  }

}
