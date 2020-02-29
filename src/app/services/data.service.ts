import { EventEmitter } from '@angular/core';

export class DataService {
    org = new EventEmitter<string>();
    active_content = new EventEmitter<string>();
    visible = false;
}
