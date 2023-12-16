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


import * as globalImportUrl from 'url';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { WebhookCheck } from '../models';
// @ts-ignore
import { WebhookDetail } from '../models';
// @ts-ignore
import { WebhookSummary } from '../models';
// @ts-ignore
import { WebhookTypeDetails } from '../models';
// @ts-ignore
import { ObjectSerializer } from '../models';
/**
 * WebhookServiceApi - axios parameter creator
 * @export
 */
export const WebhookServiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Gets a specific webhook to show its details based on whats allowed
         * @param {string} envId 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWebhookDetails: async (envId: string, id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'envId' is not null or undefined
            if (envId === null || envId === undefined) {
                throw new RequiredError('envId','Required parameter envId was null or undefined when calling getWebhookDetails.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getWebhookDetails.');
            }
            const localVarPath = `/mr-api/webhooks/{envId}/{id}`
                .replace(`{${"envId"}}`, encodeURIComponent(String(envId)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? configuration.accessToken()
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets a list of well known webhook types
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWebhookTypes: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/mr-api/webhooks`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Provides a pagination API for listing webhooks for a specific environment
         * @param {string} envId 
         * @param {number} [max] where to start
         * @param {number} [startAt] what position in the results to start at
         * @param {string} [filter] what types of webhooks to look for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listWebhooks: async (envId: string, max?: number, startAt?: number, filter?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'envId' is not null or undefined
            if (envId === null || envId === undefined) {
                throw new RequiredError('envId','Required parameter envId was null or undefined when calling listWebhooks.');
            }
            const localVarPath = `/mr-api/webhooks/{envId}`
                .replace(`{${"envId"}}`, encodeURIComponent(String(envId)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? configuration.accessToken()
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            if (max !== undefined) {
                localVarQueryParameter['max'] = max;
            }

            if (startAt !== undefined) {
                localVarQueryParameter['startAt'] = startAt;
            }

            if (filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Send a ping webhook to see if everything is working
         * @param {WebhookCheck} webhookCheck 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        testWebhook: async (webhookCheck: WebhookCheck, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'webhookCheck' is not null or undefined
            if (webhookCheck === null || webhookCheck === undefined) {
                throw new RequiredError('webhookCheck','Required parameter webhookCheck was null or undefined when calling testWebhook.');
            }
            const localVarPath = `/mr-api/webhooks`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? configuration.accessToken()
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof webhookCheck !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(webhookCheck !== undefined ? ObjectSerializer.serialize(webhookCheck, 'WebhookCheck') : {}) : (webhookCheck || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * WebhookServiceApi - functional programming interface
 * @export
 */
export const WebhookServiceApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Gets a specific webhook to show its details based on whats allowed
         * @param {string} envId 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getWebhookDetails(envId: string, id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhookDetail>> {
            const localVarAxiosArgs = await WebhookServiceApiAxiosParamCreator(configuration).getWebhookDetails(envId, id, options);
            return (axios: AxiosInstance = (configuration?.axiosInstance || globalAxios), basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
          return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Gets a list of well known webhook types
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getWebhookTypes(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhookTypeDetails>> {
            const localVarAxiosArgs = await WebhookServiceApiAxiosParamCreator(configuration).getWebhookTypes(options);
            return (axios: AxiosInstance = (configuration?.axiosInstance || globalAxios), basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
          return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Provides a pagination API for listing webhooks for a specific environment
         * @param {string} envId 
         * @param {number} [max] where to start
         * @param {number} [startAt] what position in the results to start at
         * @param {string} [filter] what types of webhooks to look for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listWebhooks(envId: string, max?: number, startAt?: number, filter?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhookSummary>> {
            const localVarAxiosArgs = await WebhookServiceApiAxiosParamCreator(configuration).listWebhooks(envId, max, startAt, filter, options);
            return (axios: AxiosInstance = (configuration?.axiosInstance || globalAxios), basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
          return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Send a ping webhook to see if everything is working
         * @param {WebhookCheck} webhookCheck 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async testWebhook(webhookCheck: WebhookCheck, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await WebhookServiceApiAxiosParamCreator(configuration).testWebhook(webhookCheck, options);
            return (axios: AxiosInstance = (configuration?.axiosInstance || globalAxios), basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
          return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * WebhookServiceApi - factory interface
 * @export
 */
export const WebhookServiceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Gets a specific webhook to show its details based on whats allowed
         * @param {string} envId 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWebhookDetails(envId: string, id: string, options?: any): AxiosPromise<WebhookDetail> {
            return WebhookServiceApiFp(configuration).getWebhookDetails(envId, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a list of well known webhook types
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWebhookTypes(options?: any): AxiosPromise<WebhookTypeDetails> {
            return WebhookServiceApiFp(configuration).getWebhookTypes(options).then((request) => request(axios, basePath));
        },
        /**
         * Provides a pagination API for listing webhooks for a specific environment
         * @param {string} envId 
         * @param {number} [max] where to start
         * @param {number} [startAt] what position in the results to start at
         * @param {string} [filter] what types of webhooks to look for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listWebhooks(envId: string, max?: number, startAt?: number, filter?: string, options?: any): AxiosPromise<WebhookSummary> {
            return WebhookServiceApiFp(configuration).listWebhooks(envId, max, startAt, filter, options).then((request) => request(axios, basePath));
        },
        /**
         * Send a ping webhook to see if everything is working
         * @param {WebhookCheck} webhookCheck 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        testWebhook(webhookCheck: WebhookCheck, options?: any): AxiosPromise<void> {
            return WebhookServiceApiFp(configuration).testWebhook(webhookCheck, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * WebhookServiceApi - object-oriented interface
 * @export
 * @class WebhookServiceApi
 * @extends {BaseAPI}
 */
export class WebhookServiceApi extends BaseAPI {
    /**
     * Gets a specific webhook to show its details based on whats allowed
     * @param {string} envId 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookServiceApi
     */
    public getWebhookDetails(envId: string, id: string, options?: any): AxiosPromise<WebhookDetail> {
        return WebhookServiceApiFp(this.configuration).getWebhookDetails(envId, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets a list of well known webhook types
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookServiceApi
     */
    public getWebhookTypes(options?: any): AxiosPromise<WebhookTypeDetails> {
        return WebhookServiceApiFp(this.configuration).getWebhookTypes(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Provides a pagination API for listing webhooks for a specific environment
     * @param {string} envId 
     * @param {number} [max] where to start
     * @param {number} [startAt] what position in the results to start at
     * @param {string} [filter] what types of webhooks to look for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookServiceApi
     */
    public listWebhooks(envId: string, max?: number, startAt?: number, filter?: string, options?: any): AxiosPromise<WebhookSummary> {
        return WebhookServiceApiFp(this.configuration).listWebhooks(envId, max, startAt, filter, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Send a ping webhook to see if everything is working
     * @param {WebhookCheck} webhookCheck 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookServiceApi
     */
    public testWebhook(webhookCheck: WebhookCheck, options?: any): AxiosPromise<void> {
        return WebhookServiceApiFp(this.configuration).testWebhook(webhookCheck, options).then((request) => request(this.axios, this.basePath));
    }
}
