"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[9525],{56544:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=n(74848),i=n(28453),o=n(82879);const r={sidebar_position:6,slug:"/modeling/user-groups",description:"Adding users to groups and granting group members access to an object"},a="User Groups",c={id:"content/modeling/user-groups",title:"User Groups",description:"Adding users to groups and granting group members access to an object",source:"@site/docs/content/modeling/user-groups.mdx",sourceDirName:"content/modeling",slug:"/modeling/user-groups",permalink:"/pr-preview/pr-697/docs/modeling/user-groups",draft:!1,unlisted:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/modeling/user-groups.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,slug:"/modeling/user-groups",description:"Adding users to groups and granting group members access to an object"},sidebar:"docs",previous:{title:"Direct Access",permalink:"/pr-preview/pr-697/docs/modeling/direct-access"},next:{title:"Roles and Permissions",permalink:"/pr-preview/pr-697/docs/modeling/roles-and-permissions"}},d={},l=[{value:"Before you start",id:"before-you-start",level:2},{value:"Direct Access",id:"direct-access",level:3},{value:"<ProductName></ProductName> Concepts",id:"-concepts",level:3},{value:"Step By Step",id:"step-by-step",level:2},{value:"01. Introduce The Concept Of A Team To The Authorization Model",id:"01-introduce-the-concept-of-a-team-to-the-authorization-model",level:3},{value:"02. Add Users As Members To The Team",id:"02-add-users-as-members-to-the-team",level:3},{value:"03. Assign The Team Members A Relation To An Object",id:"03-assign-the-team-members-a-relation-to-an-object",level:3},{value:"04. Checking An Individual Member&#39;s Access To An Object",id:"04-checking-an-individual-members-access-to-an-object",level:3},{value:"Related Sections",id:"related-sections",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"user-groups",children:"User Groups"}),"\n",(0,t.jsx)(o.ZE,{}),"\n",(0,t.jsxs)(s.p,{children:["In this guide you will learn how to add users to groups and grant groups access to an ",(0,t.jsx)(o.OK,{section:"what-is-an-object",linkName:"object"})," using ",(0,t.jsx)(o.bU,{format:o.Ed.ProductLink}),"."]}),"\n",(0,t.jsxs)(o.u6,{title:"When to use",appearance:"filled",children:[(0,t.jsx)(s.p,{children:"Adding a relationship tuple specifying that a group has a relation to an object is helpful in cases where you want to encompass a set of users with the same relation to an object. For example:"}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Grant a group of ",(0,t.jsx)(s.code,{children:"engineers"})," ",(0,t.jsx)(s.code,{children:"viewer"})," access to ",(0,t.jsx)(s.code,{children:"roadmap.doc"})]}),"\n",(0,t.jsxs)(s.li,{children:["Create a ",(0,t.jsx)(s.code,{children:"block_list"})," of ",(0,t.jsx)(s.code,{children:"members"})," who can't access a ",(0,t.jsx)(s.code,{children:"document"})]}),"\n",(0,t.jsxs)(s.li,{children:["Sharing a ",(0,t.jsx)(s.code,{children:"document"})," with a ",(0,t.jsx)(s.code,{children:"team"})]}),"\n",(0,t.jsxs)(s.li,{children:["Granting ",(0,t.jsx)(s.code,{children:"viewer"})," access to a ",(0,t.jsx)(s.code,{children:"photo"})," to ",(0,t.jsx)(s.code,{children:"followers"})," only"]}),"\n",(0,t.jsxs)(s.li,{children:["Making a ",(0,t.jsx)(s.code,{children:"file"})," viewable for all ",(0,t.jsx)(s.code,{children:"users"})," within an ",(0,t.jsx)(s.code,{children:"organization"})]}),"\n",(0,t.jsxs)(s.li,{children:["Restricting access from or to ",(0,t.jsx)(s.code,{children:"users"})," in a certain ",(0,t.jsx)(s.code,{children:"locale"})]}),"\n"]})]}),"\n",(0,t.jsx)(s.h2,{id:"before-you-start",children:"Before you start"}),"\n",(0,t.jsxs)(s.p,{children:["In order to understand this guide correctly you must be familiar with some ",(0,t.jsx)(o.OK,{})," and know how to develop the things that we will list below."]}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:(0,t.jsxs)(s.p,{children:["Assume that you have the following ",(0,t.jsx)(o.OK,{section:"what-is-an-authorization-model",linkName:"authorization model"}),".",(0,t.jsx)("br",{}),"\nYou have an ",(0,t.jsx)(s.em,{children:(0,t.jsx)(o.OK,{section:"what-is-an-object",linkName:"object"})})," called ",(0,t.jsx)(s.code,{children:"document"})," that ",(0,t.jsx)(s.em,{children:"users"})," can be related to as an ",(0,t.jsx)(s.code,{children:"editor"}),"."]})}),(0,t.jsx)(o.pB,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"document",relations:{editor:{this:{}}},metadata:{relations:{editor:{directly_related_user_types:[{type:"user"}]}}}}]}}),(0,t.jsx)("hr",{}),(0,t.jsx)(s.p,{children:"In addition, you will need to know the following:"}),(0,t.jsx)(s.h3,{id:"direct-access",children:"Direct Access"}),(0,t.jsxs)(s.p,{children:["You need to know how to create an authorization model and create a relationship tuple to grant a user access to an object. ",(0,t.jsx)(s.a,{href:"/pr-preview/pr-697/docs/modeling/direct-access",children:"Learn more \u2192"})]}),(0,t.jsxs)(s.h3,{id:"-concepts",children:[(0,t.jsx)(o.bU,{format:o.Ed.ShortForm})," Concepts"]}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["A ",(0,t.jsx)(o.OK,{section:"what-is-a-type",linkName:"Type"}),": a class of objects that have similar characteristics"]}),"\n",(0,t.jsxs)(s.li,{children:["A ",(0,t.jsx)(o.OK,{section:"what-is-a-user",linkName:"User"}),": an entity in the system that can be related to an object"]}),"\n",(0,t.jsxs)(s.li,{children:["A ",(0,t.jsx)(o.OK,{section:"what-is-a-relation",linkName:"Relation"}),": is a string defined in the type definition of an authorization model that defines the possibility of a relationship between an object of the same type as the type definition and a user in the system"]}),"\n",(0,t.jsxs)(s.li,{children:["An ",(0,t.jsx)(o.OK,{section:"what-is-an-object",linkName:"Object"}),": represents an entity in the system. Users' relationships to it can be define through relationship tuples and the authorization model"]}),"\n",(0,t.jsxs)(s.li,{children:["A ",(0,t.jsx)(o.OK,{section:"what-is-a-relationship-tuple",linkName:"Relationship Tuple"}),": a grouping consisting of a user, a relation and an object stored in ",(0,t.jsx)(o.bU,{format:o.Ed.ShortForm})]}),"\n"]})]}),"\n",(0,t.jsx)(o.QF,{}),"\n",(0,t.jsx)(s.h2,{id:"step-by-step",children:"Step By Step"}),"\n",(0,t.jsxs)(s.p,{children:["As we develop our application, we might encounter use cases where a group of users have a certain role or permission on an object. For example, ",(0,t.jsx)(s.code,{children:"members"})," of a certain ",(0,t.jsx)(s.code,{children:"team"})," might have an ",(0,t.jsx)(s.code,{children:"editor"})," relation to a certain ",(0,t.jsx)(s.code,{children:"document"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["In order to represent this in ",(0,t.jsx)(o.bU,{format:o.Ed.ShortForm}),", we need:"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Introduce the concept of a ",(0,t.jsx)(s.code,{children:"team"})," to the authorization model"]}),"\n",(0,t.jsxs)(s.li,{children:["Add ",(0,t.jsx)(s.em,{children:"users"})," as ",(0,t.jsx)(s.code,{children:"members"})," to the ",(0,t.jsx)(s.code,{children:"team"})]}),"\n",(0,t.jsxs)(s.li,{children:["Assign the ",(0,t.jsx)(s.code,{children:"team"})," members a relation to an ",(0,t.jsx)(s.em,{children:"object"})]}),"\n",(0,t.jsxs)(s.li,{children:["Checking an individual member's access to the ",(0,t.jsx)(s.em,{children:"object"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"01-introduce-the-concept-of-a-team-to-the-authorization-model",children:"01. Introduce The Concept Of A Team To The Authorization Model"}),"\n",(0,t.jsxs)(s.p,{children:["We need to define the ",(0,t.jsx)(s.em,{children:(0,t.jsx)(o.OK,{section:"what-is-an-object",linkName:"object"})})," ",(0,t.jsx)(s.code,{children:"team"})," in our authorization model. In our use case, a ",(0,t.jsx)(s.code,{children:"team"})," can have ",(0,t.jsx)(s.code,{children:"member"}),"s, so we make the following changes to our authorization model:"]}),"\n",(0,t.jsx)(o.pB,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"document",relations:{editor:{this:{}}},metadata:{relations:{editor:{directly_related_user_types:[{type:"team",relation:"member"}]}}}},{type:"team",relations:{member:{this:{}}},metadata:{relations:{member:{directly_related_user_types:[{type:"user"}]}}}}]}}),"\n",(0,t.jsx)(s.h3,{id:"02-add-users-as-members-to-the-team",children:"02. Add Users As Members To The Team"}),"\n",(0,t.jsxs)(s.p,{children:["We can now assign ",(0,t.jsx)(s.em,{children:(0,t.jsx)(o.OK,{section:"what-is-a-user",linkName:"users"})})," as ",(0,t.jsx)(s.code,{children:"member"}),"s of ",(0,t.jsx)(s.code,{children:"team"}),"s. Let's create a new ",(0,t.jsx)(s.em,{children:(0,t.jsx)(o.OK,{section:"what-is-a-relationship-tuple",linkName:"relationship tuple"})})," that states ",(0,t.jsxs)(s.strong,{children:["alice is a member of team",":writers"]}),"."]}),"\n",(0,t.jsx)(o.dp,{relationshipTuples:[{user:"user:alice",relation:"member",object:"team:writers"}]}),"\n",(0,t.jsx)(s.h3,{id:"03-assign-the-team-members-a-relation-to-an-object",children:"03. Assign The Team Members A Relation To An Object"}),"\n",(0,t.jsxs)(s.p,{children:["To represent groups we use the ",(0,t.jsx)(s.code,{children:"type:object_id#relation"})," format, which represents the set of users related to the ",(0,t.jsx)(s.code,{children:"type:object_id"})," as a certain relation. For example, ",(0,t.jsx)(s.code,{children:"team:writers#members"})," is used to represent the set of users related to the ",(0,t.jsxs)(s.strong,{children:["team",":writers"]})," ",(0,t.jsx)(s.em,{children:"object"})," as ",(0,t.jsx)(s.code,{children:"member"}),"s."]}),"\n",(0,t.jsxs)(s.p,{children:["In order to assign ",(0,t.jsx)(s.code,{children:"member"}),"s of a ",(0,t.jsx)(s.code,{children:"team"})," a relation to a ",(0,t.jsx)(s.code,{children:"document"}),", we can create the following ",(0,t.jsx)(s.em,{children:"relationship tuple"})," that states that ",(0,t.jsxs)(s.strong,{children:["members of team",":writers"," are editors of document",":meeting_notes",".doc"]}),"."]}),"\n",(0,t.jsx)(o.dp,{relationshipTuples:[{_description:"Set of users related to 'team:writers' as 'member'",user:"team:writers#member",relation:"editor",object:"document:meeting_notes.doc"}]}),"\n",(0,t.jsx)(s.h3,{id:"04-checking-an-individual-members-access-to-an-object",children:"04. Checking An Individual Member's Access To An Object"}),"\n",(0,t.jsx)(s.p,{children:"Now that we have:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["a relationship tuple indicating that ",(0,t.jsx)(s.strong,{children:"alice"})," is an ",(0,t.jsx)(s.code,{children:"member"})," of ",(0,t.jsxs)(s.strong,{children:["team",":writers"]})]}),"\n",(0,t.jsxs)(s.li,{children:["a relationship tuple indicating that ",(0,t.jsxs)(s.strong,{children:["members of team",":writers"," are editors of document",":meeting_notes",".doc"]})]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["This means that if we *",(0,t.jsx)(o.OK,{section:"what-is-a-check-request",linkName:"check"}),(0,t.jsxs)(s.strong,{children:["*is alice an editor of document",":meeting_notes",".doc"]}),"? We would get the following:"]}),"\n",(0,t.jsx)(o.ou,{user:"user:alice",relation:"editor",object:"document:meeting_notes.doc",allowed:!0}),"\n",(0,t.jsx)(s.p,{children:"The chain of resolution becomes:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"alice"})," is ",(0,t.jsx)(s.code,{children:"member"})," of ",(0,t.jsxs)(s.strong,{children:["team",":writers"]})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"member"}),"s of ",(0,t.jsxs)(s.strong,{children:["team",":writers"]})," are ",(0,t.jsx)(s.code,{children:"editor"}),"s of ",(0,t.jsxs)(s.strong,{children:["document",":meeting_notes"]})]}),"\n",(0,t.jsxs)(s.li,{children:["therefore, ",(0,t.jsx)(s.strong,{children:"alice"})," is ",(0,t.jsx)(s.code,{children:"editor"})," of ",(0,t.jsxs)(s.strong,{children:["document",":meeting_notes"]})]}),"\n"]}),"\n",(0,t.jsx)(s.admonition,{type:"caution",children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note:"})," When creating relationship tuples for ",(0,t.jsx)(o.bU,{format:o.Ed.ShortForm})," make sure to use unique ids for each object and user within your application domain. We're using first names and simple ids to just illustrate an easy-to-follow example."]})}),"\n",(0,t.jsx)(s.h2,{id:"related-sections",children:"Related Sections"}),"\n",(0,t.jsx)(o.XQ,{description:"Check the following sections for more on how user groups can be used.",relatedLinks:[{title:"Managing Group Membership",description:"Learn how to add and remove users from groups",link:"../interacting/managing-group-membership",id:"../interacting/managing-group-membership.mdx"},{title:"Modeling Google Drive",description:"See how User Groups can be used to share documents within a domain in the Google Drive use-case.",link:"./advanced/gdrive#02-organization-permissions",id:"./advanced/gdrive.mdx#02-organization-permissions"},{title:"Modeling GitHub",description:"Granting teams permissions to a repo in the GitHub use-case.",link:"./advanced/github#02-permissions-for-teams-in-an-org",id:"./advanced/github.mdx#02-permissions-for-teams-in-an-org"}]})]})}function m(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}}}]);