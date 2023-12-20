"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[7035],{7547:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var i=t(5893),s=t(1151);const r={title:"RxDB 13.0.0",slug:"13.0.0.html",description:"RxDB Major Release 13.0.0"},o="13.0.0",a={id:"releases/13.0.0",title:"RxDB 13.0.0",description:"RxDB Major Release 13.0.0",source:"@site/docs/releases/13.0.0.md",sourceDirName:"releases",slug:"/releases/13.0.0.html",permalink:"/releases/13.0.0.html",draft:!1,unlisted:!1,editUrl:"https://github.com/pubkey/rxdb/tree/main/docs-src/docs/releases/13.0.0.md",tags:[],version:"current",frontMatter:{title:"RxDB 13.0.0",slug:"13.0.0.html",description:"RxDB Major Release 13.0.0"},sidebar:"tutorialSidebar",previous:{title:"RxDB 14.0.0",permalink:"/releases/14.0.0.html"},next:{title:"RxDB 12.0.0",permalink:"/releases/12.0.0.html"}},l={},h=[{value:"Other breaking changes",id:"other-breaking-changes",level:2},{value:"Other non breaking or internal changes",id:"other-non-breaking-or-internal-changes",level:2},{value:"New Features",id:"new-features",level:2},{value:"Migration to the new version",id:"migration-to-the-new-version",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"1300",children:"13.0.0"}),"\n",(0,i.jsxs)(n.p,{children:["So in the last major RxDB versions, the focus was set to ",(0,i.jsx)(n.strong,{children:"improvements of the storage engine"}),". This is done. RxDB has now ",(0,i.jsx)(n.a,{href:"/rx-storage.html",children:"multiple RxStorage implementations"}),", a better query planner and an improved test suite to ensure everything works correct.\nThis let to huge improvements in write and query performance and decreased the initial pageload of RxDB based applications."]}),"\n",(0,i.jsxs)(n.p,{children:["In the new major version ",(0,i.jsx)(n.code,{children:"13.0.0"}),", the focus was set to improvements to the ",(0,i.jsx)(n.strong,{children:"replication protocol"}),".\nWhen I first implemented the GraphQL replication a few years ago, I had a specific use case in mind and designed the whole protocol and replication plugins around that use case."]}),"\n",(0,i.jsx)(n.p,{children:"But the time has shown, that the old replication protocol is a big downside of RxDB:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The replication relied on the backend to solve all ",(0,i.jsx)(n.strong,{children:"conflicts"}),". This was easy to implement into RxDB because the whole \tresponsibility was given away to the person that has to implement a compatible backend."]}),"\n",(0,i.jsxs)(n.li,{children:["In each point in time, the replication did either push or pull documents, but ",(0,i.jsx)(n.strong,{children:"never in parallel"}),". This slows done the whole replication process and makes RxDB not usable for the implementation of features like ",(0,i.jsx)(n.strong,{children:"multi-user-real-time-collaboration"})," or when many read- and write operations have to happen in a short timespan."]}),"\n",(0,i.jsxs)(n.li,{children:["After each ",(0,i.jsx)(n.code,{children:"push"}),", a ",(0,i.jsx)(n.code,{children:"pull"})," had to be run to check if the backend had changed the state to solve a conflict."]}),"\n",(0,i.jsx)(n.li,{children:"The replication protocol did not support attachments and was not designed to ever support them."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["So in version ",(0,i.jsx)(n.code,{children:"13.0.0"})," I replaced the whole replication plugins with a new replication protocol. The main goals have been:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Push- and Pull in parallel."}),"\n",(0,i.jsx)(n.li,{children:"Use the data in the changestream (optional) to decrease replication latency."}),"\n",(0,i.jsxs)(n.li,{children:["Implement the conflict resolution into RxDB so that the ",(0,i.jsx)(n.strong,{children:"client resolves its own conflicts"})," and does not rely on the backend."]}),"\n",(0,i.jsxs)(n.li,{children:["Decrease the complexity for a compatible backend implementation. The new protocol relies on a ",(0,i.jsx)(n.em,{children:"dumb"})," backend. This will open compatibility with many other use cases like implementing ",(0,i.jsx)(n.a,{href:"https://github.com/supabase/supabase/discussions/357",children:"Offline-First in Supabase"})," or using CouchDB but having a faster replication compared to the native CouchDB replication."]}),"\n",(0,i.jsxs)(n.li,{children:["Make it possible to use ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type",children:"CRDTs"})," instead of a conflict resolution."]}),"\n",(0,i.jsx)(n.li,{children:"Design a the protocol in a way to make it possible to add attachments replication in the future."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"On the RxDocument level, the replication works like git, where the fork/client contains all new writes and must be merged with the master/server before it can push its new state to the master/server."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"A---B1---C1---X    master/server state\n     \\       /\n      B1---C2      fork/client state\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For more details, read the ",(0,i.jsx)(n.a,{href:"/replication.html",children:"documentation about the new replication protocol"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Backends that have been compatible with the previous RxDB versions ",(0,i.jsx)(n.code,{children:"12"})," and older, will not work with the new replication protocol. To learn how to do that, either read the ",(0,i.jsx)(n.a,{href:"/replication.html",children:"docs"})," or check out the ",(0,i.jsx)(n.a,{href:"https://github.com/pubkey/rxdb/tree/master/examples/graphql",children:"GraphQL example"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"other-breaking-changes",children:"Other breaking changes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["RENAMED the ",(0,i.jsx)(n.code,{children:"ajv-validate"})," plugin to ",(0,i.jsx)(n.code,{children:"validate-ajv"})," to be in equal with the other validation plugins."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"is-my-json-valid"})," validation is no longer supported until ",(0,i.jsx)(n.a,{href:"https://github.com/mafintosh/is-my-json-valid/pull/192",children:"this bug"})," is fixed."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["REFACTORED the ",(0,i.jsx)(n.a,{href:"https://rxdb.info/schema-validation.html",children:"schema validation plugins"}),", they are no longer plugins but now they get wrapped around any other RxStorage."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["It allows us to run the validation inside of a ",(0,i.jsx)(n.a,{href:"/rx-storage-worker.html",children:"Worker RxStorage"})," instead of running it in the main JavaScript process."]}),"\n",(0,i.jsxs)(n.li,{children:["It allows us to configure which ",(0,i.jsx)(n.code,{children:"RxDatabase"})," instance must use the validation and which does not. In production it often makes sense to validate user data, but you might not need the validation for data that is only replicated from the backend."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["REFACTORED the ",(0,i.jsx)(n.a,{href:"/key-compression.html",children:"key compression plugin"}),", it is no longer a plugin but now a wrapper around any other RxStorage."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["It allows to run the key-compression inside of a ",(0,i.jsx)(n.a,{href:"/rx-storage-worker.html",children:"Worker RxStorage"})," instead of running it in the main JavaScript process."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"REFACTORED the encryption plugin, it is no longer a plugin but now a wrapper around any other RxStorage."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["It allows to run the encryption inside of a ",(0,i.jsx)(n.a,{href:"/rx-storage-worker.html",children:"Worker RxStorage"})," instead of running it in the main JavaScript process."]}),"\n",(0,i.jsxs)(n.li,{children:["It allows do use asynchronous crypto function like ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API",children:"WebCrypto"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Store the password hash in the same write request as the database token to improve performance."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["REMOVED support for temporary documents ",(0,i.jsx)(n.a,{href:"https://github.com/pubkey/rxdb/pull/3777#issuecomment-1120669088",children:"see here"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["REMOVED RxDatabase.broadcastChannel The broadcast channel has been moved out of the RxDatabase and is part of the RxStorage. So it is not longer exposed via ",(0,i.jsx)(n.code,{children:"RxDatabase.broadcastChannel"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Removed the ",(0,i.jsx)(n.code,{children:"liveInterval"})," option of the replication plugins. It was an edge case feature with wrong defaults. If you want to run the pull replication on interval, you can send a ",(0,i.jsx)(n.code,{children:"RESYNC"})," event manually in a loop."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["REPLACED ",(0,i.jsx)(n.code,{children:"RxReplicationPullError"})," and ",(0,i.jsx)(n.code,{children:"RxReplicationPushError"})," with normal ",(0,i.jsx)(n.code,{children:"RxError"})," like in the rest of the RxDB code."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["REMOVED the option to filter out replication documents with the push/pull modifiers ",(0,i.jsx)(n.a,{href:"https://github.com/pubkey/rxdb/issues/2552",children:"#2552"})," because this does not work with the new replication protocol."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["CHANGE default of replication ",(0,i.jsx)(n.code,{children:"live"})," to be set to ",(0,i.jsx)(n.code,{children:"true"}),". Because most people want to do a live replication, not a one time replication."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["RENAMED the ",(0,i.jsx)(n.code,{children:"server"})," plugin is now called ",(0,i.jsx)(n.code,{children:"server-couchdb"})," and ",(0,i.jsx)(n.code,{children:"RxDatabase.server()"})," is now ",(0,i.jsx)(n.code,{children:"RxDatabase.serverCouchDB()"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["CHANGED Attachment data is now always handled as ",(0,i.jsx)(n.code,{children:"Blob"})," because Node.js does support ",(0,i.jsx)(n.code,{children:"Blob"})," since version 18.0.0 so we no longer have to use a ",(0,i.jsx)(n.code,{children:"Buffer"})," but instead can use Blob for browsers and Node.js"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["REFACTORED the layout of ",(0,i.jsx)(n.code,{children:"RxChangeEvent"})," to better match the RxDB requirements and to fix the 'deleted-document-is-modified-but-still-deleted' bug."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["When used with Node.js, RxDB now requires Node.js version ",(0,i.jsx)(n.code,{children:"18.0.0"})," or higher."]}),"\n",(0,i.jsx)(n.h2,{id:"other-non-breaking-or-internal-changes",children:"Other non breaking or internal changes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"REMOVED many unused plugin hooks because they decreased the performance."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["REMOVE RxStorageStatics ",(0,i.jsx)(n.code,{children:".hash"})," and ",(0,i.jsx)(n.code,{children:".hashKey"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["CHANGE removed default usage of ",(0,i.jsx)(n.code,{children:"md5"})," as default hashing. Use a faster non-cryptographic hash instead."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["ADD option to pass a custom hash function when calling ",(0,i.jsx)(n.code,{children:"createRxDatabase"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["CHANGE use ",(0,i.jsx)(n.code,{children:"Float"})," instead of ",(0,i.jsx)(n.code,{children:"Int"})," to represent timestamps in GraphQL."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["FIXED multiple problems with encoding attachments data. We now use the ",(0,i.jsx)(n.code,{children:"js-base64"})," library which properly handles utf-8/binary/ascii transformations."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the RxDB internal ",(0,i.jsx)(n.code,{children:"_meta.lwt"})," field, we now use 2 decimals number of the unix timestamp in milliseconds."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["ADDED ",(0,i.jsx)(n.code,{children:"checkpointSchema"})," to the ",(0,i.jsx)(n.code,{children:"RxStorage.statics"})," interface."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"new-features",children:"New Features"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["ADDED the ",(0,i.jsx)(n.a,{href:"/replication-websocket.html",children:"websocket replication plugin"})]}),"\n",(0,i.jsxs)(n.li,{children:["ADDED the ",(0,i.jsx)(n.a,{href:"/rx-storage-foundationdb.html",children:"FoundationDB RxStorage"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"migration-to-the-new-version",children:"Migration to the new version"}),"\n",(0,i.jsxs)(n.p,{children:["Stored data of the previous RxDB versions is not compatible with RxDB ",(0,i.jsx)(n.code,{children:"13.0.0"}),". So if you want to keep that data, you have to migrate it in a way. For most use cases you might want to just drop the data from the client and re-sync it again from the backend. To keep the data locally, you might want to use the ",(0,i.jsx)(n.a,{href:"/migration-storage.html",children:"storage migration plugin"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var i=t(7294);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);