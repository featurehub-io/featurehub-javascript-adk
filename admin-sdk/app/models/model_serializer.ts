import { WebhookCheck, PersonInfo, WebhookTypeDetail, ApplicationFeatureValues, RoleType, SearchPersonResult, PersonType, ApplicationVersionInfo, PasswordUpdate, TokenizedPerson, Feature, ApplicationGroupRole, PersonRegistrationDetails, ServiceAccountPermission, WebhookSummaryItem, PasswordReset, ProviderRedirect, OrganizationAllOf, StrategyAttributePlatformName, RolloutStrategyFieldType, EnvironmentAllOf, RolloutStrategyAttributeAllOf, GroupAllOf, ResetApiKeyType, StrategyAttributeWellKnownNames, RolloutStrategyValidationResponse, CustomRolloutStrategyViolation, ApplicationAllOf, IdentityProviderInfo, RegistrationUrl, StrategyAttributeCountryName, PersonId, RolloutStrategyAttribute, WebhookTypeDetails, SearchPerson, Environment, FeatureValueType, RolloutStrategyInstance, Application, Person, RolloutStrategyAttributeConditional, Group, ServiceAccount, Organization, RolloutStrategyAllOf, SearchPersonSortBy, CreatePersonDetails, UpdatePerson, WebhookDetail, SetupSiteAdmin, WebhookSummary, RolloutStrategyViolation, RolloutStrategyCollectionViolationType, UpdateEnvironment, RolloutStrategyInfo, StrategyAttributeDeviceName, RolloutStrategyViolationType, EnvironmentFeaturesResult, RolloutStrategyValidationRequest, OutstandingRegistration, Portfolio, SortOrder, HiddenEnvironments, EnvironmentFeatureValues, FeatureEnvironment, FeatureValue, AdminServiceResetTokenResponse, Audit, BaseRolloutStrategy, EnvironmentSortOrder, RolloutStrategy, SharedRolloutStrategyViolation, PortfolioAllOf, UserCredentials, SetupResponse, ApplicationRoleType, EnvironmentGroupRole, SetupMissingResponse, BaseRolloutStrategyAttribute } from './';


export class AdminServiceResetTokenResponseTypeTransformer {
public static toJson(__val: AdminServiceResetTokenResponse): any {
    const __data: any = {};
    
  if (__val.token !== null && __val.token !== undefined) {
    __data['token'] = __val.token;
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['token'] = __val['token'];

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): AdminServiceResetTokenResponse {
    return new AdminServiceResetTokenResponse(AdminServiceResetTokenResponseTypeTransformer.fromJsonAsAny(__val));
  }
}

export class ApplicationTypeTransformer {
public static toJson(__val: Application): any {
    const __data: any = {};
    
  // inherited fields from Audit
  
  if (__val.createdBy !== null && __val.createdBy !== undefined) {
    __data['createdBy'] = ObjectSerializer.serialize(__val.createdBy, 'Person');
  }
  if (__val.updatedBy !== null && __val.updatedBy !== undefined) {
    __data['updatedBy'] = ObjectSerializer.serialize(__val.updatedBy, 'Person');
  }
  if (__val.whenCreated !== null && __val.whenCreated !== undefined) {
    __data['whenCreated'] = ObjectSerializer.serialize(__val.whenCreated, 'date-time');
  }
  if (__val.whenUpdated !== null && __val.whenUpdated !== undefined) {
    __data['whenUpdated'] = ObjectSerializer.serialize(__val.whenUpdated, 'date-time');
  }

  // inherited fields from ApplicationAllOf
  
  if (__val.id !== null && __val.id !== undefined) {
    __data['id'] = __val.id;
  }
  if (__val.name !== null && __val.name !== undefined) {
    __data['name'] = __val.name;
  }
  if (__val.description !== null && __val.description !== undefined) {
    __data['description'] = __val.description;
  }
  if (__val.portfolioId !== null && __val.portfolioId !== undefined) {
    __data['portfolioId'] = __val.portfolioId;
  }
  if (__val.version !== null && __val.version !== undefined) {
    __data['version'] = __val.version;
  }
  if (__val.groups !== null && __val.groups !== undefined) {
    __data['groups'] = ObjectSerializer.serialize(__val.groups, 'Array<Group>');
  }
  if (__val.features !== null && __val.features !== undefined) {
    __data['features'] = ObjectSerializer.serialize(__val.features, 'Array<Feature>');
  }
  if (__val.environments !== null && __val.environments !== undefined) {
    __data['environments'] = ObjectSerializer.serialize(__val.environments, 'Array<Environment>');
  }
  if (__val.whenArchived !== null && __val.whenArchived !== undefined) {
    __data['whenArchived'] = ObjectSerializer.serialize(__val.whenArchived, 'date-time');
  }


    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
    
  // inherited fields from Audit
      __init['createdBy'] = ObjectSerializer.deserialize(__val['createdBy'], 'Person');
    __init['updatedBy'] = ObjectSerializer.deserialize(__val['updatedBy'], 'Person');
    __init['whenCreated'] = ObjectSerializer.deserialize(__val['whenCreated'], 'date-time');
    __init['whenUpdated'] = ObjectSerializer.deserialize(__val['whenUpdated'], 'date-time');


  // inherited fields from ApplicationAllOf
      __init['id'] = __val['id'];
    __init['name'] = __val['name'];
    __init['description'] = __val['description'];
    __init['portfolioId'] = __val['portfolioId'];
    __init['version'] = __val['version'];
    __init['groups'] = ObjectSerializer.deserialize(__val['groups'], 'Array<Group>');
    __init['features'] = ObjectSerializer.deserialize(__val['features'], 'Array<Feature>');
    __init['environments'] = ObjectSerializer.deserialize(__val['environments'], 'Array<Environment>');
    __init['whenArchived'] = ObjectSerializer.deserialize(__val['whenArchived'], 'date-time');


    
      
  
  
  


    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): Application {
    return new Application(ApplicationTypeTransformer.fromJsonAsAny(__val));
  }
}

export class ApplicationAllOfTypeTransformer {
public static toJson(__val: ApplicationAllOf): any {
    const __data: any = {};
    
  if (__val.id !== null && __val.id !== undefined) {
    __data['id'] = __val.id;
  }
  if (__val.name !== null && __val.name !== undefined) {
    __data['name'] = __val.name;
  }
  if (__val.description !== null && __val.description !== undefined) {
    __data['description'] = __val.description;
  }
  if (__val.portfolioId !== null && __val.portfolioId !== undefined) {
    __data['portfolioId'] = __val.portfolioId;
  }
  if (__val.version !== null && __val.version !== undefined) {
    __data['version'] = __val.version;
  }
  if (__val.groups !== null && __val.groups !== undefined) {
    __data['groups'] = ObjectSerializer.serialize(__val.groups, 'Array<Group>');
  }
  if (__val.features !== null && __val.features !== undefined) {
    __data['features'] = ObjectSerializer.serialize(__val.features, 'Array<Feature>');
  }
  if (__val.environments !== null && __val.environments !== undefined) {
    __data['environments'] = ObjectSerializer.serialize(__val.environments, 'Array<Environment>');
  }
  if (__val.whenArchived !== null && __val.whenArchived !== undefined) {
    __data['whenArchived'] = ObjectSerializer.serialize(__val.whenArchived, 'date-time');
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['id'] = __val['id'];
    __init['name'] = __val['name'];
    __init['description'] = __val['description'];
    __init['portfolioId'] = __val['portfolioId'];
    __init['version'] = __val['version'];
    __init['groups'] = ObjectSerializer.deserialize(__val['groups'], 'Array<Group>');
    __init['features'] = ObjectSerializer.deserialize(__val['features'], 'Array<Feature>');
    __init['environments'] = ObjectSerializer.deserialize(__val['environments'], 'Array<Environment>');
    __init['whenArchived'] = ObjectSerializer.deserialize(__val['whenArchived'], 'date-time');

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): ApplicationAllOf {
    return new ApplicationAllOf(ApplicationAllOfTypeTransformer.fromJsonAsAny(__val));
  }
}

export class ApplicationFeatureValuesTypeTransformer {
public static toJson(__val: ApplicationFeatureValues): any {
    const __data: any = {};
    
  if (__val.applicationId !== null && __val.applicationId !== undefined) {
    __data['applicationId'] = __val.applicationId;
  }
  if (__val.features !== null && __val.features !== undefined) {
    __data['features'] = ObjectSerializer.serialize(__val.features, 'Array<Feature>');
  }
  if (__val.environments !== null && __val.environments !== undefined) {
    __data['environments'] = ObjectSerializer.serialize(__val.environments, 'Array<EnvironmentFeatureValues>');
  }
  if (__val.maxFeatures !== null && __val.maxFeatures !== undefined) {
    __data['maxFeatures'] = __val.maxFeatures;
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['applicationId'] = __val['applicationId'];
    __init['features'] = ObjectSerializer.deserialize(__val['features'], 'Array<Feature>');
    __init['environments'] = ObjectSerializer.deserialize(__val['environments'], 'Array<EnvironmentFeatureValues>');
    __init['maxFeatures'] = __val['maxFeatures'];

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): ApplicationFeatureValues {
    return new ApplicationFeatureValues(ApplicationFeatureValuesTypeTransformer.fromJsonAsAny(__val));
  }
}

export class ApplicationGroupRoleTypeTransformer {
public static toJson(__val: ApplicationGroupRole): any {
    const __data: any = {};
    
  if (__val.applicationId !== null && __val.applicationId !== undefined) {
    __data['applicationId'] = __val.applicationId;
  }
  if (__val.groupId !== null && __val.groupId !== undefined) {
    __data['groupId'] = __val.groupId;
  }
  if (__val.roles !== null && __val.roles !== undefined) {
    __data['roles'] = ObjectSerializer.serialize(__val.roles, 'Array<ApplicationRoleType>');
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['applicationId'] = __val['applicationId'];
    __init['groupId'] = __val['groupId'];
    __init['roles'] = ObjectSerializer.deserialize(__val['roles'], 'Array<ApplicationRoleType>');

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): ApplicationGroupRole {
    return new ApplicationGroupRole(ApplicationGroupRoleTypeTransformer.fromJsonAsAny(__val));
  }
}

export class ApplicationRoleTypeTypeTransformer {
public static toJson(__val: ApplicationRoleType): any {
    return __val?.toString();
  }

