/* tslint:disable */
/* eslint-disable */
/**
 * Enricher API
 * This is an OpenAPI document for enriched data. It is used by Webhook Features directly.
 *
 * The version of the OpenAPI document: 1.1.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface CacheEnvironment
 */
export interface CacheEnvironment {
    /**
     * 
     * @type {string}
     * @memberof CacheEnvironment
     */
    id: string;
    /**
     * 
     * @type {number}
     * @memberof CacheEnvironment
     */
    version: number;
    /**
     * (environmentInfo) - Allows extensibility for the environment
     * @type {Record<string, string>}
     * @memberof CacheEnvironment
     */
    eInf?: Record<string, string>;
}


