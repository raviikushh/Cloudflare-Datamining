/*! *****************************************************************************
Copyright (c) Cloudflare. All rights reserved.
Copyright (c) Microsoft Corporation. All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* eslint-disable */
// noinspection JSUnusedGlobalSymbols
export declare class DOMException extends Error {
  constructor(message?: string, name?: string);
  readonly message: string;
  readonly name: string;
  readonly code: number;
  readonly stack: any;
  static readonly INDEX_SIZE_ERR: number;
  static readonly DOMSTRING_SIZE_ERR: number;
  static readonly HIERARCHY_REQUEST_ERR: number;
  static readonly WRONG_DOCUMENT_ERR: number;
  static readonly INVALID_CHARACTER_ERR: number;
  static readonly NO_DATA_ALLOWED_ERR: number;
  static readonly NO_MODIFICATION_ALLOWED_ERR: number;
  static readonly NOT_FOUND_ERR: number;
  static readonly NOT_SUPPORTED_ERR: number;
  static readonly INUSE_ATTRIBUTE_ERR: number;
  static readonly INVALID_STATE_ERR: number;
  static readonly SYNTAX_ERR: number;
  static readonly INVALID_MODIFICATION_ERR: number;
  static readonly NAMESPACE_ERR: number;
  static readonly INVALID_ACCESS_ERR: number;
  static readonly VALIDATION_ERR: number;
  static readonly TYPE_MISMATCH_ERR: number;
  static readonly SECURITY_ERR: number;
  static readonly NETWORK_ERR: number;
  static readonly ABORT_ERR: number;
  static readonly URL_MISMATCH_ERR: number;
  static readonly QUOTA_EXCEEDED_ERR: number;
  static readonly TIMEOUT_ERR: number;
  static readonly INVALID_NODE_TYPE_ERR: number;
  static readonly DATA_CLONE_ERR: number;
}
export type WorkerGlobalScopeEventMap = {
  fetch: FetchEvent;
  scheduled: ScheduledEvent;
  queue: QueueEvent;
  unhandledrejection: PromiseRejectionEvent;
  rejectionhandled: PromiseRejectionEvent;
};
export declare abstract class WorkerGlobalScope extends EventTarget<WorkerGlobalScopeEventMap> {
  EventTarget: typeof EventTarget;
}
export interface Console {
  "assert"(condition?: boolean, ...data: any[]): void;
  clear(): void;
  count(label?: string): void;
  countReset(label?: string): void;
  debug(...data: any[]): void;
  dir(item?: any, options?: any): void;
  dirxml(...data: any[]): void;
  error(...data: any[]): void;
  group(...data: any[]): void;
  groupCollapsed(...data: any[]): void;
  groupEnd(): void;
  info(...data: any[]): void;
  log(...data: any[]): void;
  table(tabularData?: any, properties?: string[]): void;
  time(label?: string): void;
  timeEnd(label?: string): void;
  timeLog(label?: string, ...data: any[]): void;
  timeStamp(label?: string): void;
  trace(...data: any[]): void;
  warn(...data: any[]): void;
}
export declare const console: Console;
export type BufferSource = ArrayBufferView | ArrayBuffer;
export declare namespace WebAssembly {
  class CompileError extends Error {
    constructor(message?: string);
  }
  class RuntimeError extends Error {
    constructor(message?: string);
  }
  type ValueType =
    | "anyfunc"
    | "externref"
    | "f32"
    | "f64"
    | "i32"
    | "i64"
    | "v128";
  interface GlobalDescriptor {
    value: ValueType;
    mutable?: boolean;
  }
  class Global {
    constructor(descriptor: GlobalDescriptor, value?: any);
    value: any;
    valueOf(): any;
  }
  type ImportValue = ExportValue | number;
  type ModuleImports = Record<string, ImportValue>;
  type Imports = Record<string, ModuleImports>;
  type ExportValue = Function | Global | Memory | Table;
  type Exports = Record<string, ExportValue>;
  class Instance {
    constructor(module: Module, imports?: Imports);
    readonly exports: Exports;
  }
  interface MemoryDescriptor {
    initial: number;
    maximum?: number;
    shared?: boolean;
  }
  class Memory {
    constructor(descriptor: MemoryDescriptor);
    readonly buffer: ArrayBuffer;
    grow(delta: number): number;
  }
  type ImportExportKind = "function" | "global" | "memory" | "table";
  interface ModuleExportDescriptor {
    kind: ImportExportKind;
    name: string;
  }
  interface ModuleImportDescriptor {
    kind: ImportExportKind;
    module: string;
    name: string;
  }
  abstract class Module {
    static customSections(module: Module, sectionName: string): ArrayBuffer[];
    static exports(module: Module): ModuleExportDescriptor[];
    static imports(module: Module): ModuleImportDescriptor[];
  }
  type TableKind = "anyfunc" | "externref";
  interface TableDescriptor {
    element: TableKind;
    initial: number;
    maximum?: number;
  }
  class Table {
    constructor(descriptor: TableDescriptor, value?: any);
    readonly length: number;
    get(index: number): any;
    grow(delta: number, value?: any): number;
    set(index: number, value?: any): void;
  }
  function instantiate(module: Module, imports?: Imports): Promise<Instance>;
  function validate(bytes: BufferSource): boolean;
}
/** This ServiceWorker API interface represents the global execution context of a service worker. */
export interface ServiceWorkerGlobalScope extends WorkerGlobalScope {
  DOMException: typeof DOMException;
  WorkerGlobalScope: typeof WorkerGlobalScope;
  btoa(data: string): string;
  atob(data: string): string;
  setTimeout(callback: (...args: any[]) => void, msDelay?: number): number;
  setTimeout<Args extends any[]>(
    callback: (...args: Args) => void,
    msDelay?: number,
    ...args: Args
  ): number;
  clearTimeout(timeoutId: number | null): void;
  setInterval(callback: (...args: any[]) => void, msDelay?: number): number;
  setInterval<Args extends any[]>(
    callback: (...args: Args) => void,
    msDelay?: number,
    ...args: Args
  ): number;
  clearInterval(timeoutId: number | null): void;
  queueMicrotask(task: Function): void;
  structuredClone<T>(value: T, options?: StructuredSerializeOptions): T;
  fetch(
    input: RequestInfo,
    init?: RequestInit<RequestInitCfProperties>
  ): Promise<Response>;
  self: ServiceWorkerGlobalScope;
  crypto: Crypto;
  caches: CacheStorage;
  scheduler: Scheduler;
  performance: Performance;
  readonly origin: string;
  Event: typeof Event;
  ExtendableEvent: typeof ExtendableEvent;
  CustomEvent: typeof CustomEvent;
  PromiseRejectionEvent: typeof PromiseRejectionEvent;
  FetchEvent: typeof FetchEvent;
  TailEvent: typeof TailEvent;
  TraceEvent: typeof TailEvent;
  ScheduledEvent: typeof ScheduledEvent;
  MessageEvent: typeof MessageEvent;
  CloseEvent: typeof CloseEvent;
  ReadableStreamDefaultReader: typeof ReadableStreamDefaultReader;
  ReadableStreamBYOBReader: typeof ReadableStreamBYOBReader;
  ReadableStream: typeof ReadableStream;
  WritableStream: typeof WritableStream;
  WritableStreamDefaultWriter: typeof WritableStreamDefaultWriter;
  TransformStream: typeof TransformStream;
  ByteLengthQueuingStrategy: typeof ByteLengthQueuingStrategy;
  CountQueuingStrategy: typeof CountQueuingStrategy;
  CompressionStream: typeof CompressionStream;
  DecompressionStream: typeof DecompressionStream;
  TextEncoderStream: typeof TextEncoderStream;
  TextDecoderStream: typeof TextDecoderStream;
  Headers: typeof Headers;
  Body: typeof Body;
  Request: typeof Request;
  Response: typeof Response;
  WebSocket: typeof WebSocket;
  WebSocketPair: typeof WebSocketPair;
  WebSocketRequestResponsePair: typeof WebSocketRequestResponsePair;
  AbortController: typeof AbortController;
  AbortSignal: typeof AbortSignal;
  TextDecoder: typeof TextDecoder;
  TextEncoder: typeof TextEncoder;
  navigator: Navigator;
  Navigator: typeof Navigator;
  URL: typeof URL;
  URLSearchParams: typeof URLSearchParams;
  URLPattern: typeof URLPattern;
  Blob: typeof Blob;
  File: typeof File;
  FormData: typeof FormData;
  Crypto: typeof Crypto;
  SubtleCrypto: typeof SubtleCrypto;
  CryptoKey: typeof CryptoKey;
  CacheStorage: typeof CacheStorage;
  Cache: typeof Cache;
  FixedLengthStream: typeof FixedLengthStream;
  IdentityTransformStream: typeof IdentityTransformStream;
  HTMLRewriter: typeof HTMLRewriter;
  GPUAdapter: typeof gpuGPUAdapter;
  GPUOutOfMemoryError: typeof gpuGPUOutOfMemoryError;
  GPUValidationError: typeof gpuGPUValidationError;
  GPUInternalError: typeof gpuGPUInternalError;
  GPUDeviceLostInfo: typeof gpuGPUDeviceLostInfo;
  GPUBufferUsage: typeof gpuGPUBufferUsage;
  GPUShaderStage: typeof gpuGPUShaderStage;
  GPUMapMode: typeof gpuGPUMapMode;
}
export declare function addEventListener<
  Type extends keyof WorkerGlobalScopeEventMap
>(
  type: Type,
  handler: EventListenerOrEventListenerObject<WorkerGlobalScopeEventMap[Type]>,
  options?: EventTargetAddEventListenerOptions | boolean
): void;
export declare function removeEventListener<
  Type extends keyof WorkerGlobalScopeEventMap
>(
  type: Type,
  handler: EventListenerOrEventListenerObject<WorkerGlobalScopeEventMap[Type]>,
  options?: EventTargetEventListenerOptions | boolean
): void;
/** Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise. */
export declare function dispatchEvent(
  event: WorkerGlobalScopeEventMap[keyof WorkerGlobalScopeEventMap]
): boolean;
export declare function btoa(data: string): string;
export declare function atob(data: string): string;
export declare function setTimeout(
  callback: (...args: any[]) => void,
  msDelay?: number
): number;
export declare function setTimeout<Args extends any[]>(
  callback: (...args: Args) => void,
  msDelay?: number,
  ...args: Args
): number;
export declare function clearTimeout(timeoutId: number | null): void;
export declare function setInterval(
  callback: (...args: any[]) => void,
  msDelay?: number
): number;
export declare function setInterval<Args extends any[]>(
  callback: (...args: Args) => void,
  msDelay?: number,
  ...args: Args
): number;
export declare function clearInterval(timeoutId: number | null): void;
export declare function queueMicrotask(task: Function): void;
export declare function structuredClone<T>(
  value: T,
  options?: StructuredSerializeOptions
): T;
export declare function fetch(
  input: RequestInfo,
  init?: RequestInit<RequestInitCfProperties>
): Promise<Response>;
export declare const self: ServiceWorkerGlobalScope;
export declare const crypto: Crypto;
export declare const caches: CacheStorage;
export declare const scheduler: Scheduler;
export declare const performance: Performance;
export declare const origin: string;
export declare const navigator: Navigator;
export interface TestController {}
export interface ExecutionContext {
  waitUntil(promise: Promise<any>): void;
  passThroughOnException(): void;
}
export type ExportedHandlerFetchHandler<
  Env = unknown,
  CfHostMetadata = unknown
> = (
  request: Request<CfHostMetadata, IncomingRequestCfProperties<CfHostMetadata>>,
  env: Env,
  ctx: ExecutionContext
) => Response | Promise<Response>;
export type ExportedHandlerTailHandler<Env = unknown> = (
  events: TraceItem[],
  env: Env,
  ctx: ExecutionContext
) => void | Promise<void>;
export type ExportedHandlerTraceHandler<Env = unknown> = (
  traces: TraceItem[],
  env: Env,
  ctx: ExecutionContext
) => void | Promise<void>;
export type ExportedHandlerScheduledHandler<Env = unknown> = (
  controller: ScheduledController,
  env: Env,
  ctx: ExecutionContext
) => void | Promise<void>;
export type ExportedHandlerQueueHandler<Env = unknown, Message = unknown> = (
  batch: MessageBatch<Message>,
  env: Env,
  ctx: ExecutionContext
) => void | Promise<void>;
export type ExportedHandlerTestHandler<Env = unknown> = (
  controller: TestController,
  env: Env,
  ctx: ExecutionContext
) => void | Promise<void>;
export interface ExportedHandler<
  Env = unknown,
  QueueHandlerMessage = unknown,
  CfHostMetadata = unknown
> {
  fetch?: ExportedHandlerFetchHandler<Env, CfHostMetadata>;
  tail?: ExportedHandlerTailHandler<Env>;
  trace?: ExportedHandlerTraceHandler<Env>;
  scheduled?: ExportedHandlerScheduledHandler<Env>;
  test?: ExportedHandlerTestHandler<Env>;
  email?: EmailExportedHandler<Env>;
  queue?: ExportedHandlerQueueHandler<Env, QueueHandlerMessage>;
}
export interface StructuredSerializeOptions {
  transfer?: any[];
}
export declare abstract class PromiseRejectionEvent extends Event {
  readonly promise: Promise<any>;
  readonly reason: any;
}
export declare abstract class Navigator {
  readonly userAgent: string;
  readonly gpu: gpuGPU;
}
/** Provides access to performance-related information for the current page. It's part of the High Resolution Time API, but is enhanced by the Performance Timeline API, the Navigation Timing API, the User Timing API, and the Resource Timing API. */
export interface Performance {
  readonly timeOrigin: number;
  now(): number;
}
export interface DurableObject {
  fetch(request: Request): Response | Promise<Response>;
  alarm?(): void | Promise<void>;
  webSocketMessage?(
    ws: WebSocket,
    message: string | ArrayBuffer
  ): void | Promise<void>;
  webSocketClose?(
    ws: WebSocket,
    code: number,
    reason: string,
    wasClean: boolean
  ): void | Promise<void>;
  webSocketError?(ws: WebSocket, error: unknown): void | Promise<void>;
}
export interface DurableObjectStub extends Fetcher {
  readonly id: DurableObjectId;
  readonly name?: string;
}
export interface DurableObjectId {
  toString(): string;
  equals(other: DurableObjectId): boolean;
  readonly name?: string;
}
export interface DurableObjectNamespace {
  newUniqueId(
    options?: DurableObjectNamespaceNewUniqueIdOptions
  ): DurableObjectId;
  idFromName(name: string): DurableObjectId;
  idFromString(id: string): DurableObjectId;
  get(
    id: DurableObjectId,
    options?: DurableObjectNamespaceGetDurableObjectOptions
  ): DurableObjectStub;
  jurisdiction(jurisdiction: DurableObjectJurisdiction): DurableObjectNamespace;
}
export type DurableObjectJurisdiction = "eu" | "fedramp";
export interface DurableObjectNamespaceNewUniqueIdOptions {
  jurisdiction?: DurableObjectJurisdiction;
}
export type DurableObjectLocationHint =
  | "wnam"
  | "enam"
  | "sam"
  | "weur"
  | "eeur"
  | "apac"
  | "oc"
  | "afr"
  | "me";
