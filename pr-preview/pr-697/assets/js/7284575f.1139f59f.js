"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[9185],{13125:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=t(74848),i=t(28453),n=t(82879);const r={sidebar_position:8,slug:"/modeling/custom-roles",description:"Modeling custom and dynamically changing roles in your system"},a="Custom Roles",l={id:"content/modeling/custom-roles",title:"Custom Roles",description:"Modeling custom and dynamically changing roles in your system",source:"@site/docs/content/modeling/custom-roles.mdx",sourceDirName:"content/modeling",slug:"/modeling/custom-roles",permalink:"/pr-preview/pr-697/docs/modeling/custom-roles",draft:!1,unlisted:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/modeling/custom-roles.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,slug:"/modeling/custom-roles",description:"Modeling custom and dynamically changing roles in your system"},sidebar:"docs",previous:{title:"Multiple Restrictions",permalink:"/pr-preview/pr-697/docs/modeling/multiple-restrictions"},next:{title:"Conditions",permalink:"/pr-preview/pr-697/docs/modeling/conditions"}},d={},c=[{value:"Before you start",id:"before-you-start",level:2},{value:"Initial Model",id:"initial-model",level:3},{value:"Modeling Roles and Permissions",id:"modeling-roles-and-permissions",level:3},{value:"Modeling Object-to-Object Relationships",id:"modeling-object-to-object-relationships",level:3},{value:"Concepts &amp; Configuration Language",id:"concepts--configuration-language",level:3},{value:"Step By Step",id:"step-by-step",level:2},{value:"01. Update The Authorization Model To Add A Role Type",id:"01-update-the-authorization-model-to-add-a-role-type",level:3},{value:"02.Use Relationship Tuples To Tie The Users To The Roles",id:"02use-relationship-tuples-to-tie-the-users-to-the-roles",level:3},{value:"03. Use Relationship Tuples To Associate Permissions With The Roles",id:"03-use-relationship-tuples-to-associate-permissions-with-the-roles",level:3},{value:"04. Verify That The Authorization Model Works",id:"04-verify-that-the-authorization-model-works",level:3},{value:"Related Sections",id:"related-sections",level:2}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:r}=s;return r||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"custom-roles",children:"Custom Roles"}),"\n",(0,o.jsx)(n.ZE,{}),"\n",(0,o.jsxs)(s.p,{children:["In this guide you'll learn how to model custom roles in your system using ",(0,o.jsx)(n.bU,{format:n.Ed.ProductLink}),"."]}),"\n",(0,o.jsx)(s.p,{children:"For example, a Business-to-Business (B2B) application could allow customers to create their own custom roles on the application to grant their users."}),"\n",(0,o.jsxs)(n.u6,{title:"When to use",appearance:"filled",children:[(0,o.jsxs)(s.p,{children:["In many cases, roles would fit in well as relations on an object type, as seen in ",(0,o.jsx)(s.a,{href:"/pr-preview/pr-697/docs/modeling/roles-and-permissions",children:"Modeling Roles and Permissions"}),". In some cases, however, they may not be enough."]}),(0,o.jsx)(s.p,{children:"Custom roles are useful when:"}),(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Users of the application are able to create arbitrary sets of roles with different permissions that govern the users' access to objects."}),"\n",(0,o.jsx)(s.li,{children:"It is not known beforehand (at the time of Authorization Model creation) what the application roles are."}),"\n",(0,o.jsx)(s.li,{children:"The team responsible for building the authorization model is different from the teams responsible for defining roles and access to the application."}),"\n"]})]}),"\n",(0,o.jsx)(s.h2,{id:"before-you-start",children:"Before you start"}),"\n",(0,o.jsxs)(s.p,{children:["Before you start this guide, make sure you're familiar with some ",(0,o.jsx)(n.OK,{})," and know how to develop the things listed below."]}),"\n",(0,o.jsxs)(r,{children:[(0,o.jsxs)("summary",{children:[(0,o.jsx)(s.h3,{id:"initial-model",children:"Initial Model"}),(0,o.jsxs)(s.p,{children:["To start, let's say there is an application with a ",(0,o.jsx)(n.OK,{section:"what-is-a-type",linkName:"type"})," called ",(0,o.jsx)(s.code,{children:"asset-category"}),". Users can have view and/or edit access to assets in that category. Any user who can edit can also view."]})]}),(0,o.jsxs)(s.p,{children:["We'll start with the following authorization model showing a system with an ",(0,o.jsx)(s.code,{children:"asset-category"})," type. This type allows users to have view and edit access to it."]}),(0,o.jsx)(n.pB,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"asset-category",relations:{viewer:{union:{child:[{this:{}},{computedUserset:{relation:"editor"}}]}},editor:{this:{}}},metadata:{relations:{editor:{directly_related_user_types:[{type:"user"}]},viewer:{directly_related_user_types:[{type:"user"}]}}}}]}}),(0,o.jsx)("hr",{}),(0,o.jsx)(s.p,{children:"In addition, you'll need to know the following:"}),(0,o.jsx)(s.h3,{id:"modeling-roles-and-permissions",children:"Modeling Roles and Permissions"}),(0,o.jsxs)(s.p,{children:["You need to know how to add users to groups and grant groups access to resources. ",(0,o.jsx)(s.a,{href:"/pr-preview/pr-697/docs/modeling/user-groups",children:"Learn more \u2192"})]}),(0,o.jsx)(s.h3,{id:"modeling-object-to-object-relationships",children:"Modeling Object-to-Object Relationships"}),(0,o.jsxs)(s.p,{children:["You need to know how to create relationships between objects and how that might affect a user's relationships to those objects. ",(0,o.jsx)(s.a,{href:"/pr-preview/pr-697/docs/modeling/building-blocks/object-to-object-relationships",children:"Learn more \u2192"})]}),(0,o.jsx)(s.h3,{id:"concepts--configuration-language",children:"Concepts & Configuration Language"}),(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsx)(n.OK,{}),"\n"]}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"/pr-preview/pr-697/docs/configuration-language",children:"Configuration Language"})}),"\n"]})]}),"\n",(0,o.jsx)(n.QF,{store:"custom-roles"}),"\n",(0,o.jsx)(s.h2,{id:"step-by-step",children:"Step By Step"}),"\n",(0,o.jsx)(s.p,{children:"Starting with the authorization model mentioned above, we want to enable users to create their own custom roles, and tie permissions to those roles to our two users and to the permissions on the logo asset category."}),"\n",(0,o.jsxs)(s.p,{children:["For this guide, we'll model a scenario where a certain organization using our app has created an ",(0,o.jsx)(s.code,{children:"asset-category"}),' called "logos", and another called "text content".']}),"\n",(0,o.jsx)(s.p,{children:"The company administrator would like to create:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["a ",(0,o.jsx)(s.strong,{children:"media-manager"})," role that allows users to ",(0,o.jsx)(s.strong,{children:"edit"})," assets in the ",(0,o.jsx)(s.strong,{children:"logos asset category"})]}),"\n",(0,o.jsxs)(s.li,{children:["a ",(0,o.jsx)(s.strong,{children:"media-viewer"})," role that allows users to ",(0,o.jsx)(s.strong,{children:"view"})," all assets in the ",(0,o.jsx)(s.strong,{children:"logos asset category"})]}),"\n",(0,o.jsxs)(s.li,{children:["a ",(0,o.jsx)(s.strong,{children:"blog-editor"})," role that allows users to ",(0,o.jsx)(s.strong,{children:"edit"})," all assets in the ",(0,o.jsx)(s.strong,{children:"text content asset category"})]}),"\n",(0,o.jsxs)(s.li,{children:["a ",(0,o.jsx)(s.strong,{children:"blog-viewer"})," role that allows users to ",(0,o.jsx)(s.strong,{children:"view"})," all assets in the ",(0,o.jsx)(s.strong,{children:"text content asset category"})]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"Imagine these are what the permissions the roles in one organization using our service are like:"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Image showing custom roles and permissions",src:t(55157).A+"",width:"1213",height:"253"})}),"\n",(0,o.jsxs)(s.p,{children:["Finally, the administrator wants to assign ",(0,o.jsx)(s.strong,{children:"Anne"})," the ",(0,o.jsx)(s.strong,{children:"media-manager"})," role and ",(0,o.jsx)(s.strong,{children:"Beth"})," the ",(0,o.jsx)(s.strong,{children:"media-viewer"})," role."]}),"\n",(0,o.jsxs)(s.p,{children:["At the end, we'll verify our model by ensuring the following access ",(0,o.jsx)(n.OK,{section:"what-is-a-check-request",linkName:"check"})," requests return the expected result."]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Image showing expected results",src:t(12730).A+"",width:"1213",height:"448"})}),"\n",(0,o.jsx)(s.p,{children:"In order to do this, we need to:"}),"\n",(0,o.jsxs)("ol",{className:"list-numbered-leading-zeros",children:[(0,o.jsx)("li",{children:"Update the Authorization Model to add a Role Type"}),(0,o.jsx)("li",{children:"Use Relationship Tuples to tie the Users to the Roles"}),(0,o.jsx)("li",{children:"Use Relationship Tuples to associate Permissions with the Roles"}),(0,o.jsx)("li",{children:"Verify that the Authorization Model works"})]}),"\n",(0,o.jsx)(s.h3,{id:"01-update-the-authorization-model-to-add-a-role-type",children:"01. Update The Authorization Model To Add A Role Type"}),"\n",(0,o.jsxs)(s.p,{children:["Because our roles are going to be dynamic and might change frequently, we represent them in a new type instead of as relations on that same type. We'll create new type called ",(0,o.jsx)(s.code,{children:"role"}),", where users can be related as assignee to it."]}),"\n",(0,o.jsx)(s.p,{children:"The authorization model becomes this:"}),"\n",(0,o.jsx)(n.pB,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"asset-category",relations:{viewer:{union:{child:[{this:{}},{computedUserset:{relation:"editor"}}]}},editor:{this:{}}},metadata:{relations:{viewer:{directly_related_user_types:[{type:"user"},{type:"role",relation:"assignee"}]},editor:{directly_related_user_types:[{type:"user"},{type:"role",relation:"assignee"}]}}}},{type:"role",relations:{assignee:{this:{}}},metadata:{relations:{assignee:{directly_related_user_types:[{type:"user"}]}}}}]}}),"\n",(0,o.jsxs)(s.p,{children:["With this change we can add relationship tuples indicating that a certain user is ",(0,o.jsx)(s.code,{children:"assigned"})," a certain ",(0,o.jsx)(s.code,{children:"role"}),"."]}),"\n",(0,o.jsx)(s.h3,{id:"02use-relationship-tuples-to-tie-the-users-to-the-roles",children:"02.Use Relationship Tuples To Tie The Users To The Roles"}),"\n",(0,o.jsxs)(s.p,{children:["Once we've added the ",(0,o.jsx)(s.code,{children:"role"}),' type, we can assign roles to Anne and Beth. Anne is assigned the "media-manager" role and Beth is assigned the "media-viewer" role. We can do that by adding relationship tuples as follows:']}),"\n",(0,o.jsx)(n.dp,{relationshipTuples:[{_description:"Anne is assigned the media-manager role",user:"user:anne",relation:"assignee",object:"role:media-manager"},{_description:"Beth is assigned the media-viewer role",user:"user:beth",relation:"assignee",object:"role:media-viewer"}]}),"\n",(0,o.jsx)(s.p,{children:"We can verify they are members of said roles by issuing the following check requests:"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Image showing expected membership checks",src:t(23971).A+"",width:"1213",height:"253"})}),"\n",(0,o.jsx)(n.ou,{user:"user:anne",relation:"assignee",object:"role:media-manager",allowed:!0}),"\n",(0,o.jsx)(s.h3,{id:"03-use-relationship-tuples-to-associate-permissions-with-the-roles",children:"03. Use Relationship Tuples To Associate Permissions With The Roles"}),"\n",(0,o.jsx)(s.p,{children:"With our users and roles set up, we still need to tie members of a certain role to it's corresponding permission(s)."}),"\n",(0,o.jsx)(n.dp,{relationshipTuples:[{_description:"Users assigned the media-manager role can edit in the Logos assets category",user:"role:media-manager#assignee",relation:"editor",object:"asset-category:logos"},{_description:"Users assigned the media-viewer role can view from the Logos assets category",user:"role:media-viewer#assignee",relation:"viewer",object:"asset-category:logos"}]}),"\n",(0,o.jsx)(s.h3,{id:"04-verify-that-the-authorization-model-works",children:"04. Verify That The Authorization Model Works"}),"\n",(0,o.jsx)(s.p,{children:"To ensure our model works, it needs to match our expectations:"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Image showing expected results",src:t(12730).A+"",width:"1213",height:"448"})}),"\n",(0,o.jsx)(n.ou,{user:"user:anne",relation:"editor",object:"asset-category:logos",allowed:!0}),"\n",(0,o.jsx)(s.p,{children:"The checks come back as we expect, so our model is working correctly."}),"\n",(0,o.jsx)(s.h2,{id:"related-sections",children:"Related Sections"}),"\n",(0,o.jsx)(n.XQ,{description:"Check the following sections for more on how to model with {ProductName}.",relatedLinks:[{title:"Modeling Roles and Permissions",description:"Learn how to remove the direct relationship to indicate nonassignable permissions.",link:"./roles-and-permissions",id:"./roles-and-permissions.mdx"},{title:"Modeling Concepts: Object to Object Relationships",description:"Learn about how to model object to object relationships in {ProductName}.",link:"./building-blocks/object-to-object-relationships",id:"../building-blocks/object-to-object-relationships"}]})]})}function p(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},12730:(e,s,t)=>{t.d(s,{A:()=>o});const o=t.p+"assets/images/custom-roles-expectations-f015ffb4203247a03815859fb0844f95.svg"},23971:(e,s,t)=>{t.d(s,{A:()=>o});const o=t.p+"assets/images/custom-roles-membership-checks-057e971c8b2def87ea3c405352a0f100.svg"},55157:(e,s,t)=>{t.d(s,{A:()=>o});const o=t.p+"assets/images/custom-roles-roles-and-permissions-ca8254c87a37e52fea450bdeb634b39c.svg"}}]);