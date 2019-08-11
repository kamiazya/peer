import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Injectable, ApplicationRef } from '@angular/core';

import { PlatformService } from '../platform/platform.service';
navigator.getUserMedia = (navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.msGetUserMedia);

@Injectable()
export class StreamService {

  public stream$: ReplaySubject<MediaStream> = new ReplaySubject();

  constructor(
    private ref: ApplicationRef,
    private platform: PlatformService,
  ) {
    if (platform.isBrowser) {

      window.navigator.getUserMedia({ video: true, audio: true }, (stream) => {
        this.stream$.next(stream);
        this.ref.tick();
      }, (err) => {
        console.log('Failed to get local stream', err);
        this.ref.tick();
      });
    }
  }
}
