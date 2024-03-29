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


  import { ApplicationGroupRole } from './application-group-role';

  /**
* 
* @export
* @class CreateGroup
*/
export class CreateGroup  {
  /**
  * 
  * @type {string}
  * @memberof CreateGroup
  */
  public name?: string;
  /**
  * is this an admin group?
  * @type {boolean}
  * @memberof CreateGroup
  */
  public admin?: boolean | null;
  /**
  * 
  * @type {Array<ApplicationGroupRole>}
  * @memberof CreateGroup
  */
  public applicationRoles?: Array<ApplicationGroupRole> | null;

  constructor(init?: Partial<CreateGroup>) {
    Object.assign(this, init);
  }
}