  // expect this to be a decoded value
public   static fromJson(__val: any): ApplicationRoleType {
    if (__val === null || __val === undefined) return undefined;
    switch (__val.toString()) {
        case 'FEATURE_EDIT':
          return ApplicationRoleType.Edit;
        case 'FEATURE_CREATE':
          return ApplicationRoleType.Create;
        case 'FEATURE_EDIT_AND_DELETE':
          return ApplicationRoleType.EditAndDelete;
    }

    return undefined;
  }
}

export class ApplicationVersionInfoTypeTransformer {
public static toJson(__val: ApplicationVersionInfo): any {
    const __data: any = {};
    
  if (__val.name !== null && __val.name !== undefined) {
    __data['name'] = __val.name;
  }
  if (__val.version !== null && __val.version !== undefined) {
    __data['version'] = __val.version;
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['name'] = __val['name'];
    __init['version'] = __val['version'];

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): ApplicationVersionInfo {
    return new ApplicationVersionInfo(ApplicationVersionInfoTypeTransformer.fromJsonAsAny(__val));
  }
}

export class AuditTypeTransformer {
public static toJson(__val: Audit): any {
    const __data: any = {};
    
  if (__val.createdBy !== null && __val.createdBy !== undefined) {
    __data['createdBy'] = ObjectSerializer.serialize(__val.createdBy, 'Person');
  }
  if (__val.updatedBy !== null && __val.updatedBy !== undefined) {
    __data['updatedBy'] = ObjectSerializer.serialize(__val.updatedBy, 'Person');
  }
  if (__val.whenCreated !== null && __val.whenCreated !== undefined) {
    __data['whenCreated'] = ObjectSerializer.serialize(__val.whenCreated, 'date-time');
  }
  if (__val.whenUpdated !== null && __val.whenUpdated !== undefined) {
    __data['whenUpdated'] = ObjectSerializer.serialize(__val.whenUpdated, 'date-time');
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['createdBy'] = ObjectSerializer.deserialize(__val['createdBy'], 'Person');
    __init['updatedBy'] = ObjectSerializer.deserialize(__val['updatedBy'], 'Person');
    __init['whenCreated'] = ObjectSerializer.deserialize(__val['whenCreated'], 'date-time');
    __init['whenUpdated'] = ObjectSerializer.deserialize(__val['whenUpdated'], 'date-time');

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): Audit {
    return new Audit(AuditTypeTransformer.fromJsonAsAny(__val));
  }
}

export class BaseRolloutStrategyTypeTransformer {
public static toJson(__val: BaseRolloutStrategy): any {
    const __data: any = {};
    
  if (__val.id !== null && __val.id !== undefined) {
    __data['id'] = __val.id;
  }
  if (__val.percentage !== null && __val.percentage !== undefined) {
    __data['percentage'] = __val.percentage;
  }
  if (__val.percentageAttributes !== null && __val.percentageAttributes !== undefined) {
    __data['percentageAttributes'] = __val.percentageAttributes;
  }
  if (__val.value !== null && __val.value !== undefined) {
    __data['value'] = __val.value;
  }
  if (__val.attributes !== null && __val.attributes !== undefined) {
    __data['attributes'] = ObjectSerializer.serialize(__val.attributes, 'Array<BaseRolloutStrategyAttribute>');
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['id'] = __val['id'];
    __init['percentage'] = __val['percentage'];
    __init['percentageAttributes'] = __val['percentageAttributes'];
    __init['value'] = __val['value'];
    __init['attributes'] = ObjectSerializer.deserialize(__val['attributes'], 'Array<BaseRolloutStrategyAttribute>');

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): BaseRolloutStrategy {
    return new BaseRolloutStrategy(BaseRolloutStrategyTypeTransformer.fromJsonAsAny(__val));
  }
}

export class BaseRolloutStrategyAttributeTypeTransformer {
public static toJson(__val: BaseRolloutStrategyAttribute): any {
    const __data: any = {};
    
  if (__val.conditional !== null && __val.conditional !== undefined) {
    __data['conditional'] = ObjectSerializer.serialize(__val.conditional, 'RolloutStrategyAttributeConditional');
  }
  if (__val.fieldName !== null && __val.fieldName !== undefined) {
    __data['fieldName'] = __val.fieldName;
  }
  if (__val.values !== null && __val.values !== undefined) {
    __data['values'] = __val.values;
  }
  if (__val.type !== null && __val.type !== undefined) {
    __data['type'] = ObjectSerializer.serialize(__val.type, 'RolloutStrategyFieldType');
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['conditional'] = ObjectSerializer.deserialize(__val['conditional'], 'RolloutStrategyAttributeConditional');
    __init['fieldName'] = __val['fieldName'];
    __init['values'] = __val['values'];
    __init['type'] = ObjectSerializer.deserialize(__val['type'], 'RolloutStrategyFieldType');

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): BaseRolloutStrategyAttribute {
    return new BaseRolloutStrategyAttribute(BaseRolloutStrategyAttributeTypeTransformer.fromJsonAsAny(__val));
  }
}

export class CreatePersonDetailsTypeTransformer {
public static toJson(__val: CreatePersonDetails): any {
    const __data: any = {};
    
  if (__val.email !== null && __val.email !== undefined) {
    __data['email'] = __val.email;
  }
  if (__val.personType !== null && __val.personType !== undefined) {
    __data['personType'] = ObjectSerializer.serialize(__val.personType, 'PersonType');
  }
  if (__val.name !== null && __val.name !== undefined) {
    __data['name'] = __val.name;
  }
  if (__val.groupIds !== null && __val.groupIds !== undefined) {
    __data['groupIds'] = __val.groupIds;
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['email'] = __val['email'];
    __init['personType'] = ObjectSerializer.deserialize(__val['personType'], 'PersonType');
    __init['name'] = __val['name'];
    __init['groupIds'] = __val['groupIds'];

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): CreatePersonDetails {
    return new CreatePersonDetails(CreatePersonDetailsTypeTransformer.fromJsonAsAny(__val));
  }
}

export class CustomRolloutStrategyViolationTypeTransformer {
public static toJson(__val: CustomRolloutStrategyViolation): any {
    const __data: any = {};
    
  if (__val.strategy !== null && __val.strategy !== undefined) {
    __data['strategy'] = ObjectSerializer.serialize(__val.strategy, 'RolloutStrategy');
  }
  if (__val.violations !== null && __val.violations !== undefined) {
    __data['violations'] = ObjectSerializer.serialize(__val.violations, 'Array<RolloutStrategyViolation>');
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['strategy'] = ObjectSerializer.deserialize(__val['strategy'], 'RolloutStrategy');
    __init['violations'] = ObjectSerializer.deserialize(__val['violations'], 'Array<RolloutStrategyViolation>');

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): CustomRolloutStrategyViolation {
    return new CustomRolloutStrategyViolation(CustomRolloutStrategyViolationTypeTransformer.fromJsonAsAny(__val));
  }
}

export class EnvironmentTypeTransformer {
public static toJson(__val: Environment): any {
    const __data: any = {};
    
  // inherited fields from Audit
  
  if (__val.createdBy !== null && __val.createdBy !== undefined) {
    __data['createdBy'] = ObjectSerializer.serialize(__val.createdBy, 'Person');
  }
  if (__val.updatedBy !== null && __val.updatedBy !== undefined) {
    __data['updatedBy'] = ObjectSerializer.serialize(__val.updatedBy, 'Person');
  }
  if (__val.whenCreated !== null && __val.whenCreated !== undefined) {
    __data['whenCreated'] = ObjectSerializer.serialize(__val.whenCreated, 'date-time');
  }
  if (__val.whenUpdated !== null && __val.whenUpdated !== undefined) {
    __data['whenUpdated'] = ObjectSerializer.serialize(__val.whenUpdated, 'date-time');
  }

  // inherited fields from EnvironmentAllOf
  
  if (__val.id !== null && __val.id !== undefined) {
    __data['id'] = __val.id;
  }
  if (__val.applicationId !== null && __val.applicationId !== undefined) {
    __data['applicationId'] = __val.applicationId;
  }
  if (__val.name !== null && __val.name !== undefined) {
    __data['name'] = __val.name;
  }
  if (__val.priorEnvironmentId !== null && __val.priorEnvironmentId !== undefined) {
    __data['priorEnvironmentId'] = __val.priorEnvironmentId;
  }
  if (__val.version !== null && __val.version !== undefined) {
    __data['version'] = __val.version;
  }
  if (__val.description !== null && __val.description !== undefined) {
    __data['description'] = __val.description;
  }
  if (__val.production !== null && __val.production !== undefined) {
    __data['production'] = __val.production;
  }
  if (__val.groupRoles !== null && __val.groupRoles !== undefined) {
    __data['groupRoles'] = ObjectSerializer.serialize(__val.groupRoles, 'Array<EnvironmentGroupRole>');
  }
  if (__val.features !== null && __val.features !== undefined) {
    __data['features'] = ObjectSerializer.serialize(__val.features, 'Array<Feature>');
  }
  if (__val.environmentInfo !== null && __val.environmentInfo !== undefined) {
    const __p: any = {};
    for(let __prop in __val.environmentInfo) {
    if (__val.environmentInfo.hasOwnProperty(__prop)) {
    __p[ObjectSerializer.serialize(__prop, 'string')] = __val.environmentInfo[__prop];
    }
    __data['environmentInfo'] = __p;
    }
  }
  if (__val.serviceAccountPermission !== null && __val.serviceAccountPermission !== undefined) {
    __data['serviceAccountPermission'] = ObjectSerializer.serialize(__val.serviceAccountPermission, 'Array<ServiceAccountPermission>');
  }
  if (__val.whenArchived !== null && __val.whenArchived !== undefined) {
    __data['whenArchived'] = ObjectSerializer.serialize(__val.whenArchived, 'date-time');
  }


    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
    
  // inherited fields from Audit
      __init['createdBy'] = ObjectSerializer.deserialize(__val['createdBy'], 'Person');
    __init['updatedBy'] = ObjectSerializer.deserialize(__val['updatedBy'], 'Person');
    __init['whenCreated'] = ObjectSerializer.deserialize(__val['whenCreated'], 'date-time');
    __init['whenUpdated'] = ObjectSerializer.deserialize(__val['whenUpdated'], 'date-time');


  // inherited fields from EnvironmentAllOf
      __init['id'] = __val['id'];
    __init['applicationId'] = __val['applicationId'];
    __init['name'] = __val['name'];
    __init['priorEnvironmentId'] = __val['priorEnvironmentId'];
    __init['version'] = __val['version'];
    __init['description'] = __val['description'];
    __init['production'] = __val['production'];
    __init['groupRoles'] = ObjectSerializer.deserialize(__val['groupRoles'], 'Array<EnvironmentGroupRole>');
    __init['features'] = ObjectSerializer.deserialize(__val['features'], 'Array<Feature>');
    __init['serviceAccountPermission'] = ObjectSerializer.deserialize(__val['serviceAccountPermission'], 'Array<ServiceAccountPermission>');
    __init['whenArchived'] = ObjectSerializer.deserialize(__val['whenArchived'], 'date-time');


    
      
  
  // inherited fields from EnvironmentAllOf
    if (__val['environmentInfo']) {
    const __data: any = {};
    const __valData = __val['environmentInfo'];
    for(let __prop in __valData) {
      if (__valData.hasOwnProperty(__prop)) {
        __data[ObjectSerializer.deserialize(__prop, 'string')] = __val[__prop];
      }
    }

    __init['environmentInfo'] = __data;
  }



    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): Environment {
    return new Environment(EnvironmentTypeTransformer.fromJsonAsAny(__val));
  }
}

export class EnvironmentAllOfTypeTransformer {
public static toJson(__val: EnvironmentAllOf): any {
    const __data: any = {};
    
  if (__val.id !== null && __val.id !== undefined) {
    __data['id'] = __val.id;
  }
  if (__val.applicationId !== null && __val.applicationId !== undefined) {
    __data['applicationId'] = __val.applicationId;
  }
  if (__val.name !== null && __val.name !== undefined) {
    __data['name'] = __val.name;
  }
  if (__val.priorEnvironmentId !== null && __val.priorEnvironmentId !== undefined) {
    __data['priorEnvironmentId'] = __val.priorEnvironmentId;
  }
  if (__val.version !== null && __val.version !== undefined) {
    __data['version'] = __val.version;
  }
  if (__val.description !== null && __val.description !== undefined) {
    __data['description'] = __val.description;
  }
  if (__val.production !== null && __val.production !== undefined) {
    __data['production'] = __val.production;
  }
  if (__val.groupRoles !== null && __val.groupRoles !== undefined) {
    __data['groupRoles'] = ObjectSerializer.serialize(__val.groupRoles, 'Array<EnvironmentGroupRole>');
  }
  if (__val.features !== null && __val.features !== undefined) {
    __data['features'] = ObjectSerializer.serialize(__val.features, 'Array<Feature>');
  }
  if (__val.environmentInfo !== null && __val.environmentInfo !== undefined) {
    const __p: any = {};
    for(let __prop in __val.environmentInfo) {
    if (__val.environmentInfo.hasOwnProperty(__prop)) {
    __p[ObjectSerializer.serialize(__prop, 'string')] = __val.environmentInfo[__prop];
    }
    __data['environmentInfo'] = __p;
    }
  }
  if (__val.serviceAccountPermission !== null && __val.serviceAccountPermission !== undefined) {
    __data['serviceAccountPermission'] = ObjectSerializer.serialize(__val.serviceAccountPermission, 'Array<ServiceAccountPermission>');
  }
  if (__val.whenArchived !== null && __val.whenArchived !== undefined) {
    __data['whenArchived'] = ObjectSerializer.serialize(__val.whenArchived, 'date-time');
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['id'] = __val['id'];
    __init['applicationId'] = __val['applicationId'];
    __init['name'] = __val['name'];
    __init['priorEnvironmentId'] = __val['priorEnvironmentId'];
    __init['version'] = __val['version'];
    __init['description'] = __val['description'];
    __init['production'] = __val['production'];
    __init['groupRoles'] = ObjectSerializer.deserialize(__val['groupRoles'], 'Array<EnvironmentGroupRole>');
    __init['features'] = ObjectSerializer.deserialize(__val['features'], 'Array<Feature>');
    __init['serviceAccountPermission'] = ObjectSerializer.deserialize(__val['serviceAccountPermission'], 'Array<ServiceAccountPermission>');
    __init['whenArchived'] = ObjectSerializer.deserialize(__val['whenArchived'], 'date-time');

    
      if (__val['environmentInfo']) {
    const __data: any = {};
    const __valData = __val['environmentInfo'];
    for(let __prop in __valData) {
      if (__valData.hasOwnProperty(__prop)) {
        __data[ObjectSerializer.deserialize(__prop, 'string')] = __val[__prop];
      }
    }

    __init['environmentInfo'] = __data;
  }


    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): EnvironmentAllOf {
    return new EnvironmentAllOf(EnvironmentAllOfTypeTransformer.fromJsonAsAny(__val));
  }
}

export class EnvironmentFeatureValuesTypeTransformer {
public static toJson(__val: EnvironmentFeatureValues): any {
    const __data: any = {};
    
  if (__val.environmentId !== null && __val.environmentId !== undefined) {
    __data['environmentId'] = __val.environmentId;
  }
  if (__val.environmentName !== null && __val.environmentName !== undefined) {
    __data['environmentName'] = __val.environmentName;
  }
  if (__val.priorEnvironmentId !== null && __val.priorEnvironmentId !== undefined) {
    __data['priorEnvironmentId'] = __val.priorEnvironmentId;
  }
  if (__val.features !== null && __val.features !== undefined) {
    __data['features'] = ObjectSerializer.serialize(__val.features, 'Array<FeatureValue>');
  }
  if (__val.roles !== null && __val.roles !== undefined) {
    __data['roles'] = ObjectSerializer.serialize(__val.roles, 'Array<RoleType>');
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['environmentId'] = __val['environmentId'];
    __init['environmentName'] = __val['environmentName'];
    __init['priorEnvironmentId'] = __val['priorEnvironmentId'];
    __init['features'] = ObjectSerializer.deserialize(__val['features'], 'Array<FeatureValue>');
    __init['roles'] = ObjectSerializer.deserialize(__val['roles'], 'Array<RoleType>');

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): EnvironmentFeatureValues {
    return new EnvironmentFeatureValues(EnvironmentFeatureValuesTypeTransformer.fromJsonAsAny(__val));
  }
}

export class EnvironmentFeaturesResultTypeTransformer {
public static toJson(__val: EnvironmentFeaturesResult): any {
    const __data: any = {};
    
  if (__val.featureValues !== null && __val.featureValues !== undefined) {
    __data['featureValues'] = ObjectSerializer.serialize(__val.featureValues, 'Array<FeatureValue>');
  }
  if (__val.environments !== null && __val.environments !== undefined) {
    __data['environments'] = ObjectSerializer.serialize(__val.environments, 'Array<Environment>');
  }
  if (__val.applications !== null && __val.applications !== undefined) {
    __data['applications'] = ObjectSerializer.serialize(__val.applications, 'Array<Application>');
  }
  if (__val.features !== null && __val.features !== undefined) {
    __data['features'] = ObjectSerializer.serialize(__val.features, 'Array<Feature>');
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['featureValues'] = ObjectSerializer.deserialize(__val['featureValues'], 'Array<FeatureValue>');
    __init['environments'] = ObjectSerializer.deserialize(__val['environments'], 'Array<Environment>');
    __init['applications'] = ObjectSerializer.deserialize(__val['applications'], 'Array<Application>');
    __init['features'] = ObjectSerializer.deserialize(__val['features'], 'Array<Feature>');

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): EnvironmentFeaturesResult {
    return new EnvironmentFeaturesResult(EnvironmentFeaturesResultTypeTransformer.fromJsonAsAny(__val));
  }
}

export class EnvironmentGroupRoleTypeTransformer {
public static toJson(__val: EnvironmentGroupRole): any {
    const __data: any = {};
    
  if (__val.environmentId !== null && __val.environmentId !== undefined) {
    __data['environmentId'] = __val.environmentId;
  }
  if (__val.groupId !== null && __val.groupId !== undefined) {
    __data['groupId'] = __val.groupId;
  }
  if (__val.roles !== null && __val.roles !== undefined) {
    __data['roles'] = ObjectSerializer.serialize(__val.roles, 'Array<RoleType>');
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['environmentId'] = __val['environmentId'];
    __init['groupId'] = __val['groupId'];
    __init['roles'] = ObjectSerializer.deserialize(__val['roles'], 'Array<RoleType>');

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): EnvironmentGroupRole {
    return new EnvironmentGroupRole(EnvironmentGroupRoleTypeTransformer.fromJsonAsAny(__val));
  }
}

export class EnvironmentSortOrderTypeTransformer {
public static toJson(__val: EnvironmentSortOrder): any {
    return __val?.toString();
  }

  // expect this to be a decoded value
public   static fromJson(__val: any): EnvironmentSortOrder {
    if (__val === null || __val === undefined) return undefined;
    switch (__val.toString()) {
        case 'ASC':
          return EnvironmentSortOrder.Asc;
        case 'DESC':
          return EnvironmentSortOrder.Desc;
        case 'PRIORITY':
          return EnvironmentSortOrder.Priority;
    }

    return undefined;
  }
}

export class FeatureTypeTransformer {
public static toJson(__val: Feature): any {
    const __data: any = {};
    
  if (__val.id !== null && __val.id !== undefined) {
    __data['id'] = __val.id;
  }
  if (__val.key !== null && __val.key !== undefined) {
    __data['key'] = __val.key;
  }
  if (__val.alias !== null && __val.alias !== undefined) {
    __data['alias'] = __val.alias;
  }
  if (__val.link !== null && __val.link !== undefined) {
    __data['link'] = __val.link;
  }
  if (__val.name !== null && __val.name !== undefined) {
    __data['name'] = __val.name;
  }
  if (__val.valueType !== null && __val.valueType !== undefined) {
    __data['valueType'] = ObjectSerializer.serialize(__val.valueType, 'FeatureValueType');
  }
  if (__val.version !== null && __val.version !== undefined) {
    __data['version'] = __val.version;
  }
  if (__val.whenArchived !== null && __val.whenArchived !== undefined) {
    __data['whenArchived'] = ObjectSerializer.serialize(__val.whenArchived, 'date-time');
  }
  if (__val.secret !== null && __val.secret !== undefined) {
    __data['secret'] = __val.secret;
  }
  if (__val.description !== null && __val.description !== undefined) {
    __data['description'] = __val.description;
  }
  if (__val.metaData !== null && __val.metaData !== undefined) {
    __data['metaData'] = __val.metaData;
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['id'] = __val['id'];
    __init['key'] = __val['key'];
    __init['alias'] = __val['alias'];
    __init['link'] = __val['link'];
    __init['name'] = __val['name'];
    __init['valueType'] = ObjectSerializer.deserialize(__val['valueType'], 'FeatureValueType');
    __init['version'] = __val['version'];
    __init['whenArchived'] = ObjectSerializer.deserialize(__val['whenArchived'], 'date-time');
    __init['secret'] = __val['secret'];
    __init['description'] = __val['description'];
    __init['metaData'] = __val['metaData'];

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): Feature {
    return new Feature(FeatureTypeTransformer.fromJsonAsAny(__val));
  }
}

export class FeatureEnvironmentTypeTransformer {
public static toJson(__val: FeatureEnvironment): any {
    const __data: any = {};
    
  if (__val.environment !== null && __val.environment !== undefined) {
    __data['environment'] = ObjectSerializer.serialize(__val.environment, 'Environment');
  }
  if (__val.roles !== null && __val.roles !== undefined) {
    __data['roles'] = ObjectSerializer.serialize(__val.roles, 'Array<RoleType>');
  }
  if (__val.featureValue !== null && __val.featureValue !== undefined) {
    __data['featureValue'] = ObjectSerializer.serialize(__val.featureValue, 'FeatureValue');
  }
  if (__val.serviceAccounts !== null && __val.serviceAccounts !== undefined) {
    __data['serviceAccounts'] = ObjectSerializer.serialize(__val.serviceAccounts, 'Array<ServiceAccount>');
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['environment'] = ObjectSerializer.deserialize(__val['environment'], 'Environment');
    __init['roles'] = ObjectSerializer.deserialize(__val['roles'], 'Array<RoleType>');
    __init['featureValue'] = ObjectSerializer.deserialize(__val['featureValue'], 'FeatureValue');
    __init['serviceAccounts'] = ObjectSerializer.deserialize(__val['serviceAccounts'], 'Array<ServiceAccount>');

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): FeatureEnvironment {
    return new FeatureEnvironment(FeatureEnvironmentTypeTransformer.fromJsonAsAny(__val));
  }
}

export class FeatureValueTypeTransformer {
public static toJson(__val: FeatureValue): any {
    const __data: any = {};
    
  if (__val.id !== null && __val.id !== undefined) {
    __data['id'] = __val.id;
  }
  if (__val.key !== null && __val.key !== undefined) {
    __data['key'] = __val.key;
  }
  if (__val.locked !== null && __val.locked !== undefined) {
    __data['locked'] = __val.locked;
  }
  if (__val.valueString !== null && __val.valueString !== undefined) {
    __data['valueString'] = __val.valueString;
  }
  if (__val.valueNumber !== null && __val.valueNumber !== undefined) {
    __data['valueNumber'] = __val.valueNumber;
  }
  if (__val.valueBoolean !== null && __val.valueBoolean !== undefined) {
    __data['valueBoolean'] = __val.valueBoolean;
  }
  if (__val.valueJson !== null && __val.valueJson !== undefined) {
    __data['valueJson'] = __val.valueJson;
  }
  if (__val.retired !== null && __val.retired !== undefined) {
    __data['retired'] = __val.retired;
  }
  if (__val.rolloutStrategyInstances !== null && __val.rolloutStrategyInstances !== undefined) {
    __data['rolloutStrategyInstances'] = ObjectSerializer.serialize(__val.rolloutStrategyInstances, 'Array<RolloutStrategyInstance>');
  }
  if (__val.rolloutStrategies !== null && __val.rolloutStrategies !== undefined) {
    __data['rolloutStrategies'] = ObjectSerializer.serialize(__val.rolloutStrategies, 'Array<RolloutStrategy>');
  }
  if (__val.sharedRolloutStrategies !== null && __val.sharedRolloutStrategies !== undefined) {
    __data['sharedRolloutStrategies'] = ObjectSerializer.serialize(__val.sharedRolloutStrategies, 'Array<RolloutStrategy>');
  }
  if (__val.environmentId !== null && __val.environmentId !== undefined) {
    __data['environmentId'] = __val.environmentId;
  }
  if (__val.version !== null && __val.version !== undefined) {
    __data['version'] = __val.version;
  }
  if (__val.whoUpdated !== null && __val.whoUpdated !== undefined) {
    __data['whoUpdated'] = ObjectSerializer.serialize(__val.whoUpdated, 'Person');
  }
  if (__val.whenUpdated !== null && __val.whenUpdated !== undefined) {
    __data['whenUpdated'] = ObjectSerializer.serialize(__val.whenUpdated, 'date-time');
  }
  if (__val.whatUpdated !== null && __val.whatUpdated !== undefined) {
    __data['whatUpdated'] = __val.whatUpdated;
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['id'] = __val['id'];
    __init['key'] = __val['key'];
    __init['locked'] = __val['locked'];
    __init['valueString'] = __val['valueString'];
    __init['valueNumber'] = __val['valueNumber'];
    __init['valueBoolean'] = __val['valueBoolean'];
    __init['valueJson'] = __val['valueJson'];
    __init['retired'] = __val['retired'];
    __init['rolloutStrategyInstances'] = ObjectSerializer.deserialize(__val['rolloutStrategyInstances'], 'Array<RolloutStrategyInstance>');
    __init['rolloutStrategies'] = ObjectSerializer.deserialize(__val['rolloutStrategies'], 'Array<RolloutStrategy>');
    __init['sharedRolloutStrategies'] = ObjectSerializer.deserialize(__val['sharedRolloutStrategies'], 'Array<RolloutStrategy>');
    __init['environmentId'] = __val['environmentId'];
    __init['version'] = __val['version'];
    __init['whoUpdated'] = ObjectSerializer.deserialize(__val['whoUpdated'], 'Person');
    __init['whenUpdated'] = ObjectSerializer.deserialize(__val['whenUpdated'], 'date-time');
    __init['whatUpdated'] = __val['whatUpdated'];

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): FeatureValue {
    return new FeatureValue(FeatureValueTypeTransformer.fromJsonAsAny(__val));
  }
}

export class FeatureValueTypeTypeTransformer {
public static toJson(__val: FeatureValueType): any {
    return __val?.toString();
  }