export interface DurableObjectNamespaceGetDurableObjectOptions {
  locationHint?: DurableObjectLocationHint;
}
export interface DurableObjectState {
  waitUntil(promise: Promise<any>): void;
  readonly id: DurableObjectId;
  readonly storage: DurableObjectStorage;
  blockConcurrencyWhile<T>(callback: () => Promise<T>): Promise<T>;
  acceptWebSocket(ws: WebSocket, tags?: string[]): void;
  getWebSockets(tag?: string): WebSocket[];
  setWebSocketAutoResponse(maybeReqResp?: WebSocketRequestResponsePair): void;
  getWebSocketAutoResponse(): WebSocketRequestResponsePair | null;
  getWebSocketAutoResponseTimestamp(ws: WebSocket): Date | null;
}
export interface DurableObjectTransaction {
  get<T = unknown>(
    key: string,
    options?: DurableObjectGetOptions
  ): Promise<T | undefined>;
  get<T = unknown>(
    keys: string[],
    options?: DurableObjectGetOptions
  ): Promise<Map<string, T>>;
  list<T = unknown>(
    options?: DurableObjectListOptions
  ): Promise<Map<string, T>>;
  put<T>(
    key: string,
    value: T,
    options?: DurableObjectPutOptions
  ): Promise<void>;
  put<T>(
    entries: Record<string, T>,
    options?: DurableObjectPutOptions
  ): Promise<void>;
  delete(key: string, options?: DurableObjectPutOptions): Promise<boolean>;
  delete(keys: string[], options?: DurableObjectPutOptions): Promise<number>;
  rollback(): void;
  getAlarm(options?: DurableObjectGetAlarmOptions): Promise<number | null>;
  setAlarm(
    scheduledTime: number | Date,
    options?: DurableObjectSetAlarmOptions
  ): Promise<void>;
  deleteAlarm(options?: DurableObjectSetAlarmOptions): Promise<void>;
}
export interface DurableObjectStorage {
  get<T = unknown>(
    key: string,
    options?: DurableObjectGetOptions
  ): Promise<T | undefined>;
  get<T = unknown>(
    keys: string[],
    options?: DurableObjectGetOptions
  ): Promise<Map<string, T>>;
  list<T = unknown>(
    options?: DurableObjectListOptions
  ): Promise<Map<string, T>>;
  put<T>(
    key: string,
    value: T,
    options?: DurableObjectPutOptions
  ): Promise<void>;
  put<T>(
    entries: Record<string, T>,
    options?: DurableObjectPutOptions
  ): Promise<void>;
  delete(key: string, options?: DurableObjectPutOptions): Promise<boolean>;
  delete(keys: string[], options?: DurableObjectPutOptions): Promise<number>;
  deleteAll(options?: DurableObjectPutOptions): Promise<void>;
  transaction<T>(
    closure: (txn: DurableObjectTransaction) => Promise<T>
  ): Promise<T>;
  getAlarm(options?: DurableObjectGetAlarmOptions): Promise<number | null>;
  setAlarm(
    scheduledTime: number | Date,
    options?: DurableObjectSetAlarmOptions
  ): Promise<void>;
  deleteAlarm(options?: DurableObjectSetAlarmOptions): Promise<void>;
  sync(): Promise<void>;
  transactionSync<T>(closure: () => T): T;
}
export interface DurableObjectListOptions {
  start?: string;
  startAfter?: string;
  end?: string;
  prefix?: string;
  reverse?: boolean;
  limit?: number;
  allowConcurrency?: boolean;
  noCache?: boolean;
}
export interface DurableObjectGetOptions {
  allowConcurrency?: boolean;
  noCache?: boolean;
}
export interface DurableObjectGetAlarmOptions {
  allowConcurrency?: boolean;
}
export interface DurableObjectPutOptions {
  allowConcurrency?: boolean;
  allowUnconfirmed?: boolean;
  noCache?: boolean;
}
export interface DurableObjectSetAlarmOptions {
  allowConcurrency?: boolean;
  allowUnconfirmed?: boolean;
}
export declare class WebSocketRequestResponsePair {
  constructor(request: string, response: string);
  get request(): string;
  get response(): string;
}
export interface AnalyticsEngineDataset {
  writeDataPoint(event?: AnalyticsEngineDataPoint): void;
}
export interface AnalyticsEngineDataPoint {
  indexes?: ((ArrayBuffer | string) | null)[];
  doubles?: number[];
  blobs?: ((ArrayBuffer | string) | null)[];
}
export declare class Event {
  constructor(type: string, init?: EventInit);
  get type(): string;
  get eventPhase(): number;
  get composed(): boolean;
  get bubbles(): boolean;
  get cancelable(): boolean;
  get defaultPrevented(): boolean;
  get returnValue(): boolean;
  get currentTarget(): EventTarget | undefined;
  get srcElement(): EventTarget | undefined;
  get timeStamp(): number;
  get isTrusted(): boolean;
  get cancelBubble(): boolean;
  set cancelBubble(value: boolean);
  stopImmediatePropagation(): void;
  preventDefault(): void;
  stopPropagation(): void;
  composedPath(): EventTarget[];
  static readonly NONE: number;
  static readonly CAPTURING_PHASE: number;
  static readonly AT_TARGET: number;
  static readonly BUBBLING_PHASE: number;
}
export interface EventInit {
  bubbles?: boolean;
  cancelable?: boolean;
  composed?: boolean;
}
export type EventListener<EventType extends Event = Event> = (
  event: EventType
) => void;
export interface EventListenerObject<EventType extends Event = Event> {
  handleEvent(event: EventType): void;
}
export type EventListenerOrEventListenerObject<
  EventType extends Event = Event
> = EventListener<EventType> | EventListenerObject<EventType>;
export declare class EventTarget<
  EventMap extends Record<string, Event> = Record<string, Event>
> {
  constructor();
  addEventListener<Type extends keyof EventMap>(
    type: Type,
    handler: EventListenerOrEventListenerObject<EventMap[Type]>,
    options?: EventTargetAddEventListenerOptions | boolean
  ): void;
  removeEventListener<Type extends keyof EventMap>(
    type: Type,
    handler: EventListenerOrEventListenerObject<EventMap[Type]>,
    options?: EventTargetEventListenerOptions | boolean
  ): void;
  dispatchEvent(event: EventMap[keyof EventMap]): boolean;
}
export interface EventTargetEventListenerOptions {
  capture?: boolean;
}
export interface EventTargetAddEventListenerOptions {
  capture?: boolean;
  passive?: boolean;
  once?: boolean;
  signal?: AbortSignal;
}
export interface EventTargetHandlerObject {
  handleEvent: (event: Event) => any | undefined;
}
export declare class AbortController {
  constructor();
  get signal(): AbortSignal;
  abort(reason?: any): void;
}
export declare abstract class AbortSignal extends EventTarget {
  static abort(reason?: any): AbortSignal;
  static timeout(delay: number): AbortSignal;
  static any(signals: AbortSignal[]): AbortSignal;
  get aborted(): boolean;
  get reason(): any;
  throwIfAborted(): void;
}
export interface Scheduler {
  wait(delay: number, maybeOptions?: SchedulerWaitOptions): Promise<void>;
}
export interface SchedulerWaitOptions {
  signal?: AbortSignal;
}
export declare abstract class ExtendableEvent extends Event {
  waitUntil(promise: Promise<any>): void;
}
export declare class CustomEvent extends Event {
  constructor(type: string, init?: CustomEventCustomEventInit);
  get detail(): any | undefined;
}
export interface CustomEventCustomEventInit {
  bubbles?: boolean;
  cancelable?: boolean;
  composed?: boolean;
  detail?: any;
}
export declare class Blob {
  constructor(
    bits?: ((ArrayBuffer | ArrayBufferView) | string | Blob)[],
    options?: BlobOptions
  );
  get size(): number;
  get type(): string;
  slice(start?: number, end?: number, type?: string): Blob;
  arrayBuffer(): Promise<ArrayBuffer>;
  text(): Promise<string>;
  stream(): ReadableStream;
}
export interface BlobOptions {
  type?: string;
}
export declare class File extends Blob {
  constructor(
    bits: ((ArrayBuffer | ArrayBufferView) | string | Blob)[] | undefined,
    name: string,
    options?: FileOptions
  );
  get name(): string;
  get lastModified(): number;
}
export interface FileOptions {
  type?: string;
  lastModified?: number;
}
export declare abstract class CacheStorage {
  open(cacheName: string): Promise<Cache>;
  readonly default: Cache;
}
export declare abstract class Cache {
  delete(request: RequestInfo, options?: CacheQueryOptions): Promise<boolean>;
  match(
    request: RequestInfo,
    options?: CacheQueryOptions
  ): Promise<Response | undefined>;
  put(request: RequestInfo, response: Response): Promise<void>;
}
export interface CacheQueryOptions {
  ignoreMethod?: boolean;
}
export declare abstract class Crypto {
  get subtle(): SubtleCrypto;
  getRandomValues<
    T extends
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array
      | BigInt64Array
      | BigUint64Array
  >(buffer: T): T;
  randomUUID(): string;
  DigestStream: typeof DigestStream;
}
export declare abstract class SubtleCrypto {
  encrypt(
    algorithm: string | SubtleCryptoEncryptAlgorithm,
    key: CryptoKey,
    plainText: ArrayBuffer | ArrayBufferView
  ): Promise<ArrayBuffer>;
  decrypt(
    algorithm: string | SubtleCryptoEncryptAlgorithm,
    key: CryptoKey,
    cipherText: ArrayBuffer | ArrayBufferView
  ): Promise<ArrayBuffer>;
  sign(
    algorithm: string | SubtleCryptoSignAlgorithm,
    key: CryptoKey,
    data: ArrayBuffer | ArrayBufferView
  ): Promise<ArrayBuffer>;
  verify(
    algorithm: string | SubtleCryptoSignAlgorithm,
    key: CryptoKey,
    signature: ArrayBuffer | ArrayBufferView,
    data: ArrayBuffer | ArrayBufferView
  ): Promise<boolean>;
  digest(
    algorithm: string | SubtleCryptoHashAlgorithm,
    data: ArrayBuffer | ArrayBufferView
  ): Promise<ArrayBuffer>;
  generateKey(
    algorithm: string | SubtleCryptoGenerateKeyAlgorithm,
    extractable: boolean,
    keyUsages: string[]
  ): Promise<CryptoKey | CryptoKeyPair>;
  deriveKey(
    algorithm: string | SubtleCryptoDeriveKeyAlgorithm,
    baseKey: CryptoKey,
    derivedKeyAlgorithm: string | SubtleCryptoImportKeyAlgorithm,
    extractable: boolean,
    keyUsages: string[]
  ): Promise<CryptoKey>;
  deriveBits(
    algorithm: string | SubtleCryptoDeriveKeyAlgorithm,
    baseKey: CryptoKey,
    length: number | null
  ): Promise<ArrayBuffer>;
  importKey(
    format: string,
    keyData: (ArrayBuffer | ArrayBufferView) | JsonWebKey,
    algorithm: string | SubtleCryptoImportKeyAlgorithm,
    extractable: boolean,
    keyUsages: string[]
  ): Promise<CryptoKey>;
  exportKey(format: string, key: CryptoKey): Promise<ArrayBuffer | JsonWebKey>;
  wrapKey(
    format: string,
    key: CryptoKey,
    wrappingKey: CryptoKey,
    wrapAlgorithm: string | SubtleCryptoEncryptAlgorithm
  ): Promise<ArrayBuffer>;
  unwrapKey(
    format: string,
    wrappedKey: ArrayBuffer | ArrayBufferView,
    unwrappingKey: CryptoKey,
    unwrapAlgorithm: string | SubtleCryptoEncryptAlgorithm,
    unwrappedKeyAlgorithm: string | SubtleCryptoImportKeyAlgorithm,
    extractable: boolean,
    keyUsages: string[]
  ): Promise<CryptoKey>;
  timingSafeEqual(
    a: ArrayBuffer | ArrayBufferView,
    b: ArrayBuffer | ArrayBufferView
  ): boolean;
}
export declare abstract class CryptoKey {
  readonly type: string;
  readonly extractable: boolean;
  readonly algorithm:
    | CryptoKeyKeyAlgorithm
    | CryptoKeyAesKeyAlgorithm
    | CryptoKeyHmacKeyAlgorithm
    | CryptoKeyRsaKeyAlgorithm
    | CryptoKeyEllipticKeyAlgorithm
    | CryptoKeyArbitraryKeyAlgorithm;
  readonly usages: string[];
}
export interface CryptoKeyPair {
  publicKey: CryptoKey;
  privateKey: CryptoKey;
}
export interface JsonWebKey {
  kty: string;
  use?: string;
  key_ops?: string[];
  alg?: string;
  ext?: boolean;
  crv?: string;
  x?: string;
  y?: string;
  d?: string;
  n?: string;
  e?: string;
  p?: string;
  q?: string;
  dp?: string;
  dq?: string;
  qi?: string;
  oth?: RsaOtherPrimesInfo[];
  k?: string;
}
export interface RsaOtherPrimesInfo {
  r?: string;
  d?: string;
  t?: string;
}
export interface SubtleCryptoDeriveKeyAlgorithm {
  name: string;
  salt?: ArrayBuffer;
  iterations?: number;
  hash?: string | SubtleCryptoHashAlgorithm;
  $public?: CryptoKey;
  info?: ArrayBuffer;
}
export interface SubtleCryptoEncryptAlgorithm {
  name: string;
  iv?: ArrayBuffer;
  additionalData?: ArrayBuffer;
  tagLength?: number;
  counter?: ArrayBuffer;
  length?: number;
  label?: ArrayBuffer;
}
export interface SubtleCryptoGenerateKeyAlgorithm {
  name: string;
  hash?: string | SubtleCryptoHashAlgorithm;
  modulusLength?: number;
  publicExponent?: ArrayBuffer;
  length?: number;
  namedCurve?: string;
}
export interface SubtleCryptoHashAlgorithm {
  name: string;
}
export interface SubtleCryptoImportKeyAlgorithm {
  name: string;
  hash?: string | SubtleCryptoHashAlgorithm;
  length?: number;
  namedCurve?: string;
  compressed?: boolean;
}
export interface SubtleCryptoSignAlgorithm {
  name: string;
  hash?: string | SubtleCryptoHashAlgorithm;
  dataLength?: number;
  saltLength?: number;
}
export interface CryptoKeyKeyAlgorithm {
  name: string;
}
export interface CryptoKeyAesKeyAlgorithm {
  name: string;
  length: number;
}
export interface CryptoKeyHmacKeyAlgorithm {
  name: string;
  hash: CryptoKeyKeyAlgorithm;
  length: number;
}
export interface CryptoKeyRsaKeyAlgorithm {
  name: string;
  modulusLength: number;
  publicExponent: ArrayBuffer | (ArrayBuffer | ArrayBufferView);
  hash?: CryptoKeyKeyAlgorithm;
}
export interface CryptoKeyEllipticKeyAlgorithm {
  name: string;
  namedCurve: string;
}
export interface CryptoKeyArbitraryKeyAlgorithm {
  name: string;
  hash?: CryptoKeyKeyAlgorithm;
  namedCurve?: string;
  length?: number;
}
export declare class DigestStream extends WritableStream<
  ArrayBuffer | ArrayBufferView
