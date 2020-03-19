import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/api/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  logArray: string[] = [];

  constructor(
    private log: HistoryService,
  ) { }

  ngOnInit(): void {
    this.logArray = this.log.get();
  }

  clearHistory(): void {
    this.log.clear();
    this.logArray = [];
  }

}
