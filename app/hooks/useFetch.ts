import {useState, useEffect} from 'react';
import {HttpMethod} from '../enums/HttpMethod'

interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

interface FetchOptions extends RequestInit {
  baseURL?: string;
  timeout?: number;
}

const useFetch = <T>(
  url: string,
  options?: FetchOptions,
): UseFetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      const {
        baseURL = '',
        timeout = 10000,
        headers,
        method = HttpMethod.GET,
        body,
        ...restOptions
      } = options || {};
      const fetchUrl = baseURL ? `${baseURL}${url}` : url;

      const fetchOptions: RequestInit = {
        ...restOptions,
        method,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
          ...headers,
        },
        signal,
      };

      if (body) {
        fetchOptions.body = JSON.stringify(body);
      }

      const timeoutId = setTimeout(() => {
        controller.abort();
      }, timeout);

      try {
        const response = await fetch(fetchUrl, fetchOptions);
        console.log({response});
        
        clearTimeout(timeoutId);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result: T = await response.json();
        setData(result);
      } catch (err) {
        if (err instanceof Error && err.name !== 'AbortError') {
          setError(err);
        } else {
          setError(new Error('An unknown error occurred'));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return {data, loading, error};
};

export default useFetch;