> {
  constructor(algorithm: string | SubtleCryptoHashAlgorithm);
  get digest(): Promise<ArrayBuffer>;
}
export declare class TextDecoder {
  constructor(decoder?: string, options?: TextDecoderConstructorOptions);
  decode(
    input?: ArrayBuffer | ArrayBufferView,
    options?: TextDecoderDecodeOptions
  ): string;
  get encoding(): string;
  get fatal(): boolean;
  get ignoreBOM(): boolean;
}
export declare class TextEncoder {
  constructor();
  encode(input?: string): Uint8Array;
  encodeInto(
    input: string,
    buffer: ArrayBuffer | ArrayBufferView
  ): TextEncoderEncodeIntoResult;
  get encoding(): string;
}
export interface TextDecoderConstructorOptions {
  fatal: boolean;
  ignoreBOM: boolean;
}
export interface TextDecoderDecodeOptions {
  stream: boolean;
}
export interface TextEncoderEncodeIntoResult {
  read: number;
  written: number;
}
export declare class FormData {
  constructor();
  append(name: string, value: string): void;
  append(name: string, value: Blob, filename?: string): void;
  delete(name: string): void;
  get(name: string): (File | string) | null;
  getAll(name: string): (File | string)[];
  has(name: string): boolean;
  set(name: string, value: string): void;
  set(name: string, value: Blob, filename?: string): void;
  entries(): IterableIterator<[key: string, value: File | string]>;
  keys(): IterableIterator<string>;
  values(): IterableIterator<File | string>;
  forEach<This = unknown>(
    callback: (
      this: This,
      value: File | string,
      key: string,
      parent: FormData
    ) => void,
    thisArg?: This
  ): void;
  [Symbol.iterator](): IterableIterator<[key: string, value: File | string]>;
}
export interface ContentOptions {
  html?: boolean;
}
export declare class HTMLRewriter {
  constructor();
  on(
    selector: string,
    handlers: HTMLRewriterElementContentHandlers
  ): HTMLRewriter;
  onDocument(handlers: HTMLRewriterDocumentContentHandlers): HTMLRewriter;
  transform(response: Response): Response;
}
export interface HTMLRewriterElementContentHandlers {
  element?(element: Element): void | Promise<void>;
  comments?(comment: Comment): void | Promise<void>;
  text?(element: Text): void | Promise<void>;
}
export interface HTMLRewriterDocumentContentHandlers {
  doctype?(doctype: Doctype): void | Promise<void>;
  comments?(comment: Comment): void | Promise<void>;
  text?(text: Text): void | Promise<void>;
  end?(end: DocumentEnd): void | Promise<void>;
}
export interface Doctype {
  readonly name: string | null;
  readonly publicId: string | null;
  readonly systemId: string | null;
}
export interface Element {
  tagName: string;
  readonly attributes: IterableIterator<string[]>;
  readonly removed: boolean;
  readonly namespaceURI: string;
  getAttribute(name: string): string | null;
  hasAttribute(name: string): boolean;
  setAttribute(name: string, value: string): Element;
  removeAttribute(name: string): Element;
  before(content: string, options?: ContentOptions): Element;
  after(content: string, options?: ContentOptions): Element;
  prepend(content: string, options?: ContentOptions): Element;
  append(content: string, options?: ContentOptions): Element;
  replace(content: string, options?: ContentOptions): Element;
  remove(): Element;
  removeAndKeepContent(): Element;
  setInnerContent(content: string, options?: ContentOptions): Element;
  onEndTag(handler: (tag: EndTag) => void | Promise<void>): void;
}
export interface EndTag {
  name: string;
  before(content: string, options?: ContentOptions): EndTag;
  after(content: string, options?: ContentOptions): EndTag;
  remove(): EndTag;
}
export interface Comment {
  text: string;
  readonly removed: boolean;
  before(content: string, options?: ContentOptions): Comment;
  after(content: string, options?: ContentOptions): Comment;
  replace(content: string, options?: ContentOptions): Comment;
  remove(): Comment;
}
export interface Text {
  readonly text: string;
  readonly lastInTextNode: boolean;
  readonly removed: boolean;
  before(content: string, options?: ContentOptions): Text;
  after(content: string, options?: ContentOptions): Text;
  replace(content: string, options?: ContentOptions): Text;
  remove(): Text;
}
export interface DocumentEnd {
  append(content: string, options?: ContentOptions): DocumentEnd;
}
export declare abstract class FetchEvent extends ExtendableEvent {
  readonly request: Request;
  respondWith(promise: Response | Promise<Response>): void;
  passThroughOnException(): void;
}
export type HeadersInit =
  | Headers
  | Iterable<Iterable<string>>
  | Record<string, string>;
export declare class Headers {
  constructor(init?: HeadersInit);
  get(name: string): string | null;
  getAll(name: string): string[];
  has(name: string): boolean;
  set(name: string, value: string): void;
  append(name: string, value: string): void;
  delete(name: string): void;
  forEach<This = unknown>(
    callback: (this: This, value: string, key: string, parent: Headers) => void,
    thisArg?: This
  ): void;
  entries(): IterableIterator<[key: string, value: string]>;
  keys(): IterableIterator<string>;
  values(): IterableIterator<string>;
  [Symbol.iterator](): IterableIterator<[key: string, value: string]>;
}
export type BodyInit =
  | ReadableStream<Uint8Array>
  | string
  | ArrayBuffer
  | ArrayBufferView
  | Blob
  | URLSearchParams
  | FormData;
export declare abstract class Body {
  get body(): ReadableStream | null;
  get bodyUsed(): boolean;
  arrayBuffer(): Promise<ArrayBuffer>;
  text(): Promise<string>;
  json<T>(): Promise<T>;
  formData(): Promise<FormData>;
  blob(): Promise<Blob>;
}
export declare class Response extends Body {
  constructor(body?: BodyInit | null, init?: ResponseInit);
  static redirect(url: string, status?: number): Response;
  static json(any: any, maybeInit?: ResponseInit | Response): Response;
  clone(): Response;
  get status(): number;
  get statusText(): string;
  get headers(): Headers;
  get ok(): boolean;
  get redirected(): boolean;
  get url(): string;
  get webSocket(): WebSocket | null;
  get cf(): any | undefined;
}
export interface ResponseInit {
  status?: number;
  statusText?: string;
  headers?: HeadersInit;
  cf?: any;
  webSocket?: WebSocket | null;
  encodeBody?: "automatic" | "manual";
}
export type RequestInfo<
  CfHostMetadata = unknown,
  Cf = CfProperties<CfHostMetadata>
> = Request<CfHostMetadata, Cf> | string | URL;
export declare class Request<
  CfHostMetadata = unknown,
  Cf = CfProperties<CfHostMetadata>
> extends Body {
  constructor(input: RequestInfo<CfProperties>, init?: RequestInit<Cf>);
  clone(): Request<CfHostMetadata, Cf>;
  get method(): string;
  get url(): string;
  get headers(): Headers;
  get redirect(): string;
  get fetcher(): Fetcher | null;
  get signal(): AbortSignal;
  get cf(): Cf | undefined;
  get integrity(): string;
  get keepalive(): boolean;
}
export interface RequestInit<Cf = CfProperties> {
  /** A string to set request's method. */
  method?: string;
  /** A Headers object, an object literal, or an array of two-item arrays to set request's headers. */
  headers?: HeadersInit;
  /** A BodyInit object or null to set request's body. */
  body?: BodyInit | null;
  /** A string indicating whether request follows redirects, results in an error upon encountering a redirect, or returns the redirect (in an opaque fashion). Sets request's redirect. */
  redirect?: string;
  fetcher?: Fetcher | null;
  cf?: Cf;
  /** A cryptographic hash of the resource to be fetched by request. Sets request's integrity. */
  integrity?: string;
  /** An AbortSignal to set request's signal. */
  signal?: AbortSignal | null;
}
export declare abstract class Fetcher {
  fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
  connect(address: SocketAddress | string, options?: SocketOptions): Socket;
}
export interface FetcherPutOptions {
  expiration?: number;
  expirationTtl?: number;
}
export interface KVNamespaceListKey<Metadata, Key extends string = string> {
  name: Key;
  expiration?: number;
  metadata?: Metadata;
}
export type KVNamespaceListResult<Metadata, Key extends string = string> =
  | {
      list_complete: false;
      keys: KVNamespaceListKey<Metadata, Key>[];
      cursor: string;
      cacheStatus: string | null;
    }
  | {
      list_complete: true;
      keys: KVNamespaceListKey<Metadata, Key>[];
      cacheStatus: string | null;
    };
export interface KVNamespace<Key extends string = string> {
  get(
    key: Key,
    options?: Partial<KVNamespaceGetOptions<undefined>>
  ): Promise<string | null>;
  get(key: Key, type: "text"): Promise<string | null>;
  get<ExpectedValue = unknown>(
    key: Key,
    type: "json"
  ): Promise<ExpectedValue | null>;
  get(key: Key, type: "arrayBuffer"): Promise<ArrayBuffer | null>;
  get(key: Key, type: "stream"): Promise<ReadableStream | null>;
  get(
    key: Key,
    options?: KVNamespaceGetOptions<"text">
  ): Promise<string | null>;
  get<ExpectedValue = unknown>(
    key: Key,
    options?: KVNamespaceGetOptions<"json">
  ): Promise<ExpectedValue | null>;
  get(
    key: Key,
    options?: KVNamespaceGetOptions<"arrayBuffer">
  ): Promise<ArrayBuffer | null>;
  get(
    key: Key,
    options?: KVNamespaceGetOptions<"stream">
  ): Promise<ReadableStream | null>;
  list<Metadata = unknown>(
    options?: KVNamespaceListOptions
  ): Promise<KVNamespaceListResult<Metadata, Key>>;
  put(
    key: Key,
    value: string | ArrayBuffer | ArrayBufferView | ReadableStream,
    options?: KVNamespacePutOptions
  ): Promise<void>;
  getWithMetadata<Metadata = unknown>(
    key: Key,
    options?: Partial<KVNamespaceGetOptions<undefined>>
  ): Promise<KVNamespaceGetWithMetadataResult<string, Metadata>>;
  getWithMetadata<Metadata = unknown>(
    key: Key,
    type: "text"
  ): Promise<KVNamespaceGetWithMetadataResult<string, Metadata>>;
  getWithMetadata<ExpectedValue = unknown, Metadata = unknown>(
    key: Key,
    type: "json"
  ): Promise<KVNamespaceGetWithMetadataResult<ExpectedValue, Metadata>>;
  getWithMetadata<Metadata = unknown>(
    key: Key,
    type: "arrayBuffer"
  ): Promise<KVNamespaceGetWithMetadataResult<ArrayBuffer, Metadata>>;
  getWithMetadata<Metadata = unknown>(
    key: Key,
    type: "stream"
  ): Promise<KVNamespaceGetWithMetadataResult<ReadableStream, Metadata>>;
  getWithMetadata<Metadata = unknown>(
    key: Key,
    options: KVNamespaceGetOptions<"text">
  ): Promise<KVNamespaceGetWithMetadataResult<string, Metadata>>;
  getWithMetadata<ExpectedValue = unknown, Metadata = unknown>(
    key: Key,
    options: KVNamespaceGetOptions<"json">
  ): Promise<KVNamespaceGetWithMetadataResult<ExpectedValue, Metadata>>;
  getWithMetadata<Metadata = unknown>(
    key: Key,
    options: KVNamespaceGetOptions<"arrayBuffer">
  ): Promise<KVNamespaceGetWithMetadataResult<ArrayBuffer, Metadata>>;
  getWithMetadata<Metadata = unknown>(
    key: Key,
    options: KVNamespaceGetOptions<"stream">
  ): Promise<KVNamespaceGetWithMetadataResult<ReadableStream, Metadata>>;
  delete(key: Key): Promise<void>;
}
export interface KVNamespaceListOptions {
  limit?: number;
  prefix?: string | null;
  cursor?: string | null;
}
export interface KVNamespaceGetOptions<Type> {
  type: Type;
  cacheTtl?: number;
}
export interface KVNamespacePutOptions {
  expiration?: number;
  expirationTtl?: number;
  metadata?: any | null;
}
export interface KVNamespaceGetWithMetadataResult<Value, Metadata> {
  value: Value | null;
  metadata: Metadata | null;
  cacheStatus: string | null;
}
export type QueueContentType = "text" | "bytes" | "json" | "v8";
export interface Queue<Body = unknown> {
  send(message: Body, options?: QueueSendOptions): Promise<void>;
  sendBatch(messages: Iterable<MessageSendRequest<Body>>): Promise<void>;
}
export interface QueueSendOptions {
  contentType?: QueueContentType;
}
export interface MessageSendRequest<Body = unknown> {
  body: Body;
  contentType?: QueueContentType;
}
export interface Message<Body = unknown> {
  readonly id: string;
  readonly timestamp: Date;
  readonly body: Body;
  retry(): void;
  ack(): void;
}
export interface QueueEvent<Body = unknown> extends ExtendableEvent {
  readonly messages: readonly Message<Body>[];
  readonly queue: string;
  retryAll(): void;
  ackAll(): void;
}
export interface MessageBatch<Body = unknown> {
  readonly messages: readonly Message<Body>[];
  readonly queue: string;
  retryAll(): void;
  ackAll(): void;
}
export interface R2Error extends Error {
  readonly name: string;
  readonly code: number;
  readonly message: string;
  readonly action: string;
  readonly stack: any;
}
export interface R2ListOptions {
  limit?: number;
  prefix?: string;
  cursor?: string;
  delimiter?: string;
  startAfter?: string;
}
export declare abstract class R2Bucket {
  head(key: string): Promise<R2Object | null>;
  get(
    key: string,
    options: R2GetOptions & {
      onlyIf: R2Conditional | Headers;
    }
  ): Promise<R2ObjectBody | R2Object | null>;
  get(key: string, options?: R2GetOptions): Promise<R2ObjectBody | null>;
  put(
    key: string,
    value:
      | ReadableStream
      | ArrayBuffer
      | ArrayBufferView
      | string
      | null
      | Blob,
    options?: R2PutOptions & {
      onlyIf: R2Conditional | Headers;
    }
  ): Promise<R2Object | null>;
  put(
    key: string,
    value:
      | ReadableStream
      | ArrayBuffer
      | ArrayBufferView
      | string
      | null
      | Blob,
    options?: R2PutOptions
  ): Promise<R2Object>;
  createMultipartUpload(
    key: string,
    options?: R2MultipartOptions
  ): Promise<R2MultipartUpload>;
  resumeMultipartUpload(key: string, uploadId: string): R2MultipartUpload;
  delete(keys: string | string[]): Promise<void>;
  list(options?: R2ListOptions): Promise<R2Objects>;
}
export interface R2MultipartUpload {
  readonly key: string;
  readonly uploadId: string;
  uploadPart(
    partNumber: number,
    value: ReadableStream | (ArrayBuffer | ArrayBufferView) | string | Blob
  ): Promise<R2UploadedPart>;
  abort(): Promise<void>;
  complete(uploadedParts: R2UploadedPart[]): Promise<R2Object>;
}
export interface R2UploadedPart {
  partNumber: number;
  etag: string;
}
export declare abstract class R2Object {
  readonly key: string;
  readonly version: string;
  readonly size: number;
  readonly etag: string;
  readonly httpEtag: string;
  readonly checksums: R2Checksums;
  readonly uploaded: Date;
  readonly httpMetadata?: R2HTTPMetadata;
  readonly customMetadata?: Record<string, string>;
  readonly range?: R2Range;
  writeHttpMetadata(headers: Headers): void;
}
export interface R2ObjectBody extends R2Object {
  get body(): ReadableStream;
  get bodyUsed(): boolean;
  arrayBuffer(): Promise<ArrayBuffer>;
  text(): Promise<string>;
  json<T>(): Promise<T>;
  blob(): Promise<Blob>;
}
export type R2Range =
  | {
      offset: number;
      length?: number;
    }
  | {
      offset?: number;
      length: number;
    }
  | {
      suffix: number;
    };
