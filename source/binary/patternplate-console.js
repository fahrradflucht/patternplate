#!/usr/bin/env node --harmony
/*eslint-disable no-process-env, no-process-exit */

import 'babel-core/polyfill';
import minimist from 'minimist';

import patternplate from '../';

async function start ( options = {} ) {
	let application;
	let settings = Object.assign( options, { 'mode': 'console' } );

	try {
		application = await patternplate( settings );
	} catch ( error ) {
		let log = application ? application.log || console : console;
		log.error( error );
		throw new Error( error );
	}

	try {
		await application.server.run( settings );
	} catch ( error ) {
		application.log.error( error );
		throw new Error( error );
	}
}

start( minimist( process.argv.slice( 1 ) ) );
