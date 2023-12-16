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
* @class CreateEnvironment
*/
export class CreateEnvironment  {
  /**
  * 
  * @type {string}
  * @memberof CreateEnvironment
  */
  public name: string;
  /**
  * 
  * @type {string}
  * @memberof CreateEnvironment
  */
  public priorEnvironmentId?: string | null;
  /**
  * 
  * @type {string}
  * @memberof CreateEnvironment
  */
  public description: string;
  /**
  * 
  * @type {Record<string, string>}
  * @memberof CreateEnvironment
  */
  public environmentInfo?: Record<string, string> | null;
  /**
  * is this a production environment?
  * @type {boolean}
  * @memberof CreateEnvironment
  */
  public production?: boolean;

  constructor(init?: Partial<CreateEnvironment>) {
    Object.assign(this, init);
  }
}

