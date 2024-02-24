"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[8242],{46581:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>g});var a=t(85893),r=t(11151),o=t(5270),i=t(74866),s=t(85162);const l={title:"Create a Store",description:"Creating a store",slug:"/getting-started/create-store"},d="Create a Store",c={id:"content/getting-started/create-store",title:"Create a Store",description:"Creating a store",source:"@site/docs/content/getting-started/create-store.mdx",sourceDirName:"content/getting-started",slug:"/getting-started/create-store",permalink:"/docs/getting-started/create-store",draft:!1,unlisted:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/getting-started/create-store.mdx",tags:[],version:"current",frontMatter:{title:"Create a Store",description:"Creating a store",slug:"/getting-started/create-store"},sidebar:"docs",previous:{title:"Install SDK Client",permalink:"/docs/getting-started/install-sdk"},next:{title:"Setup SDK Client for Store",permalink:"/docs/getting-started/setup-sdk-client"}},p={},g=[{value:"Step By Step",id:"step-by-step",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"create-a-store",children:"Create a Store"}),"\n",(0,a.jsx)(o.AH,{}),"\n",(0,a.jsxs)(n.p,{children:["A ",(0,a.jsx)(n.a,{href:"/docs/concepts#what-is-a-store",children:"store"})," is a OpenFGA entity that contains your authorization data. You will need to create a store in OpenFGA before adding an ",(0,a.jsx)(n.a,{href:"/docs/concepts#what-is-an-authorization-model",children:"authorization model"})," and ",(0,a.jsx)(n.a,{href:"/docs/concepts#what-is-a-relationship-tuple",children:"relationship tuples"})," to it."]}),"\n",(0,a.jsx)(n.p,{children:"This article explains how to setup an OpenFGA store."}),"\n",(0,a.jsx)(n.h2,{id:"step-by-step",children:"Step By Step"}),"\n",(0,a.jsxs)(i.Z,{groupId:"languages",children:[(0,a.jsx)(s.Z,{value:o.eU.JS_SDK,label:o.UB.get(o.eU.JS_SDK),children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const { OpenFgaClient } = require('@openfga/sdk'); // OR import { OpenFgaClient } from '@openfga/sdk';\n\nconst openFga = new OpenFgaClient({\n    apiScheme: process.env.FGA_API_SCHEME, // optional, defaults to \"https\"\n    apiHost: process.env.FGA_API_HOST // required, define without the scheme (e.g. api.openfga.example instead of https://api.openfga.example)\n});\n\nconst { id: storeId } = await openFga.createStore({\n    name: \"FGA Demo Store\",\n});\n"})})}),(0,a.jsx)(s.Z,{value:o.eU.GO_SDK,label:o.UB.get(o.eU.GO_SDK),children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'import (\n    "context"\n    "os"\n\n    . "github.com/openfga/go-sdk/client"\n)\n\nfunc main() {\n    fgaClient, err := NewSdkClient(&ClientConfiguration{\n        ApiScheme:      os.Getenv("FGA_API_SCHEME"), // optional. Can be "http" or "https". Defaults to "https"\n        ApiHost:        os.Getenv("FGA_API_HOST"), // required, define without the scheme (e.g. api.fga.example instead of https://api.fga.example)\n        StoreId:        os.Getenv("FGA_STORE_ID"), // optional, not needed for \\`CreateStore\\` and \\`ListStores\\`, required before calling for all other methods\n        AuthorizationModelId: os.Getenv("FGA_MODEL_ID"),  // optional, can be overridden per request\n    })\n\n    if err != nil {\n        // .. Handle error\n    }\n\n    resp, err := fgaClient.CreateStore(context.Background()).Body(ClientCreateStoreRequest{Name: "FGA Demo"}).Execute()\n    if err != nil {\n        // .. Handle error\n    }\n}\n'})})}),(0,a.jsx)(s.Z,{value:o.eU.DOTNET_SDK,label:o.UB.get(o.eU.DOTNET_SDK),children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dotnet",children:'using OpenFga.Sdk.Client;\nusing OpenFga.Sdk.Client.Model;\nusing OpenFga.Sdk.Model;\nusing Environment = System.Environment;\n\nnamespace ExampleApp;\n\nclass MyProgram {\n    static async Task Main() {\n         var configuration = new ClientConfiguration() {\n            ApiUrl = Environment.GetEnvironmentVariable("FGA_API_URL") ?? "http://localhost:8080", // required, e.g. https://api.fga.example\n            StoreId = Environment.GetEnvironmentVariable("FGA_STORE_ID"), // optional, not needed for \\`CreateStore\\` and \\`ListStores\\`, required before calling for all other methods\n            AuthorizationModelId = Environment.GetEnvironmentVariable("FGA_MODEL_ID"), // optional, can be overridden per request\n        };\n        var fgaClient = new OpenFgaClient(configuration);\n\n        var store = await fgaClient.CreateStore(new ClientCreateStoreRequest(){Name = "FGA Demo Store"});\n    }\n}\n'})})}),(0,a.jsx)(s.Z,{value:o.eU.PYTHON_SDK,label:o.UB.get(o.eU.PYTHON_SDK),children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"import asyncio\nimport os\nimport openfga_sdk\nfrom openfga_sdk.client import OpenFgaClient\nfrom openfga_sdk.models.create_store_request import CreateStoreRequest\n\nasync def main():\n    configuration = openfga_sdk.ClientConfiguration(\n        api_scheme = os.environ.get('FGA_API_SCHEME'),\n        api_host = os.environ.get('FGA_API_HOST'),\n    )\n\n    async with OpenFgaClient(configuration) as fga_client:\n        body = CreateStoreRequest(\n            name = \"FGA Demo Store\",\n        )\n        response = await fga_client.create_store(body)\n\nasyncio.run(main())\n"})})}),(0,a.jsx)(s.Z,{value:o.eU.JAVA_SDK,label:o.UB.get(o.eU.JAVA_SDK),children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'import dev.openfga.sdk.api.client.OpenFgaClient;\nimport dev.openfga.sdk.api.configuration.ClientConfiguration;\nimport dev.openfga.sdk.api.model.CreateStoreRequest;\n\npublic class Example {\n    public static void main(String[] args) {\n        var config = new ClientConfiguration()\n                .apiUrl(System.getenv("FGA_API_URL")) // If not specified, will default to "https://localhost:8080"\n                .storeId(System.getenv("FGA_STORE_ID")) // Not required when calling createStore() or listStores()\n                .authorizationModelId(System.getenv("FGA_AUTHORIZATION_MODEL_ID")); // Optional, can be overridden per request\n\n        var fgaClient = new OpenFgaClient(config);\n        var body = new CreateStoreRequest().name("FGA Demo Store");\n        var store = fgaClient.createStore(body).get();\n    }\n}\n'})})}),(0,a.jsx)(s.Z,{value:o.eU.CLI,label:o.UB.get(o.eU.CLI),children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'fga store create --name "FGA Demo Store"\n\n# To create the store and directly put the Store ID into an env variable:\n# export FGA_STORE_ID=$(fga store create --name "FGA Demo Store" | jq -r .id)\n'})})}),(0,a.jsx)(s.Z,{value:o.eU.CURL,label:o.UB.get(o.eU.CURL),children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'curl -X POST $FGA_API_HOST/stores \\\n  -H "content-type: application/json" \\\n  -d \'{"name": "FGA Demo Store"}\'\n'})})})]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}}}]);