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


  import { RolloutStrategyAttributeConditional } from './rollout-strategy-attribute-conditional';
  import { RolloutStrategyFieldType } from './rollout-strategy-field-type';

  /**
* 
* @export
* @class BaseRolloutStrategyAttribute
*/
export class BaseRolloutStrategyAttribute  {
  /**
  * 
  * @type {RolloutStrategyAttributeConditional}
  * @memberof BaseRolloutStrategyAttribute
  */
  public conditional?: RolloutStrategyAttributeConditional;
  /**
  * 
  * @type {string}
  * @memberof BaseRolloutStrategyAttribute
  */
  public fieldName?: string;
  /**
  * the value(s) associated with this rule
  * @type {Array<any>}
  * @memberof BaseRolloutStrategyAttribute
  */
  public values?: Array<any>;
  /**
  * 
  * @type {RolloutStrategyFieldType}
  * @memberof BaseRolloutStrategyAttribute
  */
  public type?: RolloutStrategyFieldType;

  constructor(init?: Partial<BaseRolloutStrategyAttribute>) {
    Object.assign(this, init);
  }
}

