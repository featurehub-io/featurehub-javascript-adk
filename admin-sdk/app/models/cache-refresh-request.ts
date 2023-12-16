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



  /**
* 
* @export
* @class CacheRefreshRequest
*/
export class CacheRefreshRequest  {
  /**
  * refresh the whole cache
  * @type {boolean}
  * @memberof CacheRefreshRequest
  */
  public allTheThings?: boolean | null;
  /**
  * if provided these applications will be refreshed
  * @type {Array<string>}
  * @memberof CacheRefreshRequest
  */
  public applicationId?: Array<string> | null;
  /**
  * 
  * @type {Array<string>}
  * @memberof CacheRefreshRequest
  */
  public portfolioId?: Array<string> | null;

  constructor(init?: Partial<CacheRefreshRequest>) {
    Object.assign(this, init);
  }
}

