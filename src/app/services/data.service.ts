import { EventEmitter } from '@angular/core';

export class DataService {
    org = new EventEmitter<string>();
    visible = false;
}
