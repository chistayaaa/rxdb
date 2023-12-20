"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[5832],{3746:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=t(5893),a=t(1151);const s={title:"Sharding RxStorage \ud83d\udc51",slug:"rx-storage-sharding.html"},o="Sharding RxStorage",i={id:"rx-storage-sharding",title:"Sharding RxStorage \ud83d\udc51",description:"With the sharding plugin, you can improve the write and query times of some RxStorage implementations.",source:"@site/docs/rx-storage-sharding.md",sourceDirName:".",slug:"/rx-storage-sharding.html",permalink:"/rx-storage-sharding.html",draft:!1,unlisted:!1,editUrl:"https://github.com/pubkey/rxdb/tree/main/docs-src/docs/rx-storage-sharding.md",tags:[],version:"current",frontMatter:{title:"Sharding RxStorage \ud83d\udc51",slug:"rx-storage-sharding.html"},sidebar:"tutorialSidebar",previous:{title:"Memory Synced RxStorage \ud83d\udc51",permalink:"/rx-storage-memory-synced.html"},next:{title:"RxStorage Localstorage Meta Optimizer \ud83d\udc51",permalink:"/rx-storage-localstorage-meta-optimizer.html"}},d={},l=[{value:"Using the sharding plugin",id:"using-the-sharding-plugin",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"sharding-rxstorage",children:"Sharding RxStorage"}),"\n",(0,r.jsxs)(n.p,{children:["With the sharding plugin, you can improve the write and query times of ",(0,r.jsx)(n.strong,{children:"some"})," ",(0,r.jsx)(n.code,{children:"RxStorage"})," implementations.\nFor example on ",(0,r.jsx)(n.a,{href:"/slow-indexeddb.html",children:"slow IndexedDB"}),", a performance gain of ",(0,r.jsx)(n.strong,{children:"30-50% on reads"}),", and ",(0,r.jsx)(n.strong,{children:"25% on writes"})," can be achieved by using multiple IndexedDB Stores instead of putting all documents into the same store."]}),"\n",(0,r.jsxs)(n.p,{children:["The sharding plugin works as a wrapper around any other ",(0,r.jsx)(n.code,{children:"RxStorage"}),". The sharding plugin will automatically create multiple shards per storage instance and it will merge and split read and write calls to it."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NOTICE:"})," The sharding plugin is part of ",(0,r.jsx)(n.a,{href:"/premium",children:"\ud83d\udc51 RxDB premium"}),". It is not part of the default RxDB module."]}),"\n",(0,r.jsx)(n.h2,{id:"using-the-sharding-plugin",children:"Using the sharding plugin"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import {\n    getRxStorageSharding\n} from 'rxdb-premium/plugins/storage-sharding';\n\nimport { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';\n\n\n/**\n * First wrap the original RxStorage with the sharding RxStorage.\n */\nconst shardedRxStorage = getRxStorageSharding({\n\n    /**\n     * Here we use the dexie.js RxStorage,\n     * it is also possible to use any other RxStorage instead.\n     */\n    storage: getRxStorageDexie()\n});\n\n\n/**\n * Add the sharding options to your schema.\n * Changing these options will require a data migration.\n */\nconst mySchema = {\n    /* ... */\n    sharding: {\n        /**\n         * Amount of shards per RxStorage instance.\n         * Depending on your data size and query patterns, the optimal shard amount may differ.\n         * Do a performance test to optimize that value.\n         * 10 Shards is a good value to start with.\n         * \n         * IMPORTANT: Changing the value of shards is not possible on a already existing database state,\n         * you will loose access to  your data.\n         */\n        shards: 10,\n        /**\n         * Sharding mode,\n         * you can either shard by collection or by database.\n         * For most cases you should use 'collection' which will shard on the collection level.\n         * For example with the IndexedDB RxStorage, it will then create multiple stores per IndexedDB database\n         * and not multiple IndexedDB databases, which would be slower.\n         */\n        mode: 'collection'\n    }\n    /* ... */\n}\n\n\n/**\n * Create the RxDatabase with the wrapped RxStorage. \n */\nconst database = await createRxDatabase({\n    name: 'mydatabase',\n    storage: shardedRxStorage\n});\n\n"})})]})}function g(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var r=t(7294);const a={},s=r.createContext(a);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);