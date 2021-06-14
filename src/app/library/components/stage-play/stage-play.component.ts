import { Component, Input, OnInit } from '@angular/core';
import { IStagePlay } from '../../interfaces/interfaces';

@Component({
  selector: 'app-stage-play',
  templateUrl: './stage-play.component.html',
  styleUrls: ['./stage-play.component.scss']
})
export class StagePlayComponent implements OnInit {
  @Input()
  public stagePlay: IStagePlay;

  constructor() { }

  ngOnInit(): void {
  }

}
