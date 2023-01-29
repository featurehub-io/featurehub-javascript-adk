/* tslint:disable */
/* eslint-disable */
/**
 * ManagementResourceApi
 * This describes the API clients use for accessing features. This reflects the API from 1.5.7 onwards.
 *
 * The version of the OpenAPI document: 1.1.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


  import { Person } from './person';
  import { RolloutStrategy } from './rollout-strategy';

  /**
* 
* @export
* @class RolloutStrategyInfo
*/
export class RolloutStrategyInfo  {
  /**
  * 
  * @type {RolloutStrategy}
  * @memberof RolloutStrategyInfo
  */
  public rolloutStrategy: RolloutStrategy;
  /**
  * 
  * @type {Date}
  * @memberof RolloutStrategyInfo
  */
  public whenArchived?: Date;
  /**
  * 
  * @type {Person}
  * @memberof RolloutStrategyInfo
  */
  public changedBy?: Person;

  constructor(init?: Partial<RolloutStrategyInfo>) {
    Object.assign(this, init);
  }
}


