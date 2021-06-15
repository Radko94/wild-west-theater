import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IStagePlay } from '../../interfaces/interfaces';

@Component({
  selector: 'app-stage-play',
  templateUrl: './stage-play.component.html',
  styleUrls: ['./stage-play.component.scss'],
})
export class StagePlayComponent implements OnInit {
  @Input()
  public stagePlay: IStagePlay;

  @Output()
  public seeDetails: EventEmitter<string> = new EventEmitter<string>()

  constructor(
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}
}
