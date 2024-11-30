## update DB struktury podle Romanova serveru

1. pinggy udělat tunell
2. v scheme.prisma nastavit pinggy url
3. ```npx prisma db pull```
4. v scheme prisma nastavit zpět url `sqlserver://host.docker.internal:1433;database=GoldenLobster_1;user=prisma;password=prisma;trustServerCertificate=true`
5. ```npx prisma generate```


```prisma
datasource db {
  provider = "sqlserver"
  //url      = "sqlserver://bicodigital.a.pinggy.link:18627;database=GoldenLobster_1;user=prisma;password=prisma;trustServerCertificate=true"
  //url      = "sqlserver://lobsterdev.database.windows.net:1433;database=lobstertest;user=matejnevlud@lobsterdev;password=Manzes1997;encrypt=true;trustServerCertificate=true"
    url      = "sqlserver://host.docker.internal:1433;database=GoldenLobster_1;user=prisma;password=prisma;trustServerCertificate=true"
  //url      = "sqlserver://127.0.0.1:1433;database=GoldenLobster_1;user=sa;password=Manzes1997;trustServerCertificate=true"
}
```


```bash

docker run --hostname=96c77158bca0 --mac-address=02:42:ac:11:00:02 --env=YARN_VERSION=1.22.19 --env=PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin --env=NODE_VERSION=18.20.3 --network=bridge --workdir=/usr/src/app -p 3000:3000 --restart=always --runtime=runc -d ghcr.io/matejnevlud/golden-lobster:latest

```



## Export DB od Romana do macos dockeru
1. TeamViewer
2. Create scripts -> Schema and Data
3. Docker mssql
4. Otevřit vysledny soubor v VSCODE
5. Odstranit "GO" příkazy
4. Table plus -> import SQL DUMP
5. Vybrat encoding (unicode, utf8, utf16)
6. LETS GO