  // expect this to be a decoded value
public   static fromJson(__val: any): FeatureValueType {
    if (__val === null || __val === undefined) return undefined;
    switch (__val.toString()) {
        case 'BOOLEAN':
          return FeatureValueType.Boolean;
        case 'STRING':
          return FeatureValueType.String;
        case 'NUMBER':
          return FeatureValueType.Number;
        case 'JSON':
          return FeatureValueType.Json;
    }

    return undefined;
  }
}

export class GroupTypeTransformer {
public static toJson(__val: Group): any {
    const __data: any = {};
    
  // inherited fields from Audit
  
  if (__val.createdBy !== null && __val.createdBy !== undefined) {
    __data['createdBy'] = ObjectSerializer.serialize(__val.createdBy, 'Person');
  }
  if (__val.updatedBy !== null && __val.updatedBy !== undefined) {
    __data['updatedBy'] = ObjectSerializer.serialize(__val.updatedBy, 'Person');
  }
  if (__val.whenCreated !== null && __val.whenCreated !== undefined) {
    __data['whenCreated'] = ObjectSerializer.serialize(__val.whenCreated, 'date-time');
  }
  if (__val.whenUpdated !== null && __val.whenUpdated !== undefined) {
    __data['whenUpdated'] = ObjectSerializer.serialize(__val.whenUpdated, 'date-time');
  }

  // inherited fields from GroupAllOf
  
  if (__val.id !== null && __val.id !== undefined) {
    __data['id'] = __val.id;
  }
  if (__val.admin !== null && __val.admin !== undefined) {
    __data['admin'] = __val.admin;
  }
  if (__val.portfolioId !== null && __val.portfolioId !== undefined) {
    __data['portfolioId'] = __val.portfolioId;
  }
  if (__val.organizationId !== null && __val.organizationId !== undefined) {
    __data['organizationId'] = __val.organizationId;
  }
  if (__val.version !== null && __val.version !== undefined) {
    __data['version'] = __val.version;
  }
  if (__val.name !== null && __val.name !== undefined) {
    __data['name'] = __val.name;
  }
  if (__val.members !== null && __val.members !== undefined) {
    __data['members'] = ObjectSerializer.serialize(__val.members, 'Array<Person>');
  }
  if (__val.applicationRoles !== null && __val.applicationRoles !== undefined) {
    __data['applicationRoles'] = ObjectSerializer.serialize(__val.applicationRoles, 'Array<ApplicationGroupRole>');
  }
  if (__val.environmentRoles !== null && __val.environmentRoles !== undefined) {
    __data['environmentRoles'] = ObjectSerializer.serialize(__val.environmentRoles, 'Array<EnvironmentGroupRole>');
  }
  if (__val.whenArchived !== null && __val.whenArchived !== undefined) {
    __data['whenArchived'] = ObjectSerializer.serialize(__val.whenArchived, 'date-time');
  }


    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
    
  // inherited fields from Audit
      __init['createdBy'] = ObjectSerializer.deserialize(__val['createdBy'], 'Person');
    __init['updatedBy'] = ObjectSerializer.deserialize(__val['updatedBy'], 'Person');
    __init['whenCreated'] = ObjectSerializer.deserialize(__val['whenCreated'], 'date-time');
    __init['whenUpdated'] = ObjectSerializer.deserialize(__val['whenUpdated'], 'date-time');


  // inherited fields from GroupAllOf
      __init['id'] = __val['id'];
    __init['admin'] = __val['admin'];
    __init['portfolioId'] = __val['portfolioId'];
    __init['organizationId'] = __val['organizationId'];
    __init['version'] = __val['version'];
    __init['name'] = __val['name'];
    __init['members'] = ObjectSerializer.deserialize(__val['members'], 'Array<Person>');
    __init['applicationRoles'] = ObjectSerializer.deserialize(__val['applicationRoles'], 'Array<ApplicationGroupRole>');
    __init['environmentRoles'] = ObjectSerializer.deserialize(__val['environmentRoles'], 'Array<EnvironmentGroupRole>');
    __init['whenArchived'] = ObjectSerializer.deserialize(__val['whenArchived'], 'date-time');


    
      
  
  
  


    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): Group {
    return new Group(GroupTypeTransformer.fromJsonAsAny(__val));
  }
}

export class GroupAllOfTypeTransformer {
public static toJson(__val: GroupAllOf): any {
    const __data: any = {};
    
  if (__val.id !== null && __val.id !== undefined) {
    __data['id'] = __val.id;
  }
  if (__val.admin !== null && __val.admin !== undefined) {
    __data['admin'] = __val.admin;
  }
  if (__val.portfolioId !== null && __val.portfolioId !== undefined) {
    __data['portfolioId'] = __val.portfolioId;
  }
  if (__val.organizationId !== null && __val.organizationId !== undefined) {
    __data['organizationId'] = __val.organizationId;
  }
  if (__val.version !== null && __val.version !== undefined) {
    __data['version'] = __val.version;
  }
  if (__val.name !== null && __val.name !== undefined) {
    __data['name'] = __val.name;
  }
  if (__val.members !== null && __val.members !== undefined) {
    __data['members'] = ObjectSerializer.serialize(__val.members, 'Array<Person>');
  }
  if (__val.applicationRoles !== null && __val.applicationRoles !== undefined) {
    __data['applicationRoles'] = ObjectSerializer.serialize(__val.applicationRoles, 'Array<ApplicationGroupRole>');
  }
  if (__val.environmentRoles !== null && __val.environmentRoles !== undefined) {
    __data['environmentRoles'] = ObjectSerializer.serialize(__val.environmentRoles, 'Array<EnvironmentGroupRole>');
  }
  if (__val.whenArchived !== null && __val.whenArchived !== undefined) {
    __data['whenArchived'] = ObjectSerializer.serialize(__val.whenArchived, 'date-time');
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['id'] = __val['id'];
    __init['admin'] = __val['admin'];
    __init['portfolioId'] = __val['portfolioId'];
    __init['organizationId'] = __val['organizationId'];
    __init['version'] = __val['version'];
    __init['name'] = __val['name'];
    __init['members'] = ObjectSerializer.deserialize(__val['members'], 'Array<Person>');
    __init['applicationRoles'] = ObjectSerializer.deserialize(__val['applicationRoles'], 'Array<ApplicationGroupRole>');
    __init['environmentRoles'] = ObjectSerializer.deserialize(__val['environmentRoles'], 'Array<EnvironmentGroupRole>');
    __init['whenArchived'] = ObjectSerializer.deserialize(__val['whenArchived'], 'date-time');

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): GroupAllOf {
    return new GroupAllOf(GroupAllOfTypeTransformer.fromJsonAsAny(__val));
  }
}

export class HiddenEnvironmentsTypeTransformer {
public static toJson(__val: HiddenEnvironments): any {
    const __data: any = {};
    
  if (__val.environmentIds !== null && __val.environmentIds !== undefined) {
    __data['environmentIds'] = __val.environmentIds;
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['environmentIds'] = __val['environmentIds'];

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): HiddenEnvironments {
    return new HiddenEnvironments(HiddenEnvironmentsTypeTransformer.fromJsonAsAny(__val));
  }
}

export class IdentityProviderInfoTypeTransformer {
public static toJson(__val: IdentityProviderInfo): any {
    const __data: any = {};
    
  if (__val.buttonIcon !== null && __val.buttonIcon !== undefined) {
    __data['buttonIcon'] = __val.buttonIcon;
  }
  if (__val.buttonBackgroundColor !== null && __val.buttonBackgroundColor !== undefined) {
    __data['buttonBackgroundColor'] = __val.buttonBackgroundColor;
  }
  if (__val.buttonText !== null && __val.buttonText !== undefined) {
    __data['buttonText'] = __val.buttonText;
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['buttonIcon'] = __val['buttonIcon'];
    __init['buttonBackgroundColor'] = __val['buttonBackgroundColor'];
    __init['buttonText'] = __val['buttonText'];

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): IdentityProviderInfo {
    return new IdentityProviderInfo(IdentityProviderInfoTypeTransformer.fromJsonAsAny(__val));
  }
}

export class OrganizationTypeTransformer {
public static toJson(__val: Organization): any {
    const __data: any = {};
    
  // inherited fields from Audit
  
  if (__val.createdBy !== null && __val.createdBy !== undefined) {
    __data['createdBy'] = ObjectSerializer.serialize(__val.createdBy, 'Person');
  }
  if (__val.updatedBy !== null && __val.updatedBy !== undefined) {
    __data['updatedBy'] = ObjectSerializer.serialize(__val.updatedBy, 'Person');
  }
  if (__val.whenCreated !== null && __val.whenCreated !== undefined) {
    __data['whenCreated'] = ObjectSerializer.serialize(__val.whenCreated, 'date-time');
  }
  if (__val.whenUpdated !== null && __val.whenUpdated !== undefined) {
    __data['whenUpdated'] = ObjectSerializer.serialize(__val.whenUpdated, 'date-time');
  }

  // inherited fields from OrganizationAllOf
  
  if (__val.id !== null && __val.id !== undefined) {
    __data['id'] = __val.id;
  }
  if (__val.version !== null && __val.version !== undefined) {
    __data['version'] = __val.version;
  }
  if (__val.name !== null && __val.name !== undefined) {
    __data['name'] = __val.name;
  }
  if (__val.admin !== null && __val.admin !== undefined) {
    __data['admin'] = __val.admin;
  }
  if (__val.authorizationUrl !== null && __val.authorizationUrl !== undefined) {
    __data['authorizationUrl'] = __val.authorizationUrl;
  }
  if (__val.orgGroup !== null && __val.orgGroup !== undefined) {
    __data['orgGroup'] = ObjectSerializer.serialize(__val.orgGroup, 'Group');
  }
  if (__val.portfolios !== null && __val.portfolios !== undefined) {
    __data['portfolios'] = ObjectSerializer.serialize(__val.portfolios, 'Array<Portfolio>');
  }
  if (__val.whenArchived !== null && __val.whenArchived !== undefined) {
    __data['whenArchived'] = ObjectSerializer.serialize(__val.whenArchived, 'date-time');
  }


    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
    
  // inherited fields from Audit
      __init['createdBy'] = ObjectSerializer.deserialize(__val['createdBy'], 'Person');
    __init['updatedBy'] = ObjectSerializer.deserialize(__val['updatedBy'], 'Person');
    __init['whenCreated'] = ObjectSerializer.deserialize(__val['whenCreated'], 'date-time');
    __init['whenUpdated'] = ObjectSerializer.deserialize(__val['whenUpdated'], 'date-time');


  // inherited fields from OrganizationAllOf
      __init['id'] = __val['id'];
    __init['version'] = __val['version'];
    __init['name'] = __val['name'];
    __init['admin'] = __val['admin'];
    __init['authorizationUrl'] = __val['authorizationUrl'];
    __init['orgGroup'] = ObjectSerializer.deserialize(__val['orgGroup'], 'Group');
    __init['portfolios'] = ObjectSerializer.deserialize(__val['portfolios'], 'Array<Portfolio>');
    __init['whenArchived'] = ObjectSerializer.deserialize(__val['whenArchived'], 'date-time');


    
      
  
  
  


    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): Organization {
    return new Organization(OrganizationTypeTransformer.fromJsonAsAny(__val));
  }
}

export class OrganizationAllOfTypeTransformer {
public static toJson(__val: OrganizationAllOf): any {
    const __data: any = {};
    
  if (__val.id !== null && __val.id !== undefined) {
    __data['id'] = __val.id;
  }
  if (__val.version !== null && __val.version !== undefined) {
    __data['version'] = __val.version;
  }
  if (__val.name !== null && __val.name !== undefined) {
    __data['name'] = __val.name;
  }
  if (__val.admin !== null && __val.admin !== undefined) {
    __data['admin'] = __val.admin;
  }
  if (__val.authorizationUrl !== null && __val.authorizationUrl !== undefined) {
    __data['authorizationUrl'] = __val.authorizationUrl;
  }
  if (__val.orgGroup !== null && __val.orgGroup !== undefined) {
    __data['orgGroup'] = ObjectSerializer.serialize(__val.orgGroup, 'Group');
  }
  if (__val.portfolios !== null && __val.portfolios !== undefined) {
    __data['portfolios'] = ObjectSerializer.serialize(__val.portfolios, 'Array<Portfolio>');
  }
  if (__val.whenArchived !== null && __val.whenArchived !== undefined) {
    __data['whenArchived'] = ObjectSerializer.serialize(__val.whenArchived, 'date-time');
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['id'] = __val['id'];
    __init['version'] = __val['version'];
    __init['name'] = __val['name'];
    __init['admin'] = __val['admin'];
    __init['authorizationUrl'] = __val['authorizationUrl'];
    __init['orgGroup'] = ObjectSerializer.deserialize(__val['orgGroup'], 'Group');
    __init['portfolios'] = ObjectSerializer.deserialize(__val['portfolios'], 'Array<Portfolio>');
    __init['whenArchived'] = ObjectSerializer.deserialize(__val['whenArchived'], 'date-time');

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): OrganizationAllOf {
    return new OrganizationAllOf(OrganizationAllOfTypeTransformer.fromJsonAsAny(__val));
  }
}

export class OutstandingRegistrationTypeTransformer {
public static toJson(__val: OutstandingRegistration): any {
    const __data: any = {};
    
  if (__val.id !== null && __val.id !== undefined) {
    __data['id'] = __val.id;
  }
  if (__val.token !== null && __val.token !== undefined) {
    __data['token'] = __val.token;
  }
  if (__val.expired !== null && __val.expired !== undefined) {
    __data['expired'] = __val.expired;
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['id'] = __val['id'];
    __init['token'] = __val['token'];
    __init['expired'] = __val['expired'];

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): OutstandingRegistration {
    return new OutstandingRegistration(OutstandingRegistrationTypeTransformer.fromJsonAsAny(__val));
  }
}

export class PasswordResetTypeTransformer {
public static toJson(__val: PasswordReset): any {
    const __data: any = {};
    
  if (__val.password !== null && __val.password !== undefined) {
    __data['password'] = __val.password;
  }
  if (__val.reactivate !== null && __val.reactivate !== undefined) {
    __data['reactivate'] = __val.reactivate;
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['password'] = __val['password'];
    __init['reactivate'] = __val['reactivate'];

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): PasswordReset {
    return new PasswordReset(PasswordResetTypeTransformer.fromJsonAsAny(__val));
  }
}

export class PasswordUpdateTypeTransformer {
public static toJson(__val: PasswordUpdate): any {
    const __data: any = {};
    
  if (__val.oldPassword !== null && __val.oldPassword !== undefined) {
    __data['oldPassword'] = __val.oldPassword;
  }
  if (__val.newPassword !== null && __val.newPassword !== undefined) {
    __data['newPassword'] = __val.newPassword;
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['oldPassword'] = __val['oldPassword'];
    __init['newPassword'] = __val['newPassword'];

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): PasswordUpdate {
    return new PasswordUpdate(PasswordUpdateTypeTransformer.fromJsonAsAny(__val));
  }
}

export class PersonTypeTransformer {
public static toJson(__val: Person): any {
    const __data: any = {};
    
  if (__val.id !== null && __val.id !== undefined) {
    __data['id'] = ObjectSerializer.serialize(__val.id, 'PersonId');
  }
  if (__val.name !== null && __val.name !== undefined) {
    __data['name'] = __val.name;
  }
  if (__val.email !== null && __val.email !== undefined) {
    __data['email'] = __val.email;
  }
  if (__val.personType !== null && __val.personType !== undefined) {
    __data['personType'] = ObjectSerializer.serialize(__val.personType, 'PersonType');
  }
  if (__val.other !== null && __val.other !== undefined) {
    __data['other'] = __val.other;
  }
  if (__val.source !== null && __val.source !== undefined) {
    __data['source'] = __val.source;
  }
  if (__val.version !== null && __val.version !== undefined) {
    __data['version'] = __val.version;
  }
  if (__val.passwordRequiresReset !== null && __val.passwordRequiresReset !== undefined) {
    __data['passwordRequiresReset'] = __val.passwordRequiresReset;
  }
  if (__val.groups !== null && __val.groups !== undefined) {
    __data['groups'] = ObjectSerializer.serialize(__val.groups, 'Array<Group>');
  }
  if (__val.whenArchived !== null && __val.whenArchived !== undefined) {
    __data['whenArchived'] = ObjectSerializer.serialize(__val.whenArchived, 'date-time');
  }
  if (__val.whenLastAuthenticated !== null && __val.whenLastAuthenticated !== undefined) {
    __data['whenLastAuthenticated'] = ObjectSerializer.serialize(__val.whenLastAuthenticated, 'date-time');
  }
  if (__val.whenLastSeen !== null && __val.whenLastSeen !== undefined) {
    __data['whenLastSeen'] = ObjectSerializer.serialize(__val.whenLastSeen, 'date-time');
  }
  if (__val.additional !== null && __val.additional !== undefined) {
    __data['additional'] = ObjectSerializer.serialize(__val.additional, 'Array<PersonInfo>');
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['id'] = ObjectSerializer.deserialize(__val['id'], 'PersonId');
    __init['name'] = __val['name'];
    __init['email'] = __val['email'];
    __init['personType'] = ObjectSerializer.deserialize(__val['personType'], 'PersonType');
    __init['other'] = __val['other'];
    __init['source'] = __val['source'];
    __init['version'] = __val['version'];
    __init['passwordRequiresReset'] = __val['passwordRequiresReset'];
    __init['groups'] = ObjectSerializer.deserialize(__val['groups'], 'Array<Group>');
    __init['whenArchived'] = ObjectSerializer.deserialize(__val['whenArchived'], 'date-time');
    __init['whenLastAuthenticated'] = ObjectSerializer.deserialize(__val['whenLastAuthenticated'], 'date-time');
    __init['whenLastSeen'] = ObjectSerializer.deserialize(__val['whenLastSeen'], 'date-time');
    __init['additional'] = ObjectSerializer.deserialize(__val['additional'], 'Array<PersonInfo>');

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): Person {
    return new Person(PersonTypeTransformer.fromJsonAsAny(__val));
  }
}

export class PersonIdTypeTransformer {
public static toJson(__val: PersonId): any {
    const __data: any = {};
    
  if (__val.id !== null && __val.id !== undefined) {
    __data['id'] = __val.id;
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['id'] = __val['id'];

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): PersonId {
    return new PersonId(PersonIdTypeTransformer.fromJsonAsAny(__val));
  }
}

export class PersonInfoTypeTransformer {
public static toJson(__val: PersonInfo): any {
    const __data: any = {};
    
  if (__val.key !== null && __val.key !== undefined) {
    __data['key'] = __val.key;
  }
  if (__val.value !== null && __val.value !== undefined) {
    __data['value'] = __val.value;
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['key'] = __val['key'];
    __init['value'] = __val['value'];

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): PersonInfo {
    return new PersonInfo(PersonInfoTypeTransformer.fromJsonAsAny(__val));
  }
}

export class PersonRegistrationDetailsTypeTransformer {
public static toJson(__val: PersonRegistrationDetails): any {
    const __data: any = {};
    
  if (__val.name !== null && __val.name !== undefined) {
    __data['name'] = __val.name;
  }
  if (__val.email !== null && __val.email !== undefined) {
    __data['email'] = __val.email;
  }
  if (__val.password !== null && __val.password !== undefined) {
    __data['password'] = __val.password;
  }
  if (__val.confirmPassword !== null && __val.confirmPassword !== undefined) {
    __data['confirmPassword'] = __val.confirmPassword;
  }
  if (__val.registrationToken !== null && __val.registrationToken !== undefined) {
    __data['registrationToken'] = __val.registrationToken;
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['name'] = __val['name'];
    __init['email'] = __val['email'];
    __init['password'] = __val['password'];
    __init['confirmPassword'] = __val['confirmPassword'];
    __init['registrationToken'] = __val['registrationToken'];

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): PersonRegistrationDetails {
    return new PersonRegistrationDetails(PersonRegistrationDetailsTypeTransformer.fromJsonAsAny(__val));
  }
}

export class PersonTypeTypeTransformer {
public static toJson(__val: PersonType): any {
    return __val?.toString();
  }