export interface R2Conditional {
  etagMatches?: string;
  etagDoesNotMatch?: string;
  uploadedBefore?: Date;
  uploadedAfter?: Date;
  secondsGranularity?: boolean;
}
export interface R2GetOptions {
  onlyIf?: R2Conditional | Headers;
  range?: R2Range | Headers;
}
export interface R2PutOptions {
  onlyIf?: R2Conditional | Headers;
  httpMetadata?: R2HTTPMetadata | Headers;
  customMetadata?: Record<string, string>;
  md5?: ArrayBuffer | string;
  sha1?: ArrayBuffer | string;
  sha256?: ArrayBuffer | string;
  sha384?: ArrayBuffer | string;
  sha512?: ArrayBuffer | string;
}
export interface R2MultipartOptions {
  httpMetadata?: R2HTTPMetadata | Headers;
  customMetadata?: Record<string, string>;
}
export interface R2Checksums {
  readonly md5?: ArrayBuffer;
  readonly sha1?: ArrayBuffer;
  readonly sha256?: ArrayBuffer;
  readonly sha384?: ArrayBuffer;
  readonly sha512?: ArrayBuffer;
  toJSON(): R2StringChecksums;
}
export interface R2StringChecksums {
  md5?: string;
  sha1?: string;
  sha256?: string;
  sha384?: string;
  sha512?: string;
}
export interface R2HTTPMetadata {
  contentType?: string;
  contentLanguage?: string;
  contentDisposition?: string;
  contentEncoding?: string;
  cacheControl?: string;
  cacheExpiry?: Date;
}
export type R2Objects = {
  objects: R2Object[];
  delimitedPrefixes: string[];
} & (
  | {
      truncated: true;
      cursor: string;
    }
  | {
      truncated: false;
    }
);
export declare abstract class ScheduledEvent extends ExtendableEvent {
  readonly scheduledTime: number;
  readonly cron: string;
  noRetry(): void;
}
export interface ScheduledController {
  readonly scheduledTime: number;
  readonly cron: string;
  noRetry(): void;
}
export interface QueuingStrategy<T = any> {
  highWaterMark?: number | bigint;
  size?: (chunk: T) => number | bigint;
}
export interface UnderlyingSink<W = any> {
  type?: string;
  start?: (controller: WritableStreamDefaultController) => void | Promise<void>;
  write?: (
    chunk: W,
    controller: WritableStreamDefaultController
  ) => void | Promise<void>;
  abort?: (reason: any) => void | Promise<void>;
  close?: () => void | Promise<void>;
}
export interface UnderlyingByteSource {
  type: "bytes";
  autoAllocateChunkSize?: number;
  start?: (controller: ReadableByteStreamController) => void | Promise<void>;
  pull?: (controller: ReadableByteStreamController) => void | Promise<void>;
  cancel?: (reason: any) => void | Promise<void>;
}
export interface UnderlyingSource<R = any> {
  type?: "" | undefined;
  start?: (
    controller: ReadableStreamDefaultController<R>
  ) => void | Promise<void>;
  pull?: (
    controller: ReadableStreamDefaultController<R>
  ) => void | Promise<void>;
  cancel?: (reason: any) => void | Promise<void>;
}
export interface Transformer<I = any, O = any> {
  readableType?: string;
  writableType?: string;
  start?: (
    controller: TransformStreamDefaultController<O>
  ) => void | Promise<void>;
  transform?: (
    chunk: I,
    controller: TransformStreamDefaultController<O>
  ) => void | Promise<void>;
  flush?: (
    controller: TransformStreamDefaultController<O>
  ) => void | Promise<void>;
}
export interface StreamPipeOptions {
  /**
   * Pipes this readable stream to a given writable stream destination. The way in which the piping process behaves under various error conditions can be customized with a number of passed options. It returns a promise that fulfills when the piping process completes successfully, or rejects if any errors were encountered.
   *
   * Piping a stream will lock it for the duration of the pipe, preventing any other consumer from acquiring a reader.
   *
   * Errors and closures of the source and destination streams propagate as follows:
   *
   * An error in this source readable stream will abort destination, unless preventAbort is truthy. The returned promise will be rejected with the source's error, or with any error that occurs during aborting the destination.
   *
   * An error in destination will cancel this source readable stream, unless preventCancel is truthy. The returned promise will be rejected with the destination's error, or with any error that occurs during canceling the source.
   *
   * When this source readable stream closes, destination will be closed, unless preventClose is truthy. The returned promise will be fulfilled once this process completes, unless an error is encountered while closing the destination, in which case it will be rejected with that error.
   *
   * If destination starts out closed or closing, this source readable stream will be canceled, unless preventCancel is true. The returned promise will be rejected with an error indicating piping to a closed stream failed, or with any error that occurs during canceling the source.
   *
   * The signal option can be set to an AbortSignal to allow aborting an ongoing pipe operation via the corresponding AbortController. In this case, this source readable stream will be canceled, and destination aborted, unless the respective options preventCancel or preventAbort are set.
   */
  preventClose?: boolean;
  preventAbort?: boolean;
  preventCancel?: boolean;
  signal?: AbortSignal;
}
export type ReadableStreamReadResult<R = any> =
  | {
      done: false;
      value: R;
    }
  | {
      done: true;
      value?: undefined;
    };
/** This Streams API interface represents a readable stream of byte data. The Fetch API offers a concrete instance of a ReadableStream through the body property of a Response object. */
export interface ReadableStream<R = any> {
  get locked(): boolean;
  cancel(reason?: any): Promise<void>;
  getReader(): ReadableStreamDefaultReader<R>;
  getReader(options: ReadableStreamGetReaderOptions): ReadableStreamBYOBReader;
  pipeThrough<T>(
    transform: ReadableWritablePair<T, R>,
    options?: StreamPipeOptions
  ): ReadableStream<T>;
  pipeTo(
    destination: WritableStream<R>,
    options?: StreamPipeOptions
  ): Promise<void>;
  tee(): [ReadableStream<R>, ReadableStream<R>];
  values(options?: ReadableStreamValuesOptions): AsyncIterableIterator<R>;
  [Symbol.asyncIterator](
    options?: ReadableStreamValuesOptions
  ): AsyncIterableIterator<R>;
}
export declare const ReadableStream: {
  prototype: ReadableStream;
  new (
    underlyingSource: UnderlyingByteSource,
    strategy?: QueuingStrategy<Uint8Array>
  ): ReadableStream<Uint8Array>;
  new <R = any>(
    underlyingSource?: UnderlyingSource<R>,
    strategy?: QueuingStrategy<R>
  ): ReadableStream<R>;
};
export declare class ReadableStreamDefaultReader<R = any> {
  constructor(stream: ReadableStream);
  get closed(): Promise<void>;
  cancel(reason?: any): Promise<void>;
  read(): Promise<ReadableStreamReadResult<R>>;
  releaseLock(): void;
}
export declare class ReadableStreamBYOBReader {
  constructor(stream: ReadableStream);
  get closed(): Promise<void>;
  cancel(reason?: any): Promise<void>;
  read<T extends ArrayBufferView>(
    view: T
  ): Promise<ReadableStreamReadResult<T>>;
  releaseLock(): void;
  readAtLeast<T extends ArrayBufferView>(
    minElements: number,
    view: T
  ): Promise<ReadableStreamReadResult<T>>;
}
export interface ReadableStreamGetReaderOptions {
  mode: "byob";
}
export interface ReadableStreamBYOBRequest {
  readonly view: Uint8Array | null;
  respond(bytesWritten: number): void;
  respondWithNewView(view: ArrayBuffer | ArrayBufferView): void;
  readonly atLeast: number | null;
}
export interface ReadableStreamDefaultController<R = any> {
  readonly desiredSize: number | null;
  close(): void;
  enqueue(chunk?: R): void;
  error(reason: any): void;
}
export interface ReadableByteStreamController {
  readonly byobRequest: ReadableStreamBYOBRequest | null;
  readonly desiredSize: number | null;
  close(): void;
  enqueue(chunk: ArrayBuffer | ArrayBufferView): void;
  error(reason: any): void;
}
/** This Streams API interface represents a controller allowing control of a WritableStream's state. When constructing a WritableStream, the underlying sink is given a corresponding WritableStreamDefaultController instance to manipulate. */
export interface WritableStreamDefaultController {
  readonly signal: AbortSignal;
  error(reason?: any): void;
}
export interface TransformStreamDefaultController<O = any> {
  get desiredSize(): number | null;
  enqueue(chunk?: O): void;
  error(reason: any): void;
  terminate(): void;
}
export interface ReadableWritablePair<R = any, W = any> {
  /**
   * Provides a convenient, chainable way of piping this readable stream through a transform stream (or any other { writable, readable } pair). It simply pipes the stream into the writable side of the supplied pair, and returns the readable side for further use.
   *
   * Piping a stream will lock it for the duration of the pipe, preventing any other consumer from acquiring a reader.
   */
  writable: WritableStream<W>;
  readable: ReadableStream<R>;
}
export declare class WritableStream<W = any> {
  constructor(
    underlyingSink?: UnderlyingSink,
    queuingStrategy?: QueuingStrategy
  );
  get locked(): boolean;
  abort(reason?: any): Promise<void>;
  close(): Promise<void>;
  getWriter(): WritableStreamDefaultWriter<W>;
}
export declare class WritableStreamDefaultWriter<W = any> {
  constructor(stream: WritableStream);
  get closed(): Promise<void>;
  get ready(): Promise<void>;
  get desiredSize(): number | null;
  abort(reason?: any): Promise<void>;
  close(): Promise<void>;
  write(chunk?: W): Promise<void>;
  releaseLock(): void;
}
export declare class TransformStream<I = any, O = any> {
  constructor(
    transformer?: Transformer<I, O>,
    writableStrategy?: QueuingStrategy<I>,
    readableStrategy?: QueuingStrategy<O>
  );
  get readable(): ReadableStream<O>;
  get writable(): WritableStream<I>;
}
export declare class FixedLengthStream extends IdentityTransformStream {
  constructor(
    expectedLength: number | bigint,
    queuingStrategy?: IdentityTransformStreamQueuingStrategy
  );
}
export declare class IdentityTransformStream extends TransformStream<
  ArrayBuffer | ArrayBufferView,
  Uint8Array
> {
  constructor(queuingStrategy?: IdentityTransformStreamQueuingStrategy);
}
export interface IdentityTransformStreamQueuingStrategy {
  highWaterMark?: number | bigint;
}
export interface ReadableStreamValuesOptions {
  preventCancel?: boolean;
}
export declare class CompressionStream extends TransformStream<
  ArrayBuffer | ArrayBufferView,
  Uint8Array
> {
  constructor(format: "gzip" | "deflate" | "deflate-raw");
}
export declare class DecompressionStream extends TransformStream<
  ArrayBuffer | ArrayBufferView,
  Uint8Array
> {
  constructor(format: "gzip" | "deflate" | "deflate-raw");
}
export declare class TextEncoderStream extends TransformStream<
  string,
  Uint8Array
> {
  constructor();
}
export declare class TextDecoderStream extends TransformStream<
  ArrayBuffer | ArrayBufferView,
  string
