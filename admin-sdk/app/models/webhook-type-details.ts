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


  import { WebhookTypeDetail } from './webhook-type-detail';

  /**
* 
* @export
* @class WebhookTypeDetails
*/
export class WebhookTypeDetails  {
  /**
  * 
  * @type {Array<WebhookTypeDetail>}
  * @memberof WebhookTypeDetails
  */
  public types: Array<WebhookTypeDetail>;

  constructor(init?: Partial<WebhookTypeDetails>) {
    Object.assign(this, init);
  }
}