  // expect this to be a decoded value
public   static fromJson(__val: any): PersonType {
    if (__val === null || __val === undefined) return undefined;
    switch (__val.toString()) {
        case 'person':
          return PersonType.Person;
        case 'serviceAccount':
          return PersonType.ServiceAccount;
    }

    return undefined;
  }
}

export class PortfolioTypeTransformer {
public static toJson(__val: Portfolio): any {
    const __data: any = {};
    
  // inherited fields from Audit
  
  if (__val.createdBy !== null && __val.createdBy !== undefined) {
    __data['createdBy'] = ObjectSerializer.serialize(__val.createdBy, 'Person');
  }
  if (__val.updatedBy !== null && __val.updatedBy !== undefined) {
    __data['updatedBy'] = ObjectSerializer.serialize(__val.updatedBy, 'Person');
  }
  if (__val.whenCreated !== null && __val.whenCreated !== undefined) {
    __data['whenCreated'] = ObjectSerializer.serialize(__val.whenCreated, 'date-time');
  }
  if (__val.whenUpdated !== null && __val.whenUpdated !== undefined) {
    __data['whenUpdated'] = ObjectSerializer.serialize(__val.whenUpdated, 'date-time');
  }

  // inherited fields from PortfolioAllOf
  
  if (__val.id !== null && __val.id !== undefined) {
    __data['id'] = __val.id;
  }
  if (__val.name !== null && __val.name !== undefined) {
    __data['name'] = __val.name;
  }
  if (__val.description !== null && __val.description !== undefined) {
    __data['description'] = __val.description;
  }
  if (__val.version !== null && __val.version !== undefined) {
    __data['version'] = __val.version;
  }
  if (__val.organizationId !== null && __val.organizationId !== undefined) {
    __data['organizationId'] = __val.organizationId;
  }
  if (__val.groups !== null && __val.groups !== undefined) {
    __data['groups'] = ObjectSerializer.serialize(__val.groups, 'Array<Group>');
  }
  if (__val.applications !== null && __val.applications !== undefined) {
    __data['applications'] = ObjectSerializer.serialize(__val.applications, 'Array<Application>');
  }
  if (__val.whenArchived !== null && __val.whenArchived !== undefined) {
    __data['whenArchived'] = ObjectSerializer.serialize(__val.whenArchived, 'date-time');
  }


    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
    
  // inherited fields from Audit
      __init['createdBy'] = ObjectSerializer.deserialize(__val['createdBy'], 'Person');
    __init['updatedBy'] = ObjectSerializer.deserialize(__val['updatedBy'], 'Person');
    __init['whenCreated'] = ObjectSerializer.deserialize(__val['whenCreated'], 'date-time');
    __init['whenUpdated'] = ObjectSerializer.deserialize(__val['whenUpdated'], 'date-time');


  // inherited fields from PortfolioAllOf
      __init['id'] = __val['id'];
    __init['name'] = __val['name'];
    __init['description'] = __val['description'];
    __init['version'] = __val['version'];
    __init['organizationId'] = __val['organizationId'];
    __init['groups'] = ObjectSerializer.deserialize(__val['groups'], 'Array<Group>');
    __init['applications'] = ObjectSerializer.deserialize(__val['applications'], 'Array<Application>');
    __init['whenArchived'] = ObjectSerializer.deserialize(__val['whenArchived'], 'date-time');


    
      
  
  
  


    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): Portfolio {
    return new Portfolio(PortfolioTypeTransformer.fromJsonAsAny(__val));
  }
}

export class PortfolioAllOfTypeTransformer {
public static toJson(__val: PortfolioAllOf): any {
    const __data: any = {};
    
  if (__val.id !== null && __val.id !== undefined) {
    __data['id'] = __val.id;
  }
  if (__val.name !== null && __val.name !== undefined) {
    __data['name'] = __val.name;
  }
  if (__val.description !== null && __val.description !== undefined) {
    __data['description'] = __val.description;
  }
  if (__val.version !== null && __val.version !== undefined) {
    __data['version'] = __val.version;
  }
  if (__val.organizationId !== null && __val.organizationId !== undefined) {
    __data['organizationId'] = __val.organizationId;
  }
  if (__val.groups !== null && __val.groups !== undefined) {
    __data['groups'] = ObjectSerializer.serialize(__val.groups, 'Array<Group>');
  }
  if (__val.applications !== null && __val.applications !== undefined) {
    __data['applications'] = ObjectSerializer.serialize(__val.applications, 'Array<Application>');
  }
  if (__val.whenArchived !== null && __val.whenArchived !== undefined) {
    __data['whenArchived'] = ObjectSerializer.serialize(__val.whenArchived, 'date-time');
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['id'] = __val['id'];
    __init['name'] = __val['name'];
    __init['description'] = __val['description'];
    __init['version'] = __val['version'];
    __init['organizationId'] = __val['organizationId'];
    __init['groups'] = ObjectSerializer.deserialize(__val['groups'], 'Array<Group>');
    __init['applications'] = ObjectSerializer.deserialize(__val['applications'], 'Array<Application>');
    __init['whenArchived'] = ObjectSerializer.deserialize(__val['whenArchived'], 'date-time');

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): PortfolioAllOf {
    return new PortfolioAllOf(PortfolioAllOfTypeTransformer.fromJsonAsAny(__val));
  }
}

export class ProviderRedirectTypeTransformer {
public static toJson(__val: ProviderRedirect): any {
    const __data: any = {};
    
  if (__val.redirectUrl !== null && __val.redirectUrl !== undefined) {
    __data['redirectUrl'] = __val.redirectUrl;
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['redirectUrl'] = __val['redirectUrl'];

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): ProviderRedirect {
    return new ProviderRedirect(ProviderRedirectTypeTransformer.fromJsonAsAny(__val));
  }
}

export class RegistrationUrlTypeTransformer {
public static toJson(__val: RegistrationUrl): any {
    const __data: any = {};
    
  if (__val.registrationUrl !== null && __val.registrationUrl !== undefined) {
    __data['registrationUrl'] = __val.registrationUrl;
  }
  if (__val.personId !== null && __val.personId !== undefined) {
    __data['personId'] = __val.personId;
  }
  if (__val.token !== null && __val.token !== undefined) {
    __data['token'] = __val.token;
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['registrationUrl'] = __val['registrationUrl'];
    __init['personId'] = __val['personId'];
    __init['token'] = __val['token'];

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): RegistrationUrl {
    return new RegistrationUrl(RegistrationUrlTypeTransformer.fromJsonAsAny(__val));
  }
}

export class ResetApiKeyTypeTypeTransformer {
public static toJson(__val: ResetApiKeyType): any {
    return __val?.toString();
  }

  // expect this to be a decoded value
public   static fromJson(__val: any): ResetApiKeyType {
    if (__val === null || __val === undefined) return undefined;
    switch (__val.toString()) {
        case 'client_eval_only':
          return ResetApiKeyType.ClientEvalOnly;
        case 'server_eval_only':
          return ResetApiKeyType.ServerEvalOnly;
    }

    return undefined;
  }
}

export class RoleTypeTypeTransformer {
public static toJson(__val: RoleType): any {
    return __val?.toString();
  }

  // expect this to be a decoded value
public   static fromJson(__val: any): RoleType {
    if (__val === null || __val === undefined) return undefined;
    switch (__val.toString()) {
        case 'READ':
          return RoleType.Read;
        case 'LOCK':
          return RoleType.Lock;
        case 'UNLOCK':
          return RoleType.Unlock;
        case 'CHANGE_VALUE':
          return RoleType.ChangeValue;
    }

    return undefined;
  }
}

export class RolloutStrategyTypeTransformer {
public static toJson(__val: RolloutStrategy): any {
    const __data: any = {};
    
  // inherited fields from BaseRolloutStrategy
  
  if (__val.id !== null && __val.id !== undefined) {
    __data['id'] = __val.id;
  }
  if (__val.percentage !== null && __val.percentage !== undefined) {
    __data['percentage'] = __val.percentage;
  }
  if (__val.percentageAttributes !== null && __val.percentageAttributes !== undefined) {
    __data['percentageAttributes'] = __val.percentageAttributes;
  }
  if (__val.value !== null && __val.value !== undefined) {
    __data['value'] = __val.value;
  }
  if (__val.attributes !== null && __val.attributes !== undefined) {
    __data['attributes'] = ObjectSerializer.serialize(__val.attributes, 'Array<BaseRolloutStrategyAttribute>');
  }

  // inherited fields from RolloutStrategyAllOf
  
  if (__val.name !== null && __val.name !== undefined) {
    __data['name'] = __val.name;
  }
  if (__val.colouring !== null && __val.colouring !== undefined) {
    __data['colouring'] = __val.colouring;
  }
  if (__val.avatar !== null && __val.avatar !== undefined) {
    __data['avatar'] = __val.avatar;
  }
  if (__val.attributes !== null && __val.attributes !== undefined) {
    __data['attributes'] = ObjectSerializer.serialize(__val.attributes, 'Array<RolloutStrategyAttribute>');
  }


    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
    
  // inherited fields from BaseRolloutStrategy
      __init['id'] = __val['id'];
    __init['percentage'] = __val['percentage'];
    __init['percentageAttributes'] = __val['percentageAttributes'];
    __init['value'] = __val['value'];
    __init['attributes'] = ObjectSerializer.deserialize(__val['attributes'], 'Array<BaseRolloutStrategyAttribute>');


  // inherited fields from RolloutStrategyAllOf
      __init['name'] = __val['name'];
    __init['colouring'] = __val['colouring'];
    __init['avatar'] = __val['avatar'];
    __init['attributes'] = ObjectSerializer.deserialize(__val['attributes'], 'Array<RolloutStrategyAttribute>');


    
      
  
  
  


    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): RolloutStrategy {
    return new RolloutStrategy(RolloutStrategyTypeTransformer.fromJsonAsAny(__val));
  }
}

export class RolloutStrategyAllOfTypeTransformer {
public static toJson(__val: RolloutStrategyAllOf): any {
    const __data: any = {};
    
  if (__val.name !== null && __val.name !== undefined) {
    __data['name'] = __val.name;
  }
  if (__val.colouring !== null && __val.colouring !== undefined) {
    __data['colouring'] = __val.colouring;
  }
  if (__val.avatar !== null && __val.avatar !== undefined) {
    __data['avatar'] = __val.avatar;
  }
  if (__val.attributes !== null && __val.attributes !== undefined) {
    __data['attributes'] = ObjectSerializer.serialize(__val.attributes, 'Array<RolloutStrategyAttribute>');
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['name'] = __val['name'];
    __init['colouring'] = __val['colouring'];
    __init['avatar'] = __val['avatar'];
    __init['attributes'] = ObjectSerializer.deserialize(__val['attributes'], 'Array<RolloutStrategyAttribute>');

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): RolloutStrategyAllOf {
    return new RolloutStrategyAllOf(RolloutStrategyAllOfTypeTransformer.fromJsonAsAny(__val));
  }
}

export class RolloutStrategyAttributeTypeTransformer {
public static toJson(__val: RolloutStrategyAttribute): any {
    const __data: any = {};
    
  // inherited fields from BaseRolloutStrategyAttribute
  
  if (__val.conditional !== null && __val.conditional !== undefined) {
    __data['conditional'] = ObjectSerializer.serialize(__val.conditional, 'RolloutStrategyAttributeConditional');
  }
  if (__val.fieldName !== null && __val.fieldName !== undefined) {
    __data['fieldName'] = __val.fieldName;
  }
  if (__val.values !== null && __val.values !== undefined) {
    __data['values'] = __val.values;
  }
  if (__val.type !== null && __val.type !== undefined) {
    __data['type'] = ObjectSerializer.serialize(__val.type, 'RolloutStrategyFieldType');
  }

  // inherited fields from RolloutStrategyAttributeAllOf
  
  if (__val.id !== null && __val.id !== undefined) {
    __data['id'] = __val.id;
  }


    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
    
  // inherited fields from BaseRolloutStrategyAttribute
      __init['conditional'] = ObjectSerializer.deserialize(__val['conditional'], 'RolloutStrategyAttributeConditional');
    __init['fieldName'] = __val['fieldName'];
    __init['values'] = __val['values'];
    __init['type'] = ObjectSerializer.deserialize(__val['type'], 'RolloutStrategyFieldType');


  // inherited fields from RolloutStrategyAttributeAllOf
      __init['id'] = __val['id'];


    
      
  
  
  


    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): RolloutStrategyAttribute {
    return new RolloutStrategyAttribute(RolloutStrategyAttributeTypeTransformer.fromJsonAsAny(__val));
  }
}

export class RolloutStrategyAttributeAllOfTypeTransformer {
public static toJson(__val: RolloutStrategyAttributeAllOf): any {
    const __data: any = {};
    
  if (__val.id !== null && __val.id !== undefined) {
    __data['id'] = __val.id;
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['id'] = __val['id'];

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): RolloutStrategyAttributeAllOf {
    return new RolloutStrategyAttributeAllOf(RolloutStrategyAttributeAllOfTypeTransformer.fromJsonAsAny(__val));
  }
}

export class RolloutStrategyAttributeConditionalTypeTransformer {
public static toJson(__val: RolloutStrategyAttributeConditional): any {
    return __val?.toString();
  }

  // expect this to be a decoded value
public   static fromJson(__val: any): RolloutStrategyAttributeConditional {
    if (__val === null || __val === undefined) return undefined;
    switch (__val.toString()) {
        case 'EQUALS':
          return RolloutStrategyAttributeConditional.Equals;
        case 'ENDS_WITH':
          return RolloutStrategyAttributeConditional.EndsWith;
        case 'STARTS_WITH':
          return RolloutStrategyAttributeConditional.StartsWith;
        case 'GREATER':
          return RolloutStrategyAttributeConditional.Greater;
        case 'GREATER_EQUALS':
          return RolloutStrategyAttributeConditional.GreaterEquals;
        case 'LESS':
          return RolloutStrategyAttributeConditional.Less;
        case 'LESS_EQUALS':
          return RolloutStrategyAttributeConditional.LessEquals;
        case 'NOT_EQUALS':
          return RolloutStrategyAttributeConditional.NotEquals;
        case 'INCLUDES':
          return RolloutStrategyAttributeConditional.Includes;
        case 'EXCLUDES':
          return RolloutStrategyAttributeConditional.Excludes;
        case 'REGEX':
          return RolloutStrategyAttributeConditional.Regex;
    }

    return undefined;
  }
}

export class RolloutStrategyCollectionViolationTypeTypeTransformer {
public static toJson(__val: RolloutStrategyCollectionViolationType): any {
    return __val?.toString();
  }

  // expect this to be a decoded value
public   static fromJson(__val: any): RolloutStrategyCollectionViolationType {
    if (__val === null || __val === undefined) return undefined;
    switch (__val.toString()) {
        case 'percentage_adds_over_100_percent':
          return RolloutStrategyCollectionViolationType.PercentageAddsOver100Percent;
        case 'boolean_has_no_value':
          return RolloutStrategyCollectionViolationType.BooleanHasNoValue;
    }

    return undefined;
  }
}

export class RolloutStrategyFieldTypeTypeTransformer {
public static toJson(__val: RolloutStrategyFieldType): any {
    return __val?.toString();
  }

