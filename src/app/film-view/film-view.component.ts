import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'film-view',
  templateUrl: './film-view.component.html',
  styleUrls: ['./film-view.component.css']
})
export class FilmViewComponent implements OnInit {

  @Output() onSelected = new EventEmitter<boolean>();
	change(selection) {
    console.log(selection.value);
		this.onSelected.emit(selection.value);
	}

   selectedValue: string;

  views = [
    {value: 'vertical', viewValue: 'Вертикально'},
    {value: 'horizontal', viewValue: 'Горизонтально'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
