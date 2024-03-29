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


  import { ApplicationAllOf } from './application-all-of';
  import { Audit } from './audit';
  import { Environment } from './environment';
  import { Feature } from './feature';
  import { Group } from './group';
  import { Person } from './person';

  /**
* 
* @export
* @class Application
*/
export class Application  {
  /**
  * 
  * @type {Person}
  * @memberof Application
  */
  public createdBy?: Person | null;
  /**
  * 
  * @type {Person}
  * @memberof Application
  */
  public updatedBy?: Person | null;
  /**
  * 
  * @type {Date}
  * @memberof Application
  */
  public whenCreated?: Date | null;
  /**
  * 
  * @type {Date}
  * @memberof Application
  */
  public whenUpdated?: Date | null;
  /**
  * 
  * @type {string}
  * @memberof Application
  */
  public id: string;
  /**
  * 
  * @type {string}
  * @memberof Application
  */
  public name: string;
  /**
  * 
  * @type {string}
  * @memberof Application
  */
  public description?: string | null;
  /**
  * 
  * @type {string}
  * @memberof Application
  */
  public portfolioId?: string | null;
  /**
  * 
  * @type {number}
  * @memberof Application
  */
  public version?: number;
  /**
  * 
  * @type {Array<Group>}
  * @memberof Application
  */
  public groups?: Array<Group>;
  /**
  * 
  * @type {Array<Feature>}
  * @memberof Application
  */
  public features?: Array<Feature>;
  /**
  * 
  * @type {Array<Environment>}
  * @memberof Application
  */
  public environments?: Array<Environment>;
  /**
  * 
  * @type {Date}
  * @memberof Application
  */
  public whenArchived?: Date | null;

  constructor(init?: Partial<Application>) {
    Object.assign(this, init);
  }
}


