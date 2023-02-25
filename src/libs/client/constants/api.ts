export const END_POINT = Object.freeze({
  LOG_IN: '/api/login' as const,
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

export const AXIOS_CONFIG = Object.freeze({
  CREDENTIAL_TRUE: true as const,
  CREDENTIAL_FALSE: false as const,
});
