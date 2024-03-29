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


  import { ApplicationRolloutStrategy } from './application-rollout-strategy';

  /**
* 
* @export
* @class ApplicationRolloutStrategyList
*/
export class ApplicationRolloutStrategyList  {
  /**
  * how many there are
  * @type {number}
  * @memberof ApplicationRolloutStrategyList
  */
  public max: number;
  /**
  * this page number
  * @type {number}
  * @memberof ApplicationRolloutStrategyList
  */
  public page: number;
  /**
  * the application rollout strategies on this page
  * @type {Array<ApplicationRolloutStrategy>}
  * @memberof ApplicationRolloutStrategyList
  */
  public items: Array<ApplicationRolloutStrategy>;

  constructor(init?: Partial<ApplicationRolloutStrategyList>) {
    Object.assign(this, init);
  }
}