  // expect this to be a decoded value
public   static fromJson(__val: any): RolloutStrategyFieldType {
    if (__val === null || __val === undefined) return undefined;
    switch (__val.toString()) {
        case 'STRING':
          return RolloutStrategyFieldType.String;
        case 'SEMANTIC_VERSION':
          return RolloutStrategyFieldType.SemanticVersion;
        case 'NUMBER':
          return RolloutStrategyFieldType.Number;
        case 'DATE':
          return RolloutStrategyFieldType.Date;
        case 'DATETIME':
          return RolloutStrategyFieldType.Datetime;
        case 'BOOLEAN':
          return RolloutStrategyFieldType.Boolean;
        case 'IP_ADDRESS':
          return RolloutStrategyFieldType.IpAddress;
    }

    return undefined;
  }
}

export class RolloutStrategyInfoTypeTransformer {
public static toJson(__val: RolloutStrategyInfo): any {
    const __data: any = {};
    
  if (__val.rolloutStrategy !== null && __val.rolloutStrategy !== undefined) {
    __data['rolloutStrategy'] = ObjectSerializer.serialize(__val.rolloutStrategy, 'RolloutStrategy');
  }
  if (__val.whenArchived !== null && __val.whenArchived !== undefined) {
    __data['whenArchived'] = ObjectSerializer.serialize(__val.whenArchived, 'date-time');
  }
  if (__val.changedBy !== null && __val.changedBy !== undefined) {
    __data['changedBy'] = ObjectSerializer.serialize(__val.changedBy, 'Person');
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['rolloutStrategy'] = ObjectSerializer.deserialize(__val['rolloutStrategy'], 'RolloutStrategy');
    __init['whenArchived'] = ObjectSerializer.deserialize(__val['whenArchived'], 'date-time');
    __init['changedBy'] = ObjectSerializer.deserialize(__val['changedBy'], 'Person');

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): RolloutStrategyInfo {
    return new RolloutStrategyInfo(RolloutStrategyInfoTypeTransformer.fromJsonAsAny(__val));
  }
}

export class RolloutStrategyInstanceTypeTransformer {
public static toJson(__val: RolloutStrategyInstance): any {
    const __data: any = {};
    
  if (__val.name !== null && __val.name !== undefined) {
    __data['name'] = __val.name;
  }
  if (__val.strategyId !== null && __val.strategyId !== undefined) {
    __data['strategyId'] = __val.strategyId;
  }
  if (__val.value !== null && __val.value !== undefined) {
    __data['value'] = __val.value;
  }
  if (__val.disabled !== null && __val.disabled !== undefined) {
    __data['disabled'] = __val.disabled;
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['name'] = __val['name'];
    __init['strategyId'] = __val['strategyId'];
    __init['value'] = __val['value'];
    __init['disabled'] = __val['disabled'];

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): RolloutStrategyInstance {
    return new RolloutStrategyInstance(RolloutStrategyInstanceTypeTransformer.fromJsonAsAny(__val));
  }
}

export class RolloutStrategyValidationRequestTypeTransformer {
public static toJson(__val: RolloutStrategyValidationRequest): any {
    const __data: any = {};
    
  if (__val.customStrategies !== null && __val.customStrategies !== undefined) {
    __data['customStrategies'] = ObjectSerializer.serialize(__val.customStrategies, 'Array<RolloutStrategy>');
  }
  if (__val.sharedStrategies !== null && __val.sharedStrategies !== undefined) {
    __data['sharedStrategies'] = ObjectSerializer.serialize(__val.sharedStrategies, 'Array<RolloutStrategyInstance>');
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['customStrategies'] = ObjectSerializer.deserialize(__val['customStrategies'], 'Array<RolloutStrategy>');
    __init['sharedStrategies'] = ObjectSerializer.deserialize(__val['sharedStrategies'], 'Array<RolloutStrategyInstance>');

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): RolloutStrategyValidationRequest {
    return new RolloutStrategyValidationRequest(RolloutStrategyValidationRequestTypeTransformer.fromJsonAsAny(__val));
  }
}

export class RolloutStrategyValidationResponseTypeTransformer {
public static toJson(__val: RolloutStrategyValidationResponse): any {
    const __data: any = {};
    
  if (__val.customStategyViolations !== null && __val.customStategyViolations !== undefined) {
    __data['customStategyViolations'] = ObjectSerializer.serialize(__val.customStategyViolations, 'Array<CustomRolloutStrategyViolation>');
  }
  if (__val.sharedStrategyViolations !== null && __val.sharedStrategyViolations !== undefined) {
    __data['sharedStrategyViolations'] = ObjectSerializer.serialize(__val.sharedStrategyViolations, 'Array<SharedRolloutStrategyViolation>');
  }
  if (__val.violations !== null && __val.violations !== undefined) {
    __data['violations'] = ObjectSerializer.serialize(__val.violations, 'Array<RolloutStrategyCollectionViolationType>');
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['customStategyViolations'] = ObjectSerializer.deserialize(__val['customStategyViolations'], 'Array<CustomRolloutStrategyViolation>');
    __init['sharedStrategyViolations'] = ObjectSerializer.deserialize(__val['sharedStrategyViolations'], 'Array<SharedRolloutStrategyViolation>');
    __init['violations'] = ObjectSerializer.deserialize(__val['violations'], 'Array<RolloutStrategyCollectionViolationType>');

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): RolloutStrategyValidationResponse {
    return new RolloutStrategyValidationResponse(RolloutStrategyValidationResponseTypeTransformer.fromJsonAsAny(__val));
  }
}

export class RolloutStrategyViolationTypeTransformer {
public static toJson(__val: RolloutStrategyViolation): any {
    const __data: any = {};
    
  if (__val.id !== null && __val.id !== undefined) {
    __data['id'] = __val.id;
  }
  if (__val.violation !== null && __val.violation !== undefined) {
    __data['violation'] = ObjectSerializer.serialize(__val.violation, 'RolloutStrategyViolationType');
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['id'] = __val['id'];
    __init['violation'] = ObjectSerializer.deserialize(__val['violation'], 'RolloutStrategyViolationType');

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): RolloutStrategyViolation {
    return new RolloutStrategyViolation(RolloutStrategyViolationTypeTransformer.fromJsonAsAny(__val));
  }
}

export class RolloutStrategyViolationTypeTypeTransformer {
public static toJson(__val: RolloutStrategyViolationType): any {
    return __val?.toString();
  }

  // expect this to be a decoded value
public   static fromJson(__val: any): RolloutStrategyViolationType {
    if (__val === null || __val === undefined) return undefined;
    switch (__val.toString()) {
        case 'no_name':
          return RolloutStrategyViolationType.NoName;
        case 'name_too_long':
          return RolloutStrategyViolationType.NameTooLong;
        case 'empty_match_criteria':
          return RolloutStrategyViolationType.EmptyMatchCriteria;
        case 'negative_percentage':
          return RolloutStrategyViolationType.NegativePercentage;
        case 'percentage_over_100_percent':
          return RolloutStrategyViolationType.PercentageOver100Percent;
        case 'array_attribute_no_values':
          return RolloutStrategyViolationType.ArrayAttributeNoValues;
        case 'attr_invalid_well_known_enum':
          return RolloutStrategyViolationType.AttrInvalidWellKnownEnum;
        case 'attr_missing_value':
          return RolloutStrategyViolationType.AttrMissingValue;
        case 'attr_missing_conditional':
          return RolloutStrategyViolationType.AttrMissingConditional;
        case 'attr_missing_field_name':
          return RolloutStrategyViolationType.AttrMissingFieldName;
        case 'attr_missing_field_type':
          return RolloutStrategyViolationType.AttrMissingFieldType;
        case 'attr_val_not_semantic_version':
          return RolloutStrategyViolationType.AttrValNotSemanticVersion;
        case 'attr_val_not_number':
          return RolloutStrategyViolationType.AttrValNotNumber;
        case 'attr_val_not_date':
          return RolloutStrategyViolationType.AttrValNotDate;
        case 'attr_val_not_date_time':
          return RolloutStrategyViolationType.AttrValNotDateTime;
        case 'attr_val_not_cidr':
          return RolloutStrategyViolationType.AttrValNotCidr;
        case 'attr_unknown_failure':
          return RolloutStrategyViolationType.AttrUnknownFailure;
    }

    return undefined;
  }
}

export class SearchPersonTypeTransformer {
public static toJson(__val: SearchPerson): any {
    const __data: any = {};
    
  if (__val.id !== null && __val.id !== undefined) {
    __data['id'] = __val.id;
  }
  if (__val.name !== null && __val.name !== undefined) {
    __data['name'] = __val.name;
  }
  if (__val.email !== null && __val.email !== undefined) {
    __data['email'] = __val.email;
  }
  if (__val.version !== null && __val.version !== undefined) {
    __data['version'] = __val.version;
  }
  if (__val.personType !== null && __val.personType !== undefined) {
    __data['personType'] = ObjectSerializer.serialize(__val.personType, 'PersonType');
  }
  if (__val.whenLastAuthenticated !== null && __val.whenLastAuthenticated !== undefined) {
    __data['whenLastAuthenticated'] = ObjectSerializer.serialize(__val.whenLastAuthenticated, 'date-time');
  }
  if (__val.whenLastSeen !== null && __val.whenLastSeen !== undefined) {
    __data['whenLastSeen'] = ObjectSerializer.serialize(__val.whenLastSeen, 'date-time');
  }
  if (__val.whenDeactivated !== null && __val.whenDeactivated !== undefined) {
    __data['whenDeactivated'] = ObjectSerializer.serialize(__val.whenDeactivated, 'date-time');
  }
  if (__val.groupCount !== null && __val.groupCount !== undefined) {
    __data['groupCount'] = __val.groupCount;
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['id'] = __val['id'];
    __init['name'] = __val['name'];
    __init['email'] = __val['email'];
    __init['version'] = __val['version'];
    __init['personType'] = ObjectSerializer.deserialize(__val['personType'], 'PersonType');
    __init['whenLastAuthenticated'] = ObjectSerializer.deserialize(__val['whenLastAuthenticated'], 'date-time');
    __init['whenLastSeen'] = ObjectSerializer.deserialize(__val['whenLastSeen'], 'date-time');
    __init['whenDeactivated'] = ObjectSerializer.deserialize(__val['whenDeactivated'], 'date-time');
    __init['groupCount'] = __val['groupCount'];

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): SearchPerson {
    return new SearchPerson(SearchPersonTypeTransformer.fromJsonAsAny(__val));
  }
}

export class SearchPersonResultTypeTransformer {
public static toJson(__val: SearchPersonResult): any {
    const __data: any = {};
    
  if (__val.max !== null && __val.max !== undefined) {
    __data['max'] = __val.max;
  }
  if (__val.people !== null && __val.people !== undefined) {
    __data['people'] = ObjectSerializer.serialize(__val.people, 'Array<Person>');
  }
  if (__val.summarisedPeople !== null && __val.summarisedPeople !== undefined) {
    __data['summarisedPeople'] = ObjectSerializer.serialize(__val.summarisedPeople, 'Array<SearchPerson>');
  }
  if (__val.outstandingRegistrations !== null && __val.outstandingRegistrations !== undefined) {
    __data['outstandingRegistrations'] = ObjectSerializer.serialize(__val.outstandingRegistrations, 'Array<OutstandingRegistration>');
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['max'] = __val['max'];
    __init['people'] = ObjectSerializer.deserialize(__val['people'], 'Array<Person>');
    __init['summarisedPeople'] = ObjectSerializer.deserialize(__val['summarisedPeople'], 'Array<SearchPerson>');
    __init['outstandingRegistrations'] = ObjectSerializer.deserialize(__val['outstandingRegistrations'], 'Array<OutstandingRegistration>');

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): SearchPersonResult {
    return new SearchPersonResult(SearchPersonResultTypeTransformer.fromJsonAsAny(__val));
  }
}

export class SearchPersonSortByTypeTransformer {
public static toJson(__val: SearchPersonSortBy): any {
    return __val?.toString();
  }

  // expect this to be a decoded value
public   static fromJson(__val: any): SearchPersonSortBy {
    if (__val === null || __val === undefined) return undefined;
    switch (__val.toString()) {
        case 'name':
          return SearchPersonSortBy.Name;
        case 'activationStatus':
          return SearchPersonSortBy.ActivationStatus;
    }

    return undefined;
  }
}

export class ServiceAccountTypeTransformer {
public static toJson(__val: ServiceAccount): any {
    const __data: any = {};
    
  if (__val.id !== null && __val.id !== undefined) {
    __data['id'] = __val.id;
  }
  if (__val.name !== null && __val.name !== undefined) {
    __data['name'] = __val.name;
  }
  if (__val.portfolioId !== null && __val.portfolioId !== undefined) {
    __data['portfolioId'] = __val.portfolioId;
  }
  if (__val.description !== null && __val.description !== undefined) {
    __data['description'] = __val.description;
  }
  if (__val.version !== null && __val.version !== undefined) {
    __data['version'] = __val.version;
  }
  if (__val.apiKeyClientSide !== null && __val.apiKeyClientSide !== undefined) {
    __data['apiKeyClientSide'] = __val.apiKeyClientSide;
  }
  if (__val.apiKeyServerSide !== null && __val.apiKeyServerSide !== undefined) {
    __data['apiKeyServerSide'] = __val.apiKeyServerSide;
  }
  if (__val.permissions !== null && __val.permissions !== undefined) {
    __data['permissions'] = ObjectSerializer.serialize(__val.permissions, 'Array<ServiceAccountPermission>');
  }
  if (__val.whenArchived !== null && __val.whenArchived !== undefined) {
    __data['whenArchived'] = ObjectSerializer.serialize(__val.whenArchived, 'date-time');
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['id'] = __val['id'];
    __init['name'] = __val['name'];
    __init['portfolioId'] = __val['portfolioId'];
    __init['description'] = __val['description'];
    __init['version'] = __val['version'];
    __init['apiKeyClientSide'] = __val['apiKeyClientSide'];
    __init['apiKeyServerSide'] = __val['apiKeyServerSide'];
    __init['permissions'] = ObjectSerializer.deserialize(__val['permissions'], 'Array<ServiceAccountPermission>');
    __init['whenArchived'] = ObjectSerializer.deserialize(__val['whenArchived'], 'date-time');

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): ServiceAccount {
    return new ServiceAccount(ServiceAccountTypeTransformer.fromJsonAsAny(__val));
  }
}

export class ServiceAccountPermissionTypeTransformer {
public static toJson(__val: ServiceAccountPermission): any {
    const __data: any = {};
    
  if (__val.id !== null && __val.id !== undefined) {
    __data['id'] = __val.id;
  }
  if (__val.permissions !== null && __val.permissions !== undefined) {
    __data['permissions'] = ObjectSerializer.serialize(__val.permissions, 'Array<RoleType>');
  }
  if (__val.serviceAccount !== null && __val.serviceAccount !== undefined) {
    __data['serviceAccount'] = ObjectSerializer.serialize(__val.serviceAccount, 'ServiceAccount');
  }
  if (__val.environmentId !== null && __val.environmentId !== undefined) {
    __data['environmentId'] = __val.environmentId;
  }
  if (__val.sdkUrlClientEval !== null && __val.sdkUrlClientEval !== undefined) {
    __data['sdkUrlClientEval'] = __val.sdkUrlClientEval;
  }
  if (__val.sdkUrlServerEval !== null && __val.sdkUrlServerEval !== undefined) {
    __data['sdkUrlServerEval'] = __val.sdkUrlServerEval;
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['id'] = __val['id'];
    __init['permissions'] = ObjectSerializer.deserialize(__val['permissions'], 'Array<RoleType>');
    __init['serviceAccount'] = ObjectSerializer.deserialize(__val['serviceAccount'], 'ServiceAccount');
    __init['environmentId'] = __val['environmentId'];
    __init['sdkUrlClientEval'] = __val['sdkUrlClientEval'];
    __init['sdkUrlServerEval'] = __val['sdkUrlServerEval'];

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): ServiceAccountPermission {
    return new ServiceAccountPermission(ServiceAccountPermissionTypeTransformer.fromJsonAsAny(__val));
  }
}

export class SetupMissingResponseTypeTransformer {
public static toJson(__val: SetupMissingResponse): any {
    const __data: any = {};
    
  if (__val.providers !== null && __val.providers !== undefined) {
    __data['providers'] = __val.providers;
  }
  if (__val.providerInfo !== null && __val.providerInfo !== undefined) {
    const __p: any = {};
    for(let __prop in __val.providerInfo) {
    if (__val.providerInfo.hasOwnProperty(__prop)) {
    __p[ObjectSerializer.serialize(__prop, 'string')] = ObjectSerializer.serialize(__val.providerInfo[__prop], 'IdentityProviderInfo');
    }
    __data['providerInfo'] = __p;
    }
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['providers'] = __val['providers'];

    
      if (__val['providerInfo']) {
    const __data: any = {};
    const __valData = __val['providerInfo'];
    for(let __prop in __valData) {
      if (__valData.hasOwnProperty(__prop)) {
        __data[ObjectSerializer.deserialize(__prop, 'string')] = ObjectSerializer.deserialize(__valData[__prop], 'IdentityProviderInfo');
      }
    }

    __init['providerInfo'] = __data;
  }


    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): SetupMissingResponse {
    return new SetupMissingResponse(SetupMissingResponseTypeTransformer.fromJsonAsAny(__val));
  }
}

export class SetupResponseTypeTransformer {
public static toJson(__val: SetupResponse): any {
    const __data: any = {};
    
  if (__val.organization !== null && __val.organization !== undefined) {
    __data['organization'] = ObjectSerializer.serialize(__val.organization, 'Organization');
  }
  if (__val.providers !== null && __val.providers !== undefined) {
    __data['providers'] = __val.providers;
  }
  if (__val.providerInfo !== null && __val.providerInfo !== undefined) {
    const __p: any = {};
    for(let __prop in __val.providerInfo) {
    if (__val.providerInfo.hasOwnProperty(__prop)) {
    __p[ObjectSerializer.serialize(__prop, 'string')] = ObjectSerializer.serialize(__val.providerInfo[__prop], 'IdentityProviderInfo');
    }
    __data['providerInfo'] = __p;
    }
  }
  if (__val.capabilityInfo !== null && __val.capabilityInfo !== undefined) {
    const __p: any = {};
    for(let __prop in __val.capabilityInfo) {
    if (__val.capabilityInfo.hasOwnProperty(__prop)) {
    __p[ObjectSerializer.serialize(__prop, 'string')] = __val.capabilityInfo[__prop];
    }
    __data['capabilityInfo'] = __p;
    }
  }
  if (__val.redirectUrl !== null && __val.redirectUrl !== undefined) {
    __data['redirectUrl'] = __val.redirectUrl;
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['organization'] = ObjectSerializer.deserialize(__val['organization'], 'Organization');
    __init['providers'] = __val['providers'];
    __init['redirectUrl'] = __val['redirectUrl'];

    
      if (__val['providerInfo']) {
    const __data: any = {};
    const __valData = __val['providerInfo'];
    for(let __prop in __valData) {
      if (__valData.hasOwnProperty(__prop)) {
        __data[ObjectSerializer.deserialize(__prop, 'string')] = ObjectSerializer.deserialize(__valData[__prop], 'IdentityProviderInfo');
      }
    }

    __init['providerInfo'] = __data;
  }
  if (__val['capabilityInfo']) {
    const __data: any = {};
    const __valData = __val['capabilityInfo'];
    for(let __prop in __valData) {
      if (__valData.hasOwnProperty(__prop)) {
        __data[ObjectSerializer.deserialize(__prop, 'string')] = __val[__prop];
      }
    }

    __init['capabilityInfo'] = __data;
  }


    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): SetupResponse {
    return new SetupResponse(SetupResponseTypeTransformer.fromJsonAsAny(__val));
  }
}

export class SetupSiteAdminTypeTransformer {
public static toJson(__val: SetupSiteAdmin): any {
    const __data: any = {};
    
  if (__val.portfolio !== null && __val.portfolio !== undefined) {
    __data['portfolio'] = __val.portfolio;
  }
  if (__val.organizationName !== null && __val.organizationName !== undefined) {
    __data['organizationName'] = __val.organizationName;
  }
  if (__val.emailAddress !== null && __val.emailAddress !== undefined) {
    __data['emailAddress'] = __val.emailAddress;
  }
  if (__val.password !== null && __val.password !== undefined) {
    __data['password'] = __val.password;
  }
  if (__val.name !== null && __val.name !== undefined) {
    __data['name'] = __val.name;
  }
  if (__val.authProvider !== null && __val.authProvider !== undefined) {
    __data['authProvider'] = __val.authProvider;
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['portfolio'] = __val['portfolio'];
    __init['organizationName'] = __val['organizationName'];
    __init['emailAddress'] = __val['emailAddress'];
    __init['password'] = __val['password'];
    __init['name'] = __val['name'];
    __init['authProvider'] = __val['authProvider'];

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): SetupSiteAdmin {
    return new SetupSiteAdmin(SetupSiteAdminTypeTransformer.fromJsonAsAny(__val));
  }
}

export class SharedRolloutStrategyViolationTypeTransformer {
public static toJson(__val: SharedRolloutStrategyViolation): any {
    const __data: any = {};
    
  if (__val.strategy !== null && __val.strategy !== undefined) {
    __data['strategy'] = ObjectSerializer.serialize(__val.strategy, 'RolloutStrategyInstance');
  }
  if (__val.violation !== null && __val.violation !== undefined) {
    __data['violation'] = ObjectSerializer.serialize(__val.violation, 'Array<RolloutStrategyViolation>');
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['strategy'] = ObjectSerializer.deserialize(__val['strategy'], 'RolloutStrategyInstance');
    __init['violation'] = ObjectSerializer.deserialize(__val['violation'], 'Array<RolloutStrategyViolation>');

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): SharedRolloutStrategyViolation {
    return new SharedRolloutStrategyViolation(SharedRolloutStrategyViolationTypeTransformer.fromJsonAsAny(__val));
  }
}

export class SortOrderTypeTransformer {
public static toJson(__val: SortOrder): any {
    return __val?.toString();
  }

