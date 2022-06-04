const axios = require("axios").default;

import { handleError } from "./handlers";
import { BeewConfig, CreateScheduleDto, Execution, Schedule, UpdateScheduleDto } from "./interfaces";

const BASE_URL = "https://beew.io/api/v1";

class ScheduleClient {
  constructor(private readonly _config: BeewConfig) {}

  public async create(dto: CreateScheduleDto): Promise<Schedule> {
    const res = await axios.post(`${BASE_URL}/schedule`, dto, { headers: { "X-API-KEY": this._config.secret } }).catch(handleError);
    return res.data;
  }

  public async get(scheduleId: string): Promise<Schedule> {
    const res = await axios.get(`${BASE_URL}/schedule/${scheduleId}`, { headers: { "X-API-KEY": this._config.secret } }).catch(handleError);
    return res.data;
  }

  public async delete(scheduleId: string): Promise<void> {
    await axios.delete(`${BASE_URL}/schedule/${scheduleId}`, { headers: { "X-API-KEY": this._config.secret } }).catch(handleError);
  }

  public async update(dto: UpdateScheduleDto): Promise<Schedule> {
    const res = await axios.patch(`${BASE_URL}/schedule`, dto, { headers: { "X-API-KEY": this._config.secret } }).catch(handleError);
    return res.data;
  }
}

class ExecutionClient {
  constructor(private readonly _config: BeewConfig) {}

  public async get(executionId: string): Promise<Execution> {
    const res = await axios.get(`${BASE_URL}/execution/${executionId}`, { headers: { "X-API-KEY": this._config.secret } }).catch(handleError);
    return res.data;
  }
}

export class Beew {
  public readonly schedule = new ScheduleClient(this._config);

  public readonly execution = new ExecutionClient(this._config);

  constructor(private readonly _config: BeewConfig) {}
}
