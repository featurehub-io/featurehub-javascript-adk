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


  import { FeatureValueType } from './feature-value-type';

  /**
* 
* @export
* @class FeatureGroupFeature
*/
export class FeatureGroupFeature  {
  /**
  * 
  * @type {string}
  * @memberof FeatureGroupFeature
  */
  public id: string;
  /**
  * 
  * @type {string}
  * @memberof FeatureGroupFeature
  */
  public name: string;
  /**
  * 
  * @type {string}
  * @memberof FeatureGroupFeature
  */
  public key: string;
  /**
  * value (if any) associated with this feature for the associated strategy for this feature group
  * @type {any}
  * @memberof FeatureGroupFeature
  */
  public value?: any | null;
  /**
  * 
  * @type {FeatureValueType}
  * @memberof FeatureGroupFeature
  */
  public type: FeatureValueType;
  /**
  * 
  * @type {boolean}
  * @memberof FeatureGroupFeature
  */
  public locked?: boolean;

  constructor(init?: Partial<FeatureGroupFeature>) {
    Object.assign(this, init);
  }
}