  // expect this to be a decoded value
public   static fromJson(__val: any): SortOrder {
    if (__val === null || __val === undefined) return undefined;
    switch (__val.toString()) {
        case 'ASC':
          return SortOrder.Asc;
        case 'DESC':
          return SortOrder.Desc;
    }

    return undefined;
  }
}

export class StrategyAttributeCountryNameTypeTransformer {
public static toJson(__val: StrategyAttributeCountryName): any {
    return __val?.toString();
  }

  // expect this to be a decoded value
public   static fromJson(__val: any): StrategyAttributeCountryName {
    if (__val === null || __val === undefined) return undefined;
    switch (__val.toString()) {
        case 'afghanistan':
          return StrategyAttributeCountryName.Afghanistan;
        case 'albania':
          return StrategyAttributeCountryName.Albania;
        case 'algeria':
          return StrategyAttributeCountryName.Algeria;
        case 'andorra':
          return StrategyAttributeCountryName.Andorra;
        case 'angola':
          return StrategyAttributeCountryName.Angola;
        case 'antigua_and_barbuda':
          return StrategyAttributeCountryName.AntiguaAndBarbuda;
        case 'argentina':
          return StrategyAttributeCountryName.Argentina;
        case 'armenia':
          return StrategyAttributeCountryName.Armenia;
        case 'australia':
          return StrategyAttributeCountryName.Australia;
        case 'austria':
          return StrategyAttributeCountryName.Austria;
        case 'azerbaijan':
          return StrategyAttributeCountryName.Azerbaijan;
        case 'the_bahamas':
          return StrategyAttributeCountryName.TheBahamas;
        case 'bahrain':
          return StrategyAttributeCountryName.Bahrain;
        case 'bangladesh':
          return StrategyAttributeCountryName.Bangladesh;
        case 'barbados':
          return StrategyAttributeCountryName.Barbados;
        case 'belarus':
          return StrategyAttributeCountryName.Belarus;
        case 'belgium':
          return StrategyAttributeCountryName.Belgium;
        case 'belize':
          return StrategyAttributeCountryName.Belize;
        case 'benin':
          return StrategyAttributeCountryName.Benin;
        case 'bhutan':
          return StrategyAttributeCountryName.Bhutan;
        case 'bolivia':
          return StrategyAttributeCountryName.Bolivia;
        case 'bosnia_and_herzegovina':
          return StrategyAttributeCountryName.BosniaAndHerzegovina;
        case 'botswana':
          return StrategyAttributeCountryName.Botswana;
        case 'brazil':
          return StrategyAttributeCountryName.Brazil;
        case 'brunei':
          return StrategyAttributeCountryName.Brunei;
        case 'bulgaria':
          return StrategyAttributeCountryName.Bulgaria;
        case 'burkina_faso':
          return StrategyAttributeCountryName.BurkinaFaso;
        case 'burundi':
          return StrategyAttributeCountryName.Burundi;
        case 'cabo_verde':
          return StrategyAttributeCountryName.CaboVerde;
        case 'cambodia':
          return StrategyAttributeCountryName.Cambodia;
        case 'cameroon':
          return StrategyAttributeCountryName.Cameroon;
        case 'canada':
          return StrategyAttributeCountryName.Canada;
        case 'central_african_republic':
          return StrategyAttributeCountryName.CentralAfricanRepublic;
        case 'chad':
          return StrategyAttributeCountryName.Chad;
        case 'chile':
          return StrategyAttributeCountryName.Chile;
        case 'china':
          return StrategyAttributeCountryName.China;
        case 'colombia':
          return StrategyAttributeCountryName.Colombia;
        case 'comoros':
          return StrategyAttributeCountryName.Comoros;
        case 'congo_democratic_republic_of_the':
          return StrategyAttributeCountryName.CongoDemocraticRepublicOfThe;
        case 'congo_republic_of_the':
          return StrategyAttributeCountryName.CongoRepublicOfThe;
        case 'costa_rica':
          return StrategyAttributeCountryName.CostaRica;
        case 'cote_divoire':
          return StrategyAttributeCountryName.CoteDivoire;
        case 'croatia':
          return StrategyAttributeCountryName.Croatia;
        case 'cuba':
          return StrategyAttributeCountryName.Cuba;
        case 'cyprus':
          return StrategyAttributeCountryName.Cyprus;
        case 'czech_republic':
          return StrategyAttributeCountryName.CzechRepublic;
        case 'denmark':
          return StrategyAttributeCountryName.Denmark;
        case 'djibouti':
          return StrategyAttributeCountryName.Djibouti;
        case 'dominica':
          return StrategyAttributeCountryName.Dominica;
        case 'dominican_republic':
          return StrategyAttributeCountryName.DominicanRepublic;
        case 'east_timor':
          return StrategyAttributeCountryName.EastTimor;
        case 'ecuador':
          return StrategyAttributeCountryName.Ecuador;
        case 'egypt':
          return StrategyAttributeCountryName.Egypt;
        case 'el_salvador':
          return StrategyAttributeCountryName.ElSalvador;
        case 'equatorial_guinea':
          return StrategyAttributeCountryName.EquatorialGuinea;
        case 'eritrea':
          return StrategyAttributeCountryName.Eritrea;
        case 'estonia':
          return StrategyAttributeCountryName.Estonia;
        case 'eswatini':
          return StrategyAttributeCountryName.Eswatini;
        case 'ethiopia':
          return StrategyAttributeCountryName.Ethiopia;
        case 'fiji':
          return StrategyAttributeCountryName.Fiji;
        case 'finland':
          return StrategyAttributeCountryName.Finland;
        case 'france':
          return StrategyAttributeCountryName.France;
        case 'gabon':
          return StrategyAttributeCountryName.Gabon;
        case 'the_gambia':
          return StrategyAttributeCountryName.TheGambia;
        case 'georgia':
          return StrategyAttributeCountryName.Georgia;
        case 'germany':
          return StrategyAttributeCountryName.Germany;
        case 'ghana':
          return StrategyAttributeCountryName.Ghana;
        case 'greece':
          return StrategyAttributeCountryName.Greece;
        case 'grenada':
          return StrategyAttributeCountryName.Grenada;
        case 'guatemala':
          return StrategyAttributeCountryName.Guatemala;
        case 'guinea':
          return StrategyAttributeCountryName.Guinea;
        case 'guinea_bissau':
          return StrategyAttributeCountryName.GuineaBissau;
        case 'guyana':
          return StrategyAttributeCountryName.Guyana;
        case 'haiti':
          return StrategyAttributeCountryName.Haiti;
        case 'honduras':
          return StrategyAttributeCountryName.Honduras;
        case 'hungary':
          return StrategyAttributeCountryName.Hungary;
        case 'iceland':
          return StrategyAttributeCountryName.Iceland;
        case 'india':
          return StrategyAttributeCountryName.India;
        case 'indonesia':
          return StrategyAttributeCountryName.Indonesia;
        case 'iran':
          return StrategyAttributeCountryName.Iran;
        case 'iraq':
          return StrategyAttributeCountryName.Iraq;
        case 'ireland':
          return StrategyAttributeCountryName.Ireland;
        case 'israel':
          return StrategyAttributeCountryName.Israel;
        case 'italy':
          return StrategyAttributeCountryName.Italy;
        case 'jamaica':
          return StrategyAttributeCountryName.Jamaica;
        case 'japan':
          return StrategyAttributeCountryName.Japan;
        case 'jordan':
          return StrategyAttributeCountryName.Jordan;
        case 'kazakhstan':
          return StrategyAttributeCountryName.Kazakhstan;
        case 'kenya':
          return StrategyAttributeCountryName.Kenya;
        case 'kiribati':
          return StrategyAttributeCountryName.Kiribati;
        case 'korea_north':
          return StrategyAttributeCountryName.KoreaNorth;
        case 'korea_south':
          return StrategyAttributeCountryName.KoreaSouth;
        case 'kosovo':
          return StrategyAttributeCountryName.Kosovo;
        case 'kuwait':
          return StrategyAttributeCountryName.Kuwait;
        case 'kyrgyzstan':
          return StrategyAttributeCountryName.Kyrgyzstan;
        case 'laos':
          return StrategyAttributeCountryName.Laos;
        case 'latvia':
          return StrategyAttributeCountryName.Latvia;
        case 'lebanon':
          return StrategyAttributeCountryName.Lebanon;
        case 'lesotho':
          return StrategyAttributeCountryName.Lesotho;
        case 'liberia':
          return StrategyAttributeCountryName.Liberia;
        case 'libya':
          return StrategyAttributeCountryName.Libya;
        case 'liechtenstein':
          return StrategyAttributeCountryName.Liechtenstein;
        case 'lithuania':
          return StrategyAttributeCountryName.Lithuania;
        case 'luxembourg':
          return StrategyAttributeCountryName.Luxembourg;
        case 'madagascar':
          return StrategyAttributeCountryName.Madagascar;
        case 'malawi':
          return StrategyAttributeCountryName.Malawi;
        case 'malaysia':
          return StrategyAttributeCountryName.Malaysia;
        case 'maldives':
          return StrategyAttributeCountryName.Maldives;
        case 'mali':
          return StrategyAttributeCountryName.Mali;
        case 'malta':
          return StrategyAttributeCountryName.Malta;
        case 'marshall_islands':
          return StrategyAttributeCountryName.MarshallIslands;
        case 'mauritania':
          return StrategyAttributeCountryName.Mauritania;
        case 'mauritius':
          return StrategyAttributeCountryName.Mauritius;
        case 'mexico':
          return StrategyAttributeCountryName.Mexico;
        case 'micronesia_federated_states_of':
          return StrategyAttributeCountryName.MicronesiaFederatedStatesOf;
        case 'moldova':
          return StrategyAttributeCountryName.Moldova;
        case 'monaco':
          return StrategyAttributeCountryName.Monaco;
        case 'mongolia':
          return StrategyAttributeCountryName.Mongolia;
        case 'montenegro':
          return StrategyAttributeCountryName.Montenegro;
        case 'morocco':
          return StrategyAttributeCountryName.Morocco;
        case 'mozambique':
          return StrategyAttributeCountryName.Mozambique;
        case 'myanmar':
          return StrategyAttributeCountryName.Myanmar;
        case 'namibia':
          return StrategyAttributeCountryName.Namibia;
        case 'nauru':
          return StrategyAttributeCountryName.Nauru;
        case 'nepal':
          return StrategyAttributeCountryName.Nepal;
        case 'netherlands':
          return StrategyAttributeCountryName.Netherlands;
        case 'new_zealand':
          return StrategyAttributeCountryName.NewZealand;
        case 'nicaragua':
          return StrategyAttributeCountryName.Nicaragua;
        case 'niger':
          return StrategyAttributeCountryName.Niger;
        case 'nigeria':
          return StrategyAttributeCountryName.Nigeria;
        case 'north_macedonia':
          return StrategyAttributeCountryName.NorthMacedonia;
        case 'norway':
          return StrategyAttributeCountryName.Norway;
        case 'oman':
          return StrategyAttributeCountryName.Oman;
        case 'pakistan':
          return StrategyAttributeCountryName.Pakistan;
        case 'palau':
          return StrategyAttributeCountryName.Palau;
        case 'panama':
          return StrategyAttributeCountryName.Panama;
        case 'papua_new_guinea':
          return StrategyAttributeCountryName.PapuaNewGuinea;
        case 'paraguay':
          return StrategyAttributeCountryName.Paraguay;
        case 'peru':
          return StrategyAttributeCountryName.Peru;
        case 'philippines':
          return StrategyAttributeCountryName.Philippines;
        case 'poland':
          return StrategyAttributeCountryName.Poland;
        case 'portugal':
          return StrategyAttributeCountryName.Portugal;
        case 'qatar':
          return StrategyAttributeCountryName.Qatar;
        case 'romania':
          return StrategyAttributeCountryName.Romania;
        case 'russia':
          return StrategyAttributeCountryName.Russia;
        case 'rwanda':
          return StrategyAttributeCountryName.Rwanda;
        case 'saint_kitts_and_nevis':
          return StrategyAttributeCountryName.SaintKittsAndNevis;
        case 'saint_lucia':
          return StrategyAttributeCountryName.SaintLucia;
        case 'saint_vincent_and_the_grenadines':
          return StrategyAttributeCountryName.SaintVincentAndTheGrenadines;
        case 'samoa':
          return StrategyAttributeCountryName.Samoa;
        case 'san_marino':
          return StrategyAttributeCountryName.SanMarino;
        case 'sao_tome_and_principe':
          return StrategyAttributeCountryName.SaoTomeAndPrincipe;
        case 'saudi_arabia':
          return StrategyAttributeCountryName.SaudiArabia;
        case 'senegal':
          return StrategyAttributeCountryName.Senegal;
        case 'serbia':
          return StrategyAttributeCountryName.Serbia;
        case 'seychelles':
          return StrategyAttributeCountryName.Seychelles;
        case 'sierra_leone':
          return StrategyAttributeCountryName.SierraLeone;
        case 'singapore':
          return StrategyAttributeCountryName.Singapore;
        case 'slovakia':
          return StrategyAttributeCountryName.Slovakia;
        case 'slovenia':
          return StrategyAttributeCountryName.Slovenia;
        case 'solomon_islands':
          return StrategyAttributeCountryName.SolomonIslands;
        case 'somalia':
          return StrategyAttributeCountryName.Somalia;
        case 'south_africa':
          return StrategyAttributeCountryName.SouthAfrica;
        case 'spain':
          return StrategyAttributeCountryName.Spain;
        case 'sri_lanka':
          return StrategyAttributeCountryName.SriLanka;
        case 'sudan':
          return StrategyAttributeCountryName.Sudan;
        case 'sudan_south':
          return StrategyAttributeCountryName.SudanSouth;
        case 'suriname':
          return StrategyAttributeCountryName.Suriname;
        case 'sweden':
          return StrategyAttributeCountryName.Sweden;
        case 'switzerland':
          return StrategyAttributeCountryName.Switzerland;
        case 'syria':
          return StrategyAttributeCountryName.Syria;
        case 'taiwan':
          return StrategyAttributeCountryName.Taiwan;
        case 'tajikistan':
          return StrategyAttributeCountryName.Tajikistan;
        case 'tanzania':
          return StrategyAttributeCountryName.Tanzania;
        case 'thailand':
          return StrategyAttributeCountryName.Thailand;
        case 'togo':
          return StrategyAttributeCountryName.Togo;
        case 'tonga':
          return StrategyAttributeCountryName.Tonga;
        case 'trinidad_and_tobago':
          return StrategyAttributeCountryName.TrinidadAndTobago;
        case 'tunisia':
          return StrategyAttributeCountryName.Tunisia;
        case 'turkey':
          return StrategyAttributeCountryName.Turkey;
        case 'turkmenistan':
          return StrategyAttributeCountryName.Turkmenistan;
        case 'tuvalu':
          return StrategyAttributeCountryName.Tuvalu;
        case 'uganda':
          return StrategyAttributeCountryName.Uganda;
        case 'ukraine':
          return StrategyAttributeCountryName.Ukraine;
        case 'united_arab_emirates':
          return StrategyAttributeCountryName.UnitedArabEmirates;
        case 'united_kingdom':
          return StrategyAttributeCountryName.UnitedKingdom;
        case 'united_states':
          return StrategyAttributeCountryName.UnitedStates;
        case 'uruguay':
          return StrategyAttributeCountryName.Uruguay;
        case 'uzbekistan':
          return StrategyAttributeCountryName.Uzbekistan;
        case 'vanuatu':
          return StrategyAttributeCountryName.Vanuatu;
        case 'vatican_city':
          return StrategyAttributeCountryName.VaticanCity;
        case 'venezuela':
          return StrategyAttributeCountryName.Venezuela;
        case 'vietnam':
          return StrategyAttributeCountryName.Vietnam;
        case 'yemen':
          return StrategyAttributeCountryName.Yemen;
        case 'zambia':
          return StrategyAttributeCountryName.Zambia;
        case 'zimbabwe':
          return StrategyAttributeCountryName.Zimbabwe;
    }

    return undefined;
  }
}

export class StrategyAttributeDeviceNameTypeTransformer {
public static toJson(__val: StrategyAttributeDeviceName): any {
    return __val?.toString();
  }

  // expect this to be a decoded value
public   static fromJson(__val: any): StrategyAttributeDeviceName {
    if (__val === null || __val === undefined) return undefined;
    switch (__val.toString()) {
        case 'browser':
          return StrategyAttributeDeviceName.Browser;
        case 'mobile':
          return StrategyAttributeDeviceName.Mobile;
        case 'desktop':
          return StrategyAttributeDeviceName.Desktop;
        case 'server':
          return StrategyAttributeDeviceName.Server;
        case 'watch':
          return StrategyAttributeDeviceName.Watch;
        case 'embedded':
          return StrategyAttributeDeviceName.Embedded;
    }

    return undefined;
  }
}

export class StrategyAttributePlatformNameTypeTransformer {
public static toJson(__val: StrategyAttributePlatformName): any {
    return __val?.toString();
  }

