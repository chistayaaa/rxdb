"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[4669],{8021:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var i=t(5893),s=t(1151);const a={title:"RxSchema",slug:"rx-schema.html"},r="RxSchema",l={id:"rx-schema",title:"RxSchema",description:"Schemas define the structure of the documents of a collection. Which field should be used as primary, which fields should be used as indexes and what should be encrypted. Every collection has its own schema. With RxDB, schemas are defined with the jsonschema-standard which you might know from other projects.",source:"@site/docs/rx-schema.md",sourceDirName:".",slug:"/rx-schema.html",permalink:"/rx-schema.html",draft:!1,unlisted:!1,editUrl:"https://github.com/pubkey/rxdb/tree/main/docs-src/docs/rx-schema.md",tags:[],version:"current",frontMatter:{title:"RxSchema",slug:"rx-schema.html"},sidebar:"tutorialSidebar",previous:{title:"RxDatabase",permalink:"/rx-database.html"},next:{title:"RxCollection",permalink:"/rx-collection.html"}},o={},h=[{value:"Example",id:"example",level:2},{value:"Create a collection with the schema",id:"create-a-collection-with-the-schema",level:2},{value:"version",id:"version",level:2},{value:"primaryKey",id:"primarykey",level:2},{value:"composite primary key",id:"composite-primary-key",level:3},{value:"Indexes",id:"indexes",level:2},{value:"Index-example",id:"index-example",level:3},{value:"attachments",id:"attachments",level:2},{value:"default",id:"default",level:2},{value:"final",id:"final",level:2},{value:"NOTICE: Not everything within the jsonschema-spec is allowed",id:"notice-not-everything-within-the-jsonschema-spec-is-allowed",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"rxschema",children:"RxSchema"}),"\n",(0,i.jsxs)(n.p,{children:["Schemas define the structure of the documents of a collection. Which field should be used as primary, which fields should be used as indexes and what should be encrypted. Every collection has its own schema. With RxDB, schemas are defined with the ",(0,i.jsx)(n.a,{href:"http://json-schema.org/",children:"jsonschema"}),"-standard which you might know from other projects."]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"In this example-schema we define a hero-collection with the following settings:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"the version-number of the schema is 0"}),"\n",(0,i.jsxs)(n.li,{children:["the name-property is the ",(0,i.jsx)(n.strong,{children:"primaryKey"}),". This means its an unique, indexed, required ",(0,i.jsx)(n.code,{children:"string"})," which can be used to definitely find a single document."]}),"\n",(0,i.jsx)(n.li,{children:"the color-field is required for every document"}),"\n",(0,i.jsx)(n.li,{children:"the healthpoints-field must be a number between 0 and 100"}),"\n",(0,i.jsx)(n.li,{children:"the secret-field stores an encrypted value"}),"\n",(0,i.jsx)(n.li,{children:"the birthyear-field is final which means it is required and cannot be changed"}),"\n",(0,i.jsx)(n.li,{children:"the skills-attribute must be an array with objects which contain the name and the damage-attribute. There is a maximum of 5 skills per hero."}),"\n",(0,i.jsx)(n.li,{children:"Allows adding attachments and store them encrypted"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'  {\n    "title": "hero schema",\n    "version": 0,\n    "description": "describes a simple hero",\n    "primaryKey": "name",\n    "type": "object",\n    "properties": {\n        "name": {\n            "type": "string",\n            "maxLength": 100 // <- the primary key must have set maxLength\n        },\n        "color": {\n            "type": "string"\n        },\n        "healthpoints": {\n            "type": "number",\n            "minimum": 0,\n            "maximum": 100\n        },\n        "secret": {\n            "type": "string"\n        },\n        "birthyear": {\n            "type": "number",\n            "final": true,\n            "minimum": 1900,\n            "maximum": 2050\n        },\n        "skills": {\n            "type": "array",\n            "maxItems": 5,\n            "uniqueItems": true,\n            "items": {\n                "type": "object",\n                "properties": {\n                    "name": {\n                        "type": "string"\n                    },\n                    "damage": {\n                        "type": "number"\n                    }\n                }\n            }\n        }\n    },\n    "required": [\n        "name",\n        "color"\n    ],\n    "encrypted": ["secret"],\n    "attachments": {\n        "encrypted": true\n    }\n  }\n'})}),"\n",(0,i.jsx)(n.h2,{id:"create-a-collection-with-the-schema",children:"Create a collection with the schema"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"await myDatabase.addCollections({\n    heroes: {\n        schema: myHeroSchema\n    }\n});\nconsole.dir(myDatabase.heroes.name);\n// heroes\n"})}),"\n",(0,i.jsx)(n.h2,{id:"version",children:"version"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"version"})," field is a number, starting with ",(0,i.jsx)(n.code,{children:"0"}),".\nWhen the version is greater than 0, you have to provide the migrationStrategies to create a collection with this schema."]}),"\n",(0,i.jsx)(n.h2,{id:"primarykey",children:"primaryKey"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"primaryKey"})," field contains the fieldname of the property that will be used as primary key for the whole collection.\nThe value of the primary key of the document must be a ",(0,i.jsx)(n.code,{children:"string"}),", unique, final and is required."]}),"\n",(0,i.jsx)(n.h3,{id:"composite-primary-key",children:"composite primary key"}),"\n",(0,i.jsx)(n.p,{children:"You can define a composite primary key which gets composed from multiple properties of the document data."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const mySchema = {\n  keyCompression: true, // set this to true, to enable the keyCompression\n  version: 0,\n  title: 'human schema with composite primary',\n  primaryKey: {\n      // where should the composed string be stored\n      key: 'id',\n      // fields that will be used to create the composed key\n      fields: [\n          'firstName',\n          'lastName'\n      ],\n      // separator which is used to concat the fields values.\n      separator: '|'\n  },\n  type: 'object',\n  properties: {\n      id: {\n          type: 'string',\n          maxLength: 100 // <- the primary key must have set maxLength\n      },\n      firstName: {\n          type: 'string'\n      },\n      lastName: {\n          type: 'string'\n      }\n  },\n  required: [\n    'id', \n    'firstName',\n    'lastName'\n  ]\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"You can then find a document by using the relevant parts to create the composite primaryKey:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"\n// inserting with composite primary\nawait myRxCollection.insert({\n    // id, <- do not set the id, it will be filled by RxDB\n    firstName: 'foo',\n    lastName: 'bar'\n});\n\n// find by composite primary\nconst id = myRxCollection.schema.getPrimaryOfDocumentData({\n    firstName: 'foo',\n    lastName: 'bar'\n});\nconst myRxDocument = myRxCollection.findOne(id).exec();\n\n"})}),"\n",(0,i.jsx)(n.h2,{id:"indexes",children:"Indexes"}),"\n",(0,i.jsx)(n.p,{children:"RxDB supports secondary indexes which are defined at the schema-level of the collection."}),"\n",(0,i.jsxs)(n.p,{children:["Index is only allowed on field types ",(0,i.jsx)(n.code,{children:"string"}),", ",(0,i.jsx)(n.code,{children:"integer"})," and ",(0,i.jsx)(n.code,{children:"number"}),". Some RxStorages allow to use ",(0,i.jsx)(n.code,{children:"boolean"})," fields as index."]}),"\n",(0,i.jsxs)(n.p,{children:["Depending on the field type, you must have set some meta attributes like ",(0,i.jsx)(n.code,{children:"maxLength"})," or ",(0,i.jsx)(n.code,{children:"minimum"}),". This is required so that RxDB\nis able to know the maximum string representation length of a field, which is needed to craft custom indexes on several ",(0,i.jsx)(n.code,{children:"RxStorage"})," implementations."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"NOTICE:"})," RxDB will always append the ",(0,i.jsx)(n.code,{children:"primaryKey"})," to all indexes to ensure a deterministic sort order of query results. You do not have to add the ",(0,i.jsx)(n.code,{children:"primaryKey"})," to any index."]}),"\n",(0,i.jsx)(n.h3,{id:"index-example",children:"Index-example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const schemaWithIndexes = {\n  version: 0,\n  title: 'human schema with indexes',\n  keyCompression: true,\n  primaryKey: 'id',\n  type: 'object',\n  properties: {\n      id: {\n          type: 'string',\n          maxLength: 100 // <- the primary key must have set maxLength\n      },\n      firstName: {\n          type: 'string',\n          maxLength: 100 // <- string-fields that are used as an index, must have set maxLength.\n      },\n      lastName: {\n          type: 'string'\n      },\n      active: {\n          type: 'boolean'\n      },\n      familyName: {\n          type: 'string'\n      },\n      balance: {\n          type: 'number',\n\n          // number fields that are used in an index, must have set minimum, maximum and multipleOf\n          minimum: 0,\n          maximum: 100000,\n          multipleOf: 0.01\n      },\n      creditCards: {\n          type: 'array',\n          items: {\n              type: 'object',\n              properties: {\n                    cvc: {\n                        type: 'number'\n                    }\n              }\n          }       \n      }\n  },\n  required: [\n      'id',\n      'active' // <- boolean fields that are used in an index, must be required. \n  ],\n  indexes: [\n    'firstName', // <- this will create a simple index for the `firstName` field\n    ['active', 'firstName'], // <- this will create a compound-index for these two fields\n    'active'\n  ]\n};\n"})}),"\n",(0,i.jsx)(n.h2,{id:"attachments",children:"attachments"}),"\n",(0,i.jsxs)(n.p,{children:["To use attachments in the collection, you have to add the ",(0,i.jsx)(n.code,{children:"attachments"}),"-attribute to the schema. ",(0,i.jsx)(n.a,{href:"/rx-attachment.html",children:"See RxAttachment"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"default",children:"default"}),"\n",(0,i.jsx)(n.p,{children:"Default values can only be defined for first-level fields.\nWhenever you insert a document unset fields will be filled with default-values."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const schemaWithDefaultAge = {\n  version: 0,\n  primaryKey: 'id',\n  type: 'object',\n  properties: {\n      id: {\n          type: 'string',\n          maxLength: 100 // <- the primary key must have set maxLength\n      },\n      firstName: {\n          type: 'string'\n      },\n      lastName: {\n          type: 'string'\n      },\n      age: {\n          type: 'integer',\n          default: 20       // <- default will be used\n      }\n  },\n  required: ['id']\n};\n"})}),"\n",(0,i.jsx)(n.h2,{id:"final",children:"final"}),"\n",(0,i.jsxs)(n.p,{children:["By setting a field to ",(0,i.jsx)(n.code,{children:"final"}),", you make sure it cannot be modified later. Final fields are always required.\nFinal fields cannot be observed because they will not change."]}),"\n",(0,i.jsx)(n.p,{children:"Advantages:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"With final fields you can ensure that no-one accidentally modifies the data."}),"\n",(0,i.jsxs)(n.li,{children:["When you enable the ",(0,i.jsx)(n.code,{children:"eventReduce"})," algorithm, some performance-improvements are done."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const schemaWithFinalAge = {\n  version: 0,\n  primaryKey: 'id',\n  type: 'object',\n  properties: {\n      id: {\n          type: 'string',\n          maxLength: 100 // <- the primary key must have set maxLength\n      },\n      firstName: {\n          type: 'string'\n      },\n      lastName: {\n          type: 'string'\n      },\n      age: {\n          type: 'integer',\n          final: true\n      }\n  },\n  required: ['id']\n};\n"})}),"\n",(0,i.jsx)(n.h2,{id:"notice-not-everything-within-the-jsonschema-spec-is-allowed",children:"NOTICE: Not everything within the jsonschema-spec is allowed"}),"\n",(0,i.jsxs)(n.p,{children:["The schema is not only used to validate objects before they are written into the database, but also used to map getters to observe and populate single fieldnames, keycompression and other things. Therefore you can not use every schema which would be valid for the spec of ",(0,i.jsx)(n.a,{href:"http://json-schema.org/",children:"json-schema.org"}),".\nFor example, fieldnames must match the regex ",(0,i.jsx)(n.code,{children:"^[a-zA-Z][[a-zA-Z0-9_]*]?[a-zA-Z0-9]$"})," and ",(0,i.jsx)(n.code,{children:"additionalProperties"})," is always set to ",(0,i.jsx)(n.code,{children:"false"}),". But don't worry, RxDB will instantly throw an error when you pass an invalid schema into it."]})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var i=t(7294);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);