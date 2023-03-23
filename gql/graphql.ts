/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  eqi?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  eqi?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  eqi?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GenericMorph = I18NLocale | Incap | Kill | Layerinfo | Match | Player | Revive | Server | Squad | Team | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  eqi?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type Incap = {
  __typename?: 'Incap';
  attacker?: Maybe<PlayerEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  damage?: Maybe<Scalars['Float']>;
  isLive?: Maybe<Scalars['Boolean']>;
  isSuicide?: Maybe<Scalars['Boolean']>;
  isTeamkill?: Maybe<Scalars['Boolean']>;
  match?: Maybe<MatchEntityResponse>;
  squad?: Maybe<SquadEntityResponse>;
  team?: Maybe<TeamEntityResponse>;
  time?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  victim?: Maybe<PlayerEntityResponse>;
  weapon?: Maybe<Scalars['String']>;
};

export type IncapEntity = {
  __typename?: 'IncapEntity';
  attributes?: Maybe<Incap>;
  id?: Maybe<Scalars['ID']>;
};

export type IncapEntityResponse = {
  __typename?: 'IncapEntityResponse';
  data?: Maybe<IncapEntity>;
};

export type IncapEntityResponseCollection = {
  __typename?: 'IncapEntityResponseCollection';
  data: Array<IncapEntity>;
  meta: ResponseCollectionMeta;
};

export type IncapFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<IncapFiltersInput>>>;
  attacker?: InputMaybe<PlayerFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  damage?: InputMaybe<FloatFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isLive?: InputMaybe<BooleanFilterInput>;
  isSuicide?: InputMaybe<BooleanFilterInput>;
  isTeamkill?: InputMaybe<BooleanFilterInput>;
  match?: InputMaybe<MatchFiltersInput>;
  not?: InputMaybe<IncapFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<IncapFiltersInput>>>;
  squad?: InputMaybe<SquadFiltersInput>;
  team?: InputMaybe<TeamFiltersInput>;
  time?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  victim?: InputMaybe<PlayerFiltersInput>;
  weapon?: InputMaybe<StringFilterInput>;
};

export type IncapInput = {
  attacker?: InputMaybe<Scalars['ID']>;
  damage?: InputMaybe<Scalars['Float']>;
  isLive?: InputMaybe<Scalars['Boolean']>;
  isSuicide?: InputMaybe<Scalars['Boolean']>;
  isTeamkill?: InputMaybe<Scalars['Boolean']>;
  match?: InputMaybe<Scalars['ID']>;
  squad?: InputMaybe<Scalars['ID']>;
  team?: InputMaybe<Scalars['ID']>;
  time?: InputMaybe<Scalars['DateTime']>;
  victim?: InputMaybe<Scalars['ID']>;
  weapon?: InputMaybe<Scalars['String']>;
};

export type IncapRelationResponseCollection = {
  __typename?: 'IncapRelationResponseCollection';
  data: Array<IncapEntity>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  eqi?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  eqi?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Kill = {
  __typename?: 'Kill';
  attacker?: Maybe<PlayerEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  damage?: Maybe<Scalars['Float']>;
  isLive?: Maybe<Scalars['Boolean']>;
  isSuicide?: Maybe<Scalars['Boolean']>;
  isTeamkill?: Maybe<Scalars['Boolean']>;
  match?: Maybe<MatchEntityResponse>;
  squad?: Maybe<SquadEntityResponse>;
  team?: Maybe<TeamEntityResponse>;
  time?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  victim?: Maybe<PlayerEntityResponse>;
  weapon?: Maybe<Scalars['String']>;
};

export type KillEntity = {
  __typename?: 'KillEntity';
  attributes?: Maybe<Kill>;
  id?: Maybe<Scalars['ID']>;
};

export type KillEntityResponse = {
  __typename?: 'KillEntityResponse';
  data?: Maybe<KillEntity>;
};

export type KillEntityResponseCollection = {
  __typename?: 'KillEntityResponseCollection';
  data: Array<KillEntity>;
  meta: ResponseCollectionMeta;
};

export type KillFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<KillFiltersInput>>>;
  attacker?: InputMaybe<PlayerFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  damage?: InputMaybe<FloatFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isLive?: InputMaybe<BooleanFilterInput>;
  isSuicide?: InputMaybe<BooleanFilterInput>;
  isTeamkill?: InputMaybe<BooleanFilterInput>;
  match?: InputMaybe<MatchFiltersInput>;
  not?: InputMaybe<KillFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<KillFiltersInput>>>;
  squad?: InputMaybe<SquadFiltersInput>;
  team?: InputMaybe<TeamFiltersInput>;
  time?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  victim?: InputMaybe<PlayerFiltersInput>;
  weapon?: InputMaybe<StringFilterInput>;
};

