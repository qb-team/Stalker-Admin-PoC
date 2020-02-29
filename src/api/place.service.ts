/**
 * Stalker API
 * API di Stalker di Imola Informatica sviluppato da qbteam
 *
 * OpenAPI spec version: 1.0.0
 * Contact: qbteamswe@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { PlaceAuthenticatedMovement } from '../model/placeAuthenticatedMovement';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class PlaceService {

    protected basePath = '/';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * the administrator can retieve all the access made in every place of his organization
     * get all the access in every place in the specified organization
     * @param organizationId ID of an organization
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAuthenticatedPlaceAccess(organizationId: number, observe?: 'body', reportProgress?: boolean): Observable<Array<PlaceAuthenticatedMovement>>;
    public getAuthenticatedPlaceAccess(organizationId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<PlaceAuthenticatedMovement>>>;
    public getAuthenticatedPlaceAccess(organizationId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<PlaceAuthenticatedMovement>>>;
    public getAuthenticatedPlaceAccess(organizationId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (organizationId === null || organizationId === undefined) {
            throw new Error('Required parameter organizationId was null or undefined when calling getAuthenticatedPlaceAccess.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<PlaceAuthenticatedMovement>>('get',`${this.basePath}/AuthenticatedPlaceAcces/${encodeURIComponent(String(organizationId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}