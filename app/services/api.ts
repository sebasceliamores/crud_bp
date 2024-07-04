import {authorId, baseURL} from '../constants/api.constants';
import useFetch from '../hooks/useFetch';
import {IProduct} from '../models/Product.model';
import {HttpMethod} from '../enums/HttpMethod';
import {FetchOptions} from '../models/Fetch.model';

const productsUrl = '/bp/products';
const options = {
  baseURL,
  headers: {
    authorId,
  },
};

const fetchData = async (url: string, options?: FetchOptions) => {
  const {
    baseURL = '',
    timeout = 10000,
    headers,
    method = HttpMethod.GET,
    body,
    ...restOptions
  } = options || {};

  const fetchUrl = baseURL ? `${baseURL}${url}` : url;
  const controller = new AbortController();
  const signal = controller.signal;

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

    clearTimeout(timeoutId);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return {data: result, error: undefined};
  } catch (err) {
    if (err instanceof Error && err.name !== 'AbortError') {
      return {data: undefined, error: err};
    } else {
      return {data: undefined, error: new Error('An unknown error occurred')};
    }
  }
};

const getProducts = () => {
  return useFetch<IProduct[]>(productsUrl, {
    ...options,
    method: HttpMethod.GET,
  });
};

const saveProduct = (product: IProduct) => {
  return fetchData(productsUrl, {
    ...options,
    method: HttpMethod.POST,
    body: product,
  });
};

const updateProduct = (product: IProduct) => {
  return fetchData(productsUrl, {
    ...options,
    method: HttpMethod.PUT,
    body: product,
  });
};

const deleteProduct = (id: string) => {
  return fetchData(productsUrl + `/?id=${id}`, {
    ...options,
    method: HttpMethod.DELETE,
  });
};

export default {
  getProducts,
  saveProduct,
  updateProduct,
  deleteProduct,
};
