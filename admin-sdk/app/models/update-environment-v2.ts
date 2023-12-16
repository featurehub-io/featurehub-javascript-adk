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


  import { UpdateEnvironment } from './update-environment';
  import { UpdateEnvironmentV2AllOf } from './update-environment-v2-all-of';

  /**
* 
* @export
* @class UpdateEnvironmentV2
*/
export class UpdateEnvironmentV2  {
  /**
  * Version of the record, included for attempting to update out of date records
  * @type {number}
  * @memberof UpdateEnvironmentV2
  */
  public version: number;
  /**
  * 
  * @type {string}
  * @memberof UpdateEnvironmentV2
  */
  public name?: string | null;
  /**
  * 
  * @type {string}
  * @memberof UpdateEnvironmentV2
  */
  public description?: string | null;
  /**
  * is this a production environment?
  * @type {boolean}
  * @memberof UpdateEnvironmentV2
  */
  public production?: boolean | null;
  /**
  * Allows some settings that affect the behaviour of this environment. Currently `cacheControl` if set will be passed and set on the responses to GET requests.
  * @type {Record<string, string>}
  * @memberof UpdateEnvironmentV2
  */
  public environmentInfo?: Record<string, string> | null;
  /**
  * Environment webhook url and headers
  * @type {Record<string, string>}
  * @memberof UpdateEnvironmentV2
  */
  public webhookEnvironmentInfo?: Record<string, string> | null;
  /**
  * 
  * @type {string}
  * @memberof UpdateEnvironmentV2
  */
  public priorEnvironmentId?: string | null;
  /**
  * 
  * @type {string}
  * @memberof UpdateEnvironmentV2
  */
  public id: string;

  constructor(init?: Partial<UpdateEnvironmentV2>) {
    Object.assign(this, init);
  }
}

