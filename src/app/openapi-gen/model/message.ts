/**
 * GratisBrockiBackend API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: @springdoc.version@
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Item } from './item';


export interface Message { 
    id?: number;
    createdDate?: string;
    lastModifiedDate?: string;
    archivedDate?: string;
    message?: string;
    item?: Item;
}

