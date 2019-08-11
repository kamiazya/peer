import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';

import { PeerService } from '../../services/peer/peer.service';

@Component({
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
})
export class RoomComponent implements OnInit {

  public name: string;

  constructor(
    private route: ActivatedRoute,
    private peer: PeerService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.name = params.get('name');
    });

  }

}
