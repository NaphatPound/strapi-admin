"use strict";(self.webpackChunkstrapi_backend=self.webpackChunkstrapi_backend||[]).push([[2544],{92100:(ae,L,t)=>{t.r(L),t.d(L,{default:()=>k});var e=t(67294),n=t(68547),M=t(49656),B=t(87751),u=t(5493),b=t(19408),x=t(78862),j=t(62031),y=t(9008),G=t(80831),N=t(68717),Z=t.n(N),z=t(27361),T=t.n(z),C=t(97132),O=t(21568),S=t(34626),$=t(67826),A=t(49425),H=t(59626),V=t(55967),W=t(45697),g=t.n(W);const R=({disabled:r,role:a,values:s,errors:i,onChange:d,onBlur:c})=>{const{formatMessage:o}=(0,C.useIntl)();return e.createElement(u.Box,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(y.Stack,{spacing:4},e.createElement($.Flex,{justifyContent:"space-between"},e.createElement(u.Box,null,e.createElement(u.Box,null,e.createElement(A.Typography,{fontWeight:"bold"},a?a.name:o({id:"global.details",defaultMessage:"Details"}))),e.createElement(u.Box,null,e.createElement(A.Typography,{textColor:"neutral500",variant:"pi"},a?a.description:o({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})))),e.createElement(b.Button,{disabled:!0,variant:"secondary"},o({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:a.usersCount}))),e.createElement(S.Grid,{gap:4},e.createElement(S.GridItem,{col:6},e.createElement(V.TextInput,{disabled:r,name:"name",error:i.name&&o({id:i.name}),label:o({id:"global.name",defaultMessage:"Name"}),onChange:d,onBlur:c,value:s.name||""})),e.createElement(S.GridItem,{col:6},e.createElement(H.Textarea,{disabled:r,label:o({id:"global.description",defaultMessage:"Description"}),name:"description",error:i.name&&o({id:i.name}),onChange:d,onBlur:c},s.description||"")))))};R.defaultProps={disabled:!1,role:null,values:{name:"",description:""}},R.propTypes={disabled:g().bool,errors:g().object.isRequired,onBlur:g().func.isRequired,onChange:g().func.isRequired,role:g().object,values:g().object};const J=R;var I=t(78143),F=t(53209);const K=F.Ry().shape({name:F.Z_().required(n.translatedErrors.required)});var Q=t(25108),X=(r,a,s)=>new Promise((i,d)=>{var c=l=>{try{v(s.next(l))}catch(E){d(E)}},o=l=>{try{v(s.throw(l))}catch(E){d(E)}},v=l=>l.done?i(l.value):Promise.resolve(l.value).then(c,o);v((s=s.apply(r,a)).next())});const Y=()=>{const r=(0,n.useNotification)(),{formatMessage:a}=(0,C.useIntl)(),{params:{id:s}}=(0,M.useRouteMatch)("/settings/roles/:id"),[i,d]=(0,e.useState)(!1),c=(0,e.useRef)(),{lockApp:o,unlockApp:v}=(0,n.useOverlayBlocker)(),{trackUsage:l}=(0,n.useTracking)(),{isLoading:E,data:w}=(0,I.U_)(s),{role:p,permissions:q,isLoading:U,onSubmitSucceeded:_}=(0,I.Dq)(s),ee=f=>X(void 0,null,function*(){try{o(),d(!0);const{permissionsToSend:m,didUpdateConditions:h}=c.current.getPermissions();yield(0,n.request)(`/admin/roles/${s}`,{method:"PUT",body:f}),p.code!=="strapi-super-admin"&&(yield(0,n.request)(`/admin/roles/${s}/permissions`,{method:"PUT",body:{permissions:m}}),h&&l("didUpdateConditions")),c.current.setFormAfterSubmit(),_({name:f.name,description:f.description}),r({type:"success",message:{id:"notification.success.saved"}})}catch(m){Q.error(m.response);const h=T()(m,"response.payload.message","An error occured"),P=T()(m,"response.payload.data.permissions[0]",h);r({type:"warning",message:P})}finally{d(!1),v()}}),D=p.code==="strapi-super-admin";return e.createElement(j.Main,null,e.createElement(n.SettingsPageTitle,{name:"Roles"}),e.createElement(G.Formik,{enableReinitialize:!0,initialValues:{name:p.name,description:p.description},onSubmit:ee,validationSchema:K,validateOnChange:!1},({handleSubmit:f,values:m,errors:h,handleChange:P,handleBlur:te})=>e.createElement("form",{onSubmit:f},e.createElement(x.HeaderLayout,{primaryAction:e.createElement(y.Stack,{horizontal:!0,spacing:2},e.createElement(b.Button,{disabled:p.code==="strapi-super-admin",onClick:f,loading:i,size:"L"},a({id:"global.save",defaultMessage:"Save"}))),title:a({id:"Settings.roles.edit.title",defaultMessage:"Edit a role"}),subtitle:a({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.createElement(n.Link,{startIcon:e.createElement(Z(),null),to:"/settings/roles"},a({id:"global.back",defaultMessage:"Back"}))}),e.createElement(x.ContentLayout,null,e.createElement(y.Stack,{spacing:6},e.createElement(J,{isLoading:U,disabled:D,errors:h,values:m,onChange:P,onBlur:te,role:p}),!E&&!U?e.createElement(u.Box,{shadow:"filterShadow",hasRadius:!0},e.createElement(O.Z,{isFormDisabled:D,permissions:q,ref:c,layout:w})):e.createElement(u.Box,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(n.LoadingIndicatorPage,null)))))))},k=()=>{const r=(0,e.useMemo)(()=>({read:B.Z.settings.roles.read,update:B.Z.settings.roles.update}),[]),{isLoading:a,allowedActions:{canRead:s,canUpdate:i}}=(0,n.useRBAC)(r);return a?e.createElement(n.LoadingIndicatorPage,null):!s&&!i?e.createElement(M.Redirect,{to:"/"}):e.createElement(Y,null)}}}]);
