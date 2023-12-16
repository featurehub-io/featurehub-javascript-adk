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


  import { FeatureGroupListGroup } from './feature-group-list-group';

  /**
* 
* @export
* @class FeatureGroupList
*/
export class FeatureGroupList  {
  /**
  * 
  * @type {number}
  * @memberof FeatureGroupList
  */
  public count: number;
  /**
  * 
  * @type {Array<FeatureGroupListGroup>}
  * @memberof FeatureGroupList
  */
  public featureGroups: Array<FeatureGroupListGroup>;

  constructor(init?: Partial<FeatureGroupList>) {
    Object.assign(this, init);
  }
}