> {
  constructor(label?: string, options?: TextDecoderStreamTextDecoderStreamInit);
}
export interface TextDecoderStreamTextDecoderStreamInit {
  fatal?: boolean;
}
export declare class ByteLengthQueuingStrategy
  implements QueuingStrategy<ArrayBufferView>
{
  constructor(init: QueuingStrategyInit);
  get highWaterMark(): number;
  get size(): (chunk?: any) => number;
}
export declare class CountQueuingStrategy implements QueuingStrategy {
  constructor(init: QueuingStrategyInit);
  get highWaterMark(): number;
  get size(): (chunk?: any) => number;
}
export interface QueuingStrategyInit {
  /**
   * Creates a new ByteLengthQueuingStrategy with the provided high water mark.
   *
   * Note that the provided high water mark will not be validated ahead of time. Instead, if it is negative, NaN, or not a number, the resulting ByteLengthQueuingStrategy will cause the corresponding stream constructor to throw.
   */
  highWaterMark: number;
}
export declare abstract class TailEvent extends ExtendableEvent {
  readonly events: TraceItem[];
  readonly traces: TraceItem[];
}
export interface TraceItem {
  readonly event:
    | (
        | TraceItemFetchEventInfo
        | TraceItemScheduledEventInfo
        | TraceItemAlarmEventInfo
        | TraceItemQueueEventInfo
        | TraceItemEmailEventInfo
        | TraceItemTailEventInfo
        | TraceItemCustomEventInfo
      )
    | null;
  readonly eventTimestamp: number | null;
  readonly logs: TraceLog[];
  readonly exceptions: TraceException[];
  readonly diagnosticsChannelEvents: TraceDiagnosticChannelEvent[];
  readonly scriptName: string | null;
  readonly dispatchNamespace?: string;
  readonly scriptTags?: string[];
  readonly outcome: string;
}
export interface TraceItemAlarmEventInfo {
  readonly scheduledTime: Date;
}
export interface TraceItemCustomEventInfo {}
export interface TraceItemScheduledEventInfo {
  readonly scheduledTime: number;
  readonly cron: string;
}
export interface TraceItemQueueEventInfo {
  readonly queue: string;
  readonly batchSize: number;
}
export interface TraceItemEmailEventInfo {
  readonly mailFrom: string;
  readonly rcptTo: string;
  readonly rawSize: number;
}
export interface TraceItemTailEventInfo {
  readonly consumedEvents: TraceItemTailEventInfoTailItem[];
}
export interface TraceItemTailEventInfoTailItem {
  readonly scriptName: string | null;
}
export interface TraceItemFetchEventInfo {
  readonly response?: TraceItemFetchEventInfoResponse;
  readonly request: TraceItemFetchEventInfoRequest;
}
export interface TraceItemFetchEventInfoRequest {
  readonly cf?: any;
  readonly headers: Record<string, string>;
  readonly method: string;
  readonly url: string;
  getUnredacted(): TraceItemFetchEventInfoRequest;
}
export interface TraceItemFetchEventInfoResponse {
  readonly status: number;
}
export interface TraceLog {
  readonly timestamp: number;
  readonly level: string;
  readonly message: any;
}
export interface TraceException {
  readonly timestamp: number;
  readonly message: string;
  readonly name: string;
}
export interface TraceDiagnosticChannelEvent {
  readonly timestamp: number;
  readonly channel: string;
  readonly message: any;
}
export interface TraceMetrics {
  readonly cpuTime: number;
  readonly wallTime: number;
}
export interface UnsafeTraceMetrics {
  fromTrace(item: TraceItem): TraceMetrics;
}
export declare class URL {
  constructor(url: string | URL, base?: string | URL);
  get href(): string;
  set href(value: string);
  get origin(): string;
  get protocol(): string;
  set protocol(value: string);
  get username(): string;
  set username(value: string);
  get password(): string;
  set password(value: string);
  get host(): string;
  set host(value: string);
  get hostname(): string;
  set hostname(value: string);
  get port(): string;
  set port(value: string);
  get pathname(): string;
  set pathname(value: string);
  get search(): string;
  set search(value: string);
  get searchParams(): URLSearchParams;
  get hash(): string;
  set hash(value: string);
  toString(): string;
  toJSON(): string;
}
export declare class URLSearchParams {
  constructor(
    init?:
      | URLSearchParams
      | string
      | Record<string, string>
      | [key: string, value: string][]
  );
  get size(): number;
  append(name: string, value: string): void;
  delete(name: string): void;
  get(name: string): string | null;
  getAll(name: string): string[];
  has(name: string): boolean;
  set(name: string, value: string): void;
  sort(): void;
  entries(): IterableIterator<[key: string, value: string]>;
  keys(): IterableIterator<string>;
  values(): IterableIterator<string>;
  forEach<This = unknown>(
    callback: (
      this: This,
      value: string,
      key: string,
      parent: URLSearchParams
    ) => void,
    thisArg?: This
  ): void;
  toString(): string;
  [Symbol.iterator](): IterableIterator<[key: string, value: string]>;
}
export declare class URLPattern {
  constructor(input?: string | URLPatternURLPatternInit, baseURL?: string);
  get protocol(): string;
  get username(): string;
  get password(): string;
  get hostname(): string;
  get port(): string;
  get pathname(): string;
  get search(): string;
  get hash(): string;
  test(input?: string | URLPatternURLPatternInit, baseURL?: string): boolean;
  exec(
    input?: string | URLPatternURLPatternInit,
    baseURL?: string
  ): URLPatternURLPatternResult | null;
}
export interface URLPatternURLPatternInit {
  protocol?: string;
  username?: string;
  password?: string;
  hostname?: string;
  port?: string;
  pathname?: string;
  search?: string;
  hash?: string;
  baseURL?: string;
}
export interface URLPatternURLPatternComponentResult {
  input: string;
  groups: Record<string, string>;
}
export interface URLPatternURLPatternResult {
  inputs: (string | URLPatternURLPatternInit)[];
  protocol: URLPatternURLPatternComponentResult;
  username: URLPatternURLPatternComponentResult;
  password: URLPatternURLPatternComponentResult;
  hostname: URLPatternURLPatternComponentResult;
  port: URLPatternURLPatternComponentResult;
  pathname: URLPatternURLPatternComponentResult;
  search: URLPatternURLPatternComponentResult;
  hash: URLPatternURLPatternComponentResult;
}
export declare class CloseEvent extends Event {
  constructor(type: string, initializer: CloseEventInit);
  /** Returns the WebSocket connection close code provided by the server. */
  readonly code: number;
  /** Returns the WebSocket connection close reason provided by the server. */
  readonly reason: string;
  /** Returns true if the connection closed cleanly; false otherwise. */
  readonly wasClean: boolean;
}
export interface CloseEventInit {
  code?: number;
  reason?: string;
  wasClean?: boolean;
}
export declare class MessageEvent extends Event {
  constructor(type: string, initializer: MessageEventInit);
  readonly data: ArrayBuffer | string;
}
export interface MessageEventInit {
  data: ArrayBuffer | string;
}
/** Events providing information related to errors in scripts or in files. */
export interface ErrorEvent extends Event {
  readonly filename: string;
  readonly message: string;
  readonly lineno: number;
  readonly colno: number;
  readonly error: any;
}
export type WebSocketEventMap = {
  close: CloseEvent;
  message: MessageEvent;
  open: Event;
  error: ErrorEvent;
};
export declare class WebSocket extends EventTarget<WebSocketEventMap> {
  constructor(url: string, protocols?: string[] | string);
  accept(): void;
  send(message: (ArrayBuffer | ArrayBufferView) | string): void;
  close(code?: number, reason?: string): void;
  serializeAttachment(attachment: any): void;
  deserializeAttachment(): any | null;
  static readonly READY_STATE_CONNECTING: number;
  static readonly READY_STATE_OPEN: number;
  static readonly READY_STATE_CLOSING: number;
  static readonly READY_STATE_CLOSED: number;
  get readyState(): number;
  get url(): string | null;
  get protocol(): string | null;
  get extensions(): string | null;
}
export declare const WebSocketPair: {
  new (): {
    0: WebSocket;
    1: WebSocket;
  };
};
export interface Socket {
  get readable(): ReadableStream;
  get writable(): WritableStream;
  get closed(): Promise<void>;
  close(): Promise<void>;
  startTls(options?: TlsOptions): Socket;
}
export interface SocketOptions {
  secureTransport?: string;
  allowHalfOpen: boolean;
}
export interface SocketAddress {
  hostname: string;
  port: number;
}
export interface TlsOptions {
  expectedServerHostname?: string;
}
export interface gpuGPU {
  requestAdapter(
    param1?: gpuGPURequestAdapterOptions
  ): Promise<gpuGPUAdapter | null>;
}
export declare abstract class gpuGPUAdapter {
  requestDevice(param1?: gpuGPUDeviceDescriptor): Promise<gpuGPUDevice>;
  requestAdapterInfo(unmaskHints?: string[]): Promise<gpuGPUAdapterInfo>;
  get features(): gpuGPUSupportedFeatures;
  get limits(): gpuGPUSupportedLimits;
}
export interface gpuGPUDevice extends EventTarget {
  createBuffer(param1: gpuGPUBufferDescriptor): gpuGPUBuffer;
  createBindGroupLayout(
    descriptor: gpuGPUBindGroupLayoutDescriptor
  ): gpuGPUBindGroupLayout;
  createBindGroup(descriptor: gpuGPUBindGroupDescriptor): gpuGPUBindGroup;
  createSampler(descriptor: gpuGPUSamplerDescriptor): gpuGPUSampler;
  createShaderModule(
    descriptor: gpuGPUShaderModuleDescriptor
  ): gpuGPUShaderModule;
  createPipelineLayout(
    descriptor: gpuGPUPipelineLayoutDescriptor
  ): gpuGPUPipelineLayout;
  createComputePipeline(
    descriptor: gpuGPUComputePipelineDescriptor
  ): gpuGPUComputePipeline;
  createCommandEncoder(
    descriptor?: gpuGPUCommandEncoderDescriptor
  ): gpuGPUCommandEncoder;
  destroy(): void;
  createQuerySet(descriptor: gpuGPUQuerySetDescriptor): gpuGPUQuerySet;
  pushErrorScope(filter: string): void;
  popErrorScope(): Promise<gpuGPUError | null>;
  get queue(): gpuGPUQueue;
  get lost(): Promise<gpuGPUDeviceLostInfo>;
  get features(): gpuGPUSupportedFeatures;
  get limits(): gpuGPUSupportedLimits;
}
export interface gpuGPUDeviceDescriptor {
  label?: string;
  requiredFeatures?: string[];
  requiredLimits?: Record<string, number | bigint>;
  defaultQueue?: gpuGPUQueueDescriptor;
}
export interface gpuGPUBufferDescriptor {
  label: string;
  size: number | bigint;
  usage: number;
  mappedAtCreation: boolean;
}
export interface gpuGPUQueueDescriptor {
  label?: string;
}
export declare abstract class gpuGPUBufferUsage {
  static readonly MAP_READ: number;
  static readonly MAP_WRITE: number;
  static readonly COPY_SRC: number;
  static readonly COPY_DST: number;
  static readonly INDEX: number;
  static readonly VERTEX: number;
  static readonly UNIFORM: number;
  static readonly STORAGE: number;
  static readonly INDIRECT: number;
  static readonly QUERY_RESOLVE: number;
}
export interface gpuGPUBuffer {
  getMappedRange(size?: number | bigint, param2?: number | bigint): ArrayBuffer;
  unmap(): void;
  destroy(): void;
  mapAsync(
    mode: number,
    offset?: number | bigint,
    size?: number | bigint
  ): Promise<void>;
  get size(): number | bigint;
  get usage(): number;
  get mapState(): string;
}
export declare abstract class gpuGPUShaderStage {
  static readonly VERTEX: number;
  static readonly FRAGMENT: number;
  static readonly COMPUTE: number;
}
export interface gpuGPUBindGroupLayoutDescriptor {
  label?: string;
  entries: gpuGPUBindGroupLayoutEntry[];
}
export interface gpuGPUBindGroupLayoutEntry {
  binding: number;
  visibility: number;
  buffer?: gpuGPUBufferBindingLayout;
  sampler?: gpuGPUSamplerBindingLayout;
  texture?: gpuGPUTextureBindingLayout;
  storageTexture?: gpuGPUStorageTextureBindingLayout;
}
export interface gpuGPUStorageTextureBindingLayout {
  access?: string;
  format: string;
  viewDimension?: string;
}
export interface gpuGPUTextureBindingLayout {
  sampleType?: string;
  viewDimension?: string;
  multisampled?: boolean;
}
export interface gpuGPUSamplerBindingLayout {
  type?: string;
}
export interface gpuGPUBufferBindingLayout {
  type?: string;
  hasDynamicOffset?: boolean;
  minBindingSize?: number | bigint;
}
export interface gpuGPUBindGroupLayout {}
export interface gpuGPUBindGroup {}
export interface gpuGPUBindGroupDescriptor {
  label?: string;
  layout: gpuGPUBindGroupLayout;
  entries: gpuGPUBindGroupEntry[];
}
export interface gpuGPUBindGroupEntry {
  binding: number;
  resource: gpuGPUBufferBinding | gpuGPUSampler;
}
export interface gpuGPUBufferBinding {
  buffer: gpuGPUBuffer;
  offset?: number | bigint;
  size?: number | bigint;
}
export interface gpuGPUSampler {}
export interface gpuGPUSamplerDescriptor {
  label?: string;
  addressModeU?: string;
  addressModeV?: string;
  addressModeW?: string;
  magFilter?: string;
  minFilter?: string;
  mipmapFilter?: string;
  lodMinClamp?: number;
  lodMaxClamp?: number;
  compare: string;
  maxAnisotropy?: number;
}
export interface gpuGPUShaderModule {
  getCompilationInfo(): Promise<gpuGPUCompilationInfo>;
}
export interface gpuGPUShaderModuleDescriptor {
  label?: string;
  code: string;
}
export interface gpuGPUPipelineLayout {}
export interface gpuGPUPipelineLayoutDescriptor {
  label?: string;
  bindGroupLayouts: gpuGPUBindGroupLayout[];
}
export interface gpuGPUComputePipeline {
  getBindGroupLayout(index: number): gpuGPUBindGroupLayout;
}
export interface gpuGPUComputePipelineDescriptor {
  label?: string;
  compute: gpuGPUProgrammableStage;
  layout: string | gpuGPUPipelineLayout;
}
export interface gpuGPUProgrammableStage {
  module: gpuGPUShaderModule;
  entryPoint: string;
  constants?: Record<string, number>;
}
export interface gpuGPUCommandEncoder {
  get label(): string;
  beginComputePass(
    descriptor?: gpuGPUComputePassDescriptor
  ): gpuGPUComputePassEncoder;
  copyBufferToBuffer(
    source: gpuGPUBuffer,
    sourceOffset: number | bigint,
    destination: gpuGPUBuffer,
    destinationOffset: number | bigint,
    size: number | bigint
  ): void;
  finish(param0?: gpuGPUCommandBufferDescriptor): gpuGPUCommandBuffer;
}
export interface gpuGPUCommandEncoderDescriptor {
  label?: string;
}
export interface gpuGPUComputePassEncoder {
  setPipeline(pipeline: gpuGPUComputePipeline): void;
  setBindGroup(
    index: number,
    bindGroup: gpuGPUBindGroup | null,
    dynamicOffsets?: Iterable<number>
  ): void;
  dispatchWorkgroups(
    workgroupCountX: number,
    workgroupCountY?: number,
    workgroupCountZ?: number
  ): void;
  end(): void;
}
export interface gpuGPUComputePassDescriptor {
  label?: string;
  timestampWrites?: gpuGPUComputePassTimestampWrite[];
}
export interface gpuGPUQuerySet {}
export interface gpuGPUQuerySetDescriptor {
  label?: string;
}
export interface gpuGPUComputePassTimestampWrite {
  querySet: gpuGPUQuerySet;
  queryIndex: number;
  location: string;
}
export interface gpuGPUCommandBufferDescriptor {
  label?: string;
}
export interface gpuGPUCommandBuffer {}
export interface gpuGPUQueue {
  submit(commandBuffers: gpuGPUCommandBuffer[]): void;
  writeBuffer(
    buffer: gpuGPUBuffer,
    bufferOffset: number | bigint,
    data: ArrayBuffer | ArrayBufferView,
    dataOffset?: number | bigint,
    size?: number | bigint
  ): void;
}
export declare abstract class gpuGPUMapMode {
  static readonly READ: number;
  static readonly WRITE: number;
}
export interface gpuGPURequestAdapterOptions {
  powerPreference: string;
  forceFallbackAdapter?: boolean;
}
export interface gpuGPUAdapterInfo {
  get vendor(): string;
  get architecture(): string;
  get device(): string;
  get description(): string;
}
export interface gpuGPUSupportedFeatures {
  has(name: string): boolean;
  keys(): string[];
}
export interface gpuGPUSupportedLimits {
  get maxTextureDimension1D(): number;
  get maxTextureDimension2D(): number;
  get maxTextureDimension3D(): number;
  get maxTextureArrayLayers(): number;
  get maxBindGroups(): number;
  get maxBindingsPerBindGroup(): number;
  get maxDynamicUniformBuffersPerPipelineLayout(): number;
  get maxDynamicStorageBuffersPerPipelineLayout(): number;
  get maxSampledTexturesPerShaderStage(): number;
  get maxSamplersPerShaderStage(): number;
  get maxStorageBuffersPerShaderStage(): number;
  get maxStorageTexturesPerShaderStage(): number;
  get maxUniformBuffersPerShaderStage(): number;
  get maxUniformBufferBindingSize(): number | bigint;
  get maxStorageBufferBindingSize(): number | bigint;
  get minUniformBufferOffsetAlignment(): number;
  get minStorageBufferOffsetAlignment(): number;
  get maxVertexBuffers(): number;
  get maxBufferSize(): number | bigint;
  get maxVertexAttributes(): number;
  get maxVertexBufferArrayStride(): number;
  get maxInterStageShaderComponents(): number;
  get maxInterStageShaderVariables(): number;
  get maxColorAttachments(): number;
  get maxColorAttachmentBytesPerSample(): number;
  get maxComputeWorkgroupStorageSize(): number;
  get maxComputeInvocationsPerWorkgroup(): number;
  get maxComputeWorkgroupSizeX(): number;
  get maxComputeWorkgroupSizeY(): number;
  get maxComputeWorkgroupSizeZ(): number;
  get maxComputeWorkgroupsPerDimension(): number;
}
export declare abstract class gpuGPUError {
  get message(): string;
}
export declare abstract class gpuGPUOutOfMemoryError extends gpuGPUError {}
export declare abstract class gpuGPUInternalError extends gpuGPUError {}
export declare abstract class gpuGPUValidationError extends gpuGPUError {}
export declare abstract class gpuGPUDeviceLostInfo {
  get message(): string;
  get reason(): string;
}
export interface gpuGPUCompilationMessage {
  get message(): string;
  get type(): string;
  get lineNum(): number;
  get linePos(): number;
  get offset(): number;
  get length(): number;
}
export interface gpuGPUCompilationInfo {
  get messages(): gpuGPUCompilationMessage[];
}
export interface BasicImageTransformations {
  /**
   * Maximum width in image pixels. The value must be an integer.
   */
  width?: number;
  /**
   * Maximum height in image pixels. The value must be an integer.
   */
  height?: number;
  /**
   * Resizing mode as a string. It affects interpretation of width and height
   * options:
   *  - scale-down: Similar to contain, but the image is never enlarged. If
   *    the image is larger than given width or height, it will be resized.
   *    Otherwise its original size will be kept.
   *  - contain: Resizes to maximum size that fits within the given width and
   *    height. If only a single dimension is given (e.g. only width), the
   *    image will be shrunk or enlarged to exactly match that dimension.
   *    Aspect ratio is always preserved.
   *  - cover: Resizes (shrinks or enlarges) to fill the entire area of width
   *    and height. If the image has an aspect ratio different from the ratio
   *    of width and height, it will be cropped to fit.
   *  - crop: The image will be shrunk and cropped to fit within the area
   *    specified by width and height. The image will not be enlarged. For images
   *    smaller than the given dimensions it's the same as scale-down. For
   *    images larger than the given dimensions, it's the same as cover.
   *    See also trim.
   *  - pad: Resizes to the maximum size that fits within the given width and
   *    height, and then fills the remaining area with a background color
   *    (white by default). Use of this mode is not recommended, as the same
   *    effect can be more efficiently achieved with the contain mode and the
   *    CSS object-fit: contain property.
   */
  fit?: "scale-down" | "contain" | "cover" | "crop" | "pad";
  /**
   * When cropping with fit: "cover", this defines the side or point that should
   * be left uncropped. The value is either a string
   * "left", "right", "top", "bottom", "auto", or "center" (the default),
   * or an object {x, y} containing focal point coordinates in the original
   * image expressed as fractions ranging from 0.0 (top or left) to 1.0
   * (bottom or right), 0.5 being the center. {fit: "cover", gravity: "top"} will
   * crop bottom or left and right sides as necessary, but won’t crop anything
   * from the top. {fit: "cover", gravity: {x:0.5, y:0.2}} will crop each side to
   * preserve as much as possible around a point at 20% of the height of the
   * source image.
   */
  gravity?:
    | "left"
    | "right"
    | "top"
    | "bottom"
    | "center"
    | "auto"
    | BasicImageTransformationsGravityCoordinates;
  /**
   * Background color to add underneath the image. Applies only to images with
   * transparency (such as PNG). Accepts any CSS color (#RRGGBB, rgba(…),
   * hsl(…), etc.)
   */
  background?: string;
  /**
   * Number of degrees (90, 180, 270) to rotate the image by. width and height
   * options refer to axes after rotation.
   */
  rotate?: 0 | 90 | 180 | 270 | 360;
}
export interface BasicImageTransformationsGravityCoordinates {
  x: number;
  y: number;
}
/**
 * In addition to the properties you can set in the RequestInit dict
 * that you pass as an argument to the Request constructor, you can
 * set certain properties of a `cf` object to control how Cloudflare
 * features are applied to that new Request.
 *
 * Note: Currently, these properties cannot be tested in the
 * playground.
 */
