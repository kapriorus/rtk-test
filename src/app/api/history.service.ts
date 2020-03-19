import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor() {
    if (!localStorage.getItem('history')) {
      localStorage.setItem('history', JSON.stringify([]));
    }
  }

  protected getCurrentState(): string[] {
    return JSON.parse(localStorage.getItem('history'));
  }
  protected saveCurrentState(state: string[]): void {
    localStorage.setItem('history', JSON.stringify(state));
  }

  append(target): void {
    if (target.name === 'numberOfElements') { return; }

    let eventText = new Date().toLocaleString('ru', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    switch (target.name) {
      // case 'numberOfElements':
      //   eventText += ` - кол-во элементов установлено на ${target.value}`;
      //   break;
      case 'odd':
      case 'even':
        eventText += ` - отображение ${(target.name === 'odd') ? 'не' : ''}четных элементов установлено в ${target.checked}`; break;
    }

    const history = this.getCurrentState();
    history.push(eventText);
    this.saveCurrentState(history);
  }

  get(): string[] {
    return this.getCurrentState();
  }

  clear(): void {
    this.saveCurrentState([]);
  }
}
