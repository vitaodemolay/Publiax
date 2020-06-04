import * as http from 'http';
import * as https from 'https';
import * as urlTool from 'url';
import * as zlib from 'zlib';
import { strToObject } from './strToObject';
// =================================================================
type TMethod = 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT';
export interface IRequestOptions {
    headers?: http.OutgoingHttpHeaders;
}
// =================================================================
function makeRequest(
    resolve: (values: any) => void,
    reject: (err: any) => void,
    method: TMethod,
    url: string,
    options?: IRequestOptions,
): http.ClientRequest {
    const urlApp = urlTool.parse(url);
    const requester = urlApp.protocol === 'https:' ? https : http;

    const req = requester.request(
        {
            method,
            hostname: urlApp.hostname,
            port: urlApp.port,
            path: urlApp.path,
            headers: options ? options.headers : {},
        },
        (resp) => {
            let data = '';

            resp.on('data', (chunk) => {
                switch (resp.headers['content-encoding']) {
                    case 'br':
                        data += zlib.brotliDecompressSync(chunk);
                        break;
                    case 'gzip':
                        data += zlib.gunzipSync(chunk);
                        break;
                    case 'deflate':
                        data += zlib.inflateSync(chunk);
                        break;
                    default:
                        data += chunk;
                        break;
                }
            });

            resp.on('end', () => {
                const result = { ...strToObject(data), statusCode: resp.statusCode };
                resolve(result);
            });
        },
    );

    req.on('error', (err) => {
        reject(err);
    });

    return req;
}
// =================================================================
export function httpGet<T>(url: string, options?: IRequestOptions) {
    let headers: http.OutgoingHttpHeaders = { 'Content-Type': 'application/json' };

    if (options && options.headers) {
        headers = options.headers;
    }

    return new Promise<T>((resolve, reject) => {
        const req = makeRequest(resolve, reject, 'GET', url, {
            headers,
        });
        req.end();
    });
}
// =================================================================
export function httpPost<T>(url: string, data: object, options?: IRequestOptions) {
    let headers: http.OutgoingHttpHeaders = { 'Content-Type': 'application/json' };

    if (options && options.headers) {
        headers = options.headers;
    }

    return new Promise<T>((resolve, reject) => {
        const req = makeRequest(resolve, reject, 'POST', url, {
            headers,
        });
        if (typeof data === 'object') {
            req.write(JSON.stringify(data));
        } else if (data) {
            req.write(data);
        }
        req.end();
    });
}
// =================================================================
export function httpDelete<T>(url: string, options?: IRequestOptions) {
    let headers: http.OutgoingHttpHeaders = { 'Content-Type': 'application/json' };

    if (options && options.headers) {
        headers = options.headers;
    }

    return new Promise<T>((resolve, reject) => {
        const req = makeRequest(resolve, reject, 'DELETE', url, {
            headers,
        });
        req.end();
    });
}
// =================================================================
export function httpPatch<T>(url: string, options?: IRequestOptions) {
    let headers: http.OutgoingHttpHeaders = { 'Content-Type': 'application/json' };

    if (options && options.headers) {
        headers = options.headers;
    }

    return new Promise<T>((resolve, reject) => {
        const req = makeRequest(resolve, reject, 'PATCH', url, {
            headers,
        });
        req.end();
    });
}
// =================================================================
export function httpPut<T>(url: string, data: object, options?: IRequestOptions) {
    let headers: http.OutgoingHttpHeaders = { 'Content-Type': 'application/json' };

    if (options && options.headers) {
        headers = options.headers;
    }

    return new Promise<T>((resolve, reject) => {
        const req = makeRequest(resolve, reject, 'PUT', url, {
            headers,
        });
        if (typeof data === 'object') {
            req.write(JSON.stringify(data));
        } else if (data) {
            req.write(data);
        }
        req.end();
    });
}
