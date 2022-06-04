export interface BeewConfig {
  secret: string;
}

export interface CreateScheduleDto {
  name: string;

  desc?: string;

  url: string;

  type: ScheduleType;

  method: ScheduleMethod;

  trigger?: Date;

  cronExpression?: string;

  notifyOnError: boolean;

  notifyEmail?: string;

  timezone?: string;

  responseType: ScheduleResponseType;

  headers: ScheduleHeader[];

  payload: string;
}

export interface UpdateScheduleDto {
  id: string;

  name?: string;

  desc?: string;

  status?: ScheduleStatus;

  url?: string;

  type?: ScheduleType;

  method?: ScheduleMethod;

  trigger?: Date;

  cronExpression?: string;

  notifyOnError?: boolean;

  notifyEmail?: string;

  timezone?: string;

  headers?: ScheduleHeader[];

  responseType?: ScheduleResponseType;

  payload?: string;
}

export enum ScheduleType {
  ONE_TIME = "ONE_TIME",
  RECURRING = "RECURRING",
}

export enum ScheduleMethod {
  GET = "GET",
  POST = "POST",
  PATCH = "PATCH",
  PUT = "PUT",
  DELETE = "DELETE",
}

export enum ScheduleResponseType {
  ARRAY_BUFFER = "arraybuffer",
  BLOB = "blob",
  DOCUMENT = "document",
  JSON = "json",
  TEXT = "text",
  STREAM = "stream",
}

export enum ScheduleStatus {
  ACTIVE = "ACTIVE",
  PAUSED = "PAUSED",
}

export interface ScheduleHeader {
  key: string;
  value: string;
}

export interface Schedule {
  id: string;

  name: string;

  desc?: string;

  url: string;

  type: ScheduleType;

  method: ScheduleMethod;

  trigger?: Date;

  cronExpression?: string;

  notifyOnError: boolean;

  notifyEmail?: string;

  timezone: string;

  headers: ScheduleHeader[];

  responseType: ScheduleResponseType;

  payload: string;

  status: ScheduleStatus;

  createdAt: Date;

  updatedAt?: Date;
}

export enum ExecutionStatus {
  RUNNING = "RUNNING",
  SUCCESS = "SUCCESS",
  ABORTED = "ABORTED",
  FAILURE = "FAILURE",
  ACCOUNT_LIMIT = "ACCOUNT_LIMIT",
}

export interface Execution {
  id: string;

  status: ExecutionStatus;

  url: string;

  method: ScheduleMethod;

  trigger?: Date;

  cronExpression?: string;

  timezone: string;

  headers: ScheduleHeader[];

  responseTime?: number;

  responseHeaders?: { [key: string]: string };

  responseStatus?: number;

  responseData?: string;

  payload: string;

  createdAt: Date;

  updatedAt?: Date;

  deletedAt?: Date;
}
