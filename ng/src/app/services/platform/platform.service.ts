import { Injectable, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Injectable()
export class PlatformService {

  public isBrowser: boolean;
  public isServer: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {

    this.isBrowser = isPlatformBrowser(platformId);
    this.isServer = isPlatformServer(platformId);
  }

}
