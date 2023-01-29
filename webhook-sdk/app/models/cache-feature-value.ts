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


import { CacheRolloutStrategy } from './cache-rollout-strategy';

/**
 * 
 * @export
 * @interface CacheFeatureValue
 */
export interface CacheFeatureValue {
    /**
     * 
     * @type {string}
     * @memberof CacheFeatureValue
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof CacheFeatureValue
     */
    key: string;
    /**
     * 
     * @type {boolean}
     * @memberof CacheFeatureValue
     */
    locked: boolean;
    /**
     * default value if no strategy matches. interpreted by type in parent
     * @type {any}
     * @memberof CacheFeatureValue
     */
    value?: any | null;
    /**
     * These are custom rollout strategies that only apply to this feature value.
     * @type {Array<CacheRolloutStrategy>}
     * @memberof CacheFeatureValue
     */
    rolloutStrategies?: Array<CacheRolloutStrategy>;
    /**
     * used for optimistic locking
     * @type {number}
     * @memberof CacheFeatureValue
     */
    version: number;
    /**
     * if true or null, this feature will visible on edge. if false, it will not be passed to the client
     * @type {boolean}
     * @memberof CacheFeatureValue
     */
    retired?: boolean;
}


