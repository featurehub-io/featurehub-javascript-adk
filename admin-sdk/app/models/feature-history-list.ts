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


  import { FeatureHistoryItem } from './feature-history-item';

  /**
* 
* @export
* @class FeatureHistoryList
*/
export class FeatureHistoryList  {
  /**
  * The maximum number of items returned by this query
  * @type {number}
  * @memberof FeatureHistoryList
  */
  public max?: number;
  /**
  * 
  * @type {Array<FeatureHistoryItem>}
  * @memberof FeatureHistoryList
  */
  public items?: Array<FeatureHistoryItem>;

  constructor(init?: Partial<FeatureHistoryList>) {
    Object.assign(this, init);
  }
}


