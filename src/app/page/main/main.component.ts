import { Component, OnInit } from '@angular/core';
import { MainFilter } from 'src/app/interfaces/main-filter';
import { DataService } from 'src/app/api/data.service';
import { HistoryService } from 'src/app/api/history.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  filterData: MainFilter = {
    numberOfElements: 0,
    showOdd: true,
    showEven: true,
  };

  items: number[] = [];

  constructor(
    protected api: DataService,
    protected log: HistoryService,
  ) { }

  ngOnInit(): void {}

  onDataChange(event: Event): void {
    this.log.append(event.target);

    this.items = [];

    this.api.getItems(
      this.filterData.numberOfElements,
      this.filterData.showOdd,
      this.filterData.showEven
    ).subscribe(newNumber => {
      this.items.push(newNumber);
    });
  }

}
