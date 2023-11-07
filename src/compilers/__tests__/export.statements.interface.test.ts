import { getExportStatement } from '#/compilers/getExportStatement';
import type { IExportStatement } from '#/compilers/interfaces/IExportStatement';
import { filenamify } from '#/modules/path/filenamify';
import { describe, expect, it } from '@jest/globals';
import { randomUUID } from 'node:crypto';
import path from 'node:path';
import * as tsm from 'ts-morph';

const tsconfigPath = path.join(process.cwd(), 'example', 'tsconfig.example.json');
const context = {
  tsconfig: tsconfigPath,
  project: new tsm.Project({
    tsConfigFilePath: tsconfigPath,
  }),
};

describe('getExportStatements - interface', () => {
  it('greator than once, named export interface', async () => {
    const uuid = randomUUID();
    const filename = `${uuid}.ts`;
    const source = `
export interface IHero {
  name: string;
}

export interface IAbility {
  name: string;
}
    `;

    const sourceFile = context.project.createSourceFile(filename, source.trim());

    const statement = await getExportStatement(
      sourceFile,
      {
        project: context.tsconfig,
        exportFilename: 'index.ts',
      },
      { eol: '\n' },
    );

    expect(statement).toMatchObject([
      {
        path: {
          filename,
          dirPath: process.cwd(),
          relativePath: '..',
        },
        depth: 2,
        pos: {
          line: 1,
          column: 1,
        },
        identifier: { name: 'IHero', alias: filenamify(filename) },
        isAnonymous: false,
        isPureType: true,
        isDefault: false,
        isExcluded: false,
        comments: [],
      } satisfies IExportStatement,
      {
        path: {
          filename,
          dirPath: process.cwd(),
          relativePath: '..',
        },
        depth: 2,
        pos: {
          line: 5,
          column: 1,
        },
        identifier: { name: 'IAbility', alias: filenamify(filename) },
        isAnonymous: false,
        isPureType: true,
        isDefault: false,
        isExcluded: false,
        comments: [],
      } satisfies IExportStatement,
    ]);
  });

  it('greator than once, named export interface', async () => {
    const uuid = randomUUID();
    const filename = `${uuid}.ts`;
    const source = `
export default interface IHero {
  name: string;
}

export interface IAbility {
  name: string;
}

export interface IOrganization {
  name: string;
}
    `;

    const sourceFile = context.project.createSourceFile(filename, source.trim());

    const statement = await getExportStatement(
      sourceFile,
      {
        project: context.tsconfig,
        exportFilename: 'index.ts',
      },
      { eol: '\n' },
    );

    expect(statement).toMatchObject([
      {
        path: {
          filename,
          dirPath: process.cwd(),
          relativePath: '..',
        },
        depth: 2,
        pos: {
          line: 1,
          column: 1,
        },
        identifier: { name: 'default', alias: 'IHero' },
        isPureType: true,
        isAnonymous: false,
        isDefault: true,
        isExcluded: false,
        comments: [],
      } satisfies IExportStatement,
      {
        path: {
          filename,
          dirPath: process.cwd(),
          relativePath: '..',
        },
        depth: 2,
        pos: {
          line: 5,
          column: 1,
        },
        identifier: { name: 'IAbility', alias: filenamify(filename) },
        isAnonymous: false,
        isPureType: true,
        isDefault: false,
        isExcluded: false,
        comments: [],
      } satisfies IExportStatement,
      {
        path: {
          filename,
          dirPath: process.cwd(),
          relativePath: '..',
        },
        depth: 2,
        pos: {
          line: 9,
          column: 1,
        },
        identifier: { name: 'IOrganization', alias: filenamify(filename) },
        isAnonymous: false,
        isPureType: true,
        isDefault: false,
        isExcluded: false,
        comments: [],
      } satisfies IExportStatement,
    ]);
  });
});
