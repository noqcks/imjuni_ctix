import * as env from '@testenv/env';
import { posixJoin } from '@tools/misc';
import { replaceSepToPosix } from 'my-node-fp';

export default [
  {
    resolvedFilePath: posixJoin(env.exampleType03Path, 'BubbleCls.tsx'),
    resolvedDirPath: replaceSepToPosix(env.exampleType03Path),
    relativeFilePath: posixJoin('BubbleCls.tsx'),
    depth: 1,
    starExported: true,
    defaultExport: undefined,
    namedExports: [{ identifier: 'BubbleCls' }],
  },
  {
    resolvedFilePath: posixJoin(env.exampleType03Path, 'ComparisonCls.tsx'),
    resolvedDirPath: replaceSepToPosix(env.exampleType03Path),
    relativeFilePath: posixJoin('ComparisonCls.tsx'),
    depth: 1,
    starExported: true,
    defaultExport: undefined,
    namedExports: [{ identifier: 'ComparisonCls' }],
  },
  {
    resolvedFilePath: posixJoin(env.exampleType03Path, 'createTypeScriptIndex.d.ts'),
    resolvedDirPath: replaceSepToPosix(env.exampleType03Path),
    relativeFilePath: posixJoin('createTypeScriptIndex.d.ts'),
    depth: 1,
    starExported: true,
    defaultExport: undefined,
    namedExports: [
      { identifier: 'indexWriter' },
      { identifier: 'createTypeScriptIndex' },
      { identifier: 'ICreateTsIndexOption' },
    ],
  },
  {
    resolvedFilePath: posixJoin(env.exampleType03Path, 'HandsomelyCls.tsx'),
    resolvedDirPath: replaceSepToPosix(env.exampleType03Path),
    relativeFilePath: posixJoin('HandsomelyCls.tsx'),
    depth: 1,
    starExported: true,
    defaultExport: undefined,
    namedExports: [{ identifier: 'HandsomelyCls' }],
  },
  {
    resolvedFilePath: posixJoin(env.exampleType03Path, 'index.d.ts'),
    resolvedDirPath: replaceSepToPosix(env.exampleType03Path),
    relativeFilePath: posixJoin('index.d.ts'),
    depth: 1,
    starExported: true,
    defaultExport: undefined,
    namedExports: [
      { identifier: 'indexWriter' },
      { identifier: 'createTypeScriptIndex' },
      { identifier: 'ICreateTsIndexOption' },
    ],
  },
  {
    resolvedFilePath: posixJoin(env.exampleType03Path, 'SampleCls.tsx'),
    resolvedDirPath: replaceSepToPosix(env.exampleType03Path),
    relativeFilePath: posixJoin('SampleCls.tsx'),
    depth: 1,
    starExported: true,
    defaultExport: undefined,
    namedExports: [{ identifier: 'SampleCls' }],
  },
  {
    resolvedFilePath: posixJoin(env.exampleType03Path, 'juvenile/TriteCls.ts'),
    resolvedDirPath: posixJoin(env.exampleType03Path, 'juvenile'),
    relativeFilePath: posixJoin('juvenile/TriteCls.ts'),
    depth: 2,
    starExported: true,
    defaultExport: undefined,
    namedExports: [{ identifier: 'TriteCls' }],
  },
  {
    resolvedFilePath: posixJoin(env.exampleType03Path, 'popcorn/case01.ts'),
    resolvedDirPath: posixJoin(env.exampleType03Path, 'popcorn'),
    relativeFilePath: posixJoin('popcorn/case01.ts'),
    depth: 2,
    starExported: true,
    defaultExport: { identifier: 'case01' },
    namedExports: [],
  },
  {
    resolvedFilePath: posixJoin(env.exampleType03Path, 'popcorn/index.d.ts'),
    resolvedDirPath: posixJoin(env.exampleType03Path, 'popcorn'),
    relativeFilePath: posixJoin('popcorn/index.d.ts'),
    depth: 2,
    starExported: true,
    defaultExport: undefined,
    namedExports: [],
  },
  {
    resolvedFilePath: posixJoin(env.exampleType03Path, 'wellmade/ChildlikeCls.ts'),
    resolvedDirPath: posixJoin(env.exampleType03Path, 'wellmade'),
    relativeFilePath: posixJoin('wellmade/ChildlikeCls.ts'),
    depth: 2,
    starExported: true,
    defaultExport: undefined,
    namedExports: [{ identifier: 'ChildlikeCls' }],
  },
  {
    resolvedFilePath: posixJoin(env.exampleType03Path, 'wellmade/FlakyCls.ts'),
    resolvedDirPath: posixJoin(env.exampleType03Path, 'wellmade'),
    relativeFilePath: posixJoin('wellmade/FlakyCls.ts'),
    depth: 2,
    starExported: true,
    defaultExport: undefined,
    namedExports: [{ identifier: 'FlakyCls' }],
  },
  {
    resolvedFilePath: posixJoin(env.exampleType03Path, 'wellmade/WhisperingCls.ts'),
    resolvedDirPath: posixJoin(env.exampleType03Path, 'wellmade'),
    relativeFilePath: posixJoin('wellmade/WhisperingCls.ts'),
    depth: 2,
    starExported: true,
    defaultExport: undefined,
    namedExports: [{ identifier: 'WhisperingCls' }],
  },
  {
    resolvedFilePath: posixJoin(env.exampleType03Path, 'juvenile/spill/ExperienceCls.ts'),
    resolvedDirPath: posixJoin(env.exampleType03Path, 'juvenile/spill'),
    relativeFilePath: posixJoin('juvenile/spill/ExperienceCls.ts'),
    depth: 3,
    starExported: true,
    defaultExport: undefined,
    namedExports: [{ identifier: 'ExperienceCls' }],
  },
  {
    resolvedFilePath: posixJoin(env.exampleType03Path, 'wellmade/carpenter/DiscussionCls.ts'),
    resolvedDirPath: posixJoin(env.exampleType03Path, 'wellmade/carpenter'),
    relativeFilePath: posixJoin('wellmade/carpenter/DiscussionCls.ts'),
    depth: 3,
    starExported: true,
    defaultExport: undefined,
    namedExports: [{ identifier: 'DiscussionCls' }],
  },
  {
    resolvedFilePath: posixJoin(env.exampleType03Path, 'wellmade/carpenter/MakeshiftCls.ts'),
    resolvedDirPath: posixJoin(env.exampleType03Path, 'wellmade/carpenter'),
    relativeFilePath: posixJoin('wellmade/carpenter/MakeshiftCls.ts'),
    depth: 3,
    starExported: true,
    defaultExport: undefined,
    namedExports: [{ identifier: 'MakeshiftCls' }],
  },
  {
    resolvedFilePath: posixJoin(env.exampleType03Path, 'popcorn/finance/discipline/case02.ts'),
    resolvedDirPath: posixJoin(env.exampleType03Path, 'popcorn/finance/discipline'),
    relativeFilePath: posixJoin('popcorn/finance/discipline/case02.ts'),
    depth: 4,
    starExported: true,
    defaultExport: { identifier: 'case02' },
    namedExports: [],
  },
  {
    resolvedFilePath: posixJoin(env.exampleType03Path, 'popcorn/finance/discipline/case03.ts'),
    resolvedDirPath: posixJoin(env.exampleType03Path, 'popcorn/finance/discipline'),
    relativeFilePath: posixJoin('popcorn/finance/discipline/case03.ts'),
    depth: 4,
    starExported: true,
    defaultExport: { identifier: 'Case03' },
    namedExports: [],
  },
  {
    resolvedFilePath: posixJoin(env.exampleType03Path, 'popcorn/lawyer/appliance/bomb.ts'),
    resolvedDirPath: posixJoin(env.exampleType03Path, 'popcorn/lawyer/appliance'),
    relativeFilePath: posixJoin('popcorn/lawyer/appliance/bomb.ts'),
    depth: 4,
    starExported: true,
    defaultExport: { identifier: 'bomb' },
    namedExports: [{ identifier: 'bomb' }],
  },
  {
    resolvedFilePath: posixJoin(env.exampleType03Path, 'popcorn/lawyer/appliance/IKittens.ts'),
    resolvedDirPath: posixJoin(env.exampleType03Path, 'popcorn/lawyer/appliance'),
    relativeFilePath: posixJoin('popcorn/lawyer/appliance/IKittens.ts'),
    depth: 4,
    starExported: true,
    defaultExport: { identifier: 'IKittens' },
    namedExports: [],
  },
  {
    resolvedFilePath: posixJoin(env.exampleType03Path, 'popcorn/lawyer/appliance/TomatoesCls.ts'),
    resolvedDirPath: posixJoin(env.exampleType03Path, 'popcorn/lawyer/appliance'),
    relativeFilePath: posixJoin('popcorn/lawyer/appliance/TomatoesCls.ts'),
    depth: 4,
    starExported: true,
    defaultExport: undefined,
    namedExports: [{ identifier: 'TomatoesCls' }],
  },
];
