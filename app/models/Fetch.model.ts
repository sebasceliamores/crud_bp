export interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export interface FetchOptions extends RequestInit {
  baseURL?: string;
  timeout?: number;
  body?: any;
}
