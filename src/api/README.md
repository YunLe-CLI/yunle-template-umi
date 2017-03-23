# api

## 接口方法例表

1. `login`登录
  ```
  import API from './index';
  const query = {
    name: 'test',
    password: '123456',
  };
  API.login(query)
     .then((data) => console.log(data))
     .chtch((err) => console.error(err))
  ```
