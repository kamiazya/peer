import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

import { PeerService } from '../../services/peer/peer.service';
import { StreamService } from '../../services/stream/stream.service';

@Component({
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit, AfterViewInit {

  otherId: string;

  @ViewChild('self') selfVideo: ElementRef;
  @ViewChild('other') otherVideo: ElementRef;

  constructor(
    public peer: PeerService,
    public stream: StreamService,
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.stream.stream$.subscribe((stream) => {
      this.selfVideo.nativeElement.src = URL.createObjectURL(stream);
    });
  }

  call() {
    console.log(this.otherId);
    this.peer.call(this.otherId).then((stream) => {
      console.log(this.otherVideo);
      this.otherVideo.nativeElement.src = URL.createObjectURL(stream);
    });
  }
}
