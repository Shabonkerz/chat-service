import net from 'net';
import Command from '../commands/command';
import commands from '../commands/index';
import BaseChatClient from './base';
import winston from 'winston';

const messages = {
	welcome: 'Welcome to the chat server.',
	commandDoesNotExist: 'Command does not exist.'
};

export default class HttpChatClient extends BaseChatClient {

	// TODO: Introduce scoped variables to reduce number of chain lookups by interpreter.
	constructor (client) {
		super();

		super._onConnect();

		this._client = client;

		this._registerEvents();

		// var address = this.socket.address();
		//
		// winston.info(`Client connected via TCP: address => ${address.address}, port => ${address.port}, family => ${address.family}, id => ${super.user.id}`);

		this._writeLine(messages.welcome);
	}

	_writeLine (message) {
		// this.client.write(message + '\r\n');
	}

	_registerEvents () {
		// this.socket.on('data', (data) => {
		// 	super._onData(data);
		// });
		//
		// this.socket.on('end', () => {
		// 	super._onDisconnect();
		// });
		//
		// this.socket.on('error', (error) => {
		// 	super._onError(error);
		// });

	}

	static create (client) {
		return new HttpChatClient(client);
	}
}
