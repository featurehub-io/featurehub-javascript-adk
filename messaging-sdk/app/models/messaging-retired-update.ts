/* tslint:disable */
/* eslint-disable */
/**
 * Feature Messaging API
 * This is an OpenAPI document for featurehub messaging data. It is used to publish feature updates to messaging listeners.
 *
 * The version of the OpenAPI document: 1.1.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Retired value changes, if any
 * @export
 * @interface MessagingRetiredUpdate
 */
export interface MessagingRetiredUpdate {
    /**
     * Updated retired value
     * @type {boolean}
     * @memberof MessagingRetiredUpdate
     */
    updated: boolean;
    /**
     * Previous retired value
     * @type {boolean}
     * @memberof MessagingRetiredUpdate
     */
    previous: boolean;
}


