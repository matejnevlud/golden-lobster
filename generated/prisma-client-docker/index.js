
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.14.0
 * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
 */
Prisma.prismaVersion = {
  client: "5.14.0",
  engine: "e9771e62de70f79a5e1c604a2d7c8e2a0a874b48"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable',
  Snapshot: 'Snapshot'
});

exports.Prisma.DBT_CustomerScalarFieldEnum = {
  ID: 'ID',
  Active: 'Active',
  Customer: 'Customer',
  Name: 'Name',
  Surname: 'Surname',
  PhoneNr: 'PhoneNr',
  Email: 'Email',
  Discount: 'Discount'
};

exports.Prisma.DBT_LanguagesScalarFieldEnum = {
  ID: 'ID',
  Active: 'Active',
  Language: 'Language',
  DisplayText: 'DisplayText',
  Flag: 'Flag'
};

exports.Prisma.DBT_LayoutsScalarFieldEnum = {
  ID: 'ID',
  Active: 'Active',
  Type: 'Type',
  Name: 'Name',
  Xml: 'Xml',
  TextBox: 'TextBox'
};

exports.Prisma.DBT_MealGroupsScalarFieldEnum = {
  ID: 'ID',
  Active: 'Active',
  MealGroup: 'MealGroup',
  ID_Layout: 'ID_Layout',
  BackgroudPicture: 'BackgroudPicture',
  Order: 'Order',
  VisibleInMenu: 'VisibleInMenu'
};

exports.Prisma.DBT_MealsScalarFieldEnum = {
  ID: 'ID',
  Active: 'Active',
  Kitchen: 'Kitchen',
  Available: 'Available',
  Meal: 'Meal',
  MealDescription: 'MealDescription',
  Price: 'Price',
  IsCombo: 'IsCombo',
  Picture: 'Picture',
  PictureDescription: 'PictureDescription',
  Recipe: 'Recipe',
  Dicountable: 'Dicountable'
};

exports.Prisma.DBT_MenuSetUpScalarFieldEnum = {
  ID: 'ID',
  Active: 'Active',
  LogoImage: 'LogoImage',
  BackgroundColor: 'BackgroundColor',
  HeaderText: 'HeaderText',
  FooterText: 'FooterText'
};

exports.Prisma.DBT_OrderItemsScalarFieldEnum = {
  ID: 'ID',
  ID_Order: 'ID_Order',
  Canceled: 'Canceled',
  ID_Meal: 'ID_Meal',
  ID_Variant: 'ID_Variant',
  Price: 'Price',
  TimeOfOrder: 'TimeOfOrder',
  ID_User: 'ID_User',
  Time_Prepared: 'Time_Prepared',
  Time_Delivered: 'Time_Delivered',
  ID_Payment: 'ID_Payment',
  Note: 'Note',
  Discountable: 'Discountable'
};

exports.Prisma.DBT_OrdersScalarFieldEnum = {
  ID: 'ID',
  ID_Table: 'ID_Table',
  OrderName: 'OrderName',
  ID_Customer: 'ID_Customer',
  DateTime: 'DateTime',
  Canceled: 'Canceled',
  Price: 'Price',
  OrderClosed: 'OrderClosed',
  Note: 'Note',
  ID_User: 'ID_User'
};

exports.Prisma.DBT_PaymentMethodsScalarFieldEnum = {
  ID: 'ID',
  Active: 'Active',
  PaymentMethod: 'PaymentMethod'
};

exports.Prisma.DBT_TablesScalarFieldEnum = {
  ID: 'ID',
  Active: 'Active',
  TableName: 'TableName',
  Col: 'Col'
};

exports.Prisma.DBT_TaxesScalarFieldEnum = {
  ID: 'ID',
  Active: 'Active',
  ByDefault: 'ByDefault',
  TaxName: 'TaxName',
  TaxDescription: 'TaxDescription',
  Percentage: 'Percentage',
  Value: 'Value'
};

exports.Prisma.DBT_TranslationsScalarFieldEnum = {
  ID: 'ID',
  ID_Language: 'ID_Language',
  Text: 'Text',
  Translation: 'Translation'
};

