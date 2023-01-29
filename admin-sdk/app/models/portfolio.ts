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


  import { Application } from './application';
  import { Audit } from './audit';
  import { Group } from './group';
  import { Person } from './person';
  import { PortfolioAllOf } from './portfolio-all-of';

  /**
* 
* @export
* @class Portfolio
*/
export class Portfolio  {
  /**
  * 
  * @type {Person}
  * @memberof Portfolio
  */
  public createdBy?: Person;
  /**
  * 
  * @type {Person}
  * @memberof Portfolio
  */
  public updatedBy?: Person;
  /**
  * 
  * @type {Date}
  * @memberof Portfolio
  */
  public whenCreated?: Date;
  /**
  * 
  * @type {Date}
  * @memberof Portfolio
  */
  public whenUpdated?: Date;
  /**
  * 
  * @type {string}
  * @memberof Portfolio
  */
  public id?: string;
  /**
  * 
  * @type {string}
  * @memberof Portfolio
  */
  public name: string;
  /**
  * 
  * @type {string}
  * @memberof Portfolio
  */
  public description?: string;
  /**
  * 
  * @type {number}
  * @memberof Portfolio
  */
  public version?: number;
  /**
  * 
  * @type {string}
  * @memberof Portfolio
  */
  public organizationId?: string;
  /**
  * 
  * @type {Array<Group>}
  * @memberof Portfolio
  */
  public groups?: Array<Group>;
  /**
  * 
  * @type {Array<Application>}
  * @memberof Portfolio
  */
  public applications?: Array<Application>;
  /**
  * 
  * @type {Date}
  * @memberof Portfolio
  */
  public whenArchived?: Date;

  constructor(init?: Partial<Portfolio>) {
    Object.assign(this, init);
  }
}


