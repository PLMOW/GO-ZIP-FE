/* APIS */

export const END_POINT = Object.freeze({
  LOG_IN: '/api/login' as const,
  SIGN_UP: '/api/signup' as const,
  SEARCH: (query: string) => `api/product/search?${query}` as const,
});

type MethodType = 'get' | 'post' | 'put' | 'delete';

interface Method {
  [key: string]: MethodType;
}

export const METHOD = Object.freeze<Method>({
  GET: 'get' as const,
  POST: 'post' as const,
  PUT: 'put' as const,
  DELETE: 'delete' as const,
});

/* AXIOS INSTANCE */

export const AXIOS_CONFIG = Object.freeze({
  ACCESS_ALLOW_ORIGIN: 'Access-Control-Allow-Origin' as const,
  ALLOW_ALL: '*' as const,
  CREDENTIAL_TRUE: true as const,
  CREDENTIAL_FALSE: false as const,
});
