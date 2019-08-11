import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { RootComponent } from './pages/root/root.component';
import { RoomComponent } from './pages/room/room.component';

import { PlatformService } from './services/platform/platform.service';
import { StreamService } from './services/stream/stream.service';
import { PeerService } from './services/peer/peer.service';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    RouterModule,
    FormsModule,
  ],
  providers: [
    PlatformService,
    PeerService,
    StreamService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
