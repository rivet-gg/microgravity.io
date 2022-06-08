const regeneratorRuntime = require('regenerator-runtime');

module.exports = {
	requestHandlerMiddleware(
		token,
		init = {
			credentials: 'omit'
		}
	) {
		return {
			handle: async (req, opts) => {
				req.headers = {};
				if (token) req.headers.Authorization = `Bearer ${token.token}`;

				let queryParameters = req.query ? Object.entries(req.query) : [];
				let query = queryParameters
					.map(([k, v]) => `${k}=${encodeURIComponent(v instanceof Array ? v.join(',') : v)}`)
					.join('&');
				let uri = `${req.protocol}//${req.hostname}${req.port ? `:${req.port}` : ''}${req.path}${
					query ? `?${query}` : ''
				}`;

				let res = await fetch(
					uri,
					Object.assign(req, init, {
						signal: opts.abortSignal
					})
				);

				return {
					response: {
						statusCode: res.status,
						body: await res.clone().blob(),
						headers: Array.from(res.headers.entries()).reduce((s, [k, v]) => {
							s[k] = v;
							return s;
						}, {})
					}
				};
			}
		};
	}
};
