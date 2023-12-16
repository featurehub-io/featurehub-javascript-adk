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


  import { Audit } from './audit';
  import { EnvironmentAllOf } from './environment-all-of';
  import { EnvironmentGroupRole } from './environment-group-role';
  import { Feature } from './feature';
  import { Person } from './person';
  import { ServiceAccountPermission } from './service-account-permission';

  /**
* 
* @export
* @class Environment
*/
export class Environment  {
  /**
  * 
  * @type {Person}
  * @memberof Environment
  */
  public createdBy?: Person | null;
  /**
  * 
  * @type {Person}
  * @memberof Environment
  */
  public updatedBy?: Person | null;
  /**
  * 
  * @type {Date}
  * @memberof Environment
  */
  public whenCreated?: Date | null;
  /**
  * 
  * @type {Date}
  * @memberof Environment
  */
  public whenUpdated?: Date | null;
  /**
  * 
  * @type {string}
  * @memberof Environment
  */
  public id: string;
  /**
  * 
  * @type {string}
  * @memberof Environment
  */
  public applicationId?: string;
  /**
  * 
  * @type {string}
  * @memberof Environment
  */
  public name: string;
  /**
  * 
  * @type {string}
  * @memberof Environment
  */
  public priorEnvironmentId?: string | null;
  /**
  * 
  * @type {number}
  * @memberof Environment
  */
  public version?: number;
  /**
  * 
  * @type {string}
  * @memberof Environment
  */
  public description?: string | null;
  /**
  * is this a production environment?
  * @type {boolean}
  * @memberof Environment
  */
  public production?: boolean | null;
  /**
  * 
  * @type {Array<EnvironmentGroupRole>}
  * @memberof Environment
  */
  public groupRoles?: Array<EnvironmentGroupRole> | null;
  /**
  * 
  * @type {Array<Feature>}
  * @memberof Environment
  */
  public features?: Array<Feature> | null;
  /**
  * 
  * @type {Record<string, string>}
  * @memberof Environment
  */
  public environmentInfo?: Record<string, string> | null;
  /**
  * 
  * @type {Record<string, string>}
  * @memberof Environment
  */
  public webhookEnvironmentInfo?: Record<string, string> | null;
  /**
  * 
  * @type {Array<ServiceAccountPermission>}
  * @memberof Environment
  */
  public serviceAccountPermission?: Array<ServiceAccountPermission> | null;
  /**
  * 
  * @type {Date}
  * @memberof Environment
  */
  public whenArchived?: Date | null;

  constructor(init?: Partial<Environment>) {
    Object.assign(this, init);
  }
}


