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



  /**
* 
* @export
* @class WebhookCheck
*/
export class WebhookCheck  {
  /**
  * 
  * @type {string}
  * @memberof WebhookCheck
  */
  public messageType: string;
  /**
  * 
  * @type {string}
  * @memberof WebhookCheck
  */
  public envId: string;
  /**
  * Any configuration to pass to the check, e.g. webhook.feature.url, headers, etc - this ensures the updates get to the destination and are used. They get merged info the envInfo, replacing anything there
  * @type {Record<string, string>}
  * @memberof WebhookCheck
  */
  public config: Record<string, string>;

  constructor(init?: Partial<WebhookCheck>) {
    Object.assign(this, init);
  }
}


