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


  import { PersonType } from './person-type';

  /**
* 
* @export
* @class SearchPerson
*/
export class SearchPerson  {
  /**
  * 
  * @type {string}
  * @memberof SearchPerson
  */
  public id: string;
  /**
  * 
  * @type {string}
  * @memberof SearchPerson
  */
  public name: string;
  /**
  * 
  * @type {string}
  * @memberof SearchPerson
  */
  public email: string;
  /**
  * 
  * @type {number}
  * @memberof SearchPerson
  */
  public version: number;
  /**
  * 
  * @type {PersonType}
  * @memberof SearchPerson
  */
  public personType: PersonType;
  /**
  * This is the timestamp in UTC when they last logged into the system
  * @type {Date}
  * @memberof SearchPerson
  */
  public whenLastAuthenticated?: Date | null;
  /**
  * This is the timestamp in UTC when they last made a request to the system on their most recent login. If it is null it means they have no current token or have never logged in.
  * @type {Date}
  * @memberof SearchPerson
  */
  public whenLastSeen?: Date | null;
  /**
  * When a person\'s account was deactivated (if it was) and when
  * @type {Date}
  * @memberof SearchPerson
  */
  public whenDeactivated?: Date | null;
  /**
  * 
  * @type {number}
  * @memberof SearchPerson
  */
  public groupCount: number;

  constructor(init?: Partial<SearchPerson>) {
    Object.assign(this, init);
  }
}