  // expect this to be a decoded value
public   static fromJson(__val: any): StrategyAttributePlatformName {
    if (__val === null || __val === undefined) return undefined;
    switch (__val.toString()) {
        case 'linux':
          return StrategyAttributePlatformName.Linux;
        case 'windows':
          return StrategyAttributePlatformName.Windows;
        case 'macos':
          return StrategyAttributePlatformName.Macos;
        case 'android':
          return StrategyAttributePlatformName.Android;
        case 'ios':
          return StrategyAttributePlatformName.Ios;
    }

    return undefined;
  }
}

export class StrategyAttributeWellKnownNamesTypeTransformer {
public static toJson(__val: StrategyAttributeWellKnownNames): any {
    return __val?.toString();
  }

  // expect this to be a decoded value
public   static fromJson(__val: any): StrategyAttributeWellKnownNames {
    if (__val === null || __val === undefined) return undefined;
    switch (__val.toString()) {
        case 'device':
          return StrategyAttributeWellKnownNames.Device;
        case 'country':
          return StrategyAttributeWellKnownNames.Country;
        case 'platform':
          return StrategyAttributeWellKnownNames.Platform;
        case 'userkey':
          return StrategyAttributeWellKnownNames.Userkey;
        case 'session':
          return StrategyAttributeWellKnownNames.Session;
        case 'version':
          return StrategyAttributeWellKnownNames.Version;
    }

    return undefined;
  }
}

export class TokenizedPersonTypeTransformer {
public static toJson(__val: TokenizedPerson): any {
    const __data: any = {};
    
  if (__val.accessToken !== null && __val.accessToken !== undefined) {
    __data['accessToken'] = __val.accessToken;
  }
  if (__val.refreshToken !== null && __val.refreshToken !== undefined) {
    __data['refreshToken'] = __val.refreshToken;
  }
  if (__val.redirectUrl !== null && __val.redirectUrl !== undefined) {
    __data['redirectUrl'] = __val.redirectUrl;
  }
  if (__val.person !== null && __val.person !== undefined) {
    __data['person'] = ObjectSerializer.serialize(__val.person, 'Person');
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['accessToken'] = __val['accessToken'];
    __init['refreshToken'] = __val['refreshToken'];
    __init['redirectUrl'] = __val['redirectUrl'];
    __init['person'] = ObjectSerializer.deserialize(__val['person'], 'Person');

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): TokenizedPerson {
    return new TokenizedPerson(TokenizedPersonTypeTransformer.fromJsonAsAny(__val));
  }
}

export class UpdateEnvironmentTypeTransformer {
public static toJson(__val: UpdateEnvironment): any {
    const __data: any = {};
    
  if (__val.version !== null && __val.version !== undefined) {
    __data['version'] = __val.version;
  }
  if (__val.name !== null && __val.name !== undefined) {
    __data['name'] = __val.name;
  }
  if (__val.description !== null && __val.description !== undefined) {
    __data['description'] = __val.description;
  }
  if (__val.production !== null && __val.production !== undefined) {
    __data['production'] = __val.production;
  }
  if (__val.environmentInfo !== null && __val.environmentInfo !== undefined) {
    const __p: any = {};
    for(let __prop in __val.environmentInfo) {
    if (__val.environmentInfo.hasOwnProperty(__prop)) {
    __p[ObjectSerializer.serialize(__prop, 'string')] = __val.environmentInfo[__prop];
    }
    __data['environmentInfo'] = __p;
    }
  }
  if (__val.priorEnvironmentId !== null && __val.priorEnvironmentId !== undefined) {
    __data['priorEnvironmentId'] = __val.priorEnvironmentId;
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['version'] = __val['version'];
    __init['name'] = __val['name'];
    __init['description'] = __val['description'];
    __init['production'] = __val['production'];
    __init['priorEnvironmentId'] = __val['priorEnvironmentId'];

    
      if (__val['environmentInfo']) {
    const __data: any = {};
    const __valData = __val['environmentInfo'];
    for(let __prop in __valData) {
      if (__valData.hasOwnProperty(__prop)) {
        __data[ObjectSerializer.deserialize(__prop, 'string')] = __val[__prop];
      }
    }

    __init['environmentInfo'] = __data;
  }


    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): UpdateEnvironment {
    return new UpdateEnvironment(UpdateEnvironmentTypeTransformer.fromJsonAsAny(__val));
  }
}

export class UpdatePersonTypeTransformer {
public static toJson(__val: UpdatePerson): any {
    const __data: any = {};
    
  if (__val.name !== null && __val.name !== undefined) {
    __data['name'] = __val.name;
  }
  if (__val.email !== null && __val.email !== undefined) {
    __data['email'] = __val.email;
  }
  if (__val.version !== null && __val.version !== undefined) {
    __data['version'] = __val.version;
  }
  if (__val.groups !== null && __val.groups !== undefined) {
    __data['groups'] = __val.groups;
  }
  if (__val.unarchive !== null && __val.unarchive !== undefined) {
    __data['unarchive'] = __val.unarchive;
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['name'] = __val['name'];
    __init['email'] = __val['email'];
    __init['version'] = __val['version'];
    __init['groups'] = __val['groups'];
    __init['unarchive'] = __val['unarchive'];

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): UpdatePerson {
    return new UpdatePerson(UpdatePersonTypeTransformer.fromJsonAsAny(__val));
  }
}

export class UserCredentialsTypeTransformer {
public static toJson(__val: UserCredentials): any {
    const __data: any = {};
    
  if (__val.email !== null && __val.email !== undefined) {
    __data['email'] = __val.email;
  }
  if (__val.password !== null && __val.password !== undefined) {
    __data['password'] = __val.password;
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['email'] = __val['email'];
    __init['password'] = __val['password'];

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): UserCredentials {
    return new UserCredentials(UserCredentialsTypeTransformer.fromJsonAsAny(__val));
  }
}

export class WebhookCheckTypeTransformer {
public static toJson(__val: WebhookCheck): any {
    const __data: any = {};
    
  if (__val.messageType !== null && __val.messageType !== undefined) {
    __data['messageType'] = __val.messageType;
  }
  if (__val.envId !== null && __val.envId !== undefined) {
    __data['envId'] = __val.envId;
  }
  if (__val.config !== null && __val.config !== undefined) {
    const __p: any = {};
    for(let __prop in __val.config) {
    if (__val.config.hasOwnProperty(__prop)) {
    __p[ObjectSerializer.serialize(__prop, 'string')] = __val.config[__prop];
    }
    __data['config'] = __p;
    }
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['messageType'] = __val['messageType'];
    __init['envId'] = __val['envId'];

    
      if (__val['config']) {
    const __data: any = {};
    const __valData = __val['config'];
    for(let __prop in __valData) {
      if (__valData.hasOwnProperty(__prop)) {
        __data[ObjectSerializer.deserialize(__prop, 'string')] = __val[__prop];
      }
    }

    __init['config'] = __data;
  }


    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): WebhookCheck {
    return new WebhookCheck(WebhookCheckTypeTransformer.fromJsonAsAny(__val));
  }
}

export class WebhookDetailTypeTransformer {
public static toJson(__val: WebhookDetail): any {
    const __data: any = {};
    
  if (__val.whenSent !== null && __val.whenSent !== undefined) {
    __data['whenSent'] = ObjectSerializer.serialize(__val.whenSent, 'date-time');
  }
  if (__val.status !== null && __val.status !== undefined) {
    __data['status'] = __val.status;
  }
  if (__val.method !== null && __val.method !== undefined) {
    __data['method'] = __val.method;
  }
  if (__val.sourceSystem !== null && __val.sourceSystem !== undefined) {
    __data['sourceSystem'] = __val.sourceSystem;
  }
  if (__val.deliveredDataCloudEventType !== null && __val.deliveredDataCloudEventType !== undefined) {
    __data['deliveredDataCloudEventType'] = __val.deliveredDataCloudEventType;
  }
  if (__val.cloudEventType !== null && __val.cloudEventType !== undefined) {
    __data['cloudEventType'] = __val.cloudEventType;
  }
  if (__val.content !== null && __val.content !== undefined) {
    __data['content'] = __val.content;
  }
  if (__val.url !== null && __val.url !== undefined) {
    __data['url'] = __val.url;
  }
  if (__val.outboundHeaders !== null && __val.outboundHeaders !== undefined) {
    const __p: any = {};
    for(let __prop in __val.outboundHeaders) {
    if (__val.outboundHeaders.hasOwnProperty(__prop)) {
    __p[ObjectSerializer.serialize(__prop, 'string')] = __val.outboundHeaders[__prop];
    }
    __data['outboundHeaders'] = __p;
    }
  }
  if (__val.incomingHeaders !== null && __val.incomingHeaders !== undefined) {
    const __p: any = {};
    for(let __prop in __val.incomingHeaders) {
    if (__val.incomingHeaders.hasOwnProperty(__prop)) {
    __p[ObjectSerializer.serialize(__prop, 'string')] = __val.incomingHeaders[__prop];
    }
    __data['incomingHeaders'] = __p;
    }
  }
  if (__val.result !== null && __val.result !== undefined) {
    __data['result'] = __val.result;
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['whenSent'] = ObjectSerializer.deserialize(__val['whenSent'], 'date-time');
    __init['status'] = __val['status'];
    __init['method'] = __val['method'];
    __init['sourceSystem'] = __val['sourceSystem'];
    __init['deliveredDataCloudEventType'] = __val['deliveredDataCloudEventType'];
    __init['cloudEventType'] = __val['cloudEventType'];
    __init['content'] = __val['content'];
    __init['url'] = __val['url'];
    __init['result'] = __val['result'];

    
      if (__val['outboundHeaders']) {
    const __data: any = {};
    const __valData = __val['outboundHeaders'];
    for(let __prop in __valData) {
      if (__valData.hasOwnProperty(__prop)) {
        __data[ObjectSerializer.deserialize(__prop, 'string')] = __val[__prop];
      }
    }

    __init['outboundHeaders'] = __data;
  }
  if (__val['incomingHeaders']) {
    const __data: any = {};
    const __valData = __val['incomingHeaders'];
    for(let __prop in __valData) {
      if (__valData.hasOwnProperty(__prop)) {
        __data[ObjectSerializer.deserialize(__prop, 'string')] = __val[__prop];
      }
    }

    __init['incomingHeaders'] = __data;
  }


    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): WebhookDetail {
    return new WebhookDetail(WebhookDetailTypeTransformer.fromJsonAsAny(__val));
  }
}

export class WebhookSummaryTypeTransformer {
public static toJson(__val: WebhookSummary): any {
    const __data: any = {};
    
  if (__val.max !== null && __val.max !== undefined) {
    __data['max'] = __val.max;
  }
  if (__val.results !== null && __val.results !== undefined) {
    __data['results'] = ObjectSerializer.serialize(__val.results, 'Array<WebhookSummaryItem>');
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['max'] = __val['max'];
    __init['results'] = ObjectSerializer.deserialize(__val['results'], 'Array<WebhookSummaryItem>');

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): WebhookSummary {
    return new WebhookSummary(WebhookSummaryTypeTransformer.fromJsonAsAny(__val));
  }
}

export class WebhookSummaryItemTypeTransformer {
public static toJson(__val: WebhookSummaryItem): any {
    const __data: any = {};
    
  if (__val.id !== null && __val.id !== undefined) {
    __data['id'] = __val.id;
  }
  if (__val.type !== null && __val.type !== undefined) {
    __data['type'] = __val.type;
  }
  if (__val.method !== null && __val.method !== undefined) {
    __data['method'] = __val.method;
  }
  if (__val.whenSent !== null && __val.whenSent !== undefined) {
    __data['whenSent'] = ObjectSerializer.serialize(__val.whenSent, 'date-time');
  }
  if (__val.status !== null && __val.status !== undefined) {
    __data['status'] = __val.status;
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['id'] = __val['id'];
    __init['type'] = __val['type'];
    __init['method'] = __val['method'];
    __init['whenSent'] = ObjectSerializer.deserialize(__val['whenSent'], 'date-time');
    __init['status'] = __val['status'];

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): WebhookSummaryItem {
    return new WebhookSummaryItem(WebhookSummaryItemTypeTransformer.fromJsonAsAny(__val));
  }
}

export class WebhookTypeDetailTypeTransformer {
public static toJson(__val: WebhookTypeDetail): any {
    const __data: any = {};
    
  if (__val.messageType !== null && __val.messageType !== undefined) {
    __data['messageType'] = __val.messageType;
  }
  if (__val.description !== null && __val.description !== undefined) {
    __data['description'] = __val.description;
  }
  if (__val.envPrefix !== null && __val.envPrefix !== undefined) {
    __data['envPrefix'] = __val.envPrefix;
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['messageType'] = __val['messageType'];
    __init['description'] = __val['description'];
    __init['envPrefix'] = __val['envPrefix'];

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): WebhookTypeDetail {
    return new WebhookTypeDetail(WebhookTypeDetailTypeTransformer.fromJsonAsAny(__val));
  }
}

export class WebhookTypeDetailsTypeTransformer {
public static toJson(__val: WebhookTypeDetails): any {
    const __data: any = {};
    
  if (__val.types !== null && __val.types !== undefined) {
    __data['types'] = ObjectSerializer.serialize(__val.types, 'Array<WebhookTypeDetail>');
  }

    return __data;
  }

public  static fromJsonAsAny(__val: any): any {
    const __init: any = {};
        __init['types'] = ObjectSerializer.deserialize(__val['types'], 'Array<WebhookTypeDetail>');

    
    

    return __init;
}
  // expect this to be a decoded value
public   static fromJson(__val: any): WebhookTypeDetails {
    return new WebhookTypeDetails(WebhookTypeDetailsTypeTransformer.fromJsonAsAny(__val));
  }
}


const _regList = new RegExp('^Array\\<(.*)\\>$');
const _regSet = new RegExp('^Set\\<(.*)\\>$');
const _regRecord = new RegExp('^Record\\<(.*),(.*)\\>$');
const _regMap = new RegExp('^Map\\<(.*),(.*)\\>$');

const _baseEncoder = (type: string, value: any) => value;
const _dateEncoder = (type: string, value: any) => {
  const val = value as Date;
  return `${val.getFullYear()}-${(val.getMonth()+1).toString().padStart(2,'0')}-${val.getDate().toString().padStart(2,'0')}`;
};

export declare type EncoderFunc = (type: string, value: any) => any;

export const serializers: Record<string, EncoderFunc> = {
  'string': _baseEncoder,
  'String': _baseEncoder,
  'email': _baseEncoder,
  'uuid': _baseEncoder,
  'int': _baseEncoder,
  'num': _baseEncoder,
  'number': _baseEncoder,
  'double': _baseEncoder,
  'float': _baseEncoder,
  'boolean': _baseEncoder,
  'object': _baseEncoder,
  'any': _baseEncoder,
  'Array<string>': _baseEncoder,
  'Array<String>': _baseEncoder,
  'Array<email>': _baseEncoder,
  'Array<int>': _baseEncoder,
  'Array<num>': _baseEncoder,
  'Array<number>': _baseEncoder,
  'Array<double>': _baseEncoder,
  'Array<float>': _baseEncoder,
  'Array<boolean>': _baseEncoder,
  'Array<object>': _baseEncoder,
  'Array<any>': _baseEncoder,
  'date': _dateEncoder,
  'date-time': (t, value) => (value as Date).toISOString(),
  'Date': _dateEncoder,
  'DateTime': (t, value) => (value as Date).toISOString(),
  'AdminServiceResetTokenResponse': (t, value) => AdminServiceResetTokenResponseTypeTransformer.toJson(value),
  'Application': (t, value) => ApplicationTypeTransformer.toJson(value),
  'ApplicationAllOf': (t, value) => ApplicationAllOfTypeTransformer.toJson(value),
  'ApplicationFeatureValues': (t, value) => ApplicationFeatureValuesTypeTransformer.toJson(value),
  'ApplicationGroupRole': (t, value) => ApplicationGroupRoleTypeTransformer.toJson(value),
  'ApplicationRoleType': (t, value) => ApplicationRoleTypeTypeTransformer.toJson(value),
  'ApplicationVersionInfo': (t, value) => ApplicationVersionInfoTypeTransformer.toJson(value),
  'Audit': (t, value) => AuditTypeTransformer.toJson(value),
  'BaseRolloutStrategy': (t, value) => BaseRolloutStrategyTypeTransformer.toJson(value),
  'BaseRolloutStrategyAttribute': (t, value) => BaseRolloutStrategyAttributeTypeTransformer.toJson(value),
  'CreatePersonDetails': (t, value) => CreatePersonDetailsTypeTransformer.toJson(value),
  'CustomRolloutStrategyViolation': (t, value) => CustomRolloutStrategyViolationTypeTransformer.toJson(value),
  'Environment': (t, value) => EnvironmentTypeTransformer.toJson(value),
  'EnvironmentAllOf': (t, value) => EnvironmentAllOfTypeTransformer.toJson(value),
  'EnvironmentFeatureValues': (t, value) => EnvironmentFeatureValuesTypeTransformer.toJson(value),
  'EnvironmentFeaturesResult': (t, value) => EnvironmentFeaturesResultTypeTransformer.toJson(value),
  'EnvironmentGroupRole': (t, value) => EnvironmentGroupRoleTypeTransformer.toJson(value),
  'EnvironmentSortOrder': (t, value) => EnvironmentSortOrderTypeTransformer.toJson(value),
  'Feature': (t, value) => FeatureTypeTransformer.toJson(value),
  'FeatureEnvironment': (t, value) => FeatureEnvironmentTypeTransformer.toJson(value),
  'FeatureValue': (t, value) => FeatureValueTypeTransformer.toJson(value),
  'FeatureValueType': (t, value) => FeatureValueTypeTypeTransformer.toJson(value),
  'Group': (t, value) => GroupTypeTransformer.toJson(value),
  'GroupAllOf': (t, value) => GroupAllOfTypeTransformer.toJson(value),
  'HiddenEnvironments': (t, value) => HiddenEnvironmentsTypeTransformer.toJson(value),
  'IdentityProviderInfo': (t, value) => IdentityProviderInfoTypeTransformer.toJson(value),
  'Organization': (t, value) => OrganizationTypeTransformer.toJson(value),
  'OrganizationAllOf': (t, value) => OrganizationAllOfTypeTransformer.toJson(value),
  'OutstandingRegistration': (t, value) => OutstandingRegistrationTypeTransformer.toJson(value),
  'PasswordReset': (t, value) => PasswordResetTypeTransformer.toJson(value),
  'PasswordUpdate': (t, value) => PasswordUpdateTypeTransformer.toJson(value),
  'Person': (t, value) => PersonTypeTransformer.toJson(value),
  'PersonId': (t, value) => PersonIdTypeTransformer.toJson(value),
  'PersonInfo': (t, value) => PersonInfoTypeTransformer.toJson(value),
  'PersonRegistrationDetails': (t, value) => PersonRegistrationDetailsTypeTransformer.toJson(value),
  'PersonType': (t, value) => PersonTypeTypeTransformer.toJson(value),
  'Portfolio': (t, value) => PortfolioTypeTransformer.toJson(value),
  'PortfolioAllOf': (t, value) => PortfolioAllOfTypeTransformer.toJson(value),
  'ProviderRedirect': (t, value) => ProviderRedirectTypeTransformer.toJson(value),
  'RegistrationUrl': (t, value) => RegistrationUrlTypeTransformer.toJson(value),
  'ResetApiKeyType': (t, value) => ResetApiKeyTypeTypeTransformer.toJson(value),
  'RoleType': (t, value) => RoleTypeTypeTransformer.toJson(value),
  'RolloutStrategy': (t, value) => RolloutStrategyTypeTransformer.toJson(value),
  'RolloutStrategyAllOf': (t, value) => RolloutStrategyAllOfTypeTransformer.toJson(value),
  'RolloutStrategyAttribute': (t, value) => RolloutStrategyAttributeTypeTransformer.toJson(value),
  'RolloutStrategyAttributeAllOf': (t, value) => RolloutStrategyAttributeAllOfTypeTransformer.toJson(value),
  'RolloutStrategyAttributeConditional': (t, value) => RolloutStrategyAttributeConditionalTypeTransformer.toJson(value),
  'RolloutStrategyCollectionViolationType': (t, value) => RolloutStrategyCollectionViolationTypeTypeTransformer.toJson(value),
  'RolloutStrategyFieldType': (t, value) => RolloutStrategyFieldTypeTypeTransformer.toJson(value),
  'RolloutStrategyInfo': (t, value) => RolloutStrategyInfoTypeTransformer.toJson(value),
  'RolloutStrategyInstance': (t, value) => RolloutStrategyInstanceTypeTransformer.toJson(value),
  'RolloutStrategyValidationRequest': (t, value) => RolloutStrategyValidationRequestTypeTransformer.toJson(value),
  'RolloutStrategyValidationResponse': (t, value) => RolloutStrategyValidationResponseTypeTransformer.toJson(value),
  'RolloutStrategyViolation': (t, value) => RolloutStrategyViolationTypeTransformer.toJson(value),
  'RolloutStrategyViolationType': (t, value) => RolloutStrategyViolationTypeTypeTransformer.toJson(value),
  'SearchPerson': (t, value) => SearchPersonTypeTransformer.toJson(value),
  'SearchPersonResult': (t, value) => SearchPersonResultTypeTransformer.toJson(value),
  'SearchPersonSortBy': (t, value) => SearchPersonSortByTypeTransformer.toJson(value),
  'ServiceAccount': (t, value) => ServiceAccountTypeTransformer.toJson(value),
  'ServiceAccountPermission': (t, value) => ServiceAccountPermissionTypeTransformer.toJson(value),
  'SetupMissingResponse': (t, value) => SetupMissingResponseTypeTransformer.toJson(value),
  'SetupResponse': (t, value) => SetupResponseTypeTransformer.toJson(value),
  'SetupSiteAdmin': (t, value) => SetupSiteAdminTypeTransformer.toJson(value),
  'SharedRolloutStrategyViolation': (t, value) => SharedRolloutStrategyViolationTypeTransformer.toJson(value),
  'SortOrder': (t, value) => SortOrderTypeTransformer.toJson(value),
  'StrategyAttributeCountryName': (t, value) => StrategyAttributeCountryNameTypeTransformer.toJson(value),
  'StrategyAttributeDeviceName': (t, value) => StrategyAttributeDeviceNameTypeTransformer.toJson(value),
  'StrategyAttributePlatformName': (t, value) => StrategyAttributePlatformNameTypeTransformer.toJson(value),
  'StrategyAttributeWellKnownNames': (t, value) => StrategyAttributeWellKnownNamesTypeTransformer.toJson(value),
  'TokenizedPerson': (t, value) => TokenizedPersonTypeTransformer.toJson(value),
  'UpdateEnvironment': (t, value) => UpdateEnvironmentTypeTransformer.toJson(value),
  'UpdatePerson': (t, value) => UpdatePersonTypeTransformer.toJson(value),
  'UserCredentials': (t, value) => UserCredentialsTypeTransformer.toJson(value),
  'WebhookCheck': (t, value) => WebhookCheckTypeTransformer.toJson(value),
  'WebhookDetail': (t, value) => WebhookDetailTypeTransformer.toJson(value),
  'WebhookSummary': (t, value) => WebhookSummaryTypeTransformer.toJson(value),
  'WebhookSummaryItem': (t, value) => WebhookSummaryItemTypeTransformer.toJson(value),
  'WebhookTypeDetail': (t, value) => WebhookTypeDetailTypeTransformer.toJson(value),
  'WebhookTypeDetails': (t, value) => WebhookTypeDetailsTypeTransformer.toJson(value),
};

const _stringDecoder = (type: string, value: any) => value.toString();
const _passthroughDecoder = (type: string, value: any) => value;
const _intDecoder = (type: string, value: any) => (value instanceof Number) ? value.toFixed() : parseInt(value.toString());
const _numDecoder = (type: string, value: any) => (value instanceof Number) ? value : parseFloat(value.toString());
const _dateDecoder = (type: string, value: any) => new Date(`${value}T00:00:00Z`);
const _dateTimeDecoder = (type: string, value: any) => new Date(value.toString());


export const deserializers: Record<string, EncoderFunc> = {
  'string': _stringDecoder,
  'String': _stringDecoder,
  'email': _stringDecoder,
  'uuid': _stringDecoder,
  'int': _intDecoder,
  'num': _numDecoder,
  'number': _numDecoder,
  'double': _numDecoder,
  'float': _numDecoder,
  'boolean': _passthroughDecoder,
  'object': _passthroughDecoder,
  'any': _passthroughDecoder,
  'date': _dateDecoder,
  'date-time': _dateTimeDecoder,
  'Date': _dateDecoder,
  'DateTime': _dateTimeDecoder,
  'AdminServiceResetTokenResponse': (t, value) => AdminServiceResetTokenResponseTypeTransformer.fromJson(value),
  'Application': (t, value) => ApplicationTypeTransformer.fromJson(value),
  'ApplicationAllOf': (t, value) => ApplicationAllOfTypeTransformer.fromJson(value),
  'ApplicationFeatureValues': (t, value) => ApplicationFeatureValuesTypeTransformer.fromJson(value),
  'ApplicationGroupRole': (t, value) => ApplicationGroupRoleTypeTransformer.fromJson(value),
  'ApplicationRoleType': (t, value) => ApplicationRoleTypeTypeTransformer.fromJson(value),
  'ApplicationVersionInfo': (t, value) => ApplicationVersionInfoTypeTransformer.fromJson(value),
  'Audit': (t, value) => AuditTypeTransformer.fromJson(value),
  'BaseRolloutStrategy': (t, value) => BaseRolloutStrategyTypeTransformer.fromJson(value),
  'BaseRolloutStrategyAttribute': (t, value) => BaseRolloutStrategyAttributeTypeTransformer.fromJson(value),
  'CreatePersonDetails': (t, value) => CreatePersonDetailsTypeTransformer.fromJson(value),
  'CustomRolloutStrategyViolation': (t, value) => CustomRolloutStrategyViolationTypeTransformer.fromJson(value),
  'Environment': (t, value) => EnvironmentTypeTransformer.fromJson(value),
  'EnvironmentAllOf': (t, value) => EnvironmentAllOfTypeTransformer.fromJson(value),
  'EnvironmentFeatureValues': (t, value) => EnvironmentFeatureValuesTypeTransformer.fromJson(value),
  'EnvironmentFeaturesResult': (t, value) => EnvironmentFeaturesResultTypeTransformer.fromJson(value),
  'EnvironmentGroupRole': (t, value) => EnvironmentGroupRoleTypeTransformer.fromJson(value),
  'EnvironmentSortOrder': (t, value) => EnvironmentSortOrderTypeTransformer.fromJson(value),
  'Feature': (t, value) => FeatureTypeTransformer.fromJson(value),
  'FeatureEnvironment': (t, value) => FeatureEnvironmentTypeTransformer.fromJson(value),
  'FeatureValue': (t, value) => FeatureValueTypeTransformer.fromJson(value),
  'FeatureValueType': (t, value) => FeatureValueTypeTypeTransformer.fromJson(value),
  'Group': (t, value) => GroupTypeTransformer.fromJson(value),
  'GroupAllOf': (t, value) => GroupAllOfTypeTransformer.fromJson(value),
  'HiddenEnvironments': (t, value) => HiddenEnvironmentsTypeTransformer.fromJson(value),
  'IdentityProviderInfo': (t, value) => IdentityProviderInfoTypeTransformer.fromJson(value),
  'Organization': (t, value) => OrganizationTypeTransformer.fromJson(value),
  'OrganizationAllOf': (t, value) => OrganizationAllOfTypeTransformer.fromJson(value),
  'OutstandingRegistration': (t, value) => OutstandingRegistrationTypeTransformer.fromJson(value),
  'PasswordReset': (t, value) => PasswordResetTypeTransformer.fromJson(value),
  'PasswordUpdate': (t, value) => PasswordUpdateTypeTransformer.fromJson(value),
  'Person': (t, value) => PersonTypeTransformer.fromJson(value),
  'PersonId': (t, value) => PersonIdTypeTransformer.fromJson(value),
  'PersonInfo': (t, value) => PersonInfoTypeTransformer.fromJson(value),
  'PersonRegistrationDetails': (t, value) => PersonRegistrationDetailsTypeTransformer.fromJson(value),
  'PersonType': (t, value) => PersonTypeTypeTransformer.fromJson(value),
  'Portfolio': (t, value) => PortfolioTypeTransformer.fromJson(value),
  'PortfolioAllOf': (t, value) => PortfolioAllOfTypeTransformer.fromJson(value),
  'ProviderRedirect': (t, value) => ProviderRedirectTypeTransformer.fromJson(value),
  'RegistrationUrl': (t, value) => RegistrationUrlTypeTransformer.fromJson(value),
  'ResetApiKeyType': (t, value) => ResetApiKeyTypeTypeTransformer.fromJson(value),
  'RoleType': (t, value) => RoleTypeTypeTransformer.fromJson(value),
  'RolloutStrategy': (t, value) => RolloutStrategyTypeTransformer.fromJson(value),
  'RolloutStrategyAllOf': (t, value) => RolloutStrategyAllOfTypeTransformer.fromJson(value),
  'RolloutStrategyAttribute': (t, value) => RolloutStrategyAttributeTypeTransformer.fromJson(value),
  'RolloutStrategyAttributeAllOf': (t, value) => RolloutStrategyAttributeAllOfTypeTransformer.fromJson(value),
  'RolloutStrategyAttributeConditional': (t, value) => RolloutStrategyAttributeConditionalTypeTransformer.fromJson(value),
  'RolloutStrategyCollectionViolationType': (t, value) => RolloutStrategyCollectionViolationTypeTypeTransformer.fromJson(value),
  'RolloutStrategyFieldType': (t, value) => RolloutStrategyFieldTypeTypeTransformer.fromJson(value),
  'RolloutStrategyInfo': (t, value) => RolloutStrategyInfoTypeTransformer.fromJson(value),
  'RolloutStrategyInstance': (t, value) => RolloutStrategyInstanceTypeTransformer.fromJson(value),
  'RolloutStrategyValidationRequest': (t, value) => RolloutStrategyValidationRequestTypeTransformer.fromJson(value),
  'RolloutStrategyValidationResponse': (t, value) => RolloutStrategyValidationResponseTypeTransformer.fromJson(value),
  'RolloutStrategyViolation': (t, value) => RolloutStrategyViolationTypeTransformer.fromJson(value),
  'RolloutStrategyViolationType': (t, value) => RolloutStrategyViolationTypeTypeTransformer.fromJson(value),
  'SearchPerson': (t, value) => SearchPersonTypeTransformer.fromJson(value),
  'SearchPersonResult': (t, value) => SearchPersonResultTypeTransformer.fromJson(value),
  'SearchPersonSortBy': (t, value) => SearchPersonSortByTypeTransformer.fromJson(value),
  'ServiceAccount': (t, value) => ServiceAccountTypeTransformer.fromJson(value),
  'ServiceAccountPermission': (t, value) => ServiceAccountPermissionTypeTransformer.fromJson(value),
  'SetupMissingResponse': (t, value) => SetupMissingResponseTypeTransformer.fromJson(value),
  'SetupResponse': (t, value) => SetupResponseTypeTransformer.fromJson(value),
  'SetupSiteAdmin': (t, value) => SetupSiteAdminTypeTransformer.fromJson(value),
  'SharedRolloutStrategyViolation': (t, value) => SharedRolloutStrategyViolationTypeTransformer.fromJson(value),
  'SortOrder': (t, value) => SortOrderTypeTransformer.fromJson(value),
  'StrategyAttributeCountryName': (t, value) => StrategyAttributeCountryNameTypeTransformer.fromJson(value),
  'StrategyAttributeDeviceName': (t, value) => StrategyAttributeDeviceNameTypeTransformer.fromJson(value),
  'StrategyAttributePlatformName': (t, value) => StrategyAttributePlatformNameTypeTransformer.fromJson(value),
  'StrategyAttributeWellKnownNames': (t, value) => StrategyAttributeWellKnownNamesTypeTransformer.fromJson(value),
  'TokenizedPerson': (t, value) => TokenizedPersonTypeTransformer.fromJson(value),
  'UpdateEnvironment': (t, value) => UpdateEnvironmentTypeTransformer.fromJson(value),
  'UpdatePerson': (t, value) => UpdatePersonTypeTransformer.fromJson(value),
  'UserCredentials': (t, value) => UserCredentialsTypeTransformer.fromJson(value),
  'WebhookCheck': (t, value) => WebhookCheckTypeTransformer.fromJson(value),
  'WebhookDetail': (t, value) => WebhookDetailTypeTransformer.fromJson(value),
  'WebhookSummary': (t, value) => WebhookSummaryTypeTransformer.fromJson(value),
  'WebhookSummaryItem': (t, value) => WebhookSummaryItemTypeTransformer.fromJson(value),
  'WebhookTypeDetail': (t, value) => WebhookTypeDetailTypeTransformer.fromJson(value),
  'WebhookTypeDetails': (t, value) => WebhookTypeDetailsTypeTransformer.fromJson(value),
};


export class ObjectSerializer {
	public static deserializeOwn(value: any, valueType: string, keyType: string): any {
		const result: any = {};
		for (let __prop in value) {
			if (value.hasOwnProperty(__prop)) {
				result[ObjectSerializer.deserialize(__prop, keyType)] = ObjectSerializer.deserialize(value[__prop], valueType);
			}
		}

    return result;
  }