export interface RequestInitCfProperties extends Record<string, unknown> {
  cacheEverything?: boolean;
  /**
   * A request's cache key is what determines if two requests are
   * "the same" for caching purposes. If a request has the same cache key
   * as some previous request, then we can serve the same cached response for
   * both. (e.g. 'some-key')
   *
   * Only available for Enterprise customers.
   */
  cacheKey?: string;
  /**
   * This allows you to append additional Cache-Tag response headers
   * to the origin response without modifications to the origin server.
   * This will allow for greater control over the Purge by Cache Tag feature
   * utilizing changes only in the Workers process.
   *
   * Only available for Enterprise customers.
   */
  cacheTags?: string[];
  /**
   * Force response to be cached for a given number of seconds. (e.g. 300)
   */
  cacheTtl?: number;
  /**
   * Force response to be cached for a given number of seconds based on the Origin status code.
   * (e.g. { '200-299': 86400, '404': 1, '500-599': 0 })
   */
  cacheTtlByStatus?: Record<string, number>;
  scrapeShield?: boolean;
  apps?: boolean;
  image?: RequestInitCfPropertiesImage;
  minify?: RequestInitCfPropertiesImageMinify;
  mirage?: boolean;
  polish?: "lossy" | "lossless" | "off";
  /**
   * Redirects the request to an alternate origin server. You can use this,
   * for example, to implement load balancing across several origins.
   * (e.g.us-east.example.com)
   *
   * Note - For security reasons, the hostname set in resolveOverride must
   * be proxied on the same Cloudflare zone of the incoming request.
   * Otherwise, the setting is ignored. CNAME hosts are allowed, so to
   * resolve to a host under a different domain or a DNS only domain first
   * declare a CNAME record within your own zone’s DNS mapping to the
   * external hostname, set proxy on Cloudflare, then set resolveOverride
   * to point to that CNAME record.
   */
  resolveOverride?: string;
}
export interface RequestInitCfPropertiesImageDraw
  extends BasicImageTransformations {
  /**
   * Absolute URL of the image file to use for the drawing. It can be any of
   * the supported file formats. For drawing of watermarks or non-rectangular
   * overlays we recommend using PNG or WebP images.
   */
  url: string;
  /**
   * Floating-point number between 0 (transparent) and 1 (opaque).
   * For example, opacity: 0.5 makes overlay semitransparent.
   */
  opacity?: number;
  /**
   * - If set to true, the overlay image will be tiled to cover the entire
   *   area. This is useful for stock-photo-like watermarks.
   * - If set to "x", the overlay image will be tiled horizontally only
   *   (form a line).
   * - If set to "y", the overlay image will be tiled vertically only
   *   (form a line).
   */
  repeat?: true | "x" | "y";
  /**
   * Position of the overlay image relative to a given edge. Each property is
   * an offset in pixels. 0 aligns exactly to the edge. For example, left: 10
   * positions left side of the overlay 10 pixels from the left edge of the
   * image it's drawn over. bottom: 0 aligns bottom of the overlay with bottom
   * of the background image.
   *
   * Setting both left & right, or both top & bottom is an error.
   *
   * If no position is specified, the image will be centered.
   */
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
}
export interface RequestInitCfPropertiesImage
  extends BasicImageTransformations {
  /**
   * Device Pixel Ratio. Default 1. Multiplier for width/height that makes it
   * easier to specify higher-DPI sizes in <img srcset>.
   */
  dpr?: number;
  /**
   * An object with four properties {left, top, right, bottom} that specify
   * a number of pixels to cut off on each side. Allows removal of borders
   * or cutting out a specific fragment of an image. Trimming is performed
   * before resizing or rotation. Takes dpr into account.
   */
  trim?: {
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
  };
  /**
   * Quality setting from 1-100 (useful values are in 60-90 range). Lower values
   * make images look worse, but load faster. The default is 85. It applies only
   * to JPEG and WebP images. It doesn’t have any effect on PNG.
   */
  quality?: number;
  /**
   * Output format to generate. It can be:
   *  - avif: generate images in AVIF format.
   *  - webp: generate images in Google WebP format. Set quality to 100 to get
   *    the WebP-lossless format.
   *  - json: instead of generating an image, outputs information about the
   *    image, in JSON format. The JSON object will contain image size
   *    (before and after resizing), source image’s MIME type, file size, etc.
   * - jpeg: generate images in JPEG format.
   * - png: generate images in PNG format.
   */
  format?: "avif" | "webp" | "json" | "jpeg" | "png";
  /**
   * Whether to preserve animation frames from input files. Default is true.
   * Setting it to false reduces animations to still images. This setting is
   * recommended when enlarging images or processing arbitrary user content,
   * because large GIF animations can weigh tens or even hundreds of megabytes.
   * It is also useful to set anim:false when using format:"json" to get the
   * response quicker without the number of frames.
   */
  anim?: boolean;
  /**
   * What EXIF data should be preserved in the output image. Note that EXIF
   * rotation and embedded color profiles are always applied ("baked in" into
   * the image), and aren't affected by this option. Note that if the Polish
   * feature is enabled, all metadata may have been removed already and this
   * option may have no effect.
   *  - keep: Preserve most of EXIF metadata, including GPS location if there's
   *    any.
   *  - copyright: Only keep the copyright tag, and discard everything else.
   *    This is the default behavior for JPEG files.
   *  - none: Discard all invisible EXIF metadata. Currently WebP and PNG
   *    output formats always discard metadata.
   */
  metadata?: "keep" | "copyright" | "none";
  /**
   * Strength of sharpening filter to apply to the image. Floating-point
   * number between 0 (no sharpening, default) and 10 (maximum). 1.0 is a
   * recommended value for downscaled images.
   */
  sharpen?: number;
  /**
   * Radius of a blur filter (approximate gaussian). Maximum supported radius
   * is 250.
   */
  blur?: number;
  /**
   * Overlays are drawn in the order they appear in the array (last array
   * entry is the topmost layer).
   */
  draw?: RequestInitCfPropertiesImageDraw[];
  /**
   * Fetching image from authenticated origin. Setting this property will
   * pass authentication headers (Authorization, Cookie, etc.) through to
   * the origin.
   */
  "origin-auth"?: "share-publicly";
  /**
   * Adds a border around the image. The border is added after resizing. Border
   * width takes dpr into account, and can be specified either using a single
   * width property, or individually for each side.
   */
  border?:
    | {
        color: string;
        width: number;
      }
    | {
        color: string;
        top: number;
        right: number;
        bottom: number;
        left: number;
      };
  /**
   * Increase brightness by a factor. A value of 1.0 equals no change, a value
   * of 0.5 equals half brightness, and a value of 2.0 equals twice as bright.
   * 0 is ignored.
   */
  brightness?: number;
  /**
   * Increase contrast by a factor. A value of 1.0 equals no change, a value of
   * 0.5 equals low contrast, and a value of 2.0 equals high contrast. 0 is
   * ignored.
   */
  contrast?: number;
  /**
   * Increase exposure by a factor. A value of 1.0 equals no change, a value of
   * 0.5 darkens the image, and a value of 2.0 lightens the image. 0 is ignored.
   */
  gamma?: number;
  /**
   * Slightly reduces latency on a cache miss by selecting a
   * quickest-to-compress file format, at a cost of increased file size and
   * lower image quality. It will usually override the format option and choose
   * JPEG over WebP or AVIF. We do not recommend using this option, except in
   * unusual circumstances like resizing uncacheable dynamically-generated
   * images.
   */
  compression?: "fast";
}
export interface RequestInitCfPropertiesImageMinify {
  javascript?: boolean;
  css?: boolean;
  html?: boolean;
}
/**
 * Request metadata provided by Cloudflare's edge.
 */
export type IncomingRequestCfProperties<HostMetadata = unknown> =
  IncomingRequestCfPropertiesBase &
    IncomingRequestCfPropertiesBotManagementEnterprise &
    IncomingRequestCfPropertiesCloudflareForSaaSEnterprise<HostMetadata> &
    IncomingRequestCfPropertiesGeographicInformation &
    IncomingRequestCfPropertiesCloudflareAccessOrApiShield;
