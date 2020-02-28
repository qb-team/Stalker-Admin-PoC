import { EventEmitter } from '@angular/core';

export class DataService {
    /*private organization: string;

    getOrganization()
    {
        return this.organization;
    }*/
    org = new EventEmitter<string>();
}
