'use strict';

import {expect} from 'chai';
import listSubfoldersByName from '../src/list.subfolders.by.name';

describe('getSubfoldersByName tests', () => {
	it('expect test\\functions', () => {
		const folders: string[] = listSubfoldersByName('test', 'mongodb');
		expect(folders.length).to.be.equal(1);
		expect(folders[0]).to.be.equal('test\\__test\\mongodb');
	});
	it('expect src\\functions', () => {
		const folders: string[] = listSubfoldersByName('test', 'functions');
		expect(folders.length).to.be.equal(2);
		expect(folders).to.be.deep.equal(['test\\__test\\functions', 'test\\__test\\mongodb\\functions']);
	});
});