export interface IncomingRequestCfPropertiesBase
  extends Record<string, unknown> {
  /**
   * [ASN](https://www.iana.org/assignments/as-numbers/as-numbers.xhtml) of the incoming request.
   *
   * @example 395747
   */
  asn: number;
  /**
   * The organization which owns the ASN of the incoming request.
   *
   * @example "Google Cloud"
   */
  asOrganization: string;
  /**
   * The original value of the `Accept-Encoding` header if Cloudflare modified it.
   *
   * @example "gzip, deflate, br"
   */
  clientAcceptEncoding?: string;
  /**
   * The number of milliseconds it took for the request to reach your worker.
   *
   * @example 22
   */
  clientTcpRtt?: number;
  /**
   * The three-letter [IATA](https://en.wikipedia.org/wiki/IATA_airport_code)
   * airport code of the data center that the request hit.
   *
   * @example "DFW"
   */
  colo: string;
  /**
   * Represents the upstream's response to a
   * [TCP `keepalive` message](https://tldp.org/HOWTO/TCP-Keepalive-HOWTO/overview.html)
   * from cloudflare.
   *
   * For workers with no upstream, this will always be `1`.
   *
   * @example 3
   */
  edgeRequestKeepAliveStatus: IncomingRequestCfPropertiesEdgeRequestKeepAliveStatus;
  /**
   * The HTTP Protocol the request used.
   *
   * @example "HTTP/2"
   */
  httpProtocol: string;
  /**
   * The browser-requested prioritization information in the request object.
   *
   * If no information was set, defaults to the empty string `""`
   *
   * @example "weight=192;exclusive=0;group=3;group-weight=127"
   * @default ""
   */
  requestPriority: string;
  /**
   * The TLS version of the connection to Cloudflare.
   * In requests served over plaintext (without TLS), this property is the empty string `""`.
   *
   * @example "TLSv1.3"
   */
  tlsVersion: string;
  /**
   * The cipher for the connection to Cloudflare.
   * In requests served over plaintext (without TLS), this property is the empty string `""`.
   *
   * @example "AEAD-AES128-GCM-SHA256"
   */
  tlsCipher: string;
  /**
   * Metadata containing the [`HELLO`](https://www.rfc-editor.org/rfc/rfc5246#section-7.4.1.2) and [`FINISHED`](https://www.rfc-editor.org/rfc/rfc5246#section-7.4.9) messages from this request's TLS handshake.
   *
   * If the incoming request was served over plaintext (without TLS) this field is undefined.
   */
  tlsExportedAuthenticator?: IncomingRequestCfPropertiesExportedAuthenticatorMetadata;
}
export interface IncomingRequestCfPropertiesBotManagementBase {
  /**
   * Cloudflare’s [level of certainty](https://developers.cloudflare.com/bots/concepts/bot-score/) that a request comes from a bot,
   * represented as an integer percentage between `1` (almost certainly a bot) and `99` (almost certainly human).
   *
   * @example 54
   */
  score: number;
  /**
   * A boolean value that is true if the request comes from a good bot, like Google or Bing.
   * Most customers choose to allow this traffic. For more details, see [Traffic from known bots](https://developers.cloudflare.com/firewall/known-issues-and-faq/#how-does-firewall-rules-handle-traffic-from-known-bots).
   */
  verifiedBot: boolean;
  /**
   * A boolean value that is true if the request originates from a
   * Cloudflare-verified proxy service.
   */
  corporateProxy: boolean;
  /**
   * A boolean value that's true if the request matches [file extensions](https://developers.cloudflare.com/bots/reference/static-resources/) for many types of static resources.
   */
  staticResource: boolean;
  /**
   * List of IDs that correlate to the Bot Management heuristic detections made on a request (you can have multiple heuristic detections on the same request).
   */
  detectionIds: number[];
}
export interface IncomingRequestCfPropertiesBotManagement {
  /**
   * Results of Cloudflare's Bot Management analysis
   */
  botManagement: IncomingRequestCfPropertiesBotManagementBase;
  /**
   * Duplicate of `botManagement.score`.
   *
   * @deprecated
   */
  clientTrustScore: number;
}
export interface IncomingRequestCfPropertiesBotManagementEnterprise
  extends IncomingRequestCfPropertiesBotManagement {
  /**
   * Results of Cloudflare's Bot Management analysis
   */
  botManagement: IncomingRequestCfPropertiesBotManagementBase & {
    /**
     * A [JA3 Fingerprint](https://developers.cloudflare.com/bots/concepts/ja3-fingerprint/) to help profile specific SSL/TLS clients
     * across different destination IPs, Ports, and X509 certificates.
     */
    ja3Hash: string;
  };
}
export interface IncomingRequestCfPropertiesCloudflareForSaaSEnterprise<
  HostMetadata
> {
  /**
   * Custom metadata set per-host in [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/).
   *
   * This field is only present if you have Cloudflare for SaaS enabled on your account
   * and you have followed the [required steps to enable it]((https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/custom-metadata/)).
   */
  hostMetadata: HostMetadata;
}
export interface IncomingRequestCfPropertiesCloudflareAccessOrApiShield {
  /**
   * Information about the client certificate presented to Cloudflare.
   *
   * This is populated when the incoming request is served over TLS using
   * either Cloudflare Access or API Shield (mTLS)
   * and the presented SSL certificate has a valid
   * [Certificate Serial Number](https://ldapwiki.com/wiki/Certificate%20Serial%20Number)
   * (i.e., not `null` or `""`).
   *
   * Otherwise, a set of placeholder values are used.
   *
   * The property `certPresented` will be set to `"1"` when
   * the object is populated (i.e. the above conditions were met).
   */
  tlsClientAuth:
    | IncomingRequestCfPropertiesTLSClientAuth
    | IncomingRequestCfPropertiesTLSClientAuthPlaceholder;
}
/**
 * Metadata about the request's TLS handshake
 */
export interface IncomingRequestCfPropertiesExportedAuthenticatorMetadata {
  /**
   * The client's [`HELLO` message](https://www.rfc-editor.org/rfc/rfc5246#section-7.4.1.2), encoded in hexadecimal
   *
   * @example "44372ba35fa1270921d318f34c12f155dc87b682cf36a790cfaa3ba8737a1b5d"
   */
  clientHandshake: string;
  /**
   * The server's [`HELLO` message](https://www.rfc-editor.org/rfc/rfc5246#section-7.4.1.2), encoded in hexadecimal
   *
   * @example "44372ba35fa1270921d318f34c12f155dc87b682cf36a790cfaa3ba8737a1b5d"
   */
  serverHandshake: string;
  /**
   * The client's [`FINISHED` message](https://www.rfc-editor.org/rfc/rfc5246#section-7.4.9), encoded in hexadecimal
   *
   * @example "084ee802fe1348f688220e2a6040a05b2199a761f33cf753abb1b006792d3f8b"
   */
  clientFinished: string;
  /**
   * The server's [`FINISHED` message](https://www.rfc-editor.org/rfc/rfc5246#section-7.4.9), encoded in hexadecimal
   *
   * @example "084ee802fe1348f688220e2a6040a05b2199a761f33cf753abb1b006792d3f8b"
   */
  serverFinished: string;
}
/**
 * Geographic data about the request's origin.
 */
export interface IncomingRequestCfPropertiesGeographicInformation {
  /**
   * The [ISO 3166-1 Alpha 2](https://www.iso.org/iso-3166-country-codes.html) country code the request originated from.
   *
   * If your worker is [configured to accept TOR connections](https://support.cloudflare.com/hc/en-us/articles/203306930-Understanding-Cloudflare-Tor-support-and-Onion-Routing), this may also be `"T1"`, indicating a request that originated over TOR.
   *
   * If Cloudflare is unable to determine where the request originated this property is omitted.
   *
   * The country code `"T1"` is used for requests originating on TOR.
   *
   * @example "GB"
   */
  country?: Iso3166Alpha2Code | "T1";
  /**
   * If present, this property indicates that the request originated in the EU
   *
   * @example "1"
   */
  isEUCountry?: "1";
  /**
   * A two-letter code indicating the continent the request originated from.
   *
   * @example "AN"
   */
  continent?: ContinentCode;
  /**
   * The city the request originated from
   *
   * @example "Austin"
   */
  city?: string;
  /**
   * Postal code of the incoming request
   *
   * @example "78701"
   */
  postalCode?: string;
  /**
   * Latitude of the incoming request
   *
   * @example "30.27130"
   */
  latitude?: string;
  /**
   * Longitude of the incoming request
   *
   * @example "-97.74260"
   */
  longitude?: string;
  /**
   * Timezone of the incoming request
   *
   * @example "America/Chicago"
   */
  timezone?: string;
  /**
   * If known, the ISO 3166-2 name for the first level region associated with
   * the IP address of the incoming request
   *
   * @example "Texas"
   */
  region?: string;
  /**
   * If known, the ISO 3166-2 code for the first-level region associated with
   * the IP address of the incoming request
   *
   * @example "TX"
   */
  regionCode?: string;
  /**
   * Metro code (DMA) of the incoming request
   *
   * @example "635"
   */
  metroCode?: string;
}
/** Data about the incoming request's TLS certificate */
export interface IncomingRequestCfPropertiesTLSClientAuth {
  /** Always `"1"`, indicating that the certificate was presented */
  certPresented: "1";
  /**
   * Result of certificate verification.
   *
   * @example "FAILED:self signed certificate"
   */
  certVerified: Exclude<CertVerificationStatus, "NONE">;
  /** The presented certificate's revokation status.
   *
   * - A value of `"1"` indicates the certificate has been revoked
   * - A value of `"0"` indicates the certificate has not been revoked
   */
  certRevoked: "1" | "0";
  /**
   * The certificate issuer's [distinguished name](https://knowledge.digicert.com/generalinformation/INFO1745.html)
   *
   * @example "CN=cloudflareaccess.com, C=US, ST=Texas, L=Austin, O=Cloudflare"
   */
  certIssuerDN: string;
  /**
   * The certificate subject's [distinguished name](https://knowledge.digicert.com/generalinformation/INFO1745.html)
   *
   * @example "CN=*.cloudflareaccess.com, C=US, ST=Texas, L=Austin, O=Cloudflare"
   */
  certSubjectDN: string;
  /**
   * The certificate issuer's [distinguished name](https://knowledge.digicert.com/generalinformation/INFO1745.html) ([RFC 2253](https://www.rfc-editor.org/rfc/rfc2253.html) formatted)
   *
   * @example "CN=cloudflareaccess.com, C=US, ST=Texas, L=Austin, O=Cloudflare"
   */
  certIssuerDNRFC2253: string;
  /**
   * The certificate subject's [distinguished name](https://knowledge.digicert.com/generalinformation/INFO1745.html) ([RFC 2253](https://www.rfc-editor.org/rfc/rfc2253.html) formatted)
   *
   * @example "CN=*.cloudflareaccess.com, C=US, ST=Texas, L=Austin, O=Cloudflare"
   */
  certSubjectDNRFC2253: string;
  /** The certificate issuer's distinguished name (legacy policies) */
  certIssuerDNLegacy: string;
  /** The certificate subject's distinguished name (legacy policies) */
  certSubjectDNLegacy: string;
  /**
   * The certificate's serial number
   *
   * @example "00936EACBE07F201DF"
   */
  certSerial: string;
  /**
   * The certificate issuer's serial number
   *
   * @example "2489002934BDFEA34"
   */
  certIssuerSerial: string;
  /**
   * The certificate's Subject Key Identifier
   *
   * @example "BB:AF:7E:02:3D:FA:A6:F1:3C:84:8E:AD:EE:38:98:EC:D9:32:32:D4"
   */
  certSKI: string;
  /**
   * The certificate issuer's Subject Key Identifier
   *
   * @example "BB:AF:7E:02:3D:FA:A6:F1:3C:84:8E:AD:EE:38:98:EC:D9:32:32:D4"
   */
  certIssuerSKI: string;
  /**
   * The certificate's SHA-1 fingerprint
   *
   * @example "6b9109f323999e52259cda7373ff0b4d26bd232e"
   */
  certFingerprintSHA1: string;
  /**
   * The certificate's SHA-256 fingerprint
   *
   * @example "acf77cf37b4156a2708e34c4eb755f9b5dbbe5ebb55adfec8f11493438d19e6ad3f157f81fa3b98278453d5652b0c1fd1d71e5695ae4d709803a4d3f39de9dea"
   */
  certFingerprintSHA256: string;
  /**
   * The effective starting date of the certificate
   *
   * @example "Dec 22 19:39:00 2018 GMT"
   */
  certNotBefore: string;
  /**
   * The effective expiration date of the certificate
   *
   * @example "Dec 22 19:39:00 2018 GMT"
   */
  certNotAfter: string;
}
/** Placeholder values for TLS Client Authorization */
export interface IncomingRequestCfPropertiesTLSClientAuthPlaceholder {
  certPresented: "0";
  certVerified: "NONE";
  certRevoked: "0";
  certIssuerDN: "";
  certSubjectDN: "";
  certIssuerDNRFC2253: "";
  certSubjectDNRFC2253: "";
  certIssuerDNLegacy: "";
  certSubjectDNLegacy: "";
  certSerial: "";
  certIssuerSerial: "";
  certSKI: "";
  certIssuerSKI: "";
  certFingerprintSHA1: "";
  certFingerprintSHA256: "";
  certNotBefore: "";
  certNotAfter: "";
}
/** Possible outcomes of TLS verification */
export type CertVerificationStatus =
  /** Authentication succeeded */
  | "SUCCESS"
  /** No certificate was presented */
  | "NONE"
  /** Failed because the certificate was self-signed */
  | "FAILED:self signed certificate"
  /** Failed because the certificate failed a trust chain check */
  | "FAILED:unable to verify the first certificate"
  /** Failed because the certificate not yet valid */
  | "FAILED:certificate is not yet valid"
  /** Failed because the certificate is expired */
  | "FAILED:certificate has expired"
  /** Failed for another unspecified reason */
  | "FAILED";
/**
 * An upstream endpoint's response to a TCP `keepalive` message from Cloudflare.
 */
export type IncomingRequestCfPropertiesEdgeRequestKeepAliveStatus =
  | 0 /** Unknown */
  | 1 /** no keepalives (not found) */
  | 2 /** no connection re-use, opening keepalive connection failed */
  | 3 /** no connection re-use, keepalive accepted and saved */
  | 4 /** connection re-use, refused by the origin server (`TCP FIN`) */
  | 5; /** connection re-use, accepted by the origin server */
