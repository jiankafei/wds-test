# wds-test

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### hosts

```hosts
127.0.0.1 test.wds.com
```

### nginx conf
```conf
server {
  listen 80;
  server_name test.wds.com;
  expires -1;
  location / {
    proxy_pass http://127.0.0.1:9527;
  }
}
```

### Explain
Configure hosts and nginx as above, then switch devserver.sockpath
