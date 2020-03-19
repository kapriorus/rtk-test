import { Injectable } from '@angular/core';
import { Observable, range } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getItems(numberOfItems: number, odd: boolean, even: boolean): Observable<number> {
    return range(1, numberOfItems).pipe(
      filter((n, i) => (even && i % 2 > 0) || (odd && i % 2 === 0) ),
    );
  }
}
