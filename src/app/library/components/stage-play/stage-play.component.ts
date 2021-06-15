import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IStagePlay } from '@library/interfaces/interfaces';

@Component({
  selector: 'app-stage-play',
  templateUrl: './stage-play.component.html',
  styleUrls: ['./stage-play.component.scss'],
})
export class StagePlayComponent {
  @Input()
  public stagePlay: IStagePlay;

  @Output()
  public seeDetails: EventEmitter<string> = new EventEmitter<string>()
}
