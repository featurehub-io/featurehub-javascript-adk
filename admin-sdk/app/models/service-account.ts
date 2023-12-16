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
* @class ServiceAccount
*/
export class ServiceAccount  {
  /**
  * 
  * @type {string}
  * @memberof ServiceAccount
  */
  public id: string;
  /**
  * 
  * @type {string}
  * @memberof ServiceAccount
  */
  public name: string;
  /**
  * 
  * @type {string}
  * @memberof ServiceAccount
  */
  public portfolioId?: string | null;
  /**
  * 
  * @type {string}
  * @memberof ServiceAccount
  */
  public description?: string | null;
  /**
  * 
  * @type {number}
  * @memberof ServiceAccount
  */
  public version?: number | null;
  /**
  * this is a read only field, it denotes an api key where the eval is done client side
  * @type {string}
  * @memberof ServiceAccount
  */
  public apiKeyClientSide?: string | null;
  /**
  * this is a read only field, it denotes an api key where the eval is done server side
  * @type {string}
  * @memberof ServiceAccount
  */
  public apiKeyServerSide?: string | null;
  /**
  * 
  * @type {Array<ServiceAccountPermission>}
  * @memberof ServiceAccount
  */
  public permissions?: Array<ServiceAccountPermission>;
  /**
  * 
  * @type {Date}
  * @memberof ServiceAccount
  */
  public whenArchived?: Date | null;

  constructor(init?: Partial<ServiceAccount>) {
    Object.assign(this, init);
  }
}


