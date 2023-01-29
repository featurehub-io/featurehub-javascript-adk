/* tslint:disable */
/* eslint-disable */
/**
 * ManagementResourceApi
 * This describes the API clients use for accessing features. This reflects the API from 1.5.7 onwards.
 *
 * The version of the OpenAPI document: 1.1.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


  import { Audit } from './audit';
  import { Group } from './group';
  import { OrganizationAllOf } from './organization-all-of';
  import { Person } from './person';
  import { Portfolio } from './portfolio';

  /**
* 
* @export
* @class Organization
*/
export class Organization  {
  /**
  * 
  * @type {Person}
  * @memberof Organization
  */
  public createdBy?: Person;
  /**
  * 
  * @type {Person}
  * @memberof Organization
  */
  public updatedBy?: Person;
  /**
  * 
  * @type {Date}
  * @memberof Organization
  */
  public whenCreated?: Date;
  /**
  * 
  * @type {Date}
  * @memberof Organization
  */
  public whenUpdated?: Date;
  /**
  * 
  * @type {string}
  * @memberof Organization
  */
  public id?: string;
  /**
  * 
  * @type {number}
  * @memberof Organization
  */
  public version?: number;
  /**
  * 
  * @type {string}
  * @memberof Organization
  */
  public name: string;
  /**
  * 
  * @type {boolean}
  * @memberof Organization
  */
  public admin?: boolean;
  /**
  * If provided, the browser should redirect to this URL to authenticate
  * @type {string}
  * @memberof Organization
  */
  public authorizationUrl?: string;
  /**
  * 
  * @type {Group}
  * @memberof Organization
  */
  public orgGroup?: Group;
  /**
  * 
  * @type {Array<Portfolio>}
  * @memberof Organization
  */
  public portfolios?: Array<Portfolio>;
  /**
  * 
  * @type {Date}
  * @memberof Organization
  */
  public whenArchived?: Date;

  constructor(init?: Partial<Organization>) {
    Object.assign(this, init);
  }
}

