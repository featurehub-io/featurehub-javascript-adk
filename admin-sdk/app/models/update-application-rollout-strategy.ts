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
* 
* @export
* @class UpdateApplicationRolloutStrategy
*/
export class UpdateApplicationRolloutStrategy  {
  /**
  * names are unique in a case insensitive fashion
  * @type {string}
  * @memberof UpdateApplicationRolloutStrategy
  */
  public name?: string | null;
  /**
  * the colour used to display the strategy in the UI. indexed table of background/foreground combos.
  * @type {number}
  * @memberof UpdateApplicationRolloutStrategy
  */
  public colouring?: number | null;
  /**
  * url to avatar (if any). Not sent to SDK. Preferably a unicorn.
  * @type {string}
  * @memberof UpdateApplicationRolloutStrategy
  */
  public avatar?: string | null;
  /**
  * 
  * @type {boolean}
  * @memberof UpdateApplicationRolloutStrategy
  */
  public disabled?: boolean | null;
  /**
  * 
  * @type {Array<RolloutStrategyAttribute>}
  * @memberof UpdateApplicationRolloutStrategy
  */
  public attributes?: Array<RolloutStrategyAttribute> | null;

  constructor(init?: Partial<UpdateApplicationRolloutStrategy>) {
    Object.assign(this, init);
  }
}


