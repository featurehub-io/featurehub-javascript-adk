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


  import { RolloutStrategyAttribute } from './rollout-strategy-attribute';

  /**
* if the feature in an environment is different from its default, this will be the reason for it. a rollout strategy is defined at the Application level and then applied to a specific feature value. When they are copied to the cache layer they are cloned and the feature value for that strategy is inserted into the clone and those are published.
* @export
* @class BaseStrategy
*/
export class BaseStrategy  {
  /**
  * value between 0 and 1000000 - for four decimal places
  * @type {number}
  * @memberof BaseStrategy
  */
  public percentage?: number | null;
  /**
  * if you don\'t wish to apply percentage based on user id, you can use one or more attributes defined here
  * @type {Array<string>}
  * @memberof BaseStrategy
  */
  public percentageAttributes?: Array<string> | null;
  /**
  * 
  * @type {Array<RolloutStrategyAttribute>}
  * @memberof BaseStrategy
  */
  public attributes?: Array<RolloutStrategyAttribute> | null;

  constructor(init?: Partial<BaseStrategy>) {
    Object.assign(this, init);
  }
}