export type KillInput = {
  attacker?: InputMaybe<Scalars['ID']>;
  damage?: InputMaybe<Scalars['Float']>;
  isLive?: InputMaybe<Scalars['Boolean']>;
  isSuicide?: InputMaybe<Scalars['Boolean']>;
  isTeamkill?: InputMaybe<Scalars['Boolean']>;
  match?: InputMaybe<Scalars['ID']>;
  squad?: InputMaybe<Scalars['ID']>;
  team?: InputMaybe<Scalars['ID']>;
  time?: InputMaybe<Scalars['DateTime']>;
  victim?: InputMaybe<Scalars['ID']>;
  weapon?: InputMaybe<Scalars['String']>;
};

export type KillRelationResponseCollection = {
  __typename?: 'KillRelationResponseCollection';
  data: Array<KillEntity>;
};

export type Layerinfo = {
  __typename?: 'Layerinfo';
  classname?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  gamemode?: Maybe<Scalars['String']>;
  map?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  numberOfCapturePoints?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LayerinfoEntity = {
  __typename?: 'LayerinfoEntity';
  attributes?: Maybe<Layerinfo>;
  id?: Maybe<Scalars['ID']>;
};

export type LayerinfoEntityResponse = {
  __typename?: 'LayerinfoEntityResponse';
  data?: Maybe<LayerinfoEntity>;
};

export type LayerinfoEntityResponseCollection = {
  __typename?: 'LayerinfoEntityResponseCollection';
  data: Array<LayerinfoEntity>;
  meta: ResponseCollectionMeta;
};

export type LayerinfoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<LayerinfoFiltersInput>>>;
  classname?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  gamemode?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  map?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<LayerinfoFiltersInput>;
  numberOfCapturePoints?: InputMaybe<IntFilterInput>;
  or?: InputMaybe<Array<InputMaybe<LayerinfoFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type LayerinfoInput = {
  classname?: InputMaybe<Scalars['String']>;
  gamemode?: InputMaybe<Scalars['String']>;
  map?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  numberOfCapturePoints?: InputMaybe<Scalars['Int']>;
};

export type Match = {
  __typename?: 'Match';
  createdAt?: Maybe<Scalars['DateTime']>;
  endTime?: Maybe<Scalars['DateTime']>;
  isDraw?: Maybe<Scalars['Boolean']>;
  isFinished?: Maybe<Scalars['Boolean']>;
  isSeed?: Maybe<Scalars['Boolean']>;
  layerName?: Maybe<Scalars['String']>;
  layerinfo?: Maybe<LayerinfoEntityResponse>;
  matchTimeout?: Maybe<Scalars['Float']>;
  startTime?: Maybe<Scalars['DateTime']>;
  teams?: Maybe<TeamRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type MatchTeamsArgs = {
  filters?: InputMaybe<TeamFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MatchEntity = {
  __typename?: 'MatchEntity';
  attributes?: Maybe<Match>;
  id?: Maybe<Scalars['ID']>;
};

export type MatchEntityResponse = {
  __typename?: 'MatchEntityResponse';
  data?: Maybe<MatchEntity>;
};

export type MatchEntityResponseCollection = {
  __typename?: 'MatchEntityResponseCollection';
  data: Array<MatchEntity>;
  meta: ResponseCollectionMeta;
};

export type MatchFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MatchFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  endTime?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isDraw?: InputMaybe<BooleanFilterInput>;
  isFinished?: InputMaybe<BooleanFilterInput>;
  isSeed?: InputMaybe<BooleanFilterInput>;
  layerName?: InputMaybe<StringFilterInput>;
  layerinfo?: InputMaybe<LayerinfoFiltersInput>;
  matchTimeout?: InputMaybe<FloatFilterInput>;
  not?: InputMaybe<MatchFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MatchFiltersInput>>>;
  startTime?: InputMaybe<DateTimeFilterInput>;
  teams?: InputMaybe<TeamFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type MatchInput = {
  endTime?: InputMaybe<Scalars['DateTime']>;
  isDraw?: InputMaybe<Scalars['Boolean']>;
  isFinished?: InputMaybe<Scalars['Boolean']>;
  isSeed?: InputMaybe<Scalars['Boolean']>;
  layerName?: InputMaybe<Scalars['String']>;
  layerinfo?: InputMaybe<Scalars['ID']>;
  matchTimeout?: InputMaybe<Scalars['Float']>;
  startTime?: InputMaybe<Scalars['DateTime']>;
  teams?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type MatchRelationResponseCollection = {
  __typename?: 'MatchRelationResponseCollection';
  data: Array<MatchEntity>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createIncap?: Maybe<IncapEntityResponse>;
  createKill?: Maybe<KillEntityResponse>;
  createLayerinfo?: Maybe<LayerinfoEntityResponse>;
  createMatch?: Maybe<MatchEntityResponse>;
  createPlayer?: Maybe<PlayerEntityResponse>;
  createRevive?: Maybe<ReviveEntityResponse>;
  createServer?: Maybe<ServerEntityResponse>;
  createSquad?: Maybe<SquadEntityResponse>;
  createTeam?: Maybe<TeamEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteIncap?: Maybe<IncapEntityResponse>;
  deleteKill?: Maybe<KillEntityResponse>;
  deleteLayerinfo?: Maybe<LayerinfoEntityResponse>;
  deleteMatch?: Maybe<MatchEntityResponse>;
  deletePlayer?: Maybe<PlayerEntityResponse>;
  deleteRevive?: Maybe<ReviveEntityResponse>;
  deleteServer?: Maybe<ServerEntityResponse>;
  deleteSquad?: Maybe<SquadEntityResponse>;
  deleteTeam?: Maybe<TeamEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateFileInfo: UploadFileEntityResponse;
  updateIncap?: Maybe<IncapEntityResponse>;
  updateKill?: Maybe<KillEntityResponse>;
  updateLayerinfo?: Maybe<LayerinfoEntityResponse>;
  updateMatch?: Maybe<MatchEntityResponse>;
  updatePlayer?: Maybe<PlayerEntityResponse>;
  updateRevive?: Maybe<ReviveEntityResponse>;
  updateServer?: Maybe<ServerEntityResponse>;
  updateSquad?: Maybe<SquadEntityResponse>;
  updateTeam?: Maybe<TeamEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationCreateIncapArgs = {
  data: IncapInput;
};


export type MutationCreateKillArgs = {
  data: KillInput;
};


export type MutationCreateLayerinfoArgs = {
  data: LayerinfoInput;
};


export type MutationCreateMatchArgs = {
  data: MatchInput;
};


export type MutationCreatePlayerArgs = {
  data: PlayerInput;
};


export type MutationCreateReviveArgs = {
  data: ReviveInput;
};


export type MutationCreateServerArgs = {
  data: ServerInput;
};


export type MutationCreateSquadArgs = {
  data: SquadInput;
};


export type MutationCreateTeamArgs = {
  data: TeamInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteIncapArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteKillArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteLayerinfoArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMatchArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePlayerArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteReviveArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteServerArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSquadArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTeamArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateIncapArgs = {
  data: IncapInput;
  id: Scalars['ID'];
};


export type MutationUpdateKillArgs = {
  data: KillInput;
  id: Scalars['ID'];
};


export type MutationUpdateLayerinfoArgs = {
  data: LayerinfoInput;
  id: Scalars['ID'];
};


export type MutationUpdateMatchArgs = {
  data: MatchInput;
  id: Scalars['ID'];
};


export type MutationUpdatePlayerArgs = {
  data: PlayerInput;
  id: Scalars['ID'];
};


export type MutationUpdateReviveArgs = {
  data: ReviveInput;
  id: Scalars['ID'];
};


export type MutationUpdateServerArgs = {
  data: ServerInput;
  id: Scalars['ID'];
};


export type MutationUpdateSquadArgs = {
  data: SquadInput;
  id: Scalars['ID'];
};


export type MutationUpdateTeamArgs = {
  data: TeamInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type Player = {
  __typename?: 'Player';
  createdAt?: Maybe<Scalars['DateTime']>;
  currentSquad?: Maybe<SquadEntityResponse>;
  currentTeam?: Maybe<TeamEntityResponse>;
  deathCount?: Maybe<Scalars['Int']>;
  deaths?: Maybe<KillRelationResponseCollection>;
  globalIdr?: Maybe<Scalars['Float']>;
  globalIir?: Maybe<Scalars['Float']>;
  globalKdr?: Maybe<Scalars['Float']>;
  globalKir?: Maybe<Scalars['Float']>;
  guildTag?: Maybe<Scalars['String']>;
  incapCount?: Maybe<Scalars['Int']>;
  incapVictimCount?: Maybe<Scalars['Int']>;
  incapsAttacker?: Maybe<IncapRelationResponseCollection>;
  incapsVictim?: Maybe<IncapRelationResponseCollection>;
  isPlaying?: Maybe<Scalars['Boolean']>;
  killCount?: Maybe<Scalars['Int']>;
  kills?: Maybe<KillRelationResponseCollection>;
  lastAttacker?: Maybe<PlayerEntityResponse>;
  lastWeapon?: Maybe<Scalars['String']>;
  matches?: Maybe<MatchRelationResponseCollection>;
  name: Scalars['String'];
  playerID?: Maybe<Scalars['Int']>;
  reviveCount?: Maybe<Scalars['Int']>;
  revivedCount?: Maybe<Scalars['Int']>;
  revives?: Maybe<ReviveRelationResponseCollection>;
  revivesBy?: Maybe<ReviveRelationResponseCollection>;
  squadsCreated?: Maybe<SquadRelationResponseCollection>;
  steamID: Scalars['String'];
  suffix: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UsersPermissionsUserEntityResponse>;
};


export type PlayerDeathsArgs = {
  filters?: InputMaybe<KillFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PlayerIncapsAttackerArgs = {
  filters?: InputMaybe<IncapFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PlayerIncapsVictimArgs = {
  filters?: InputMaybe<IncapFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PlayerKillsArgs = {
  filters?: InputMaybe<KillFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PlayerMatchesArgs = {
  filters?: InputMaybe<MatchFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PlayerRevivesArgs = {
  filters?: InputMaybe<ReviveFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PlayerRevivesByArgs = {
  filters?: InputMaybe<ReviveFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PlayerSquadsCreatedArgs = {
  filters?: InputMaybe<SquadFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PlayerEntity = {
  __typename?: 'PlayerEntity';
  attributes?: Maybe<Player>;
  id?: Maybe<Scalars['ID']>;
};

export type PlayerEntityResponse = {
  __typename?: 'PlayerEntityResponse';
  data?: Maybe<PlayerEntity>;
};

export type PlayerEntityResponseCollection = {
  __typename?: 'PlayerEntityResponseCollection';
  data: Array<PlayerEntity>;
  meta: ResponseCollectionMeta;
};

export type PlayerFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PlayerFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  currentSquad?: InputMaybe<SquadFiltersInput>;
  currentTeam?: InputMaybe<TeamFiltersInput>;
  deathCount?: InputMaybe<IntFilterInput>;
  deaths?: InputMaybe<KillFiltersInput>;
  globalIdr?: InputMaybe<FloatFilterInput>;
  globalIir?: InputMaybe<FloatFilterInput>;
  globalKdr?: InputMaybe<FloatFilterInput>;
  globalKir?: InputMaybe<FloatFilterInput>;
  guildTag?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  incapCount?: InputMaybe<IntFilterInput>;
  incapVictimCount?: InputMaybe<IntFilterInput>;
  incapsAttacker?: InputMaybe<IncapFiltersInput>;
  incapsVictim?: InputMaybe<IncapFiltersInput>;
  isPlaying?: InputMaybe<BooleanFilterInput>;
  killCount?: InputMaybe<IntFilterInput>;
  kills?: InputMaybe<KillFiltersInput>;
  lastAttacker?: InputMaybe<PlayerFiltersInput>;
  lastWeapon?: InputMaybe<StringFilterInput>;
  matches?: InputMaybe<MatchFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<PlayerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PlayerFiltersInput>>>;
  playerID?: InputMaybe<IntFilterInput>;
  reviveCount?: InputMaybe<IntFilterInput>;
  revivedCount?: InputMaybe<IntFilterInput>;
  revives?: InputMaybe<ReviveFiltersInput>;
  revivesBy?: InputMaybe<ReviveFiltersInput>;
  squadsCreated?: InputMaybe<SquadFiltersInput>;
  steamID?: InputMaybe<StringFilterInput>;
  suffix?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type PlayerInput = {
  currentSquad?: InputMaybe<Scalars['ID']>;
  currentTeam?: InputMaybe<Scalars['ID']>;
  deathCount?: InputMaybe<Scalars['Int']>;
  deaths?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  globalIdr?: InputMaybe<Scalars['Float']>;
  globalIir?: InputMaybe<Scalars['Float']>;
  globalKdr?: InputMaybe<Scalars['Float']>;
  globalKir?: InputMaybe<Scalars['Float']>;
  guildTag?: InputMaybe<Scalars['String']>;
  incapCount?: InputMaybe<Scalars['Int']>;
  incapVictimCount?: InputMaybe<Scalars['Int']>;
  incapsAttacker?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  incapsVictim?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  isPlaying?: InputMaybe<Scalars['Boolean']>;
  killCount?: InputMaybe<Scalars['Int']>;
  kills?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lastAttacker?: InputMaybe<Scalars['ID']>;
  lastWeapon?: InputMaybe<Scalars['String']>;
  matches?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  playerID?: InputMaybe<Scalars['Int']>;
  reviveCount?: InputMaybe<Scalars['Int']>;
  revivedCount?: InputMaybe<Scalars['Int']>;
  revives?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  revivesBy?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  squadsCreated?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  steamID?: InputMaybe<Scalars['String']>;
  suffix?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['ID']>;
};

export type PlayerRelationResponseCollection = {
  __typename?: 'PlayerRelationResponseCollection';
  data: Array<PlayerEntity>;
};

export type Query = {
  __typename?: 'Query';
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  incap?: Maybe<IncapEntityResponse>;
  incaps?: Maybe<IncapEntityResponseCollection>;
  kill?: Maybe<KillEntityResponse>;
  kills?: Maybe<KillEntityResponseCollection>;
  layerinfo?: Maybe<LayerinfoEntityResponse>;
  layerinfos?: Maybe<LayerinfoEntityResponseCollection>;
  match?: Maybe<MatchEntityResponse>;
  matches?: Maybe<MatchEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  player?: Maybe<PlayerEntityResponse>;
  players?: Maybe<PlayerEntityResponseCollection>;
  revive?: Maybe<ReviveEntityResponse>;
  revives?: Maybe<ReviveEntityResponseCollection>;
  server?: Maybe<ServerEntityResponse>;
  servers?: Maybe<ServerEntityResponseCollection>;
  squad?: Maybe<SquadEntityResponse>;
  squads?: Maybe<SquadEntityResponseCollection>;
  team?: Maybe<TeamEntityResponse>;
  teams?: Maybe<TeamEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryIncapArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryIncapsArgs = {
  filters?: InputMaybe<IncapFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryKillArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryKillsArgs = {
  filters?: InputMaybe<KillFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryLayerinfoArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryLayerinfosArgs = {
  filters?: InputMaybe<LayerinfoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryMatchArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryMatchesArgs = {
  filters?: InputMaybe<MatchFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPlayerArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPlayersArgs = {
  filters?: InputMaybe<PlayerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryReviveArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryRevivesArgs = {
  filters?: InputMaybe<ReviveFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryServerArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryServersArgs = {
  filters?: InputMaybe<ServerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySquadArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QuerySquadsArgs = {
  filters?: InputMaybe<SquadFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTeamArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTeamsArgs = {
  filters?: InputMaybe<TeamFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type Revive = {
  __typename?: 'Revive';
  createdAt?: Maybe<Scalars['DateTime']>;
  isLive?: Maybe<Scalars['Boolean']>;
  match?: Maybe<MatchEntityResponse>;
  reviver?: Maybe<PlayerEntityResponse>;
  squad?: Maybe<SquadEntityResponse>;
  team?: Maybe<TeamEntityResponse>;
  time?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  victim?: Maybe<PlayerEntityResponse>;
};

export type ReviveEntity = {
  __typename?: 'ReviveEntity';
  attributes?: Maybe<Revive>;
  id?: Maybe<Scalars['ID']>;
};

export type ReviveEntityResponse = {
  __typename?: 'ReviveEntityResponse';
  data?: Maybe<ReviveEntity>;
};

export type ReviveEntityResponseCollection = {
  __typename?: 'ReviveEntityResponseCollection';
  data: Array<ReviveEntity>;
  meta: ResponseCollectionMeta;
};

export type ReviveFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviveFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isLive?: InputMaybe<BooleanFilterInput>;
  match?: InputMaybe<MatchFiltersInput>;
  not?: InputMaybe<ReviveFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ReviveFiltersInput>>>;
  reviver?: InputMaybe<PlayerFiltersInput>;
  squad?: InputMaybe<SquadFiltersInput>;
  team?: InputMaybe<TeamFiltersInput>;
  time?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  victim?: InputMaybe<PlayerFiltersInput>;
};

export type ReviveInput = {
  isLive?: InputMaybe<Scalars['Boolean']>;
  match?: InputMaybe<Scalars['ID']>;
  reviver?: InputMaybe<Scalars['ID']>;
  squad?: InputMaybe<Scalars['ID']>;
  team?: InputMaybe<Scalars['ID']>;
  time?: InputMaybe<Scalars['DateTime']>;
  victim?: InputMaybe<Scalars['ID']>;
};

export type ReviveRelationResponseCollection = {
  __typename?: 'ReviveRelationResponseCollection';
  data: Array<ReviveEntity>;
};

export type Server = {
  __typename?: 'Server';
  createdAt?: Maybe<Scalars['DateTime']>;
  gameVersion?: Maybe<Scalars['String']>;
  isOnline?: Maybe<Scalars['Boolean']>;
  matches?: Maybe<MatchRelationResponseCollection>;
  maxPlayers?: Maybe<Scalars['Int']>;
  playerCount?: Maybe<Scalars['Int']>;
  publicQueue?: Maybe<Scalars['Int']>;
  publicSlots?: Maybe<Scalars['Int']>;
  reserveQueue?: Maybe<Scalars['Int']>;
  reserveSlots?: Maybe<Scalars['Int']>;
  serverName?: Maybe<Scalars['String']>;
  tickrate?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ServerMatchesArgs = {
  filters?: InputMaybe<MatchFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ServerEntity = {
  __typename?: 'ServerEntity';
  attributes?: Maybe<Server>;
  id?: Maybe<Scalars['ID']>;
};

export type ServerEntityResponse = {
  __typename?: 'ServerEntityResponse';
  data?: Maybe<ServerEntity>;
};

export type ServerEntityResponseCollection = {
  __typename?: 'ServerEntityResponseCollection';
  data: Array<ServerEntity>;
  meta: ResponseCollectionMeta;
};

export type ServerFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ServerFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  gameVersion?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isOnline?: InputMaybe<BooleanFilterInput>;
  matches?: InputMaybe<MatchFiltersInput>;
  maxPlayers?: InputMaybe<IntFilterInput>;
  not?: InputMaybe<ServerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ServerFiltersInput>>>;
  playerCount?: InputMaybe<IntFilterInput>;
  publicQueue?: InputMaybe<IntFilterInput>;
  publicSlots?: InputMaybe<IntFilterInput>;
  reserveQueue?: InputMaybe<IntFilterInput>;
  reserveSlots?: InputMaybe<IntFilterInput>;
  serverName?: InputMaybe<StringFilterInput>;
  tickrate?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ServerInput = {
  gameVersion?: InputMaybe<Scalars['String']>;
  isOnline?: InputMaybe<Scalars['Boolean']>;
  matches?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  maxPlayers?: InputMaybe<Scalars['Int']>;
  playerCount?: InputMaybe<Scalars['Int']>;
  publicQueue?: InputMaybe<Scalars['Int']>;
  publicSlots?: InputMaybe<Scalars['Int']>;
  reserveQueue?: InputMaybe<Scalars['Int']>;
  reserveSlots?: InputMaybe<Scalars['Int']>;
  serverName?: InputMaybe<Scalars['String']>;
  tickrate?: InputMaybe<Scalars['Float']>;
};

export type Squad = {
  __typename?: 'Squad';
  createdAt?: Maybe<Scalars['DateTime']>;
  creator?: Maybe<PlayerEntityResponse>;
  deathCount?: Maybe<Scalars['Int']>;
  deaths?: Maybe<KillRelationResponseCollection>;
  finalScore?: Maybe<Scalars['Float']>;
  idr?: Maybe<Scalars['Float']>;
  iir?: Maybe<Scalars['Float']>;
  incapCount?: Maybe<Scalars['Int']>;
  incapVictimCount?: Maybe<Scalars['Int']>;
  incaps?: Maybe<IncapRelationResponseCollection>;
  isLocked?: Maybe<Scalars['Boolean']>;
  kdr?: Maybe<Scalars['Float']>;
  killCount?: Maybe<Scalars['Int']>;
  kills?: Maybe<KillRelationResponseCollection>;
  kir?: Maybe<Scalars['Float']>;
  match?: Maybe<MatchEntityResponse>;
  players?: Maybe<PlayerRelationResponseCollection>;
  reviveCount?: Maybe<Scalars['Int']>;
  revives?: Maybe<ReviveRelationResponseCollection>;
  rir?: Maybe<Scalars['Float']>;
  scoreInf?: Maybe<Scalars['Int']>;
  squadID?: Maybe<Scalars['Int']>;
  squadName?: Maybe<Scalars['String']>;
  team?: Maybe<TeamEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type SquadDeathsArgs = {
  filters?: InputMaybe<KillFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type SquadIncapsArgs = {
  filters?: InputMaybe<IncapFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type SquadKillsArgs = {
  filters?: InputMaybe<KillFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type SquadPlayersArgs = {
  filters?: InputMaybe<PlayerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type SquadRevivesArgs = {
  filters?: InputMaybe<ReviveFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SquadEntity = {
  __typename?: 'SquadEntity';
  attributes?: Maybe<Squad>;
  id?: Maybe<Scalars['ID']>;
};

export type SquadEntityResponse = {
  __typename?: 'SquadEntityResponse';
  data?: Maybe<SquadEntity>;
};

export type SquadEntityResponseCollection = {
  __typename?: 'SquadEntityResponseCollection';
  data: Array<SquadEntity>;
  meta: ResponseCollectionMeta;
};

export type SquadFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SquadFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  creator?: InputMaybe<PlayerFiltersInput>;
  deathCount?: InputMaybe<IntFilterInput>;
  deaths?: InputMaybe<KillFiltersInput>;
  finalScore?: InputMaybe<FloatFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  idr?: InputMaybe<FloatFilterInput>;
  iir?: InputMaybe<FloatFilterInput>;
  incapCount?: InputMaybe<IntFilterInput>;
  incapVictimCount?: InputMaybe<IntFilterInput>;
  incaps?: InputMaybe<IncapFiltersInput>;
  isLocked?: InputMaybe<BooleanFilterInput>;
  kdr?: InputMaybe<FloatFilterInput>;
  killCount?: InputMaybe<IntFilterInput>;
  kills?: InputMaybe<KillFiltersInput>;
  kir?: InputMaybe<FloatFilterInput>;
  match?: InputMaybe<MatchFiltersInput>;
  not?: InputMaybe<SquadFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SquadFiltersInput>>>;
  players?: InputMaybe<PlayerFiltersInput>;
  reviveCount?: InputMaybe<IntFilterInput>;
  revives?: InputMaybe<ReviveFiltersInput>;
  rir?: InputMaybe<FloatFilterInput>;
  scoreInf?: InputMaybe<IntFilterInput>;
  squadID?: InputMaybe<IntFilterInput>;
  squadName?: InputMaybe<StringFilterInput>;
  team?: InputMaybe<TeamFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SquadInput = {
  creator?: InputMaybe<Scalars['ID']>;
  deathCount?: InputMaybe<Scalars['Int']>;
  deaths?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  finalScore?: InputMaybe<Scalars['Float']>;
  idr?: InputMaybe<Scalars['Float']>;
  iir?: InputMaybe<Scalars['Float']>;
  incapCount?: InputMaybe<Scalars['Int']>;
  incapVictimCount?: InputMaybe<Scalars['Int']>;
  incaps?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  isLocked?: InputMaybe<Scalars['Boolean']>;
  kdr?: InputMaybe<Scalars['Float']>;
  killCount?: InputMaybe<Scalars['Int']>;
  kills?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  kir?: InputMaybe<Scalars['Float']>;
  match?: InputMaybe<Scalars['ID']>;
  players?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  reviveCount?: InputMaybe<Scalars['Int']>;
  revives?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  rir?: InputMaybe<Scalars['Float']>;
  scoreInf?: InputMaybe<Scalars['Int']>;
  squadID?: InputMaybe<Scalars['Int']>;
  squadName?: InputMaybe<Scalars['String']>;
  team?: InputMaybe<Scalars['ID']>;
};

export type SquadRelationResponseCollection = {
  __typename?: 'SquadRelationResponseCollection';
  data: Array<SquadEntity>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  eqi?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Team = {
  __typename?: 'Team';
  createdAt?: Maybe<Scalars['DateTime']>;
  deathCount?: Maybe<Scalars['Int']>;
  deaths?: Maybe<KillRelationResponseCollection>;
  endTickets?: Maybe<Scalars['Int']>;
  finalScore?: Maybe<Scalars['Float']>;
  hasWon?: Maybe<Scalars['Boolean']>;
  idr?: Maybe<Scalars['Float']>;
  iir?: Maybe<Scalars['Float']>;
  incapCount?: Maybe<Scalars['Int']>;
  incapVictimCount?: Maybe<Scalars['Int']>;
  incaps?: Maybe<IncapRelationResponseCollection>;
  kdr?: Maybe<Scalars['Float']>;
  killCount?: Maybe<Scalars['Int']>;
  kills?: Maybe<KillRelationResponseCollection>;
  kir?: Maybe<Scalars['Float']>;
  match?: Maybe<MatchEntityResponse>;
  otherLossTickets?: Maybe<Scalars['Int']>;
  reviveCount?: Maybe<Scalars['Int']>;
  revives?: Maybe<ReviveRelationResponseCollection>;
  rir?: Maybe<Scalars['Float']>;
  scoreBully?: Maybe<Scalars['Int']>;
  scoreInf?: Maybe<Scalars['Int']>;
  squads?: Maybe<SquadRelationResponseCollection>;
  startTickets?: Maybe<Scalars['Int']>;
  teamFaction?: Maybe<Scalars['String']>;
  teamID?: Maybe<Scalars['Int']>;
  teamName?: Maybe<Scalars['String']>;
  ticketsLive?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type TeamDeathsArgs = {
  filters?: InputMaybe<KillFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type TeamIncapsArgs = {
  filters?: InputMaybe<IncapFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type TeamKillsArgs = {
  filters?: InputMaybe<KillFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type TeamRevivesArgs = {
  filters?: InputMaybe<ReviveFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type TeamSquadsArgs = {
  filters?: InputMaybe<SquadFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TeamEntity = {
  __typename?: 'TeamEntity';
  attributes?: Maybe<Team>;
  id?: Maybe<Scalars['ID']>;
};

export type TeamEntityResponse = {
  __typename?: 'TeamEntityResponse';
  data?: Maybe<TeamEntity>;
};

export type TeamEntityResponseCollection = {
  __typename?: 'TeamEntityResponseCollection';
  data: Array<TeamEntity>;
  meta: ResponseCollectionMeta;
};

export type TeamFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TeamFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  deathCount?: InputMaybe<IntFilterInput>;
  deaths?: InputMaybe<KillFiltersInput>;
  endTickets?: InputMaybe<IntFilterInput>;
  finalScore?: InputMaybe<FloatFilterInput>;
  hasWon?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  idr?: InputMaybe<FloatFilterInput>;
  iir?: InputMaybe<FloatFilterInput>;
  incapCount?: InputMaybe<IntFilterInput>;
  incapVictimCount?: InputMaybe<IntFilterInput>;
  incaps?: InputMaybe<IncapFiltersInput>;
  kdr?: InputMaybe<FloatFilterInput>;
  killCount?: InputMaybe<IntFilterInput>;
  kills?: InputMaybe<KillFiltersInput>;
  kir?: InputMaybe<FloatFilterInput>;
  match?: InputMaybe<MatchFiltersInput>;
  not?: InputMaybe<TeamFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TeamFiltersInput>>>;
  otherLossTickets?: InputMaybe<IntFilterInput>;
  reviveCount?: InputMaybe<IntFilterInput>;
  revives?: InputMaybe<ReviveFiltersInput>;
  rir?: InputMaybe<FloatFilterInput>;
  scoreBully?: InputMaybe<IntFilterInput>;
  scoreInf?: InputMaybe<IntFilterInput>;
  squads?: InputMaybe<SquadFiltersInput>;
  startTickets?: InputMaybe<IntFilterInput>;
  teamFaction?: InputMaybe<StringFilterInput>;
  teamID?: InputMaybe<IntFilterInput>;
  teamName?: InputMaybe<StringFilterInput>;
  ticketsLive?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TeamInput = {
  deathCount?: InputMaybe<Scalars['Int']>;
  deaths?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  endTickets?: InputMaybe<Scalars['Int']>;
  finalScore?: InputMaybe<Scalars['Float']>;
  hasWon?: InputMaybe<Scalars['Boolean']>;
  idr?: InputMaybe<Scalars['Float']>;
  iir?: InputMaybe<Scalars['Float']>;
  incapCount?: InputMaybe<Scalars['Int']>;
  incapVictimCount?: InputMaybe<Scalars['Int']>;
  incaps?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  kdr?: InputMaybe<Scalars['Float']>;
  killCount?: InputMaybe<Scalars['Int']>;
  kills?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  kir?: InputMaybe<Scalars['Float']>;
  match?: InputMaybe<Scalars['ID']>;
  otherLossTickets?: InputMaybe<Scalars['Int']>;
  reviveCount?: InputMaybe<Scalars['Int']>;
  revives?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  rir?: InputMaybe<Scalars['Float']>;
  scoreBully?: InputMaybe<Scalars['Int']>;
  scoreInf?: InputMaybe<Scalars['Int']>;
  squads?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startTickets?: InputMaybe<Scalars['Int']>;
  teamFaction?: InputMaybe<Scalars['String']>;
  teamID?: InputMaybe<Scalars['Int']>;
  teamName?: InputMaybe<Scalars['String']>;
  ticketsLive?: InputMaybe<Scalars['Int']>;
};

export type TeamRelationResponseCollection = {
  __typename?: 'TeamRelationResponseCollection';
  data: Array<TeamEntity>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Scalars['ID']>;
  folderPath?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String'];
  pathId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  pathId?: InputMaybe<Scalars['Int']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  player?: Maybe<PlayerEntityResponse>;
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  lastName?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  player?: InputMaybe<PlayerFiltersInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  player?: InputMaybe<Scalars['ID']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type GetAllPlayersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPlayersQuery = { __typename?: 'Query', players?: { __typename?: 'PlayerEntityResponseCollection', data: Array<{ __typename?: 'PlayerEntity', id?: string | null, attributes?: { __typename?: 'Player', name: string, steamID: string, isPlaying?: boolean | null, deathCount?: number | null } | null }> } | null };


export const GetAllPlayersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllPlayers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"players"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"steamID"}},{"kind":"Field","name":{"kind":"Name","value":"isPlaying"}},{"kind":"Field","name":{"kind":"Name","value":"deathCount"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAllPlayersQuery, GetAllPlayersQueryVariables>;