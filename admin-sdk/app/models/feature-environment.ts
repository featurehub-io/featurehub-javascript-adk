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


  import { Environment } from './environment';
  import { FeatureValue } from './feature-value';
  import { RoleType } from './role-type';
  import { ServiceAccount } from './service-account';

  /**
* 
* @export
* @class FeatureEnvironment
*/
export class FeatureEnvironment  {
  /**
  * 
  * @type {Environment}
  * @memberof FeatureEnvironment
  */
  public environment?: Environment;
  /**
  * the roles of this person in this environment
  * @type {Array<RoleType>}
  * @memberof FeatureEnvironment
  */
  public roles?: Array<RoleType>;
  /**
  * 
  * @type {FeatureValue}
  * @memberof FeatureEnvironment
  */
  public featureValue?: FeatureValue | null;
  /**
  * 
  * @type {Array<ServiceAccount>}
  * @memberof FeatureEnvironment
  */
  public serviceAccounts?: Array<ServiceAccount>;

  constructor(init?: Partial<FeatureEnvironment>) {
    Object.assign(this, init);
  }
}


