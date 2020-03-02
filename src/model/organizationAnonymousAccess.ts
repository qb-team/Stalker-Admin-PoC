/**
 * Stalker API
 * API di Stalker di Imola Informatica sviluppato da qbteam
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: qbteamswe@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Access } from './access';


/**
 * Access to an organization made with the authenticated trackingMode.
 */
export interface OrganizationAnonymousAccess extends Access { 
    /**
     * Unique identifier of the organization in which the user had access.
     */
    organizationId: number;
}

