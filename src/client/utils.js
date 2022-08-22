class RepeatingRequest {
	constructor(cb, opts) {
		this.active = true;
		this.watchIndex = null;
		this.abortController = new AbortController();
		this.messageHandlers = [];
		this.errorHandlers = [];

		this.cb = cb;

		this.opts = Object.assign(
			{
				cancelOnError: true,
				noWatchIndex: false,
				watchIndex: undefined
			},
			opts
		);

		// Set anchor before starting request loop
		if (this.opts.watchIndex !== undefined && this.opts.watchIndex !== null)
			this.parseWatchResponse(this.opts.watchIndex);

		this.repeat();
	}

	// Repeat request forever until cancelled
	async repeat() {
		while (this.active) {
			// Handle any request errors
			try {
				let res = await this.cb(this.abortController.signal, this.watchIndex ?? undefined);

				this.handleMessage(res);
				this.parseWatchResponse(res.watch);
			} catch (e) {
				// In this system, an abort isn't erroneous behavior
				if (e instanceof DOMException && e.name == 'AbortError') return;

				// Cancels on error by default
				if (this.opts.cancelOnError) this.cancel();

				this.handleErrors(e);
			}
		}
	}

	onMessage(cb) {
		this.messageHandlers.push(cb);
	}

	onError(cb) {
		this.errorHandlers.push(cb);
	}

	cancel() {
		this.abortController.abort();
		this.active = false;
	}

	start() {
		if (!this.active) {
			this.abortController = new AbortController();
			this.active = true;
			this.repeat();
		}
	}

	removeMessageHandler(cb) {
		let index = this.messageHandlers.indexOf(cb);
		if (index != -1) this.messageHandlers.splice(index, 1);
	}

	handleMessage(message) {
		this.messageHandlers.forEach(cb => cb(message));
	}

	handleErrors(e) {
		this.errorHandlers.forEach(cb => cb(e));

		if (this.errorHandlers.length == 0) console.error('Unhandled repeating request error', e);
	}

	parseWatchResponse(watchResponse) {
		if (!this.opts.noWatchIndex) {
			if (!watchResponse.index) console.error('Blocking request has no watch response');
			else this.watchIndex = watchResponse.index;
		}
	}
}

module.exports = { RepeatingRequest };
