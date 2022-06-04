# Welcome to beew 👋


> The simplest way of scheduling HTTP requests
> 
## Install

`npm install --save beew`

## Create a Beew Account

You need to have a Beew account to create schedules. Go to [app.beew.io](https://app.beew.io/) and sign up.

## Usage with Typescript

```typescript
import { Beew, ScheduleMethod, ScheduleResponseType, ScheduleType } from "beew";

/*
 * You can find your Beew secret in the Beew dashboard.
 * https://app.beew.io/en/api-settings
 */
const client = new Beew({ secret: "YOU_API_KEY_HERE" });

client.schedule.create({
  name: "test",
  cronExpression: "* * * * *",
  url: "https://beew.io/api/v1/health/ok",
  notifyOnError: false,
  headers: [],
  payload: JSON.stringify({}),
  timezone: "America/Sao_Paulo",
  method: ScheduleMethod.GET,
  responseType: ScheduleResponseType.JSON,
  type: ScheduleType.RECURRING,
});
```

Here is a list of all available methods:

| Method  | Description  |
|---|---|
| client.schedule.create(args)  | Create a new schedule  |
| client.schedule.update(args)  | Update schedule  |
| client.schedule.get('schedule_id')  | Get schedule by id  |
| client.schedule.delete('schedule_id')  | Delete schedule  |
| client.execution.get('execution_id')  | Get execution by id  |


## 📝 License

This project is [MIT](https://github.com/Beew-io/beew-sdk/blob/master/LICENSE) licensed.

---
