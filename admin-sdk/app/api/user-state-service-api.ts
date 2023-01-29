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


import * as globalImportUrl from 'url';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { HiddenEnvironments } from '../models';
// @ts-ignore
import { ObjectSerializer } from '../models';
/**
 * UserStateServiceApi - axios parameter creator
 * @export
 */
export const UserStateServiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Gets information on which environments are hidden for this user
         * @param {string} appId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHiddenEnvironments: async (appId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            if (appId === null || appId === undefined) {
                throw new RequiredError('appId','Required parameter appId was null or undefined when calling getHiddenEnvironments.');
            }
            const localVarPath = `/mr-api/user-data/state/{appId}/hidden-environments`
                .replace(`{${"appId"}}`, encodeURIComponent(String(appId)));
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
         * Saves information on which environments should be hidden for this user
         * @param {string} appId 
         * @param {HiddenEnvironments} hiddenEnvironments 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        saveHiddenEnvironments: async (appId: string, hiddenEnvironments: HiddenEnvironments, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'appId' is not null or undefined
            if (appId === null || appId === undefined) {
                throw new RequiredError('appId','Required parameter appId was null or undefined when calling saveHiddenEnvironments.');
            }
            // verify required parameter 'hiddenEnvironments' is not null or undefined
            if (hiddenEnvironments === null || hiddenEnvironments === undefined) {
                throw new RequiredError('hiddenEnvironments','Required parameter hiddenEnvironments was null or undefined when calling saveHiddenEnvironments.');
            }
            const localVarPath = `/mr-api/user-data/state/{appId}/hidden-environments`
                .replace(`{${"appId"}}`, encodeURIComponent(String(appId)));
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
            const needsSerialization = (typeof hiddenEnvironments !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(hiddenEnvironments !== undefined ? ObjectSerializer.serialize(hiddenEnvironments, 'HiddenEnvironments') : {}) : (hiddenEnvironments || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserStateServiceApi - functional programming interface
 * @export
 */
export const UserStateServiceApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Gets information on which environments are hidden for this user
         * @param {string} appId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getHiddenEnvironments(appId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HiddenEnvironments>> {
            const localVarAxiosArgs = await UserStateServiceApiAxiosParamCreator(configuration).getHiddenEnvironments(appId, options);
            return (axios: AxiosInstance = (configuration?.axiosInstance || globalAxios), basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
          return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Saves information on which environments should be hidden for this user
         * @param {string} appId 
         * @param {HiddenEnvironments} hiddenEnvironments 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async saveHiddenEnvironments(appId: string, hiddenEnvironments: HiddenEnvironments, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HiddenEnvironments>> {
            const localVarAxiosArgs = await UserStateServiceApiAxiosParamCreator(configuration).saveHiddenEnvironments(appId, hiddenEnvironments, options);
            return (axios: AxiosInstance = (configuration?.axiosInstance || globalAxios), basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
          return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * UserStateServiceApi - factory interface
 * @export
 */
export const UserStateServiceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Gets information on which environments are hidden for this user
         * @param {string} appId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHiddenEnvironments(appId: string, options?: any): AxiosPromise<HiddenEnvironments> {
            return UserStateServiceApiFp(configuration).getHiddenEnvironments(appId, options).then((request) => request(axios, basePath));
        },
        /**
         * Saves information on which environments should be hidden for this user
         * @param {string} appId 
         * @param {HiddenEnvironments} hiddenEnvironments 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        saveHiddenEnvironments(appId: string, hiddenEnvironments: HiddenEnvironments, options?: any): AxiosPromise<HiddenEnvironments> {
            return UserStateServiceApiFp(configuration).saveHiddenEnvironments(appId, hiddenEnvironments, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserStateServiceApi - object-oriented interface
 * @export
 * @class UserStateServiceApi
 * @extends {BaseAPI}
 */
export class UserStateServiceApi extends BaseAPI {
    /**
     * Gets information on which environments are hidden for this user
     * @param {string} appId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserStateServiceApi
     */
    public getHiddenEnvironments(appId: string, options?: any): AxiosPromise<HiddenEnvironments> {
        return UserStateServiceApiFp(this.configuration).getHiddenEnvironments(appId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Saves information on which environments should be hidden for this user
     * @param {string} appId 
     * @param {HiddenEnvironments} hiddenEnvironments 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserStateServiceApi
     */
    public saveHiddenEnvironments(appId: string, hiddenEnvironments: HiddenEnvironments, options?: any): AxiosPromise<HiddenEnvironments> {
        return UserStateServiceApiFp(this.configuration).saveHiddenEnvironments(appId, hiddenEnvironments, options).then((request) => request(this.axios, this.basePath));
    }
}