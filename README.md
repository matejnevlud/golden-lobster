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