	public static serializeOwn(value: any, valueType: string, keyType: string): any {
		const result: any = {};
		for (let __prop in value) {
			if (value.hasOwnProperty(__prop)) {
        result[ObjectSerializer.deserialize(__prop, keyType)] = ObjectSerializer.serialize(value[__prop], valueType);
			}
		}

    return result;
	}

  public static serialize(value: any, targetType: string): any {
    if (value === null || value === undefined) {
      return undefined;
    }

    const encoder = serializers[targetType];
    if (encoder) {
      return encoder(targetType, value);
    }

    var match: any;
    if (((match = targetType.match(_regRecord)) !== null) && match.length === 3) {
      return ObjectSerializer.serializeOwn(value, match[2].trim(), match[1].trim());
    } else if ((value instanceof Array) &&
        ((match = targetType.match(_regList)) !== null) && match.length === 2) {
      return value.map((v) => ObjectSerializer.serialize(v, match[1]));
    } else if ((value instanceof Array) &&
        ((match = targetType.match(_regSet)) !== null) && match.length === 2) {
      return new Set(value.map((v) => ObjectSerializer.serialize(v, match[1])));
    } else if ((value instanceof Set) &&
    ((match = targetType.match(_regSet)) !== null) && match.length === 2) {
      return Array.from(value).map((v) => ObjectSerializer.serialize(v, match[1]));
    } else if (value instanceof Map && ((match = targetType.match(_regMap)) !== null) && match.length === 3) {
      return new Map(Array.from(value, ([k, v]) => [ObjectSerializer.serialize(k, match[1].trim()), ObjectSerializer.serialize(v, match[2].trim())]));
    }

    return undefined;
  }

  public static deserialize(value: any, targetType: string): any {
    if (value === null || value === undefined) return null; // 204
    if (targetType === null || targetType === undefined) return value.toString(); // best guess

    const decoder = deserializers[targetType];
    if (decoder) {
      return decoder(targetType, value);
    }

    var match: any;
    if (((match = targetType.match(_regRecord)) !== null) && match.length === 3) { // is an array we want an array
      return ObjectSerializer.deserializeOwn(value, match[2].trim(), match[1].trim());
    } else if ((value instanceof Array) &&
        ((match = targetType.match(_regList)) !== null) && match.length === 2) {
      return value.map((v) => ObjectSerializer.deserialize(v, match[1]));
    } else if ((value instanceof Array) && // is a array we want a set
        ((match = targetType.match(_regSet)) !== null) && match.length === 2) {
      return value.map((v) => ObjectSerializer.deserialize(v, match[1]));
    } else if ((value instanceof Set) && // is a set we want a set
        ((match = targetType.match(_regSet)) !== null) && match.length === 2) {
      return new Set(Array.from(value).map((v) => ObjectSerializer.deserialize(v, match[1])));
    } else if (value instanceof Map && ((match = targetType.match(_regMap)[1]) !== null) && match.length === 3) {
      return new Map(Array.from(value, ([k, v]) => [ObjectSerializer.serialize(k, match[1].trim()), ObjectSerializer.deserialize(v, match[2].trim())]));
    }

    return value;
  } // deserialize
} // end of serializer