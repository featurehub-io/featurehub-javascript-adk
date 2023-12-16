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
 * Lock value changes, if any
 * @export
 * @interface MessagingLockUpdate
 */
export interface MessagingLockUpdate {
    /**
     * Updated lock value
     * @type {boolean}
     * @memberof MessagingLockUpdate
     */
    updated: boolean;
    /**
     * Previous lock value
     * @type {boolean}
     * @memberof MessagingLockUpdate
     */
    previous: boolean;
}