exports.Prisma.DBT_UsersScalarFieldEnum = {
  ID: 'ID',
  Active: 'Active',
  Name: 'Name',
  Password: 'Password',
  Role: 'Role'
};

exports.Prisma.DBT_MealsInGroupsScalarFieldEnum = {
  ID: 'ID',
  ID_Group: 'ID_Group',
  ID_Meal: 'ID_Meal',
  Order: 'Order'
};

exports.Prisma.DBT_VariantsScalarFieldEnum = {
  ID: 'ID',
  Active: 'Active',
  Available: 'Available',
  ID_Meal: 'ID_Meal',
  MealVariant: 'MealVariant'
};

exports.Prisma.DBT_PaymentDetailScalarFieldEnum = {
  ID: 'ID',
  ID_Payments: 'ID_Payments',
  ID_OrderItem: 'ID_OrderItem'
};

exports.Prisma.DBT_PaymentsScalarFieldEnum = {
  ID: 'ID',
  TotalAmount: 'TotalAmount',
  ID_PaymentMethod: 'ID_PaymentMethod',
  Discount: 'Discount',
  ID_Customer: 'ID_Customer',
  Closed: 'Closed',
  Reported: 'Reported',
  Printed: 'Printed',
  ItemsCost: 'ItemsCost',
  Taxes: 'Taxes',
  TimeOfPay: 'TimeOfPay',
  ID_User: 'ID_User',
  Vaucher: 'Vaucher',
  RealPayment: 'RealPayment',
  DiscountPercent: 'DiscountPercent',
  Deleted: 'Deleted'
};

exports.Prisma.DBT_PaymentTaxesScalarFieldEnum = {
  ID: 'ID',
  ID_Payments: 'ID_Payments',
  ID_Tax: 'ID_Tax'
};

exports.Prisma.DBT_CashWithdrawalsScalarFieldEnum = {
  ID: 'ID',
  CashWithdrawal: 'CashWithdrawal',
  DateTime: 'DateTime'
};

exports.Prisma.DBT_CustomerPaymentPaymentsScalarFieldEnum = {
  ID: 'ID',
  ID_CutomerPayment: 'ID_CutomerPayment',
  ID_Payments: 'ID_Payments'
};

exports.Prisma.DBT_CustomerPaymentsScalarFieldEnum = {
  ID: 'ID',
  ID_Customer: 'ID_Customer',
  Payment: 'Payment',
  Date: 'Date',
  Active: 'Active',
  ID_User: 'ID_User'
};

exports.Prisma.DBT_UILayoutsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  viewName: 'viewName',
  state: 'state'
};

