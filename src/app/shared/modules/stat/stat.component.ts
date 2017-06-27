import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
  @Input() bgClass: string;
  @Input() icon: string;
  @Input() countData1: number;
  @Input() countData2: number;
  @Input() data1: string;
  @Input() data2: string;
  @Input() label: string;
  @Input() data: number;
  @Output() event: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {}
}
