/* tslint:disable */
/* eslint-disable */
/**
 * ManagementResourceApi
 * This describes the API clients use for accessing features. This reflects the API from 1.5.7 onwards.
 *
 * The version of the OpenAPI document: 1.2.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


  import { BaseRolloutStrategy } from './base-rollout-strategy';
  import { BaseUIStrategy } from './base-uistrategy';
  import { RolloutStrategyAllOf } from './rollout-strategy-all-of';
  import { RolloutStrategyAttribute } from './rollout-strategy-attribute';

  /**
* 
* @export
* @class RolloutStrategy
*/
export class RolloutStrategy  {
  /**
  * names are unique in a case insensitive fashion
  * @type {string}
  * @memberof RolloutStrategy
  */
  public name?: string;
  /**
  * the colour used to display the strategy in the UI. indexed table of background/foreground combos.
  * @type {number}
  * @memberof RolloutStrategy
  */
  public colouring?: number | null;
  /**
  * Disable this strategy across all feature values that are using it
  * @type {boolean}
  * @memberof RolloutStrategy
  */
  public disabled?: boolean;
  /**
  * url to avatar (if any). Not sent to SDK. Preferably a unicorn.
  * @type {string}
  * @memberof RolloutStrategy
  */
  public avatar?: string | null;
  /**
  * value between 0 and 1000000 - for four decimal places
  * @type {number}
  * @memberof RolloutStrategy
  */
  public percentage?: number | null;
  /**
  * if you don\'t wish to apply percentage based on user id, you can use one or more attributes defined here
  * @type {Array<string>}
  * @memberof RolloutStrategy
  */
  public percentageAttributes?: Array<string> | null;
  /**
  * 
  * @type {Array<RolloutStrategyAttribute>}
  * @memberof RolloutStrategy
  */
  public attributes?: Array<RolloutStrategyAttribute> | null;
  /**
  * when we attach the RolloutStrategy for Dacha or SSE this lets us push the value out. Only visible in SDK and SSE Edge.
  * @type {any}
  * @memberof RolloutStrategy
  */
  public value?: any | null;
  /**
  * the server will accept null ids but it won\'t ever store them as null
  * @type {string}
  * @memberof RolloutStrategy
  */
  public id?: string | null;

  constructor(init?: Partial<RolloutStrategy>) {
    Object.assign(this, init);
  }
}