exports.Prisma.SysdiagramsScalarFieldEnum = {
  name: 'name',
  principal_id: 'principal_id',
  diagram_id: 'diagram_id',
  version: 'version',
  definition: 'definition'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  DBT_Customer: 'DBT_Customer',
  DBT_Languages: 'DBT_Languages',
  DBT_Layouts: 'DBT_Layouts',
  DBT_MealGroups: 'DBT_MealGroups',
  DBT_Meals: 'DBT_Meals',
  DBT_MenuSetUp: 'DBT_MenuSetUp',
  DBT_OrderItems: 'DBT_OrderItems',
  DBT_Orders: 'DBT_Orders',
  DBT_PaymentMethods: 'DBT_PaymentMethods',
  DBT_Tables: 'DBT_Tables',
  DBT_Taxes: 'DBT_Taxes',
  DBT_Translations: 'DBT_Translations',
  DBT_Users: 'DBT_Users',
  DBT_MealsInGroups: 'DBT_MealsInGroups',
  DBT_Variants: 'DBT_Variants',
  DBT_PaymentDetail: 'DBT_PaymentDetail',
  DBT_Payments: 'DBT_Payments',
  DBT_PaymentTaxes: 'DBT_PaymentTaxes',
  DBT_CashWithdrawals: 'DBT_CashWithdrawals',
  DBT_CustomerPaymentPayments: 'DBT_CustomerPaymentPayments',
  DBT_CustomerPayments: 'DBT_CustomerPayments',
  DBT_UILayouts: 'DBT_UILayouts',
  sysdiagrams: 'sysdiagrams'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/matejnevlud/github/golden-lobster/generated/prisma-client-docker",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      },
      {
        "fromEnvVar": null,
        "value": "debian-openssl-1.1.x"
      },
      {
        "fromEnvVar": null,
        "value": "linux-musl-openssl-3.0.x"
      },
      {
        "fromEnvVar": null,
        "value": "linux-musl-arm64-openssl-3.0.x"
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "5.14.0",
  "engineVersion": "e9771e62de70f79a5e1c604a2d7c8e2a0a874b48",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "sqlserver",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": null,
        "value": "sqlserver://host.docker.internal:1433;database=GoldenLobster_1;user=prisma;password=prisma;trustServerCertificate=true;connectionLimit=20;poolTimeout=20"
      }
    }
  },
  "inlineSchema": "generator client {\n  provider      = \"prisma-client-js\"\n  output        = \"../generated/prisma-client-docker\"\n  binaryTargets = [\"native\", \"debian-openssl-1.1.x\", \"linux-musl-openssl-3.0.x\", \"linux-musl-arm64-openssl-3.0.x\"]\n}\n\ndatasource db {\n  provider = \"sqlserver\"\n  //url      = \"sqlserver://bicodigital.a.pinggy.link:18627;database=GoldenLobster_1;user=prisma;password=prisma;trustServerCertificate=true;connectionLimit=20;poolTimeout=20\"\n  url      = \"sqlserver://host.docker.internal:1433;database=GoldenLobster_1;user=prisma;password=prisma;trustServerCertificate=true;connectionLimit=20;poolTimeout=20\"\n  //url      = \"sqlserver://127.0.0.1:1433;database=GoldenLobster_1;user=sa;password=Manzes1997;trustServerCertificate=true;connectionLimit=20;poolTimeout=20\"\n}\n\nmodel DBT_Customer {\n  ID       BigInt   @id(map: \"PK_DBT_Customer\") @default(autoincrement())\n  Active   Boolean? @default(true, map: \"DF_DBT_Customer_Active\")\n  Customer String?  @db.VarChar(Max)\n  Name     String?  @db.VarChar(Max)\n  Surname  String?  @db.VarChar(Max)\n  PhoneNr  String?  @db.VarChar(Max)\n  Email    String?  @db.VarChar(Max)\n  Discount Decimal? @db.Decimal(18, 2)\n}\n\nmodel DBT_Languages {\n  ID          BigInt  @id(map: \"PK_DBT_Languages\") @default(autoincrement())\n  Active      Boolean @default(true, map: \"DF_DBT_Languages_Active\")\n  Language    String? @db.VarChar(Max)\n  DisplayText String? @db.NVarChar(Max)\n  Flag        Bytes?  @db.Image\n}\n\nmodel DBT_Layouts {\n  ID      BigInt  @id(map: \"PK_DBT_Layouts\") @default(autoincrement())\n  Active  Boolean @default(true, map: \"DF_DBT_Layouts_Active\")\n  Type    String? @db.VarChar(Max)\n  Name    String? @db.VarChar(Max)\n  Xml     String? @db.Xml\n  TextBox String? @db.VarChar(Max)\n}\n\nmodel DBT_MealGroups {\n  ID               BigInt  @id(map: \"PK_DBT_FoodGroups\") @default(autoincrement())\n  Active           Boolean @default(true, map: \"DF_DBT_FoodGroups_Active\")\n  MealGroup        String? @db.VarChar(Max)\n  ID_Layout        BigInt?\n  BackgroudPicture Bytes?  @db.Image\n  Order            Int?\n  VisibleInMenu    Boolean @default(false, map: \"DF_DBT_MealGroups_VisibleInMenu\")\n}\n\nmodel DBT_Meals {\n  ID                 BigInt   @id(map: \"PK_DBT_Meals\") @default(autoincrement())\n  Active             Boolean  @default(true, map: \"DF_DBT_Meals_Active\")\n  Kitchen            Boolean? @default(true, map: \"DF_DBT_Meals_Kitchen\")\n  Available          Boolean? @default(true, map: \"DF_DBT_Meals_Available\")\n  Meal               String?  @db.VarChar(Max)\n  MealDescription    String?  @db.VarChar(Max)\n  Price              Decimal? @db.Decimal(18, 3)\n  IsCombo            Boolean  @default(false, map: \"DF_DBT_Meals_IsCombo\")\n  Picture            Bytes?\n  PictureDescription String?  @db.VarChar(Max)\n  Recipe             Bytes?\n  Dicountable        Decimal? @default(1, map: \"DF_DBT_Meals_Dicountable\") @db.Decimal(18, 2)\n}\n\nmodel DBT_MenuSetUp {\n  ID              BigInt  @id(map: \"PK_DBT_MenuSetUp\") @default(autoincrement())\n  Active          Boolean @default(true, map: \"DF_DBT_MenuSetUp_Active\")\n  LogoImage       Bytes?\n  BackgroundColor BigInt?\n  HeaderText      String? @db.VarChar(Max)\n  FooterText      String? @db.VarChar(Max)\n}\n\nmodel DBT_OrderItems {\n  ID             BigInt    @id(map: \"PK_DBT_OrderItems\") @default(autoincrement())\n  ID_Order       BigInt?\n  Canceled       Boolean?  @default(false, map: \"DF_DBT_OrderItems_Canceled\")\n  ID_Meal        BigInt?\n  ID_Variant     BigInt?\n  Price          Decimal?  @db.Decimal(18, 3)\n  TimeOfOrder    DateTime? @default(now(), map: \"DF_DBT_OrderItems_TimeOfOrder\") @db.DateTime\n  ID_User        BigInt?\n  Time_Prepared  DateTime? @db.DateTime\n  Time_Delivered DateTime? @db.DateTime\n  ID_Payment     BigInt?\n  Note           String?   @db.NVarChar(Max)\n  Discountable   Decimal?  @default(1, map: \"DF_DBT_OrderItems_Discountable\") @db.Decimal(18, 2)\n}\n\nmodel DBT_Orders {\n  ID          BigInt    @id(map: \"PK_DBT_Orders\") @default(autoincrement())\n  ID_Table    BigInt?\n  OrderName   String?   @db.VarChar(Max)\n  ID_Customer BigInt?\n  DateTime    DateTime? @default(now(), map: \"DF_DBT_Orders_DateTime\") @db.DateTime\n  Canceled    Boolean?  @default(false, map: \"DF_DBT_Orders_Canceled\")\n  Price       Decimal?  @db.Decimal(18, 3)\n  OrderClosed Boolean?  @default(false, map: \"DF_DBT_Orders_OrderClosed\")\n  Note        String?   @db.NVarChar(Max)\n  ID_User     BigInt?\n}\n\nmodel DBT_PaymentMethods {\n  ID            BigInt   @id(map: \"PK_DBT_PaymentMethods\") @default(autoincrement())\n  Active        Boolean? @default(true, map: \"DF_DBT_PaymentMethods_Active\")\n  PaymentMethod String?  @db.VarChar(Max)\n}\n\nmodel DBT_Tables {\n  ID        BigInt  @id(map: \"PK_DBT_Tables\") @default(autoincrement())\n  Active    Boolean @default(true, map: \"DF_DBT_Tables_Active\")\n  TableName String? @db.VarChar(Max)\n  Col       Int?    @db.SmallInt\n}\n\nmodel DBT_Taxes {\n  ID             BigInt   @id(map: \"PK_DBT_Taxes\") @default(autoincrement())\n  Active         Boolean  @default(true, map: \"DF_DBT_Taxes_Active\")\n  ByDefault      Boolean? @default(true, map: \"DF_DBT_Taxes_ByDefault\")\n  TaxName        String?  @db.VarChar(Max)\n  TaxDescription String?  @db.VarChar(Max)\n  Percentage     Decimal? @db.Decimal(18, 2)\n  Value          Decimal? @db.Decimal(18, 2)\n}\n\nmodel DBT_Translations {\n  ID          BigInt  @id(map: \"PK_DBT_Translations\") @default(autoincrement())\n  ID_Language BigInt?\n  Text        String? @db.VarChar(Max)\n  Translation String? @db.NVarChar(Max)\n}\n\nmodel DBT_Users {\n  ID       BigInt   @id(map: \"PK_DBT_Users\") @default(autoincrement())\n  Active   Boolean? @default(true, map: \"DF_DBT_Users_Active\")\n  Name     String?  @db.VarChar(Max)\n  Password String?  @db.VarChar(Max)\n  Role     BigInt?\n}\n\nmodel DBT_MealsInGroups {\n  ID       BigInt  @unique(map: \"PK_DBT_MealsInGroups\", clustered: true) @default(autoincrement())\n  ID_Group BigInt?\n  ID_Meal  BigInt?\n  Order    Int?\n}\n\nmodel DBT_Variants {\n  ID          BigInt   @id(map: \"PK_DBT_Variants\") @default(autoincrement())\n  Active      Boolean  @default(true, map: \"DF_DBT_Variants_Active\")\n  Available   Boolean? @default(true, map: \"DF_DBT_Variants_Available\")\n  ID_Meal     BigInt?\n  MealVariant String?  @db.VarChar(Max)\n}\n\nmodel DBT_PaymentDetail {\n  ID           BigInt  @id(map: \"PK_DBT_PaymentDetail\")\n  ID_Payments  BigInt?\n  ID_OrderItem BigInt?\n}\n\nmodel DBT_Payments {\n  ID               BigInt    @id(map: \"PK_DBT_Payments\") @default(autoincrement())\n  TotalAmount      Decimal?  @db.Decimal(18, 3)\n  ID_PaymentMethod BigInt?\n  Discount         Decimal?  @db.Decimal(18, 3)\n  ID_Customer      BigInt?\n  Closed           Boolean?\n  Reported         Boolean?  @default(true, map: \"DF_DBT_Payments_Reported\")\n  Printed          Boolean?  @default(false, map: \"DF_DBT_Payments_Printed\")\n  ItemsCost        Decimal?  @db.Decimal(18, 3)\n  Taxes            Decimal?  @db.Decimal(18, 3)\n  TimeOfPay        DateTime? @default(now(), map: \"DF_DBT_Payments_TimeOfPay\") @db.DateTime\n  ID_User          BigInt?\n  Vaucher          String?   @db.VarChar(50)\n  RealPayment      Decimal?  @db.Decimal(18, 3)\n  DiscountPercent  Decimal   @default(0, map: \"DF_DBT_Payments_DiscountPercent\") @db.Decimal(18, 3)\n  Deleted          Boolean?  @default(false, map: \"DF_DBT_Payments_Deleted\")\n}\n\nmodel DBT_PaymentTaxes {\n  ID          BigInt  @id(map: \"PK_DBT_PaymentTaxes\") @default(autoincrement())\n  ID_Payments BigInt?\n  ID_Tax      BigInt?\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel DBT_CashInventories {\n  ID        BigInt    @default(autoincrement())\n  Inventory Decimal?  @db.Decimal(18, 3)\n  DateTime  DateTime? @default(now(), map: \"DF_Table_1_DateTima\") @db.DateTime\n\n  @@ignore\n}\n\nmodel DBT_CashWithdrawals {\n  ID             BigInt    @id(map: \"PK_DBT_CashWithdrawals\") @default(autoincrement())\n  CashWithdrawal Decimal?  @db.Decimal(18, 3)\n  DateTime       DateTime? @default(now(), map: \"DF_DBT_CashWithdrawals_DateTime\") @db.DateTime\n}\n\nmodel DBT_CustomerPaymentPayments {\n  ID                BigInt  @id(map: \"PK_DBT_CustomerPaymentPayments\") @default(autoincrement())\n  ID_CutomerPayment BigInt?\n  ID_Payments       BigInt?\n}\n\nmodel DBT_CustomerPayments {\n  ID          BigInt    @id(map: \"PK_DBT_CustomerPayments\") @default(autoincrement())\n  ID_Customer BigInt?\n  Payment     Decimal?  @db.Decimal(18, 3)\n  Date        DateTime? @db.DateTime\n  Active      Boolean?  @default(true, map: \"DF_DBT_CustomerPayments_Active\")\n  ID_User     BigInt?\n}\n\nmodel DBT_UILayouts {\n  id       BigInt  @id(map: \"PK__DBT_UILa__3213E83F22A31156\") @default(autoincrement())\n  name     String? @db.VarChar(Max)\n  viewName String? @db.VarChar(Max)\n  state    String? @db.Text\n}\n\nmodel sysdiagrams {\n  name         String @db.NVarChar(128)\n  principal_id Int\n  diagram_id   Int    @id(map: \"PK__sysdiagr__C2B05B6116E4C24C\") @default(autoincrement())\n  version      Int?\n  definition   Bytes?\n\n  @@unique([principal_id, name], map: \"UK_principal_name\")\n}\n",
  "inlineSchemaHash": "2e0e201245a164d122b313d63cae020af0cd2816512e27dafca0cbe8b0b0dde7",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "generated/prisma-client-docker",
    "prisma-client-docker",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"DBT_Customer\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Customer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Surname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PhoneNr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Discount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DBT_Languages\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Language\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DisplayText\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Flag\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DBT_Layouts\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Xml\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TextBox\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DBT_MealGroups\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MealGroup\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ID_Layout\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BackgroudPicture\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Order\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VisibleInMenu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DBT_Meals\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Kitchen\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Available\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Meal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MealDescription\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IsCombo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Picture\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PictureDescription\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Recipe\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Dicountable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DBT_MenuSetUp\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LogoImage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BackgroundColor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HeaderText\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FooterText\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DBT_OrderItems\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ID_Order\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Canceled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ID_Meal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ID_Variant\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TimeOfOrder\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ID_User\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Time_Prepared\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Time_Delivered\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ID_Payment\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Note\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Discountable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DBT_Orders\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ID_Table\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OrderName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ID_Customer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DateTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Canceled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OrderClosed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Note\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ID_User\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DBT_PaymentMethods\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PaymentMethod\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DBT_Tables\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TableName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Col\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DBT_Taxes\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ByDefault\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TaxName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TaxDescription\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Percentage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DBT_Translations\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ID_Language\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Translation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DBT_Users\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Role\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DBT_MealsInGroups\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ID_Group\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ID_Meal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Order\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DBT_Variants\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Available\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ID_Meal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MealVariant\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DBT_PaymentDetail\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ID_Payments\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ID_OrderItem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DBT_Payments\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TotalAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ID_PaymentMethod\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Discount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ID_Customer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Closed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Reported\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Printed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ItemsCost\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Taxes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TimeOfPay\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ID_User\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Vaucher\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RealPayment\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DiscountPercent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DBT_PaymentTaxes\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ID_Payments\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ID_Tax\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DBT_CashWithdrawals\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CashWithdrawal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DateTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DBT_CustomerPaymentPayments\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ID_CutomerPayment\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ID_Payments\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DBT_CustomerPayments\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ID_Customer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Payment\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ID_User\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DBT_UILayouts\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"viewName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"state\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"sysdiagrams\":{\"dbName\":null,\"fields\":[{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"principal_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"diagram_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"version\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"definition\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"principal_id\",\"name\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"principal_id\",\"name\"]}],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
path.join(process.cwd(), "generated/prisma-client-docker/libquery_engine-darwin-arm64.dylib.node")

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-debian-openssl-1.1.x.so.node");
path.join(process.cwd(), "generated/prisma-client-docker/libquery_engine-debian-openssl-1.1.x.so.node")

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-linux-musl-openssl-3.0.x.so.node");
path.join(process.cwd(), "generated/prisma-client-docker/libquery_engine-linux-musl-openssl-3.0.x.so.node")

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-linux-musl-arm64-openssl-3.0.x.so.node");
path.join(process.cwd(), "generated/prisma-client-docker/libquery_engine-linux-musl-arm64-openssl-3.0.x.so.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "generated/prisma-client-docker/schema.prisma")
