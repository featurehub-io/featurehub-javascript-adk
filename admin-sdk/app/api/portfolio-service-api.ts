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
import { Portfolio } from '../models';
// @ts-ignore
import { SortOrder } from '../models';
// @ts-ignore
import { ObjectSerializer } from '../models';
/**
 * PortfolioServiceApi - axios parameter creator
 * @export
 */
export const PortfolioServiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new portfolio
         * @param {Portfolio} portfolio 
         * @param {boolean} [includeGroups] Include groups for this this portfolio in results
         * @param {boolean} [includeApplications] Include applications for this portfolio in results
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPortfolio: async (portfolio: Portfolio, includeGroups?: boolean, includeApplications?: boolean, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'portfolio' is not null or undefined
            if (portfolio === null || portfolio === undefined) {
                throw new RequiredError('portfolio','Required parameter portfolio was null or undefined when calling createPortfolio.');
            }
            const localVarPath = `/mr-api/portfolio`;
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

            if (includeGroups !== undefined) {
                localVarQueryParameter['includeGroups'] = includeGroups;
            }

            if (includeApplications !== undefined) {
                localVarQueryParameter['includeApplications'] = includeApplications;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof portfolio !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(portfolio !== undefined ? ObjectSerializer.serialize(portfolio, 'Portfolio') : {}) : (portfolio || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a portfolio
         * @param {string} id The id of the portfolio to find
         * @param {boolean} [includeGroups] Include groups for this this portfolio in results
         * @param {boolean} [includeApplications] Include applications for this portfolio in results
         * @param {boolean} [includeEnvironments] Include the environments inside the applications
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePortfolio: async (id: string, includeGroups?: boolean, includeApplications?: boolean, includeEnvironments?: boolean, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deletePortfolio.');
            }
            const localVarPath = `/mr-api/portfolio/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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

            if (includeGroups !== undefined) {
                localVarQueryParameter['includeGroups'] = includeGroups;
            }

            if (includeApplications !== undefined) {
                localVarQueryParameter['includeApplications'] = includeApplications;
            }

            if (includeEnvironments !== undefined) {
                localVarQueryParameter['includeEnvironments'] = includeEnvironments;
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
         * Gets a list of portfolios.
         * @param {boolean} [includeGroups] Include groups for this this portfolio in results
         * @param {boolean} [includeApplications] Include applications for this portfolio in results
         * @param {SortOrder} [order] how to order the results
         * @param {string} [filter] What to filter the results by
         * @param {string} [parentPortfolioId] The parent portfolio to search under. If none is provided, use the top level one
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findPortfolios: async (includeGroups?: boolean, includeApplications?: boolean, order?: SortOrder, filter?: string, parentPortfolioId?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/mr-api/portfolio`;
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

            if (includeGroups !== undefined) {
                localVarQueryParameter['includeGroups'] = includeGroups;
            }

            if (includeApplications !== undefined) {
                localVarQueryParameter['includeApplications'] = includeApplications;
            }

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            if (filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }

            if (parentPortfolioId !== undefined) {
                localVarQueryParameter['parentPortfolioId'] = parentPortfolioId;
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
         * Get portfolio
         * @param {string} id The id of the portfolio to find
         * @param {boolean} [includeGroups] Include groups for this this portfolio in results
         * @param {boolean} [includeApplications] Include applications for this portfolio in results
         * @param {boolean} [includeEnvironments] Include the environments inside the applications
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPortfolio: async (id: string, includeGroups?: boolean, includeApplications?: boolean, includeEnvironments?: boolean, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getPortfolio.');
            }
            const localVarPath = `/mr-api/portfolio/{id}`
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

            if (includeGroups !== undefined) {
                localVarQueryParameter['includeGroups'] = includeGroups;
            }

            if (includeApplications !== undefined) {
                localVarQueryParameter['includeApplications'] = includeApplications;
            }

            if (includeEnvironments !== undefined) {
                localVarQueryParameter['includeEnvironments'] = includeEnvironments;
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
         * Update a portfolio
         * @param {string} id The id of the portfolio to find
         * @param {Portfolio} portfolio 
         * @param {boolean} [includeGroups] Include groups for this this portfolio in results
         * @param {boolean} [includeApplications] Include applications for this portfolio in results
         * @param {boolean} [includeEnvironments] Include the environments inside the applications
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePortfolio: async (id: string, portfolio: Portfolio, includeGroups?: boolean, includeApplications?: boolean, includeEnvironments?: boolean, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updatePortfolio.');
            }
            // verify required parameter 'portfolio' is not null or undefined
            if (portfolio === null || portfolio === undefined) {
                throw new RequiredError('portfolio','Required parameter portfolio was null or undefined when calling updatePortfolio.');
            }
            const localVarPath = `/mr-api/portfolio/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
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

            if (includeGroups !== undefined) {
                localVarQueryParameter['includeGroups'] = includeGroups;
            }

            if (includeApplications !== undefined) {
                localVarQueryParameter['includeApplications'] = includeApplications;
            }

            if (includeEnvironments !== undefined) {
                localVarQueryParameter['includeEnvironments'] = includeEnvironments;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof portfolio !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(portfolio !== undefined ? ObjectSerializer.serialize(portfolio, 'Portfolio') : {}) : (portfolio || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PortfolioServiceApi - functional programming interface
 * @export
 */
export const PortfolioServiceApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Create a new portfolio
         * @param {Portfolio} portfolio 
         * @param {boolean} [includeGroups] Include groups for this this portfolio in results
         * @param {boolean} [includeApplications] Include applications for this portfolio in results
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createPortfolio(portfolio: Portfolio, includeGroups?: boolean, includeApplications?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Portfolio>> {
            const localVarAxiosArgs = await PortfolioServiceApiAxiosParamCreator(configuration).createPortfolio(portfolio, includeGroups, includeApplications, options);
            return (axios: AxiosInstance = (configuration?.axiosInstance || globalAxios), basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
          return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Delete a portfolio
         * @param {string} id The id of the portfolio to find
         * @param {boolean} [includeGroups] Include groups for this this portfolio in results
         * @param {boolean} [includeApplications] Include applications for this portfolio in results
         * @param {boolean} [includeEnvironments] Include the environments inside the applications
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deletePortfolio(id: string, includeGroups?: boolean, includeApplications?: boolean, includeEnvironments?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
            const localVarAxiosArgs = await PortfolioServiceApiAxiosParamCreator(configuration).deletePortfolio(id, includeGroups, includeApplications, includeEnvironments, options);
            return (axios: AxiosInstance = (configuration?.axiosInstance || globalAxios), basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
          return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Gets a list of portfolios.
         * @param {boolean} [includeGroups] Include groups for this this portfolio in results
         * @param {boolean} [includeApplications] Include applications for this portfolio in results
         * @param {SortOrder} [order] how to order the results
         * @param {string} [filter] What to filter the results by
         * @param {string} [parentPortfolioId] The parent portfolio to search under. If none is provided, use the top level one
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findPortfolios(includeGroups?: boolean, includeApplications?: boolean, order?: SortOrder, filter?: string, parentPortfolioId?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Portfolio>>> {
            const localVarAxiosArgs = await PortfolioServiceApiAxiosParamCreator(configuration).findPortfolios(includeGroups, includeApplications, order, filter, parentPortfolioId, options);
            return (axios: AxiosInstance = (configuration?.axiosInstance || globalAxios), basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
          return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get portfolio
         * @param {string} id The id of the portfolio to find
         * @param {boolean} [includeGroups] Include groups for this this portfolio in results
         * @param {boolean} [includeApplications] Include applications for this portfolio in results
         * @param {boolean} [includeEnvironments] Include the environments inside the applications
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPortfolio(id: string, includeGroups?: boolean, includeApplications?: boolean, includeEnvironments?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Portfolio>> {
            const localVarAxiosArgs = await PortfolioServiceApiAxiosParamCreator(configuration).getPortfolio(id, includeGroups, includeApplications, includeEnvironments, options);
            return (axios: AxiosInstance = (configuration?.axiosInstance || globalAxios), basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
          return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Update a portfolio
         * @param {string} id The id of the portfolio to find
         * @param {Portfolio} portfolio 
         * @param {boolean} [includeGroups] Include groups for this this portfolio in results
         * @param {boolean} [includeApplications] Include applications for this portfolio in results
         * @param {boolean} [includeEnvironments] Include the environments inside the applications
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updatePortfolio(id: string, portfolio: Portfolio, includeGroups?: boolean, includeApplications?: boolean, includeEnvironments?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Portfolio>> {
            const localVarAxiosArgs = await PortfolioServiceApiAxiosParamCreator(configuration).updatePortfolio(id, portfolio, includeGroups, includeApplications, includeEnvironments, options);
            return (axios: AxiosInstance = (configuration?.axiosInstance || globalAxios), basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
          return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * PortfolioServiceApi - factory interface
 * @export
 */
export const PortfolioServiceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Create a new portfolio
         * @param {Portfolio} portfolio 
         * @param {boolean} [includeGroups] Include groups for this this portfolio in results
         * @param {boolean} [includeApplications] Include applications for this portfolio in results
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPortfolio(portfolio: Portfolio, includeGroups?: boolean, includeApplications?: boolean, options?: any): AxiosPromise<Portfolio> {
            return PortfolioServiceApiFp(configuration).createPortfolio(portfolio, includeGroups, includeApplications, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a portfolio
         * @param {string} id The id of the portfolio to find
         * @param {boolean} [includeGroups] Include groups for this this portfolio in results
         * @param {boolean} [includeApplications] Include applications for this portfolio in results
         * @param {boolean} [includeEnvironments] Include the environments inside the applications
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePortfolio(id: string, includeGroups?: boolean, includeApplications?: boolean, includeEnvironments?: boolean, options?: any): AxiosPromise<boolean> {
            return PortfolioServiceApiFp(configuration).deletePortfolio(id, includeGroups, includeApplications, includeEnvironments, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a list of portfolios.
         * @param {boolean} [includeGroups] Include groups for this this portfolio in results
         * @param {boolean} [includeApplications] Include applications for this portfolio in results
         * @param {SortOrder} [order] how to order the results
         * @param {string} [filter] What to filter the results by
         * @param {string} [parentPortfolioId] The parent portfolio to search under. If none is provided, use the top level one
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findPortfolios(includeGroups?: boolean, includeApplications?: boolean, order?: SortOrder, filter?: string, parentPortfolioId?: string, options?: any): AxiosPromise<Array<Portfolio>> {
            return PortfolioServiceApiFp(configuration).findPortfolios(includeGroups, includeApplications, order, filter, parentPortfolioId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get portfolio
         * @param {string} id The id of the portfolio to find
         * @param {boolean} [includeGroups] Include groups for this this portfolio in results
         * @param {boolean} [includeApplications] Include applications for this portfolio in results
         * @param {boolean} [includeEnvironments] Include the environments inside the applications
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPortfolio(id: string, includeGroups?: boolean, includeApplications?: boolean, includeEnvironments?: boolean, options?: any): AxiosPromise<Portfolio> {
            return PortfolioServiceApiFp(configuration).getPortfolio(id, includeGroups, includeApplications, includeEnvironments, options).then((request) => request(axios, basePath));
        },
        /**
         * Update a portfolio
         * @param {string} id The id of the portfolio to find
         * @param {Portfolio} portfolio 
         * @param {boolean} [includeGroups] Include groups for this this portfolio in results
         * @param {boolean} [includeApplications] Include applications for this portfolio in results
         * @param {boolean} [includeEnvironments] Include the environments inside the applications
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePortfolio(id: string, portfolio: Portfolio, includeGroups?: boolean, includeApplications?: boolean, includeEnvironments?: boolean, options?: any): AxiosPromise<Portfolio> {
            return PortfolioServiceApiFp(configuration).updatePortfolio(id, portfolio, includeGroups, includeApplications, includeEnvironments, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PortfolioServiceApi - object-oriented interface
 * @export
 * @class PortfolioServiceApi
 * @extends {BaseAPI}
 */
export class PortfolioServiceApi extends BaseAPI {
    /**
     * Create a new portfolio
     * @param {Portfolio} portfolio 
     * @param {boolean} [includeGroups] Include groups for this this portfolio in results
     * @param {boolean} [includeApplications] Include applications for this portfolio in results
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PortfolioServiceApi
     */
    public createPortfolio(portfolio: Portfolio, includeGroups?: boolean, includeApplications?: boolean, options?: any): AxiosPromise<Portfolio> {
        return PortfolioServiceApiFp(this.configuration).createPortfolio(portfolio, includeGroups, includeApplications, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete a portfolio
     * @param {string} id The id of the portfolio to find
     * @param {boolean} [includeGroups] Include groups for this this portfolio in results
     * @param {boolean} [includeApplications] Include applications for this portfolio in results
     * @param {boolean} [includeEnvironments] Include the environments inside the applications
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PortfolioServiceApi
     */
    public deletePortfolio(id: string, includeGroups?: boolean, includeApplications?: boolean, includeEnvironments?: boolean, options?: any): AxiosPromise<boolean> {
        return PortfolioServiceApiFp(this.configuration).deletePortfolio(id, includeGroups, includeApplications, includeEnvironments, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets a list of portfolios.
     * @param {boolean} [includeGroups] Include groups for this this portfolio in results
     * @param {boolean} [includeApplications] Include applications for this portfolio in results
     * @param {SortOrder} [order] how to order the results
     * @param {string} [filter] What to filter the results by
     * @param {string} [parentPortfolioId] The parent portfolio to search under. If none is provided, use the top level one
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PortfolioServiceApi
     */
    public findPortfolios(includeGroups?: boolean, includeApplications?: boolean, order?: SortOrder, filter?: string, parentPortfolioId?: string, options?: any): AxiosPromise<Array<Portfolio>> {
        return PortfolioServiceApiFp(this.configuration).findPortfolios(includeGroups, includeApplications, order, filter, parentPortfolioId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get portfolio
     * @param {string} id The id of the portfolio to find
     * @param {boolean} [includeGroups] Include groups for this this portfolio in results
     * @param {boolean} [includeApplications] Include applications for this portfolio in results
     * @param {boolean} [includeEnvironments] Include the environments inside the applications
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PortfolioServiceApi
     */
    public getPortfolio(id: string, includeGroups?: boolean, includeApplications?: boolean, includeEnvironments?: boolean, options?: any): AxiosPromise<Portfolio> {
        return PortfolioServiceApiFp(this.configuration).getPortfolio(id, includeGroups, includeApplications, includeEnvironments, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update a portfolio
     * @param {string} id The id of the portfolio to find
     * @param {Portfolio} portfolio 
     * @param {boolean} [includeGroups] Include groups for this this portfolio in results
     * @param {boolean} [includeApplications] Include applications for this portfolio in results
     * @param {boolean} [includeEnvironments] Include the environments inside the applications
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PortfolioServiceApi
     */
    public updatePortfolio(id: string, portfolio: Portfolio, includeGroups?: boolean, includeApplications?: boolean, includeEnvironments?: boolean, options?: any): AxiosPromise<Portfolio> {
        return PortfolioServiceApiFp(this.configuration).updatePortfolio(id, portfolio, includeGroups, includeApplications, includeEnvironments, options).then((request) => request(this.axios, this.basePath));
    }
}
