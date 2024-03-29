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



  /**
* 
* @export
* @class BaseRolloutStrategyAllOf
*/
export class BaseRolloutStrategyAllOf  {
  /**
  * when we attach the RolloutStrategy for Dacha or SSE this lets us push the value out. Only visible in SDK and SSE Edge.
  * @type {any}
  * @memberof BaseRolloutStrategyAllOf
  */
  public value?: any | null;

  constructor(init?: Partial<BaseRolloutStrategyAllOf>) {
    Object.assign(this, init);
  }
}


