/*
 * Provider for shared data
*/
import { EventEmitter } from '@angular/core';

export class DataService {
    org = new EventEmitter<string>(); // name of a organization selected
    users_number = new EventEmitter<number>();
    active_content = new EventEmitter<string>(); // content selected
    visible = false; // visible login
}