/** ISO 3166-1 Alpha-2 codes */
export type Iso3166Alpha2Code =
  | "AD"
  | "AE"
  | "AF"
  | "AG"
  | "AI"
  | "AL"
  | "AM"
  | "AO"
  | "AQ"
  | "AR"
  | "AS"
  | "AT"
  | "AU"
  | "AW"
  | "AX"
  | "AZ"
  | "BA"
  | "BB"
  | "BD"
  | "BE"
  | "BF"
  | "BG"
  | "BH"
  | "BI"
  | "BJ"
  | "BL"
  | "BM"
  | "BN"
  | "BO"
  | "BQ"
  | "BR"
  | "BS"
  | "BT"
  | "BV"
  | "BW"
  | "BY"
  | "BZ"
  | "CA"
  | "CC"
  | "CD"
  | "CF"
  | "CG"
  | "CH"
  | "CI"
  | "CK"
  | "CL"
  | "CM"
  | "CN"
  | "CO"
  | "CR"
  | "CU"
  | "CV"
  | "CW"
  | "CX"
  | "CY"
  | "CZ"
  | "DE"
  | "DJ"
  | "DK"
  | "DM"
  | "DO"
  | "DZ"
  | "EC"
  | "EE"
  | "EG"
  | "EH"
  | "ER"
  | "ES"
  | "ET"
  | "FI"
  | "FJ"
  | "FK"
  | "FM"
  | "FO"
  | "FR"
  | "GA"
  | "GB"
  | "GD"
  | "GE"
  | "GF"
  | "GG"
  | "GH"
  | "GI"
  | "GL"
  | "GM"
  | "GN"
  | "GP"
  | "GQ"
  | "GR"
  | "GS"
  | "GT"
  | "GU"
  | "GW"
  | "GY"
  | "HK"
  | "HM"
  | "HN"
  | "HR"
  | "HT"
  | "HU"
  | "ID"
  | "IE"
  | "IL"
  | "IM"
  | "IN"
  | "IO"
  | "IQ"
  | "IR"
  | "IS"
  | "IT"
  | "JE"
  | "JM"
  | "JO"
  | "JP"
  | "KE"
  | "KG"
  | "KH"
  | "KI"
  | "KM"
  | "KN"
  | "KP"
  | "KR"
  | "KW"
  | "KY"
  | "KZ"
  | "LA"
  | "LB"
  | "LC"
  | "LI"
  | "LK"
  | "LR"
  | "LS"
  | "LT"
  | "LU"
  | "LV"
  | "LY"
  | "MA"
  | "MC"
  | "MD"
  | "ME"
  | "MF"
  | "MG"
  | "MH"
  | "MK"
  | "ML"
  | "MM"
  | "MN"
  | "MO"
  | "MP"
  | "MQ"
  | "MR"
  | "MS"
  | "MT"
  | "MU"
  | "MV"
  | "MW"
  | "MX"
  | "MY"
  | "MZ"
  | "NA"
  | "NC"
  | "NE"
  | "NF"
  | "NG"
  | "NI"
  | "NL"
  | "NO"
  | "NP"
  | "NR"
  | "NU"
  | "NZ"
  | "OM"
  | "PA"
  | "PE"
  | "PF"
  | "PG"
  | "PH"
  | "PK"
  | "PL"
  | "PM"
  | "PN"
  | "PR"
  | "PS"
  | "PT"
  | "PW"
  | "PY"
  | "QA"
  | "RE"
  | "RO"
  | "RS"
  | "RU"
  | "RW"
  | "SA"
  | "SB"
  | "SC"
  | "SD"
  | "SE"
  | "SG"
  | "SH"
  | "SI"
  | "SJ"
  | "SK"
  | "SL"
  | "SM"
  | "SN"
  | "SO"
  | "SR"
  | "SS"
  | "ST"
  | "SV"
  | "SX"
  | "SY"
  | "SZ"
  | "TC"
  | "TD"
  | "TF"
  | "TG"
  | "TH"
  | "TJ"
  | "TK"
  | "TL"
  | "TM"
  | "TN"
  | "TO"
  | "TR"
  | "TT"
  | "TV"
  | "TW"
  | "TZ"
  | "UA"
  | "UG"
  | "UM"
  | "US"
  | "UY"
  | "UZ"
  | "VA"
  | "VC"
  | "VE"
  | "VG"
  | "VI"
  | "VN"
  | "VU"
  | "WF"
  | "WS"
  | "YE"
  | "YT"
  | "ZA"
  | "ZM"
  | "ZW";
/** The 2-letter continent codes Cloudflare uses */
export type ContinentCode = "AF" | "AN" | "AS" | "EU" | "NA" | "OC" | "SA";
export type CfProperties<HostMetadata = unknown> =
  | IncomingRequestCfProperties<HostMetadata>
  | RequestInitCfProperties;
export interface D1Result<T = unknown> {
  results: T[];
  success: true;
  meta: any;
  error?: never;
}
export interface D1ExecResult {
  count: number;
  duration: number;
}
export declare abstract class D1Database {
  prepare(query: string): D1PreparedStatement;
  dump(): Promise<ArrayBuffer>;
  batch<T = unknown>(statements: D1PreparedStatement[]): Promise<D1Result<T>[]>;
  exec(query: string): Promise<D1ExecResult>;
}
export declare abstract class D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  first<T = unknown>(colName: string): Promise<T | null>;
  first<T = Record<string, unknown>>(): Promise<T | null>;
  run<T = Record<string, unknown>>(): Promise<D1Result<T>>;
  all<T = Record<string, unknown>>(): Promise<D1Result<T>>;
  raw<T = unknown[]>(): Promise<T[]>;
}
/**
 * An email message that can be sent from a Worker.
 */
export interface EmailMessage {
  /**
   * Envelope From attribute of the email message.
   */
  readonly from: string;
  /**
   * Envelope To attribute of the email message.
   */
  readonly to: string;
}
/**
 * An email message that is sent to a consumer Worker and can be rejected/forwarded.
 */
export interface ForwardableEmailMessage extends EmailMessage {
  /**
   * Stream of the email message content.
   */
  readonly raw: ReadableStream;
  /**
   * An [Headers object](https://developer.mozilla.org/en-US/docs/Web/API/Headers).
   */
  readonly headers: Headers;
  /**
   * Size of the email message content.
   */
  readonly rawSize: number;
  /**
   * Reject this email message by returning a permanent SMTP error back to the connecting client including the given reason.
   * @param reason The reject reason.
   * @returns void
   */
  setReject(reason: string): void;
  /**
   * Forward this email message to a verified destination address of the account.
   * @param rcptTo Verified destination address.
   * @param headers A [Headers object](https://developer.mozilla.org/en-US/docs/Web/API/Headers).
   * @returns A promise that resolves when the email message is forwarded.
   */
  forward(rcptTo: string, headers?: Headers): Promise<void>;
}
/**
 * A binding that allows a Worker to send email messages.
 */
export interface SendEmail {
  send(message: EmailMessage): Promise<void>;
}
export declare abstract class EmailEvent extends ExtendableEvent {
  readonly message: ForwardableEmailMessage;
}
export type EmailExportedHandler<Env = unknown> = (
  message: ForwardableEmailMessage,
  env: Env,
  ctx: ExecutionContext
) => void | Promise<void>;
export interface Hyperdrive {
  /**
   * Connect directly to Hyperdrive as if it's your database, returning a TCP socket.
   *
   * Calling this method returns an idential socket to if you call
   * `connect("host:port")` using the `host` and `port` fields from this object.
   * Pick whichever approach works better with your preferred DB client library.
   *
   * Note that this socket is not yet authenticated -- it's expected that your
   * code (or preferably, the client library of your choice) will authenticate
   * using the information in this class's readonly fields.
   */
  connect(): Socket;
  /**
   * A valid DB connection string that can be passed straight into the typical
   * client library/driver/ORM. This will typically be the easiest way to use
   * Hyperdrive.
   */
  readonly connectionString: string;
  /*
   * A randomly generated hostname that is only valid within the context of the
   * currently running Worker which, when passed into `connect()` function from
   * the "cloudflare:sockets" module, will connect to the Hyperdrive instance
   * for your database.
   */
  readonly host: string;
  /*
   * The port that must be paired the the host field when connecting.
   */
  readonly port: string;
  /*
   * The username to use when authenticating to your database via Hyperdrive.
   * Unlike the host and password, this will be the same every time
   */
  readonly user: string;
  /*
   * The randomly generated password to use when authenticating to your
   * database via Hyperdrive. Like the host field, this password is only valid
   * within the context of the currently running Worker instance from which
   * it's read.
   */
  readonly password: string;
  /*
   * The name of the database to connect to.
   */
  readonly database: string;
}
export type Params<P extends string = any> = Record<P, string | string[]>;
export type EventContext<Env, P extends string, Data> = {
  request: Request;
  functionPath: string;
  waitUntil: (promise: Promise<any>) => void;
  passThroughOnException: () => void;
  next: (input?: Request | string, init?: RequestInit) => Promise<Response>;
  env: Env & {
    ASSETS: {
      fetch: typeof fetch;
    };
  };
  params: Params<P>;
  data: Data;
};
export type PagesFunction<
  Env = unknown,
  Params extends string = any,
  Data extends Record<string, unknown> = Record<string, unknown>
> = (context: EventContext<Env, Params, Data>) => Response | Promise<Response>;
export type EventPluginContext<Env, P extends string, Data, PluginArgs> = {
  request: Request;
  functionPath: string;
  waitUntil: (promise: Promise<any>) => void;
  passThroughOnException: () => void;
  next: (input?: Request | string, init?: RequestInit) => Promise<Response>;
  env: Env & {
    ASSETS: {
      fetch: typeof fetch;
    };
  };
  params: Params<P>;
  data: Data;
  pluginArgs: PluginArgs;
};
export type PagesPluginFunction<
  Env = unknown,
  Params extends string = any,
  Data extends Record<string, unknown> = Record<string, unknown>,
  PluginArgs = unknown
> = (
  context: EventPluginContext<Env, Params, Data, PluginArgs>
) => Response | Promise<Response>;
// PubSubMessage represents an incoming PubSub message.
// The message includes metadata about the broker, the client, and the payload
// itself.
// https://developers.cloudflare.com/pub-sub/
export interface PubSubMessage {
  // Message ID
  readonly mid: number;
  // MQTT broker FQDN in the form mqtts://BROKER.NAMESPACE.cloudflarepubsub.com:PORT
  readonly broker: string;
  // The MQTT topic the message was sent on.
  readonly topic: string;
  // The client ID of the client that published this message.
  readonly clientId: string;
  // The unique identifier (JWT ID) used by the client to authenticate, if token
  // auth was used.
  readonly jti?: string;
  // A Unix timestamp (seconds from Jan 1, 1970), set when the Pub/Sub Broker
  // received the message from the client.
  readonly receivedAt: number;
  // An (optional) string with the MIME type of the payload, if set by the
  // client.
  readonly contentType: string;
  // Set to 1 when the payload is a UTF-8 string
  // https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901063
  readonly payloadFormatIndicator: number;
  // Pub/Sub (MQTT) payloads can be UTF-8 strings, or byte arrays.
  // You can use payloadFormatIndicator to inspect this before decoding.
  payload: string | Uint8Array;
}
// JsonWebKey extended by kid parameter
export interface JsonWebKeyWithKid extends JsonWebKey {
  // Key Identifier of the JWK
  readonly kid: string;
}
// Copyright (c) 2022-2023 Cloudflare, Inc.
// Licensed under the Apache 2.0 license found in the LICENSE file or at:
//     https://opensource.org/licenses/Apache-2.0
/**
 * Additional information to associate with a vector.
 */
export type VectorizeVectorMetadata =
  | string
  | number
  | boolean
  | string[]
  | Record<string, string | number | boolean | string[]>;
export type VectorFloatArray = Float32Array | Float64Array;
export interface VectorizeError {
  code?: number;
  error: string;
}
/**
 * Supported distance metrics for an index.
 * Distance metrics determine how other "similar" vectors are determined.
 */
export type VectorizeDistanceMetric = "euclidean" | "cosine" | "dot-product";
export interface VectorizeQueryOptions {
  topK?: number;
  namespace?: string;
  returnVectors?: boolean;
}
/**
 * Information about the configuration of an index.
 */
export type VectorizeIndexConfig =
  | {
      dimensions: number;
      metric: VectorizeDistanceMetric;
    }
  | {
      preset: string; // keep this generic, as we'll be adding more presets in the future and this is only in a read capacity
    };
/**
 * Metadata about an existing index.
 */
export interface VectorizeIndexDetails {
  /** The unique ID of the index */
  readonly id: string;
  /** The name of the index. */
  name: string;
  /** (optional) A human readable description for the index. */
  description?: string;
  /** The index configuration, including the dimension size and distance metric. */
  config: VectorizeIndexConfig;
  /** The number of records containing vectors within the index. */
  vectorsCount: number;
}
/**
 * Represents a single vector value set along with its associated metadata.
 */
export interface VectorizeVector {
  /** The ID for the vector. This can be user-defined, and must be unique. It should uniquely identify the object, and is best set based on the ID of what the vector represents. */
  id: string;
  /** The vector values */
  values: VectorFloatArray | number[];
  /** The namespace this vector belongs to. */
  namespace?: string;
  /** Metadata associated with the binding. Includes the values of the other fields and potentially additional details. */
  metadata?: Record<string, VectorizeVectorMetadata>;
}
/**
 * Represents a matched vector for a query along with its score and (if specified) the matching vector information.
 */
export interface VectorizeMatch {
  /** The ID for the vector. This can be user-defined, and must be unique. It should uniquely identify the object, and is best set based on the ID of what the vector represents. */
  vectorId: string;
  /** The score or rank for similarity, when returned as a result */
  score: number;
  /** Vector data for the match. Included only if the user specified they want it returned (via {@link VectorizeQueryOptions}). */
  vector?: VectorizeVector;
}
/**
 * A set of vector {@link VectorizeMatch} for a particular query.
 */
export interface VectorizeMatches {
  matches: VectorizeMatch[];
  count: number;
}
/**
 * Results of an operation that performed a mutation on a set of vectors.
 * Here, `ids` is a list of vectors that were successfully processed.
 */
export interface VectorizeVectorMutation {
  /* List of ids of vectors that were successfully processed. */
  ids: string[];
  /* Total count of the number of processed vectors. */
  count: number;
}
export declare abstract class VectorizeIndex {
  /**
   * Get information about the currently bound index.
   * @returns A promise that resolves with information about the current index.
   */
  public describe(): Promise<VectorizeIndexDetails>;
  /**
   * Use the provided vector to perform a similarity search across the index.
   * @param vector Input vector that will be used to drive the similarity search.
   * @param options Configuration options to massage the returned data.
   * @returns A promise that resolves with matched and scored vectors.
   */
  public query(
    vector: VectorFloatArray | number[],
    options: VectorizeQueryOptions
  ): Promise<VectorizeMatches>;
  /**
   * Insert a list of vectors into the index dataset. If a provided id exists, an error will be thrown.
   * @param vectors List of vectors that will be inserted.
   * @returns A promise that resolves with the ids & count of records that were successfully processed.
   */
  public insert(vectors: VectorizeVector[]): Promise<VectorizeVectorMutation>;
  /**
   * Upsert a list of vectors into the index dataset. If a provided id exists, it will be replaced with the new values.
   * @param vectors List of vectors that will be upserted.
   * @returns A promise that resolves with the ids & count of records that were successfully processed.
   */
  public upsert(vectors: VectorizeVector[]): Promise<VectorizeVectorMutation>;
  /**
   * Delete a list of vectors with a matching id.
   * @param ids List of vector ids that should be deleted.
   * @returns A promise that resolves with the ids & count of records that were successfully processed (and thus deleted).
   */
  public deleteByIds(ids: string[]): Promise<VectorizeVectorMutation>;
  /**
   * Get a list of vectors with a matching id.
   * @param ids List of vector ids that should be returned.
   * @returns A promise that resolves with the raw unscored vectors matching the id set.
   */
  public getByIds(ids: string[]): Promise<VectorizeVector[]>;
}
export interface DynamicDispatchLimits {
  /**
   * Limit CPU time in milliseconds.
   */
  cpuMs?: number;
  /**
   * Limit number of subrequests.
   */
  subRequests?: number;
}
export interface DynamicDispatchOptions {
  /**
   * Limit resources of invoked Worker script.
   */
  limits?: DynamicDispatchLimits;
  /**
   * Arguments for outbound Worker script, if configured.
   */
  outbound?: {
    [key: string]: any;
  };
}
export interface DispatchNamespace {
  /**
   * @param name Name of the Worker script.
   * @param args Arguments to Worker script.
   * @param options Options for Dynamic Dispatch invocation.
   * @returns A Fetcher object that allows you to send requests to the Worker script.
   * @throws If the Worker script does not exist in this dispatch namespace, an error will be thrown.
   */
  get(
    name: string,
    args?: {
      [key: string]: any;
    },
    options?: DynamicDispatchOptions
  ): Fetcher;
}
