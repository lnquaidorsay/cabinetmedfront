import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-titlelevel1',
  templateUrl: './titlelevel1.component.html',
  styleUrls: ['./titlelevel1.component.css']
})
export class Titlelevel1Component implements OnInit {

  @Input() color: string = "";

  @Input() text: string = "";

  @Output() setColor = new EventEmitter();

  @Output() setText = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  edit() {

    this.setColor.emit(this.color);

    this.setText.emit(this.text);
  }
}
