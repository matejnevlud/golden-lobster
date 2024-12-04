
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.20.0
 * Query Engine version: 06fc58a368dc7be9fbbbe894adf8d445d208c284
 */
Prisma.prismaVersion = {
  client: "5.20.0",
  engine: "06fc58a368dc7be9fbbbe894adf8d445d208c284"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.DBT_CashInventoriesScalarFieldEnum = {
  ID: 'ID',
  Inventory: 'Inventory',
  DateTime: 'DateTime'
};

exports.Prisma.DBT_CashWithdrawalsScalarFieldEnum = {
  ID: 'ID',
  CashWithdrawal: 'CashWithdrawal',
  DateTime: 'DateTime'
};

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

exports.Prisma.DBT_MealsInGroupsScalarFieldEnum = {
  ID: 'ID',
  ID_Group: 'ID_Group',
  ID_Meal: 'ID_Meal',
  Order: 'Order'
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

exports.Prisma.DBT_PaymentDetailScalarFieldEnum = {
  ID: 'ID',
  ID_Payments: 'ID_Payments',
  ID_OrderItem: 'ID_OrderItem'
};

exports.Prisma.DBT_PaymentMethodsScalarFieldEnum = {
  ID: 'ID',
  Active: 'Active',
  PaymentMethod: 'PaymentMethod'
};

exports.Prisma.DBT_PaymentTaxesScalarFieldEnum = {
  ID: 'ID',
  ID_Payments: 'ID_Payments',
  ID_Tax: 'ID_Tax',
  TaxPercentage: 'TaxPercentage',
  TaxValue: 'TaxValue',
  CalculatedValue: 'CalculatedValue'
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

exports.Prisma.DBT_UILayoutsScalarFieldEnum = {
  ID: 'ID',
  Name: 'Name',
  ViewName: 'ViewName',
  State: 'State'
};

exports.Prisma.DBT_UsersScalarFieldEnum = {
  ID: 'ID',
  Active: 'Active',
  Name: 'Name',
  Password: 'Password',
  Role: 'Role'
};

exports.Prisma.DBT_VariantsScalarFieldEnum = {
  ID: 'ID',
  Active: 'Active',
  Available: 'Available',
  ID_Meal: 'ID_Meal',
  MealVariant: 'MealVariant'
};

exports.Prisma.ExpensesScalarFieldEnum = {
  id: 'id',
  date_time: 'date_time',
  business: 'business',
  description: 'description',
  price: 'price',
  payment_type: 'payment_type',
  vat: 'vat',
  category1: 'category1',
  category2: 'category2',
  note1: 'note1',
  note2: 'note2',
  photos: 'photos',
  created_at: 'created_at',
  synced: 'synced'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};


exports.Prisma.ModelName = {
  DBT_CashInventories: 'DBT_CashInventories',
  DBT_CashWithdrawals: 'DBT_CashWithdrawals',
  DBT_Customer: 'DBT_Customer',
  DBT_CustomerPaymentPayments: 'DBT_CustomerPaymentPayments',
  DBT_CustomerPayments: 'DBT_CustomerPayments',
  DBT_Languages: 'DBT_Languages',
  DBT_Layouts: 'DBT_Layouts',
  DBT_MealGroups: 'DBT_MealGroups',
  DBT_Meals: 'DBT_Meals',
  DBT_MealsInGroups: 'DBT_MealsInGroups',
  DBT_MenuSetUp: 'DBT_MenuSetUp',
  DBT_OrderItems: 'DBT_OrderItems',
  DBT_Orders: 'DBT_Orders',
  DBT_PaymentDetail: 'DBT_PaymentDetail',
  DBT_PaymentMethods: 'DBT_PaymentMethods',
  DBT_PaymentTaxes: 'DBT_PaymentTaxes',
  DBT_Payments: 'DBT_Payments',
  DBT_Tables: 'DBT_Tables',
  DBT_Taxes: 'DBT_Taxes',
  DBT_Translations: 'DBT_Translations',
  DBT_UILayouts: 'DBT_UILayouts',
  DBT_Users: 'DBT_Users',
  DBT_Variants: 'DBT_Variants',
  expenses: 'expenses'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
