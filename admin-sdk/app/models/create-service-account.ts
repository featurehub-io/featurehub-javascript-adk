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


  import { ServiceAccountPermission } from './service-account-permission';

  /**
* 
* @export
* @class CreateServiceAccount
*/
export class CreateServiceAccount  {
  /**
  * 
  * @type {string}
  * @memberof CreateServiceAccount
  */
  public name: string;
  /**
  * 
  * @type {string}
  * @memberof CreateServiceAccount
  */
  public description?: string | null;
  /**
  * 
  * @type {Array<ServiceAccountPermission>}
  * @memberof CreateServiceAccount
  */
  public permissions?: Array<ServiceAccountPermission>;

  constructor(init?: Partial<CreateServiceAccount>) {
    Object.assign(this, init);
  }
}


