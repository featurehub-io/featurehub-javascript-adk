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


  import { FeatureGroupUpdateFeature } from './feature-group-update-feature';
  import { GroupRolloutStrategy } from './group-rollout-strategy';

  /**
* An update, everything is optional, we will only update what we update
* @export
* @class FeatureGroupCreate
*/
export class FeatureGroupCreate  {
  /**
  * allow changing the name
  * @type {string}
  * @memberof FeatureGroupCreate
  */
  public name: string;
  /**
  * 
  * @type {string}
  * @memberof FeatureGroupCreate
  */
  public description?: string;
  /**
  * allow swapping the environment
  * @type {string}
  * @memberof FeatureGroupCreate
  */
  public environmentId: string;
  /**
  * Whether or not this group should be disabled
  * @type {boolean}
  * @memberof FeatureGroupCreate
  */
  public disabled?: boolean;
  /**
  * allow updating the features
  * @type {Array<FeatureGroupUpdateFeature>}
  * @memberof FeatureGroupCreate
  */
  public features: Array<FeatureGroupUpdateFeature>;
  /**
  * We only honour the first one
  * @type {Array<GroupRolloutStrategy>}
  * @memberof FeatureGroupCreate
  */
  public strategies?: Array<GroupRolloutStrategy> | null;

  constructor(init?: Partial<FeatureGroupCreate>) {
    Object.assign(this, init);
  }
}

