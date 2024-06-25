
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model DBT_Customer
 * 
 */
export type DBT_Customer = $Result.DefaultSelection<Prisma.$DBT_CustomerPayload>
/**
 * Model DBT_Languages
 * 
 */
export type DBT_Languages = $Result.DefaultSelection<Prisma.$DBT_LanguagesPayload>
/**
 * Model DBT_Layouts
 * 
 */
export type DBT_Layouts = $Result.DefaultSelection<Prisma.$DBT_LayoutsPayload>
/**
 * Model DBT_MealGroups
 * 
 */
export type DBT_MealGroups = $Result.DefaultSelection<Prisma.$DBT_MealGroupsPayload>
/**
 * Model DBT_Meals
 * 
 */
export type DBT_Meals = $Result.DefaultSelection<Prisma.$DBT_MealsPayload>
/**
 * Model DBT_MenuSetUp
 * 
 */
export type DBT_MenuSetUp = $Result.DefaultSelection<Prisma.$DBT_MenuSetUpPayload>
/**
 * Model DBT_OrderItems
 * 
 */
export type DBT_OrderItems = $Result.DefaultSelection<Prisma.$DBT_OrderItemsPayload>
/**
 * Model DBT_Orders
 * 
 */
export type DBT_Orders = $Result.DefaultSelection<Prisma.$DBT_OrdersPayload>
/**
 * Model DBT_PaymentMethods
 * 
 */
export type DBT_PaymentMethods = $Result.DefaultSelection<Prisma.$DBT_PaymentMethodsPayload>
/**
 * Model DBT_Tables
 * 
 */
export type DBT_Tables = $Result.DefaultSelection<Prisma.$DBT_TablesPayload>
/**
 * Model DBT_Taxes
 * 
 */
export type DBT_Taxes = $Result.DefaultSelection<Prisma.$DBT_TaxesPayload>
/**
 * Model DBT_Translations
 * 
 */
export type DBT_Translations = $Result.DefaultSelection<Prisma.$DBT_TranslationsPayload>
/**
 * Model DBT_Users
 * 
 */
export type DBT_Users = $Result.DefaultSelection<Prisma.$DBT_UsersPayload>
/**
 * Model DBT_MealsInGroups
 * 
 */
export type DBT_MealsInGroups = $Result.DefaultSelection<Prisma.$DBT_MealsInGroupsPayload>
/**
 * Model DBT_Variants
 * 
 */
export type DBT_Variants = $Result.DefaultSelection<Prisma.$DBT_VariantsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more DBT_Customers
 * const dBT_Customers = await prisma.dBT_Customer.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more DBT_Customers
   * const dBT_Customers = await prisma.dBT_Customer.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.dBT_Customer`: Exposes CRUD operations for the **DBT_Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DBT_Customers
    * const dBT_Customers = await prisma.dBT_Customer.findMany()
    * ```
    */
  get dBT_Customer(): Prisma.DBT_CustomerDelegate<ExtArgs>;

  /**
   * `prisma.dBT_Languages`: Exposes CRUD operations for the **DBT_Languages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DBT_Languages
    * const dBT_Languages = await prisma.dBT_Languages.findMany()
    * ```
    */
  get dBT_Languages(): Prisma.DBT_LanguagesDelegate<ExtArgs>;

  /**
   * `prisma.dBT_Layouts`: Exposes CRUD operations for the **DBT_Layouts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DBT_Layouts
    * const dBT_Layouts = await prisma.dBT_Layouts.findMany()
    * ```
    */
  get dBT_Layouts(): Prisma.DBT_LayoutsDelegate<ExtArgs>;

  /**
   * `prisma.dBT_MealGroups`: Exposes CRUD operations for the **DBT_MealGroups** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DBT_MealGroups
    * const dBT_MealGroups = await prisma.dBT_MealGroups.findMany()
    * ```
    */
  get dBT_MealGroups(): Prisma.DBT_MealGroupsDelegate<ExtArgs>;

  /**
   * `prisma.dBT_Meals`: Exposes CRUD operations for the **DBT_Meals** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DBT_Meals
    * const dBT_Meals = await prisma.dBT_Meals.findMany()
    * ```
    */
  get dBT_Meals(): Prisma.DBT_MealsDelegate<ExtArgs>;

  /**
   * `prisma.dBT_MenuSetUp`: Exposes CRUD operations for the **DBT_MenuSetUp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DBT_MenuSetUps
    * const dBT_MenuSetUps = await prisma.dBT_MenuSetUp.findMany()
    * ```
    */
  get dBT_MenuSetUp(): Prisma.DBT_MenuSetUpDelegate<ExtArgs>;

  /**
   * `prisma.dBT_OrderItems`: Exposes CRUD operations for the **DBT_OrderItems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DBT_OrderItems
    * const dBT_OrderItems = await prisma.dBT_OrderItems.findMany()
    * ```
    */
  get dBT_OrderItems(): Prisma.DBT_OrderItemsDelegate<ExtArgs>;

  /**
   * `prisma.dBT_Orders`: Exposes CRUD operations for the **DBT_Orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DBT_Orders
    * const dBT_Orders = await prisma.dBT_Orders.findMany()
    * ```
    */
  get dBT_Orders(): Prisma.DBT_OrdersDelegate<ExtArgs>;

  /**
   * `prisma.dBT_PaymentMethods`: Exposes CRUD operations for the **DBT_PaymentMethods** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DBT_PaymentMethods
    * const dBT_PaymentMethods = await prisma.dBT_PaymentMethods.findMany()
    * ```
    */
  get dBT_PaymentMethods(): Prisma.DBT_PaymentMethodsDelegate<ExtArgs>;

  /**
   * `prisma.dBT_Tables`: Exposes CRUD operations for the **DBT_Tables** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DBT_Tables
    * const dBT_Tables = await prisma.dBT_Tables.findMany()
    * ```
    */
  get dBT_Tables(): Prisma.DBT_TablesDelegate<ExtArgs>;

  /**
   * `prisma.dBT_Taxes`: Exposes CRUD operations for the **DBT_Taxes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DBT_Taxes
    * const dBT_Taxes = await prisma.dBT_Taxes.findMany()
    * ```
    */
  get dBT_Taxes(): Prisma.DBT_TaxesDelegate<ExtArgs>;

  /**
   * `prisma.dBT_Translations`: Exposes CRUD operations for the **DBT_Translations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DBT_Translations
    * const dBT_Translations = await prisma.dBT_Translations.findMany()
    * ```
    */
  get dBT_Translations(): Prisma.DBT_TranslationsDelegate<ExtArgs>;

  /**
   * `prisma.dBT_Users`: Exposes CRUD operations for the **DBT_Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DBT_Users
    * const dBT_Users = await prisma.dBT_Users.findMany()
    * ```
    */
  get dBT_Users(): Prisma.DBT_UsersDelegate<ExtArgs>;

  /**
   * `prisma.dBT_MealsInGroups`: Exposes CRUD operations for the **DBT_MealsInGroups** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DBT_MealsInGroups
    * const dBT_MealsInGroups = await prisma.dBT_MealsInGroups.findMany()
    * ```
    */
  get dBT_MealsInGroups(): Prisma.DBT_MealsInGroupsDelegate<ExtArgs>;

  /**
   * `prisma.dBT_Variants`: Exposes CRUD operations for the **DBT_Variants** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DBT_Variants
    * const dBT_Variants = await prisma.dBT_Variants.findMany()
    * ```
    */
  get dBT_Variants(): Prisma.DBT_VariantsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.14.0
   * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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
    DBT_Variants: 'DBT_Variants'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'dBT_Customer' | 'dBT_Languages' | 'dBT_Layouts' | 'dBT_MealGroups' | 'dBT_Meals' | 'dBT_MenuSetUp' | 'dBT_OrderItems' | 'dBT_Orders' | 'dBT_PaymentMethods' | 'dBT_Tables' | 'dBT_Taxes' | 'dBT_Translations' | 'dBT_Users' | 'dBT_MealsInGroups' | 'dBT_Variants'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      DBT_Customer: {
        payload: Prisma.$DBT_CustomerPayload<ExtArgs>
        fields: Prisma.DBT_CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DBT_CustomerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DBT_CustomerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_CustomerPayload>
          }
          findFirst: {
            args: Prisma.DBT_CustomerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DBT_CustomerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_CustomerPayload>
          }
          findMany: {
            args: Prisma.DBT_CustomerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_CustomerPayload>[]
          }
          create: {
            args: Prisma.DBT_CustomerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_CustomerPayload>
          }
          createMany: {
            args: Prisma.DBT_CustomerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DBT_CustomerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_CustomerPayload>
          }
          update: {
            args: Prisma.DBT_CustomerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_CustomerPayload>
          }
          deleteMany: {
            args: Prisma.DBT_CustomerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DBT_CustomerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DBT_CustomerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_CustomerPayload>
          }
          aggregate: {
            args: Prisma.DBT_CustomerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDBT_Customer>
          }
          groupBy: {
            args: Prisma.DBT_CustomerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DBT_CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.DBT_CustomerCountArgs<ExtArgs>,
            result: $Utils.Optional<DBT_CustomerCountAggregateOutputType> | number
          }
        }
      }
      DBT_Languages: {
        payload: Prisma.$DBT_LanguagesPayload<ExtArgs>
        fields: Prisma.DBT_LanguagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DBT_LanguagesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_LanguagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DBT_LanguagesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_LanguagesPayload>
          }
          findFirst: {
            args: Prisma.DBT_LanguagesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_LanguagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DBT_LanguagesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_LanguagesPayload>
          }
          findMany: {
            args: Prisma.DBT_LanguagesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_LanguagesPayload>[]
          }
          create: {
            args: Prisma.DBT_LanguagesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_LanguagesPayload>
          }
          createMany: {
            args: Prisma.DBT_LanguagesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DBT_LanguagesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_LanguagesPayload>
          }
          update: {
            args: Prisma.DBT_LanguagesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_LanguagesPayload>
          }
          deleteMany: {
            args: Prisma.DBT_LanguagesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DBT_LanguagesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DBT_LanguagesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_LanguagesPayload>
          }
          aggregate: {
            args: Prisma.DBT_LanguagesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDBT_Languages>
          }
          groupBy: {
            args: Prisma.DBT_LanguagesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DBT_LanguagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.DBT_LanguagesCountArgs<ExtArgs>,
            result: $Utils.Optional<DBT_LanguagesCountAggregateOutputType> | number
          }
        }
      }
      DBT_Layouts: {
        payload: Prisma.$DBT_LayoutsPayload<ExtArgs>
        fields: Prisma.DBT_LayoutsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DBT_LayoutsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_LayoutsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DBT_LayoutsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_LayoutsPayload>
          }
          findFirst: {
            args: Prisma.DBT_LayoutsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_LayoutsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DBT_LayoutsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_LayoutsPayload>
          }
          findMany: {
            args: Prisma.DBT_LayoutsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_LayoutsPayload>[]
          }
          create: {
            args: Prisma.DBT_LayoutsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_LayoutsPayload>
          }
          createMany: {
            args: Prisma.DBT_LayoutsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DBT_LayoutsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_LayoutsPayload>
          }
          update: {
            args: Prisma.DBT_LayoutsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_LayoutsPayload>
          }
          deleteMany: {
            args: Prisma.DBT_LayoutsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DBT_LayoutsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DBT_LayoutsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_LayoutsPayload>
          }
          aggregate: {
            args: Prisma.DBT_LayoutsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDBT_Layouts>
          }
          groupBy: {
            args: Prisma.DBT_LayoutsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DBT_LayoutsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DBT_LayoutsCountArgs<ExtArgs>,
            result: $Utils.Optional<DBT_LayoutsCountAggregateOutputType> | number
          }
        }
      }
      DBT_MealGroups: {
        payload: Prisma.$DBT_MealGroupsPayload<ExtArgs>
        fields: Prisma.DBT_MealGroupsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DBT_MealGroupsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_MealGroupsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DBT_MealGroupsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_MealGroupsPayload>
          }
          findFirst: {
            args: Prisma.DBT_MealGroupsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_MealGroupsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DBT_MealGroupsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_MealGroupsPayload>
          }
          findMany: {
            args: Prisma.DBT_MealGroupsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_MealGroupsPayload>[]
          }
          create: {
            args: Prisma.DBT_MealGroupsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_MealGroupsPayload>
          }
          createMany: {
            args: Prisma.DBT_MealGroupsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DBT_MealGroupsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_MealGroupsPayload>
          }
          update: {
            args: Prisma.DBT_MealGroupsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_MealGroupsPayload>
          }
          deleteMany: {
            args: Prisma.DBT_MealGroupsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DBT_MealGroupsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DBT_MealGroupsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_MealGroupsPayload>
          }
          aggregate: {
            args: Prisma.DBT_MealGroupsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDBT_MealGroups>
          }
          groupBy: {
            args: Prisma.DBT_MealGroupsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DBT_MealGroupsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DBT_MealGroupsCountArgs<ExtArgs>,
            result: $Utils.Optional<DBT_MealGroupsCountAggregateOutputType> | number
          }
        }
      }
      DBT_Meals: {
        payload: Prisma.$DBT_MealsPayload<ExtArgs>
        fields: Prisma.DBT_MealsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DBT_MealsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_MealsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DBT_MealsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_MealsPayload>
          }
          findFirst: {
            args: Prisma.DBT_MealsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_MealsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DBT_MealsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_MealsPayload>
          }
          findMany: {
            args: Prisma.DBT_MealsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_MealsPayload>[]
          }
          create: {
            args: Prisma.DBT_MealsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_MealsPayload>
          }
          createMany: {
            args: Prisma.DBT_MealsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DBT_MealsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_MealsPayload>
          }
          update: {
            args: Prisma.DBT_MealsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_MealsPayload>
          }
          deleteMany: {
            args: Prisma.DBT_MealsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DBT_MealsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DBT_MealsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_MealsPayload>
          }
          aggregate: {
            args: Prisma.DBT_MealsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDBT_Meals>
          }
          groupBy: {
            args: Prisma.DBT_MealsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DBT_MealsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DBT_MealsCountArgs<ExtArgs>,
            result: $Utils.Optional<DBT_MealsCountAggregateOutputType> | number
          }
        }
      }
      DBT_MenuSetUp: {
        payload: Prisma.$DBT_MenuSetUpPayload<ExtArgs>
        fields: Prisma.DBT_MenuSetUpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DBT_MenuSetUpFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_MenuSetUpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DBT_MenuSetUpFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_MenuSetUpPayload>
          }
          findFirst: {
            args: Prisma.DBT_MenuSetUpFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_MenuSetUpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DBT_MenuSetUpFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_MenuSetUpPayload>
          }
          findMany: {
            args: Prisma.DBT_MenuSetUpFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_MenuSetUpPayload>[]
          }
          create: {
            args: Prisma.DBT_MenuSetUpCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_MenuSetUpPayload>
          }
          createMany: {
            args: Prisma.DBT_MenuSetUpCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DBT_MenuSetUpDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_MenuSetUpPayload>
          }
          update: {
            args: Prisma.DBT_MenuSetUpUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_MenuSetUpPayload>
          }
          deleteMany: {
            args: Prisma.DBT_MenuSetUpDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DBT_MenuSetUpUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DBT_MenuSetUpUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_MenuSetUpPayload>
          }
          aggregate: {
            args: Prisma.DBT_MenuSetUpAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDBT_MenuSetUp>
          }
          groupBy: {
            args: Prisma.DBT_MenuSetUpGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DBT_MenuSetUpGroupByOutputType>[]
          }
          count: {
            args: Prisma.DBT_MenuSetUpCountArgs<ExtArgs>,
            result: $Utils.Optional<DBT_MenuSetUpCountAggregateOutputType> | number
          }
        }
      }
      DBT_OrderItems: {
        payload: Prisma.$DBT_OrderItemsPayload<ExtArgs>
        fields: Prisma.DBT_OrderItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DBT_OrderItemsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_OrderItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DBT_OrderItemsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_OrderItemsPayload>
          }
          findFirst: {
            args: Prisma.DBT_OrderItemsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_OrderItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DBT_OrderItemsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_OrderItemsPayload>
          }
          findMany: {
            args: Prisma.DBT_OrderItemsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_OrderItemsPayload>[]
          }
          create: {
            args: Prisma.DBT_OrderItemsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_OrderItemsPayload>
          }
          createMany: {
            args: Prisma.DBT_OrderItemsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DBT_OrderItemsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_OrderItemsPayload>
          }
          update: {
            args: Prisma.DBT_OrderItemsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_OrderItemsPayload>
          }
          deleteMany: {
            args: Prisma.DBT_OrderItemsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DBT_OrderItemsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DBT_OrderItemsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_OrderItemsPayload>
          }
          aggregate: {
            args: Prisma.DBT_OrderItemsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDBT_OrderItems>
          }
          groupBy: {
            args: Prisma.DBT_OrderItemsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DBT_OrderItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DBT_OrderItemsCountArgs<ExtArgs>,
            result: $Utils.Optional<DBT_OrderItemsCountAggregateOutputType> | number
          }
        }
      }
      DBT_Orders: {
        payload: Prisma.$DBT_OrdersPayload<ExtArgs>
        fields: Prisma.DBT_OrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DBT_OrdersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_OrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DBT_OrdersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_OrdersPayload>
          }
          findFirst: {
            args: Prisma.DBT_OrdersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_OrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DBT_OrdersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_OrdersPayload>
          }
          findMany: {
            args: Prisma.DBT_OrdersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_OrdersPayload>[]
          }
          create: {
            args: Prisma.DBT_OrdersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_OrdersPayload>
          }
          createMany: {
            args: Prisma.DBT_OrdersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DBT_OrdersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_OrdersPayload>
          }
          update: {
            args: Prisma.DBT_OrdersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_OrdersPayload>
          }
          deleteMany: {
            args: Prisma.DBT_OrdersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DBT_OrdersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DBT_OrdersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_OrdersPayload>
          }
          aggregate: {
            args: Prisma.DBT_OrdersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDBT_Orders>
          }
          groupBy: {
            args: Prisma.DBT_OrdersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DBT_OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.DBT_OrdersCountArgs<ExtArgs>,
            result: $Utils.Optional<DBT_OrdersCountAggregateOutputType> | number
          }
        }
      }
      DBT_PaymentMethods: {
        payload: Prisma.$DBT_PaymentMethodsPayload<ExtArgs>
        fields: Prisma.DBT_PaymentMethodsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DBT_PaymentMethodsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_PaymentMethodsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DBT_PaymentMethodsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_PaymentMethodsPayload>
          }
          findFirst: {
            args: Prisma.DBT_PaymentMethodsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_PaymentMethodsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DBT_PaymentMethodsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_PaymentMethodsPayload>
          }
          findMany: {
            args: Prisma.DBT_PaymentMethodsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_PaymentMethodsPayload>[]
          }
          create: {
            args: Prisma.DBT_PaymentMethodsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_PaymentMethodsPayload>
          }
          createMany: {
            args: Prisma.DBT_PaymentMethodsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DBT_PaymentMethodsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_PaymentMethodsPayload>
          }
          update: {
            args: Prisma.DBT_PaymentMethodsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_PaymentMethodsPayload>
          }
          deleteMany: {
            args: Prisma.DBT_PaymentMethodsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DBT_PaymentMethodsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DBT_PaymentMethodsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_PaymentMethodsPayload>
          }
          aggregate: {
            args: Prisma.DBT_PaymentMethodsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDBT_PaymentMethods>
          }
          groupBy: {
            args: Prisma.DBT_PaymentMethodsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DBT_PaymentMethodsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DBT_PaymentMethodsCountArgs<ExtArgs>,
            result: $Utils.Optional<DBT_PaymentMethodsCountAggregateOutputType> | number
          }
        }
      }
      DBT_Tables: {
        payload: Prisma.$DBT_TablesPayload<ExtArgs>
        fields: Prisma.DBT_TablesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DBT_TablesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_TablesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DBT_TablesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_TablesPayload>
          }
          findFirst: {
            args: Prisma.DBT_TablesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_TablesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DBT_TablesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_TablesPayload>
          }
          findMany: {
            args: Prisma.DBT_TablesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_TablesPayload>[]
          }
          create: {
            args: Prisma.DBT_TablesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_TablesPayload>
          }
          createMany: {
            args: Prisma.DBT_TablesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DBT_TablesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_TablesPayload>
          }
          update: {
            args: Prisma.DBT_TablesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_TablesPayload>
          }
          deleteMany: {
            args: Prisma.DBT_TablesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DBT_TablesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DBT_TablesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_TablesPayload>
          }
          aggregate: {
            args: Prisma.DBT_TablesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDBT_Tables>
          }
          groupBy: {
            args: Prisma.DBT_TablesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DBT_TablesGroupByOutputType>[]
          }
          count: {
            args: Prisma.DBT_TablesCountArgs<ExtArgs>,
            result: $Utils.Optional<DBT_TablesCountAggregateOutputType> | number
          }
        }
      }
      DBT_Taxes: {
        payload: Prisma.$DBT_TaxesPayload<ExtArgs>
        fields: Prisma.DBT_TaxesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DBT_TaxesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_TaxesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DBT_TaxesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_TaxesPayload>
          }
          findFirst: {
            args: Prisma.DBT_TaxesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_TaxesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DBT_TaxesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_TaxesPayload>
          }
          findMany: {
            args: Prisma.DBT_TaxesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_TaxesPayload>[]
          }
          create: {
            args: Prisma.DBT_TaxesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_TaxesPayload>
          }
          createMany: {
            args: Prisma.DBT_TaxesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DBT_TaxesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_TaxesPayload>
          }
          update: {
            args: Prisma.DBT_TaxesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_TaxesPayload>
          }
          deleteMany: {
            args: Prisma.DBT_TaxesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DBT_TaxesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DBT_TaxesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_TaxesPayload>
          }
          aggregate: {
            args: Prisma.DBT_TaxesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDBT_Taxes>
          }
          groupBy: {
            args: Prisma.DBT_TaxesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DBT_TaxesGroupByOutputType>[]
          }
          count: {
            args: Prisma.DBT_TaxesCountArgs<ExtArgs>,
            result: $Utils.Optional<DBT_TaxesCountAggregateOutputType> | number
          }
        }
      }
      DBT_Translations: {
        payload: Prisma.$DBT_TranslationsPayload<ExtArgs>
        fields: Prisma.DBT_TranslationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DBT_TranslationsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_TranslationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DBT_TranslationsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_TranslationsPayload>
          }
          findFirst: {
            args: Prisma.DBT_TranslationsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_TranslationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DBT_TranslationsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_TranslationsPayload>
          }
          findMany: {
            args: Prisma.DBT_TranslationsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_TranslationsPayload>[]
          }
          create: {
            args: Prisma.DBT_TranslationsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_TranslationsPayload>
          }
          createMany: {
            args: Prisma.DBT_TranslationsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DBT_TranslationsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_TranslationsPayload>
          }
          update: {
            args: Prisma.DBT_TranslationsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_TranslationsPayload>
          }
          deleteMany: {
            args: Prisma.DBT_TranslationsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DBT_TranslationsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DBT_TranslationsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_TranslationsPayload>
          }
          aggregate: {
            args: Prisma.DBT_TranslationsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDBT_Translations>
          }
          groupBy: {
            args: Prisma.DBT_TranslationsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DBT_TranslationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DBT_TranslationsCountArgs<ExtArgs>,
            result: $Utils.Optional<DBT_TranslationsCountAggregateOutputType> | number
          }
        }
      }
      DBT_Users: {
        payload: Prisma.$DBT_UsersPayload<ExtArgs>
        fields: Prisma.DBT_UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DBT_UsersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DBT_UsersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_UsersPayload>
          }
          findFirst: {
            args: Prisma.DBT_UsersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DBT_UsersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_UsersPayload>
          }
          findMany: {
            args: Prisma.DBT_UsersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_UsersPayload>[]
          }
          create: {
            args: Prisma.DBT_UsersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_UsersPayload>
          }
          createMany: {
            args: Prisma.DBT_UsersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DBT_UsersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_UsersPayload>
          }
          update: {
            args: Prisma.DBT_UsersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_UsersPayload>
          }
          deleteMany: {
            args: Prisma.DBT_UsersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DBT_UsersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DBT_UsersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_UsersPayload>
          }
          aggregate: {
            args: Prisma.DBT_UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDBT_Users>
          }
          groupBy: {
            args: Prisma.DBT_UsersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DBT_UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.DBT_UsersCountArgs<ExtArgs>,
            result: $Utils.Optional<DBT_UsersCountAggregateOutputType> | number
          }
        }
      }
      DBT_MealsInGroups: {
        payload: Prisma.$DBT_MealsInGroupsPayload<ExtArgs>
        fields: Prisma.DBT_MealsInGroupsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DBT_MealsInGroupsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_MealsInGroupsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DBT_MealsInGroupsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_MealsInGroupsPayload>
          }
          findFirst: {
            args: Prisma.DBT_MealsInGroupsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_MealsInGroupsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DBT_MealsInGroupsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_MealsInGroupsPayload>
          }
          findMany: {
            args: Prisma.DBT_MealsInGroupsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_MealsInGroupsPayload>[]
          }
          create: {
            args: Prisma.DBT_MealsInGroupsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_MealsInGroupsPayload>
          }
          createMany: {
            args: Prisma.DBT_MealsInGroupsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DBT_MealsInGroupsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_MealsInGroupsPayload>
          }
          update: {
            args: Prisma.DBT_MealsInGroupsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_MealsInGroupsPayload>
          }
          deleteMany: {
            args: Prisma.DBT_MealsInGroupsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DBT_MealsInGroupsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DBT_MealsInGroupsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_MealsInGroupsPayload>
          }
          aggregate: {
            args: Prisma.DBT_MealsInGroupsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDBT_MealsInGroups>
          }
          groupBy: {
            args: Prisma.DBT_MealsInGroupsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DBT_MealsInGroupsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DBT_MealsInGroupsCountArgs<ExtArgs>,
            result: $Utils.Optional<DBT_MealsInGroupsCountAggregateOutputType> | number
          }
        }
      }
      DBT_Variants: {
        payload: Prisma.$DBT_VariantsPayload<ExtArgs>
        fields: Prisma.DBT_VariantsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DBT_VariantsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_VariantsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DBT_VariantsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_VariantsPayload>
          }
          findFirst: {
            args: Prisma.DBT_VariantsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_VariantsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DBT_VariantsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_VariantsPayload>
          }
          findMany: {
            args: Prisma.DBT_VariantsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_VariantsPayload>[]
          }
          create: {
            args: Prisma.DBT_VariantsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_VariantsPayload>
          }
          createMany: {
            args: Prisma.DBT_VariantsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DBT_VariantsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_VariantsPayload>
          }
          update: {
            args: Prisma.DBT_VariantsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_VariantsPayload>
          }
          deleteMany: {
            args: Prisma.DBT_VariantsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DBT_VariantsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DBT_VariantsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DBT_VariantsPayload>
          }
          aggregate: {
            args: Prisma.DBT_VariantsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDBT_Variants>
          }
          groupBy: {
            args: Prisma.DBT_VariantsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DBT_VariantsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DBT_VariantsCountArgs<ExtArgs>,
            result: $Utils.Optional<DBT_VariantsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model DBT_Customer
   */

  export type AggregateDBT_Customer = {
    _count: DBT_CustomerCountAggregateOutputType | null
    _avg: DBT_CustomerAvgAggregateOutputType | null
    _sum: DBT_CustomerSumAggregateOutputType | null
    _min: DBT_CustomerMinAggregateOutputType | null
    _max: DBT_CustomerMaxAggregateOutputType | null
  }

  export type DBT_CustomerAvgAggregateOutputType = {
    ID: number | null
    Discount: Decimal | null
  }

  export type DBT_CustomerSumAggregateOutputType = {
    ID: bigint | null
    Discount: Decimal | null
  }

  export type DBT_CustomerMinAggregateOutputType = {
    ID: bigint | null
    Active: boolean | null
    Customer: string | null
    Name: string | null
    Surname: string | null
    PhoneNr: string | null
    Email: string | null
    Discount: Decimal | null
  }

  export type DBT_CustomerMaxAggregateOutputType = {
    ID: bigint | null
    Active: boolean | null
    Customer: string | null
    Name: string | null
    Surname: string | null
    PhoneNr: string | null
    Email: string | null
    Discount: Decimal | null
  }

  export type DBT_CustomerCountAggregateOutputType = {
    ID: number
    Active: number
    Customer: number
    Name: number
    Surname: number
    PhoneNr: number
    Email: number
    Discount: number
    _all: number
  }


  export type DBT_CustomerAvgAggregateInputType = {
    ID?: true
    Discount?: true
  }

  export type DBT_CustomerSumAggregateInputType = {
    ID?: true
    Discount?: true
  }

  export type DBT_CustomerMinAggregateInputType = {
    ID?: true
    Active?: true
    Customer?: true
    Name?: true
    Surname?: true
    PhoneNr?: true
    Email?: true
    Discount?: true
  }

  export type DBT_CustomerMaxAggregateInputType = {
    ID?: true
    Active?: true
    Customer?: true
    Name?: true
    Surname?: true
    PhoneNr?: true
    Email?: true
    Discount?: true
  }

  export type DBT_CustomerCountAggregateInputType = {
    ID?: true
    Active?: true
    Customer?: true
    Name?: true
    Surname?: true
    PhoneNr?: true
    Email?: true
    Discount?: true
    _all?: true
  }

  export type DBT_CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DBT_Customer to aggregate.
     */
    where?: DBT_CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_Customers to fetch.
     */
    orderBy?: DBT_CustomerOrderByWithRelationInput | DBT_CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DBT_CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DBT_Customers
    **/
    _count?: true | DBT_CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DBT_CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DBT_CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DBT_CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DBT_CustomerMaxAggregateInputType
  }

  export type GetDBT_CustomerAggregateType<T extends DBT_CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateDBT_Customer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDBT_Customer[P]>
      : GetScalarType<T[P], AggregateDBT_Customer[P]>
  }




  export type DBT_CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DBT_CustomerWhereInput
    orderBy?: DBT_CustomerOrderByWithAggregationInput | DBT_CustomerOrderByWithAggregationInput[]
    by: DBT_CustomerScalarFieldEnum[] | DBT_CustomerScalarFieldEnum
    having?: DBT_CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DBT_CustomerCountAggregateInputType | true
    _avg?: DBT_CustomerAvgAggregateInputType
    _sum?: DBT_CustomerSumAggregateInputType
    _min?: DBT_CustomerMinAggregateInputType
    _max?: DBT_CustomerMaxAggregateInputType
  }

  export type DBT_CustomerGroupByOutputType = {
    ID: bigint
    Active: boolean | null
    Customer: string | null
    Name: string | null
    Surname: string | null
    PhoneNr: string | null
    Email: string | null
    Discount: Decimal | null
    _count: DBT_CustomerCountAggregateOutputType | null
    _avg: DBT_CustomerAvgAggregateOutputType | null
    _sum: DBT_CustomerSumAggregateOutputType | null
    _min: DBT_CustomerMinAggregateOutputType | null
    _max: DBT_CustomerMaxAggregateOutputType | null
  }

  type GetDBT_CustomerGroupByPayload<T extends DBT_CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DBT_CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DBT_CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DBT_CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], DBT_CustomerGroupByOutputType[P]>
        }
      >
    >


  export type DBT_CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    Active?: boolean
    Customer?: boolean
    Name?: boolean
    Surname?: boolean
    PhoneNr?: boolean
    Email?: boolean
    Discount?: boolean
  }, ExtArgs["result"]["dBT_Customer"]>

  export type DBT_CustomerSelectScalar = {
    ID?: boolean
    Active?: boolean
    Customer?: boolean
    Name?: boolean
    Surname?: boolean
    PhoneNr?: boolean
    Email?: boolean
    Discount?: boolean
  }



  export type $DBT_CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DBT_Customer"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: bigint
      Active: boolean | null
      Customer: string | null
      Name: string | null
      Surname: string | null
      PhoneNr: string | null
      Email: string | null
      Discount: Prisma.Decimal | null
    }, ExtArgs["result"]["dBT_Customer"]>
    composites: {}
  }


  type DBT_CustomerGetPayload<S extends boolean | null | undefined | DBT_CustomerDefaultArgs> = $Result.GetResult<Prisma.$DBT_CustomerPayload, S>

  type DBT_CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DBT_CustomerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DBT_CustomerCountAggregateInputType | true
    }

  export interface DBT_CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DBT_Customer'], meta: { name: 'DBT_Customer' } }
    /**
     * Find zero or one DBT_Customer that matches the filter.
     * @param {DBT_CustomerFindUniqueArgs} args - Arguments to find a DBT_Customer
     * @example
     * // Get one DBT_Customer
     * const dBT_Customer = await prisma.dBT_Customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DBT_CustomerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_CustomerFindUniqueArgs<ExtArgs>>
    ): Prisma__DBT_CustomerClient<$Result.GetResult<Prisma.$DBT_CustomerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DBT_Customer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DBT_CustomerFindUniqueOrThrowArgs} args - Arguments to find a DBT_Customer
     * @example
     * // Get one DBT_Customer
     * const dBT_Customer = await prisma.dBT_Customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DBT_CustomerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_CustomerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DBT_CustomerClient<$Result.GetResult<Prisma.$DBT_CustomerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DBT_Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_CustomerFindFirstArgs} args - Arguments to find a DBT_Customer
     * @example
     * // Get one DBT_Customer
     * const dBT_Customer = await prisma.dBT_Customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DBT_CustomerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_CustomerFindFirstArgs<ExtArgs>>
    ): Prisma__DBT_CustomerClient<$Result.GetResult<Prisma.$DBT_CustomerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DBT_Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_CustomerFindFirstOrThrowArgs} args - Arguments to find a DBT_Customer
     * @example
     * // Get one DBT_Customer
     * const dBT_Customer = await prisma.dBT_Customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DBT_CustomerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_CustomerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DBT_CustomerClient<$Result.GetResult<Prisma.$DBT_CustomerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DBT_Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DBT_Customers
     * const dBT_Customers = await prisma.dBT_Customer.findMany()
     * 
     * // Get first 10 DBT_Customers
     * const dBT_Customers = await prisma.dBT_Customer.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const dBT_CustomerWithIDOnly = await prisma.dBT_Customer.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends DBT_CustomerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_CustomerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DBT_CustomerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DBT_Customer.
     * @param {DBT_CustomerCreateArgs} args - Arguments to create a DBT_Customer.
     * @example
     * // Create one DBT_Customer
     * const DBT_Customer = await prisma.dBT_Customer.create({
     *   data: {
     *     // ... data to create a DBT_Customer
     *   }
     * })
     * 
    **/
    create<T extends DBT_CustomerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_CustomerCreateArgs<ExtArgs>>
    ): Prisma__DBT_CustomerClient<$Result.GetResult<Prisma.$DBT_CustomerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DBT_Customers.
     * @param {DBT_CustomerCreateManyArgs} args - Arguments to create many DBT_Customers.
     * @example
     * // Create many DBT_Customers
     * const dBT_Customer = await prisma.dBT_Customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends DBT_CustomerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_CustomerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DBT_Customer.
     * @param {DBT_CustomerDeleteArgs} args - Arguments to delete one DBT_Customer.
     * @example
     * // Delete one DBT_Customer
     * const DBT_Customer = await prisma.dBT_Customer.delete({
     *   where: {
     *     // ... filter to delete one DBT_Customer
     *   }
     * })
     * 
    **/
    delete<T extends DBT_CustomerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_CustomerDeleteArgs<ExtArgs>>
    ): Prisma__DBT_CustomerClient<$Result.GetResult<Prisma.$DBT_CustomerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DBT_Customer.
     * @param {DBT_CustomerUpdateArgs} args - Arguments to update one DBT_Customer.
     * @example
     * // Update one DBT_Customer
     * const dBT_Customer = await prisma.dBT_Customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DBT_CustomerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_CustomerUpdateArgs<ExtArgs>>
    ): Prisma__DBT_CustomerClient<$Result.GetResult<Prisma.$DBT_CustomerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DBT_Customers.
     * @param {DBT_CustomerDeleteManyArgs} args - Arguments to filter DBT_Customers to delete.
     * @example
     * // Delete a few DBT_Customers
     * const { count } = await prisma.dBT_Customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DBT_CustomerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_CustomerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DBT_Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DBT_Customers
     * const dBT_Customer = await prisma.dBT_Customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DBT_CustomerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_CustomerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DBT_Customer.
     * @param {DBT_CustomerUpsertArgs} args - Arguments to update or create a DBT_Customer.
     * @example
     * // Update or create a DBT_Customer
     * const dBT_Customer = await prisma.dBT_Customer.upsert({
     *   create: {
     *     // ... data to create a DBT_Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DBT_Customer we want to update
     *   }
     * })
    **/
    upsert<T extends DBT_CustomerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_CustomerUpsertArgs<ExtArgs>>
    ): Prisma__DBT_CustomerClient<$Result.GetResult<Prisma.$DBT_CustomerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DBT_Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_CustomerCountArgs} args - Arguments to filter DBT_Customers to count.
     * @example
     * // Count the number of DBT_Customers
     * const count = await prisma.dBT_Customer.count({
     *   where: {
     *     // ... the filter for the DBT_Customers we want to count
     *   }
     * })
    **/
    count<T extends DBT_CustomerCountArgs>(
      args?: Subset<T, DBT_CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DBT_CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DBT_Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DBT_CustomerAggregateArgs>(args: Subset<T, DBT_CustomerAggregateArgs>): Prisma.PrismaPromise<GetDBT_CustomerAggregateType<T>>

    /**
     * Group by DBT_Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DBT_CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DBT_CustomerGroupByArgs['orderBy'] }
        : { orderBy?: DBT_CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DBT_CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDBT_CustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DBT_Customer model
   */
  readonly fields: DBT_CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DBT_Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DBT_CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DBT_Customer model
   */ 
  interface DBT_CustomerFieldRefs {
    readonly ID: FieldRef<"DBT_Customer", 'BigInt'>
    readonly Active: FieldRef<"DBT_Customer", 'Boolean'>
    readonly Customer: FieldRef<"DBT_Customer", 'String'>
    readonly Name: FieldRef<"DBT_Customer", 'String'>
    readonly Surname: FieldRef<"DBT_Customer", 'String'>
    readonly PhoneNr: FieldRef<"DBT_Customer", 'String'>
    readonly Email: FieldRef<"DBT_Customer", 'String'>
    readonly Discount: FieldRef<"DBT_Customer", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * DBT_Customer findUnique
   */
  export type DBT_CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Customer
     */
    select?: DBT_CustomerSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Customer to fetch.
     */
    where: DBT_CustomerWhereUniqueInput
  }

  /**
   * DBT_Customer findUniqueOrThrow
   */
  export type DBT_CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Customer
     */
    select?: DBT_CustomerSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Customer to fetch.
     */
    where: DBT_CustomerWhereUniqueInput
  }

  /**
   * DBT_Customer findFirst
   */
  export type DBT_CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Customer
     */
    select?: DBT_CustomerSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Customer to fetch.
     */
    where?: DBT_CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_Customers to fetch.
     */
    orderBy?: DBT_CustomerOrderByWithRelationInput | DBT_CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DBT_Customers.
     */
    cursor?: DBT_CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DBT_Customers.
     */
    distinct?: DBT_CustomerScalarFieldEnum | DBT_CustomerScalarFieldEnum[]
  }

  /**
   * DBT_Customer findFirstOrThrow
   */
  export type DBT_CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Customer
     */
    select?: DBT_CustomerSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Customer to fetch.
     */
    where?: DBT_CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_Customers to fetch.
     */
    orderBy?: DBT_CustomerOrderByWithRelationInput | DBT_CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DBT_Customers.
     */
    cursor?: DBT_CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DBT_Customers.
     */
    distinct?: DBT_CustomerScalarFieldEnum | DBT_CustomerScalarFieldEnum[]
  }

  /**
   * DBT_Customer findMany
   */
  export type DBT_CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Customer
     */
    select?: DBT_CustomerSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Customers to fetch.
     */
    where?: DBT_CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_Customers to fetch.
     */
    orderBy?: DBT_CustomerOrderByWithRelationInput | DBT_CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DBT_Customers.
     */
    cursor?: DBT_CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_Customers.
     */
    skip?: number
    distinct?: DBT_CustomerScalarFieldEnum | DBT_CustomerScalarFieldEnum[]
  }

  /**
   * DBT_Customer create
   */
  export type DBT_CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Customer
     */
    select?: DBT_CustomerSelect<ExtArgs> | null
    /**
     * The data needed to create a DBT_Customer.
     */
    data?: XOR<DBT_CustomerCreateInput, DBT_CustomerUncheckedCreateInput>
  }

  /**
   * DBT_Customer createMany
   */
  export type DBT_CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DBT_Customers.
     */
    data: DBT_CustomerCreateManyInput | DBT_CustomerCreateManyInput[]
  }

  /**
   * DBT_Customer update
   */
  export type DBT_CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Customer
     */
    select?: DBT_CustomerSelect<ExtArgs> | null
    /**
     * The data needed to update a DBT_Customer.
     */
    data: XOR<DBT_CustomerUpdateInput, DBT_CustomerUncheckedUpdateInput>
    /**
     * Choose, which DBT_Customer to update.
     */
    where: DBT_CustomerWhereUniqueInput
  }

  /**
   * DBT_Customer updateMany
   */
  export type DBT_CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DBT_Customers.
     */
    data: XOR<DBT_CustomerUpdateManyMutationInput, DBT_CustomerUncheckedUpdateManyInput>
    /**
     * Filter which DBT_Customers to update
     */
    where?: DBT_CustomerWhereInput
  }

  /**
   * DBT_Customer upsert
   */
  export type DBT_CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Customer
     */
    select?: DBT_CustomerSelect<ExtArgs> | null
    /**
     * The filter to search for the DBT_Customer to update in case it exists.
     */
    where: DBT_CustomerWhereUniqueInput
    /**
     * In case the DBT_Customer found by the `where` argument doesn't exist, create a new DBT_Customer with this data.
     */
    create: XOR<DBT_CustomerCreateInput, DBT_CustomerUncheckedCreateInput>
    /**
     * In case the DBT_Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DBT_CustomerUpdateInput, DBT_CustomerUncheckedUpdateInput>
  }

  /**
   * DBT_Customer delete
   */
  export type DBT_CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Customer
     */
    select?: DBT_CustomerSelect<ExtArgs> | null
    /**
     * Filter which DBT_Customer to delete.
     */
    where: DBT_CustomerWhereUniqueInput
  }

  /**
   * DBT_Customer deleteMany
   */
  export type DBT_CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DBT_Customers to delete
     */
    where?: DBT_CustomerWhereInput
  }

  /**
   * DBT_Customer without action
   */
  export type DBT_CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Customer
     */
    select?: DBT_CustomerSelect<ExtArgs> | null
  }


  /**
   * Model DBT_Languages
   */

  export type AggregateDBT_Languages = {
    _count: DBT_LanguagesCountAggregateOutputType | null
    _avg: DBT_LanguagesAvgAggregateOutputType | null
    _sum: DBT_LanguagesSumAggregateOutputType | null
    _min: DBT_LanguagesMinAggregateOutputType | null
    _max: DBT_LanguagesMaxAggregateOutputType | null
  }

  export type DBT_LanguagesAvgAggregateOutputType = {
    ID: number | null
  }

  export type DBT_LanguagesSumAggregateOutputType = {
    ID: bigint | null
  }

  export type DBT_LanguagesMinAggregateOutputType = {
    ID: bigint | null
    Active: boolean | null
    Language: string | null
    DisplayText: string | null
    Flag: Buffer | null
  }

  export type DBT_LanguagesMaxAggregateOutputType = {
    ID: bigint | null
    Active: boolean | null
    Language: string | null
    DisplayText: string | null
    Flag: Buffer | null
  }

  export type DBT_LanguagesCountAggregateOutputType = {
    ID: number
    Active: number
    Language: number
    DisplayText: number
    Flag: number
    _all: number
  }


  export type DBT_LanguagesAvgAggregateInputType = {
    ID?: true
  }

  export type DBT_LanguagesSumAggregateInputType = {
    ID?: true
  }

  export type DBT_LanguagesMinAggregateInputType = {
    ID?: true
    Active?: true
    Language?: true
    DisplayText?: true
    Flag?: true
  }

  export type DBT_LanguagesMaxAggregateInputType = {
    ID?: true
    Active?: true
    Language?: true
    DisplayText?: true
    Flag?: true
  }

  export type DBT_LanguagesCountAggregateInputType = {
    ID?: true
    Active?: true
    Language?: true
    DisplayText?: true
    Flag?: true
    _all?: true
  }

  export type DBT_LanguagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DBT_Languages to aggregate.
     */
    where?: DBT_LanguagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_Languages to fetch.
     */
    orderBy?: DBT_LanguagesOrderByWithRelationInput | DBT_LanguagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DBT_LanguagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DBT_Languages
    **/
    _count?: true | DBT_LanguagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DBT_LanguagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DBT_LanguagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DBT_LanguagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DBT_LanguagesMaxAggregateInputType
  }

  export type GetDBT_LanguagesAggregateType<T extends DBT_LanguagesAggregateArgs> = {
        [P in keyof T & keyof AggregateDBT_Languages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDBT_Languages[P]>
      : GetScalarType<T[P], AggregateDBT_Languages[P]>
  }




  export type DBT_LanguagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DBT_LanguagesWhereInput
    orderBy?: DBT_LanguagesOrderByWithAggregationInput | DBT_LanguagesOrderByWithAggregationInput[]
    by: DBT_LanguagesScalarFieldEnum[] | DBT_LanguagesScalarFieldEnum
    having?: DBT_LanguagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DBT_LanguagesCountAggregateInputType | true
    _avg?: DBT_LanguagesAvgAggregateInputType
    _sum?: DBT_LanguagesSumAggregateInputType
    _min?: DBT_LanguagesMinAggregateInputType
    _max?: DBT_LanguagesMaxAggregateInputType
  }

  export type DBT_LanguagesGroupByOutputType = {
    ID: bigint
    Active: boolean
    Language: string | null
    DisplayText: string | null
    Flag: Buffer | null
    _count: DBT_LanguagesCountAggregateOutputType | null
    _avg: DBT_LanguagesAvgAggregateOutputType | null
    _sum: DBT_LanguagesSumAggregateOutputType | null
    _min: DBT_LanguagesMinAggregateOutputType | null
    _max: DBT_LanguagesMaxAggregateOutputType | null
  }

  type GetDBT_LanguagesGroupByPayload<T extends DBT_LanguagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DBT_LanguagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DBT_LanguagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DBT_LanguagesGroupByOutputType[P]>
            : GetScalarType<T[P], DBT_LanguagesGroupByOutputType[P]>
        }
      >
    >


  export type DBT_LanguagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    Active?: boolean
    Language?: boolean
    DisplayText?: boolean
    Flag?: boolean
  }, ExtArgs["result"]["dBT_Languages"]>

  export type DBT_LanguagesSelectScalar = {
    ID?: boolean
    Active?: boolean
    Language?: boolean
    DisplayText?: boolean
    Flag?: boolean
  }



  export type $DBT_LanguagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DBT_Languages"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: bigint
      Active: boolean
      Language: string | null
      DisplayText: string | null
      Flag: Buffer | null
    }, ExtArgs["result"]["dBT_Languages"]>
    composites: {}
  }


  type DBT_LanguagesGetPayload<S extends boolean | null | undefined | DBT_LanguagesDefaultArgs> = $Result.GetResult<Prisma.$DBT_LanguagesPayload, S>

  type DBT_LanguagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DBT_LanguagesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DBT_LanguagesCountAggregateInputType | true
    }

  export interface DBT_LanguagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DBT_Languages'], meta: { name: 'DBT_Languages' } }
    /**
     * Find zero or one DBT_Languages that matches the filter.
     * @param {DBT_LanguagesFindUniqueArgs} args - Arguments to find a DBT_Languages
     * @example
     * // Get one DBT_Languages
     * const dBT_Languages = await prisma.dBT_Languages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DBT_LanguagesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_LanguagesFindUniqueArgs<ExtArgs>>
    ): Prisma__DBT_LanguagesClient<$Result.GetResult<Prisma.$DBT_LanguagesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DBT_Languages that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DBT_LanguagesFindUniqueOrThrowArgs} args - Arguments to find a DBT_Languages
     * @example
     * // Get one DBT_Languages
     * const dBT_Languages = await prisma.dBT_Languages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DBT_LanguagesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_LanguagesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DBT_LanguagesClient<$Result.GetResult<Prisma.$DBT_LanguagesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DBT_Languages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_LanguagesFindFirstArgs} args - Arguments to find a DBT_Languages
     * @example
     * // Get one DBT_Languages
     * const dBT_Languages = await prisma.dBT_Languages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DBT_LanguagesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_LanguagesFindFirstArgs<ExtArgs>>
    ): Prisma__DBT_LanguagesClient<$Result.GetResult<Prisma.$DBT_LanguagesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DBT_Languages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_LanguagesFindFirstOrThrowArgs} args - Arguments to find a DBT_Languages
     * @example
     * // Get one DBT_Languages
     * const dBT_Languages = await prisma.dBT_Languages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DBT_LanguagesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_LanguagesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DBT_LanguagesClient<$Result.GetResult<Prisma.$DBT_LanguagesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DBT_Languages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_LanguagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DBT_Languages
     * const dBT_Languages = await prisma.dBT_Languages.findMany()
     * 
     * // Get first 10 DBT_Languages
     * const dBT_Languages = await prisma.dBT_Languages.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const dBT_LanguagesWithIDOnly = await prisma.dBT_Languages.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends DBT_LanguagesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_LanguagesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DBT_LanguagesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DBT_Languages.
     * @param {DBT_LanguagesCreateArgs} args - Arguments to create a DBT_Languages.
     * @example
     * // Create one DBT_Languages
     * const DBT_Languages = await prisma.dBT_Languages.create({
     *   data: {
     *     // ... data to create a DBT_Languages
     *   }
     * })
     * 
    **/
    create<T extends DBT_LanguagesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_LanguagesCreateArgs<ExtArgs>>
    ): Prisma__DBT_LanguagesClient<$Result.GetResult<Prisma.$DBT_LanguagesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DBT_Languages.
     * @param {DBT_LanguagesCreateManyArgs} args - Arguments to create many DBT_Languages.
     * @example
     * // Create many DBT_Languages
     * const dBT_Languages = await prisma.dBT_Languages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends DBT_LanguagesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_LanguagesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DBT_Languages.
     * @param {DBT_LanguagesDeleteArgs} args - Arguments to delete one DBT_Languages.
     * @example
     * // Delete one DBT_Languages
     * const DBT_Languages = await prisma.dBT_Languages.delete({
     *   where: {
     *     // ... filter to delete one DBT_Languages
     *   }
     * })
     * 
    **/
    delete<T extends DBT_LanguagesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_LanguagesDeleteArgs<ExtArgs>>
    ): Prisma__DBT_LanguagesClient<$Result.GetResult<Prisma.$DBT_LanguagesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DBT_Languages.
     * @param {DBT_LanguagesUpdateArgs} args - Arguments to update one DBT_Languages.
     * @example
     * // Update one DBT_Languages
     * const dBT_Languages = await prisma.dBT_Languages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DBT_LanguagesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_LanguagesUpdateArgs<ExtArgs>>
    ): Prisma__DBT_LanguagesClient<$Result.GetResult<Prisma.$DBT_LanguagesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DBT_Languages.
     * @param {DBT_LanguagesDeleteManyArgs} args - Arguments to filter DBT_Languages to delete.
     * @example
     * // Delete a few DBT_Languages
     * const { count } = await prisma.dBT_Languages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DBT_LanguagesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_LanguagesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DBT_Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_LanguagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DBT_Languages
     * const dBT_Languages = await prisma.dBT_Languages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DBT_LanguagesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_LanguagesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DBT_Languages.
     * @param {DBT_LanguagesUpsertArgs} args - Arguments to update or create a DBT_Languages.
     * @example
     * // Update or create a DBT_Languages
     * const dBT_Languages = await prisma.dBT_Languages.upsert({
     *   create: {
     *     // ... data to create a DBT_Languages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DBT_Languages we want to update
     *   }
     * })
    **/
    upsert<T extends DBT_LanguagesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_LanguagesUpsertArgs<ExtArgs>>
    ): Prisma__DBT_LanguagesClient<$Result.GetResult<Prisma.$DBT_LanguagesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DBT_Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_LanguagesCountArgs} args - Arguments to filter DBT_Languages to count.
     * @example
     * // Count the number of DBT_Languages
     * const count = await prisma.dBT_Languages.count({
     *   where: {
     *     // ... the filter for the DBT_Languages we want to count
     *   }
     * })
    **/
    count<T extends DBT_LanguagesCountArgs>(
      args?: Subset<T, DBT_LanguagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DBT_LanguagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DBT_Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_LanguagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DBT_LanguagesAggregateArgs>(args: Subset<T, DBT_LanguagesAggregateArgs>): Prisma.PrismaPromise<GetDBT_LanguagesAggregateType<T>>

    /**
     * Group by DBT_Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_LanguagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DBT_LanguagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DBT_LanguagesGroupByArgs['orderBy'] }
        : { orderBy?: DBT_LanguagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DBT_LanguagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDBT_LanguagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DBT_Languages model
   */
  readonly fields: DBT_LanguagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DBT_Languages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DBT_LanguagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DBT_Languages model
   */ 
  interface DBT_LanguagesFieldRefs {
    readonly ID: FieldRef<"DBT_Languages", 'BigInt'>
    readonly Active: FieldRef<"DBT_Languages", 'Boolean'>
    readonly Language: FieldRef<"DBT_Languages", 'String'>
    readonly DisplayText: FieldRef<"DBT_Languages", 'String'>
    readonly Flag: FieldRef<"DBT_Languages", 'Bytes'>
  }
    

  // Custom InputTypes
  /**
   * DBT_Languages findUnique
   */
  export type DBT_LanguagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Languages
     */
    select?: DBT_LanguagesSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Languages to fetch.
     */
    where: DBT_LanguagesWhereUniqueInput
  }

  /**
   * DBT_Languages findUniqueOrThrow
   */
  export type DBT_LanguagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Languages
     */
    select?: DBT_LanguagesSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Languages to fetch.
     */
    where: DBT_LanguagesWhereUniqueInput
  }

  /**
   * DBT_Languages findFirst
   */
  export type DBT_LanguagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Languages
     */
    select?: DBT_LanguagesSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Languages to fetch.
     */
    where?: DBT_LanguagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_Languages to fetch.
     */
    orderBy?: DBT_LanguagesOrderByWithRelationInput | DBT_LanguagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DBT_Languages.
     */
    cursor?: DBT_LanguagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DBT_Languages.
     */
    distinct?: DBT_LanguagesScalarFieldEnum | DBT_LanguagesScalarFieldEnum[]
  }

  /**
   * DBT_Languages findFirstOrThrow
   */
  export type DBT_LanguagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Languages
     */
    select?: DBT_LanguagesSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Languages to fetch.
     */
    where?: DBT_LanguagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_Languages to fetch.
     */
    orderBy?: DBT_LanguagesOrderByWithRelationInput | DBT_LanguagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DBT_Languages.
     */
    cursor?: DBT_LanguagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DBT_Languages.
     */
    distinct?: DBT_LanguagesScalarFieldEnum | DBT_LanguagesScalarFieldEnum[]
  }

  /**
   * DBT_Languages findMany
   */
  export type DBT_LanguagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Languages
     */
    select?: DBT_LanguagesSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Languages to fetch.
     */
    where?: DBT_LanguagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_Languages to fetch.
     */
    orderBy?: DBT_LanguagesOrderByWithRelationInput | DBT_LanguagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DBT_Languages.
     */
    cursor?: DBT_LanguagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_Languages.
     */
    skip?: number
    distinct?: DBT_LanguagesScalarFieldEnum | DBT_LanguagesScalarFieldEnum[]
  }

  /**
   * DBT_Languages create
   */
  export type DBT_LanguagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Languages
     */
    select?: DBT_LanguagesSelect<ExtArgs> | null
    /**
     * The data needed to create a DBT_Languages.
     */
    data?: XOR<DBT_LanguagesCreateInput, DBT_LanguagesUncheckedCreateInput>
  }

  /**
   * DBT_Languages createMany
   */
  export type DBT_LanguagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DBT_Languages.
     */
    data: DBT_LanguagesCreateManyInput | DBT_LanguagesCreateManyInput[]
  }

  /**
   * DBT_Languages update
   */
  export type DBT_LanguagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Languages
     */
    select?: DBT_LanguagesSelect<ExtArgs> | null
    /**
     * The data needed to update a DBT_Languages.
     */
    data: XOR<DBT_LanguagesUpdateInput, DBT_LanguagesUncheckedUpdateInput>
    /**
     * Choose, which DBT_Languages to update.
     */
    where: DBT_LanguagesWhereUniqueInput
  }

  /**
   * DBT_Languages updateMany
   */
  export type DBT_LanguagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DBT_Languages.
     */
    data: XOR<DBT_LanguagesUpdateManyMutationInput, DBT_LanguagesUncheckedUpdateManyInput>
    /**
     * Filter which DBT_Languages to update
     */
    where?: DBT_LanguagesWhereInput
  }

  /**
   * DBT_Languages upsert
   */
  export type DBT_LanguagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Languages
     */
    select?: DBT_LanguagesSelect<ExtArgs> | null
    /**
     * The filter to search for the DBT_Languages to update in case it exists.
     */
    where: DBT_LanguagesWhereUniqueInput
    /**
     * In case the DBT_Languages found by the `where` argument doesn't exist, create a new DBT_Languages with this data.
     */
    create: XOR<DBT_LanguagesCreateInput, DBT_LanguagesUncheckedCreateInput>
    /**
     * In case the DBT_Languages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DBT_LanguagesUpdateInput, DBT_LanguagesUncheckedUpdateInput>
  }

  /**
   * DBT_Languages delete
   */
  export type DBT_LanguagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Languages
     */
    select?: DBT_LanguagesSelect<ExtArgs> | null
    /**
     * Filter which DBT_Languages to delete.
     */
    where: DBT_LanguagesWhereUniqueInput
  }

  /**
   * DBT_Languages deleteMany
   */
  export type DBT_LanguagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DBT_Languages to delete
     */
    where?: DBT_LanguagesWhereInput
  }

  /**
   * DBT_Languages without action
   */
  export type DBT_LanguagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Languages
     */
    select?: DBT_LanguagesSelect<ExtArgs> | null
  }


  /**
   * Model DBT_Layouts
   */

  export type AggregateDBT_Layouts = {
    _count: DBT_LayoutsCountAggregateOutputType | null
    _avg: DBT_LayoutsAvgAggregateOutputType | null
    _sum: DBT_LayoutsSumAggregateOutputType | null
    _min: DBT_LayoutsMinAggregateOutputType | null
    _max: DBT_LayoutsMaxAggregateOutputType | null
  }

  export type DBT_LayoutsAvgAggregateOutputType = {
    ID: number | null
  }

  export type DBT_LayoutsSumAggregateOutputType = {
    ID: bigint | null
  }

  export type DBT_LayoutsMinAggregateOutputType = {
    ID: bigint | null
    Active: boolean | null
    Type: string | null
    Name: string | null
    Xml: string | null
  }

  export type DBT_LayoutsMaxAggregateOutputType = {
    ID: bigint | null
    Active: boolean | null
    Type: string | null
    Name: string | null
    Xml: string | null
  }

  export type DBT_LayoutsCountAggregateOutputType = {
    ID: number
    Active: number
    Type: number
    Name: number
    Xml: number
    _all: number
  }


  export type DBT_LayoutsAvgAggregateInputType = {
    ID?: true
  }

  export type DBT_LayoutsSumAggregateInputType = {
    ID?: true
  }

  export type DBT_LayoutsMinAggregateInputType = {
    ID?: true
    Active?: true
    Type?: true
    Name?: true
    Xml?: true
  }

  export type DBT_LayoutsMaxAggregateInputType = {
    ID?: true
    Active?: true
    Type?: true
    Name?: true
    Xml?: true
  }

  export type DBT_LayoutsCountAggregateInputType = {
    ID?: true
    Active?: true
    Type?: true
    Name?: true
    Xml?: true
    _all?: true
  }

  export type DBT_LayoutsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DBT_Layouts to aggregate.
     */
    where?: DBT_LayoutsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_Layouts to fetch.
     */
    orderBy?: DBT_LayoutsOrderByWithRelationInput | DBT_LayoutsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DBT_LayoutsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_Layouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_Layouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DBT_Layouts
    **/
    _count?: true | DBT_LayoutsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DBT_LayoutsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DBT_LayoutsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DBT_LayoutsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DBT_LayoutsMaxAggregateInputType
  }

  export type GetDBT_LayoutsAggregateType<T extends DBT_LayoutsAggregateArgs> = {
        [P in keyof T & keyof AggregateDBT_Layouts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDBT_Layouts[P]>
      : GetScalarType<T[P], AggregateDBT_Layouts[P]>
  }




  export type DBT_LayoutsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DBT_LayoutsWhereInput
    orderBy?: DBT_LayoutsOrderByWithAggregationInput | DBT_LayoutsOrderByWithAggregationInput[]
    by: DBT_LayoutsScalarFieldEnum[] | DBT_LayoutsScalarFieldEnum
    having?: DBT_LayoutsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DBT_LayoutsCountAggregateInputType | true
    _avg?: DBT_LayoutsAvgAggregateInputType
    _sum?: DBT_LayoutsSumAggregateInputType
    _min?: DBT_LayoutsMinAggregateInputType
    _max?: DBT_LayoutsMaxAggregateInputType
  }

  export type DBT_LayoutsGroupByOutputType = {
    ID: bigint
    Active: boolean
    Type: string | null
    Name: string | null
    Xml: string | null
    _count: DBT_LayoutsCountAggregateOutputType | null
    _avg: DBT_LayoutsAvgAggregateOutputType | null
    _sum: DBT_LayoutsSumAggregateOutputType | null
    _min: DBT_LayoutsMinAggregateOutputType | null
    _max: DBT_LayoutsMaxAggregateOutputType | null
  }

  type GetDBT_LayoutsGroupByPayload<T extends DBT_LayoutsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DBT_LayoutsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DBT_LayoutsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DBT_LayoutsGroupByOutputType[P]>
            : GetScalarType<T[P], DBT_LayoutsGroupByOutputType[P]>
        }
      >
    >


  export type DBT_LayoutsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    Active?: boolean
    Type?: boolean
    Name?: boolean
    Xml?: boolean
  }, ExtArgs["result"]["dBT_Layouts"]>

  export type DBT_LayoutsSelectScalar = {
    ID?: boolean
    Active?: boolean
    Type?: boolean
    Name?: boolean
    Xml?: boolean
  }



  export type $DBT_LayoutsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DBT_Layouts"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: bigint
      Active: boolean
      Type: string | null
      Name: string | null
      Xml: string | null
    }, ExtArgs["result"]["dBT_Layouts"]>
    composites: {}
  }


  type DBT_LayoutsGetPayload<S extends boolean | null | undefined | DBT_LayoutsDefaultArgs> = $Result.GetResult<Prisma.$DBT_LayoutsPayload, S>

  type DBT_LayoutsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DBT_LayoutsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DBT_LayoutsCountAggregateInputType | true
    }

  export interface DBT_LayoutsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DBT_Layouts'], meta: { name: 'DBT_Layouts' } }
    /**
     * Find zero or one DBT_Layouts that matches the filter.
     * @param {DBT_LayoutsFindUniqueArgs} args - Arguments to find a DBT_Layouts
     * @example
     * // Get one DBT_Layouts
     * const dBT_Layouts = await prisma.dBT_Layouts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DBT_LayoutsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_LayoutsFindUniqueArgs<ExtArgs>>
    ): Prisma__DBT_LayoutsClient<$Result.GetResult<Prisma.$DBT_LayoutsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DBT_Layouts that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DBT_LayoutsFindUniqueOrThrowArgs} args - Arguments to find a DBT_Layouts
     * @example
     * // Get one DBT_Layouts
     * const dBT_Layouts = await prisma.dBT_Layouts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DBT_LayoutsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_LayoutsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DBT_LayoutsClient<$Result.GetResult<Prisma.$DBT_LayoutsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DBT_Layouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_LayoutsFindFirstArgs} args - Arguments to find a DBT_Layouts
     * @example
     * // Get one DBT_Layouts
     * const dBT_Layouts = await prisma.dBT_Layouts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DBT_LayoutsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_LayoutsFindFirstArgs<ExtArgs>>
    ): Prisma__DBT_LayoutsClient<$Result.GetResult<Prisma.$DBT_LayoutsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DBT_Layouts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_LayoutsFindFirstOrThrowArgs} args - Arguments to find a DBT_Layouts
     * @example
     * // Get one DBT_Layouts
     * const dBT_Layouts = await prisma.dBT_Layouts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DBT_LayoutsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_LayoutsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DBT_LayoutsClient<$Result.GetResult<Prisma.$DBT_LayoutsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DBT_Layouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_LayoutsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DBT_Layouts
     * const dBT_Layouts = await prisma.dBT_Layouts.findMany()
     * 
     * // Get first 10 DBT_Layouts
     * const dBT_Layouts = await prisma.dBT_Layouts.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const dBT_LayoutsWithIDOnly = await prisma.dBT_Layouts.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends DBT_LayoutsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_LayoutsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DBT_LayoutsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DBT_Layouts.
     * @param {DBT_LayoutsCreateArgs} args - Arguments to create a DBT_Layouts.
     * @example
     * // Create one DBT_Layouts
     * const DBT_Layouts = await prisma.dBT_Layouts.create({
     *   data: {
     *     // ... data to create a DBT_Layouts
     *   }
     * })
     * 
    **/
    create<T extends DBT_LayoutsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_LayoutsCreateArgs<ExtArgs>>
    ): Prisma__DBT_LayoutsClient<$Result.GetResult<Prisma.$DBT_LayoutsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DBT_Layouts.
     * @param {DBT_LayoutsCreateManyArgs} args - Arguments to create many DBT_Layouts.
     * @example
     * // Create many DBT_Layouts
     * const dBT_Layouts = await prisma.dBT_Layouts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends DBT_LayoutsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_LayoutsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DBT_Layouts.
     * @param {DBT_LayoutsDeleteArgs} args - Arguments to delete one DBT_Layouts.
     * @example
     * // Delete one DBT_Layouts
     * const DBT_Layouts = await prisma.dBT_Layouts.delete({
     *   where: {
     *     // ... filter to delete one DBT_Layouts
     *   }
     * })
     * 
    **/
    delete<T extends DBT_LayoutsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_LayoutsDeleteArgs<ExtArgs>>
    ): Prisma__DBT_LayoutsClient<$Result.GetResult<Prisma.$DBT_LayoutsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DBT_Layouts.
     * @param {DBT_LayoutsUpdateArgs} args - Arguments to update one DBT_Layouts.
     * @example
     * // Update one DBT_Layouts
     * const dBT_Layouts = await prisma.dBT_Layouts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DBT_LayoutsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_LayoutsUpdateArgs<ExtArgs>>
    ): Prisma__DBT_LayoutsClient<$Result.GetResult<Prisma.$DBT_LayoutsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DBT_Layouts.
     * @param {DBT_LayoutsDeleteManyArgs} args - Arguments to filter DBT_Layouts to delete.
     * @example
     * // Delete a few DBT_Layouts
     * const { count } = await prisma.dBT_Layouts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DBT_LayoutsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_LayoutsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DBT_Layouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_LayoutsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DBT_Layouts
     * const dBT_Layouts = await prisma.dBT_Layouts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DBT_LayoutsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_LayoutsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DBT_Layouts.
     * @param {DBT_LayoutsUpsertArgs} args - Arguments to update or create a DBT_Layouts.
     * @example
     * // Update or create a DBT_Layouts
     * const dBT_Layouts = await prisma.dBT_Layouts.upsert({
     *   create: {
     *     // ... data to create a DBT_Layouts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DBT_Layouts we want to update
     *   }
     * })
    **/
    upsert<T extends DBT_LayoutsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_LayoutsUpsertArgs<ExtArgs>>
    ): Prisma__DBT_LayoutsClient<$Result.GetResult<Prisma.$DBT_LayoutsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DBT_Layouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_LayoutsCountArgs} args - Arguments to filter DBT_Layouts to count.
     * @example
     * // Count the number of DBT_Layouts
     * const count = await prisma.dBT_Layouts.count({
     *   where: {
     *     // ... the filter for the DBT_Layouts we want to count
     *   }
     * })
    **/
    count<T extends DBT_LayoutsCountArgs>(
      args?: Subset<T, DBT_LayoutsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DBT_LayoutsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DBT_Layouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_LayoutsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DBT_LayoutsAggregateArgs>(args: Subset<T, DBT_LayoutsAggregateArgs>): Prisma.PrismaPromise<GetDBT_LayoutsAggregateType<T>>

    /**
     * Group by DBT_Layouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_LayoutsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DBT_LayoutsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DBT_LayoutsGroupByArgs['orderBy'] }
        : { orderBy?: DBT_LayoutsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DBT_LayoutsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDBT_LayoutsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DBT_Layouts model
   */
  readonly fields: DBT_LayoutsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DBT_Layouts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DBT_LayoutsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DBT_Layouts model
   */ 
  interface DBT_LayoutsFieldRefs {
    readonly ID: FieldRef<"DBT_Layouts", 'BigInt'>
    readonly Active: FieldRef<"DBT_Layouts", 'Boolean'>
    readonly Type: FieldRef<"DBT_Layouts", 'String'>
    readonly Name: FieldRef<"DBT_Layouts", 'String'>
    readonly Xml: FieldRef<"DBT_Layouts", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DBT_Layouts findUnique
   */
  export type DBT_LayoutsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Layouts
     */
    select?: DBT_LayoutsSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Layouts to fetch.
     */
    where: DBT_LayoutsWhereUniqueInput
  }

  /**
   * DBT_Layouts findUniqueOrThrow
   */
  export type DBT_LayoutsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Layouts
     */
    select?: DBT_LayoutsSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Layouts to fetch.
     */
    where: DBT_LayoutsWhereUniqueInput
  }

  /**
   * DBT_Layouts findFirst
   */
  export type DBT_LayoutsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Layouts
     */
    select?: DBT_LayoutsSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Layouts to fetch.
     */
    where?: DBT_LayoutsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_Layouts to fetch.
     */
    orderBy?: DBT_LayoutsOrderByWithRelationInput | DBT_LayoutsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DBT_Layouts.
     */
    cursor?: DBT_LayoutsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_Layouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_Layouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DBT_Layouts.
     */
    distinct?: DBT_LayoutsScalarFieldEnum | DBT_LayoutsScalarFieldEnum[]
  }

  /**
   * DBT_Layouts findFirstOrThrow
   */
  export type DBT_LayoutsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Layouts
     */
    select?: DBT_LayoutsSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Layouts to fetch.
     */
    where?: DBT_LayoutsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_Layouts to fetch.
     */
    orderBy?: DBT_LayoutsOrderByWithRelationInput | DBT_LayoutsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DBT_Layouts.
     */
    cursor?: DBT_LayoutsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_Layouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_Layouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DBT_Layouts.
     */
    distinct?: DBT_LayoutsScalarFieldEnum | DBT_LayoutsScalarFieldEnum[]
  }

  /**
   * DBT_Layouts findMany
   */
  export type DBT_LayoutsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Layouts
     */
    select?: DBT_LayoutsSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Layouts to fetch.
     */
    where?: DBT_LayoutsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_Layouts to fetch.
     */
    orderBy?: DBT_LayoutsOrderByWithRelationInput | DBT_LayoutsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DBT_Layouts.
     */
    cursor?: DBT_LayoutsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_Layouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_Layouts.
     */
    skip?: number
    distinct?: DBT_LayoutsScalarFieldEnum | DBT_LayoutsScalarFieldEnum[]
  }

  /**
   * DBT_Layouts create
   */
  export type DBT_LayoutsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Layouts
     */
    select?: DBT_LayoutsSelect<ExtArgs> | null
    /**
     * The data needed to create a DBT_Layouts.
     */
    data?: XOR<DBT_LayoutsCreateInput, DBT_LayoutsUncheckedCreateInput>
  }

  /**
   * DBT_Layouts createMany
   */
  export type DBT_LayoutsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DBT_Layouts.
     */
    data: DBT_LayoutsCreateManyInput | DBT_LayoutsCreateManyInput[]
  }

  /**
   * DBT_Layouts update
   */
  export type DBT_LayoutsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Layouts
     */
    select?: DBT_LayoutsSelect<ExtArgs> | null
    /**
     * The data needed to update a DBT_Layouts.
     */
    data: XOR<DBT_LayoutsUpdateInput, DBT_LayoutsUncheckedUpdateInput>
    /**
     * Choose, which DBT_Layouts to update.
     */
    where: DBT_LayoutsWhereUniqueInput
  }

  /**
   * DBT_Layouts updateMany
   */
  export type DBT_LayoutsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DBT_Layouts.
     */
    data: XOR<DBT_LayoutsUpdateManyMutationInput, DBT_LayoutsUncheckedUpdateManyInput>
    /**
     * Filter which DBT_Layouts to update
     */
    where?: DBT_LayoutsWhereInput
  }

  /**
   * DBT_Layouts upsert
   */
  export type DBT_LayoutsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Layouts
     */
    select?: DBT_LayoutsSelect<ExtArgs> | null
    /**
     * The filter to search for the DBT_Layouts to update in case it exists.
     */
    where: DBT_LayoutsWhereUniqueInput
    /**
     * In case the DBT_Layouts found by the `where` argument doesn't exist, create a new DBT_Layouts with this data.
     */
    create: XOR<DBT_LayoutsCreateInput, DBT_LayoutsUncheckedCreateInput>
    /**
     * In case the DBT_Layouts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DBT_LayoutsUpdateInput, DBT_LayoutsUncheckedUpdateInput>
  }

  /**
   * DBT_Layouts delete
   */
  export type DBT_LayoutsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Layouts
     */
    select?: DBT_LayoutsSelect<ExtArgs> | null
    /**
     * Filter which DBT_Layouts to delete.
     */
    where: DBT_LayoutsWhereUniqueInput
  }

  /**
   * DBT_Layouts deleteMany
   */
  export type DBT_LayoutsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DBT_Layouts to delete
     */
    where?: DBT_LayoutsWhereInput
  }

  /**
   * DBT_Layouts without action
   */
  export type DBT_LayoutsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Layouts
     */
    select?: DBT_LayoutsSelect<ExtArgs> | null
  }


  /**
   * Model DBT_MealGroups
   */

  export type AggregateDBT_MealGroups = {
    _count: DBT_MealGroupsCountAggregateOutputType | null
    _avg: DBT_MealGroupsAvgAggregateOutputType | null
    _sum: DBT_MealGroupsSumAggregateOutputType | null
    _min: DBT_MealGroupsMinAggregateOutputType | null
    _max: DBT_MealGroupsMaxAggregateOutputType | null
  }

  export type DBT_MealGroupsAvgAggregateOutputType = {
    ID: number | null
    ID_Layout: number | null
    Order: number | null
  }

  export type DBT_MealGroupsSumAggregateOutputType = {
    ID: bigint | null
    ID_Layout: bigint | null
    Order: number | null
  }

  export type DBT_MealGroupsMinAggregateOutputType = {
    ID: bigint | null
    Active: boolean | null
    MealGroup: string | null
    ID_Layout: bigint | null
    BackgroudPicture: Buffer | null
    Order: number | null
  }

  export type DBT_MealGroupsMaxAggregateOutputType = {
    ID: bigint | null
    Active: boolean | null
    MealGroup: string | null
    ID_Layout: bigint | null
    BackgroudPicture: Buffer | null
    Order: number | null
  }

  export type DBT_MealGroupsCountAggregateOutputType = {
    ID: number
    Active: number
    MealGroup: number
    ID_Layout: number
    BackgroudPicture: number
    Order: number
    _all: number
  }


  export type DBT_MealGroupsAvgAggregateInputType = {
    ID?: true
    ID_Layout?: true
    Order?: true
  }

  export type DBT_MealGroupsSumAggregateInputType = {
    ID?: true
    ID_Layout?: true
    Order?: true
  }

  export type DBT_MealGroupsMinAggregateInputType = {
    ID?: true
    Active?: true
    MealGroup?: true
    ID_Layout?: true
    BackgroudPicture?: true
    Order?: true
  }

  export type DBT_MealGroupsMaxAggregateInputType = {
    ID?: true
    Active?: true
    MealGroup?: true
    ID_Layout?: true
    BackgroudPicture?: true
    Order?: true
  }

  export type DBT_MealGroupsCountAggregateInputType = {
    ID?: true
    Active?: true
    MealGroup?: true
    ID_Layout?: true
    BackgroudPicture?: true
    Order?: true
    _all?: true
  }

  export type DBT_MealGroupsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DBT_MealGroups to aggregate.
     */
    where?: DBT_MealGroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_MealGroups to fetch.
     */
    orderBy?: DBT_MealGroupsOrderByWithRelationInput | DBT_MealGroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DBT_MealGroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_MealGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_MealGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DBT_MealGroups
    **/
    _count?: true | DBT_MealGroupsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DBT_MealGroupsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DBT_MealGroupsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DBT_MealGroupsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DBT_MealGroupsMaxAggregateInputType
  }

  export type GetDBT_MealGroupsAggregateType<T extends DBT_MealGroupsAggregateArgs> = {
        [P in keyof T & keyof AggregateDBT_MealGroups]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDBT_MealGroups[P]>
      : GetScalarType<T[P], AggregateDBT_MealGroups[P]>
  }




  export type DBT_MealGroupsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DBT_MealGroupsWhereInput
    orderBy?: DBT_MealGroupsOrderByWithAggregationInput | DBT_MealGroupsOrderByWithAggregationInput[]
    by: DBT_MealGroupsScalarFieldEnum[] | DBT_MealGroupsScalarFieldEnum
    having?: DBT_MealGroupsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DBT_MealGroupsCountAggregateInputType | true
    _avg?: DBT_MealGroupsAvgAggregateInputType
    _sum?: DBT_MealGroupsSumAggregateInputType
    _min?: DBT_MealGroupsMinAggregateInputType
    _max?: DBT_MealGroupsMaxAggregateInputType
  }

  export type DBT_MealGroupsGroupByOutputType = {
    ID: bigint
    Active: boolean
    MealGroup: string | null
    ID_Layout: bigint | null
    BackgroudPicture: Buffer | null
    Order: number | null
    _count: DBT_MealGroupsCountAggregateOutputType | null
    _avg: DBT_MealGroupsAvgAggregateOutputType | null
    _sum: DBT_MealGroupsSumAggregateOutputType | null
    _min: DBT_MealGroupsMinAggregateOutputType | null
    _max: DBT_MealGroupsMaxAggregateOutputType | null
  }

  type GetDBT_MealGroupsGroupByPayload<T extends DBT_MealGroupsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DBT_MealGroupsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DBT_MealGroupsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DBT_MealGroupsGroupByOutputType[P]>
            : GetScalarType<T[P], DBT_MealGroupsGroupByOutputType[P]>
        }
      >
    >


  export type DBT_MealGroupsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    Active?: boolean
    MealGroup?: boolean
    ID_Layout?: boolean
    BackgroudPicture?: boolean
    Order?: boolean
  }, ExtArgs["result"]["dBT_MealGroups"]>

  export type DBT_MealGroupsSelectScalar = {
    ID?: boolean
    Active?: boolean
    MealGroup?: boolean
    ID_Layout?: boolean
    BackgroudPicture?: boolean
    Order?: boolean
  }



  export type $DBT_MealGroupsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DBT_MealGroups"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: bigint
      Active: boolean
      MealGroup: string | null
      ID_Layout: bigint | null
      BackgroudPicture: Buffer | null
      Order: number | null
    }, ExtArgs["result"]["dBT_MealGroups"]>
    composites: {}
  }


  type DBT_MealGroupsGetPayload<S extends boolean | null | undefined | DBT_MealGroupsDefaultArgs> = $Result.GetResult<Prisma.$DBT_MealGroupsPayload, S>

  type DBT_MealGroupsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DBT_MealGroupsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DBT_MealGroupsCountAggregateInputType | true
    }

  export interface DBT_MealGroupsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DBT_MealGroups'], meta: { name: 'DBT_MealGroups' } }
    /**
     * Find zero or one DBT_MealGroups that matches the filter.
     * @param {DBT_MealGroupsFindUniqueArgs} args - Arguments to find a DBT_MealGroups
     * @example
     * // Get one DBT_MealGroups
     * const dBT_MealGroups = await prisma.dBT_MealGroups.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DBT_MealGroupsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_MealGroupsFindUniqueArgs<ExtArgs>>
    ): Prisma__DBT_MealGroupsClient<$Result.GetResult<Prisma.$DBT_MealGroupsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DBT_MealGroups that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DBT_MealGroupsFindUniqueOrThrowArgs} args - Arguments to find a DBT_MealGroups
     * @example
     * // Get one DBT_MealGroups
     * const dBT_MealGroups = await prisma.dBT_MealGroups.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DBT_MealGroupsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_MealGroupsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DBT_MealGroupsClient<$Result.GetResult<Prisma.$DBT_MealGroupsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DBT_MealGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_MealGroupsFindFirstArgs} args - Arguments to find a DBT_MealGroups
     * @example
     * // Get one DBT_MealGroups
     * const dBT_MealGroups = await prisma.dBT_MealGroups.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DBT_MealGroupsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_MealGroupsFindFirstArgs<ExtArgs>>
    ): Prisma__DBT_MealGroupsClient<$Result.GetResult<Prisma.$DBT_MealGroupsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DBT_MealGroups that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_MealGroupsFindFirstOrThrowArgs} args - Arguments to find a DBT_MealGroups
     * @example
     * // Get one DBT_MealGroups
     * const dBT_MealGroups = await prisma.dBT_MealGroups.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DBT_MealGroupsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_MealGroupsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DBT_MealGroupsClient<$Result.GetResult<Prisma.$DBT_MealGroupsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DBT_MealGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_MealGroupsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DBT_MealGroups
     * const dBT_MealGroups = await prisma.dBT_MealGroups.findMany()
     * 
     * // Get first 10 DBT_MealGroups
     * const dBT_MealGroups = await prisma.dBT_MealGroups.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const dBT_MealGroupsWithIDOnly = await prisma.dBT_MealGroups.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends DBT_MealGroupsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_MealGroupsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DBT_MealGroupsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DBT_MealGroups.
     * @param {DBT_MealGroupsCreateArgs} args - Arguments to create a DBT_MealGroups.
     * @example
     * // Create one DBT_MealGroups
     * const DBT_MealGroups = await prisma.dBT_MealGroups.create({
     *   data: {
     *     // ... data to create a DBT_MealGroups
     *   }
     * })
     * 
    **/
    create<T extends DBT_MealGroupsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_MealGroupsCreateArgs<ExtArgs>>
    ): Prisma__DBT_MealGroupsClient<$Result.GetResult<Prisma.$DBT_MealGroupsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DBT_MealGroups.
     * @param {DBT_MealGroupsCreateManyArgs} args - Arguments to create many DBT_MealGroups.
     * @example
     * // Create many DBT_MealGroups
     * const dBT_MealGroups = await prisma.dBT_MealGroups.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends DBT_MealGroupsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_MealGroupsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DBT_MealGroups.
     * @param {DBT_MealGroupsDeleteArgs} args - Arguments to delete one DBT_MealGroups.
     * @example
     * // Delete one DBT_MealGroups
     * const DBT_MealGroups = await prisma.dBT_MealGroups.delete({
     *   where: {
     *     // ... filter to delete one DBT_MealGroups
     *   }
     * })
     * 
    **/
    delete<T extends DBT_MealGroupsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_MealGroupsDeleteArgs<ExtArgs>>
    ): Prisma__DBT_MealGroupsClient<$Result.GetResult<Prisma.$DBT_MealGroupsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DBT_MealGroups.
     * @param {DBT_MealGroupsUpdateArgs} args - Arguments to update one DBT_MealGroups.
     * @example
     * // Update one DBT_MealGroups
     * const dBT_MealGroups = await prisma.dBT_MealGroups.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DBT_MealGroupsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_MealGroupsUpdateArgs<ExtArgs>>
    ): Prisma__DBT_MealGroupsClient<$Result.GetResult<Prisma.$DBT_MealGroupsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DBT_MealGroups.
     * @param {DBT_MealGroupsDeleteManyArgs} args - Arguments to filter DBT_MealGroups to delete.
     * @example
     * // Delete a few DBT_MealGroups
     * const { count } = await prisma.dBT_MealGroups.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DBT_MealGroupsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_MealGroupsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DBT_MealGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_MealGroupsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DBT_MealGroups
     * const dBT_MealGroups = await prisma.dBT_MealGroups.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DBT_MealGroupsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_MealGroupsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DBT_MealGroups.
     * @param {DBT_MealGroupsUpsertArgs} args - Arguments to update or create a DBT_MealGroups.
     * @example
     * // Update or create a DBT_MealGroups
     * const dBT_MealGroups = await prisma.dBT_MealGroups.upsert({
     *   create: {
     *     // ... data to create a DBT_MealGroups
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DBT_MealGroups we want to update
     *   }
     * })
    **/
    upsert<T extends DBT_MealGroupsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_MealGroupsUpsertArgs<ExtArgs>>
    ): Prisma__DBT_MealGroupsClient<$Result.GetResult<Prisma.$DBT_MealGroupsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DBT_MealGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_MealGroupsCountArgs} args - Arguments to filter DBT_MealGroups to count.
     * @example
     * // Count the number of DBT_MealGroups
     * const count = await prisma.dBT_MealGroups.count({
     *   where: {
     *     // ... the filter for the DBT_MealGroups we want to count
     *   }
     * })
    **/
    count<T extends DBT_MealGroupsCountArgs>(
      args?: Subset<T, DBT_MealGroupsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DBT_MealGroupsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DBT_MealGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_MealGroupsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DBT_MealGroupsAggregateArgs>(args: Subset<T, DBT_MealGroupsAggregateArgs>): Prisma.PrismaPromise<GetDBT_MealGroupsAggregateType<T>>

    /**
     * Group by DBT_MealGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_MealGroupsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DBT_MealGroupsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DBT_MealGroupsGroupByArgs['orderBy'] }
        : { orderBy?: DBT_MealGroupsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DBT_MealGroupsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDBT_MealGroupsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DBT_MealGroups model
   */
  readonly fields: DBT_MealGroupsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DBT_MealGroups.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DBT_MealGroupsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DBT_MealGroups model
   */ 
  interface DBT_MealGroupsFieldRefs {
    readonly ID: FieldRef<"DBT_MealGroups", 'BigInt'>
    readonly Active: FieldRef<"DBT_MealGroups", 'Boolean'>
    readonly MealGroup: FieldRef<"DBT_MealGroups", 'String'>
    readonly ID_Layout: FieldRef<"DBT_MealGroups", 'BigInt'>
    readonly BackgroudPicture: FieldRef<"DBT_MealGroups", 'Bytes'>
    readonly Order: FieldRef<"DBT_MealGroups", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DBT_MealGroups findUnique
   */
  export type DBT_MealGroupsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_MealGroups
     */
    select?: DBT_MealGroupsSelect<ExtArgs> | null
    /**
     * Filter, which DBT_MealGroups to fetch.
     */
    where: DBT_MealGroupsWhereUniqueInput
  }

  /**
   * DBT_MealGroups findUniqueOrThrow
   */
  export type DBT_MealGroupsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_MealGroups
     */
    select?: DBT_MealGroupsSelect<ExtArgs> | null
    /**
     * Filter, which DBT_MealGroups to fetch.
     */
    where: DBT_MealGroupsWhereUniqueInput
  }

  /**
   * DBT_MealGroups findFirst
   */
  export type DBT_MealGroupsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_MealGroups
     */
    select?: DBT_MealGroupsSelect<ExtArgs> | null
    /**
     * Filter, which DBT_MealGroups to fetch.
     */
    where?: DBT_MealGroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_MealGroups to fetch.
     */
    orderBy?: DBT_MealGroupsOrderByWithRelationInput | DBT_MealGroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DBT_MealGroups.
     */
    cursor?: DBT_MealGroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_MealGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_MealGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DBT_MealGroups.
     */
    distinct?: DBT_MealGroupsScalarFieldEnum | DBT_MealGroupsScalarFieldEnum[]
  }

  /**
   * DBT_MealGroups findFirstOrThrow
   */
  export type DBT_MealGroupsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_MealGroups
     */
    select?: DBT_MealGroupsSelect<ExtArgs> | null
    /**
     * Filter, which DBT_MealGroups to fetch.
     */
    where?: DBT_MealGroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_MealGroups to fetch.
     */
    orderBy?: DBT_MealGroupsOrderByWithRelationInput | DBT_MealGroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DBT_MealGroups.
     */
    cursor?: DBT_MealGroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_MealGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_MealGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DBT_MealGroups.
     */
    distinct?: DBT_MealGroupsScalarFieldEnum | DBT_MealGroupsScalarFieldEnum[]
  }

  /**
   * DBT_MealGroups findMany
   */
  export type DBT_MealGroupsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_MealGroups
     */
    select?: DBT_MealGroupsSelect<ExtArgs> | null
    /**
     * Filter, which DBT_MealGroups to fetch.
     */
    where?: DBT_MealGroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_MealGroups to fetch.
     */
    orderBy?: DBT_MealGroupsOrderByWithRelationInput | DBT_MealGroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DBT_MealGroups.
     */
    cursor?: DBT_MealGroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_MealGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_MealGroups.
     */
    skip?: number
    distinct?: DBT_MealGroupsScalarFieldEnum | DBT_MealGroupsScalarFieldEnum[]
  }

  /**
   * DBT_MealGroups create
   */
  export type DBT_MealGroupsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_MealGroups
     */
    select?: DBT_MealGroupsSelect<ExtArgs> | null
    /**
     * The data needed to create a DBT_MealGroups.
     */
    data?: XOR<DBT_MealGroupsCreateInput, DBT_MealGroupsUncheckedCreateInput>
  }

  /**
   * DBT_MealGroups createMany
   */
  export type DBT_MealGroupsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DBT_MealGroups.
     */
    data: DBT_MealGroupsCreateManyInput | DBT_MealGroupsCreateManyInput[]
  }

  /**
   * DBT_MealGroups update
   */
  export type DBT_MealGroupsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_MealGroups
     */
    select?: DBT_MealGroupsSelect<ExtArgs> | null
    /**
     * The data needed to update a DBT_MealGroups.
     */
    data: XOR<DBT_MealGroupsUpdateInput, DBT_MealGroupsUncheckedUpdateInput>
    /**
     * Choose, which DBT_MealGroups to update.
     */
    where: DBT_MealGroupsWhereUniqueInput
  }

  /**
   * DBT_MealGroups updateMany
   */
  export type DBT_MealGroupsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DBT_MealGroups.
     */
    data: XOR<DBT_MealGroupsUpdateManyMutationInput, DBT_MealGroupsUncheckedUpdateManyInput>
    /**
     * Filter which DBT_MealGroups to update
     */
    where?: DBT_MealGroupsWhereInput
  }

  /**
   * DBT_MealGroups upsert
   */
  export type DBT_MealGroupsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_MealGroups
     */
    select?: DBT_MealGroupsSelect<ExtArgs> | null
    /**
     * The filter to search for the DBT_MealGroups to update in case it exists.
     */
    where: DBT_MealGroupsWhereUniqueInput
    /**
     * In case the DBT_MealGroups found by the `where` argument doesn't exist, create a new DBT_MealGroups with this data.
     */
    create: XOR<DBT_MealGroupsCreateInput, DBT_MealGroupsUncheckedCreateInput>
    /**
     * In case the DBT_MealGroups was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DBT_MealGroupsUpdateInput, DBT_MealGroupsUncheckedUpdateInput>
  }

  /**
   * DBT_MealGroups delete
   */
  export type DBT_MealGroupsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_MealGroups
     */
    select?: DBT_MealGroupsSelect<ExtArgs> | null
    /**
     * Filter which DBT_MealGroups to delete.
     */
    where: DBT_MealGroupsWhereUniqueInput
  }

  /**
   * DBT_MealGroups deleteMany
   */
  export type DBT_MealGroupsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DBT_MealGroups to delete
     */
    where?: DBT_MealGroupsWhereInput
  }

  /**
   * DBT_MealGroups without action
   */
  export type DBT_MealGroupsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_MealGroups
     */
    select?: DBT_MealGroupsSelect<ExtArgs> | null
  }


  /**
   * Model DBT_Meals
   */

  export type AggregateDBT_Meals = {
    _count: DBT_MealsCountAggregateOutputType | null
    _avg: DBT_MealsAvgAggregateOutputType | null
    _sum: DBT_MealsSumAggregateOutputType | null
    _min: DBT_MealsMinAggregateOutputType | null
    _max: DBT_MealsMaxAggregateOutputType | null
  }

  export type DBT_MealsAvgAggregateOutputType = {
    ID: number | null
    Price: Decimal | null
  }

  export type DBT_MealsSumAggregateOutputType = {
    ID: bigint | null
    Price: Decimal | null
  }

  export type DBT_MealsMinAggregateOutputType = {
    ID: bigint | null
    Active: boolean | null
    Kitchen: boolean | null
    Available: boolean | null
    Meal: string | null
    MealDescription: string | null
    Price: Decimal | null
    IsCombo: boolean | null
    Picture: Buffer | null
    PictureDescription: string | null
  }

  export type DBT_MealsMaxAggregateOutputType = {
    ID: bigint | null
    Active: boolean | null
    Kitchen: boolean | null
    Available: boolean | null
    Meal: string | null
    MealDescription: string | null
    Price: Decimal | null
    IsCombo: boolean | null
    Picture: Buffer | null
    PictureDescription: string | null
  }

  export type DBT_MealsCountAggregateOutputType = {
    ID: number
    Active: number
    Kitchen: number
    Available: number
    Meal: number
    MealDescription: number
    Price: number
    IsCombo: number
    Picture: number
    PictureDescription: number
    _all: number
  }


  export type DBT_MealsAvgAggregateInputType = {
    ID?: true
    Price?: true
  }

  export type DBT_MealsSumAggregateInputType = {
    ID?: true
    Price?: true
  }

  export type DBT_MealsMinAggregateInputType = {
    ID?: true
    Active?: true
    Kitchen?: true
    Available?: true
    Meal?: true
    MealDescription?: true
    Price?: true
    IsCombo?: true
    Picture?: true
    PictureDescription?: true
  }

  export type DBT_MealsMaxAggregateInputType = {
    ID?: true
    Active?: true
    Kitchen?: true
    Available?: true
    Meal?: true
    MealDescription?: true
    Price?: true
    IsCombo?: true
    Picture?: true
    PictureDescription?: true
  }

  export type DBT_MealsCountAggregateInputType = {
    ID?: true
    Active?: true
    Kitchen?: true
    Available?: true
    Meal?: true
    MealDescription?: true
    Price?: true
    IsCombo?: true
    Picture?: true
    PictureDescription?: true
    _all?: true
  }

  export type DBT_MealsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DBT_Meals to aggregate.
     */
    where?: DBT_MealsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_Meals to fetch.
     */
    orderBy?: DBT_MealsOrderByWithRelationInput | DBT_MealsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DBT_MealsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DBT_Meals
    **/
    _count?: true | DBT_MealsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DBT_MealsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DBT_MealsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DBT_MealsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DBT_MealsMaxAggregateInputType
  }

  export type GetDBT_MealsAggregateType<T extends DBT_MealsAggregateArgs> = {
        [P in keyof T & keyof AggregateDBT_Meals]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDBT_Meals[P]>
      : GetScalarType<T[P], AggregateDBT_Meals[P]>
  }




  export type DBT_MealsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DBT_MealsWhereInput
    orderBy?: DBT_MealsOrderByWithAggregationInput | DBT_MealsOrderByWithAggregationInput[]
    by: DBT_MealsScalarFieldEnum[] | DBT_MealsScalarFieldEnum
    having?: DBT_MealsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DBT_MealsCountAggregateInputType | true
    _avg?: DBT_MealsAvgAggregateInputType
    _sum?: DBT_MealsSumAggregateInputType
    _min?: DBT_MealsMinAggregateInputType
    _max?: DBT_MealsMaxAggregateInputType
  }

  export type DBT_MealsGroupByOutputType = {
    ID: bigint
    Active: boolean
    Kitchen: boolean | null
    Available: boolean | null
    Meal: string | null
    MealDescription: string | null
    Price: Decimal | null
    IsCombo: boolean
    Picture: Buffer | null
    PictureDescription: string | null
    _count: DBT_MealsCountAggregateOutputType | null
    _avg: DBT_MealsAvgAggregateOutputType | null
    _sum: DBT_MealsSumAggregateOutputType | null
    _min: DBT_MealsMinAggregateOutputType | null
    _max: DBT_MealsMaxAggregateOutputType | null
  }

  type GetDBT_MealsGroupByPayload<T extends DBT_MealsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DBT_MealsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DBT_MealsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DBT_MealsGroupByOutputType[P]>
            : GetScalarType<T[P], DBT_MealsGroupByOutputType[P]>
        }
      >
    >


  export type DBT_MealsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    Active?: boolean
    Kitchen?: boolean
    Available?: boolean
    Meal?: boolean
    MealDescription?: boolean
    Price?: boolean
    IsCombo?: boolean
    Picture?: boolean
    PictureDescription?: boolean
  }, ExtArgs["result"]["dBT_Meals"]>

  export type DBT_MealsSelectScalar = {
    ID?: boolean
    Active?: boolean
    Kitchen?: boolean
    Available?: boolean
    Meal?: boolean
    MealDescription?: boolean
    Price?: boolean
    IsCombo?: boolean
    Picture?: boolean
    PictureDescription?: boolean
  }



  export type $DBT_MealsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DBT_Meals"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: bigint
      Active: boolean
      Kitchen: boolean | null
      Available: boolean | null
      Meal: string | null
      MealDescription: string | null
      Price: Prisma.Decimal | null
      IsCombo: boolean
      Picture: Buffer | null
      PictureDescription: string | null
    }, ExtArgs["result"]["dBT_Meals"]>
    composites: {}
  }


  type DBT_MealsGetPayload<S extends boolean | null | undefined | DBT_MealsDefaultArgs> = $Result.GetResult<Prisma.$DBT_MealsPayload, S>

  type DBT_MealsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DBT_MealsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DBT_MealsCountAggregateInputType | true
    }

  export interface DBT_MealsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DBT_Meals'], meta: { name: 'DBT_Meals' } }
    /**
     * Find zero or one DBT_Meals that matches the filter.
     * @param {DBT_MealsFindUniqueArgs} args - Arguments to find a DBT_Meals
     * @example
     * // Get one DBT_Meals
     * const dBT_Meals = await prisma.dBT_Meals.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DBT_MealsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_MealsFindUniqueArgs<ExtArgs>>
    ): Prisma__DBT_MealsClient<$Result.GetResult<Prisma.$DBT_MealsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DBT_Meals that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DBT_MealsFindUniqueOrThrowArgs} args - Arguments to find a DBT_Meals
     * @example
     * // Get one DBT_Meals
     * const dBT_Meals = await prisma.dBT_Meals.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DBT_MealsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_MealsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DBT_MealsClient<$Result.GetResult<Prisma.$DBT_MealsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DBT_Meals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_MealsFindFirstArgs} args - Arguments to find a DBT_Meals
     * @example
     * // Get one DBT_Meals
     * const dBT_Meals = await prisma.dBT_Meals.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DBT_MealsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_MealsFindFirstArgs<ExtArgs>>
    ): Prisma__DBT_MealsClient<$Result.GetResult<Prisma.$DBT_MealsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DBT_Meals that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_MealsFindFirstOrThrowArgs} args - Arguments to find a DBT_Meals
     * @example
     * // Get one DBT_Meals
     * const dBT_Meals = await prisma.dBT_Meals.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DBT_MealsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_MealsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DBT_MealsClient<$Result.GetResult<Prisma.$DBT_MealsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DBT_Meals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_MealsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DBT_Meals
     * const dBT_Meals = await prisma.dBT_Meals.findMany()
     * 
     * // Get first 10 DBT_Meals
     * const dBT_Meals = await prisma.dBT_Meals.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const dBT_MealsWithIDOnly = await prisma.dBT_Meals.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends DBT_MealsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_MealsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DBT_MealsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DBT_Meals.
     * @param {DBT_MealsCreateArgs} args - Arguments to create a DBT_Meals.
     * @example
     * // Create one DBT_Meals
     * const DBT_Meals = await prisma.dBT_Meals.create({
     *   data: {
     *     // ... data to create a DBT_Meals
     *   }
     * })
     * 
    **/
    create<T extends DBT_MealsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_MealsCreateArgs<ExtArgs>>
    ): Prisma__DBT_MealsClient<$Result.GetResult<Prisma.$DBT_MealsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DBT_Meals.
     * @param {DBT_MealsCreateManyArgs} args - Arguments to create many DBT_Meals.
     * @example
     * // Create many DBT_Meals
     * const dBT_Meals = await prisma.dBT_Meals.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends DBT_MealsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_MealsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DBT_Meals.
     * @param {DBT_MealsDeleteArgs} args - Arguments to delete one DBT_Meals.
     * @example
     * // Delete one DBT_Meals
     * const DBT_Meals = await prisma.dBT_Meals.delete({
     *   where: {
     *     // ... filter to delete one DBT_Meals
     *   }
     * })
     * 
    **/
    delete<T extends DBT_MealsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_MealsDeleteArgs<ExtArgs>>
    ): Prisma__DBT_MealsClient<$Result.GetResult<Prisma.$DBT_MealsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DBT_Meals.
     * @param {DBT_MealsUpdateArgs} args - Arguments to update one DBT_Meals.
     * @example
     * // Update one DBT_Meals
     * const dBT_Meals = await prisma.dBT_Meals.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DBT_MealsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_MealsUpdateArgs<ExtArgs>>
    ): Prisma__DBT_MealsClient<$Result.GetResult<Prisma.$DBT_MealsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DBT_Meals.
     * @param {DBT_MealsDeleteManyArgs} args - Arguments to filter DBT_Meals to delete.
     * @example
     * // Delete a few DBT_Meals
     * const { count } = await prisma.dBT_Meals.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DBT_MealsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_MealsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DBT_Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_MealsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DBT_Meals
     * const dBT_Meals = await prisma.dBT_Meals.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DBT_MealsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_MealsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DBT_Meals.
     * @param {DBT_MealsUpsertArgs} args - Arguments to update or create a DBT_Meals.
     * @example
     * // Update or create a DBT_Meals
     * const dBT_Meals = await prisma.dBT_Meals.upsert({
     *   create: {
     *     // ... data to create a DBT_Meals
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DBT_Meals we want to update
     *   }
     * })
    **/
    upsert<T extends DBT_MealsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_MealsUpsertArgs<ExtArgs>>
    ): Prisma__DBT_MealsClient<$Result.GetResult<Prisma.$DBT_MealsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DBT_Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_MealsCountArgs} args - Arguments to filter DBT_Meals to count.
     * @example
     * // Count the number of DBT_Meals
     * const count = await prisma.dBT_Meals.count({
     *   where: {
     *     // ... the filter for the DBT_Meals we want to count
     *   }
     * })
    **/
    count<T extends DBT_MealsCountArgs>(
      args?: Subset<T, DBT_MealsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DBT_MealsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DBT_Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_MealsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DBT_MealsAggregateArgs>(args: Subset<T, DBT_MealsAggregateArgs>): Prisma.PrismaPromise<GetDBT_MealsAggregateType<T>>

    /**
     * Group by DBT_Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_MealsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DBT_MealsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DBT_MealsGroupByArgs['orderBy'] }
        : { orderBy?: DBT_MealsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DBT_MealsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDBT_MealsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DBT_Meals model
   */
  readonly fields: DBT_MealsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DBT_Meals.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DBT_MealsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DBT_Meals model
   */ 
  interface DBT_MealsFieldRefs {
    readonly ID: FieldRef<"DBT_Meals", 'BigInt'>
    readonly Active: FieldRef<"DBT_Meals", 'Boolean'>
    readonly Kitchen: FieldRef<"DBT_Meals", 'Boolean'>
    readonly Available: FieldRef<"DBT_Meals", 'Boolean'>
    readonly Meal: FieldRef<"DBT_Meals", 'String'>
    readonly MealDescription: FieldRef<"DBT_Meals", 'String'>
    readonly Price: FieldRef<"DBT_Meals", 'Decimal'>
    readonly IsCombo: FieldRef<"DBT_Meals", 'Boolean'>
    readonly Picture: FieldRef<"DBT_Meals", 'Bytes'>
    readonly PictureDescription: FieldRef<"DBT_Meals", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DBT_Meals findUnique
   */
  export type DBT_MealsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Meals
     */
    select?: DBT_MealsSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Meals to fetch.
     */
    where: DBT_MealsWhereUniqueInput
  }

  /**
   * DBT_Meals findUniqueOrThrow
   */
  export type DBT_MealsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Meals
     */
    select?: DBT_MealsSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Meals to fetch.
     */
    where: DBT_MealsWhereUniqueInput
  }

  /**
   * DBT_Meals findFirst
   */
  export type DBT_MealsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Meals
     */
    select?: DBT_MealsSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Meals to fetch.
     */
    where?: DBT_MealsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_Meals to fetch.
     */
    orderBy?: DBT_MealsOrderByWithRelationInput | DBT_MealsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DBT_Meals.
     */
    cursor?: DBT_MealsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DBT_Meals.
     */
    distinct?: DBT_MealsScalarFieldEnum | DBT_MealsScalarFieldEnum[]
  }

  /**
   * DBT_Meals findFirstOrThrow
   */
  export type DBT_MealsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Meals
     */
    select?: DBT_MealsSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Meals to fetch.
     */
    where?: DBT_MealsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_Meals to fetch.
     */
    orderBy?: DBT_MealsOrderByWithRelationInput | DBT_MealsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DBT_Meals.
     */
    cursor?: DBT_MealsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DBT_Meals.
     */
    distinct?: DBT_MealsScalarFieldEnum | DBT_MealsScalarFieldEnum[]
  }

  /**
   * DBT_Meals findMany
   */
  export type DBT_MealsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Meals
     */
    select?: DBT_MealsSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Meals to fetch.
     */
    where?: DBT_MealsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_Meals to fetch.
     */
    orderBy?: DBT_MealsOrderByWithRelationInput | DBT_MealsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DBT_Meals.
     */
    cursor?: DBT_MealsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_Meals.
     */
    skip?: number
    distinct?: DBT_MealsScalarFieldEnum | DBT_MealsScalarFieldEnum[]
  }

  /**
   * DBT_Meals create
   */
  export type DBT_MealsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Meals
     */
    select?: DBT_MealsSelect<ExtArgs> | null
    /**
     * The data needed to create a DBT_Meals.
     */
    data?: XOR<DBT_MealsCreateInput, DBT_MealsUncheckedCreateInput>
  }

  /**
   * DBT_Meals createMany
   */
  export type DBT_MealsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DBT_Meals.
     */
    data: DBT_MealsCreateManyInput | DBT_MealsCreateManyInput[]
  }

  /**
   * DBT_Meals update
   */
  export type DBT_MealsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Meals
     */
    select?: DBT_MealsSelect<ExtArgs> | null
    /**
     * The data needed to update a DBT_Meals.
     */
    data: XOR<DBT_MealsUpdateInput, DBT_MealsUncheckedUpdateInput>
    /**
     * Choose, which DBT_Meals to update.
     */
    where: DBT_MealsWhereUniqueInput
  }

  /**
   * DBT_Meals updateMany
   */
  export type DBT_MealsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DBT_Meals.
     */
    data: XOR<DBT_MealsUpdateManyMutationInput, DBT_MealsUncheckedUpdateManyInput>
    /**
     * Filter which DBT_Meals to update
     */
    where?: DBT_MealsWhereInput
  }

  /**
   * DBT_Meals upsert
   */
  export type DBT_MealsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Meals
     */
    select?: DBT_MealsSelect<ExtArgs> | null
    /**
     * The filter to search for the DBT_Meals to update in case it exists.
     */
    where: DBT_MealsWhereUniqueInput
    /**
     * In case the DBT_Meals found by the `where` argument doesn't exist, create a new DBT_Meals with this data.
     */
    create: XOR<DBT_MealsCreateInput, DBT_MealsUncheckedCreateInput>
    /**
     * In case the DBT_Meals was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DBT_MealsUpdateInput, DBT_MealsUncheckedUpdateInput>
  }

  /**
   * DBT_Meals delete
   */
  export type DBT_MealsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Meals
     */
    select?: DBT_MealsSelect<ExtArgs> | null
    /**
     * Filter which DBT_Meals to delete.
     */
    where: DBT_MealsWhereUniqueInput
  }

  /**
   * DBT_Meals deleteMany
   */
  export type DBT_MealsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DBT_Meals to delete
     */
    where?: DBT_MealsWhereInput
  }

  /**
   * DBT_Meals without action
   */
  export type DBT_MealsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Meals
     */
    select?: DBT_MealsSelect<ExtArgs> | null
  }


  /**
   * Model DBT_MenuSetUp
   */

  export type AggregateDBT_MenuSetUp = {
    _count: DBT_MenuSetUpCountAggregateOutputType | null
    _avg: DBT_MenuSetUpAvgAggregateOutputType | null
    _sum: DBT_MenuSetUpSumAggregateOutputType | null
    _min: DBT_MenuSetUpMinAggregateOutputType | null
    _max: DBT_MenuSetUpMaxAggregateOutputType | null
  }

  export type DBT_MenuSetUpAvgAggregateOutputType = {
    ID: number | null
    BackgroundColor: number | null
  }

  export type DBT_MenuSetUpSumAggregateOutputType = {
    ID: bigint | null
    BackgroundColor: bigint | null
  }

  export type DBT_MenuSetUpMinAggregateOutputType = {
    ID: bigint | null
    Active: boolean | null
    LogoImage: Buffer | null
    BackgroundColor: bigint | null
    HeaderText: string | null
    FooterText: string | null
  }

  export type DBT_MenuSetUpMaxAggregateOutputType = {
    ID: bigint | null
    Active: boolean | null
    LogoImage: Buffer | null
    BackgroundColor: bigint | null
    HeaderText: string | null
    FooterText: string | null
  }

  export type DBT_MenuSetUpCountAggregateOutputType = {
    ID: number
    Active: number
    LogoImage: number
    BackgroundColor: number
    HeaderText: number
    FooterText: number
    _all: number
  }


  export type DBT_MenuSetUpAvgAggregateInputType = {
    ID?: true
    BackgroundColor?: true
  }

  export type DBT_MenuSetUpSumAggregateInputType = {
    ID?: true
    BackgroundColor?: true
  }

  export type DBT_MenuSetUpMinAggregateInputType = {
    ID?: true
    Active?: true
    LogoImage?: true
    BackgroundColor?: true
    HeaderText?: true
    FooterText?: true
  }

  export type DBT_MenuSetUpMaxAggregateInputType = {
    ID?: true
    Active?: true
    LogoImage?: true
    BackgroundColor?: true
    HeaderText?: true
    FooterText?: true
  }

  export type DBT_MenuSetUpCountAggregateInputType = {
    ID?: true
    Active?: true
    LogoImage?: true
    BackgroundColor?: true
    HeaderText?: true
    FooterText?: true
    _all?: true
  }

  export type DBT_MenuSetUpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DBT_MenuSetUp to aggregate.
     */
    where?: DBT_MenuSetUpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_MenuSetUps to fetch.
     */
    orderBy?: DBT_MenuSetUpOrderByWithRelationInput | DBT_MenuSetUpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DBT_MenuSetUpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_MenuSetUps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_MenuSetUps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DBT_MenuSetUps
    **/
    _count?: true | DBT_MenuSetUpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DBT_MenuSetUpAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DBT_MenuSetUpSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DBT_MenuSetUpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DBT_MenuSetUpMaxAggregateInputType
  }

  export type GetDBT_MenuSetUpAggregateType<T extends DBT_MenuSetUpAggregateArgs> = {
        [P in keyof T & keyof AggregateDBT_MenuSetUp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDBT_MenuSetUp[P]>
      : GetScalarType<T[P], AggregateDBT_MenuSetUp[P]>
  }




  export type DBT_MenuSetUpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DBT_MenuSetUpWhereInput
    orderBy?: DBT_MenuSetUpOrderByWithAggregationInput | DBT_MenuSetUpOrderByWithAggregationInput[]
    by: DBT_MenuSetUpScalarFieldEnum[] | DBT_MenuSetUpScalarFieldEnum
    having?: DBT_MenuSetUpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DBT_MenuSetUpCountAggregateInputType | true
    _avg?: DBT_MenuSetUpAvgAggregateInputType
    _sum?: DBT_MenuSetUpSumAggregateInputType
    _min?: DBT_MenuSetUpMinAggregateInputType
    _max?: DBT_MenuSetUpMaxAggregateInputType
  }

  export type DBT_MenuSetUpGroupByOutputType = {
    ID: bigint
    Active: boolean
    LogoImage: Buffer | null
    BackgroundColor: bigint | null
    HeaderText: string | null
    FooterText: string | null
    _count: DBT_MenuSetUpCountAggregateOutputType | null
    _avg: DBT_MenuSetUpAvgAggregateOutputType | null
    _sum: DBT_MenuSetUpSumAggregateOutputType | null
    _min: DBT_MenuSetUpMinAggregateOutputType | null
    _max: DBT_MenuSetUpMaxAggregateOutputType | null
  }

  type GetDBT_MenuSetUpGroupByPayload<T extends DBT_MenuSetUpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DBT_MenuSetUpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DBT_MenuSetUpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DBT_MenuSetUpGroupByOutputType[P]>
            : GetScalarType<T[P], DBT_MenuSetUpGroupByOutputType[P]>
        }
      >
    >


  export type DBT_MenuSetUpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    Active?: boolean
    LogoImage?: boolean
    BackgroundColor?: boolean
    HeaderText?: boolean
    FooterText?: boolean
  }, ExtArgs["result"]["dBT_MenuSetUp"]>

  export type DBT_MenuSetUpSelectScalar = {
    ID?: boolean
    Active?: boolean
    LogoImage?: boolean
    BackgroundColor?: boolean
    HeaderText?: boolean
    FooterText?: boolean
  }



  export type $DBT_MenuSetUpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DBT_MenuSetUp"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: bigint
      Active: boolean
      LogoImage: Buffer | null
      BackgroundColor: bigint | null
      HeaderText: string | null
      FooterText: string | null
    }, ExtArgs["result"]["dBT_MenuSetUp"]>
    composites: {}
  }


  type DBT_MenuSetUpGetPayload<S extends boolean | null | undefined | DBT_MenuSetUpDefaultArgs> = $Result.GetResult<Prisma.$DBT_MenuSetUpPayload, S>

  type DBT_MenuSetUpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DBT_MenuSetUpFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DBT_MenuSetUpCountAggregateInputType | true
    }

  export interface DBT_MenuSetUpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DBT_MenuSetUp'], meta: { name: 'DBT_MenuSetUp' } }
    /**
     * Find zero or one DBT_MenuSetUp that matches the filter.
     * @param {DBT_MenuSetUpFindUniqueArgs} args - Arguments to find a DBT_MenuSetUp
     * @example
     * // Get one DBT_MenuSetUp
     * const dBT_MenuSetUp = await prisma.dBT_MenuSetUp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DBT_MenuSetUpFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_MenuSetUpFindUniqueArgs<ExtArgs>>
    ): Prisma__DBT_MenuSetUpClient<$Result.GetResult<Prisma.$DBT_MenuSetUpPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DBT_MenuSetUp that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DBT_MenuSetUpFindUniqueOrThrowArgs} args - Arguments to find a DBT_MenuSetUp
     * @example
     * // Get one DBT_MenuSetUp
     * const dBT_MenuSetUp = await prisma.dBT_MenuSetUp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DBT_MenuSetUpFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_MenuSetUpFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DBT_MenuSetUpClient<$Result.GetResult<Prisma.$DBT_MenuSetUpPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DBT_MenuSetUp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_MenuSetUpFindFirstArgs} args - Arguments to find a DBT_MenuSetUp
     * @example
     * // Get one DBT_MenuSetUp
     * const dBT_MenuSetUp = await prisma.dBT_MenuSetUp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DBT_MenuSetUpFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_MenuSetUpFindFirstArgs<ExtArgs>>
    ): Prisma__DBT_MenuSetUpClient<$Result.GetResult<Prisma.$DBT_MenuSetUpPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DBT_MenuSetUp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_MenuSetUpFindFirstOrThrowArgs} args - Arguments to find a DBT_MenuSetUp
     * @example
     * // Get one DBT_MenuSetUp
     * const dBT_MenuSetUp = await prisma.dBT_MenuSetUp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DBT_MenuSetUpFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_MenuSetUpFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DBT_MenuSetUpClient<$Result.GetResult<Prisma.$DBT_MenuSetUpPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DBT_MenuSetUps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_MenuSetUpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DBT_MenuSetUps
     * const dBT_MenuSetUps = await prisma.dBT_MenuSetUp.findMany()
     * 
     * // Get first 10 DBT_MenuSetUps
     * const dBT_MenuSetUps = await prisma.dBT_MenuSetUp.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const dBT_MenuSetUpWithIDOnly = await prisma.dBT_MenuSetUp.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends DBT_MenuSetUpFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_MenuSetUpFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DBT_MenuSetUpPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DBT_MenuSetUp.
     * @param {DBT_MenuSetUpCreateArgs} args - Arguments to create a DBT_MenuSetUp.
     * @example
     * // Create one DBT_MenuSetUp
     * const DBT_MenuSetUp = await prisma.dBT_MenuSetUp.create({
     *   data: {
     *     // ... data to create a DBT_MenuSetUp
     *   }
     * })
     * 
    **/
    create<T extends DBT_MenuSetUpCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_MenuSetUpCreateArgs<ExtArgs>>
    ): Prisma__DBT_MenuSetUpClient<$Result.GetResult<Prisma.$DBT_MenuSetUpPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DBT_MenuSetUps.
     * @param {DBT_MenuSetUpCreateManyArgs} args - Arguments to create many DBT_MenuSetUps.
     * @example
     * // Create many DBT_MenuSetUps
     * const dBT_MenuSetUp = await prisma.dBT_MenuSetUp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends DBT_MenuSetUpCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_MenuSetUpCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DBT_MenuSetUp.
     * @param {DBT_MenuSetUpDeleteArgs} args - Arguments to delete one DBT_MenuSetUp.
     * @example
     * // Delete one DBT_MenuSetUp
     * const DBT_MenuSetUp = await prisma.dBT_MenuSetUp.delete({
     *   where: {
     *     // ... filter to delete one DBT_MenuSetUp
     *   }
     * })
     * 
    **/
    delete<T extends DBT_MenuSetUpDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_MenuSetUpDeleteArgs<ExtArgs>>
    ): Prisma__DBT_MenuSetUpClient<$Result.GetResult<Prisma.$DBT_MenuSetUpPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DBT_MenuSetUp.
     * @param {DBT_MenuSetUpUpdateArgs} args - Arguments to update one DBT_MenuSetUp.
     * @example
     * // Update one DBT_MenuSetUp
     * const dBT_MenuSetUp = await prisma.dBT_MenuSetUp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DBT_MenuSetUpUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_MenuSetUpUpdateArgs<ExtArgs>>
    ): Prisma__DBT_MenuSetUpClient<$Result.GetResult<Prisma.$DBT_MenuSetUpPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DBT_MenuSetUps.
     * @param {DBT_MenuSetUpDeleteManyArgs} args - Arguments to filter DBT_MenuSetUps to delete.
     * @example
     * // Delete a few DBT_MenuSetUps
     * const { count } = await prisma.dBT_MenuSetUp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DBT_MenuSetUpDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_MenuSetUpDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DBT_MenuSetUps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_MenuSetUpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DBT_MenuSetUps
     * const dBT_MenuSetUp = await prisma.dBT_MenuSetUp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DBT_MenuSetUpUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_MenuSetUpUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DBT_MenuSetUp.
     * @param {DBT_MenuSetUpUpsertArgs} args - Arguments to update or create a DBT_MenuSetUp.
     * @example
     * // Update or create a DBT_MenuSetUp
     * const dBT_MenuSetUp = await prisma.dBT_MenuSetUp.upsert({
     *   create: {
     *     // ... data to create a DBT_MenuSetUp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DBT_MenuSetUp we want to update
     *   }
     * })
    **/
    upsert<T extends DBT_MenuSetUpUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_MenuSetUpUpsertArgs<ExtArgs>>
    ): Prisma__DBT_MenuSetUpClient<$Result.GetResult<Prisma.$DBT_MenuSetUpPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DBT_MenuSetUps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_MenuSetUpCountArgs} args - Arguments to filter DBT_MenuSetUps to count.
     * @example
     * // Count the number of DBT_MenuSetUps
     * const count = await prisma.dBT_MenuSetUp.count({
     *   where: {
     *     // ... the filter for the DBT_MenuSetUps we want to count
     *   }
     * })
    **/
    count<T extends DBT_MenuSetUpCountArgs>(
      args?: Subset<T, DBT_MenuSetUpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DBT_MenuSetUpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DBT_MenuSetUp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_MenuSetUpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DBT_MenuSetUpAggregateArgs>(args: Subset<T, DBT_MenuSetUpAggregateArgs>): Prisma.PrismaPromise<GetDBT_MenuSetUpAggregateType<T>>

    /**
     * Group by DBT_MenuSetUp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_MenuSetUpGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DBT_MenuSetUpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DBT_MenuSetUpGroupByArgs['orderBy'] }
        : { orderBy?: DBT_MenuSetUpGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DBT_MenuSetUpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDBT_MenuSetUpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DBT_MenuSetUp model
   */
  readonly fields: DBT_MenuSetUpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DBT_MenuSetUp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DBT_MenuSetUpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DBT_MenuSetUp model
   */ 
  interface DBT_MenuSetUpFieldRefs {
    readonly ID: FieldRef<"DBT_MenuSetUp", 'BigInt'>
    readonly Active: FieldRef<"DBT_MenuSetUp", 'Boolean'>
    readonly LogoImage: FieldRef<"DBT_MenuSetUp", 'Bytes'>
    readonly BackgroundColor: FieldRef<"DBT_MenuSetUp", 'BigInt'>
    readonly HeaderText: FieldRef<"DBT_MenuSetUp", 'String'>
    readonly FooterText: FieldRef<"DBT_MenuSetUp", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DBT_MenuSetUp findUnique
   */
  export type DBT_MenuSetUpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_MenuSetUp
     */
    select?: DBT_MenuSetUpSelect<ExtArgs> | null
    /**
     * Filter, which DBT_MenuSetUp to fetch.
     */
    where: DBT_MenuSetUpWhereUniqueInput
  }

  /**
   * DBT_MenuSetUp findUniqueOrThrow
   */
  export type DBT_MenuSetUpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_MenuSetUp
     */
    select?: DBT_MenuSetUpSelect<ExtArgs> | null
    /**
     * Filter, which DBT_MenuSetUp to fetch.
     */
    where: DBT_MenuSetUpWhereUniqueInput
  }

  /**
   * DBT_MenuSetUp findFirst
   */
  export type DBT_MenuSetUpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_MenuSetUp
     */
    select?: DBT_MenuSetUpSelect<ExtArgs> | null
    /**
     * Filter, which DBT_MenuSetUp to fetch.
     */
    where?: DBT_MenuSetUpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_MenuSetUps to fetch.
     */
    orderBy?: DBT_MenuSetUpOrderByWithRelationInput | DBT_MenuSetUpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DBT_MenuSetUps.
     */
    cursor?: DBT_MenuSetUpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_MenuSetUps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_MenuSetUps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DBT_MenuSetUps.
     */
    distinct?: DBT_MenuSetUpScalarFieldEnum | DBT_MenuSetUpScalarFieldEnum[]
  }

  /**
   * DBT_MenuSetUp findFirstOrThrow
   */
  export type DBT_MenuSetUpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_MenuSetUp
     */
    select?: DBT_MenuSetUpSelect<ExtArgs> | null
    /**
     * Filter, which DBT_MenuSetUp to fetch.
     */
    where?: DBT_MenuSetUpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_MenuSetUps to fetch.
     */
    orderBy?: DBT_MenuSetUpOrderByWithRelationInput | DBT_MenuSetUpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DBT_MenuSetUps.
     */
    cursor?: DBT_MenuSetUpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_MenuSetUps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_MenuSetUps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DBT_MenuSetUps.
     */
    distinct?: DBT_MenuSetUpScalarFieldEnum | DBT_MenuSetUpScalarFieldEnum[]
  }

  /**
   * DBT_MenuSetUp findMany
   */
  export type DBT_MenuSetUpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_MenuSetUp
     */
    select?: DBT_MenuSetUpSelect<ExtArgs> | null
    /**
     * Filter, which DBT_MenuSetUps to fetch.
     */
    where?: DBT_MenuSetUpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_MenuSetUps to fetch.
     */
    orderBy?: DBT_MenuSetUpOrderByWithRelationInput | DBT_MenuSetUpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DBT_MenuSetUps.
     */
    cursor?: DBT_MenuSetUpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_MenuSetUps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_MenuSetUps.
     */
    skip?: number
    distinct?: DBT_MenuSetUpScalarFieldEnum | DBT_MenuSetUpScalarFieldEnum[]
  }

  /**
   * DBT_MenuSetUp create
   */
  export type DBT_MenuSetUpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_MenuSetUp
     */
    select?: DBT_MenuSetUpSelect<ExtArgs> | null
    /**
     * The data needed to create a DBT_MenuSetUp.
     */
    data?: XOR<DBT_MenuSetUpCreateInput, DBT_MenuSetUpUncheckedCreateInput>
  }

  /**
   * DBT_MenuSetUp createMany
   */
  export type DBT_MenuSetUpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DBT_MenuSetUps.
     */
    data: DBT_MenuSetUpCreateManyInput | DBT_MenuSetUpCreateManyInput[]
  }

  /**
   * DBT_MenuSetUp update
   */
  export type DBT_MenuSetUpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_MenuSetUp
     */
    select?: DBT_MenuSetUpSelect<ExtArgs> | null
    /**
     * The data needed to update a DBT_MenuSetUp.
     */
    data: XOR<DBT_MenuSetUpUpdateInput, DBT_MenuSetUpUncheckedUpdateInput>
    /**
     * Choose, which DBT_MenuSetUp to update.
     */
    where: DBT_MenuSetUpWhereUniqueInput
  }

  /**
   * DBT_MenuSetUp updateMany
   */
  export type DBT_MenuSetUpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DBT_MenuSetUps.
     */
    data: XOR<DBT_MenuSetUpUpdateManyMutationInput, DBT_MenuSetUpUncheckedUpdateManyInput>
    /**
     * Filter which DBT_MenuSetUps to update
     */
    where?: DBT_MenuSetUpWhereInput
  }

  /**
   * DBT_MenuSetUp upsert
   */
  export type DBT_MenuSetUpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_MenuSetUp
     */
    select?: DBT_MenuSetUpSelect<ExtArgs> | null
    /**
     * The filter to search for the DBT_MenuSetUp to update in case it exists.
     */
    where: DBT_MenuSetUpWhereUniqueInput
    /**
     * In case the DBT_MenuSetUp found by the `where` argument doesn't exist, create a new DBT_MenuSetUp with this data.
     */
    create: XOR<DBT_MenuSetUpCreateInput, DBT_MenuSetUpUncheckedCreateInput>
    /**
     * In case the DBT_MenuSetUp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DBT_MenuSetUpUpdateInput, DBT_MenuSetUpUncheckedUpdateInput>
  }

  /**
   * DBT_MenuSetUp delete
   */
  export type DBT_MenuSetUpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_MenuSetUp
     */
    select?: DBT_MenuSetUpSelect<ExtArgs> | null
    /**
     * Filter which DBT_MenuSetUp to delete.
     */
    where: DBT_MenuSetUpWhereUniqueInput
  }

  /**
   * DBT_MenuSetUp deleteMany
   */
  export type DBT_MenuSetUpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DBT_MenuSetUps to delete
     */
    where?: DBT_MenuSetUpWhereInput
  }

  /**
   * DBT_MenuSetUp without action
   */
  export type DBT_MenuSetUpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_MenuSetUp
     */
    select?: DBT_MenuSetUpSelect<ExtArgs> | null
  }


  /**
   * Model DBT_OrderItems
   */

  export type AggregateDBT_OrderItems = {
    _count: DBT_OrderItemsCountAggregateOutputType | null
    _avg: DBT_OrderItemsAvgAggregateOutputType | null
    _sum: DBT_OrderItemsSumAggregateOutputType | null
    _min: DBT_OrderItemsMinAggregateOutputType | null
    _max: DBT_OrderItemsMaxAggregateOutputType | null
  }

  export type DBT_OrderItemsAvgAggregateOutputType = {
    ID: number | null
    ID_Meal: number | null
    ID_Variant: number | null
    Price: Decimal | null
    ID_User: number | null
  }

  export type DBT_OrderItemsSumAggregateOutputType = {
    ID: bigint | null
    ID_Meal: bigint | null
    ID_Variant: bigint | null
    Price: Decimal | null
    ID_User: bigint | null
  }

  export type DBT_OrderItemsMinAggregateOutputType = {
    ID: bigint | null
    ID_Order: string | null
    Canceled: boolean | null
    ID_Meal: bigint | null
    ID_Variant: bigint | null
    Price: Decimal | null
    TimeOfOrder: Date | null
    ID_User: bigint | null
    Time_Prepared: Date | null
    Time_Delivered: Date | null
  }

  export type DBT_OrderItemsMaxAggregateOutputType = {
    ID: bigint | null
    ID_Order: string | null
    Canceled: boolean | null
    ID_Meal: bigint | null
    ID_Variant: bigint | null
    Price: Decimal | null
    TimeOfOrder: Date | null
    ID_User: bigint | null
    Time_Prepared: Date | null
    Time_Delivered: Date | null
  }

  export type DBT_OrderItemsCountAggregateOutputType = {
    ID: number
    ID_Order: number
    Canceled: number
    ID_Meal: number
    ID_Variant: number
    Price: number
    TimeOfOrder: number
    ID_User: number
    Time_Prepared: number
    Time_Delivered: number
    _all: number
  }


  export type DBT_OrderItemsAvgAggregateInputType = {
    ID?: true
    ID_Meal?: true
    ID_Variant?: true
    Price?: true
    ID_User?: true
  }

  export type DBT_OrderItemsSumAggregateInputType = {
    ID?: true
    ID_Meal?: true
    ID_Variant?: true
    Price?: true
    ID_User?: true
  }

  export type DBT_OrderItemsMinAggregateInputType = {
    ID?: true
    ID_Order?: true
    Canceled?: true
    ID_Meal?: true
    ID_Variant?: true
    Price?: true
    TimeOfOrder?: true
    ID_User?: true
    Time_Prepared?: true
    Time_Delivered?: true
  }

  export type DBT_OrderItemsMaxAggregateInputType = {
    ID?: true
    ID_Order?: true
    Canceled?: true
    ID_Meal?: true
    ID_Variant?: true
    Price?: true
    TimeOfOrder?: true
    ID_User?: true
    Time_Prepared?: true
    Time_Delivered?: true
  }

  export type DBT_OrderItemsCountAggregateInputType = {
    ID?: true
    ID_Order?: true
    Canceled?: true
    ID_Meal?: true
    ID_Variant?: true
    Price?: true
    TimeOfOrder?: true
    ID_User?: true
    Time_Prepared?: true
    Time_Delivered?: true
    _all?: true
  }

  export type DBT_OrderItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DBT_OrderItems to aggregate.
     */
    where?: DBT_OrderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_OrderItems to fetch.
     */
    orderBy?: DBT_OrderItemsOrderByWithRelationInput | DBT_OrderItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DBT_OrderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DBT_OrderItems
    **/
    _count?: true | DBT_OrderItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DBT_OrderItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DBT_OrderItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DBT_OrderItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DBT_OrderItemsMaxAggregateInputType
  }

  export type GetDBT_OrderItemsAggregateType<T extends DBT_OrderItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateDBT_OrderItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDBT_OrderItems[P]>
      : GetScalarType<T[P], AggregateDBT_OrderItems[P]>
  }




  export type DBT_OrderItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DBT_OrderItemsWhereInput
    orderBy?: DBT_OrderItemsOrderByWithAggregationInput | DBT_OrderItemsOrderByWithAggregationInput[]
    by: DBT_OrderItemsScalarFieldEnum[] | DBT_OrderItemsScalarFieldEnum
    having?: DBT_OrderItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DBT_OrderItemsCountAggregateInputType | true
    _avg?: DBT_OrderItemsAvgAggregateInputType
    _sum?: DBT_OrderItemsSumAggregateInputType
    _min?: DBT_OrderItemsMinAggregateInputType
    _max?: DBT_OrderItemsMaxAggregateInputType
  }

  export type DBT_OrderItemsGroupByOutputType = {
    ID: bigint
    ID_Order: string | null
    Canceled: boolean | null
    ID_Meal: bigint | null
    ID_Variant: bigint | null
    Price: Decimal | null
    TimeOfOrder: Date | null
    ID_User: bigint | null
    Time_Prepared: Date | null
    Time_Delivered: Date | null
    _count: DBT_OrderItemsCountAggregateOutputType | null
    _avg: DBT_OrderItemsAvgAggregateOutputType | null
    _sum: DBT_OrderItemsSumAggregateOutputType | null
    _min: DBT_OrderItemsMinAggregateOutputType | null
    _max: DBT_OrderItemsMaxAggregateOutputType | null
  }

  type GetDBT_OrderItemsGroupByPayload<T extends DBT_OrderItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DBT_OrderItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DBT_OrderItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DBT_OrderItemsGroupByOutputType[P]>
            : GetScalarType<T[P], DBT_OrderItemsGroupByOutputType[P]>
        }
      >
    >


  export type DBT_OrderItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    ID_Order?: boolean
    Canceled?: boolean
    ID_Meal?: boolean
    ID_Variant?: boolean
    Price?: boolean
    TimeOfOrder?: boolean
    ID_User?: boolean
    Time_Prepared?: boolean
    Time_Delivered?: boolean
  }, ExtArgs["result"]["dBT_OrderItems"]>

  export type DBT_OrderItemsSelectScalar = {
    ID?: boolean
    ID_Order?: boolean
    Canceled?: boolean
    ID_Meal?: boolean
    ID_Variant?: boolean
    Price?: boolean
    TimeOfOrder?: boolean
    ID_User?: boolean
    Time_Prepared?: boolean
    Time_Delivered?: boolean
  }



  export type $DBT_OrderItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DBT_OrderItems"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: bigint
      ID_Order: string | null
      Canceled: boolean | null
      ID_Meal: bigint | null
      ID_Variant: bigint | null
      Price: Prisma.Decimal | null
      TimeOfOrder: Date | null
      ID_User: bigint | null
      Time_Prepared: Date | null
      Time_Delivered: Date | null
    }, ExtArgs["result"]["dBT_OrderItems"]>
    composites: {}
  }


  type DBT_OrderItemsGetPayload<S extends boolean | null | undefined | DBT_OrderItemsDefaultArgs> = $Result.GetResult<Prisma.$DBT_OrderItemsPayload, S>

  type DBT_OrderItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DBT_OrderItemsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DBT_OrderItemsCountAggregateInputType | true
    }

  export interface DBT_OrderItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DBT_OrderItems'], meta: { name: 'DBT_OrderItems' } }
    /**
     * Find zero or one DBT_OrderItems that matches the filter.
     * @param {DBT_OrderItemsFindUniqueArgs} args - Arguments to find a DBT_OrderItems
     * @example
     * // Get one DBT_OrderItems
     * const dBT_OrderItems = await prisma.dBT_OrderItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DBT_OrderItemsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_OrderItemsFindUniqueArgs<ExtArgs>>
    ): Prisma__DBT_OrderItemsClient<$Result.GetResult<Prisma.$DBT_OrderItemsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DBT_OrderItems that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DBT_OrderItemsFindUniqueOrThrowArgs} args - Arguments to find a DBT_OrderItems
     * @example
     * // Get one DBT_OrderItems
     * const dBT_OrderItems = await prisma.dBT_OrderItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DBT_OrderItemsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_OrderItemsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DBT_OrderItemsClient<$Result.GetResult<Prisma.$DBT_OrderItemsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DBT_OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_OrderItemsFindFirstArgs} args - Arguments to find a DBT_OrderItems
     * @example
     * // Get one DBT_OrderItems
     * const dBT_OrderItems = await prisma.dBT_OrderItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DBT_OrderItemsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_OrderItemsFindFirstArgs<ExtArgs>>
    ): Prisma__DBT_OrderItemsClient<$Result.GetResult<Prisma.$DBT_OrderItemsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DBT_OrderItems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_OrderItemsFindFirstOrThrowArgs} args - Arguments to find a DBT_OrderItems
     * @example
     * // Get one DBT_OrderItems
     * const dBT_OrderItems = await prisma.dBT_OrderItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DBT_OrderItemsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_OrderItemsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DBT_OrderItemsClient<$Result.GetResult<Prisma.$DBT_OrderItemsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DBT_OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_OrderItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DBT_OrderItems
     * const dBT_OrderItems = await prisma.dBT_OrderItems.findMany()
     * 
     * // Get first 10 DBT_OrderItems
     * const dBT_OrderItems = await prisma.dBT_OrderItems.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const dBT_OrderItemsWithIDOnly = await prisma.dBT_OrderItems.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends DBT_OrderItemsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_OrderItemsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DBT_OrderItemsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DBT_OrderItems.
     * @param {DBT_OrderItemsCreateArgs} args - Arguments to create a DBT_OrderItems.
     * @example
     * // Create one DBT_OrderItems
     * const DBT_OrderItems = await prisma.dBT_OrderItems.create({
     *   data: {
     *     // ... data to create a DBT_OrderItems
     *   }
     * })
     * 
    **/
    create<T extends DBT_OrderItemsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_OrderItemsCreateArgs<ExtArgs>>
    ): Prisma__DBT_OrderItemsClient<$Result.GetResult<Prisma.$DBT_OrderItemsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DBT_OrderItems.
     * @param {DBT_OrderItemsCreateManyArgs} args - Arguments to create many DBT_OrderItems.
     * @example
     * // Create many DBT_OrderItems
     * const dBT_OrderItems = await prisma.dBT_OrderItems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends DBT_OrderItemsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_OrderItemsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DBT_OrderItems.
     * @param {DBT_OrderItemsDeleteArgs} args - Arguments to delete one DBT_OrderItems.
     * @example
     * // Delete one DBT_OrderItems
     * const DBT_OrderItems = await prisma.dBT_OrderItems.delete({
     *   where: {
     *     // ... filter to delete one DBT_OrderItems
     *   }
     * })
     * 
    **/
    delete<T extends DBT_OrderItemsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_OrderItemsDeleteArgs<ExtArgs>>
    ): Prisma__DBT_OrderItemsClient<$Result.GetResult<Prisma.$DBT_OrderItemsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DBT_OrderItems.
     * @param {DBT_OrderItemsUpdateArgs} args - Arguments to update one DBT_OrderItems.
     * @example
     * // Update one DBT_OrderItems
     * const dBT_OrderItems = await prisma.dBT_OrderItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DBT_OrderItemsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_OrderItemsUpdateArgs<ExtArgs>>
    ): Prisma__DBT_OrderItemsClient<$Result.GetResult<Prisma.$DBT_OrderItemsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DBT_OrderItems.
     * @param {DBT_OrderItemsDeleteManyArgs} args - Arguments to filter DBT_OrderItems to delete.
     * @example
     * // Delete a few DBT_OrderItems
     * const { count } = await prisma.dBT_OrderItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DBT_OrderItemsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_OrderItemsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DBT_OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_OrderItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DBT_OrderItems
     * const dBT_OrderItems = await prisma.dBT_OrderItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DBT_OrderItemsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_OrderItemsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DBT_OrderItems.
     * @param {DBT_OrderItemsUpsertArgs} args - Arguments to update or create a DBT_OrderItems.
     * @example
     * // Update or create a DBT_OrderItems
     * const dBT_OrderItems = await prisma.dBT_OrderItems.upsert({
     *   create: {
     *     // ... data to create a DBT_OrderItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DBT_OrderItems we want to update
     *   }
     * })
    **/
    upsert<T extends DBT_OrderItemsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_OrderItemsUpsertArgs<ExtArgs>>
    ): Prisma__DBT_OrderItemsClient<$Result.GetResult<Prisma.$DBT_OrderItemsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DBT_OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_OrderItemsCountArgs} args - Arguments to filter DBT_OrderItems to count.
     * @example
     * // Count the number of DBT_OrderItems
     * const count = await prisma.dBT_OrderItems.count({
     *   where: {
     *     // ... the filter for the DBT_OrderItems we want to count
     *   }
     * })
    **/
    count<T extends DBT_OrderItemsCountArgs>(
      args?: Subset<T, DBT_OrderItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DBT_OrderItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DBT_OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_OrderItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DBT_OrderItemsAggregateArgs>(args: Subset<T, DBT_OrderItemsAggregateArgs>): Prisma.PrismaPromise<GetDBT_OrderItemsAggregateType<T>>

    /**
     * Group by DBT_OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_OrderItemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DBT_OrderItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DBT_OrderItemsGroupByArgs['orderBy'] }
        : { orderBy?: DBT_OrderItemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DBT_OrderItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDBT_OrderItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DBT_OrderItems model
   */
  readonly fields: DBT_OrderItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DBT_OrderItems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DBT_OrderItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DBT_OrderItems model
   */ 
  interface DBT_OrderItemsFieldRefs {
    readonly ID: FieldRef<"DBT_OrderItems", 'BigInt'>
    readonly ID_Order: FieldRef<"DBT_OrderItems", 'String'>
    readonly Canceled: FieldRef<"DBT_OrderItems", 'Boolean'>
    readonly ID_Meal: FieldRef<"DBT_OrderItems", 'BigInt'>
    readonly ID_Variant: FieldRef<"DBT_OrderItems", 'BigInt'>
    readonly Price: FieldRef<"DBT_OrderItems", 'Decimal'>
    readonly TimeOfOrder: FieldRef<"DBT_OrderItems", 'DateTime'>
    readonly ID_User: FieldRef<"DBT_OrderItems", 'BigInt'>
    readonly Time_Prepared: FieldRef<"DBT_OrderItems", 'DateTime'>
    readonly Time_Delivered: FieldRef<"DBT_OrderItems", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DBT_OrderItems findUnique
   */
  export type DBT_OrderItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_OrderItems
     */
    select?: DBT_OrderItemsSelect<ExtArgs> | null
    /**
     * Filter, which DBT_OrderItems to fetch.
     */
    where: DBT_OrderItemsWhereUniqueInput
  }

  /**
   * DBT_OrderItems findUniqueOrThrow
   */
  export type DBT_OrderItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_OrderItems
     */
    select?: DBT_OrderItemsSelect<ExtArgs> | null
    /**
     * Filter, which DBT_OrderItems to fetch.
     */
    where: DBT_OrderItemsWhereUniqueInput
  }

  /**
   * DBT_OrderItems findFirst
   */
  export type DBT_OrderItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_OrderItems
     */
    select?: DBT_OrderItemsSelect<ExtArgs> | null
    /**
     * Filter, which DBT_OrderItems to fetch.
     */
    where?: DBT_OrderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_OrderItems to fetch.
     */
    orderBy?: DBT_OrderItemsOrderByWithRelationInput | DBT_OrderItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DBT_OrderItems.
     */
    cursor?: DBT_OrderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DBT_OrderItems.
     */
    distinct?: DBT_OrderItemsScalarFieldEnum | DBT_OrderItemsScalarFieldEnum[]
  }

  /**
   * DBT_OrderItems findFirstOrThrow
   */
  export type DBT_OrderItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_OrderItems
     */
    select?: DBT_OrderItemsSelect<ExtArgs> | null
    /**
     * Filter, which DBT_OrderItems to fetch.
     */
    where?: DBT_OrderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_OrderItems to fetch.
     */
    orderBy?: DBT_OrderItemsOrderByWithRelationInput | DBT_OrderItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DBT_OrderItems.
     */
    cursor?: DBT_OrderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DBT_OrderItems.
     */
    distinct?: DBT_OrderItemsScalarFieldEnum | DBT_OrderItemsScalarFieldEnum[]
  }

  /**
   * DBT_OrderItems findMany
   */
  export type DBT_OrderItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_OrderItems
     */
    select?: DBT_OrderItemsSelect<ExtArgs> | null
    /**
     * Filter, which DBT_OrderItems to fetch.
     */
    where?: DBT_OrderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_OrderItems to fetch.
     */
    orderBy?: DBT_OrderItemsOrderByWithRelationInput | DBT_OrderItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DBT_OrderItems.
     */
    cursor?: DBT_OrderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_OrderItems.
     */
    skip?: number
    distinct?: DBT_OrderItemsScalarFieldEnum | DBT_OrderItemsScalarFieldEnum[]
  }

  /**
   * DBT_OrderItems create
   */
  export type DBT_OrderItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_OrderItems
     */
    select?: DBT_OrderItemsSelect<ExtArgs> | null
    /**
     * The data needed to create a DBT_OrderItems.
     */
    data?: XOR<DBT_OrderItemsCreateInput, DBT_OrderItemsUncheckedCreateInput>
  }

  /**
   * DBT_OrderItems createMany
   */
  export type DBT_OrderItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DBT_OrderItems.
     */
    data: DBT_OrderItemsCreateManyInput | DBT_OrderItemsCreateManyInput[]
  }

  /**
   * DBT_OrderItems update
   */
  export type DBT_OrderItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_OrderItems
     */
    select?: DBT_OrderItemsSelect<ExtArgs> | null
    /**
     * The data needed to update a DBT_OrderItems.
     */
    data: XOR<DBT_OrderItemsUpdateInput, DBT_OrderItemsUncheckedUpdateInput>
    /**
     * Choose, which DBT_OrderItems to update.
     */
    where: DBT_OrderItemsWhereUniqueInput
  }

  /**
   * DBT_OrderItems updateMany
   */
  export type DBT_OrderItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DBT_OrderItems.
     */
    data: XOR<DBT_OrderItemsUpdateManyMutationInput, DBT_OrderItemsUncheckedUpdateManyInput>
    /**
     * Filter which DBT_OrderItems to update
     */
    where?: DBT_OrderItemsWhereInput
  }

  /**
   * DBT_OrderItems upsert
   */
  export type DBT_OrderItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_OrderItems
     */
    select?: DBT_OrderItemsSelect<ExtArgs> | null
    /**
     * The filter to search for the DBT_OrderItems to update in case it exists.
     */
    where: DBT_OrderItemsWhereUniqueInput
    /**
     * In case the DBT_OrderItems found by the `where` argument doesn't exist, create a new DBT_OrderItems with this data.
     */
    create: XOR<DBT_OrderItemsCreateInput, DBT_OrderItemsUncheckedCreateInput>
    /**
     * In case the DBT_OrderItems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DBT_OrderItemsUpdateInput, DBT_OrderItemsUncheckedUpdateInput>
  }

  /**
   * DBT_OrderItems delete
   */
  export type DBT_OrderItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_OrderItems
     */
    select?: DBT_OrderItemsSelect<ExtArgs> | null
    /**
     * Filter which DBT_OrderItems to delete.
     */
    where: DBT_OrderItemsWhereUniqueInput
  }

  /**
   * DBT_OrderItems deleteMany
   */
  export type DBT_OrderItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DBT_OrderItems to delete
     */
    where?: DBT_OrderItemsWhereInput
  }

  /**
   * DBT_OrderItems without action
   */
  export type DBT_OrderItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_OrderItems
     */
    select?: DBT_OrderItemsSelect<ExtArgs> | null
  }


  /**
   * Model DBT_Orders
   */

  export type AggregateDBT_Orders = {
    _count: DBT_OrdersCountAggregateOutputType | null
    _avg: DBT_OrdersAvgAggregateOutputType | null
    _sum: DBT_OrdersSumAggregateOutputType | null
    _min: DBT_OrdersMinAggregateOutputType | null
    _max: DBT_OrdersMaxAggregateOutputType | null
  }

  export type DBT_OrdersAvgAggregateOutputType = {
    ID: number | null
    ID_Table: number | null
    ID_Customer: number | null
    Price: Decimal | null
  }

  export type DBT_OrdersSumAggregateOutputType = {
    ID: bigint | null
    ID_Table: bigint | null
    ID_Customer: bigint | null
    Price: Decimal | null
  }

  export type DBT_OrdersMinAggregateOutputType = {
    ID: bigint | null
    ID_Table: bigint | null
    OrderName: string | null
    ID_Customer: bigint | null
    DateTime: Date | null
    Canceled: boolean | null
    Price: Decimal | null
    OrderClosed: boolean | null
  }

  export type DBT_OrdersMaxAggregateOutputType = {
    ID: bigint | null
    ID_Table: bigint | null
    OrderName: string | null
    ID_Customer: bigint | null
    DateTime: Date | null
    Canceled: boolean | null
    Price: Decimal | null
    OrderClosed: boolean | null
  }

  export type DBT_OrdersCountAggregateOutputType = {
    ID: number
    ID_Table: number
    OrderName: number
    ID_Customer: number
    DateTime: number
    Canceled: number
    Price: number
    OrderClosed: number
    _all: number
  }


  export type DBT_OrdersAvgAggregateInputType = {
    ID?: true
    ID_Table?: true
    ID_Customer?: true
    Price?: true
  }

  export type DBT_OrdersSumAggregateInputType = {
    ID?: true
    ID_Table?: true
    ID_Customer?: true
    Price?: true
  }

  export type DBT_OrdersMinAggregateInputType = {
    ID?: true
    ID_Table?: true
    OrderName?: true
    ID_Customer?: true
    DateTime?: true
    Canceled?: true
    Price?: true
    OrderClosed?: true
  }

  export type DBT_OrdersMaxAggregateInputType = {
    ID?: true
    ID_Table?: true
    OrderName?: true
    ID_Customer?: true
    DateTime?: true
    Canceled?: true
    Price?: true
    OrderClosed?: true
  }

  export type DBT_OrdersCountAggregateInputType = {
    ID?: true
    ID_Table?: true
    OrderName?: true
    ID_Customer?: true
    DateTime?: true
    Canceled?: true
    Price?: true
    OrderClosed?: true
    _all?: true
  }

  export type DBT_OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DBT_Orders to aggregate.
     */
    where?: DBT_OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_Orders to fetch.
     */
    orderBy?: DBT_OrdersOrderByWithRelationInput | DBT_OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DBT_OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DBT_Orders
    **/
    _count?: true | DBT_OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DBT_OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DBT_OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DBT_OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DBT_OrdersMaxAggregateInputType
  }

  export type GetDBT_OrdersAggregateType<T extends DBT_OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateDBT_Orders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDBT_Orders[P]>
      : GetScalarType<T[P], AggregateDBT_Orders[P]>
  }




  export type DBT_OrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DBT_OrdersWhereInput
    orderBy?: DBT_OrdersOrderByWithAggregationInput | DBT_OrdersOrderByWithAggregationInput[]
    by: DBT_OrdersScalarFieldEnum[] | DBT_OrdersScalarFieldEnum
    having?: DBT_OrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DBT_OrdersCountAggregateInputType | true
    _avg?: DBT_OrdersAvgAggregateInputType
    _sum?: DBT_OrdersSumAggregateInputType
    _min?: DBT_OrdersMinAggregateInputType
    _max?: DBT_OrdersMaxAggregateInputType
  }

  export type DBT_OrdersGroupByOutputType = {
    ID: bigint
    ID_Table: bigint | null
    OrderName: string | null
    ID_Customer: bigint | null
    DateTime: Date | null
    Canceled: boolean | null
    Price: Decimal | null
    OrderClosed: boolean | null
    _count: DBT_OrdersCountAggregateOutputType | null
    _avg: DBT_OrdersAvgAggregateOutputType | null
    _sum: DBT_OrdersSumAggregateOutputType | null
    _min: DBT_OrdersMinAggregateOutputType | null
    _max: DBT_OrdersMaxAggregateOutputType | null
  }

  type GetDBT_OrdersGroupByPayload<T extends DBT_OrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DBT_OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DBT_OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DBT_OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], DBT_OrdersGroupByOutputType[P]>
        }
      >
    >


  export type DBT_OrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    ID_Table?: boolean
    OrderName?: boolean
    ID_Customer?: boolean
    DateTime?: boolean
    Canceled?: boolean
    Price?: boolean
    OrderClosed?: boolean
  }, ExtArgs["result"]["dBT_Orders"]>

  export type DBT_OrdersSelectScalar = {
    ID?: boolean
    ID_Table?: boolean
    OrderName?: boolean
    ID_Customer?: boolean
    DateTime?: boolean
    Canceled?: boolean
    Price?: boolean
    OrderClosed?: boolean
  }



  export type $DBT_OrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DBT_Orders"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: bigint
      ID_Table: bigint | null
      OrderName: string | null
      ID_Customer: bigint | null
      DateTime: Date | null
      Canceled: boolean | null
      Price: Prisma.Decimal | null
      OrderClosed: boolean | null
    }, ExtArgs["result"]["dBT_Orders"]>
    composites: {}
  }


  type DBT_OrdersGetPayload<S extends boolean | null | undefined | DBT_OrdersDefaultArgs> = $Result.GetResult<Prisma.$DBT_OrdersPayload, S>

  type DBT_OrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DBT_OrdersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DBT_OrdersCountAggregateInputType | true
    }

  export interface DBT_OrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DBT_Orders'], meta: { name: 'DBT_Orders' } }
    /**
     * Find zero or one DBT_Orders that matches the filter.
     * @param {DBT_OrdersFindUniqueArgs} args - Arguments to find a DBT_Orders
     * @example
     * // Get one DBT_Orders
     * const dBT_Orders = await prisma.dBT_Orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DBT_OrdersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_OrdersFindUniqueArgs<ExtArgs>>
    ): Prisma__DBT_OrdersClient<$Result.GetResult<Prisma.$DBT_OrdersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DBT_Orders that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DBT_OrdersFindUniqueOrThrowArgs} args - Arguments to find a DBT_Orders
     * @example
     * // Get one DBT_Orders
     * const dBT_Orders = await prisma.dBT_Orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DBT_OrdersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_OrdersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DBT_OrdersClient<$Result.GetResult<Prisma.$DBT_OrdersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DBT_Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_OrdersFindFirstArgs} args - Arguments to find a DBT_Orders
     * @example
     * // Get one DBT_Orders
     * const dBT_Orders = await prisma.dBT_Orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DBT_OrdersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_OrdersFindFirstArgs<ExtArgs>>
    ): Prisma__DBT_OrdersClient<$Result.GetResult<Prisma.$DBT_OrdersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DBT_Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_OrdersFindFirstOrThrowArgs} args - Arguments to find a DBT_Orders
     * @example
     * // Get one DBT_Orders
     * const dBT_Orders = await prisma.dBT_Orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DBT_OrdersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_OrdersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DBT_OrdersClient<$Result.GetResult<Prisma.$DBT_OrdersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DBT_Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_OrdersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DBT_Orders
     * const dBT_Orders = await prisma.dBT_Orders.findMany()
     * 
     * // Get first 10 DBT_Orders
     * const dBT_Orders = await prisma.dBT_Orders.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const dBT_OrdersWithIDOnly = await prisma.dBT_Orders.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends DBT_OrdersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_OrdersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DBT_OrdersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DBT_Orders.
     * @param {DBT_OrdersCreateArgs} args - Arguments to create a DBT_Orders.
     * @example
     * // Create one DBT_Orders
     * const DBT_Orders = await prisma.dBT_Orders.create({
     *   data: {
     *     // ... data to create a DBT_Orders
     *   }
     * })
     * 
    **/
    create<T extends DBT_OrdersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_OrdersCreateArgs<ExtArgs>>
    ): Prisma__DBT_OrdersClient<$Result.GetResult<Prisma.$DBT_OrdersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DBT_Orders.
     * @param {DBT_OrdersCreateManyArgs} args - Arguments to create many DBT_Orders.
     * @example
     * // Create many DBT_Orders
     * const dBT_Orders = await prisma.dBT_Orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends DBT_OrdersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_OrdersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DBT_Orders.
     * @param {DBT_OrdersDeleteArgs} args - Arguments to delete one DBT_Orders.
     * @example
     * // Delete one DBT_Orders
     * const DBT_Orders = await prisma.dBT_Orders.delete({
     *   where: {
     *     // ... filter to delete one DBT_Orders
     *   }
     * })
     * 
    **/
    delete<T extends DBT_OrdersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_OrdersDeleteArgs<ExtArgs>>
    ): Prisma__DBT_OrdersClient<$Result.GetResult<Prisma.$DBT_OrdersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DBT_Orders.
     * @param {DBT_OrdersUpdateArgs} args - Arguments to update one DBT_Orders.
     * @example
     * // Update one DBT_Orders
     * const dBT_Orders = await prisma.dBT_Orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DBT_OrdersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_OrdersUpdateArgs<ExtArgs>>
    ): Prisma__DBT_OrdersClient<$Result.GetResult<Prisma.$DBT_OrdersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DBT_Orders.
     * @param {DBT_OrdersDeleteManyArgs} args - Arguments to filter DBT_Orders to delete.
     * @example
     * // Delete a few DBT_Orders
     * const { count } = await prisma.dBT_Orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DBT_OrdersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_OrdersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DBT_Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_OrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DBT_Orders
     * const dBT_Orders = await prisma.dBT_Orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DBT_OrdersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_OrdersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DBT_Orders.
     * @param {DBT_OrdersUpsertArgs} args - Arguments to update or create a DBT_Orders.
     * @example
     * // Update or create a DBT_Orders
     * const dBT_Orders = await prisma.dBT_Orders.upsert({
     *   create: {
     *     // ... data to create a DBT_Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DBT_Orders we want to update
     *   }
     * })
    **/
    upsert<T extends DBT_OrdersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_OrdersUpsertArgs<ExtArgs>>
    ): Prisma__DBT_OrdersClient<$Result.GetResult<Prisma.$DBT_OrdersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DBT_Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_OrdersCountArgs} args - Arguments to filter DBT_Orders to count.
     * @example
     * // Count the number of DBT_Orders
     * const count = await prisma.dBT_Orders.count({
     *   where: {
     *     // ... the filter for the DBT_Orders we want to count
     *   }
     * })
    **/
    count<T extends DBT_OrdersCountArgs>(
      args?: Subset<T, DBT_OrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DBT_OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DBT_Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DBT_OrdersAggregateArgs>(args: Subset<T, DBT_OrdersAggregateArgs>): Prisma.PrismaPromise<GetDBT_OrdersAggregateType<T>>

    /**
     * Group by DBT_Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_OrdersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DBT_OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DBT_OrdersGroupByArgs['orderBy'] }
        : { orderBy?: DBT_OrdersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DBT_OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDBT_OrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DBT_Orders model
   */
  readonly fields: DBT_OrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DBT_Orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DBT_OrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DBT_Orders model
   */ 
  interface DBT_OrdersFieldRefs {
    readonly ID: FieldRef<"DBT_Orders", 'BigInt'>
    readonly ID_Table: FieldRef<"DBT_Orders", 'BigInt'>
    readonly OrderName: FieldRef<"DBT_Orders", 'String'>
    readonly ID_Customer: FieldRef<"DBT_Orders", 'BigInt'>
    readonly DateTime: FieldRef<"DBT_Orders", 'DateTime'>
    readonly Canceled: FieldRef<"DBT_Orders", 'Boolean'>
    readonly Price: FieldRef<"DBT_Orders", 'Decimal'>
    readonly OrderClosed: FieldRef<"DBT_Orders", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * DBT_Orders findUnique
   */
  export type DBT_OrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Orders
     */
    select?: DBT_OrdersSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Orders to fetch.
     */
    where: DBT_OrdersWhereUniqueInput
  }

  /**
   * DBT_Orders findUniqueOrThrow
   */
  export type DBT_OrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Orders
     */
    select?: DBT_OrdersSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Orders to fetch.
     */
    where: DBT_OrdersWhereUniqueInput
  }

  /**
   * DBT_Orders findFirst
   */
  export type DBT_OrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Orders
     */
    select?: DBT_OrdersSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Orders to fetch.
     */
    where?: DBT_OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_Orders to fetch.
     */
    orderBy?: DBT_OrdersOrderByWithRelationInput | DBT_OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DBT_Orders.
     */
    cursor?: DBT_OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DBT_Orders.
     */
    distinct?: DBT_OrdersScalarFieldEnum | DBT_OrdersScalarFieldEnum[]
  }

  /**
   * DBT_Orders findFirstOrThrow
   */
  export type DBT_OrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Orders
     */
    select?: DBT_OrdersSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Orders to fetch.
     */
    where?: DBT_OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_Orders to fetch.
     */
    orderBy?: DBT_OrdersOrderByWithRelationInput | DBT_OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DBT_Orders.
     */
    cursor?: DBT_OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DBT_Orders.
     */
    distinct?: DBT_OrdersScalarFieldEnum | DBT_OrdersScalarFieldEnum[]
  }

  /**
   * DBT_Orders findMany
   */
  export type DBT_OrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Orders
     */
    select?: DBT_OrdersSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Orders to fetch.
     */
    where?: DBT_OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_Orders to fetch.
     */
    orderBy?: DBT_OrdersOrderByWithRelationInput | DBT_OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DBT_Orders.
     */
    cursor?: DBT_OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_Orders.
     */
    skip?: number
    distinct?: DBT_OrdersScalarFieldEnum | DBT_OrdersScalarFieldEnum[]
  }

  /**
   * DBT_Orders create
   */
  export type DBT_OrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Orders
     */
    select?: DBT_OrdersSelect<ExtArgs> | null
    /**
     * The data needed to create a DBT_Orders.
     */
    data?: XOR<DBT_OrdersCreateInput, DBT_OrdersUncheckedCreateInput>
  }

  /**
   * DBT_Orders createMany
   */
  export type DBT_OrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DBT_Orders.
     */
    data: DBT_OrdersCreateManyInput | DBT_OrdersCreateManyInput[]
  }

  /**
   * DBT_Orders update
   */
  export type DBT_OrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Orders
     */
    select?: DBT_OrdersSelect<ExtArgs> | null
    /**
     * The data needed to update a DBT_Orders.
     */
    data: XOR<DBT_OrdersUpdateInput, DBT_OrdersUncheckedUpdateInput>
    /**
     * Choose, which DBT_Orders to update.
     */
    where: DBT_OrdersWhereUniqueInput
  }

  /**
   * DBT_Orders updateMany
   */
  export type DBT_OrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DBT_Orders.
     */
    data: XOR<DBT_OrdersUpdateManyMutationInput, DBT_OrdersUncheckedUpdateManyInput>
    /**
     * Filter which DBT_Orders to update
     */
    where?: DBT_OrdersWhereInput
  }

  /**
   * DBT_Orders upsert
   */
  export type DBT_OrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Orders
     */
    select?: DBT_OrdersSelect<ExtArgs> | null
    /**
     * The filter to search for the DBT_Orders to update in case it exists.
     */
    where: DBT_OrdersWhereUniqueInput
    /**
     * In case the DBT_Orders found by the `where` argument doesn't exist, create a new DBT_Orders with this data.
     */
    create: XOR<DBT_OrdersCreateInput, DBT_OrdersUncheckedCreateInput>
    /**
     * In case the DBT_Orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DBT_OrdersUpdateInput, DBT_OrdersUncheckedUpdateInput>
  }

  /**
   * DBT_Orders delete
   */
  export type DBT_OrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Orders
     */
    select?: DBT_OrdersSelect<ExtArgs> | null
    /**
     * Filter which DBT_Orders to delete.
     */
    where: DBT_OrdersWhereUniqueInput
  }

  /**
   * DBT_Orders deleteMany
   */
  export type DBT_OrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DBT_Orders to delete
     */
    where?: DBT_OrdersWhereInput
  }

  /**
   * DBT_Orders without action
   */
  export type DBT_OrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Orders
     */
    select?: DBT_OrdersSelect<ExtArgs> | null
  }


  /**
   * Model DBT_PaymentMethods
   */

  export type AggregateDBT_PaymentMethods = {
    _count: DBT_PaymentMethodsCountAggregateOutputType | null
    _avg: DBT_PaymentMethodsAvgAggregateOutputType | null
    _sum: DBT_PaymentMethodsSumAggregateOutputType | null
    _min: DBT_PaymentMethodsMinAggregateOutputType | null
    _max: DBT_PaymentMethodsMaxAggregateOutputType | null
  }

  export type DBT_PaymentMethodsAvgAggregateOutputType = {
    ID: number | null
  }

  export type DBT_PaymentMethodsSumAggregateOutputType = {
    ID: bigint | null
  }

  export type DBT_PaymentMethodsMinAggregateOutputType = {
    ID: bigint | null
    Active: boolean | null
    PaymentMethod: string | null
  }

  export type DBT_PaymentMethodsMaxAggregateOutputType = {
    ID: bigint | null
    Active: boolean | null
    PaymentMethod: string | null
  }

  export type DBT_PaymentMethodsCountAggregateOutputType = {
    ID: number
    Active: number
    PaymentMethod: number
    _all: number
  }


  export type DBT_PaymentMethodsAvgAggregateInputType = {
    ID?: true
  }

  export type DBT_PaymentMethodsSumAggregateInputType = {
    ID?: true
  }

  export type DBT_PaymentMethodsMinAggregateInputType = {
    ID?: true
    Active?: true
    PaymentMethod?: true
  }

  export type DBT_PaymentMethodsMaxAggregateInputType = {
    ID?: true
    Active?: true
    PaymentMethod?: true
  }

  export type DBT_PaymentMethodsCountAggregateInputType = {
    ID?: true
    Active?: true
    PaymentMethod?: true
    _all?: true
  }

  export type DBT_PaymentMethodsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DBT_PaymentMethods to aggregate.
     */
    where?: DBT_PaymentMethodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_PaymentMethods to fetch.
     */
    orderBy?: DBT_PaymentMethodsOrderByWithRelationInput | DBT_PaymentMethodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DBT_PaymentMethodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DBT_PaymentMethods
    **/
    _count?: true | DBT_PaymentMethodsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DBT_PaymentMethodsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DBT_PaymentMethodsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DBT_PaymentMethodsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DBT_PaymentMethodsMaxAggregateInputType
  }

  export type GetDBT_PaymentMethodsAggregateType<T extends DBT_PaymentMethodsAggregateArgs> = {
        [P in keyof T & keyof AggregateDBT_PaymentMethods]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDBT_PaymentMethods[P]>
      : GetScalarType<T[P], AggregateDBT_PaymentMethods[P]>
  }




  export type DBT_PaymentMethodsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DBT_PaymentMethodsWhereInput
    orderBy?: DBT_PaymentMethodsOrderByWithAggregationInput | DBT_PaymentMethodsOrderByWithAggregationInput[]
    by: DBT_PaymentMethodsScalarFieldEnum[] | DBT_PaymentMethodsScalarFieldEnum
    having?: DBT_PaymentMethodsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DBT_PaymentMethodsCountAggregateInputType | true
    _avg?: DBT_PaymentMethodsAvgAggregateInputType
    _sum?: DBT_PaymentMethodsSumAggregateInputType
    _min?: DBT_PaymentMethodsMinAggregateInputType
    _max?: DBT_PaymentMethodsMaxAggregateInputType
  }

  export type DBT_PaymentMethodsGroupByOutputType = {
    ID: bigint
    Active: boolean | null
    PaymentMethod: string | null
    _count: DBT_PaymentMethodsCountAggregateOutputType | null
    _avg: DBT_PaymentMethodsAvgAggregateOutputType | null
    _sum: DBT_PaymentMethodsSumAggregateOutputType | null
    _min: DBT_PaymentMethodsMinAggregateOutputType | null
    _max: DBT_PaymentMethodsMaxAggregateOutputType | null
  }

  type GetDBT_PaymentMethodsGroupByPayload<T extends DBT_PaymentMethodsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DBT_PaymentMethodsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DBT_PaymentMethodsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DBT_PaymentMethodsGroupByOutputType[P]>
            : GetScalarType<T[P], DBT_PaymentMethodsGroupByOutputType[P]>
        }
      >
    >


  export type DBT_PaymentMethodsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    Active?: boolean
    PaymentMethod?: boolean
  }, ExtArgs["result"]["dBT_PaymentMethods"]>

  export type DBT_PaymentMethodsSelectScalar = {
    ID?: boolean
    Active?: boolean
    PaymentMethod?: boolean
  }



  export type $DBT_PaymentMethodsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DBT_PaymentMethods"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: bigint
      Active: boolean | null
      PaymentMethod: string | null
    }, ExtArgs["result"]["dBT_PaymentMethods"]>
    composites: {}
  }


  type DBT_PaymentMethodsGetPayload<S extends boolean | null | undefined | DBT_PaymentMethodsDefaultArgs> = $Result.GetResult<Prisma.$DBT_PaymentMethodsPayload, S>

  type DBT_PaymentMethodsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DBT_PaymentMethodsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DBT_PaymentMethodsCountAggregateInputType | true
    }

  export interface DBT_PaymentMethodsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DBT_PaymentMethods'], meta: { name: 'DBT_PaymentMethods' } }
    /**
     * Find zero or one DBT_PaymentMethods that matches the filter.
     * @param {DBT_PaymentMethodsFindUniqueArgs} args - Arguments to find a DBT_PaymentMethods
     * @example
     * // Get one DBT_PaymentMethods
     * const dBT_PaymentMethods = await prisma.dBT_PaymentMethods.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DBT_PaymentMethodsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_PaymentMethodsFindUniqueArgs<ExtArgs>>
    ): Prisma__DBT_PaymentMethodsClient<$Result.GetResult<Prisma.$DBT_PaymentMethodsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DBT_PaymentMethods that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DBT_PaymentMethodsFindUniqueOrThrowArgs} args - Arguments to find a DBT_PaymentMethods
     * @example
     * // Get one DBT_PaymentMethods
     * const dBT_PaymentMethods = await prisma.dBT_PaymentMethods.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DBT_PaymentMethodsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_PaymentMethodsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DBT_PaymentMethodsClient<$Result.GetResult<Prisma.$DBT_PaymentMethodsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DBT_PaymentMethods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_PaymentMethodsFindFirstArgs} args - Arguments to find a DBT_PaymentMethods
     * @example
     * // Get one DBT_PaymentMethods
     * const dBT_PaymentMethods = await prisma.dBT_PaymentMethods.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DBT_PaymentMethodsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_PaymentMethodsFindFirstArgs<ExtArgs>>
    ): Prisma__DBT_PaymentMethodsClient<$Result.GetResult<Prisma.$DBT_PaymentMethodsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DBT_PaymentMethods that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_PaymentMethodsFindFirstOrThrowArgs} args - Arguments to find a DBT_PaymentMethods
     * @example
     * // Get one DBT_PaymentMethods
     * const dBT_PaymentMethods = await prisma.dBT_PaymentMethods.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DBT_PaymentMethodsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_PaymentMethodsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DBT_PaymentMethodsClient<$Result.GetResult<Prisma.$DBT_PaymentMethodsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DBT_PaymentMethods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_PaymentMethodsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DBT_PaymentMethods
     * const dBT_PaymentMethods = await prisma.dBT_PaymentMethods.findMany()
     * 
     * // Get first 10 DBT_PaymentMethods
     * const dBT_PaymentMethods = await prisma.dBT_PaymentMethods.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const dBT_PaymentMethodsWithIDOnly = await prisma.dBT_PaymentMethods.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends DBT_PaymentMethodsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_PaymentMethodsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DBT_PaymentMethodsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DBT_PaymentMethods.
     * @param {DBT_PaymentMethodsCreateArgs} args - Arguments to create a DBT_PaymentMethods.
     * @example
     * // Create one DBT_PaymentMethods
     * const DBT_PaymentMethods = await prisma.dBT_PaymentMethods.create({
     *   data: {
     *     // ... data to create a DBT_PaymentMethods
     *   }
     * })
     * 
    **/
    create<T extends DBT_PaymentMethodsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_PaymentMethodsCreateArgs<ExtArgs>>
    ): Prisma__DBT_PaymentMethodsClient<$Result.GetResult<Prisma.$DBT_PaymentMethodsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DBT_PaymentMethods.
     * @param {DBT_PaymentMethodsCreateManyArgs} args - Arguments to create many DBT_PaymentMethods.
     * @example
     * // Create many DBT_PaymentMethods
     * const dBT_PaymentMethods = await prisma.dBT_PaymentMethods.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends DBT_PaymentMethodsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_PaymentMethodsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DBT_PaymentMethods.
     * @param {DBT_PaymentMethodsDeleteArgs} args - Arguments to delete one DBT_PaymentMethods.
     * @example
     * // Delete one DBT_PaymentMethods
     * const DBT_PaymentMethods = await prisma.dBT_PaymentMethods.delete({
     *   where: {
     *     // ... filter to delete one DBT_PaymentMethods
     *   }
     * })
     * 
    **/
    delete<T extends DBT_PaymentMethodsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_PaymentMethodsDeleteArgs<ExtArgs>>
    ): Prisma__DBT_PaymentMethodsClient<$Result.GetResult<Prisma.$DBT_PaymentMethodsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DBT_PaymentMethods.
     * @param {DBT_PaymentMethodsUpdateArgs} args - Arguments to update one DBT_PaymentMethods.
     * @example
     * // Update one DBT_PaymentMethods
     * const dBT_PaymentMethods = await prisma.dBT_PaymentMethods.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DBT_PaymentMethodsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_PaymentMethodsUpdateArgs<ExtArgs>>
    ): Prisma__DBT_PaymentMethodsClient<$Result.GetResult<Prisma.$DBT_PaymentMethodsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DBT_PaymentMethods.
     * @param {DBT_PaymentMethodsDeleteManyArgs} args - Arguments to filter DBT_PaymentMethods to delete.
     * @example
     * // Delete a few DBT_PaymentMethods
     * const { count } = await prisma.dBT_PaymentMethods.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DBT_PaymentMethodsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_PaymentMethodsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DBT_PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_PaymentMethodsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DBT_PaymentMethods
     * const dBT_PaymentMethods = await prisma.dBT_PaymentMethods.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DBT_PaymentMethodsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_PaymentMethodsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DBT_PaymentMethods.
     * @param {DBT_PaymentMethodsUpsertArgs} args - Arguments to update or create a DBT_PaymentMethods.
     * @example
     * // Update or create a DBT_PaymentMethods
     * const dBT_PaymentMethods = await prisma.dBT_PaymentMethods.upsert({
     *   create: {
     *     // ... data to create a DBT_PaymentMethods
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DBT_PaymentMethods we want to update
     *   }
     * })
    **/
    upsert<T extends DBT_PaymentMethodsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_PaymentMethodsUpsertArgs<ExtArgs>>
    ): Prisma__DBT_PaymentMethodsClient<$Result.GetResult<Prisma.$DBT_PaymentMethodsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DBT_PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_PaymentMethodsCountArgs} args - Arguments to filter DBT_PaymentMethods to count.
     * @example
     * // Count the number of DBT_PaymentMethods
     * const count = await prisma.dBT_PaymentMethods.count({
     *   where: {
     *     // ... the filter for the DBT_PaymentMethods we want to count
     *   }
     * })
    **/
    count<T extends DBT_PaymentMethodsCountArgs>(
      args?: Subset<T, DBT_PaymentMethodsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DBT_PaymentMethodsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DBT_PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_PaymentMethodsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DBT_PaymentMethodsAggregateArgs>(args: Subset<T, DBT_PaymentMethodsAggregateArgs>): Prisma.PrismaPromise<GetDBT_PaymentMethodsAggregateType<T>>

    /**
     * Group by DBT_PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_PaymentMethodsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DBT_PaymentMethodsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DBT_PaymentMethodsGroupByArgs['orderBy'] }
        : { orderBy?: DBT_PaymentMethodsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DBT_PaymentMethodsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDBT_PaymentMethodsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DBT_PaymentMethods model
   */
  readonly fields: DBT_PaymentMethodsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DBT_PaymentMethods.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DBT_PaymentMethodsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DBT_PaymentMethods model
   */ 
  interface DBT_PaymentMethodsFieldRefs {
    readonly ID: FieldRef<"DBT_PaymentMethods", 'BigInt'>
    readonly Active: FieldRef<"DBT_PaymentMethods", 'Boolean'>
    readonly PaymentMethod: FieldRef<"DBT_PaymentMethods", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DBT_PaymentMethods findUnique
   */
  export type DBT_PaymentMethodsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_PaymentMethods
     */
    select?: DBT_PaymentMethodsSelect<ExtArgs> | null
    /**
     * Filter, which DBT_PaymentMethods to fetch.
     */
    where: DBT_PaymentMethodsWhereUniqueInput
  }

  /**
   * DBT_PaymentMethods findUniqueOrThrow
   */
  export type DBT_PaymentMethodsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_PaymentMethods
     */
    select?: DBT_PaymentMethodsSelect<ExtArgs> | null
    /**
     * Filter, which DBT_PaymentMethods to fetch.
     */
    where: DBT_PaymentMethodsWhereUniqueInput
  }

  /**
   * DBT_PaymentMethods findFirst
   */
  export type DBT_PaymentMethodsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_PaymentMethods
     */
    select?: DBT_PaymentMethodsSelect<ExtArgs> | null
    /**
     * Filter, which DBT_PaymentMethods to fetch.
     */
    where?: DBT_PaymentMethodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_PaymentMethods to fetch.
     */
    orderBy?: DBT_PaymentMethodsOrderByWithRelationInput | DBT_PaymentMethodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DBT_PaymentMethods.
     */
    cursor?: DBT_PaymentMethodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DBT_PaymentMethods.
     */
    distinct?: DBT_PaymentMethodsScalarFieldEnum | DBT_PaymentMethodsScalarFieldEnum[]
  }

  /**
   * DBT_PaymentMethods findFirstOrThrow
   */
  export type DBT_PaymentMethodsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_PaymentMethods
     */
    select?: DBT_PaymentMethodsSelect<ExtArgs> | null
    /**
     * Filter, which DBT_PaymentMethods to fetch.
     */
    where?: DBT_PaymentMethodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_PaymentMethods to fetch.
     */
    orderBy?: DBT_PaymentMethodsOrderByWithRelationInput | DBT_PaymentMethodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DBT_PaymentMethods.
     */
    cursor?: DBT_PaymentMethodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_PaymentMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DBT_PaymentMethods.
     */
    distinct?: DBT_PaymentMethodsScalarFieldEnum | DBT_PaymentMethodsScalarFieldEnum[]
  }

  /**
   * DBT_PaymentMethods findMany
   */
  export type DBT_PaymentMethodsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_PaymentMethods
     */
    select?: DBT_PaymentMethodsSelect<ExtArgs> | null
    /**
     * Filter, which DBT_PaymentMethods to fetch.
     */
    where?: DBT_PaymentMethodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_PaymentMethods to fetch.
     */
    orderBy?: DBT_PaymentMethodsOrderByWithRelationInput | DBT_PaymentMethodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DBT_PaymentMethods.
     */
    cursor?: DBT_PaymentMethodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_PaymentMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_PaymentMethods.
     */
    skip?: number
    distinct?: DBT_PaymentMethodsScalarFieldEnum | DBT_PaymentMethodsScalarFieldEnum[]
  }

  /**
   * DBT_PaymentMethods create
   */
  export type DBT_PaymentMethodsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_PaymentMethods
     */
    select?: DBT_PaymentMethodsSelect<ExtArgs> | null
    /**
     * The data needed to create a DBT_PaymentMethods.
     */
    data?: XOR<DBT_PaymentMethodsCreateInput, DBT_PaymentMethodsUncheckedCreateInput>
  }

  /**
   * DBT_PaymentMethods createMany
   */
  export type DBT_PaymentMethodsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DBT_PaymentMethods.
     */
    data: DBT_PaymentMethodsCreateManyInput | DBT_PaymentMethodsCreateManyInput[]
  }

  /**
   * DBT_PaymentMethods update
   */
  export type DBT_PaymentMethodsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_PaymentMethods
     */
    select?: DBT_PaymentMethodsSelect<ExtArgs> | null
    /**
     * The data needed to update a DBT_PaymentMethods.
     */
    data: XOR<DBT_PaymentMethodsUpdateInput, DBT_PaymentMethodsUncheckedUpdateInput>
    /**
     * Choose, which DBT_PaymentMethods to update.
     */
    where: DBT_PaymentMethodsWhereUniqueInput
  }

  /**
   * DBT_PaymentMethods updateMany
   */
  export type DBT_PaymentMethodsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DBT_PaymentMethods.
     */
    data: XOR<DBT_PaymentMethodsUpdateManyMutationInput, DBT_PaymentMethodsUncheckedUpdateManyInput>
    /**
     * Filter which DBT_PaymentMethods to update
     */
    where?: DBT_PaymentMethodsWhereInput
  }

  /**
   * DBT_PaymentMethods upsert
   */
  export type DBT_PaymentMethodsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_PaymentMethods
     */
    select?: DBT_PaymentMethodsSelect<ExtArgs> | null
    /**
     * The filter to search for the DBT_PaymentMethods to update in case it exists.
     */
    where: DBT_PaymentMethodsWhereUniqueInput
    /**
     * In case the DBT_PaymentMethods found by the `where` argument doesn't exist, create a new DBT_PaymentMethods with this data.
     */
    create: XOR<DBT_PaymentMethodsCreateInput, DBT_PaymentMethodsUncheckedCreateInput>
    /**
     * In case the DBT_PaymentMethods was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DBT_PaymentMethodsUpdateInput, DBT_PaymentMethodsUncheckedUpdateInput>
  }

  /**
   * DBT_PaymentMethods delete
   */
  export type DBT_PaymentMethodsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_PaymentMethods
     */
    select?: DBT_PaymentMethodsSelect<ExtArgs> | null
    /**
     * Filter which DBT_PaymentMethods to delete.
     */
    where: DBT_PaymentMethodsWhereUniqueInput
  }

  /**
   * DBT_PaymentMethods deleteMany
   */
  export type DBT_PaymentMethodsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DBT_PaymentMethods to delete
     */
    where?: DBT_PaymentMethodsWhereInput
  }

  /**
   * DBT_PaymentMethods without action
   */
  export type DBT_PaymentMethodsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_PaymentMethods
     */
    select?: DBT_PaymentMethodsSelect<ExtArgs> | null
  }


  /**
   * Model DBT_Tables
   */

  export type AggregateDBT_Tables = {
    _count: DBT_TablesCountAggregateOutputType | null
    _avg: DBT_TablesAvgAggregateOutputType | null
    _sum: DBT_TablesSumAggregateOutputType | null
    _min: DBT_TablesMinAggregateOutputType | null
    _max: DBT_TablesMaxAggregateOutputType | null
  }

  export type DBT_TablesAvgAggregateOutputType = {
    ID: number | null
  }

  export type DBT_TablesSumAggregateOutputType = {
    ID: bigint | null
  }

  export type DBT_TablesMinAggregateOutputType = {
    ID: bigint | null
    Active: boolean | null
    TableName: string | null
  }

  export type DBT_TablesMaxAggregateOutputType = {
    ID: bigint | null
    Active: boolean | null
    TableName: string | null
  }

  export type DBT_TablesCountAggregateOutputType = {
    ID: number
    Active: number
    TableName: number
    _all: number
  }


  export type DBT_TablesAvgAggregateInputType = {
    ID?: true
  }

  export type DBT_TablesSumAggregateInputType = {
    ID?: true
  }

  export type DBT_TablesMinAggregateInputType = {
    ID?: true
    Active?: true
    TableName?: true
  }

  export type DBT_TablesMaxAggregateInputType = {
    ID?: true
    Active?: true
    TableName?: true
  }

  export type DBT_TablesCountAggregateInputType = {
    ID?: true
    Active?: true
    TableName?: true
    _all?: true
  }

  export type DBT_TablesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DBT_Tables to aggregate.
     */
    where?: DBT_TablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_Tables to fetch.
     */
    orderBy?: DBT_TablesOrderByWithRelationInput | DBT_TablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DBT_TablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DBT_Tables
    **/
    _count?: true | DBT_TablesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DBT_TablesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DBT_TablesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DBT_TablesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DBT_TablesMaxAggregateInputType
  }

  export type GetDBT_TablesAggregateType<T extends DBT_TablesAggregateArgs> = {
        [P in keyof T & keyof AggregateDBT_Tables]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDBT_Tables[P]>
      : GetScalarType<T[P], AggregateDBT_Tables[P]>
  }




  export type DBT_TablesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DBT_TablesWhereInput
    orderBy?: DBT_TablesOrderByWithAggregationInput | DBT_TablesOrderByWithAggregationInput[]
    by: DBT_TablesScalarFieldEnum[] | DBT_TablesScalarFieldEnum
    having?: DBT_TablesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DBT_TablesCountAggregateInputType | true
    _avg?: DBT_TablesAvgAggregateInputType
    _sum?: DBT_TablesSumAggregateInputType
    _min?: DBT_TablesMinAggregateInputType
    _max?: DBT_TablesMaxAggregateInputType
  }

  export type DBT_TablesGroupByOutputType = {
    ID: bigint
    Active: boolean
    TableName: string | null
    _count: DBT_TablesCountAggregateOutputType | null
    _avg: DBT_TablesAvgAggregateOutputType | null
    _sum: DBT_TablesSumAggregateOutputType | null
    _min: DBT_TablesMinAggregateOutputType | null
    _max: DBT_TablesMaxAggregateOutputType | null
  }

  type GetDBT_TablesGroupByPayload<T extends DBT_TablesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DBT_TablesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DBT_TablesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DBT_TablesGroupByOutputType[P]>
            : GetScalarType<T[P], DBT_TablesGroupByOutputType[P]>
        }
      >
    >


  export type DBT_TablesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    Active?: boolean
    TableName?: boolean
  }, ExtArgs["result"]["dBT_Tables"]>

  export type DBT_TablesSelectScalar = {
    ID?: boolean
    Active?: boolean
    TableName?: boolean
  }



  export type $DBT_TablesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DBT_Tables"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: bigint
      Active: boolean
      TableName: string | null
    }, ExtArgs["result"]["dBT_Tables"]>
    composites: {}
  }


  type DBT_TablesGetPayload<S extends boolean | null | undefined | DBT_TablesDefaultArgs> = $Result.GetResult<Prisma.$DBT_TablesPayload, S>

  type DBT_TablesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DBT_TablesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DBT_TablesCountAggregateInputType | true
    }

  export interface DBT_TablesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DBT_Tables'], meta: { name: 'DBT_Tables' } }
    /**
     * Find zero or one DBT_Tables that matches the filter.
     * @param {DBT_TablesFindUniqueArgs} args - Arguments to find a DBT_Tables
     * @example
     * // Get one DBT_Tables
     * const dBT_Tables = await prisma.dBT_Tables.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DBT_TablesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_TablesFindUniqueArgs<ExtArgs>>
    ): Prisma__DBT_TablesClient<$Result.GetResult<Prisma.$DBT_TablesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DBT_Tables that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DBT_TablesFindUniqueOrThrowArgs} args - Arguments to find a DBT_Tables
     * @example
     * // Get one DBT_Tables
     * const dBT_Tables = await prisma.dBT_Tables.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DBT_TablesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_TablesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DBT_TablesClient<$Result.GetResult<Prisma.$DBT_TablesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DBT_Tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_TablesFindFirstArgs} args - Arguments to find a DBT_Tables
     * @example
     * // Get one DBT_Tables
     * const dBT_Tables = await prisma.dBT_Tables.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DBT_TablesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_TablesFindFirstArgs<ExtArgs>>
    ): Prisma__DBT_TablesClient<$Result.GetResult<Prisma.$DBT_TablesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DBT_Tables that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_TablesFindFirstOrThrowArgs} args - Arguments to find a DBT_Tables
     * @example
     * // Get one DBT_Tables
     * const dBT_Tables = await prisma.dBT_Tables.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DBT_TablesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_TablesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DBT_TablesClient<$Result.GetResult<Prisma.$DBT_TablesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DBT_Tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_TablesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DBT_Tables
     * const dBT_Tables = await prisma.dBT_Tables.findMany()
     * 
     * // Get first 10 DBT_Tables
     * const dBT_Tables = await prisma.dBT_Tables.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const dBT_TablesWithIDOnly = await prisma.dBT_Tables.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends DBT_TablesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_TablesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DBT_TablesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DBT_Tables.
     * @param {DBT_TablesCreateArgs} args - Arguments to create a DBT_Tables.
     * @example
     * // Create one DBT_Tables
     * const DBT_Tables = await prisma.dBT_Tables.create({
     *   data: {
     *     // ... data to create a DBT_Tables
     *   }
     * })
     * 
    **/
    create<T extends DBT_TablesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_TablesCreateArgs<ExtArgs>>
    ): Prisma__DBT_TablesClient<$Result.GetResult<Prisma.$DBT_TablesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DBT_Tables.
     * @param {DBT_TablesCreateManyArgs} args - Arguments to create many DBT_Tables.
     * @example
     * // Create many DBT_Tables
     * const dBT_Tables = await prisma.dBT_Tables.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends DBT_TablesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_TablesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DBT_Tables.
     * @param {DBT_TablesDeleteArgs} args - Arguments to delete one DBT_Tables.
     * @example
     * // Delete one DBT_Tables
     * const DBT_Tables = await prisma.dBT_Tables.delete({
     *   where: {
     *     // ... filter to delete one DBT_Tables
     *   }
     * })
     * 
    **/
    delete<T extends DBT_TablesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_TablesDeleteArgs<ExtArgs>>
    ): Prisma__DBT_TablesClient<$Result.GetResult<Prisma.$DBT_TablesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DBT_Tables.
     * @param {DBT_TablesUpdateArgs} args - Arguments to update one DBT_Tables.
     * @example
     * // Update one DBT_Tables
     * const dBT_Tables = await prisma.dBT_Tables.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DBT_TablesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_TablesUpdateArgs<ExtArgs>>
    ): Prisma__DBT_TablesClient<$Result.GetResult<Prisma.$DBT_TablesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DBT_Tables.
     * @param {DBT_TablesDeleteManyArgs} args - Arguments to filter DBT_Tables to delete.
     * @example
     * // Delete a few DBT_Tables
     * const { count } = await prisma.dBT_Tables.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DBT_TablesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_TablesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DBT_Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_TablesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DBT_Tables
     * const dBT_Tables = await prisma.dBT_Tables.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DBT_TablesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_TablesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DBT_Tables.
     * @param {DBT_TablesUpsertArgs} args - Arguments to update or create a DBT_Tables.
     * @example
     * // Update or create a DBT_Tables
     * const dBT_Tables = await prisma.dBT_Tables.upsert({
     *   create: {
     *     // ... data to create a DBT_Tables
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DBT_Tables we want to update
     *   }
     * })
    **/
    upsert<T extends DBT_TablesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_TablesUpsertArgs<ExtArgs>>
    ): Prisma__DBT_TablesClient<$Result.GetResult<Prisma.$DBT_TablesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DBT_Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_TablesCountArgs} args - Arguments to filter DBT_Tables to count.
     * @example
     * // Count the number of DBT_Tables
     * const count = await prisma.dBT_Tables.count({
     *   where: {
     *     // ... the filter for the DBT_Tables we want to count
     *   }
     * })
    **/
    count<T extends DBT_TablesCountArgs>(
      args?: Subset<T, DBT_TablesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DBT_TablesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DBT_Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_TablesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DBT_TablesAggregateArgs>(args: Subset<T, DBT_TablesAggregateArgs>): Prisma.PrismaPromise<GetDBT_TablesAggregateType<T>>

    /**
     * Group by DBT_Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_TablesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DBT_TablesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DBT_TablesGroupByArgs['orderBy'] }
        : { orderBy?: DBT_TablesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DBT_TablesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDBT_TablesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DBT_Tables model
   */
  readonly fields: DBT_TablesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DBT_Tables.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DBT_TablesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DBT_Tables model
   */ 
  interface DBT_TablesFieldRefs {
    readonly ID: FieldRef<"DBT_Tables", 'BigInt'>
    readonly Active: FieldRef<"DBT_Tables", 'Boolean'>
    readonly TableName: FieldRef<"DBT_Tables", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DBT_Tables findUnique
   */
  export type DBT_TablesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Tables
     */
    select?: DBT_TablesSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Tables to fetch.
     */
    where: DBT_TablesWhereUniqueInput
  }

  /**
   * DBT_Tables findUniqueOrThrow
   */
  export type DBT_TablesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Tables
     */
    select?: DBT_TablesSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Tables to fetch.
     */
    where: DBT_TablesWhereUniqueInput
  }

  /**
   * DBT_Tables findFirst
   */
  export type DBT_TablesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Tables
     */
    select?: DBT_TablesSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Tables to fetch.
     */
    where?: DBT_TablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_Tables to fetch.
     */
    orderBy?: DBT_TablesOrderByWithRelationInput | DBT_TablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DBT_Tables.
     */
    cursor?: DBT_TablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DBT_Tables.
     */
    distinct?: DBT_TablesScalarFieldEnum | DBT_TablesScalarFieldEnum[]
  }

  /**
   * DBT_Tables findFirstOrThrow
   */
  export type DBT_TablesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Tables
     */
    select?: DBT_TablesSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Tables to fetch.
     */
    where?: DBT_TablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_Tables to fetch.
     */
    orderBy?: DBT_TablesOrderByWithRelationInput | DBT_TablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DBT_Tables.
     */
    cursor?: DBT_TablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DBT_Tables.
     */
    distinct?: DBT_TablesScalarFieldEnum | DBT_TablesScalarFieldEnum[]
  }

  /**
   * DBT_Tables findMany
   */
  export type DBT_TablesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Tables
     */
    select?: DBT_TablesSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Tables to fetch.
     */
    where?: DBT_TablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_Tables to fetch.
     */
    orderBy?: DBT_TablesOrderByWithRelationInput | DBT_TablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DBT_Tables.
     */
    cursor?: DBT_TablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_Tables.
     */
    skip?: number
    distinct?: DBT_TablesScalarFieldEnum | DBT_TablesScalarFieldEnum[]
  }

  /**
   * DBT_Tables create
   */
  export type DBT_TablesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Tables
     */
    select?: DBT_TablesSelect<ExtArgs> | null
    /**
     * The data needed to create a DBT_Tables.
     */
    data?: XOR<DBT_TablesCreateInput, DBT_TablesUncheckedCreateInput>
  }

  /**
   * DBT_Tables createMany
   */
  export type DBT_TablesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DBT_Tables.
     */
    data: DBT_TablesCreateManyInput | DBT_TablesCreateManyInput[]
  }

  /**
   * DBT_Tables update
   */
  export type DBT_TablesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Tables
     */
    select?: DBT_TablesSelect<ExtArgs> | null
    /**
     * The data needed to update a DBT_Tables.
     */
    data: XOR<DBT_TablesUpdateInput, DBT_TablesUncheckedUpdateInput>
    /**
     * Choose, which DBT_Tables to update.
     */
    where: DBT_TablesWhereUniqueInput
  }

  /**
   * DBT_Tables updateMany
   */
  export type DBT_TablesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DBT_Tables.
     */
    data: XOR<DBT_TablesUpdateManyMutationInput, DBT_TablesUncheckedUpdateManyInput>
    /**
     * Filter which DBT_Tables to update
     */
    where?: DBT_TablesWhereInput
  }

  /**
   * DBT_Tables upsert
   */
  export type DBT_TablesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Tables
     */
    select?: DBT_TablesSelect<ExtArgs> | null
    /**
     * The filter to search for the DBT_Tables to update in case it exists.
     */
    where: DBT_TablesWhereUniqueInput
    /**
     * In case the DBT_Tables found by the `where` argument doesn't exist, create a new DBT_Tables with this data.
     */
    create: XOR<DBT_TablesCreateInput, DBT_TablesUncheckedCreateInput>
    /**
     * In case the DBT_Tables was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DBT_TablesUpdateInput, DBT_TablesUncheckedUpdateInput>
  }

  /**
   * DBT_Tables delete
   */
  export type DBT_TablesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Tables
     */
    select?: DBT_TablesSelect<ExtArgs> | null
    /**
     * Filter which DBT_Tables to delete.
     */
    where: DBT_TablesWhereUniqueInput
  }

  /**
   * DBT_Tables deleteMany
   */
  export type DBT_TablesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DBT_Tables to delete
     */
    where?: DBT_TablesWhereInput
  }

  /**
   * DBT_Tables without action
   */
  export type DBT_TablesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Tables
     */
    select?: DBT_TablesSelect<ExtArgs> | null
  }


  /**
   * Model DBT_Taxes
   */

  export type AggregateDBT_Taxes = {
    _count: DBT_TaxesCountAggregateOutputType | null
    _avg: DBT_TaxesAvgAggregateOutputType | null
    _sum: DBT_TaxesSumAggregateOutputType | null
    _min: DBT_TaxesMinAggregateOutputType | null
    _max: DBT_TaxesMaxAggregateOutputType | null
  }

  export type DBT_TaxesAvgAggregateOutputType = {
    ID: number | null
    Percentage: Decimal | null
    Value: Decimal | null
  }

  export type DBT_TaxesSumAggregateOutputType = {
    ID: bigint | null
    Percentage: Decimal | null
    Value: Decimal | null
  }

  export type DBT_TaxesMinAggregateOutputType = {
    ID: bigint | null
    Active: boolean | null
    ByDefault: boolean | null
    TaxName: string | null
    TaxDescription: string | null
    Percentage: Decimal | null
    Value: Decimal | null
  }

  export type DBT_TaxesMaxAggregateOutputType = {
    ID: bigint | null
    Active: boolean | null
    ByDefault: boolean | null
    TaxName: string | null
    TaxDescription: string | null
    Percentage: Decimal | null
    Value: Decimal | null
  }

  export type DBT_TaxesCountAggregateOutputType = {
    ID: number
    Active: number
    ByDefault: number
    TaxName: number
    TaxDescription: number
    Percentage: number
    Value: number
    _all: number
  }


  export type DBT_TaxesAvgAggregateInputType = {
    ID?: true
    Percentage?: true
    Value?: true
  }

  export type DBT_TaxesSumAggregateInputType = {
    ID?: true
    Percentage?: true
    Value?: true
  }

  export type DBT_TaxesMinAggregateInputType = {
    ID?: true
    Active?: true
    ByDefault?: true
    TaxName?: true
    TaxDescription?: true
    Percentage?: true
    Value?: true
  }

  export type DBT_TaxesMaxAggregateInputType = {
    ID?: true
    Active?: true
    ByDefault?: true
    TaxName?: true
    TaxDescription?: true
    Percentage?: true
    Value?: true
  }

  export type DBT_TaxesCountAggregateInputType = {
    ID?: true
    Active?: true
    ByDefault?: true
    TaxName?: true
    TaxDescription?: true
    Percentage?: true
    Value?: true
    _all?: true
  }

  export type DBT_TaxesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DBT_Taxes to aggregate.
     */
    where?: DBT_TaxesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_Taxes to fetch.
     */
    orderBy?: DBT_TaxesOrderByWithRelationInput | DBT_TaxesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DBT_TaxesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_Taxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_Taxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DBT_Taxes
    **/
    _count?: true | DBT_TaxesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DBT_TaxesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DBT_TaxesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DBT_TaxesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DBT_TaxesMaxAggregateInputType
  }

  export type GetDBT_TaxesAggregateType<T extends DBT_TaxesAggregateArgs> = {
        [P in keyof T & keyof AggregateDBT_Taxes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDBT_Taxes[P]>
      : GetScalarType<T[P], AggregateDBT_Taxes[P]>
  }




  export type DBT_TaxesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DBT_TaxesWhereInput
    orderBy?: DBT_TaxesOrderByWithAggregationInput | DBT_TaxesOrderByWithAggregationInput[]
    by: DBT_TaxesScalarFieldEnum[] | DBT_TaxesScalarFieldEnum
    having?: DBT_TaxesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DBT_TaxesCountAggregateInputType | true
    _avg?: DBT_TaxesAvgAggregateInputType
    _sum?: DBT_TaxesSumAggregateInputType
    _min?: DBT_TaxesMinAggregateInputType
    _max?: DBT_TaxesMaxAggregateInputType
  }

  export type DBT_TaxesGroupByOutputType = {
    ID: bigint
    Active: boolean
    ByDefault: boolean | null
    TaxName: string | null
    TaxDescription: string | null
    Percentage: Decimal | null
    Value: Decimal | null
    _count: DBT_TaxesCountAggregateOutputType | null
    _avg: DBT_TaxesAvgAggregateOutputType | null
    _sum: DBT_TaxesSumAggregateOutputType | null
    _min: DBT_TaxesMinAggregateOutputType | null
    _max: DBT_TaxesMaxAggregateOutputType | null
  }

  type GetDBT_TaxesGroupByPayload<T extends DBT_TaxesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DBT_TaxesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DBT_TaxesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DBT_TaxesGroupByOutputType[P]>
            : GetScalarType<T[P], DBT_TaxesGroupByOutputType[P]>
        }
      >
    >


  export type DBT_TaxesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    Active?: boolean
    ByDefault?: boolean
    TaxName?: boolean
    TaxDescription?: boolean
    Percentage?: boolean
    Value?: boolean
  }, ExtArgs["result"]["dBT_Taxes"]>

  export type DBT_TaxesSelectScalar = {
    ID?: boolean
    Active?: boolean
    ByDefault?: boolean
    TaxName?: boolean
    TaxDescription?: boolean
    Percentage?: boolean
    Value?: boolean
  }



  export type $DBT_TaxesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DBT_Taxes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: bigint
      Active: boolean
      ByDefault: boolean | null
      TaxName: string | null
      TaxDescription: string | null
      Percentage: Prisma.Decimal | null
      Value: Prisma.Decimal | null
    }, ExtArgs["result"]["dBT_Taxes"]>
    composites: {}
  }


  type DBT_TaxesGetPayload<S extends boolean | null | undefined | DBT_TaxesDefaultArgs> = $Result.GetResult<Prisma.$DBT_TaxesPayload, S>

  type DBT_TaxesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DBT_TaxesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DBT_TaxesCountAggregateInputType | true
    }

  export interface DBT_TaxesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DBT_Taxes'], meta: { name: 'DBT_Taxes' } }
    /**
     * Find zero or one DBT_Taxes that matches the filter.
     * @param {DBT_TaxesFindUniqueArgs} args - Arguments to find a DBT_Taxes
     * @example
     * // Get one DBT_Taxes
     * const dBT_Taxes = await prisma.dBT_Taxes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DBT_TaxesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_TaxesFindUniqueArgs<ExtArgs>>
    ): Prisma__DBT_TaxesClient<$Result.GetResult<Prisma.$DBT_TaxesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DBT_Taxes that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DBT_TaxesFindUniqueOrThrowArgs} args - Arguments to find a DBT_Taxes
     * @example
     * // Get one DBT_Taxes
     * const dBT_Taxes = await prisma.dBT_Taxes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DBT_TaxesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_TaxesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DBT_TaxesClient<$Result.GetResult<Prisma.$DBT_TaxesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DBT_Taxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_TaxesFindFirstArgs} args - Arguments to find a DBT_Taxes
     * @example
     * // Get one DBT_Taxes
     * const dBT_Taxes = await prisma.dBT_Taxes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DBT_TaxesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_TaxesFindFirstArgs<ExtArgs>>
    ): Prisma__DBT_TaxesClient<$Result.GetResult<Prisma.$DBT_TaxesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DBT_Taxes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_TaxesFindFirstOrThrowArgs} args - Arguments to find a DBT_Taxes
     * @example
     * // Get one DBT_Taxes
     * const dBT_Taxes = await prisma.dBT_Taxes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DBT_TaxesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_TaxesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DBT_TaxesClient<$Result.GetResult<Prisma.$DBT_TaxesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DBT_Taxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_TaxesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DBT_Taxes
     * const dBT_Taxes = await prisma.dBT_Taxes.findMany()
     * 
     * // Get first 10 DBT_Taxes
     * const dBT_Taxes = await prisma.dBT_Taxes.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const dBT_TaxesWithIDOnly = await prisma.dBT_Taxes.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends DBT_TaxesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_TaxesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DBT_TaxesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DBT_Taxes.
     * @param {DBT_TaxesCreateArgs} args - Arguments to create a DBT_Taxes.
     * @example
     * // Create one DBT_Taxes
     * const DBT_Taxes = await prisma.dBT_Taxes.create({
     *   data: {
     *     // ... data to create a DBT_Taxes
     *   }
     * })
     * 
    **/
    create<T extends DBT_TaxesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_TaxesCreateArgs<ExtArgs>>
    ): Prisma__DBT_TaxesClient<$Result.GetResult<Prisma.$DBT_TaxesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DBT_Taxes.
     * @param {DBT_TaxesCreateManyArgs} args - Arguments to create many DBT_Taxes.
     * @example
     * // Create many DBT_Taxes
     * const dBT_Taxes = await prisma.dBT_Taxes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends DBT_TaxesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_TaxesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DBT_Taxes.
     * @param {DBT_TaxesDeleteArgs} args - Arguments to delete one DBT_Taxes.
     * @example
     * // Delete one DBT_Taxes
     * const DBT_Taxes = await prisma.dBT_Taxes.delete({
     *   where: {
     *     // ... filter to delete one DBT_Taxes
     *   }
     * })
     * 
    **/
    delete<T extends DBT_TaxesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_TaxesDeleteArgs<ExtArgs>>
    ): Prisma__DBT_TaxesClient<$Result.GetResult<Prisma.$DBT_TaxesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DBT_Taxes.
     * @param {DBT_TaxesUpdateArgs} args - Arguments to update one DBT_Taxes.
     * @example
     * // Update one DBT_Taxes
     * const dBT_Taxes = await prisma.dBT_Taxes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DBT_TaxesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_TaxesUpdateArgs<ExtArgs>>
    ): Prisma__DBT_TaxesClient<$Result.GetResult<Prisma.$DBT_TaxesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DBT_Taxes.
     * @param {DBT_TaxesDeleteManyArgs} args - Arguments to filter DBT_Taxes to delete.
     * @example
     * // Delete a few DBT_Taxes
     * const { count } = await prisma.dBT_Taxes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DBT_TaxesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_TaxesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DBT_Taxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_TaxesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DBT_Taxes
     * const dBT_Taxes = await prisma.dBT_Taxes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DBT_TaxesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_TaxesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DBT_Taxes.
     * @param {DBT_TaxesUpsertArgs} args - Arguments to update or create a DBT_Taxes.
     * @example
     * // Update or create a DBT_Taxes
     * const dBT_Taxes = await prisma.dBT_Taxes.upsert({
     *   create: {
     *     // ... data to create a DBT_Taxes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DBT_Taxes we want to update
     *   }
     * })
    **/
    upsert<T extends DBT_TaxesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_TaxesUpsertArgs<ExtArgs>>
    ): Prisma__DBT_TaxesClient<$Result.GetResult<Prisma.$DBT_TaxesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DBT_Taxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_TaxesCountArgs} args - Arguments to filter DBT_Taxes to count.
     * @example
     * // Count the number of DBT_Taxes
     * const count = await prisma.dBT_Taxes.count({
     *   where: {
     *     // ... the filter for the DBT_Taxes we want to count
     *   }
     * })
    **/
    count<T extends DBT_TaxesCountArgs>(
      args?: Subset<T, DBT_TaxesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DBT_TaxesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DBT_Taxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_TaxesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DBT_TaxesAggregateArgs>(args: Subset<T, DBT_TaxesAggregateArgs>): Prisma.PrismaPromise<GetDBT_TaxesAggregateType<T>>

    /**
     * Group by DBT_Taxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_TaxesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DBT_TaxesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DBT_TaxesGroupByArgs['orderBy'] }
        : { orderBy?: DBT_TaxesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DBT_TaxesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDBT_TaxesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DBT_Taxes model
   */
  readonly fields: DBT_TaxesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DBT_Taxes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DBT_TaxesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DBT_Taxes model
   */ 
  interface DBT_TaxesFieldRefs {
    readonly ID: FieldRef<"DBT_Taxes", 'BigInt'>
    readonly Active: FieldRef<"DBT_Taxes", 'Boolean'>
    readonly ByDefault: FieldRef<"DBT_Taxes", 'Boolean'>
    readonly TaxName: FieldRef<"DBT_Taxes", 'String'>
    readonly TaxDescription: FieldRef<"DBT_Taxes", 'String'>
    readonly Percentage: FieldRef<"DBT_Taxes", 'Decimal'>
    readonly Value: FieldRef<"DBT_Taxes", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * DBT_Taxes findUnique
   */
  export type DBT_TaxesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Taxes
     */
    select?: DBT_TaxesSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Taxes to fetch.
     */
    where: DBT_TaxesWhereUniqueInput
  }

  /**
   * DBT_Taxes findUniqueOrThrow
   */
  export type DBT_TaxesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Taxes
     */
    select?: DBT_TaxesSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Taxes to fetch.
     */
    where: DBT_TaxesWhereUniqueInput
  }

  /**
   * DBT_Taxes findFirst
   */
  export type DBT_TaxesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Taxes
     */
    select?: DBT_TaxesSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Taxes to fetch.
     */
    where?: DBT_TaxesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_Taxes to fetch.
     */
    orderBy?: DBT_TaxesOrderByWithRelationInput | DBT_TaxesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DBT_Taxes.
     */
    cursor?: DBT_TaxesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_Taxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_Taxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DBT_Taxes.
     */
    distinct?: DBT_TaxesScalarFieldEnum | DBT_TaxesScalarFieldEnum[]
  }

  /**
   * DBT_Taxes findFirstOrThrow
   */
  export type DBT_TaxesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Taxes
     */
    select?: DBT_TaxesSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Taxes to fetch.
     */
    where?: DBT_TaxesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_Taxes to fetch.
     */
    orderBy?: DBT_TaxesOrderByWithRelationInput | DBT_TaxesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DBT_Taxes.
     */
    cursor?: DBT_TaxesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_Taxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_Taxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DBT_Taxes.
     */
    distinct?: DBT_TaxesScalarFieldEnum | DBT_TaxesScalarFieldEnum[]
  }

  /**
   * DBT_Taxes findMany
   */
  export type DBT_TaxesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Taxes
     */
    select?: DBT_TaxesSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Taxes to fetch.
     */
    where?: DBT_TaxesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_Taxes to fetch.
     */
    orderBy?: DBT_TaxesOrderByWithRelationInput | DBT_TaxesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DBT_Taxes.
     */
    cursor?: DBT_TaxesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_Taxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_Taxes.
     */
    skip?: number
    distinct?: DBT_TaxesScalarFieldEnum | DBT_TaxesScalarFieldEnum[]
  }

  /**
   * DBT_Taxes create
   */
  export type DBT_TaxesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Taxes
     */
    select?: DBT_TaxesSelect<ExtArgs> | null
    /**
     * The data needed to create a DBT_Taxes.
     */
    data?: XOR<DBT_TaxesCreateInput, DBT_TaxesUncheckedCreateInput>
  }

  /**
   * DBT_Taxes createMany
   */
  export type DBT_TaxesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DBT_Taxes.
     */
    data: DBT_TaxesCreateManyInput | DBT_TaxesCreateManyInput[]
  }

  /**
   * DBT_Taxes update
   */
  export type DBT_TaxesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Taxes
     */
    select?: DBT_TaxesSelect<ExtArgs> | null
    /**
     * The data needed to update a DBT_Taxes.
     */
    data: XOR<DBT_TaxesUpdateInput, DBT_TaxesUncheckedUpdateInput>
    /**
     * Choose, which DBT_Taxes to update.
     */
    where: DBT_TaxesWhereUniqueInput
  }

  /**
   * DBT_Taxes updateMany
   */
  export type DBT_TaxesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DBT_Taxes.
     */
    data: XOR<DBT_TaxesUpdateManyMutationInput, DBT_TaxesUncheckedUpdateManyInput>
    /**
     * Filter which DBT_Taxes to update
     */
    where?: DBT_TaxesWhereInput
  }

  /**
   * DBT_Taxes upsert
   */
  export type DBT_TaxesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Taxes
     */
    select?: DBT_TaxesSelect<ExtArgs> | null
    /**
     * The filter to search for the DBT_Taxes to update in case it exists.
     */
    where: DBT_TaxesWhereUniqueInput
    /**
     * In case the DBT_Taxes found by the `where` argument doesn't exist, create a new DBT_Taxes with this data.
     */
    create: XOR<DBT_TaxesCreateInput, DBT_TaxesUncheckedCreateInput>
    /**
     * In case the DBT_Taxes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DBT_TaxesUpdateInput, DBT_TaxesUncheckedUpdateInput>
  }

  /**
   * DBT_Taxes delete
   */
  export type DBT_TaxesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Taxes
     */
    select?: DBT_TaxesSelect<ExtArgs> | null
    /**
     * Filter which DBT_Taxes to delete.
     */
    where: DBT_TaxesWhereUniqueInput
  }

  /**
   * DBT_Taxes deleteMany
   */
  export type DBT_TaxesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DBT_Taxes to delete
     */
    where?: DBT_TaxesWhereInput
  }

  /**
   * DBT_Taxes without action
   */
  export type DBT_TaxesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Taxes
     */
    select?: DBT_TaxesSelect<ExtArgs> | null
  }


  /**
   * Model DBT_Translations
   */

  export type AggregateDBT_Translations = {
    _count: DBT_TranslationsCountAggregateOutputType | null
    _avg: DBT_TranslationsAvgAggregateOutputType | null
    _sum: DBT_TranslationsSumAggregateOutputType | null
    _min: DBT_TranslationsMinAggregateOutputType | null
    _max: DBT_TranslationsMaxAggregateOutputType | null
  }

  export type DBT_TranslationsAvgAggregateOutputType = {
    ID: number | null
    ID_Language: number | null
  }

  export type DBT_TranslationsSumAggregateOutputType = {
    ID: bigint | null
    ID_Language: bigint | null
  }

  export type DBT_TranslationsMinAggregateOutputType = {
    ID: bigint | null
    ID_Language: bigint | null
    Text: string | null
    Translation: string | null
  }

  export type DBT_TranslationsMaxAggregateOutputType = {
    ID: bigint | null
    ID_Language: bigint | null
    Text: string | null
    Translation: string | null
  }

  export type DBT_TranslationsCountAggregateOutputType = {
    ID: number
    ID_Language: number
    Text: number
    Translation: number
    _all: number
  }


  export type DBT_TranslationsAvgAggregateInputType = {
    ID?: true
    ID_Language?: true
  }

  export type DBT_TranslationsSumAggregateInputType = {
    ID?: true
    ID_Language?: true
  }

  export type DBT_TranslationsMinAggregateInputType = {
    ID?: true
    ID_Language?: true
    Text?: true
    Translation?: true
  }

  export type DBT_TranslationsMaxAggregateInputType = {
    ID?: true
    ID_Language?: true
    Text?: true
    Translation?: true
  }

  export type DBT_TranslationsCountAggregateInputType = {
    ID?: true
    ID_Language?: true
    Text?: true
    Translation?: true
    _all?: true
  }

  export type DBT_TranslationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DBT_Translations to aggregate.
     */
    where?: DBT_TranslationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_Translations to fetch.
     */
    orderBy?: DBT_TranslationsOrderByWithRelationInput | DBT_TranslationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DBT_TranslationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_Translations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_Translations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DBT_Translations
    **/
    _count?: true | DBT_TranslationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DBT_TranslationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DBT_TranslationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DBT_TranslationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DBT_TranslationsMaxAggregateInputType
  }

  export type GetDBT_TranslationsAggregateType<T extends DBT_TranslationsAggregateArgs> = {
        [P in keyof T & keyof AggregateDBT_Translations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDBT_Translations[P]>
      : GetScalarType<T[P], AggregateDBT_Translations[P]>
  }




  export type DBT_TranslationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DBT_TranslationsWhereInput
    orderBy?: DBT_TranslationsOrderByWithAggregationInput | DBT_TranslationsOrderByWithAggregationInput[]
    by: DBT_TranslationsScalarFieldEnum[] | DBT_TranslationsScalarFieldEnum
    having?: DBT_TranslationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DBT_TranslationsCountAggregateInputType | true
    _avg?: DBT_TranslationsAvgAggregateInputType
    _sum?: DBT_TranslationsSumAggregateInputType
    _min?: DBT_TranslationsMinAggregateInputType
    _max?: DBT_TranslationsMaxAggregateInputType
  }

  export type DBT_TranslationsGroupByOutputType = {
    ID: bigint
    ID_Language: bigint | null
    Text: string | null
    Translation: string | null
    _count: DBT_TranslationsCountAggregateOutputType | null
    _avg: DBT_TranslationsAvgAggregateOutputType | null
    _sum: DBT_TranslationsSumAggregateOutputType | null
    _min: DBT_TranslationsMinAggregateOutputType | null
    _max: DBT_TranslationsMaxAggregateOutputType | null
  }

  type GetDBT_TranslationsGroupByPayload<T extends DBT_TranslationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DBT_TranslationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DBT_TranslationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DBT_TranslationsGroupByOutputType[P]>
            : GetScalarType<T[P], DBT_TranslationsGroupByOutputType[P]>
        }
      >
    >


  export type DBT_TranslationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    ID_Language?: boolean
    Text?: boolean
    Translation?: boolean
  }, ExtArgs["result"]["dBT_Translations"]>

  export type DBT_TranslationsSelectScalar = {
    ID?: boolean
    ID_Language?: boolean
    Text?: boolean
    Translation?: boolean
  }



  export type $DBT_TranslationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DBT_Translations"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: bigint
      ID_Language: bigint | null
      Text: string | null
      Translation: string | null
    }, ExtArgs["result"]["dBT_Translations"]>
    composites: {}
  }


  type DBT_TranslationsGetPayload<S extends boolean | null | undefined | DBT_TranslationsDefaultArgs> = $Result.GetResult<Prisma.$DBT_TranslationsPayload, S>

  type DBT_TranslationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DBT_TranslationsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DBT_TranslationsCountAggregateInputType | true
    }

  export interface DBT_TranslationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DBT_Translations'], meta: { name: 'DBT_Translations' } }
    /**
     * Find zero or one DBT_Translations that matches the filter.
     * @param {DBT_TranslationsFindUniqueArgs} args - Arguments to find a DBT_Translations
     * @example
     * // Get one DBT_Translations
     * const dBT_Translations = await prisma.dBT_Translations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DBT_TranslationsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_TranslationsFindUniqueArgs<ExtArgs>>
    ): Prisma__DBT_TranslationsClient<$Result.GetResult<Prisma.$DBT_TranslationsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DBT_Translations that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DBT_TranslationsFindUniqueOrThrowArgs} args - Arguments to find a DBT_Translations
     * @example
     * // Get one DBT_Translations
     * const dBT_Translations = await prisma.dBT_Translations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DBT_TranslationsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_TranslationsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DBT_TranslationsClient<$Result.GetResult<Prisma.$DBT_TranslationsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DBT_Translations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_TranslationsFindFirstArgs} args - Arguments to find a DBT_Translations
     * @example
     * // Get one DBT_Translations
     * const dBT_Translations = await prisma.dBT_Translations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DBT_TranslationsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_TranslationsFindFirstArgs<ExtArgs>>
    ): Prisma__DBT_TranslationsClient<$Result.GetResult<Prisma.$DBT_TranslationsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DBT_Translations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_TranslationsFindFirstOrThrowArgs} args - Arguments to find a DBT_Translations
     * @example
     * // Get one DBT_Translations
     * const dBT_Translations = await prisma.dBT_Translations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DBT_TranslationsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_TranslationsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DBT_TranslationsClient<$Result.GetResult<Prisma.$DBT_TranslationsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DBT_Translations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_TranslationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DBT_Translations
     * const dBT_Translations = await prisma.dBT_Translations.findMany()
     * 
     * // Get first 10 DBT_Translations
     * const dBT_Translations = await prisma.dBT_Translations.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const dBT_TranslationsWithIDOnly = await prisma.dBT_Translations.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends DBT_TranslationsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_TranslationsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DBT_TranslationsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DBT_Translations.
     * @param {DBT_TranslationsCreateArgs} args - Arguments to create a DBT_Translations.
     * @example
     * // Create one DBT_Translations
     * const DBT_Translations = await prisma.dBT_Translations.create({
     *   data: {
     *     // ... data to create a DBT_Translations
     *   }
     * })
     * 
    **/
    create<T extends DBT_TranslationsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_TranslationsCreateArgs<ExtArgs>>
    ): Prisma__DBT_TranslationsClient<$Result.GetResult<Prisma.$DBT_TranslationsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DBT_Translations.
     * @param {DBT_TranslationsCreateManyArgs} args - Arguments to create many DBT_Translations.
     * @example
     * // Create many DBT_Translations
     * const dBT_Translations = await prisma.dBT_Translations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends DBT_TranslationsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_TranslationsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DBT_Translations.
     * @param {DBT_TranslationsDeleteArgs} args - Arguments to delete one DBT_Translations.
     * @example
     * // Delete one DBT_Translations
     * const DBT_Translations = await prisma.dBT_Translations.delete({
     *   where: {
     *     // ... filter to delete one DBT_Translations
     *   }
     * })
     * 
    **/
    delete<T extends DBT_TranslationsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_TranslationsDeleteArgs<ExtArgs>>
    ): Prisma__DBT_TranslationsClient<$Result.GetResult<Prisma.$DBT_TranslationsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DBT_Translations.
     * @param {DBT_TranslationsUpdateArgs} args - Arguments to update one DBT_Translations.
     * @example
     * // Update one DBT_Translations
     * const dBT_Translations = await prisma.dBT_Translations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DBT_TranslationsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_TranslationsUpdateArgs<ExtArgs>>
    ): Prisma__DBT_TranslationsClient<$Result.GetResult<Prisma.$DBT_TranslationsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DBT_Translations.
     * @param {DBT_TranslationsDeleteManyArgs} args - Arguments to filter DBT_Translations to delete.
     * @example
     * // Delete a few DBT_Translations
     * const { count } = await prisma.dBT_Translations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DBT_TranslationsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_TranslationsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DBT_Translations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_TranslationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DBT_Translations
     * const dBT_Translations = await prisma.dBT_Translations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DBT_TranslationsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_TranslationsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DBT_Translations.
     * @param {DBT_TranslationsUpsertArgs} args - Arguments to update or create a DBT_Translations.
     * @example
     * // Update or create a DBT_Translations
     * const dBT_Translations = await prisma.dBT_Translations.upsert({
     *   create: {
     *     // ... data to create a DBT_Translations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DBT_Translations we want to update
     *   }
     * })
    **/
    upsert<T extends DBT_TranslationsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_TranslationsUpsertArgs<ExtArgs>>
    ): Prisma__DBT_TranslationsClient<$Result.GetResult<Prisma.$DBT_TranslationsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DBT_Translations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_TranslationsCountArgs} args - Arguments to filter DBT_Translations to count.
     * @example
     * // Count the number of DBT_Translations
     * const count = await prisma.dBT_Translations.count({
     *   where: {
     *     // ... the filter for the DBT_Translations we want to count
     *   }
     * })
    **/
    count<T extends DBT_TranslationsCountArgs>(
      args?: Subset<T, DBT_TranslationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DBT_TranslationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DBT_Translations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_TranslationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DBT_TranslationsAggregateArgs>(args: Subset<T, DBT_TranslationsAggregateArgs>): Prisma.PrismaPromise<GetDBT_TranslationsAggregateType<T>>

    /**
     * Group by DBT_Translations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_TranslationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DBT_TranslationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DBT_TranslationsGroupByArgs['orderBy'] }
        : { orderBy?: DBT_TranslationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DBT_TranslationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDBT_TranslationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DBT_Translations model
   */
  readonly fields: DBT_TranslationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DBT_Translations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DBT_TranslationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DBT_Translations model
   */ 
  interface DBT_TranslationsFieldRefs {
    readonly ID: FieldRef<"DBT_Translations", 'BigInt'>
    readonly ID_Language: FieldRef<"DBT_Translations", 'BigInt'>
    readonly Text: FieldRef<"DBT_Translations", 'String'>
    readonly Translation: FieldRef<"DBT_Translations", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DBT_Translations findUnique
   */
  export type DBT_TranslationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Translations
     */
    select?: DBT_TranslationsSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Translations to fetch.
     */
    where: DBT_TranslationsWhereUniqueInput
  }

  /**
   * DBT_Translations findUniqueOrThrow
   */
  export type DBT_TranslationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Translations
     */
    select?: DBT_TranslationsSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Translations to fetch.
     */
    where: DBT_TranslationsWhereUniqueInput
  }

  /**
   * DBT_Translations findFirst
   */
  export type DBT_TranslationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Translations
     */
    select?: DBT_TranslationsSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Translations to fetch.
     */
    where?: DBT_TranslationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_Translations to fetch.
     */
    orderBy?: DBT_TranslationsOrderByWithRelationInput | DBT_TranslationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DBT_Translations.
     */
    cursor?: DBT_TranslationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_Translations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_Translations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DBT_Translations.
     */
    distinct?: DBT_TranslationsScalarFieldEnum | DBT_TranslationsScalarFieldEnum[]
  }

  /**
   * DBT_Translations findFirstOrThrow
   */
  export type DBT_TranslationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Translations
     */
    select?: DBT_TranslationsSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Translations to fetch.
     */
    where?: DBT_TranslationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_Translations to fetch.
     */
    orderBy?: DBT_TranslationsOrderByWithRelationInput | DBT_TranslationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DBT_Translations.
     */
    cursor?: DBT_TranslationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_Translations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_Translations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DBT_Translations.
     */
    distinct?: DBT_TranslationsScalarFieldEnum | DBT_TranslationsScalarFieldEnum[]
  }

  /**
   * DBT_Translations findMany
   */
  export type DBT_TranslationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Translations
     */
    select?: DBT_TranslationsSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Translations to fetch.
     */
    where?: DBT_TranslationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_Translations to fetch.
     */
    orderBy?: DBT_TranslationsOrderByWithRelationInput | DBT_TranslationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DBT_Translations.
     */
    cursor?: DBT_TranslationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_Translations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_Translations.
     */
    skip?: number
    distinct?: DBT_TranslationsScalarFieldEnum | DBT_TranslationsScalarFieldEnum[]
  }

  /**
   * DBT_Translations create
   */
  export type DBT_TranslationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Translations
     */
    select?: DBT_TranslationsSelect<ExtArgs> | null
    /**
     * The data needed to create a DBT_Translations.
     */
    data?: XOR<DBT_TranslationsCreateInput, DBT_TranslationsUncheckedCreateInput>
  }

  /**
   * DBT_Translations createMany
   */
  export type DBT_TranslationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DBT_Translations.
     */
    data: DBT_TranslationsCreateManyInput | DBT_TranslationsCreateManyInput[]
  }

  /**
   * DBT_Translations update
   */
  export type DBT_TranslationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Translations
     */
    select?: DBT_TranslationsSelect<ExtArgs> | null
    /**
     * The data needed to update a DBT_Translations.
     */
    data: XOR<DBT_TranslationsUpdateInput, DBT_TranslationsUncheckedUpdateInput>
    /**
     * Choose, which DBT_Translations to update.
     */
    where: DBT_TranslationsWhereUniqueInput
  }

  /**
   * DBT_Translations updateMany
   */
  export type DBT_TranslationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DBT_Translations.
     */
    data: XOR<DBT_TranslationsUpdateManyMutationInput, DBT_TranslationsUncheckedUpdateManyInput>
    /**
     * Filter which DBT_Translations to update
     */
    where?: DBT_TranslationsWhereInput
  }

  /**
   * DBT_Translations upsert
   */
  export type DBT_TranslationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Translations
     */
    select?: DBT_TranslationsSelect<ExtArgs> | null
    /**
     * The filter to search for the DBT_Translations to update in case it exists.
     */
    where: DBT_TranslationsWhereUniqueInput
    /**
     * In case the DBT_Translations found by the `where` argument doesn't exist, create a new DBT_Translations with this data.
     */
    create: XOR<DBT_TranslationsCreateInput, DBT_TranslationsUncheckedCreateInput>
    /**
     * In case the DBT_Translations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DBT_TranslationsUpdateInput, DBT_TranslationsUncheckedUpdateInput>
  }

  /**
   * DBT_Translations delete
   */
  export type DBT_TranslationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Translations
     */
    select?: DBT_TranslationsSelect<ExtArgs> | null
    /**
     * Filter which DBT_Translations to delete.
     */
    where: DBT_TranslationsWhereUniqueInput
  }

  /**
   * DBT_Translations deleteMany
   */
  export type DBT_TranslationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DBT_Translations to delete
     */
    where?: DBT_TranslationsWhereInput
  }

  /**
   * DBT_Translations without action
   */
  export type DBT_TranslationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Translations
     */
    select?: DBT_TranslationsSelect<ExtArgs> | null
  }


  /**
   * Model DBT_Users
   */

  export type AggregateDBT_Users = {
    _count: DBT_UsersCountAggregateOutputType | null
    _avg: DBT_UsersAvgAggregateOutputType | null
    _sum: DBT_UsersSumAggregateOutputType | null
    _min: DBT_UsersMinAggregateOutputType | null
    _max: DBT_UsersMaxAggregateOutputType | null
  }

  export type DBT_UsersAvgAggregateOutputType = {
    ID: number | null
  }

  export type DBT_UsersSumAggregateOutputType = {
    ID: bigint | null
  }

  export type DBT_UsersMinAggregateOutputType = {
    ID: bigint | null
    Active: boolean | null
    Name: string | null
    Password: string | null
  }

  export type DBT_UsersMaxAggregateOutputType = {
    ID: bigint | null
    Active: boolean | null
    Name: string | null
    Password: string | null
  }

  export type DBT_UsersCountAggregateOutputType = {
    ID: number
    Active: number
    Name: number
    Password: number
    _all: number
  }


  export type DBT_UsersAvgAggregateInputType = {
    ID?: true
  }

  export type DBT_UsersSumAggregateInputType = {
    ID?: true
  }

  export type DBT_UsersMinAggregateInputType = {
    ID?: true
    Active?: true
    Name?: true
    Password?: true
  }

  export type DBT_UsersMaxAggregateInputType = {
    ID?: true
    Active?: true
    Name?: true
    Password?: true
  }

  export type DBT_UsersCountAggregateInputType = {
    ID?: true
    Active?: true
    Name?: true
    Password?: true
    _all?: true
  }

  export type DBT_UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DBT_Users to aggregate.
     */
    where?: DBT_UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_Users to fetch.
     */
    orderBy?: DBT_UsersOrderByWithRelationInput | DBT_UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DBT_UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DBT_Users
    **/
    _count?: true | DBT_UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DBT_UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DBT_UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DBT_UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DBT_UsersMaxAggregateInputType
  }

  export type GetDBT_UsersAggregateType<T extends DBT_UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateDBT_Users]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDBT_Users[P]>
      : GetScalarType<T[P], AggregateDBT_Users[P]>
  }




  export type DBT_UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DBT_UsersWhereInput
    orderBy?: DBT_UsersOrderByWithAggregationInput | DBT_UsersOrderByWithAggregationInput[]
    by: DBT_UsersScalarFieldEnum[] | DBT_UsersScalarFieldEnum
    having?: DBT_UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DBT_UsersCountAggregateInputType | true
    _avg?: DBT_UsersAvgAggregateInputType
    _sum?: DBT_UsersSumAggregateInputType
    _min?: DBT_UsersMinAggregateInputType
    _max?: DBT_UsersMaxAggregateInputType
  }

  export type DBT_UsersGroupByOutputType = {
    ID: bigint
    Active: boolean | null
    Name: string | null
    Password: string | null
    _count: DBT_UsersCountAggregateOutputType | null
    _avg: DBT_UsersAvgAggregateOutputType | null
    _sum: DBT_UsersSumAggregateOutputType | null
    _min: DBT_UsersMinAggregateOutputType | null
    _max: DBT_UsersMaxAggregateOutputType | null
  }

  type GetDBT_UsersGroupByPayload<T extends DBT_UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DBT_UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DBT_UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DBT_UsersGroupByOutputType[P]>
            : GetScalarType<T[P], DBT_UsersGroupByOutputType[P]>
        }
      >
    >


  export type DBT_UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    Active?: boolean
    Name?: boolean
    Password?: boolean
  }, ExtArgs["result"]["dBT_Users"]>

  export type DBT_UsersSelectScalar = {
    ID?: boolean
    Active?: boolean
    Name?: boolean
    Password?: boolean
  }



  export type $DBT_UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DBT_Users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: bigint
      Active: boolean | null
      Name: string | null
      Password: string | null
    }, ExtArgs["result"]["dBT_Users"]>
    composites: {}
  }


  type DBT_UsersGetPayload<S extends boolean | null | undefined | DBT_UsersDefaultArgs> = $Result.GetResult<Prisma.$DBT_UsersPayload, S>

  type DBT_UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DBT_UsersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DBT_UsersCountAggregateInputType | true
    }

  export interface DBT_UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DBT_Users'], meta: { name: 'DBT_Users' } }
    /**
     * Find zero or one DBT_Users that matches the filter.
     * @param {DBT_UsersFindUniqueArgs} args - Arguments to find a DBT_Users
     * @example
     * // Get one DBT_Users
     * const dBT_Users = await prisma.dBT_Users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DBT_UsersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_UsersFindUniqueArgs<ExtArgs>>
    ): Prisma__DBT_UsersClient<$Result.GetResult<Prisma.$DBT_UsersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DBT_Users that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DBT_UsersFindUniqueOrThrowArgs} args - Arguments to find a DBT_Users
     * @example
     * // Get one DBT_Users
     * const dBT_Users = await prisma.dBT_Users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DBT_UsersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_UsersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DBT_UsersClient<$Result.GetResult<Prisma.$DBT_UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DBT_Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_UsersFindFirstArgs} args - Arguments to find a DBT_Users
     * @example
     * // Get one DBT_Users
     * const dBT_Users = await prisma.dBT_Users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DBT_UsersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_UsersFindFirstArgs<ExtArgs>>
    ): Prisma__DBT_UsersClient<$Result.GetResult<Prisma.$DBT_UsersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DBT_Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_UsersFindFirstOrThrowArgs} args - Arguments to find a DBT_Users
     * @example
     * // Get one DBT_Users
     * const dBT_Users = await prisma.dBT_Users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DBT_UsersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_UsersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DBT_UsersClient<$Result.GetResult<Prisma.$DBT_UsersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DBT_Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DBT_Users
     * const dBT_Users = await prisma.dBT_Users.findMany()
     * 
     * // Get first 10 DBT_Users
     * const dBT_Users = await prisma.dBT_Users.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const dBT_UsersWithIDOnly = await prisma.dBT_Users.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends DBT_UsersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_UsersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DBT_UsersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DBT_Users.
     * @param {DBT_UsersCreateArgs} args - Arguments to create a DBT_Users.
     * @example
     * // Create one DBT_Users
     * const DBT_Users = await prisma.dBT_Users.create({
     *   data: {
     *     // ... data to create a DBT_Users
     *   }
     * })
     * 
    **/
    create<T extends DBT_UsersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_UsersCreateArgs<ExtArgs>>
    ): Prisma__DBT_UsersClient<$Result.GetResult<Prisma.$DBT_UsersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DBT_Users.
     * @param {DBT_UsersCreateManyArgs} args - Arguments to create many DBT_Users.
     * @example
     * // Create many DBT_Users
     * const dBT_Users = await prisma.dBT_Users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends DBT_UsersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_UsersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DBT_Users.
     * @param {DBT_UsersDeleteArgs} args - Arguments to delete one DBT_Users.
     * @example
     * // Delete one DBT_Users
     * const DBT_Users = await prisma.dBT_Users.delete({
     *   where: {
     *     // ... filter to delete one DBT_Users
     *   }
     * })
     * 
    **/
    delete<T extends DBT_UsersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_UsersDeleteArgs<ExtArgs>>
    ): Prisma__DBT_UsersClient<$Result.GetResult<Prisma.$DBT_UsersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DBT_Users.
     * @param {DBT_UsersUpdateArgs} args - Arguments to update one DBT_Users.
     * @example
     * // Update one DBT_Users
     * const dBT_Users = await prisma.dBT_Users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DBT_UsersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_UsersUpdateArgs<ExtArgs>>
    ): Prisma__DBT_UsersClient<$Result.GetResult<Prisma.$DBT_UsersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DBT_Users.
     * @param {DBT_UsersDeleteManyArgs} args - Arguments to filter DBT_Users to delete.
     * @example
     * // Delete a few DBT_Users
     * const { count } = await prisma.dBT_Users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DBT_UsersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_UsersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DBT_Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DBT_Users
     * const dBT_Users = await prisma.dBT_Users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DBT_UsersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_UsersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DBT_Users.
     * @param {DBT_UsersUpsertArgs} args - Arguments to update or create a DBT_Users.
     * @example
     * // Update or create a DBT_Users
     * const dBT_Users = await prisma.dBT_Users.upsert({
     *   create: {
     *     // ... data to create a DBT_Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DBT_Users we want to update
     *   }
     * })
    **/
    upsert<T extends DBT_UsersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_UsersUpsertArgs<ExtArgs>>
    ): Prisma__DBT_UsersClient<$Result.GetResult<Prisma.$DBT_UsersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DBT_Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_UsersCountArgs} args - Arguments to filter DBT_Users to count.
     * @example
     * // Count the number of DBT_Users
     * const count = await prisma.dBT_Users.count({
     *   where: {
     *     // ... the filter for the DBT_Users we want to count
     *   }
     * })
    **/
    count<T extends DBT_UsersCountArgs>(
      args?: Subset<T, DBT_UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DBT_UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DBT_Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DBT_UsersAggregateArgs>(args: Subset<T, DBT_UsersAggregateArgs>): Prisma.PrismaPromise<GetDBT_UsersAggregateType<T>>

    /**
     * Group by DBT_Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DBT_UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DBT_UsersGroupByArgs['orderBy'] }
        : { orderBy?: DBT_UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DBT_UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDBT_UsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DBT_Users model
   */
  readonly fields: DBT_UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DBT_Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DBT_UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DBT_Users model
   */ 
  interface DBT_UsersFieldRefs {
    readonly ID: FieldRef<"DBT_Users", 'BigInt'>
    readonly Active: FieldRef<"DBT_Users", 'Boolean'>
    readonly Name: FieldRef<"DBT_Users", 'String'>
    readonly Password: FieldRef<"DBT_Users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DBT_Users findUnique
   */
  export type DBT_UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Users
     */
    select?: DBT_UsersSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Users to fetch.
     */
    where: DBT_UsersWhereUniqueInput
  }

  /**
   * DBT_Users findUniqueOrThrow
   */
  export type DBT_UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Users
     */
    select?: DBT_UsersSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Users to fetch.
     */
    where: DBT_UsersWhereUniqueInput
  }

  /**
   * DBT_Users findFirst
   */
  export type DBT_UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Users
     */
    select?: DBT_UsersSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Users to fetch.
     */
    where?: DBT_UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_Users to fetch.
     */
    orderBy?: DBT_UsersOrderByWithRelationInput | DBT_UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DBT_Users.
     */
    cursor?: DBT_UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DBT_Users.
     */
    distinct?: DBT_UsersScalarFieldEnum | DBT_UsersScalarFieldEnum[]
  }

  /**
   * DBT_Users findFirstOrThrow
   */
  export type DBT_UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Users
     */
    select?: DBT_UsersSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Users to fetch.
     */
    where?: DBT_UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_Users to fetch.
     */
    orderBy?: DBT_UsersOrderByWithRelationInput | DBT_UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DBT_Users.
     */
    cursor?: DBT_UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DBT_Users.
     */
    distinct?: DBT_UsersScalarFieldEnum | DBT_UsersScalarFieldEnum[]
  }

  /**
   * DBT_Users findMany
   */
  export type DBT_UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Users
     */
    select?: DBT_UsersSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Users to fetch.
     */
    where?: DBT_UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_Users to fetch.
     */
    orderBy?: DBT_UsersOrderByWithRelationInput | DBT_UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DBT_Users.
     */
    cursor?: DBT_UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_Users.
     */
    skip?: number
    distinct?: DBT_UsersScalarFieldEnum | DBT_UsersScalarFieldEnum[]
  }

  /**
   * DBT_Users create
   */
  export type DBT_UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Users
     */
    select?: DBT_UsersSelect<ExtArgs> | null
    /**
     * The data needed to create a DBT_Users.
     */
    data?: XOR<DBT_UsersCreateInput, DBT_UsersUncheckedCreateInput>
  }

  /**
   * DBT_Users createMany
   */
  export type DBT_UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DBT_Users.
     */
    data: DBT_UsersCreateManyInput | DBT_UsersCreateManyInput[]
  }

  /**
   * DBT_Users update
   */
  export type DBT_UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Users
     */
    select?: DBT_UsersSelect<ExtArgs> | null
    /**
     * The data needed to update a DBT_Users.
     */
    data: XOR<DBT_UsersUpdateInput, DBT_UsersUncheckedUpdateInput>
    /**
     * Choose, which DBT_Users to update.
     */
    where: DBT_UsersWhereUniqueInput
  }

  /**
   * DBT_Users updateMany
   */
  export type DBT_UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DBT_Users.
     */
    data: XOR<DBT_UsersUpdateManyMutationInput, DBT_UsersUncheckedUpdateManyInput>
    /**
     * Filter which DBT_Users to update
     */
    where?: DBT_UsersWhereInput
  }

  /**
   * DBT_Users upsert
   */
  export type DBT_UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Users
     */
    select?: DBT_UsersSelect<ExtArgs> | null
    /**
     * The filter to search for the DBT_Users to update in case it exists.
     */
    where: DBT_UsersWhereUniqueInput
    /**
     * In case the DBT_Users found by the `where` argument doesn't exist, create a new DBT_Users with this data.
     */
    create: XOR<DBT_UsersCreateInput, DBT_UsersUncheckedCreateInput>
    /**
     * In case the DBT_Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DBT_UsersUpdateInput, DBT_UsersUncheckedUpdateInput>
  }

  /**
   * DBT_Users delete
   */
  export type DBT_UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Users
     */
    select?: DBT_UsersSelect<ExtArgs> | null
    /**
     * Filter which DBT_Users to delete.
     */
    where: DBT_UsersWhereUniqueInput
  }

  /**
   * DBT_Users deleteMany
   */
  export type DBT_UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DBT_Users to delete
     */
    where?: DBT_UsersWhereInput
  }

  /**
   * DBT_Users without action
   */
  export type DBT_UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Users
     */
    select?: DBT_UsersSelect<ExtArgs> | null
  }


  /**
   * Model DBT_MealsInGroups
   */

  export type AggregateDBT_MealsInGroups = {
    _count: DBT_MealsInGroupsCountAggregateOutputType | null
    _avg: DBT_MealsInGroupsAvgAggregateOutputType | null
    _sum: DBT_MealsInGroupsSumAggregateOutputType | null
    _min: DBT_MealsInGroupsMinAggregateOutputType | null
    _max: DBT_MealsInGroupsMaxAggregateOutputType | null
  }

  export type DBT_MealsInGroupsAvgAggregateOutputType = {
    ID: number | null
    ID_Group: number | null
    ID_Meal: number | null
    Order: number | null
  }

  export type DBT_MealsInGroupsSumAggregateOutputType = {
    ID: bigint | null
    ID_Group: bigint | null
    ID_Meal: bigint | null
    Order: number | null
  }

  export type DBT_MealsInGroupsMinAggregateOutputType = {
    ID: bigint | null
    ID_Group: bigint | null
    ID_Meal: bigint | null
    Order: number | null
  }

  export type DBT_MealsInGroupsMaxAggregateOutputType = {
    ID: bigint | null
    ID_Group: bigint | null
    ID_Meal: bigint | null
    Order: number | null
  }

  export type DBT_MealsInGroupsCountAggregateOutputType = {
    ID: number
    ID_Group: number
    ID_Meal: number
    Order: number
    _all: number
  }


  export type DBT_MealsInGroupsAvgAggregateInputType = {
    ID?: true
    ID_Group?: true
    ID_Meal?: true
    Order?: true
  }

  export type DBT_MealsInGroupsSumAggregateInputType = {
    ID?: true
    ID_Group?: true
    ID_Meal?: true
    Order?: true
  }

  export type DBT_MealsInGroupsMinAggregateInputType = {
    ID?: true
    ID_Group?: true
    ID_Meal?: true
    Order?: true
  }

  export type DBT_MealsInGroupsMaxAggregateInputType = {
    ID?: true
    ID_Group?: true
    ID_Meal?: true
    Order?: true
  }

  export type DBT_MealsInGroupsCountAggregateInputType = {
    ID?: true
    ID_Group?: true
    ID_Meal?: true
    Order?: true
    _all?: true
  }

  export type DBT_MealsInGroupsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DBT_MealsInGroups to aggregate.
     */
    where?: DBT_MealsInGroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_MealsInGroups to fetch.
     */
    orderBy?: DBT_MealsInGroupsOrderByWithRelationInput | DBT_MealsInGroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DBT_MealsInGroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_MealsInGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_MealsInGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DBT_MealsInGroups
    **/
    _count?: true | DBT_MealsInGroupsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DBT_MealsInGroupsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DBT_MealsInGroupsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DBT_MealsInGroupsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DBT_MealsInGroupsMaxAggregateInputType
  }

  export type GetDBT_MealsInGroupsAggregateType<T extends DBT_MealsInGroupsAggregateArgs> = {
        [P in keyof T & keyof AggregateDBT_MealsInGroups]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDBT_MealsInGroups[P]>
      : GetScalarType<T[P], AggregateDBT_MealsInGroups[P]>
  }




  export type DBT_MealsInGroupsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DBT_MealsInGroupsWhereInput
    orderBy?: DBT_MealsInGroupsOrderByWithAggregationInput | DBT_MealsInGroupsOrderByWithAggregationInput[]
    by: DBT_MealsInGroupsScalarFieldEnum[] | DBT_MealsInGroupsScalarFieldEnum
    having?: DBT_MealsInGroupsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DBT_MealsInGroupsCountAggregateInputType | true
    _avg?: DBT_MealsInGroupsAvgAggregateInputType
    _sum?: DBT_MealsInGroupsSumAggregateInputType
    _min?: DBT_MealsInGroupsMinAggregateInputType
    _max?: DBT_MealsInGroupsMaxAggregateInputType
  }

  export type DBT_MealsInGroupsGroupByOutputType = {
    ID: bigint
    ID_Group: bigint | null
    ID_Meal: bigint | null
    Order: number | null
    _count: DBT_MealsInGroupsCountAggregateOutputType | null
    _avg: DBT_MealsInGroupsAvgAggregateOutputType | null
    _sum: DBT_MealsInGroupsSumAggregateOutputType | null
    _min: DBT_MealsInGroupsMinAggregateOutputType | null
    _max: DBT_MealsInGroupsMaxAggregateOutputType | null
  }

  type GetDBT_MealsInGroupsGroupByPayload<T extends DBT_MealsInGroupsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DBT_MealsInGroupsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DBT_MealsInGroupsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DBT_MealsInGroupsGroupByOutputType[P]>
            : GetScalarType<T[P], DBT_MealsInGroupsGroupByOutputType[P]>
        }
      >
    >


  export type DBT_MealsInGroupsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    ID_Group?: boolean
    ID_Meal?: boolean
    Order?: boolean
  }, ExtArgs["result"]["dBT_MealsInGroups"]>

  export type DBT_MealsInGroupsSelectScalar = {
    ID?: boolean
    ID_Group?: boolean
    ID_Meal?: boolean
    Order?: boolean
  }



  export type $DBT_MealsInGroupsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DBT_MealsInGroups"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: bigint
      ID_Group: bigint | null
      ID_Meal: bigint | null
      Order: number | null
    }, ExtArgs["result"]["dBT_MealsInGroups"]>
    composites: {}
  }


  type DBT_MealsInGroupsGetPayload<S extends boolean | null | undefined | DBT_MealsInGroupsDefaultArgs> = $Result.GetResult<Prisma.$DBT_MealsInGroupsPayload, S>

  type DBT_MealsInGroupsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DBT_MealsInGroupsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DBT_MealsInGroupsCountAggregateInputType | true
    }

  export interface DBT_MealsInGroupsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DBT_MealsInGroups'], meta: { name: 'DBT_MealsInGroups' } }
    /**
     * Find zero or one DBT_MealsInGroups that matches the filter.
     * @param {DBT_MealsInGroupsFindUniqueArgs} args - Arguments to find a DBT_MealsInGroups
     * @example
     * // Get one DBT_MealsInGroups
     * const dBT_MealsInGroups = await prisma.dBT_MealsInGroups.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DBT_MealsInGroupsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_MealsInGroupsFindUniqueArgs<ExtArgs>>
    ): Prisma__DBT_MealsInGroupsClient<$Result.GetResult<Prisma.$DBT_MealsInGroupsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DBT_MealsInGroups that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DBT_MealsInGroupsFindUniqueOrThrowArgs} args - Arguments to find a DBT_MealsInGroups
     * @example
     * // Get one DBT_MealsInGroups
     * const dBT_MealsInGroups = await prisma.dBT_MealsInGroups.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DBT_MealsInGroupsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_MealsInGroupsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DBT_MealsInGroupsClient<$Result.GetResult<Prisma.$DBT_MealsInGroupsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DBT_MealsInGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_MealsInGroupsFindFirstArgs} args - Arguments to find a DBT_MealsInGroups
     * @example
     * // Get one DBT_MealsInGroups
     * const dBT_MealsInGroups = await prisma.dBT_MealsInGroups.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DBT_MealsInGroupsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_MealsInGroupsFindFirstArgs<ExtArgs>>
    ): Prisma__DBT_MealsInGroupsClient<$Result.GetResult<Prisma.$DBT_MealsInGroupsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DBT_MealsInGroups that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_MealsInGroupsFindFirstOrThrowArgs} args - Arguments to find a DBT_MealsInGroups
     * @example
     * // Get one DBT_MealsInGroups
     * const dBT_MealsInGroups = await prisma.dBT_MealsInGroups.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DBT_MealsInGroupsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_MealsInGroupsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DBT_MealsInGroupsClient<$Result.GetResult<Prisma.$DBT_MealsInGroupsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DBT_MealsInGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_MealsInGroupsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DBT_MealsInGroups
     * const dBT_MealsInGroups = await prisma.dBT_MealsInGroups.findMany()
     * 
     * // Get first 10 DBT_MealsInGroups
     * const dBT_MealsInGroups = await prisma.dBT_MealsInGroups.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const dBT_MealsInGroupsWithIDOnly = await prisma.dBT_MealsInGroups.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends DBT_MealsInGroupsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_MealsInGroupsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DBT_MealsInGroupsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DBT_MealsInGroups.
     * @param {DBT_MealsInGroupsCreateArgs} args - Arguments to create a DBT_MealsInGroups.
     * @example
     * // Create one DBT_MealsInGroups
     * const DBT_MealsInGroups = await prisma.dBT_MealsInGroups.create({
     *   data: {
     *     // ... data to create a DBT_MealsInGroups
     *   }
     * })
     * 
    **/
    create<T extends DBT_MealsInGroupsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_MealsInGroupsCreateArgs<ExtArgs>>
    ): Prisma__DBT_MealsInGroupsClient<$Result.GetResult<Prisma.$DBT_MealsInGroupsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DBT_MealsInGroups.
     * @param {DBT_MealsInGroupsCreateManyArgs} args - Arguments to create many DBT_MealsInGroups.
     * @example
     * // Create many DBT_MealsInGroups
     * const dBT_MealsInGroups = await prisma.dBT_MealsInGroups.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends DBT_MealsInGroupsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_MealsInGroupsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DBT_MealsInGroups.
     * @param {DBT_MealsInGroupsDeleteArgs} args - Arguments to delete one DBT_MealsInGroups.
     * @example
     * // Delete one DBT_MealsInGroups
     * const DBT_MealsInGroups = await prisma.dBT_MealsInGroups.delete({
     *   where: {
     *     // ... filter to delete one DBT_MealsInGroups
     *   }
     * })
     * 
    **/
    delete<T extends DBT_MealsInGroupsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_MealsInGroupsDeleteArgs<ExtArgs>>
    ): Prisma__DBT_MealsInGroupsClient<$Result.GetResult<Prisma.$DBT_MealsInGroupsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DBT_MealsInGroups.
     * @param {DBT_MealsInGroupsUpdateArgs} args - Arguments to update one DBT_MealsInGroups.
     * @example
     * // Update one DBT_MealsInGroups
     * const dBT_MealsInGroups = await prisma.dBT_MealsInGroups.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DBT_MealsInGroupsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_MealsInGroupsUpdateArgs<ExtArgs>>
    ): Prisma__DBT_MealsInGroupsClient<$Result.GetResult<Prisma.$DBT_MealsInGroupsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DBT_MealsInGroups.
     * @param {DBT_MealsInGroupsDeleteManyArgs} args - Arguments to filter DBT_MealsInGroups to delete.
     * @example
     * // Delete a few DBT_MealsInGroups
     * const { count } = await prisma.dBT_MealsInGroups.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DBT_MealsInGroupsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_MealsInGroupsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DBT_MealsInGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_MealsInGroupsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DBT_MealsInGroups
     * const dBT_MealsInGroups = await prisma.dBT_MealsInGroups.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DBT_MealsInGroupsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_MealsInGroupsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DBT_MealsInGroups.
     * @param {DBT_MealsInGroupsUpsertArgs} args - Arguments to update or create a DBT_MealsInGroups.
     * @example
     * // Update or create a DBT_MealsInGroups
     * const dBT_MealsInGroups = await prisma.dBT_MealsInGroups.upsert({
     *   create: {
     *     // ... data to create a DBT_MealsInGroups
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DBT_MealsInGroups we want to update
     *   }
     * })
    **/
    upsert<T extends DBT_MealsInGroupsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_MealsInGroupsUpsertArgs<ExtArgs>>
    ): Prisma__DBT_MealsInGroupsClient<$Result.GetResult<Prisma.$DBT_MealsInGroupsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DBT_MealsInGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_MealsInGroupsCountArgs} args - Arguments to filter DBT_MealsInGroups to count.
     * @example
     * // Count the number of DBT_MealsInGroups
     * const count = await prisma.dBT_MealsInGroups.count({
     *   where: {
     *     // ... the filter for the DBT_MealsInGroups we want to count
     *   }
     * })
    **/
    count<T extends DBT_MealsInGroupsCountArgs>(
      args?: Subset<T, DBT_MealsInGroupsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DBT_MealsInGroupsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DBT_MealsInGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_MealsInGroupsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DBT_MealsInGroupsAggregateArgs>(args: Subset<T, DBT_MealsInGroupsAggregateArgs>): Prisma.PrismaPromise<GetDBT_MealsInGroupsAggregateType<T>>

    /**
     * Group by DBT_MealsInGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_MealsInGroupsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DBT_MealsInGroupsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DBT_MealsInGroupsGroupByArgs['orderBy'] }
        : { orderBy?: DBT_MealsInGroupsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DBT_MealsInGroupsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDBT_MealsInGroupsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DBT_MealsInGroups model
   */
  readonly fields: DBT_MealsInGroupsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DBT_MealsInGroups.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DBT_MealsInGroupsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DBT_MealsInGroups model
   */ 
  interface DBT_MealsInGroupsFieldRefs {
    readonly ID: FieldRef<"DBT_MealsInGroups", 'BigInt'>
    readonly ID_Group: FieldRef<"DBT_MealsInGroups", 'BigInt'>
    readonly ID_Meal: FieldRef<"DBT_MealsInGroups", 'BigInt'>
    readonly Order: FieldRef<"DBT_MealsInGroups", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DBT_MealsInGroups findUnique
   */
  export type DBT_MealsInGroupsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_MealsInGroups
     */
    select?: DBT_MealsInGroupsSelect<ExtArgs> | null
    /**
     * Filter, which DBT_MealsInGroups to fetch.
     */
    where: DBT_MealsInGroupsWhereUniqueInput
  }

  /**
   * DBT_MealsInGroups findUniqueOrThrow
   */
  export type DBT_MealsInGroupsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_MealsInGroups
     */
    select?: DBT_MealsInGroupsSelect<ExtArgs> | null
    /**
     * Filter, which DBT_MealsInGroups to fetch.
     */
    where: DBT_MealsInGroupsWhereUniqueInput
  }

  /**
   * DBT_MealsInGroups findFirst
   */
  export type DBT_MealsInGroupsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_MealsInGroups
     */
    select?: DBT_MealsInGroupsSelect<ExtArgs> | null
    /**
     * Filter, which DBT_MealsInGroups to fetch.
     */
    where?: DBT_MealsInGroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_MealsInGroups to fetch.
     */
    orderBy?: DBT_MealsInGroupsOrderByWithRelationInput | DBT_MealsInGroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DBT_MealsInGroups.
     */
    cursor?: DBT_MealsInGroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_MealsInGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_MealsInGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DBT_MealsInGroups.
     */
    distinct?: DBT_MealsInGroupsScalarFieldEnum | DBT_MealsInGroupsScalarFieldEnum[]
  }

  /**
   * DBT_MealsInGroups findFirstOrThrow
   */
  export type DBT_MealsInGroupsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_MealsInGroups
     */
    select?: DBT_MealsInGroupsSelect<ExtArgs> | null
    /**
     * Filter, which DBT_MealsInGroups to fetch.
     */
    where?: DBT_MealsInGroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_MealsInGroups to fetch.
     */
    orderBy?: DBT_MealsInGroupsOrderByWithRelationInput | DBT_MealsInGroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DBT_MealsInGroups.
     */
    cursor?: DBT_MealsInGroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_MealsInGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_MealsInGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DBT_MealsInGroups.
     */
    distinct?: DBT_MealsInGroupsScalarFieldEnum | DBT_MealsInGroupsScalarFieldEnum[]
  }

  /**
   * DBT_MealsInGroups findMany
   */
  export type DBT_MealsInGroupsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_MealsInGroups
     */
    select?: DBT_MealsInGroupsSelect<ExtArgs> | null
    /**
     * Filter, which DBT_MealsInGroups to fetch.
     */
    where?: DBT_MealsInGroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_MealsInGroups to fetch.
     */
    orderBy?: DBT_MealsInGroupsOrderByWithRelationInput | DBT_MealsInGroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DBT_MealsInGroups.
     */
    cursor?: DBT_MealsInGroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_MealsInGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_MealsInGroups.
     */
    skip?: number
    distinct?: DBT_MealsInGroupsScalarFieldEnum | DBT_MealsInGroupsScalarFieldEnum[]
  }

  /**
   * DBT_MealsInGroups create
   */
  export type DBT_MealsInGroupsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_MealsInGroups
     */
    select?: DBT_MealsInGroupsSelect<ExtArgs> | null
    /**
     * The data needed to create a DBT_MealsInGroups.
     */
    data?: XOR<DBT_MealsInGroupsCreateInput, DBT_MealsInGroupsUncheckedCreateInput>
  }

  /**
   * DBT_MealsInGroups createMany
   */
  export type DBT_MealsInGroupsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DBT_MealsInGroups.
     */
    data: DBT_MealsInGroupsCreateManyInput | DBT_MealsInGroupsCreateManyInput[]
  }

  /**
   * DBT_MealsInGroups update
   */
  export type DBT_MealsInGroupsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_MealsInGroups
     */
    select?: DBT_MealsInGroupsSelect<ExtArgs> | null
    /**
     * The data needed to update a DBT_MealsInGroups.
     */
    data: XOR<DBT_MealsInGroupsUpdateInput, DBT_MealsInGroupsUncheckedUpdateInput>
    /**
     * Choose, which DBT_MealsInGroups to update.
     */
    where: DBT_MealsInGroupsWhereUniqueInput
  }

  /**
   * DBT_MealsInGroups updateMany
   */
  export type DBT_MealsInGroupsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DBT_MealsInGroups.
     */
    data: XOR<DBT_MealsInGroupsUpdateManyMutationInput, DBT_MealsInGroupsUncheckedUpdateManyInput>
    /**
     * Filter which DBT_MealsInGroups to update
     */
    where?: DBT_MealsInGroupsWhereInput
  }

  /**
   * DBT_MealsInGroups upsert
   */
  export type DBT_MealsInGroupsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_MealsInGroups
     */
    select?: DBT_MealsInGroupsSelect<ExtArgs> | null
    /**
     * The filter to search for the DBT_MealsInGroups to update in case it exists.
     */
    where: DBT_MealsInGroupsWhereUniqueInput
    /**
     * In case the DBT_MealsInGroups found by the `where` argument doesn't exist, create a new DBT_MealsInGroups with this data.
     */
    create: XOR<DBT_MealsInGroupsCreateInput, DBT_MealsInGroupsUncheckedCreateInput>
    /**
     * In case the DBT_MealsInGroups was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DBT_MealsInGroupsUpdateInput, DBT_MealsInGroupsUncheckedUpdateInput>
  }

  /**
   * DBT_MealsInGroups delete
   */
  export type DBT_MealsInGroupsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_MealsInGroups
     */
    select?: DBT_MealsInGroupsSelect<ExtArgs> | null
    /**
     * Filter which DBT_MealsInGroups to delete.
     */
    where: DBT_MealsInGroupsWhereUniqueInput
  }

  /**
   * DBT_MealsInGroups deleteMany
   */
  export type DBT_MealsInGroupsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DBT_MealsInGroups to delete
     */
    where?: DBT_MealsInGroupsWhereInput
  }

  /**
   * DBT_MealsInGroups without action
   */
  export type DBT_MealsInGroupsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_MealsInGroups
     */
    select?: DBT_MealsInGroupsSelect<ExtArgs> | null
  }


  /**
   * Model DBT_Variants
   */

  export type AggregateDBT_Variants = {
    _count: DBT_VariantsCountAggregateOutputType | null
    _avg: DBT_VariantsAvgAggregateOutputType | null
    _sum: DBT_VariantsSumAggregateOutputType | null
    _min: DBT_VariantsMinAggregateOutputType | null
    _max: DBT_VariantsMaxAggregateOutputType | null
  }

  export type DBT_VariantsAvgAggregateOutputType = {
    ID: number | null
    ID_Meal: number | null
  }

  export type DBT_VariantsSumAggregateOutputType = {
    ID: bigint | null
    ID_Meal: bigint | null
  }

  export type DBT_VariantsMinAggregateOutputType = {
    ID: bigint | null
    Active: boolean | null
    Available: boolean | null
    ID_Meal: bigint | null
    MealVariant: string | null
  }

  export type DBT_VariantsMaxAggregateOutputType = {
    ID: bigint | null
    Active: boolean | null
    Available: boolean | null
    ID_Meal: bigint | null
    MealVariant: string | null
  }

  export type DBT_VariantsCountAggregateOutputType = {
    ID: number
    Active: number
    Available: number
    ID_Meal: number
    MealVariant: number
    _all: number
  }


  export type DBT_VariantsAvgAggregateInputType = {
    ID?: true
    ID_Meal?: true
  }

  export type DBT_VariantsSumAggregateInputType = {
    ID?: true
    ID_Meal?: true
  }

  export type DBT_VariantsMinAggregateInputType = {
    ID?: true
    Active?: true
    Available?: true
    ID_Meal?: true
    MealVariant?: true
  }

  export type DBT_VariantsMaxAggregateInputType = {
    ID?: true
    Active?: true
    Available?: true
    ID_Meal?: true
    MealVariant?: true
  }

  export type DBT_VariantsCountAggregateInputType = {
    ID?: true
    Active?: true
    Available?: true
    ID_Meal?: true
    MealVariant?: true
    _all?: true
  }

  export type DBT_VariantsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DBT_Variants to aggregate.
     */
    where?: DBT_VariantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_Variants to fetch.
     */
    orderBy?: DBT_VariantsOrderByWithRelationInput | DBT_VariantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DBT_VariantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_Variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DBT_Variants
    **/
    _count?: true | DBT_VariantsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DBT_VariantsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DBT_VariantsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DBT_VariantsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DBT_VariantsMaxAggregateInputType
  }

  export type GetDBT_VariantsAggregateType<T extends DBT_VariantsAggregateArgs> = {
        [P in keyof T & keyof AggregateDBT_Variants]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDBT_Variants[P]>
      : GetScalarType<T[P], AggregateDBT_Variants[P]>
  }




  export type DBT_VariantsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DBT_VariantsWhereInput
    orderBy?: DBT_VariantsOrderByWithAggregationInput | DBT_VariantsOrderByWithAggregationInput[]
    by: DBT_VariantsScalarFieldEnum[] | DBT_VariantsScalarFieldEnum
    having?: DBT_VariantsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DBT_VariantsCountAggregateInputType | true
    _avg?: DBT_VariantsAvgAggregateInputType
    _sum?: DBT_VariantsSumAggregateInputType
    _min?: DBT_VariantsMinAggregateInputType
    _max?: DBT_VariantsMaxAggregateInputType
  }

  export type DBT_VariantsGroupByOutputType = {
    ID: bigint
    Active: boolean
    Available: boolean | null
    ID_Meal: bigint | null
    MealVariant: string | null
    _count: DBT_VariantsCountAggregateOutputType | null
    _avg: DBT_VariantsAvgAggregateOutputType | null
    _sum: DBT_VariantsSumAggregateOutputType | null
    _min: DBT_VariantsMinAggregateOutputType | null
    _max: DBT_VariantsMaxAggregateOutputType | null
  }

  type GetDBT_VariantsGroupByPayload<T extends DBT_VariantsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DBT_VariantsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DBT_VariantsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DBT_VariantsGroupByOutputType[P]>
            : GetScalarType<T[P], DBT_VariantsGroupByOutputType[P]>
        }
      >
    >


  export type DBT_VariantsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    Active?: boolean
    Available?: boolean
    ID_Meal?: boolean
    MealVariant?: boolean
  }, ExtArgs["result"]["dBT_Variants"]>

  export type DBT_VariantsSelectScalar = {
    ID?: boolean
    Active?: boolean
    Available?: boolean
    ID_Meal?: boolean
    MealVariant?: boolean
  }



  export type $DBT_VariantsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DBT_Variants"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: bigint
      Active: boolean
      Available: boolean | null
      ID_Meal: bigint | null
      MealVariant: string | null
    }, ExtArgs["result"]["dBT_Variants"]>
    composites: {}
  }


  type DBT_VariantsGetPayload<S extends boolean | null | undefined | DBT_VariantsDefaultArgs> = $Result.GetResult<Prisma.$DBT_VariantsPayload, S>

  type DBT_VariantsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DBT_VariantsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DBT_VariantsCountAggregateInputType | true
    }

  export interface DBT_VariantsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DBT_Variants'], meta: { name: 'DBT_Variants' } }
    /**
     * Find zero or one DBT_Variants that matches the filter.
     * @param {DBT_VariantsFindUniqueArgs} args - Arguments to find a DBT_Variants
     * @example
     * // Get one DBT_Variants
     * const dBT_Variants = await prisma.dBT_Variants.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DBT_VariantsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_VariantsFindUniqueArgs<ExtArgs>>
    ): Prisma__DBT_VariantsClient<$Result.GetResult<Prisma.$DBT_VariantsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DBT_Variants that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DBT_VariantsFindUniqueOrThrowArgs} args - Arguments to find a DBT_Variants
     * @example
     * // Get one DBT_Variants
     * const dBT_Variants = await prisma.dBT_Variants.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DBT_VariantsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_VariantsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DBT_VariantsClient<$Result.GetResult<Prisma.$DBT_VariantsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DBT_Variants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_VariantsFindFirstArgs} args - Arguments to find a DBT_Variants
     * @example
     * // Get one DBT_Variants
     * const dBT_Variants = await prisma.dBT_Variants.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DBT_VariantsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_VariantsFindFirstArgs<ExtArgs>>
    ): Prisma__DBT_VariantsClient<$Result.GetResult<Prisma.$DBT_VariantsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DBT_Variants that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_VariantsFindFirstOrThrowArgs} args - Arguments to find a DBT_Variants
     * @example
     * // Get one DBT_Variants
     * const dBT_Variants = await prisma.dBT_Variants.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DBT_VariantsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_VariantsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DBT_VariantsClient<$Result.GetResult<Prisma.$DBT_VariantsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DBT_Variants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_VariantsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DBT_Variants
     * const dBT_Variants = await prisma.dBT_Variants.findMany()
     * 
     * // Get first 10 DBT_Variants
     * const dBT_Variants = await prisma.dBT_Variants.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const dBT_VariantsWithIDOnly = await prisma.dBT_Variants.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends DBT_VariantsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_VariantsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DBT_VariantsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DBT_Variants.
     * @param {DBT_VariantsCreateArgs} args - Arguments to create a DBT_Variants.
     * @example
     * // Create one DBT_Variants
     * const DBT_Variants = await prisma.dBT_Variants.create({
     *   data: {
     *     // ... data to create a DBT_Variants
     *   }
     * })
     * 
    **/
    create<T extends DBT_VariantsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_VariantsCreateArgs<ExtArgs>>
    ): Prisma__DBT_VariantsClient<$Result.GetResult<Prisma.$DBT_VariantsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DBT_Variants.
     * @param {DBT_VariantsCreateManyArgs} args - Arguments to create many DBT_Variants.
     * @example
     * // Create many DBT_Variants
     * const dBT_Variants = await prisma.dBT_Variants.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends DBT_VariantsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_VariantsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DBT_Variants.
     * @param {DBT_VariantsDeleteArgs} args - Arguments to delete one DBT_Variants.
     * @example
     * // Delete one DBT_Variants
     * const DBT_Variants = await prisma.dBT_Variants.delete({
     *   where: {
     *     // ... filter to delete one DBT_Variants
     *   }
     * })
     * 
    **/
    delete<T extends DBT_VariantsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_VariantsDeleteArgs<ExtArgs>>
    ): Prisma__DBT_VariantsClient<$Result.GetResult<Prisma.$DBT_VariantsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DBT_Variants.
     * @param {DBT_VariantsUpdateArgs} args - Arguments to update one DBT_Variants.
     * @example
     * // Update one DBT_Variants
     * const dBT_Variants = await prisma.dBT_Variants.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DBT_VariantsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_VariantsUpdateArgs<ExtArgs>>
    ): Prisma__DBT_VariantsClient<$Result.GetResult<Prisma.$DBT_VariantsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DBT_Variants.
     * @param {DBT_VariantsDeleteManyArgs} args - Arguments to filter DBT_Variants to delete.
     * @example
     * // Delete a few DBT_Variants
     * const { count } = await prisma.dBT_Variants.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DBT_VariantsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DBT_VariantsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DBT_Variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_VariantsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DBT_Variants
     * const dBT_Variants = await prisma.dBT_Variants.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DBT_VariantsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_VariantsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DBT_Variants.
     * @param {DBT_VariantsUpsertArgs} args - Arguments to update or create a DBT_Variants.
     * @example
     * // Update or create a DBT_Variants
     * const dBT_Variants = await prisma.dBT_Variants.upsert({
     *   create: {
     *     // ... data to create a DBT_Variants
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DBT_Variants we want to update
     *   }
     * })
    **/
    upsert<T extends DBT_VariantsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DBT_VariantsUpsertArgs<ExtArgs>>
    ): Prisma__DBT_VariantsClient<$Result.GetResult<Prisma.$DBT_VariantsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DBT_Variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_VariantsCountArgs} args - Arguments to filter DBT_Variants to count.
     * @example
     * // Count the number of DBT_Variants
     * const count = await prisma.dBT_Variants.count({
     *   where: {
     *     // ... the filter for the DBT_Variants we want to count
     *   }
     * })
    **/
    count<T extends DBT_VariantsCountArgs>(
      args?: Subset<T, DBT_VariantsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DBT_VariantsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DBT_Variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_VariantsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DBT_VariantsAggregateArgs>(args: Subset<T, DBT_VariantsAggregateArgs>): Prisma.PrismaPromise<GetDBT_VariantsAggregateType<T>>

    /**
     * Group by DBT_Variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DBT_VariantsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DBT_VariantsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DBT_VariantsGroupByArgs['orderBy'] }
        : { orderBy?: DBT_VariantsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DBT_VariantsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDBT_VariantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DBT_Variants model
   */
  readonly fields: DBT_VariantsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DBT_Variants.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DBT_VariantsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DBT_Variants model
   */ 
  interface DBT_VariantsFieldRefs {
    readonly ID: FieldRef<"DBT_Variants", 'BigInt'>
    readonly Active: FieldRef<"DBT_Variants", 'Boolean'>
    readonly Available: FieldRef<"DBT_Variants", 'Boolean'>
    readonly ID_Meal: FieldRef<"DBT_Variants", 'BigInt'>
    readonly MealVariant: FieldRef<"DBT_Variants", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DBT_Variants findUnique
   */
  export type DBT_VariantsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Variants
     */
    select?: DBT_VariantsSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Variants to fetch.
     */
    where: DBT_VariantsWhereUniqueInput
  }

  /**
   * DBT_Variants findUniqueOrThrow
   */
  export type DBT_VariantsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Variants
     */
    select?: DBT_VariantsSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Variants to fetch.
     */
    where: DBT_VariantsWhereUniqueInput
  }

  /**
   * DBT_Variants findFirst
   */
  export type DBT_VariantsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Variants
     */
    select?: DBT_VariantsSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Variants to fetch.
     */
    where?: DBT_VariantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_Variants to fetch.
     */
    orderBy?: DBT_VariantsOrderByWithRelationInput | DBT_VariantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DBT_Variants.
     */
    cursor?: DBT_VariantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_Variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DBT_Variants.
     */
    distinct?: DBT_VariantsScalarFieldEnum | DBT_VariantsScalarFieldEnum[]
  }

  /**
   * DBT_Variants findFirstOrThrow
   */
  export type DBT_VariantsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Variants
     */
    select?: DBT_VariantsSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Variants to fetch.
     */
    where?: DBT_VariantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_Variants to fetch.
     */
    orderBy?: DBT_VariantsOrderByWithRelationInput | DBT_VariantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DBT_Variants.
     */
    cursor?: DBT_VariantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_Variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DBT_Variants.
     */
    distinct?: DBT_VariantsScalarFieldEnum | DBT_VariantsScalarFieldEnum[]
  }

  /**
   * DBT_Variants findMany
   */
  export type DBT_VariantsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Variants
     */
    select?: DBT_VariantsSelect<ExtArgs> | null
    /**
     * Filter, which DBT_Variants to fetch.
     */
    where?: DBT_VariantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DBT_Variants to fetch.
     */
    orderBy?: DBT_VariantsOrderByWithRelationInput | DBT_VariantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DBT_Variants.
     */
    cursor?: DBT_VariantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DBT_Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DBT_Variants.
     */
    skip?: number
    distinct?: DBT_VariantsScalarFieldEnum | DBT_VariantsScalarFieldEnum[]
  }

  /**
   * DBT_Variants create
   */
  export type DBT_VariantsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Variants
     */
    select?: DBT_VariantsSelect<ExtArgs> | null
    /**
     * The data needed to create a DBT_Variants.
     */
    data?: XOR<DBT_VariantsCreateInput, DBT_VariantsUncheckedCreateInput>
  }

  /**
   * DBT_Variants createMany
   */
  export type DBT_VariantsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DBT_Variants.
     */
    data: DBT_VariantsCreateManyInput | DBT_VariantsCreateManyInput[]
  }

  /**
   * DBT_Variants update
   */
  export type DBT_VariantsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Variants
     */
    select?: DBT_VariantsSelect<ExtArgs> | null
    /**
     * The data needed to update a DBT_Variants.
     */
    data: XOR<DBT_VariantsUpdateInput, DBT_VariantsUncheckedUpdateInput>
    /**
     * Choose, which DBT_Variants to update.
     */
    where: DBT_VariantsWhereUniqueInput
  }

  /**
   * DBT_Variants updateMany
   */
  export type DBT_VariantsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DBT_Variants.
     */
    data: XOR<DBT_VariantsUpdateManyMutationInput, DBT_VariantsUncheckedUpdateManyInput>
    /**
     * Filter which DBT_Variants to update
     */
    where?: DBT_VariantsWhereInput
  }

  /**
   * DBT_Variants upsert
   */
  export type DBT_VariantsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Variants
     */
    select?: DBT_VariantsSelect<ExtArgs> | null
    /**
     * The filter to search for the DBT_Variants to update in case it exists.
     */
    where: DBT_VariantsWhereUniqueInput
    /**
     * In case the DBT_Variants found by the `where` argument doesn't exist, create a new DBT_Variants with this data.
     */
    create: XOR<DBT_VariantsCreateInput, DBT_VariantsUncheckedCreateInput>
    /**
     * In case the DBT_Variants was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DBT_VariantsUpdateInput, DBT_VariantsUncheckedUpdateInput>
  }

  /**
   * DBT_Variants delete
   */
  export type DBT_VariantsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Variants
     */
    select?: DBT_VariantsSelect<ExtArgs> | null
    /**
     * Filter which DBT_Variants to delete.
     */
    where: DBT_VariantsWhereUniqueInput
  }

  /**
   * DBT_Variants deleteMany
   */
  export type DBT_VariantsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DBT_Variants to delete
     */
    where?: DBT_VariantsWhereInput
  }

  /**
   * DBT_Variants without action
   */
  export type DBT_VariantsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DBT_Variants
     */
    select?: DBT_VariantsSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DBT_CustomerScalarFieldEnum: {
    ID: 'ID',
    Active: 'Active',
    Customer: 'Customer',
    Name: 'Name',
    Surname: 'Surname',
    PhoneNr: 'PhoneNr',
    Email: 'Email',
    Discount: 'Discount'
  };

  export type DBT_CustomerScalarFieldEnum = (typeof DBT_CustomerScalarFieldEnum)[keyof typeof DBT_CustomerScalarFieldEnum]


  export const DBT_LanguagesScalarFieldEnum: {
    ID: 'ID',
    Active: 'Active',
    Language: 'Language',
    DisplayText: 'DisplayText',
    Flag: 'Flag'
  };

  export type DBT_LanguagesScalarFieldEnum = (typeof DBT_LanguagesScalarFieldEnum)[keyof typeof DBT_LanguagesScalarFieldEnum]


  export const DBT_LayoutsScalarFieldEnum: {
    ID: 'ID',
    Active: 'Active',
    Type: 'Type',
    Name: 'Name',
    Xml: 'Xml'
  };

  export type DBT_LayoutsScalarFieldEnum = (typeof DBT_LayoutsScalarFieldEnum)[keyof typeof DBT_LayoutsScalarFieldEnum]


  export const DBT_MealGroupsScalarFieldEnum: {
    ID: 'ID',
    Active: 'Active',
    MealGroup: 'MealGroup',
    ID_Layout: 'ID_Layout',
    BackgroudPicture: 'BackgroudPicture',
    Order: 'Order'
  };

  export type DBT_MealGroupsScalarFieldEnum = (typeof DBT_MealGroupsScalarFieldEnum)[keyof typeof DBT_MealGroupsScalarFieldEnum]


  export const DBT_MealsScalarFieldEnum: {
    ID: 'ID',
    Active: 'Active',
    Kitchen: 'Kitchen',
    Available: 'Available',
    Meal: 'Meal',
    MealDescription: 'MealDescription',
    Price: 'Price',
    IsCombo: 'IsCombo',
    Picture: 'Picture',
    PictureDescription: 'PictureDescription'
  };

  export type DBT_MealsScalarFieldEnum = (typeof DBT_MealsScalarFieldEnum)[keyof typeof DBT_MealsScalarFieldEnum]


  export const DBT_MenuSetUpScalarFieldEnum: {
    ID: 'ID',
    Active: 'Active',
    LogoImage: 'LogoImage',
    BackgroundColor: 'BackgroundColor',
    HeaderText: 'HeaderText',
    FooterText: 'FooterText'
  };

  export type DBT_MenuSetUpScalarFieldEnum = (typeof DBT_MenuSetUpScalarFieldEnum)[keyof typeof DBT_MenuSetUpScalarFieldEnum]


  export const DBT_OrderItemsScalarFieldEnum: {
    ID: 'ID',
    ID_Order: 'ID_Order',
    Canceled: 'Canceled',
    ID_Meal: 'ID_Meal',
    ID_Variant: 'ID_Variant',
    Price: 'Price',
    TimeOfOrder: 'TimeOfOrder',
    ID_User: 'ID_User',
    Time_Prepared: 'Time_Prepared',
    Time_Delivered: 'Time_Delivered'
  };

  export type DBT_OrderItemsScalarFieldEnum = (typeof DBT_OrderItemsScalarFieldEnum)[keyof typeof DBT_OrderItemsScalarFieldEnum]


  export const DBT_OrdersScalarFieldEnum: {
    ID: 'ID',
    ID_Table: 'ID_Table',
    OrderName: 'OrderName',
    ID_Customer: 'ID_Customer',
    DateTime: 'DateTime',
    Canceled: 'Canceled',
    Price: 'Price',
    OrderClosed: 'OrderClosed'
  };

  export type DBT_OrdersScalarFieldEnum = (typeof DBT_OrdersScalarFieldEnum)[keyof typeof DBT_OrdersScalarFieldEnum]


  export const DBT_PaymentMethodsScalarFieldEnum: {
    ID: 'ID',
    Active: 'Active',
    PaymentMethod: 'PaymentMethod'
  };

  export type DBT_PaymentMethodsScalarFieldEnum = (typeof DBT_PaymentMethodsScalarFieldEnum)[keyof typeof DBT_PaymentMethodsScalarFieldEnum]


  export const DBT_TablesScalarFieldEnum: {
    ID: 'ID',
    Active: 'Active',
    TableName: 'TableName'
  };

  export type DBT_TablesScalarFieldEnum = (typeof DBT_TablesScalarFieldEnum)[keyof typeof DBT_TablesScalarFieldEnum]


  export const DBT_TaxesScalarFieldEnum: {
    ID: 'ID',
    Active: 'Active',
    ByDefault: 'ByDefault',
    TaxName: 'TaxName',
    TaxDescription: 'TaxDescription',
    Percentage: 'Percentage',
    Value: 'Value'
  };

  export type DBT_TaxesScalarFieldEnum = (typeof DBT_TaxesScalarFieldEnum)[keyof typeof DBT_TaxesScalarFieldEnum]


  export const DBT_TranslationsScalarFieldEnum: {
    ID: 'ID',
    ID_Language: 'ID_Language',
    Text: 'Text',
    Translation: 'Translation'
  };

  export type DBT_TranslationsScalarFieldEnum = (typeof DBT_TranslationsScalarFieldEnum)[keyof typeof DBT_TranslationsScalarFieldEnum]


  export const DBT_UsersScalarFieldEnum: {
    ID: 'ID',
    Active: 'Active',
    Name: 'Name',
    Password: 'Password'
  };

  export type DBT_UsersScalarFieldEnum = (typeof DBT_UsersScalarFieldEnum)[keyof typeof DBT_UsersScalarFieldEnum]


  export const DBT_MealsInGroupsScalarFieldEnum: {
    ID: 'ID',
    ID_Group: 'ID_Group',
    ID_Meal: 'ID_Meal',
    Order: 'Order'
  };

  export type DBT_MealsInGroupsScalarFieldEnum = (typeof DBT_MealsInGroupsScalarFieldEnum)[keyof typeof DBT_MealsInGroupsScalarFieldEnum]


  export const DBT_VariantsScalarFieldEnum: {
    ID: 'ID',
    Active: 'Active',
    Available: 'Available',
    ID_Meal: 'ID_Meal',
    MealVariant: 'MealVariant'
  };

  export type DBT_VariantsScalarFieldEnum = (typeof DBT_VariantsScalarFieldEnum)[keyof typeof DBT_VariantsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type DBT_CustomerWhereInput = {
    AND?: DBT_CustomerWhereInput | DBT_CustomerWhereInput[]
    OR?: DBT_CustomerWhereInput[]
    NOT?: DBT_CustomerWhereInput | DBT_CustomerWhereInput[]
    ID?: BigIntFilter<"DBT_Customer"> | bigint | number
    Active?: BoolNullableFilter<"DBT_Customer"> | boolean | null
    Customer?: StringNullableFilter<"DBT_Customer"> | string | null
    Name?: StringNullableFilter<"DBT_Customer"> | string | null
    Surname?: StringNullableFilter<"DBT_Customer"> | string | null
    PhoneNr?: StringNullableFilter<"DBT_Customer"> | string | null
    Email?: StringNullableFilter<"DBT_Customer"> | string | null
    Discount?: DecimalNullableFilter<"DBT_Customer"> | Decimal | DecimalJsLike | number | string | null
  }

  export type DBT_CustomerOrderByWithRelationInput = {
    ID?: SortOrder
    Active?: SortOrderInput | SortOrder
    Customer?: SortOrderInput | SortOrder
    Name?: SortOrderInput | SortOrder
    Surname?: SortOrderInput | SortOrder
    PhoneNr?: SortOrderInput | SortOrder
    Email?: SortOrderInput | SortOrder
    Discount?: SortOrderInput | SortOrder
  }

  export type DBT_CustomerWhereUniqueInput = Prisma.AtLeast<{
    ID?: bigint | number
    AND?: DBT_CustomerWhereInput | DBT_CustomerWhereInput[]
    OR?: DBT_CustomerWhereInput[]
    NOT?: DBT_CustomerWhereInput | DBT_CustomerWhereInput[]
    Active?: BoolNullableFilter<"DBT_Customer"> | boolean | null
    Customer?: StringNullableFilter<"DBT_Customer"> | string | null
    Name?: StringNullableFilter<"DBT_Customer"> | string | null
    Surname?: StringNullableFilter<"DBT_Customer"> | string | null
    PhoneNr?: StringNullableFilter<"DBT_Customer"> | string | null
    Email?: StringNullableFilter<"DBT_Customer"> | string | null
    Discount?: DecimalNullableFilter<"DBT_Customer"> | Decimal | DecimalJsLike | number | string | null
  }, "ID">

  export type DBT_CustomerOrderByWithAggregationInput = {
    ID?: SortOrder
    Active?: SortOrderInput | SortOrder
    Customer?: SortOrderInput | SortOrder
    Name?: SortOrderInput | SortOrder
    Surname?: SortOrderInput | SortOrder
    PhoneNr?: SortOrderInput | SortOrder
    Email?: SortOrderInput | SortOrder
    Discount?: SortOrderInput | SortOrder
    _count?: DBT_CustomerCountOrderByAggregateInput
    _avg?: DBT_CustomerAvgOrderByAggregateInput
    _max?: DBT_CustomerMaxOrderByAggregateInput
    _min?: DBT_CustomerMinOrderByAggregateInput
    _sum?: DBT_CustomerSumOrderByAggregateInput
  }

  export type DBT_CustomerScalarWhereWithAggregatesInput = {
    AND?: DBT_CustomerScalarWhereWithAggregatesInput | DBT_CustomerScalarWhereWithAggregatesInput[]
    OR?: DBT_CustomerScalarWhereWithAggregatesInput[]
    NOT?: DBT_CustomerScalarWhereWithAggregatesInput | DBT_CustomerScalarWhereWithAggregatesInput[]
    ID?: BigIntWithAggregatesFilter<"DBT_Customer"> | bigint | number
    Active?: BoolNullableWithAggregatesFilter<"DBT_Customer"> | boolean | null
    Customer?: StringNullableWithAggregatesFilter<"DBT_Customer"> | string | null
    Name?: StringNullableWithAggregatesFilter<"DBT_Customer"> | string | null
    Surname?: StringNullableWithAggregatesFilter<"DBT_Customer"> | string | null
    PhoneNr?: StringNullableWithAggregatesFilter<"DBT_Customer"> | string | null
    Email?: StringNullableWithAggregatesFilter<"DBT_Customer"> | string | null
    Discount?: DecimalNullableWithAggregatesFilter<"DBT_Customer"> | Decimal | DecimalJsLike | number | string | null
  }

  export type DBT_LanguagesWhereInput = {
    AND?: DBT_LanguagesWhereInput | DBT_LanguagesWhereInput[]
    OR?: DBT_LanguagesWhereInput[]
    NOT?: DBT_LanguagesWhereInput | DBT_LanguagesWhereInput[]
    ID?: BigIntFilter<"DBT_Languages"> | bigint | number
    Active?: BoolFilter<"DBT_Languages"> | boolean
    Language?: StringNullableFilter<"DBT_Languages"> | string | null
    DisplayText?: StringNullableFilter<"DBT_Languages"> | string | null
    Flag?: BytesNullableFilter<"DBT_Languages"> | Buffer | null
  }

  export type DBT_LanguagesOrderByWithRelationInput = {
    ID?: SortOrder
    Active?: SortOrder
    Language?: SortOrderInput | SortOrder
    DisplayText?: SortOrderInput | SortOrder
    Flag?: SortOrderInput | SortOrder
  }

  export type DBT_LanguagesWhereUniqueInput = Prisma.AtLeast<{
    ID?: bigint | number
    AND?: DBT_LanguagesWhereInput | DBT_LanguagesWhereInput[]
    OR?: DBT_LanguagesWhereInput[]
    NOT?: DBT_LanguagesWhereInput | DBT_LanguagesWhereInput[]
    Active?: BoolFilter<"DBT_Languages"> | boolean
    Language?: StringNullableFilter<"DBT_Languages"> | string | null
    DisplayText?: StringNullableFilter<"DBT_Languages"> | string | null
    Flag?: BytesNullableFilter<"DBT_Languages"> | Buffer | null
  }, "ID">

  export type DBT_LanguagesOrderByWithAggregationInput = {
    ID?: SortOrder
    Active?: SortOrder
    Language?: SortOrderInput | SortOrder
    DisplayText?: SortOrderInput | SortOrder
    Flag?: SortOrderInput | SortOrder
    _count?: DBT_LanguagesCountOrderByAggregateInput
    _avg?: DBT_LanguagesAvgOrderByAggregateInput
    _max?: DBT_LanguagesMaxOrderByAggregateInput
    _min?: DBT_LanguagesMinOrderByAggregateInput
    _sum?: DBT_LanguagesSumOrderByAggregateInput
  }

  export type DBT_LanguagesScalarWhereWithAggregatesInput = {
    AND?: DBT_LanguagesScalarWhereWithAggregatesInput | DBT_LanguagesScalarWhereWithAggregatesInput[]
    OR?: DBT_LanguagesScalarWhereWithAggregatesInput[]
    NOT?: DBT_LanguagesScalarWhereWithAggregatesInput | DBT_LanguagesScalarWhereWithAggregatesInput[]
    ID?: BigIntWithAggregatesFilter<"DBT_Languages"> | bigint | number
    Active?: BoolWithAggregatesFilter<"DBT_Languages"> | boolean
    Language?: StringNullableWithAggregatesFilter<"DBT_Languages"> | string | null
    DisplayText?: StringNullableWithAggregatesFilter<"DBT_Languages"> | string | null
    Flag?: BytesNullableWithAggregatesFilter<"DBT_Languages"> | Buffer | null
  }

  export type DBT_LayoutsWhereInput = {
    AND?: DBT_LayoutsWhereInput | DBT_LayoutsWhereInput[]
    OR?: DBT_LayoutsWhereInput[]
    NOT?: DBT_LayoutsWhereInput | DBT_LayoutsWhereInput[]
    ID?: BigIntFilter<"DBT_Layouts"> | bigint | number
    Active?: BoolFilter<"DBT_Layouts"> | boolean
    Type?: StringNullableFilter<"DBT_Layouts"> | string | null
    Name?: StringNullableFilter<"DBT_Layouts"> | string | null
    Xml?: StringNullableFilter<"DBT_Layouts"> | string | null
  }

  export type DBT_LayoutsOrderByWithRelationInput = {
    ID?: SortOrder
    Active?: SortOrder
    Type?: SortOrderInput | SortOrder
    Name?: SortOrderInput | SortOrder
    Xml?: SortOrderInput | SortOrder
  }

  export type DBT_LayoutsWhereUniqueInput = Prisma.AtLeast<{
    ID?: bigint | number
    AND?: DBT_LayoutsWhereInput | DBT_LayoutsWhereInput[]
    OR?: DBT_LayoutsWhereInput[]
    NOT?: DBT_LayoutsWhereInput | DBT_LayoutsWhereInput[]
    Active?: BoolFilter<"DBT_Layouts"> | boolean
    Type?: StringNullableFilter<"DBT_Layouts"> | string | null
    Name?: StringNullableFilter<"DBT_Layouts"> | string | null
    Xml?: StringNullableFilter<"DBT_Layouts"> | string | null
  }, "ID">

  export type DBT_LayoutsOrderByWithAggregationInput = {
    ID?: SortOrder
    Active?: SortOrder
    Type?: SortOrderInput | SortOrder
    Name?: SortOrderInput | SortOrder
    Xml?: SortOrderInput | SortOrder
    _count?: DBT_LayoutsCountOrderByAggregateInput
    _avg?: DBT_LayoutsAvgOrderByAggregateInput
    _max?: DBT_LayoutsMaxOrderByAggregateInput
    _min?: DBT_LayoutsMinOrderByAggregateInput
    _sum?: DBT_LayoutsSumOrderByAggregateInput
  }

  export type DBT_LayoutsScalarWhereWithAggregatesInput = {
    AND?: DBT_LayoutsScalarWhereWithAggregatesInput | DBT_LayoutsScalarWhereWithAggregatesInput[]
    OR?: DBT_LayoutsScalarWhereWithAggregatesInput[]
    NOT?: DBT_LayoutsScalarWhereWithAggregatesInput | DBT_LayoutsScalarWhereWithAggregatesInput[]
    ID?: BigIntWithAggregatesFilter<"DBT_Layouts"> | bigint | number
    Active?: BoolWithAggregatesFilter<"DBT_Layouts"> | boolean
    Type?: StringNullableWithAggregatesFilter<"DBT_Layouts"> | string | null
    Name?: StringNullableWithAggregatesFilter<"DBT_Layouts"> | string | null
    Xml?: StringNullableWithAggregatesFilter<"DBT_Layouts"> | string | null
  }

  export type DBT_MealGroupsWhereInput = {
    AND?: DBT_MealGroupsWhereInput | DBT_MealGroupsWhereInput[]
    OR?: DBT_MealGroupsWhereInput[]
    NOT?: DBT_MealGroupsWhereInput | DBT_MealGroupsWhereInput[]
    ID?: BigIntFilter<"DBT_MealGroups"> | bigint | number
    Active?: BoolFilter<"DBT_MealGroups"> | boolean
    MealGroup?: StringNullableFilter<"DBT_MealGroups"> | string | null
    ID_Layout?: BigIntNullableFilter<"DBT_MealGroups"> | bigint | number | null
    BackgroudPicture?: BytesNullableFilter<"DBT_MealGroups"> | Buffer | null
    Order?: IntNullableFilter<"DBT_MealGroups"> | number | null
  }

  export type DBT_MealGroupsOrderByWithRelationInput = {
    ID?: SortOrder
    Active?: SortOrder
    MealGroup?: SortOrderInput | SortOrder
    ID_Layout?: SortOrderInput | SortOrder
    BackgroudPicture?: SortOrderInput | SortOrder
    Order?: SortOrderInput | SortOrder
  }

  export type DBT_MealGroupsWhereUniqueInput = Prisma.AtLeast<{
    ID?: bigint | number
    AND?: DBT_MealGroupsWhereInput | DBT_MealGroupsWhereInput[]
    OR?: DBT_MealGroupsWhereInput[]
    NOT?: DBT_MealGroupsWhereInput | DBT_MealGroupsWhereInput[]
    Active?: BoolFilter<"DBT_MealGroups"> | boolean
    MealGroup?: StringNullableFilter<"DBT_MealGroups"> | string | null
    ID_Layout?: BigIntNullableFilter<"DBT_MealGroups"> | bigint | number | null
    BackgroudPicture?: BytesNullableFilter<"DBT_MealGroups"> | Buffer | null
    Order?: IntNullableFilter<"DBT_MealGroups"> | number | null
  }, "ID">

  export type DBT_MealGroupsOrderByWithAggregationInput = {
    ID?: SortOrder
    Active?: SortOrder
    MealGroup?: SortOrderInput | SortOrder
    ID_Layout?: SortOrderInput | SortOrder
    BackgroudPicture?: SortOrderInput | SortOrder
    Order?: SortOrderInput | SortOrder
    _count?: DBT_MealGroupsCountOrderByAggregateInput
    _avg?: DBT_MealGroupsAvgOrderByAggregateInput
    _max?: DBT_MealGroupsMaxOrderByAggregateInput
    _min?: DBT_MealGroupsMinOrderByAggregateInput
    _sum?: DBT_MealGroupsSumOrderByAggregateInput
  }

  export type DBT_MealGroupsScalarWhereWithAggregatesInput = {
    AND?: DBT_MealGroupsScalarWhereWithAggregatesInput | DBT_MealGroupsScalarWhereWithAggregatesInput[]
    OR?: DBT_MealGroupsScalarWhereWithAggregatesInput[]
    NOT?: DBT_MealGroupsScalarWhereWithAggregatesInput | DBT_MealGroupsScalarWhereWithAggregatesInput[]
    ID?: BigIntWithAggregatesFilter<"DBT_MealGroups"> | bigint | number
    Active?: BoolWithAggregatesFilter<"DBT_MealGroups"> | boolean
    MealGroup?: StringNullableWithAggregatesFilter<"DBT_MealGroups"> | string | null
    ID_Layout?: BigIntNullableWithAggregatesFilter<"DBT_MealGroups"> | bigint | number | null
    BackgroudPicture?: BytesNullableWithAggregatesFilter<"DBT_MealGroups"> | Buffer | null
    Order?: IntNullableWithAggregatesFilter<"DBT_MealGroups"> | number | null
  }

  export type DBT_MealsWhereInput = {
    AND?: DBT_MealsWhereInput | DBT_MealsWhereInput[]
    OR?: DBT_MealsWhereInput[]
    NOT?: DBT_MealsWhereInput | DBT_MealsWhereInput[]
    ID?: BigIntFilter<"DBT_Meals"> | bigint | number
    Active?: BoolFilter<"DBT_Meals"> | boolean
    Kitchen?: BoolNullableFilter<"DBT_Meals"> | boolean | null
    Available?: BoolNullableFilter<"DBT_Meals"> | boolean | null
    Meal?: StringNullableFilter<"DBT_Meals"> | string | null
    MealDescription?: StringNullableFilter<"DBT_Meals"> | string | null
    Price?: DecimalNullableFilter<"DBT_Meals"> | Decimal | DecimalJsLike | number | string | null
    IsCombo?: BoolFilter<"DBT_Meals"> | boolean
    Picture?: BytesNullableFilter<"DBT_Meals"> | Buffer | null
    PictureDescription?: StringNullableFilter<"DBT_Meals"> | string | null
  }

  export type DBT_MealsOrderByWithRelationInput = {
    ID?: SortOrder
    Active?: SortOrder
    Kitchen?: SortOrderInput | SortOrder
    Available?: SortOrderInput | SortOrder
    Meal?: SortOrderInput | SortOrder
    MealDescription?: SortOrderInput | SortOrder
    Price?: SortOrderInput | SortOrder
    IsCombo?: SortOrder
    Picture?: SortOrderInput | SortOrder
    PictureDescription?: SortOrderInput | SortOrder
  }

  export type DBT_MealsWhereUniqueInput = Prisma.AtLeast<{
    ID?: bigint | number
    AND?: DBT_MealsWhereInput | DBT_MealsWhereInput[]
    OR?: DBT_MealsWhereInput[]
    NOT?: DBT_MealsWhereInput | DBT_MealsWhereInput[]
    Active?: BoolFilter<"DBT_Meals"> | boolean
    Kitchen?: BoolNullableFilter<"DBT_Meals"> | boolean | null
    Available?: BoolNullableFilter<"DBT_Meals"> | boolean | null
    Meal?: StringNullableFilter<"DBT_Meals"> | string | null
    MealDescription?: StringNullableFilter<"DBT_Meals"> | string | null
    Price?: DecimalNullableFilter<"DBT_Meals"> | Decimal | DecimalJsLike | number | string | null
    IsCombo?: BoolFilter<"DBT_Meals"> | boolean
    Picture?: BytesNullableFilter<"DBT_Meals"> | Buffer | null
    PictureDescription?: StringNullableFilter<"DBT_Meals"> | string | null
  }, "ID">

  export type DBT_MealsOrderByWithAggregationInput = {
    ID?: SortOrder
    Active?: SortOrder
    Kitchen?: SortOrderInput | SortOrder
    Available?: SortOrderInput | SortOrder
    Meal?: SortOrderInput | SortOrder
    MealDescription?: SortOrderInput | SortOrder
    Price?: SortOrderInput | SortOrder
    IsCombo?: SortOrder
    Picture?: SortOrderInput | SortOrder
    PictureDescription?: SortOrderInput | SortOrder
    _count?: DBT_MealsCountOrderByAggregateInput
    _avg?: DBT_MealsAvgOrderByAggregateInput
    _max?: DBT_MealsMaxOrderByAggregateInput
    _min?: DBT_MealsMinOrderByAggregateInput
    _sum?: DBT_MealsSumOrderByAggregateInput
  }

  export type DBT_MealsScalarWhereWithAggregatesInput = {
    AND?: DBT_MealsScalarWhereWithAggregatesInput | DBT_MealsScalarWhereWithAggregatesInput[]
    OR?: DBT_MealsScalarWhereWithAggregatesInput[]
    NOT?: DBT_MealsScalarWhereWithAggregatesInput | DBT_MealsScalarWhereWithAggregatesInput[]
    ID?: BigIntWithAggregatesFilter<"DBT_Meals"> | bigint | number
    Active?: BoolWithAggregatesFilter<"DBT_Meals"> | boolean
    Kitchen?: BoolNullableWithAggregatesFilter<"DBT_Meals"> | boolean | null
    Available?: BoolNullableWithAggregatesFilter<"DBT_Meals"> | boolean | null
    Meal?: StringNullableWithAggregatesFilter<"DBT_Meals"> | string | null
    MealDescription?: StringNullableWithAggregatesFilter<"DBT_Meals"> | string | null
    Price?: DecimalNullableWithAggregatesFilter<"DBT_Meals"> | Decimal | DecimalJsLike | number | string | null
    IsCombo?: BoolWithAggregatesFilter<"DBT_Meals"> | boolean
    Picture?: BytesNullableWithAggregatesFilter<"DBT_Meals"> | Buffer | null
    PictureDescription?: StringNullableWithAggregatesFilter<"DBT_Meals"> | string | null
  }

  export type DBT_MenuSetUpWhereInput = {
    AND?: DBT_MenuSetUpWhereInput | DBT_MenuSetUpWhereInput[]
    OR?: DBT_MenuSetUpWhereInput[]
    NOT?: DBT_MenuSetUpWhereInput | DBT_MenuSetUpWhereInput[]
    ID?: BigIntFilter<"DBT_MenuSetUp"> | bigint | number
    Active?: BoolFilter<"DBT_MenuSetUp"> | boolean
    LogoImage?: BytesNullableFilter<"DBT_MenuSetUp"> | Buffer | null
    BackgroundColor?: BigIntNullableFilter<"DBT_MenuSetUp"> | bigint | number | null
    HeaderText?: StringNullableFilter<"DBT_MenuSetUp"> | string | null
    FooterText?: StringNullableFilter<"DBT_MenuSetUp"> | string | null
  }

  export type DBT_MenuSetUpOrderByWithRelationInput = {
    ID?: SortOrder
    Active?: SortOrder
    LogoImage?: SortOrderInput | SortOrder
    BackgroundColor?: SortOrderInput | SortOrder
    HeaderText?: SortOrderInput | SortOrder
    FooterText?: SortOrderInput | SortOrder
  }

  export type DBT_MenuSetUpWhereUniqueInput = Prisma.AtLeast<{
    ID?: bigint | number
    AND?: DBT_MenuSetUpWhereInput | DBT_MenuSetUpWhereInput[]
    OR?: DBT_MenuSetUpWhereInput[]
    NOT?: DBT_MenuSetUpWhereInput | DBT_MenuSetUpWhereInput[]
    Active?: BoolFilter<"DBT_MenuSetUp"> | boolean
    LogoImage?: BytesNullableFilter<"DBT_MenuSetUp"> | Buffer | null
    BackgroundColor?: BigIntNullableFilter<"DBT_MenuSetUp"> | bigint | number | null
    HeaderText?: StringNullableFilter<"DBT_MenuSetUp"> | string | null
    FooterText?: StringNullableFilter<"DBT_MenuSetUp"> | string | null
  }, "ID">

  export type DBT_MenuSetUpOrderByWithAggregationInput = {
    ID?: SortOrder
    Active?: SortOrder
    LogoImage?: SortOrderInput | SortOrder
    BackgroundColor?: SortOrderInput | SortOrder
    HeaderText?: SortOrderInput | SortOrder
    FooterText?: SortOrderInput | SortOrder
    _count?: DBT_MenuSetUpCountOrderByAggregateInput
    _avg?: DBT_MenuSetUpAvgOrderByAggregateInput
    _max?: DBT_MenuSetUpMaxOrderByAggregateInput
    _min?: DBT_MenuSetUpMinOrderByAggregateInput
    _sum?: DBT_MenuSetUpSumOrderByAggregateInput
  }

  export type DBT_MenuSetUpScalarWhereWithAggregatesInput = {
    AND?: DBT_MenuSetUpScalarWhereWithAggregatesInput | DBT_MenuSetUpScalarWhereWithAggregatesInput[]
    OR?: DBT_MenuSetUpScalarWhereWithAggregatesInput[]
    NOT?: DBT_MenuSetUpScalarWhereWithAggregatesInput | DBT_MenuSetUpScalarWhereWithAggregatesInput[]
    ID?: BigIntWithAggregatesFilter<"DBT_MenuSetUp"> | bigint | number
    Active?: BoolWithAggregatesFilter<"DBT_MenuSetUp"> | boolean
    LogoImage?: BytesNullableWithAggregatesFilter<"DBT_MenuSetUp"> | Buffer | null
    BackgroundColor?: BigIntNullableWithAggregatesFilter<"DBT_MenuSetUp"> | bigint | number | null
    HeaderText?: StringNullableWithAggregatesFilter<"DBT_MenuSetUp"> | string | null
    FooterText?: StringNullableWithAggregatesFilter<"DBT_MenuSetUp"> | string | null
  }

  export type DBT_OrderItemsWhereInput = {
    AND?: DBT_OrderItemsWhereInput | DBT_OrderItemsWhereInput[]
    OR?: DBT_OrderItemsWhereInput[]
    NOT?: DBT_OrderItemsWhereInput | DBT_OrderItemsWhereInput[]
    ID?: BigIntFilter<"DBT_OrderItems"> | bigint | number
    ID_Order?: StringNullableFilter<"DBT_OrderItems"> | string | null
    Canceled?: BoolNullableFilter<"DBT_OrderItems"> | boolean | null
    ID_Meal?: BigIntNullableFilter<"DBT_OrderItems"> | bigint | number | null
    ID_Variant?: BigIntNullableFilter<"DBT_OrderItems"> | bigint | number | null
    Price?: DecimalNullableFilter<"DBT_OrderItems"> | Decimal | DecimalJsLike | number | string | null
    TimeOfOrder?: DateTimeNullableFilter<"DBT_OrderItems"> | Date | string | null
    ID_User?: BigIntNullableFilter<"DBT_OrderItems"> | bigint | number | null
    Time_Prepared?: DateTimeNullableFilter<"DBT_OrderItems"> | Date | string | null
    Time_Delivered?: DateTimeNullableFilter<"DBT_OrderItems"> | Date | string | null
  }

  export type DBT_OrderItemsOrderByWithRelationInput = {
    ID?: SortOrder
    ID_Order?: SortOrderInput | SortOrder
    Canceled?: SortOrderInput | SortOrder
    ID_Meal?: SortOrderInput | SortOrder
    ID_Variant?: SortOrderInput | SortOrder
    Price?: SortOrderInput | SortOrder
    TimeOfOrder?: SortOrderInput | SortOrder
    ID_User?: SortOrderInput | SortOrder
    Time_Prepared?: SortOrderInput | SortOrder
    Time_Delivered?: SortOrderInput | SortOrder
  }

  export type DBT_OrderItemsWhereUniqueInput = Prisma.AtLeast<{
    ID?: bigint | number
    AND?: DBT_OrderItemsWhereInput | DBT_OrderItemsWhereInput[]
    OR?: DBT_OrderItemsWhereInput[]
    NOT?: DBT_OrderItemsWhereInput | DBT_OrderItemsWhereInput[]
    ID_Order?: StringNullableFilter<"DBT_OrderItems"> | string | null
    Canceled?: BoolNullableFilter<"DBT_OrderItems"> | boolean | null
    ID_Meal?: BigIntNullableFilter<"DBT_OrderItems"> | bigint | number | null
    ID_Variant?: BigIntNullableFilter<"DBT_OrderItems"> | bigint | number | null
    Price?: DecimalNullableFilter<"DBT_OrderItems"> | Decimal | DecimalJsLike | number | string | null
    TimeOfOrder?: DateTimeNullableFilter<"DBT_OrderItems"> | Date | string | null
    ID_User?: BigIntNullableFilter<"DBT_OrderItems"> | bigint | number | null
    Time_Prepared?: DateTimeNullableFilter<"DBT_OrderItems"> | Date | string | null
    Time_Delivered?: DateTimeNullableFilter<"DBT_OrderItems"> | Date | string | null
  }, "ID">

  export type DBT_OrderItemsOrderByWithAggregationInput = {
    ID?: SortOrder
    ID_Order?: SortOrderInput | SortOrder
    Canceled?: SortOrderInput | SortOrder
    ID_Meal?: SortOrderInput | SortOrder
    ID_Variant?: SortOrderInput | SortOrder
    Price?: SortOrderInput | SortOrder
    TimeOfOrder?: SortOrderInput | SortOrder
    ID_User?: SortOrderInput | SortOrder
    Time_Prepared?: SortOrderInput | SortOrder
    Time_Delivered?: SortOrderInput | SortOrder
    _count?: DBT_OrderItemsCountOrderByAggregateInput
    _avg?: DBT_OrderItemsAvgOrderByAggregateInput
    _max?: DBT_OrderItemsMaxOrderByAggregateInput
    _min?: DBT_OrderItemsMinOrderByAggregateInput
    _sum?: DBT_OrderItemsSumOrderByAggregateInput
  }

  export type DBT_OrderItemsScalarWhereWithAggregatesInput = {
    AND?: DBT_OrderItemsScalarWhereWithAggregatesInput | DBT_OrderItemsScalarWhereWithAggregatesInput[]
    OR?: DBT_OrderItemsScalarWhereWithAggregatesInput[]
    NOT?: DBT_OrderItemsScalarWhereWithAggregatesInput | DBT_OrderItemsScalarWhereWithAggregatesInput[]
    ID?: BigIntWithAggregatesFilter<"DBT_OrderItems"> | bigint | number
    ID_Order?: StringNullableWithAggregatesFilter<"DBT_OrderItems"> | string | null
    Canceled?: BoolNullableWithAggregatesFilter<"DBT_OrderItems"> | boolean | null
    ID_Meal?: BigIntNullableWithAggregatesFilter<"DBT_OrderItems"> | bigint | number | null
    ID_Variant?: BigIntNullableWithAggregatesFilter<"DBT_OrderItems"> | bigint | number | null
    Price?: DecimalNullableWithAggregatesFilter<"DBT_OrderItems"> | Decimal | DecimalJsLike | number | string | null
    TimeOfOrder?: DateTimeNullableWithAggregatesFilter<"DBT_OrderItems"> | Date | string | null
    ID_User?: BigIntNullableWithAggregatesFilter<"DBT_OrderItems"> | bigint | number | null
    Time_Prepared?: DateTimeNullableWithAggregatesFilter<"DBT_OrderItems"> | Date | string | null
    Time_Delivered?: DateTimeNullableWithAggregatesFilter<"DBT_OrderItems"> | Date | string | null
  }

  export type DBT_OrdersWhereInput = {
    AND?: DBT_OrdersWhereInput | DBT_OrdersWhereInput[]
    OR?: DBT_OrdersWhereInput[]
    NOT?: DBT_OrdersWhereInput | DBT_OrdersWhereInput[]
    ID?: BigIntFilter<"DBT_Orders"> | bigint | number
    ID_Table?: BigIntNullableFilter<"DBT_Orders"> | bigint | number | null
    OrderName?: StringNullableFilter<"DBT_Orders"> | string | null
    ID_Customer?: BigIntNullableFilter<"DBT_Orders"> | bigint | number | null
    DateTime?: DateTimeNullableFilter<"DBT_Orders"> | Date | string | null
    Canceled?: BoolNullableFilter<"DBT_Orders"> | boolean | null
    Price?: DecimalNullableFilter<"DBT_Orders"> | Decimal | DecimalJsLike | number | string | null
    OrderClosed?: BoolNullableFilter<"DBT_Orders"> | boolean | null
  }

  export type DBT_OrdersOrderByWithRelationInput = {
    ID?: SortOrder
    ID_Table?: SortOrderInput | SortOrder
    OrderName?: SortOrderInput | SortOrder
    ID_Customer?: SortOrderInput | SortOrder
    DateTime?: SortOrderInput | SortOrder
    Canceled?: SortOrderInput | SortOrder
    Price?: SortOrderInput | SortOrder
    OrderClosed?: SortOrderInput | SortOrder
  }

  export type DBT_OrdersWhereUniqueInput = Prisma.AtLeast<{
    ID?: bigint | number
    AND?: DBT_OrdersWhereInput | DBT_OrdersWhereInput[]
    OR?: DBT_OrdersWhereInput[]
    NOT?: DBT_OrdersWhereInput | DBT_OrdersWhereInput[]
    ID_Table?: BigIntNullableFilter<"DBT_Orders"> | bigint | number | null
    OrderName?: StringNullableFilter<"DBT_Orders"> | string | null
    ID_Customer?: BigIntNullableFilter<"DBT_Orders"> | bigint | number | null
    DateTime?: DateTimeNullableFilter<"DBT_Orders"> | Date | string | null
    Canceled?: BoolNullableFilter<"DBT_Orders"> | boolean | null
    Price?: DecimalNullableFilter<"DBT_Orders"> | Decimal | DecimalJsLike | number | string | null
    OrderClosed?: BoolNullableFilter<"DBT_Orders"> | boolean | null
  }, "ID">

  export type DBT_OrdersOrderByWithAggregationInput = {
    ID?: SortOrder
    ID_Table?: SortOrderInput | SortOrder
    OrderName?: SortOrderInput | SortOrder
    ID_Customer?: SortOrderInput | SortOrder
    DateTime?: SortOrderInput | SortOrder
    Canceled?: SortOrderInput | SortOrder
    Price?: SortOrderInput | SortOrder
    OrderClosed?: SortOrderInput | SortOrder
    _count?: DBT_OrdersCountOrderByAggregateInput
    _avg?: DBT_OrdersAvgOrderByAggregateInput
    _max?: DBT_OrdersMaxOrderByAggregateInput
    _min?: DBT_OrdersMinOrderByAggregateInput
    _sum?: DBT_OrdersSumOrderByAggregateInput
  }

  export type DBT_OrdersScalarWhereWithAggregatesInput = {
    AND?: DBT_OrdersScalarWhereWithAggregatesInput | DBT_OrdersScalarWhereWithAggregatesInput[]
    OR?: DBT_OrdersScalarWhereWithAggregatesInput[]
    NOT?: DBT_OrdersScalarWhereWithAggregatesInput | DBT_OrdersScalarWhereWithAggregatesInput[]
    ID?: BigIntWithAggregatesFilter<"DBT_Orders"> | bigint | number
    ID_Table?: BigIntNullableWithAggregatesFilter<"DBT_Orders"> | bigint | number | null
    OrderName?: StringNullableWithAggregatesFilter<"DBT_Orders"> | string | null
    ID_Customer?: BigIntNullableWithAggregatesFilter<"DBT_Orders"> | bigint | number | null
    DateTime?: DateTimeNullableWithAggregatesFilter<"DBT_Orders"> | Date | string | null
    Canceled?: BoolNullableWithAggregatesFilter<"DBT_Orders"> | boolean | null
    Price?: DecimalNullableWithAggregatesFilter<"DBT_Orders"> | Decimal | DecimalJsLike | number | string | null
    OrderClosed?: BoolNullableWithAggregatesFilter<"DBT_Orders"> | boolean | null
  }

  export type DBT_PaymentMethodsWhereInput = {
    AND?: DBT_PaymentMethodsWhereInput | DBT_PaymentMethodsWhereInput[]
    OR?: DBT_PaymentMethodsWhereInput[]
    NOT?: DBT_PaymentMethodsWhereInput | DBT_PaymentMethodsWhereInput[]
    ID?: BigIntFilter<"DBT_PaymentMethods"> | bigint | number
    Active?: BoolNullableFilter<"DBT_PaymentMethods"> | boolean | null
    PaymentMethod?: StringNullableFilter<"DBT_PaymentMethods"> | string | null
  }

  export type DBT_PaymentMethodsOrderByWithRelationInput = {
    ID?: SortOrder
    Active?: SortOrderInput | SortOrder
    PaymentMethod?: SortOrderInput | SortOrder
  }

  export type DBT_PaymentMethodsWhereUniqueInput = Prisma.AtLeast<{
    ID?: bigint | number
    AND?: DBT_PaymentMethodsWhereInput | DBT_PaymentMethodsWhereInput[]
    OR?: DBT_PaymentMethodsWhereInput[]
    NOT?: DBT_PaymentMethodsWhereInput | DBT_PaymentMethodsWhereInput[]
    Active?: BoolNullableFilter<"DBT_PaymentMethods"> | boolean | null
    PaymentMethod?: StringNullableFilter<"DBT_PaymentMethods"> | string | null
  }, "ID">

  export type DBT_PaymentMethodsOrderByWithAggregationInput = {
    ID?: SortOrder
    Active?: SortOrderInput | SortOrder
    PaymentMethod?: SortOrderInput | SortOrder
    _count?: DBT_PaymentMethodsCountOrderByAggregateInput
    _avg?: DBT_PaymentMethodsAvgOrderByAggregateInput
    _max?: DBT_PaymentMethodsMaxOrderByAggregateInput
    _min?: DBT_PaymentMethodsMinOrderByAggregateInput
    _sum?: DBT_PaymentMethodsSumOrderByAggregateInput
  }

  export type DBT_PaymentMethodsScalarWhereWithAggregatesInput = {
    AND?: DBT_PaymentMethodsScalarWhereWithAggregatesInput | DBT_PaymentMethodsScalarWhereWithAggregatesInput[]
    OR?: DBT_PaymentMethodsScalarWhereWithAggregatesInput[]
    NOT?: DBT_PaymentMethodsScalarWhereWithAggregatesInput | DBT_PaymentMethodsScalarWhereWithAggregatesInput[]
    ID?: BigIntWithAggregatesFilter<"DBT_PaymentMethods"> | bigint | number
    Active?: BoolNullableWithAggregatesFilter<"DBT_PaymentMethods"> | boolean | null
    PaymentMethod?: StringNullableWithAggregatesFilter<"DBT_PaymentMethods"> | string | null
  }

  export type DBT_TablesWhereInput = {
    AND?: DBT_TablesWhereInput | DBT_TablesWhereInput[]
    OR?: DBT_TablesWhereInput[]
    NOT?: DBT_TablesWhereInput | DBT_TablesWhereInput[]
    ID?: BigIntFilter<"DBT_Tables"> | bigint | number
    Active?: BoolFilter<"DBT_Tables"> | boolean
    TableName?: StringNullableFilter<"DBT_Tables"> | string | null
  }

  export type DBT_TablesOrderByWithRelationInput = {
    ID?: SortOrder
    Active?: SortOrder
    TableName?: SortOrderInput | SortOrder
  }

  export type DBT_TablesWhereUniqueInput = Prisma.AtLeast<{
    ID?: bigint | number
    AND?: DBT_TablesWhereInput | DBT_TablesWhereInput[]
    OR?: DBT_TablesWhereInput[]
    NOT?: DBT_TablesWhereInput | DBT_TablesWhereInput[]
    Active?: BoolFilter<"DBT_Tables"> | boolean
    TableName?: StringNullableFilter<"DBT_Tables"> | string | null
  }, "ID">

  export type DBT_TablesOrderByWithAggregationInput = {
    ID?: SortOrder
    Active?: SortOrder
    TableName?: SortOrderInput | SortOrder
    _count?: DBT_TablesCountOrderByAggregateInput
    _avg?: DBT_TablesAvgOrderByAggregateInput
    _max?: DBT_TablesMaxOrderByAggregateInput
    _min?: DBT_TablesMinOrderByAggregateInput
    _sum?: DBT_TablesSumOrderByAggregateInput
  }

  export type DBT_TablesScalarWhereWithAggregatesInput = {
    AND?: DBT_TablesScalarWhereWithAggregatesInput | DBT_TablesScalarWhereWithAggregatesInput[]
    OR?: DBT_TablesScalarWhereWithAggregatesInput[]
    NOT?: DBT_TablesScalarWhereWithAggregatesInput | DBT_TablesScalarWhereWithAggregatesInput[]
    ID?: BigIntWithAggregatesFilter<"DBT_Tables"> | bigint | number
    Active?: BoolWithAggregatesFilter<"DBT_Tables"> | boolean
    TableName?: StringNullableWithAggregatesFilter<"DBT_Tables"> | string | null
  }

  export type DBT_TaxesWhereInput = {
    AND?: DBT_TaxesWhereInput | DBT_TaxesWhereInput[]
    OR?: DBT_TaxesWhereInput[]
    NOT?: DBT_TaxesWhereInput | DBT_TaxesWhereInput[]
    ID?: BigIntFilter<"DBT_Taxes"> | bigint | number
    Active?: BoolFilter<"DBT_Taxes"> | boolean
    ByDefault?: BoolNullableFilter<"DBT_Taxes"> | boolean | null
    TaxName?: StringNullableFilter<"DBT_Taxes"> | string | null
    TaxDescription?: StringNullableFilter<"DBT_Taxes"> | string | null
    Percentage?: DecimalNullableFilter<"DBT_Taxes"> | Decimal | DecimalJsLike | number | string | null
    Value?: DecimalNullableFilter<"DBT_Taxes"> | Decimal | DecimalJsLike | number | string | null
  }

  export type DBT_TaxesOrderByWithRelationInput = {
    ID?: SortOrder
    Active?: SortOrder
    ByDefault?: SortOrderInput | SortOrder
    TaxName?: SortOrderInput | SortOrder
    TaxDescription?: SortOrderInput | SortOrder
    Percentage?: SortOrderInput | SortOrder
    Value?: SortOrderInput | SortOrder
  }

  export type DBT_TaxesWhereUniqueInput = Prisma.AtLeast<{
    ID?: bigint | number
    AND?: DBT_TaxesWhereInput | DBT_TaxesWhereInput[]
    OR?: DBT_TaxesWhereInput[]
    NOT?: DBT_TaxesWhereInput | DBT_TaxesWhereInput[]
    Active?: BoolFilter<"DBT_Taxes"> | boolean
    ByDefault?: BoolNullableFilter<"DBT_Taxes"> | boolean | null
    TaxName?: StringNullableFilter<"DBT_Taxes"> | string | null
    TaxDescription?: StringNullableFilter<"DBT_Taxes"> | string | null
    Percentage?: DecimalNullableFilter<"DBT_Taxes"> | Decimal | DecimalJsLike | number | string | null
    Value?: DecimalNullableFilter<"DBT_Taxes"> | Decimal | DecimalJsLike | number | string | null
  }, "ID">

  export type DBT_TaxesOrderByWithAggregationInput = {
    ID?: SortOrder
    Active?: SortOrder
    ByDefault?: SortOrderInput | SortOrder
    TaxName?: SortOrderInput | SortOrder
    TaxDescription?: SortOrderInput | SortOrder
    Percentage?: SortOrderInput | SortOrder
    Value?: SortOrderInput | SortOrder
    _count?: DBT_TaxesCountOrderByAggregateInput
    _avg?: DBT_TaxesAvgOrderByAggregateInput
    _max?: DBT_TaxesMaxOrderByAggregateInput
    _min?: DBT_TaxesMinOrderByAggregateInput
    _sum?: DBT_TaxesSumOrderByAggregateInput
  }

  export type DBT_TaxesScalarWhereWithAggregatesInput = {
    AND?: DBT_TaxesScalarWhereWithAggregatesInput | DBT_TaxesScalarWhereWithAggregatesInput[]
    OR?: DBT_TaxesScalarWhereWithAggregatesInput[]
    NOT?: DBT_TaxesScalarWhereWithAggregatesInput | DBT_TaxesScalarWhereWithAggregatesInput[]
    ID?: BigIntWithAggregatesFilter<"DBT_Taxes"> | bigint | number
    Active?: BoolWithAggregatesFilter<"DBT_Taxes"> | boolean
    ByDefault?: BoolNullableWithAggregatesFilter<"DBT_Taxes"> | boolean | null
    TaxName?: StringNullableWithAggregatesFilter<"DBT_Taxes"> | string | null
    TaxDescription?: StringNullableWithAggregatesFilter<"DBT_Taxes"> | string | null
    Percentage?: DecimalNullableWithAggregatesFilter<"DBT_Taxes"> | Decimal | DecimalJsLike | number | string | null
    Value?: DecimalNullableWithAggregatesFilter<"DBT_Taxes"> | Decimal | DecimalJsLike | number | string | null
  }

  export type DBT_TranslationsWhereInput = {
    AND?: DBT_TranslationsWhereInput | DBT_TranslationsWhereInput[]
    OR?: DBT_TranslationsWhereInput[]
    NOT?: DBT_TranslationsWhereInput | DBT_TranslationsWhereInput[]
    ID?: BigIntFilter<"DBT_Translations"> | bigint | number
    ID_Language?: BigIntNullableFilter<"DBT_Translations"> | bigint | number | null
    Text?: StringNullableFilter<"DBT_Translations"> | string | null
    Translation?: StringNullableFilter<"DBT_Translations"> | string | null
  }

  export type DBT_TranslationsOrderByWithRelationInput = {
    ID?: SortOrder
    ID_Language?: SortOrderInput | SortOrder
    Text?: SortOrderInput | SortOrder
    Translation?: SortOrderInput | SortOrder
  }

  export type DBT_TranslationsWhereUniqueInput = Prisma.AtLeast<{
    ID?: bigint | number
    AND?: DBT_TranslationsWhereInput | DBT_TranslationsWhereInput[]
    OR?: DBT_TranslationsWhereInput[]
    NOT?: DBT_TranslationsWhereInput | DBT_TranslationsWhereInput[]
    ID_Language?: BigIntNullableFilter<"DBT_Translations"> | bigint | number | null
    Text?: StringNullableFilter<"DBT_Translations"> | string | null
    Translation?: StringNullableFilter<"DBT_Translations"> | string | null
  }, "ID">

  export type DBT_TranslationsOrderByWithAggregationInput = {
    ID?: SortOrder
    ID_Language?: SortOrderInput | SortOrder
    Text?: SortOrderInput | SortOrder
    Translation?: SortOrderInput | SortOrder
    _count?: DBT_TranslationsCountOrderByAggregateInput
    _avg?: DBT_TranslationsAvgOrderByAggregateInput
    _max?: DBT_TranslationsMaxOrderByAggregateInput
    _min?: DBT_TranslationsMinOrderByAggregateInput
    _sum?: DBT_TranslationsSumOrderByAggregateInput
  }

  export type DBT_TranslationsScalarWhereWithAggregatesInput = {
    AND?: DBT_TranslationsScalarWhereWithAggregatesInput | DBT_TranslationsScalarWhereWithAggregatesInput[]
    OR?: DBT_TranslationsScalarWhereWithAggregatesInput[]
    NOT?: DBT_TranslationsScalarWhereWithAggregatesInput | DBT_TranslationsScalarWhereWithAggregatesInput[]
    ID?: BigIntWithAggregatesFilter<"DBT_Translations"> | bigint | number
    ID_Language?: BigIntNullableWithAggregatesFilter<"DBT_Translations"> | bigint | number | null
    Text?: StringNullableWithAggregatesFilter<"DBT_Translations"> | string | null
    Translation?: StringNullableWithAggregatesFilter<"DBT_Translations"> | string | null
  }

  export type DBT_UsersWhereInput = {
    AND?: DBT_UsersWhereInput | DBT_UsersWhereInput[]
    OR?: DBT_UsersWhereInput[]
    NOT?: DBT_UsersWhereInput | DBT_UsersWhereInput[]
    ID?: BigIntFilter<"DBT_Users"> | bigint | number
    Active?: BoolNullableFilter<"DBT_Users"> | boolean | null
    Name?: StringNullableFilter<"DBT_Users"> | string | null
    Password?: StringNullableFilter<"DBT_Users"> | string | null
  }

  export type DBT_UsersOrderByWithRelationInput = {
    ID?: SortOrder
    Active?: SortOrderInput | SortOrder
    Name?: SortOrderInput | SortOrder
    Password?: SortOrderInput | SortOrder
  }

  export type DBT_UsersWhereUniqueInput = Prisma.AtLeast<{
    ID?: bigint | number
    AND?: DBT_UsersWhereInput | DBT_UsersWhereInput[]
    OR?: DBT_UsersWhereInput[]
    NOT?: DBT_UsersWhereInput | DBT_UsersWhereInput[]
    Active?: BoolNullableFilter<"DBT_Users"> | boolean | null
    Name?: StringNullableFilter<"DBT_Users"> | string | null
    Password?: StringNullableFilter<"DBT_Users"> | string | null
  }, "ID">

  export type DBT_UsersOrderByWithAggregationInput = {
    ID?: SortOrder
    Active?: SortOrderInput | SortOrder
    Name?: SortOrderInput | SortOrder
    Password?: SortOrderInput | SortOrder
    _count?: DBT_UsersCountOrderByAggregateInput
    _avg?: DBT_UsersAvgOrderByAggregateInput
    _max?: DBT_UsersMaxOrderByAggregateInput
    _min?: DBT_UsersMinOrderByAggregateInput
    _sum?: DBT_UsersSumOrderByAggregateInput
  }

  export type DBT_UsersScalarWhereWithAggregatesInput = {
    AND?: DBT_UsersScalarWhereWithAggregatesInput | DBT_UsersScalarWhereWithAggregatesInput[]
    OR?: DBT_UsersScalarWhereWithAggregatesInput[]
    NOT?: DBT_UsersScalarWhereWithAggregatesInput | DBT_UsersScalarWhereWithAggregatesInput[]
    ID?: BigIntWithAggregatesFilter<"DBT_Users"> | bigint | number
    Active?: BoolNullableWithAggregatesFilter<"DBT_Users"> | boolean | null
    Name?: StringNullableWithAggregatesFilter<"DBT_Users"> | string | null
    Password?: StringNullableWithAggregatesFilter<"DBT_Users"> | string | null
  }

  export type DBT_MealsInGroupsWhereInput = {
    AND?: DBT_MealsInGroupsWhereInput | DBT_MealsInGroupsWhereInput[]
    OR?: DBT_MealsInGroupsWhereInput[]
    NOT?: DBT_MealsInGroupsWhereInput | DBT_MealsInGroupsWhereInput[]
    ID?: BigIntFilter<"DBT_MealsInGroups"> | bigint | number
    ID_Group?: BigIntNullableFilter<"DBT_MealsInGroups"> | bigint | number | null
    ID_Meal?: BigIntNullableFilter<"DBT_MealsInGroups"> | bigint | number | null
    Order?: IntNullableFilter<"DBT_MealsInGroups"> | number | null
  }

  export type DBT_MealsInGroupsOrderByWithRelationInput = {
    ID?: SortOrder
    ID_Group?: SortOrderInput | SortOrder
    ID_Meal?: SortOrderInput | SortOrder
    Order?: SortOrderInput | SortOrder
  }

  export type DBT_MealsInGroupsWhereUniqueInput = Prisma.AtLeast<{
    ID?: bigint | number
    AND?: DBT_MealsInGroupsWhereInput | DBT_MealsInGroupsWhereInput[]
    OR?: DBT_MealsInGroupsWhereInput[]
    NOT?: DBT_MealsInGroupsWhereInput | DBT_MealsInGroupsWhereInput[]
    ID_Group?: BigIntNullableFilter<"DBT_MealsInGroups"> | bigint | number | null
    ID_Meal?: BigIntNullableFilter<"DBT_MealsInGroups"> | bigint | number | null
    Order?: IntNullableFilter<"DBT_MealsInGroups"> | number | null
  }, "ID">

  export type DBT_MealsInGroupsOrderByWithAggregationInput = {
    ID?: SortOrder
    ID_Group?: SortOrderInput | SortOrder
    ID_Meal?: SortOrderInput | SortOrder
    Order?: SortOrderInput | SortOrder
    _count?: DBT_MealsInGroupsCountOrderByAggregateInput
    _avg?: DBT_MealsInGroupsAvgOrderByAggregateInput
    _max?: DBT_MealsInGroupsMaxOrderByAggregateInput
    _min?: DBT_MealsInGroupsMinOrderByAggregateInput
    _sum?: DBT_MealsInGroupsSumOrderByAggregateInput
  }

  export type DBT_MealsInGroupsScalarWhereWithAggregatesInput = {
    AND?: DBT_MealsInGroupsScalarWhereWithAggregatesInput | DBT_MealsInGroupsScalarWhereWithAggregatesInput[]
    OR?: DBT_MealsInGroupsScalarWhereWithAggregatesInput[]
    NOT?: DBT_MealsInGroupsScalarWhereWithAggregatesInput | DBT_MealsInGroupsScalarWhereWithAggregatesInput[]
    ID?: BigIntWithAggregatesFilter<"DBT_MealsInGroups"> | bigint | number
    ID_Group?: BigIntNullableWithAggregatesFilter<"DBT_MealsInGroups"> | bigint | number | null
    ID_Meal?: BigIntNullableWithAggregatesFilter<"DBT_MealsInGroups"> | bigint | number | null
    Order?: IntNullableWithAggregatesFilter<"DBT_MealsInGroups"> | number | null
  }

  export type DBT_VariantsWhereInput = {
    AND?: DBT_VariantsWhereInput | DBT_VariantsWhereInput[]
    OR?: DBT_VariantsWhereInput[]
    NOT?: DBT_VariantsWhereInput | DBT_VariantsWhereInput[]
    ID?: BigIntFilter<"DBT_Variants"> | bigint | number
    Active?: BoolFilter<"DBT_Variants"> | boolean
    Available?: BoolNullableFilter<"DBT_Variants"> | boolean | null
    ID_Meal?: BigIntNullableFilter<"DBT_Variants"> | bigint | number | null
    MealVariant?: StringNullableFilter<"DBT_Variants"> | string | null
  }

  export type DBT_VariantsOrderByWithRelationInput = {
    ID?: SortOrder
    Active?: SortOrder
    Available?: SortOrderInput | SortOrder
    ID_Meal?: SortOrderInput | SortOrder
    MealVariant?: SortOrderInput | SortOrder
  }

  export type DBT_VariantsWhereUniqueInput = Prisma.AtLeast<{
    ID?: bigint | number
    AND?: DBT_VariantsWhereInput | DBT_VariantsWhereInput[]
    OR?: DBT_VariantsWhereInput[]
    NOT?: DBT_VariantsWhereInput | DBT_VariantsWhereInput[]
    Active?: BoolFilter<"DBT_Variants"> | boolean
    Available?: BoolNullableFilter<"DBT_Variants"> | boolean | null
    ID_Meal?: BigIntNullableFilter<"DBT_Variants"> | bigint | number | null
    MealVariant?: StringNullableFilter<"DBT_Variants"> | string | null
  }, "ID">

  export type DBT_VariantsOrderByWithAggregationInput = {
    ID?: SortOrder
    Active?: SortOrder
    Available?: SortOrderInput | SortOrder
    ID_Meal?: SortOrderInput | SortOrder
    MealVariant?: SortOrderInput | SortOrder
    _count?: DBT_VariantsCountOrderByAggregateInput
    _avg?: DBT_VariantsAvgOrderByAggregateInput
    _max?: DBT_VariantsMaxOrderByAggregateInput
    _min?: DBT_VariantsMinOrderByAggregateInput
    _sum?: DBT_VariantsSumOrderByAggregateInput
  }

  export type DBT_VariantsScalarWhereWithAggregatesInput = {
    AND?: DBT_VariantsScalarWhereWithAggregatesInput | DBT_VariantsScalarWhereWithAggregatesInput[]
    OR?: DBT_VariantsScalarWhereWithAggregatesInput[]
    NOT?: DBT_VariantsScalarWhereWithAggregatesInput | DBT_VariantsScalarWhereWithAggregatesInput[]
    ID?: BigIntWithAggregatesFilter<"DBT_Variants"> | bigint | number
    Active?: BoolWithAggregatesFilter<"DBT_Variants"> | boolean
    Available?: BoolNullableWithAggregatesFilter<"DBT_Variants"> | boolean | null
    ID_Meal?: BigIntNullableWithAggregatesFilter<"DBT_Variants"> | bigint | number | null
    MealVariant?: StringNullableWithAggregatesFilter<"DBT_Variants"> | string | null
  }

  export type DBT_CustomerCreateInput = {
    ID?: bigint | number
    Active?: boolean | null
    Customer?: string | null
    Name?: string | null
    Surname?: string | null
    PhoneNr?: string | null
    Email?: string | null
    Discount?: Decimal | DecimalJsLike | number | string | null
  }

  export type DBT_CustomerUncheckedCreateInput = {
    ID?: bigint | number
    Active?: boolean | null
    Customer?: string | null
    Name?: string | null
    Surname?: string | null
    PhoneNr?: string | null
    Email?: string | null
    Discount?: Decimal | DecimalJsLike | number | string | null
  }

  export type DBT_CustomerUpdateInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Customer?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Surname?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNr?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type DBT_CustomerUncheckedUpdateInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Customer?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Surname?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNr?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type DBT_CustomerCreateManyInput = {
    Active?: boolean | null
    Customer?: string | null
    Name?: string | null
    Surname?: string | null
    PhoneNr?: string | null
    Email?: string | null
    Discount?: Decimal | DecimalJsLike | number | string | null
  }

  export type DBT_CustomerUpdateManyMutationInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Customer?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Surname?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNr?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type DBT_CustomerUncheckedUpdateManyInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Customer?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Surname?: NullableStringFieldUpdateOperationsInput | string | null
    PhoneNr?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type DBT_LanguagesCreateInput = {
    ID?: bigint | number
    Active?: boolean
    Language?: string | null
    DisplayText?: string | null
    Flag?: Buffer | null
  }

  export type DBT_LanguagesUncheckedCreateInput = {
    ID?: bigint | number
    Active?: boolean
    Language?: string | null
    DisplayText?: string | null
    Flag?: Buffer | null
  }

  export type DBT_LanguagesUpdateInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    Language?: NullableStringFieldUpdateOperationsInput | string | null
    DisplayText?: NullableStringFieldUpdateOperationsInput | string | null
    Flag?: NullableBytesFieldUpdateOperationsInput | Buffer | null
  }

  export type DBT_LanguagesUncheckedUpdateInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    Language?: NullableStringFieldUpdateOperationsInput | string | null
    DisplayText?: NullableStringFieldUpdateOperationsInput | string | null
    Flag?: NullableBytesFieldUpdateOperationsInput | Buffer | null
  }

  export type DBT_LanguagesCreateManyInput = {
    Active?: boolean
    Language?: string | null
    DisplayText?: string | null
    Flag?: Buffer | null
  }

  export type DBT_LanguagesUpdateManyMutationInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    Language?: NullableStringFieldUpdateOperationsInput | string | null
    DisplayText?: NullableStringFieldUpdateOperationsInput | string | null
    Flag?: NullableBytesFieldUpdateOperationsInput | Buffer | null
  }

  export type DBT_LanguagesUncheckedUpdateManyInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    Language?: NullableStringFieldUpdateOperationsInput | string | null
    DisplayText?: NullableStringFieldUpdateOperationsInput | string | null
    Flag?: NullableBytesFieldUpdateOperationsInput | Buffer | null
  }

  export type DBT_LayoutsCreateInput = {
    ID?: bigint | number
    Active?: boolean
    Type?: string | null
    Name?: string | null
    Xml?: string | null
  }

  export type DBT_LayoutsUncheckedCreateInput = {
    ID?: bigint | number
    Active?: boolean
    Type?: string | null
    Name?: string | null
    Xml?: string | null
  }

  export type DBT_LayoutsUpdateInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    Type?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Xml?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DBT_LayoutsUncheckedUpdateInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    Type?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Xml?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DBT_LayoutsCreateManyInput = {
    Active?: boolean
    Type?: string | null
    Name?: string | null
    Xml?: string | null
  }

  export type DBT_LayoutsUpdateManyMutationInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    Type?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Xml?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DBT_LayoutsUncheckedUpdateManyInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    Type?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Xml?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DBT_MealGroupsCreateInput = {
    ID?: bigint | number
    Active?: boolean
    MealGroup?: string | null
    ID_Layout?: bigint | number | null
    BackgroudPicture?: Buffer | null
    Order?: number | null
  }

  export type DBT_MealGroupsUncheckedCreateInput = {
    ID?: bigint | number
    Active?: boolean
    MealGroup?: string | null
    ID_Layout?: bigint | number | null
    BackgroudPicture?: Buffer | null
    Order?: number | null
  }

  export type DBT_MealGroupsUpdateInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    MealGroup?: NullableStringFieldUpdateOperationsInput | string | null
    ID_Layout?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    BackgroudPicture?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    Order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DBT_MealGroupsUncheckedUpdateInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    MealGroup?: NullableStringFieldUpdateOperationsInput | string | null
    ID_Layout?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    BackgroudPicture?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    Order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DBT_MealGroupsCreateManyInput = {
    Active?: boolean
    MealGroup?: string | null
    ID_Layout?: bigint | number | null
    BackgroudPicture?: Buffer | null
    Order?: number | null
  }

  export type DBT_MealGroupsUpdateManyMutationInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    MealGroup?: NullableStringFieldUpdateOperationsInput | string | null
    ID_Layout?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    BackgroudPicture?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    Order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DBT_MealGroupsUncheckedUpdateManyInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    MealGroup?: NullableStringFieldUpdateOperationsInput | string | null
    ID_Layout?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    BackgroudPicture?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    Order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DBT_MealsCreateInput = {
    ID?: bigint | number
    Active?: boolean
    Kitchen?: boolean | null
    Available?: boolean | null
    Meal?: string | null
    MealDescription?: string | null
    Price?: Decimal | DecimalJsLike | number | string | null
    IsCombo?: boolean
    Picture?: Buffer | null
    PictureDescription?: string | null
  }

  export type DBT_MealsUncheckedCreateInput = {
    ID?: bigint | number
    Active?: boolean
    Kitchen?: boolean | null
    Available?: boolean | null
    Meal?: string | null
    MealDescription?: string | null
    Price?: Decimal | DecimalJsLike | number | string | null
    IsCombo?: boolean
    Picture?: Buffer | null
    PictureDescription?: string | null
  }

  export type DBT_MealsUpdateInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    Kitchen?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Meal?: NullableStringFieldUpdateOperationsInput | string | null
    MealDescription?: NullableStringFieldUpdateOperationsInput | string | null
    Price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IsCombo?: BoolFieldUpdateOperationsInput | boolean
    Picture?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    PictureDescription?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DBT_MealsUncheckedUpdateInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    Kitchen?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Meal?: NullableStringFieldUpdateOperationsInput | string | null
    MealDescription?: NullableStringFieldUpdateOperationsInput | string | null
    Price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IsCombo?: BoolFieldUpdateOperationsInput | boolean
    Picture?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    PictureDescription?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DBT_MealsCreateManyInput = {
    Active?: boolean
    Kitchen?: boolean | null
    Available?: boolean | null
    Meal?: string | null
    MealDescription?: string | null
    Price?: Decimal | DecimalJsLike | number | string | null
    IsCombo?: boolean
    Picture?: Buffer | null
    PictureDescription?: string | null
  }

  export type DBT_MealsUpdateManyMutationInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    Kitchen?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Meal?: NullableStringFieldUpdateOperationsInput | string | null
    MealDescription?: NullableStringFieldUpdateOperationsInput | string | null
    Price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IsCombo?: BoolFieldUpdateOperationsInput | boolean
    Picture?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    PictureDescription?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DBT_MealsUncheckedUpdateManyInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    Kitchen?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Meal?: NullableStringFieldUpdateOperationsInput | string | null
    MealDescription?: NullableStringFieldUpdateOperationsInput | string | null
    Price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IsCombo?: BoolFieldUpdateOperationsInput | boolean
    Picture?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    PictureDescription?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DBT_MenuSetUpCreateInput = {
    ID?: bigint | number
    Active?: boolean
    LogoImage?: Buffer | null
    BackgroundColor?: bigint | number | null
    HeaderText?: string | null
    FooterText?: string | null
  }

  export type DBT_MenuSetUpUncheckedCreateInput = {
    ID?: bigint | number
    Active?: boolean
    LogoImage?: Buffer | null
    BackgroundColor?: bigint | number | null
    HeaderText?: string | null
    FooterText?: string | null
  }

  export type DBT_MenuSetUpUpdateInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    LogoImage?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    BackgroundColor?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    HeaderText?: NullableStringFieldUpdateOperationsInput | string | null
    FooterText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DBT_MenuSetUpUncheckedUpdateInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    LogoImage?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    BackgroundColor?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    HeaderText?: NullableStringFieldUpdateOperationsInput | string | null
    FooterText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DBT_MenuSetUpCreateManyInput = {
    Active?: boolean
    LogoImage?: Buffer | null
    BackgroundColor?: bigint | number | null
    HeaderText?: string | null
    FooterText?: string | null
  }

  export type DBT_MenuSetUpUpdateManyMutationInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    LogoImage?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    BackgroundColor?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    HeaderText?: NullableStringFieldUpdateOperationsInput | string | null
    FooterText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DBT_MenuSetUpUncheckedUpdateManyInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    LogoImage?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    BackgroundColor?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    HeaderText?: NullableStringFieldUpdateOperationsInput | string | null
    FooterText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DBT_OrderItemsCreateInput = {
    ID?: bigint | number
    ID_Order?: string | null
    Canceled?: boolean | null
    ID_Meal?: bigint | number | null
    ID_Variant?: bigint | number | null
    Price?: Decimal | DecimalJsLike | number | string | null
    TimeOfOrder?: Date | string | null
    ID_User?: bigint | number | null
    Time_Prepared?: Date | string | null
    Time_Delivered?: Date | string | null
  }

  export type DBT_OrderItemsUncheckedCreateInput = {
    ID?: bigint | number
    ID_Order?: string | null
    Canceled?: boolean | null
    ID_Meal?: bigint | number | null
    ID_Variant?: bigint | number | null
    Price?: Decimal | DecimalJsLike | number | string | null
    TimeOfOrder?: Date | string | null
    ID_User?: bigint | number | null
    Time_Prepared?: Date | string | null
    Time_Delivered?: Date | string | null
  }

  export type DBT_OrderItemsUpdateInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ID_Order?: NullableStringFieldUpdateOperationsInput | string | null
    Canceled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ID_Meal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ID_Variant?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    TimeOfOrder?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ID_User?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Time_Prepared?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Time_Delivered?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DBT_OrderItemsUncheckedUpdateInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ID_Order?: NullableStringFieldUpdateOperationsInput | string | null
    Canceled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ID_Meal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ID_Variant?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    TimeOfOrder?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ID_User?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Time_Prepared?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Time_Delivered?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DBT_OrderItemsCreateManyInput = {
    ID_Order?: string | null
    Canceled?: boolean | null
    ID_Meal?: bigint | number | null
    ID_Variant?: bigint | number | null
    Price?: Decimal | DecimalJsLike | number | string | null
    TimeOfOrder?: Date | string | null
    ID_User?: bigint | number | null
    Time_Prepared?: Date | string | null
    Time_Delivered?: Date | string | null
  }

  export type DBT_OrderItemsUpdateManyMutationInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ID_Order?: NullableStringFieldUpdateOperationsInput | string | null
    Canceled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ID_Meal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ID_Variant?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    TimeOfOrder?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ID_User?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Time_Prepared?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Time_Delivered?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DBT_OrderItemsUncheckedUpdateManyInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ID_Order?: NullableStringFieldUpdateOperationsInput | string | null
    Canceled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ID_Meal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ID_Variant?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    TimeOfOrder?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ID_User?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Time_Prepared?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Time_Delivered?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DBT_OrdersCreateInput = {
    ID?: bigint | number
    ID_Table?: bigint | number | null
    OrderName?: string | null
    ID_Customer?: bigint | number | null
    DateTime?: Date | string | null
    Canceled?: boolean | null
    Price?: Decimal | DecimalJsLike | number | string | null
    OrderClosed?: boolean | null
  }

  export type DBT_OrdersUncheckedCreateInput = {
    ID?: bigint | number
    ID_Table?: bigint | number | null
    OrderName?: string | null
    ID_Customer?: bigint | number | null
    DateTime?: Date | string | null
    Canceled?: boolean | null
    Price?: Decimal | DecimalJsLike | number | string | null
    OrderClosed?: boolean | null
  }

  export type DBT_OrdersUpdateInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ID_Table?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    OrderName?: NullableStringFieldUpdateOperationsInput | string | null
    ID_Customer?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    DateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Canceled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    OrderClosed?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type DBT_OrdersUncheckedUpdateInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ID_Table?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    OrderName?: NullableStringFieldUpdateOperationsInput | string | null
    ID_Customer?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    DateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Canceled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    OrderClosed?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type DBT_OrdersCreateManyInput = {
    ID_Table?: bigint | number | null
    OrderName?: string | null
    ID_Customer?: bigint | number | null
    DateTime?: Date | string | null
    Canceled?: boolean | null
    Price?: Decimal | DecimalJsLike | number | string | null
    OrderClosed?: boolean | null
  }

  export type DBT_OrdersUpdateManyMutationInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ID_Table?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    OrderName?: NullableStringFieldUpdateOperationsInput | string | null
    ID_Customer?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    DateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Canceled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    OrderClosed?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type DBT_OrdersUncheckedUpdateManyInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ID_Table?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    OrderName?: NullableStringFieldUpdateOperationsInput | string | null
    ID_Customer?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    DateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Canceled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    OrderClosed?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type DBT_PaymentMethodsCreateInput = {
    ID?: bigint | number
    Active?: boolean | null
    PaymentMethod?: string | null
  }

  export type DBT_PaymentMethodsUncheckedCreateInput = {
    ID?: bigint | number
    Active?: boolean | null
    PaymentMethod?: string | null
  }

  export type DBT_PaymentMethodsUpdateInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    PaymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DBT_PaymentMethodsUncheckedUpdateInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    PaymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DBT_PaymentMethodsCreateManyInput = {
    Active?: boolean | null
    PaymentMethod?: string | null
  }

  export type DBT_PaymentMethodsUpdateManyMutationInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    PaymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DBT_PaymentMethodsUncheckedUpdateManyInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    PaymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DBT_TablesCreateInput = {
    ID?: bigint | number
    Active?: boolean
    TableName?: string | null
  }

  export type DBT_TablesUncheckedCreateInput = {
    ID?: bigint | number
    Active?: boolean
    TableName?: string | null
  }

  export type DBT_TablesUpdateInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    TableName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DBT_TablesUncheckedUpdateInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    TableName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DBT_TablesCreateManyInput = {
    Active?: boolean
    TableName?: string | null
  }

  export type DBT_TablesUpdateManyMutationInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    TableName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DBT_TablesUncheckedUpdateManyInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    TableName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DBT_TaxesCreateInput = {
    ID?: bigint | number
    Active?: boolean
    ByDefault?: boolean | null
    TaxName?: string | null
    TaxDescription?: string | null
    Percentage?: Decimal | DecimalJsLike | number | string | null
    Value?: Decimal | DecimalJsLike | number | string | null
  }

  export type DBT_TaxesUncheckedCreateInput = {
    ID?: bigint | number
    Active?: boolean
    ByDefault?: boolean | null
    TaxName?: string | null
    TaxDescription?: string | null
    Percentage?: Decimal | DecimalJsLike | number | string | null
    Value?: Decimal | DecimalJsLike | number | string | null
  }

  export type DBT_TaxesUpdateInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    ByDefault?: NullableBoolFieldUpdateOperationsInput | boolean | null
    TaxName?: NullableStringFieldUpdateOperationsInput | string | null
    TaxDescription?: NullableStringFieldUpdateOperationsInput | string | null
    Percentage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type DBT_TaxesUncheckedUpdateInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    ByDefault?: NullableBoolFieldUpdateOperationsInput | boolean | null
    TaxName?: NullableStringFieldUpdateOperationsInput | string | null
    TaxDescription?: NullableStringFieldUpdateOperationsInput | string | null
    Percentage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type DBT_TaxesCreateManyInput = {
    Active?: boolean
    ByDefault?: boolean | null
    TaxName?: string | null
    TaxDescription?: string | null
    Percentage?: Decimal | DecimalJsLike | number | string | null
    Value?: Decimal | DecimalJsLike | number | string | null
  }

  export type DBT_TaxesUpdateManyMutationInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    ByDefault?: NullableBoolFieldUpdateOperationsInput | boolean | null
    TaxName?: NullableStringFieldUpdateOperationsInput | string | null
    TaxDescription?: NullableStringFieldUpdateOperationsInput | string | null
    Percentage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type DBT_TaxesUncheckedUpdateManyInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    ByDefault?: NullableBoolFieldUpdateOperationsInput | boolean | null
    TaxName?: NullableStringFieldUpdateOperationsInput | string | null
    TaxDescription?: NullableStringFieldUpdateOperationsInput | string | null
    Percentage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type DBT_TranslationsCreateInput = {
    ID?: bigint | number
    ID_Language?: bigint | number | null
    Text?: string | null
    Translation?: string | null
  }

  export type DBT_TranslationsUncheckedCreateInput = {
    ID?: bigint | number
    ID_Language?: bigint | number | null
    Text?: string | null
    Translation?: string | null
  }

  export type DBT_TranslationsUpdateInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ID_Language?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Text?: NullableStringFieldUpdateOperationsInput | string | null
    Translation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DBT_TranslationsUncheckedUpdateInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ID_Language?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Text?: NullableStringFieldUpdateOperationsInput | string | null
    Translation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DBT_TranslationsCreateManyInput = {
    ID_Language?: bigint | number | null
    Text?: string | null
    Translation?: string | null
  }

  export type DBT_TranslationsUpdateManyMutationInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ID_Language?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Text?: NullableStringFieldUpdateOperationsInput | string | null
    Translation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DBT_TranslationsUncheckedUpdateManyInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ID_Language?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Text?: NullableStringFieldUpdateOperationsInput | string | null
    Translation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DBT_UsersCreateInput = {
    ID?: bigint | number
    Active?: boolean | null
    Name?: string | null
    Password?: string | null
  }

  export type DBT_UsersUncheckedCreateInput = {
    ID?: bigint | number
    Active?: boolean | null
    Name?: string | null
    Password?: string | null
  }

  export type DBT_UsersUpdateInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DBT_UsersUncheckedUpdateInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DBT_UsersCreateManyInput = {
    Active?: boolean | null
    Name?: string | null
    Password?: string | null
  }

  export type DBT_UsersUpdateManyMutationInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DBT_UsersUncheckedUpdateManyInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DBT_MealsInGroupsCreateInput = {
    ID?: bigint | number
    ID_Group?: bigint | number | null
    ID_Meal?: bigint | number | null
    Order?: number | null
  }

  export type DBT_MealsInGroupsUncheckedCreateInput = {
    ID?: bigint | number
    ID_Group?: bigint | number | null
    ID_Meal?: bigint | number | null
    Order?: number | null
  }

  export type DBT_MealsInGroupsUpdateInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ID_Group?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ID_Meal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DBT_MealsInGroupsUncheckedUpdateInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ID_Group?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ID_Meal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DBT_MealsInGroupsCreateManyInput = {
    ID_Group?: bigint | number | null
    ID_Meal?: bigint | number | null
    Order?: number | null
  }

  export type DBT_MealsInGroupsUpdateManyMutationInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ID_Group?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ID_Meal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DBT_MealsInGroupsUncheckedUpdateManyInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ID_Group?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ID_Meal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DBT_VariantsCreateInput = {
    ID?: bigint | number
    Active?: boolean
    Available?: boolean | null
    ID_Meal?: bigint | number | null
    MealVariant?: string | null
  }

  export type DBT_VariantsUncheckedCreateInput = {
    ID?: bigint | number
    Active?: boolean
    Available?: boolean | null
    ID_Meal?: bigint | number | null
    MealVariant?: string | null
  }

  export type DBT_VariantsUpdateInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    Available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ID_Meal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    MealVariant?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DBT_VariantsUncheckedUpdateInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    Available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ID_Meal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    MealVariant?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DBT_VariantsCreateManyInput = {
    Active?: boolean
    Available?: boolean | null
    ID_Meal?: bigint | number | null
    MealVariant?: string | null
  }

  export type DBT_VariantsUpdateManyMutationInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    Available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ID_Meal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    MealVariant?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DBT_VariantsUncheckedUpdateManyInput = {
    ID?: BigIntFieldUpdateOperationsInput | bigint | number
    Active?: BoolFieldUpdateOperationsInput | boolean
    Available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ID_Meal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    MealVariant?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DBT_CustomerCountOrderByAggregateInput = {
    ID?: SortOrder
    Active?: SortOrder
    Customer?: SortOrder
    Name?: SortOrder
    Surname?: SortOrder
    PhoneNr?: SortOrder
    Email?: SortOrder
    Discount?: SortOrder
  }

  export type DBT_CustomerAvgOrderByAggregateInput = {
    ID?: SortOrder
    Discount?: SortOrder
  }

  export type DBT_CustomerMaxOrderByAggregateInput = {
    ID?: SortOrder
    Active?: SortOrder
    Customer?: SortOrder
    Name?: SortOrder
    Surname?: SortOrder
    PhoneNr?: SortOrder
    Email?: SortOrder
    Discount?: SortOrder
  }

  export type DBT_CustomerMinOrderByAggregateInput = {
    ID?: SortOrder
    Active?: SortOrder
    Customer?: SortOrder
    Name?: SortOrder
    Surname?: SortOrder
    PhoneNr?: SortOrder
    Email?: SortOrder
    Discount?: SortOrder
  }

  export type DBT_CustomerSumOrderByAggregateInput = {
    ID?: SortOrder
    Discount?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Buffer | null
  }

  export type DBT_LanguagesCountOrderByAggregateInput = {
    ID?: SortOrder
    Active?: SortOrder
    Language?: SortOrder
    DisplayText?: SortOrder
    Flag?: SortOrder
  }

  export type DBT_LanguagesAvgOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type DBT_LanguagesMaxOrderByAggregateInput = {
    ID?: SortOrder
    Active?: SortOrder
    Language?: SortOrder
    DisplayText?: SortOrder
    Flag?: SortOrder
  }

  export type DBT_LanguagesMinOrderByAggregateInput = {
    ID?: SortOrder
    Active?: SortOrder
    Language?: SortOrder
    DisplayText?: SortOrder
    Flag?: SortOrder
  }

  export type DBT_LanguagesSumOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Buffer | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type DBT_LayoutsCountOrderByAggregateInput = {
    ID?: SortOrder
    Active?: SortOrder
    Type?: SortOrder
    Name?: SortOrder
    Xml?: SortOrder
  }

  export type DBT_LayoutsAvgOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type DBT_LayoutsMaxOrderByAggregateInput = {
    ID?: SortOrder
    Active?: SortOrder
    Type?: SortOrder
    Name?: SortOrder
    Xml?: SortOrder
  }

  export type DBT_LayoutsMinOrderByAggregateInput = {
    ID?: SortOrder
    Active?: SortOrder
    Type?: SortOrder
    Name?: SortOrder
    Xml?: SortOrder
  }

  export type DBT_LayoutsSumOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DBT_MealGroupsCountOrderByAggregateInput = {
    ID?: SortOrder
    Active?: SortOrder
    MealGroup?: SortOrder
    ID_Layout?: SortOrder
    BackgroudPicture?: SortOrder
    Order?: SortOrder
  }

  export type DBT_MealGroupsAvgOrderByAggregateInput = {
    ID?: SortOrder
    ID_Layout?: SortOrder
    Order?: SortOrder
  }

  export type DBT_MealGroupsMaxOrderByAggregateInput = {
    ID?: SortOrder
    Active?: SortOrder
    MealGroup?: SortOrder
    ID_Layout?: SortOrder
    BackgroudPicture?: SortOrder
    Order?: SortOrder
  }

  export type DBT_MealGroupsMinOrderByAggregateInput = {
    ID?: SortOrder
    Active?: SortOrder
    MealGroup?: SortOrder
    ID_Layout?: SortOrder
    BackgroudPicture?: SortOrder
    Order?: SortOrder
  }

  export type DBT_MealGroupsSumOrderByAggregateInput = {
    ID?: SortOrder
    ID_Layout?: SortOrder
    Order?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DBT_MealsCountOrderByAggregateInput = {
    ID?: SortOrder
    Active?: SortOrder
    Kitchen?: SortOrder
    Available?: SortOrder
    Meal?: SortOrder
    MealDescription?: SortOrder
    Price?: SortOrder
    IsCombo?: SortOrder
    Picture?: SortOrder
    PictureDescription?: SortOrder
  }

  export type DBT_MealsAvgOrderByAggregateInput = {
    ID?: SortOrder
    Price?: SortOrder
  }

  export type DBT_MealsMaxOrderByAggregateInput = {
    ID?: SortOrder
    Active?: SortOrder
    Kitchen?: SortOrder
    Available?: SortOrder
    Meal?: SortOrder
    MealDescription?: SortOrder
    Price?: SortOrder
    IsCombo?: SortOrder
    Picture?: SortOrder
    PictureDescription?: SortOrder
  }

  export type DBT_MealsMinOrderByAggregateInput = {
    ID?: SortOrder
    Active?: SortOrder
    Kitchen?: SortOrder
    Available?: SortOrder
    Meal?: SortOrder
    MealDescription?: SortOrder
    Price?: SortOrder
    IsCombo?: SortOrder
    Picture?: SortOrder
    PictureDescription?: SortOrder
  }

  export type DBT_MealsSumOrderByAggregateInput = {
    ID?: SortOrder
    Price?: SortOrder
  }

  export type DBT_MenuSetUpCountOrderByAggregateInput = {
    ID?: SortOrder
    Active?: SortOrder
    LogoImage?: SortOrder
    BackgroundColor?: SortOrder
    HeaderText?: SortOrder
    FooterText?: SortOrder
  }

  export type DBT_MenuSetUpAvgOrderByAggregateInput = {
    ID?: SortOrder
    BackgroundColor?: SortOrder
  }

  export type DBT_MenuSetUpMaxOrderByAggregateInput = {
    ID?: SortOrder
    Active?: SortOrder
    LogoImage?: SortOrder
    BackgroundColor?: SortOrder
    HeaderText?: SortOrder
    FooterText?: SortOrder
  }

  export type DBT_MenuSetUpMinOrderByAggregateInput = {
    ID?: SortOrder
    Active?: SortOrder
    LogoImage?: SortOrder
    BackgroundColor?: SortOrder
    HeaderText?: SortOrder
    FooterText?: SortOrder
  }

  export type DBT_MenuSetUpSumOrderByAggregateInput = {
    ID?: SortOrder
    BackgroundColor?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DBT_OrderItemsCountOrderByAggregateInput = {
    ID?: SortOrder
    ID_Order?: SortOrder
    Canceled?: SortOrder
    ID_Meal?: SortOrder
    ID_Variant?: SortOrder
    Price?: SortOrder
    TimeOfOrder?: SortOrder
    ID_User?: SortOrder
    Time_Prepared?: SortOrder
    Time_Delivered?: SortOrder
  }

  export type DBT_OrderItemsAvgOrderByAggregateInput = {
    ID?: SortOrder
    ID_Meal?: SortOrder
    ID_Variant?: SortOrder
    Price?: SortOrder
    ID_User?: SortOrder
  }

  export type DBT_OrderItemsMaxOrderByAggregateInput = {
    ID?: SortOrder
    ID_Order?: SortOrder
    Canceled?: SortOrder
    ID_Meal?: SortOrder
    ID_Variant?: SortOrder
    Price?: SortOrder
    TimeOfOrder?: SortOrder
    ID_User?: SortOrder
    Time_Prepared?: SortOrder
    Time_Delivered?: SortOrder
  }

  export type DBT_OrderItemsMinOrderByAggregateInput = {
    ID?: SortOrder
    ID_Order?: SortOrder
    Canceled?: SortOrder
    ID_Meal?: SortOrder
    ID_Variant?: SortOrder
    Price?: SortOrder
    TimeOfOrder?: SortOrder
    ID_User?: SortOrder
    Time_Prepared?: SortOrder
    Time_Delivered?: SortOrder
  }

  export type DBT_OrderItemsSumOrderByAggregateInput = {
    ID?: SortOrder
    ID_Meal?: SortOrder
    ID_Variant?: SortOrder
    Price?: SortOrder
    ID_User?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DBT_OrdersCountOrderByAggregateInput = {
    ID?: SortOrder
    ID_Table?: SortOrder
    OrderName?: SortOrder
    ID_Customer?: SortOrder
    DateTime?: SortOrder
    Canceled?: SortOrder
    Price?: SortOrder
    OrderClosed?: SortOrder
  }

  export type DBT_OrdersAvgOrderByAggregateInput = {
    ID?: SortOrder
    ID_Table?: SortOrder
    ID_Customer?: SortOrder
    Price?: SortOrder
  }

  export type DBT_OrdersMaxOrderByAggregateInput = {
    ID?: SortOrder
    ID_Table?: SortOrder
    OrderName?: SortOrder
    ID_Customer?: SortOrder
    DateTime?: SortOrder
    Canceled?: SortOrder
    Price?: SortOrder
    OrderClosed?: SortOrder
  }

  export type DBT_OrdersMinOrderByAggregateInput = {
    ID?: SortOrder
    ID_Table?: SortOrder
    OrderName?: SortOrder
    ID_Customer?: SortOrder
    DateTime?: SortOrder
    Canceled?: SortOrder
    Price?: SortOrder
    OrderClosed?: SortOrder
  }

  export type DBT_OrdersSumOrderByAggregateInput = {
    ID?: SortOrder
    ID_Table?: SortOrder
    ID_Customer?: SortOrder
    Price?: SortOrder
  }

  export type DBT_PaymentMethodsCountOrderByAggregateInput = {
    ID?: SortOrder
    Active?: SortOrder
    PaymentMethod?: SortOrder
  }

  export type DBT_PaymentMethodsAvgOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type DBT_PaymentMethodsMaxOrderByAggregateInput = {
    ID?: SortOrder
    Active?: SortOrder
    PaymentMethod?: SortOrder
  }

  export type DBT_PaymentMethodsMinOrderByAggregateInput = {
    ID?: SortOrder
    Active?: SortOrder
    PaymentMethod?: SortOrder
  }

  export type DBT_PaymentMethodsSumOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type DBT_TablesCountOrderByAggregateInput = {
    ID?: SortOrder
    Active?: SortOrder
    TableName?: SortOrder
  }

  export type DBT_TablesAvgOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type DBT_TablesMaxOrderByAggregateInput = {
    ID?: SortOrder
    Active?: SortOrder
    TableName?: SortOrder
  }

  export type DBT_TablesMinOrderByAggregateInput = {
    ID?: SortOrder
    Active?: SortOrder
    TableName?: SortOrder
  }

  export type DBT_TablesSumOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type DBT_TaxesCountOrderByAggregateInput = {
    ID?: SortOrder
    Active?: SortOrder
    ByDefault?: SortOrder
    TaxName?: SortOrder
    TaxDescription?: SortOrder
    Percentage?: SortOrder
    Value?: SortOrder
  }

  export type DBT_TaxesAvgOrderByAggregateInput = {
    ID?: SortOrder
    Percentage?: SortOrder
    Value?: SortOrder
  }

  export type DBT_TaxesMaxOrderByAggregateInput = {
    ID?: SortOrder
    Active?: SortOrder
    ByDefault?: SortOrder
    TaxName?: SortOrder
    TaxDescription?: SortOrder
    Percentage?: SortOrder
    Value?: SortOrder
  }

  export type DBT_TaxesMinOrderByAggregateInput = {
    ID?: SortOrder
    Active?: SortOrder
    ByDefault?: SortOrder
    TaxName?: SortOrder
    TaxDescription?: SortOrder
    Percentage?: SortOrder
    Value?: SortOrder
  }

  export type DBT_TaxesSumOrderByAggregateInput = {
    ID?: SortOrder
    Percentage?: SortOrder
    Value?: SortOrder
  }

  export type DBT_TranslationsCountOrderByAggregateInput = {
    ID?: SortOrder
    ID_Language?: SortOrder
    Text?: SortOrder
    Translation?: SortOrder
  }

  export type DBT_TranslationsAvgOrderByAggregateInput = {
    ID?: SortOrder
    ID_Language?: SortOrder
  }

  export type DBT_TranslationsMaxOrderByAggregateInput = {
    ID?: SortOrder
    ID_Language?: SortOrder
    Text?: SortOrder
    Translation?: SortOrder
  }

  export type DBT_TranslationsMinOrderByAggregateInput = {
    ID?: SortOrder
    ID_Language?: SortOrder
    Text?: SortOrder
    Translation?: SortOrder
  }

  export type DBT_TranslationsSumOrderByAggregateInput = {
    ID?: SortOrder
    ID_Language?: SortOrder
  }

  export type DBT_UsersCountOrderByAggregateInput = {
    ID?: SortOrder
    Active?: SortOrder
    Name?: SortOrder
    Password?: SortOrder
  }

  export type DBT_UsersAvgOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type DBT_UsersMaxOrderByAggregateInput = {
    ID?: SortOrder
    Active?: SortOrder
    Name?: SortOrder
    Password?: SortOrder
  }

  export type DBT_UsersMinOrderByAggregateInput = {
    ID?: SortOrder
    Active?: SortOrder
    Name?: SortOrder
    Password?: SortOrder
  }

  export type DBT_UsersSumOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type DBT_MealsInGroupsCountOrderByAggregateInput = {
    ID?: SortOrder
    ID_Group?: SortOrder
    ID_Meal?: SortOrder
    Order?: SortOrder
  }

  export type DBT_MealsInGroupsAvgOrderByAggregateInput = {
    ID?: SortOrder
    ID_Group?: SortOrder
    ID_Meal?: SortOrder
    Order?: SortOrder
  }

  export type DBT_MealsInGroupsMaxOrderByAggregateInput = {
    ID?: SortOrder
    ID_Group?: SortOrder
    ID_Meal?: SortOrder
    Order?: SortOrder
  }

  export type DBT_MealsInGroupsMinOrderByAggregateInput = {
    ID?: SortOrder
    ID_Group?: SortOrder
    ID_Meal?: SortOrder
    Order?: SortOrder
  }

  export type DBT_MealsInGroupsSumOrderByAggregateInput = {
    ID?: SortOrder
    ID_Group?: SortOrder
    ID_Meal?: SortOrder
    Order?: SortOrder
  }

  export type DBT_VariantsCountOrderByAggregateInput = {
    ID?: SortOrder
    Active?: SortOrder
    Available?: SortOrder
    ID_Meal?: SortOrder
    MealVariant?: SortOrder
  }

  export type DBT_VariantsAvgOrderByAggregateInput = {
    ID?: SortOrder
    ID_Meal?: SortOrder
  }

  export type DBT_VariantsMaxOrderByAggregateInput = {
    ID?: SortOrder
    Active?: SortOrder
    Available?: SortOrder
    ID_Meal?: SortOrder
    MealVariant?: SortOrder
  }

  export type DBT_VariantsMinOrderByAggregateInput = {
    ID?: SortOrder
    Active?: SortOrder
    Available?: SortOrder
    ID_Meal?: SortOrder
    MealVariant?: SortOrder
  }

  export type DBT_VariantsSumOrderByAggregateInput = {
    ID?: SortOrder
    ID_Meal?: SortOrder
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Buffer | null
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Buffer | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Buffer | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use DBT_CustomerDefaultArgs instead
     */
    export type DBT_CustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DBT_CustomerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DBT_LanguagesDefaultArgs instead
     */
    export type DBT_LanguagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DBT_LanguagesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DBT_LayoutsDefaultArgs instead
     */
    export type DBT_LayoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DBT_LayoutsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DBT_MealGroupsDefaultArgs instead
     */
    export type DBT_MealGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DBT_MealGroupsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DBT_MealsDefaultArgs instead
     */
    export type DBT_MealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DBT_MealsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DBT_MenuSetUpDefaultArgs instead
     */
    export type DBT_MenuSetUpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DBT_MenuSetUpDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DBT_OrderItemsDefaultArgs instead
     */
    export type DBT_OrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DBT_OrderItemsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DBT_OrdersDefaultArgs instead
     */
    export type DBT_OrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DBT_OrdersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DBT_PaymentMethodsDefaultArgs instead
     */
    export type DBT_PaymentMethodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DBT_PaymentMethodsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DBT_TablesDefaultArgs instead
     */
    export type DBT_TablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DBT_TablesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DBT_TaxesDefaultArgs instead
     */
    export type DBT_TaxesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DBT_TaxesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DBT_TranslationsDefaultArgs instead
     */
    export type DBT_TranslationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DBT_TranslationsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DBT_UsersDefaultArgs instead
     */
    export type DBT_UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DBT_UsersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DBT_MealsInGroupsDefaultArgs instead
     */
    export type DBT_MealsInGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DBT_MealsInGroupsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DBT_VariantsDefaultArgs instead
     */
    export type DBT_VariantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DBT_VariantsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}