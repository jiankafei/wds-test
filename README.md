# wds-test

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
  1. Configure hosts and nginx as above, then switch devserver.sockPath.
  2. You can also use port access directly without nginx. Like "test.wds.com:9527".
