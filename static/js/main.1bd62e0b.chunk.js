(this.webpackJsonpcubeshop=this.webpackJsonpcubeshop||[]).push([[0],{11:function(e,t,a){e.exports={container:"Summary_container__2wMoz",header:"Summary_header__3HtAp","summary-items-list":"Summary_summary-items-list__2fh7E","summary-item":"Summary_summary-item__1Fd2b","summary-item__img":"Summary_summary-item__img__1-oOh","summary-item__p":"Summary_summary-item__p__3rOcx","summary-item__price":"Summary_summary-item__price__38JW0","price-summary":"Summary_price-summary__1GvCk","price-summary__group":"Summary_price-summary__group__1L0-R","price-summary__group--sm":"Summary_price-summary__group--sm__2Edfb","price-summary__group--lg":"Summary_price-summary__group--lg__2x7sO"}},119:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(21),i=a.n(r),s=(a(65),a(4)),o=a(3),u=a.n(o),l=a(5),d=a(6),m=a(12),b=a.n(m),j=a(20),p=a(1),h=function(e){var t=e.to,a=e.content,n=e.size,c=void 0===n?"med":n;return Object(p.jsx)(j.b,{to:t,exact:"/"===t,className:"".concat(b.a["nav-link"]," ").concat(b.a["nav-link--".concat(c)]),activeClassName:b.a["nav-link--active"],"data-hover":a,children:a})},f=a(9),O=function(e){var t=e.children,a=e.className,n=e.variant,c=Object(f.a)(e,["children","className","variant"]);return Object(p.jsx)("button",Object(s.a)(Object(s.a)({},c),{},{className:"icon-button icon-button--".concat(n," ").concat(a),children:t}))},_=a(8),v=function(e){var t=e.isActive;return Object(p.jsx)("div",{className:"".concat(b.a["menu-icon"]," ").concat(t&&b.a["menu-icon--active"]),children:Object(p.jsx)("div",{className:b.a["menu-icon__bar"]})})},x=a(23),g=a.n(x),y=function(e){var t=e.className,a=e.size,n=void 0===a?"med":a,c=Object(f.a)(e,["className","size"]);return Object(p.jsx)("div",Object(s.a)({className:"loading-spinner loading-spinner--".concat(n," ").concat(t)},c))},N=function(e){var t=e.children,a=e.variant,n=void 0===a?"contained":a,c=e.isLoading,r=void 0!==c&&c,i=e.className,o=e.disabled,u=Object(f.a)(e,["children","variant","isLoading","className","disabled"]);return Object(p.jsx)("button",Object(s.a)(Object(s.a)({},u),{},{className:"button button--".concat(n," ").concat(i),disabled:r||o,children:r?Object(p.jsx)(y,{className:"button__loading-spinner"}):t}))},k=function(e,t){return"".concat(e).concat(t.toFixed(2))}.bind(null,"\xa3"),w=a(31),S=a.n(w),C=function(e){var t=e.imgSrc,a=e.name,c=e.price,r=e.quantity,i=e.available,s=e.disabled,o=e.onRemove,m=e.onQuantityChange,b=Object(n.useState)(!1),j=Object(d.a)(b,2),h=j[0],f=j[1],v=Object(n.useState)(!1),x=Object(d.a)(v,2),g=x[0],N=x[1];Object(n.useEffect)((function(){return function(){N(!0)}}),[]);var w=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,f(!0),e.next=4,m(t);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert(new Error("Something went wrong"));case 9:g||f(!1);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:S.a.container,children:[h?Object(p.jsx)(y,{size:"lg"}):Object(p.jsx)("img",{className:S.a.img,src:t,alt:a}),Object(p.jsxs)("div",{className:S.a.info,children:[Object(p.jsx)("span",{className:"txt-primary",children:a}),Object(p.jsx)("span",{className:"txt-emphasize",children:k(c)})]}),Object(p.jsxs)("div",{className:S.a.actions,children:[Object(p.jsxs)("div",{className:S.a["quantity-controller"],children:[Object(p.jsx)(O,{variant:"secondary",disabled:r===i||s||h,onClick:function(){return w(1)},children:Object(p.jsx)(_.a,{})}),Object(p.jsx)("span",{children:r}),Object(p.jsx)(O,{variant:"secondary",disabled:1===r||s||h,onClick:function(){return w(-1)},children:Object(p.jsx)(_.m,{})})]}),Object(p.jsx)(O,{variant:"tertiary",onClick:Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,f(!0),e.next=4,o();case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert(new Error("Something went wrong"));case 9:g||f(!1);case 10:case"end":return e.stop()}}),e,null,[[0,6]])}))),disabled:s,children:Object(p.jsx)(_.n,{})})]})]})},E=a(7),B=a(56),I=new(a.n(B).a)("pk_test_32212e47b4fffd588e8e14592633a32b695f5f0f698d8"),q=function(){var e=Object(l.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.products.list();case 2:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){var t=e.id,a=e.assets,n=e.name,c=e.description,r=e.price.raw,i=e.inventory.available;return{id:t,imgSrcs:a.map((function(e){return e.url})),name:n,description:c.replace(/<p>/g,'<p class="p-1">').replace(/<\/?ul>/g,""),price:r,available:i}})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(l.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.cart.retrieve();case 2:return a=e.sent,n=a.line_items.map((function(e){var a=t.find((function(t){return t.id===e.product_id})),n=a.id,c=a.name,r=a.price,i=a.available,s=a.imgSrcs;return{id:e.id,productId:n,name:c,price:r,available:i,quantity:e.quantity,imgSrc:s[0]}})),e.abrupt("return",{id:a.id,subtotal:a.subtotal.raw,items:n});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=a(26),T=function(){return Object(L.b)()},z=L.c,P=a(25),A=Object(P.b)("fetchBag",function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),D=Object(P.c)({name:"bag",initialState:{status:"loading",isDisabled:!1,data:null},reducers:{add:function(e,t){e.data.items.push(t.payload),e.data.subtotal+=t.payload.price},remove:function(e,t){var a=e.data.items.findIndex((function(e){return e.id===t.payload}));e.data.items.splice(a,1)},changeQuantity:function(e,t){var a=t.payload,n=a.id,c=a.change,r=e.data.items.find((function(e){return e.id===n}));r.quantity+=c,e.data.subtotal+=c*r.price},enableBag:function(e){e.isDisabled=!1},disableBag:function(e){e.isDisabled=!0},resetBag:function(e,t){e.data={id:t.payload,items:[],subtotal:0}}},extraReducers:function(e){e.addCase(A.pending,(function(e){e.status="loading"})),e.addCase(A.fulfilled,(function(e,t){e.data=t.payload,e.status="loaded"})),e.addCase(A.rejected,(function(e){e.status="failed",e.data=null}))}}),J=D.reducer,R=D.actions,Q=function(e){var t=e.items,a=e.subtotal,n=e.onClose,c=e.className,r=Object(E.f)(),i=T(),o=z((function(e){return e.products.selectedProduct})),d=z((function(e){return e.bag.isDisabled})),m=function(){n(),r.push("/products")};return Object(p.jsxs)("div",{className:"".concat(g.a.container," ").concat(0===t.length&&g.a["container--empty"]," ").concat(c),children:[Object(p.jsxs)("div",{className:g.a.header,children:[Object(p.jsx)("h3",{className:"header-3",children:"Your shopping bag"}),Object(p.jsx)(O,{onClick:n,variant:"tertiary",children:Object(p.jsx)(_.d,{})})]}),Object(p.jsx)("div",{children:0===t.length?Object(p.jsx)("p",{className:"p-1",children:"There's nothing in your bag yet."}):t.map((function(e){var t=e.id,a=e.productId,n=Object(f.a)(e,["id","productId"]);return Object(p.jsx)(C,Object(s.a)(Object(s.a)({disabled:o===a||d},n),{},{onRemove:Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.cart.remove(t);case 2:i(R.remove(t));case 3:case"end":return e.stop()}}),e)}))),onQuantityChange:function(){var e=Object(l.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.cart.update(t,{quantity:n.quantity+a});case 2:i(R.changeQuantity({id:t,change:a}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),t)}))}),t.length>0&&Object(p.jsxs)("div",{className:"txt-emphasize ".concat(g.a.subtotal),children:[Object(p.jsx)("span",{children:"Total price"}),Object(p.jsx)("span",{children:k(a)})]}),Object(p.jsx)("div",{className:g.a.actions,children:t.length>0?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(N,{className:g.a["continue-shopping-btn"],variant:"outlined",onClick:m,children:"Continue shopping"}),Object(p.jsx)(N,{className:g.a["checkout-btn"],onClick:function(){return r.push("/checkout")},children:"Checkout"})]}):Object(p.jsx)(N,{className:g.a["continue-shopping-btn"],onClick:m,children:"Continue shopping"})})]})},M=a(121),W=function(){return Object(p.jsx)("span",{className:"logo",children:"Cube shop"})},G=[{content:"home",to:"/"},{content:"shop",to:"/products"},{content:"our story",to:"/about"},{content:"contact us",to:"/contact"}],H=function(){return Object(p.jsx)("div",{className:b.a["mobile-nav"],children:G.map((function(e,t){return Object(p.jsx)(h,Object(s.a)({size:"lg"},e),t)}))})},X=function(e){var t=e.bagItems,a=e.subtotal,c=Object(n.useState)(!1),r=Object(d.a)(c,2),i=r[0],o=r[1],u=Object(n.useState)(!1),l=Object(d.a)(u,2),m=l[0],j=l[1],f=function(){return j(!1)},x=Object(n.useRef)(null),g=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=function(e){x.current&&!x.current.contains(e.target)&&f()};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"".concat(b.a.nav," ").concat(i&&b.a["nav--mobile-nav-visible"]),children:[Object(p.jsx)(O,{onClick:function(){return o((function(e){return!e}))},className:b.a["mobile-nav-button"],variant:"primary",children:Object(p.jsx)(v,{isActive:i})}),Object(p.jsx)(W,{}),Object(p.jsx)("div",{className:b.a["nav-links-container"],children:G.map((function(e,t){return Object(p.jsx)(h,Object(s.a)({},e),t)}))}),Object(p.jsxs)("div",{className:b.a["bag-btn-container"],ref:x,children:[Object(p.jsx)(O,{onClick:function(){return j(!0)},variant:"primary",children:Object(p.jsx)(_.b,{})}),Object(p.jsx)(M.a,{classNames:"fade",nodeRef:g,timeout:300,in:m,unmountOnExit:!0,mountOnEnter:!0,children:Object(p.jsx)(Q,{items:t,subtotal:a,onClose:f})})]})]}),Object(p.jsx)(H,{})]})},Y=function(e){var t=e.children,a=e.href,n=e.title;return Object(p.jsx)("a",{className:"icon-link",title:n,href:a,target:"_blank",rel:"noreferrer",children:t})},Z=a(32),U=a.n(Z),V=[{icon:_.h,header:"Location",content:"New Damietta, Damietta, Egypt",link:"https://www.google.com/maps/place/Damietta+El-Gadeeda+City,+Kafr+Saad,+Damietta+Governorate/@31.4383128,31.6311286,12z/data=!3m1!4b1!4m5!3m4!1s0x14f9e375eb0246b7:0x8e6df51878254838!8m2!3d31.431304!4d31.685341"},{icon:_.c,header:"Phone number",content:"01019967816"},{icon:_.l,header:"Email addresss",link:"mailto:dryosefbeder@gmail.com",content:"dryosefbeder@gmail.com"}],K=[{icon:_.i,title:"facebook",href:""},{icon:_.k,title:"twitter",href:""},{icon:_.j,title:"github",href:""}],$=function(e){var t=e.icon,a=e.header,n=e.content,c=e.link;return Object(p.jsxs)("div",{className:U.a["footer-section"],children:[Object(p.jsx)("a",{href:c,target:"_blank",rel:"noreferrer",className:U.a["footer-section__icon-container"],children:Object(p.jsx)(t,{})}),Object(p.jsx)("h3",{className:"header-3",children:a}),Object(p.jsx)("p",{className:"p-1",children:n})]})},ee=function(){return Object(p.jsxs)("div",{className:U.a.container,children:[V.map((function(e,t){return Object(p.jsx)($,Object(s.a)({},e),t)})),Object(p.jsxs)("div",{className:U.a["social-info"],children:[Object(p.jsx)("h2",{className:"header-2",children:"Follow us on"}),Object(p.jsx)("div",{className:U.a["links-container"],children:K.map((function(e,t){var a=e.icon,n=Object(f.a)(e,["icon"]);return Object(p.jsx)(Y,Object(s.a)(Object(s.a)({},n),{},{children:Object(p.jsx)(a,{})}),t)}))})]}),Object(p.jsx)("p",{className:"p-2",children:"\xa9 2021 - All Copyrights Reserved To Yosef Beder"})]})},te=function(e){var t=e.children,a=z((function(e){return e.bag.data}));return"loaded"===z((function(e){return e.bag.status}))?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(X,{bagItems:a.items,subtotal:a.subtotal}),t,Object(p.jsx)(ee,{})]}):null},ae=a(34),ne=a.n(ae),ce=function(e){var t=e.imgSrc,a=e.name,c=e.price,r=e.disabled,i=e.onClick,s=e.onAddToBag,o=Object(n.useState)(!1),m=Object(d.a)(o,2),b=m[0],j=m[1];return Object(p.jsxs)("div",{className:ne.a.container,children:[Object(p.jsx)("img",{className:ne.a.img,src:t,alt:a}),Object(p.jsxs)("div",{className:ne.a.info,children:[Object(p.jsx)("p",{className:"txt-primary ".concat(ne.a.name),onClick:i,children:a}),Object(p.jsx)("p",{className:"txt-emphasize",children:k(c)}),Object(p.jsx)(N,{isLoading:b,disabled:r,variant:"contained",onClick:Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,s();case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert("Something went wrong");case 9:j(!1);case 10:case"end":return e.stop()}}),e,null,[[0,6]])}))),children:"Add To Bag"})]})]})},re=a(30),ie=a.n(re),se=function(){var e=z((function(e){return e.products.data})),t=z((function(e){return e.bag.data})),a=Object(E.f)(),n=T();return Object(p.jsx)("div",{className:ie.a["products-container"],children:e.map((function(e){var c,r=e.id,i=e.imgSrcs,o=(e.description,e.available),d=Object(f.a)(e,["id","imgSrcs","description","available"]),m=t.items.find((function(e){return e.productId===r}));return Object(p.jsx)(ce,Object(s.a)(Object(s.a)({imgSrc:i[0]},d),{},{onClick:function(){return a.push("products/".concat(r))},disabled:o-((null===m||void 0===m?void 0:m.quantity)||0)===0,onAddToBag:Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.cart.add(r,1);case 2:t=e.sent,c=t.line_item_id,m&&n(R.changeQuantity({id:c,change:1})),m||n(R.add(Object(s.a)({id:c,productId:r,quantity:1,imgSrc:i[0],available:o},d)));case 6:case"end":return e.stop()}}),e)})))}),r)}))})},oe=function(){return Object(p.jsx)(te,{children:Object(p.jsxs)("main",{className:ie.a.main,children:[Object(p.jsx)("h1",{className:"header-1 ".concat(ie.a.header),children:"Shop all products"}),Object(p.jsx)("p",{className:"p-1 ".concat(ie.a.p),children:"We buy the best cubes in the world and sell them with the best prices in the world!"}),Object(p.jsx)("p",{className:"p-1",children:"All of our products have a warranty for a full year, and can be replaced or returned back within 14 days of receiving the product."}),Object(p.jsx)(se,{})]})})},ue=a(16),le=a.n(ue),de=c.a.forwardRef((function(e,t){var a=e.hasError,n=e.className,c=Object(f.a)(e,["hasError","className"]);return Object(p.jsx)("input",Object(s.a)({className:"input ".concat(a&&"input--invalid"," ").concat(n),ref:t},c))})),me=a(44),be=a(28),je=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{classes:{invalid:"stripe-input--invalid",focus:"stripe-input--focus",base:"stripe-input ".concat(e&&le.a["grid-item--full-width"])}}},pe=function(e){var t=e.formMethods,a=e.isLoaded,n=e.isCapturingOrder,c=e.subdivisions,r=e.subdivision,i=e.onSubdivisionChagne,o=e.shippingOptions,u=e.shippingOption,l=e.onShippingOptionChange,d=e.onSubmit,m=t.register,b=t.handleSubmit,j=t.formState.errors;return Object(p.jsxs)("form",{className:le.a.container,onSubmit:b(d),children:[Object(p.jsxs)("div",{className:le.a["form-group"],children:[Object(p.jsx)("h2",{className:"header-2 ".concat(le.a["form-group__text"]),children:"Customer information"}),Object(p.jsx)(de,Object(s.a)(Object(s.a)({},m("firstName",{required:!0})),{},{hasError:Boolean(j.firstName),placeholder:"First name"})),Object(p.jsx)(de,Object(s.a)(Object(s.a)({},m("lastName",{required:!0})),{},{hasError:Boolean(j.lastName),placeholder:"Last name"})),Object(p.jsx)(de,Object(s.a)(Object(s.a)({},m("email",{required:!0,pattern:/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i})),{},{hasError:Boolean(j.email),placeholder:"Email",className:le.a["grid-item--full-width"]})),Object(p.jsx)("p",{className:"p-2 ".concat(le.a["form-group__text"]),children:"We'll only use your email to send your order confirmation"})]}),Object(p.jsxs)("div",{className:le.a["form-group"],children:[Object(p.jsx)("h2",{className:"header-2 ".concat(le.a["form-group__text"]),children:"Delivery information"}),Object(p.jsx)(de,Object(s.a)(Object(s.a)({},m("address",{required:!0})),{},{hasError:Boolean(j.address),placeholder:"Address"})),Object(p.jsx)(de,Object(s.a)(Object(s.a)({},m("city",{required:!0})),{},{hasError:Boolean(j.city),placeholder:"City"})),Object(p.jsx)(me.a,{placeholder:"Subdivision",options:c,value:r,onChange:i,theme:function(e){return Object(s.a)(Object(s.a)({},e),{},{colors:Object(s.a)(Object(s.a)({},e.colors),{},{neutral20:"var(--color-grey-light)",primary:"var(--color-primary)"})})}}),Object(p.jsx)(de,Object(s.a)(Object(s.a)({},m("postalCode",{maxLength:10,minLength:5,validate:function(e){return!Number.isNaN(Number(e))}})),{},{hasError:Boolean(j.postalCode),placeholder:"Postal code"})),Object(p.jsx)(me.a,{placeholder:"Shipping Option",options:o,value:u,onChange:l,theme:function(e){return Object(s.a)(Object(s.a)({},e),{},{colors:Object(s.a)(Object(s.a)({},e.colors),{},{neutral20:"var(--color-grey-light)",primary:"var(--color-primary)"})})}}),Object(p.jsx)(de,Object(s.a)(Object(s.a)({},m("phoneNumber",{maxLength:11,minLength:11,validate:function(e){return!Number.isNaN(Number(e))}})),{},{hasError:Boolean(j.phoneNumber),placeholder:"Phone number"})),Object(p.jsx)("p",{className:"p-2 ".concat(le.a["form-group__text"]),children:"The only country that we can ship to at the moment is egypt"})]}),Object(p.jsxs)("div",{className:le.a["form-group"],children:[Object(p.jsx)("h2",{className:"header-2 ".concat(le.a["form-group__text"]),children:"Payment information"}),Object(p.jsx)(be.CardNumberElement,{options:je(!0)}),Object(p.jsx)(be.CardExpiryElement,{options:je()}),Object(p.jsx)(be.CardCvcElement,{options:je()}),Object(p.jsx)("p",{className:"p-2 ".concat(le.a["form-group__text"]),children:"This form is encrypted by stripe"})]}),Object(p.jsx)(N,{type:"submit",isLoading:!a||n,children:"Place order"})]})},he=a(11),fe=a.n(he),Oe=function(e){var t=e.imgSrc,a=e.name,n=e.quantity,c=e.price;return Object(p.jsxs)("div",{className:fe.a["summary-item"],children:[Object(p.jsx)("img",{className:fe.a["summary-item__img"],src:t,alt:a}),Object(p.jsxs)("p",{className:"".concat(fe.a["summary-item__p"]," txt-primary"),children:[a," x ",n]}),Object(p.jsx)("div",{className:"".concat(fe.a["summary-item__price"]," txt-emphasize"),children:k(c)})]})},_e=function(e){var t=e.subtotal,a=e.delivery,n=e.items;return Object(p.jsxs)("div",{className:fe.a.container,children:[Object(p.jsx)("h2",{className:"header-2 ".concat(fe.a.header),children:"Order summary"}),Object(p.jsx)("div",{className:fe.a["summary-items-list"],children:n.map((function(e){var t=e.id,a=Object(f.a)(e,["id"]);return Object(p.jsx)(Oe,Object(s.a)({},a),t)}))}),Object(p.jsxs)("div",{className:fe.a["price-summary"],children:[Object(p.jsxs)("div",{className:"".concat(fe.a["price-summary__group"]," ").concat(fe.a["price-summary__group--sm"]," txt-primary"),children:[Object(p.jsx)("span",{children:"Subtotal"}),Object(p.jsx)("span",{children:k(t)})]}),void 0!==a&&Object(p.jsxs)("div",{className:"".concat(fe.a["price-summary__group"]," ").concat(fe.a["price-summary__group--sm"]," txt-primary"),children:[Object(p.jsx)("span",{children:"Delivery"}),Object(p.jsx)("span",{children:k(a)})]}),Object(p.jsxs)("div",{className:"".concat(fe.a["price-summary__group"]," ").concat(fe.a["price-summary__group--lg"]," txt-emphasize"),children:[Object(p.jsx)("span",{children:"Total"}),Object(p.jsx)("span",{children:k(t+(a||0))})]})]})]})},ve=a(37),xe=a.n(ve),ge=a(57),ye=a(59),Ne=Object(ge.a)("pk_test_51JPL8oIHAJyY80XCOk8lkmZIflBnbfvZdSqPELxp0myENg9zFj57iFcXJn3sQ6EUR0F1fsOENveBYgSCD5MU1kQp00I57fCoJk"),ke="EG",we=function(){var e=T(),t=Object(E.f)(),a=z((function(e){return e.bag.data})),c="loaded"===z((function(e){return e.bag.status})),r=Object(n.useState)(""),i=Object(d.a)(r,2),s=i[0],o=i[1],m=Object(n.useState)(!1),b=Object(d.a)(m,2),j=b[0],h=b[1],f=Object(n.useState)(!1),O=Object(d.a)(f,2),_=O[0],v=O[1];Object(n.useEffect)((function(){return e(R.disableBag()),function(){e(R.enableBag())}}),[e]);var x=Object(ye.a)(),g=Object(n.useState)(null),y=Object(d.a)(g,2),N=y[0],w=y[1],S=Object(n.useState)([]),C=Object(d.a)(S,2),B=C[0],q=C[1],F=Object(n.useState)(null),L=Object(d.a)(F,2),P=L[0],A=L[1],D=Object(n.useState)([]),J=Object(d.a)(D,2),Q=J[0],M=J[1],W=function(){var n=Object(l.a)(u.a.mark((function n(c,r,i){var o,l,d,m,b,j,p,h;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=i.firstName,l=i.lastName,d=i.email,m=i.phoneNumber,b=i.address,j=i.city,p=i.postalCode,h={},a.items.forEach((function(e){var t=e.id,a=e.quantity;h[t]={quantity:a}})),n.prev=3,v(!0),n.next=7,I.checkout.capture(s,{line_items:h,customer:{firstname:o,lastname:l,email:d,phone:"+2".concat(m)},shipping:{name:"".concat(o," ").concat(l),street:b,town_city:j,county_state:"".concat(ke,"-").concat(N.value),country:ke,postal_zip_code:p},fulfillment:{shipping_method:P.value.id},payment:{gateway:"test_gateway",card:{number:"4242424242424242",expiry_month:"02",expiry_year:"24",cvc:"123",postal_zip_code:p}}});case 7:return n.t0=e,n.t1=R,n.next=11,I.cart.retrieve();case 11:n.t2=n.sent.id,n.t3=n.t1.resetBag.call(n.t1,n.t2),(0,n.t0)(n.t3),v(!1),alert("\ud83c\udf89 Succeeded!\nThanks for buying from us \ud83d\ude18.\nThe next step is to check your email \ud83d\ude80."),n.next=22;break;case 18:n.prev=18,n.t4=n.catch(3),v(!1),alert("\ud83d\ude22 Error\nSomething went wrong while capturing the order :(\nTry again later \ud83d\ude00");case 22:t.push("/products");case 23:case"end":return n.stop()}}),n,null,[[3,18]])})));return function(e,t,a){return n.apply(this,arguments)}}();return Object(n.useEffect)((function(){if(c){if(0===a.subtotal)return void t.replace("/products");Object(l.a)(u.a.mark((function e(){var t,n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.checkout.generateToken(a.id,{type:"cart"});case 3:return t=e.sent,e.t0=Object,e.next=7,I.services.localeListSubdivisions(ke);case 7:e.t1=e.sent.subdivisions,n=e.t0.entries.call(e.t0,e.t1).map((function(e){var t=Object(d.a)(e,2),a=t[0];return{label:t[1],value:a}})),c=t.shipping_methods.map((function(e){var t=e.id,a=e.description,n=e.price.raw;return{label:"".concat(a," - ").concat(k(n)),value:{id:t,price:n}}})),q(n),M(c),w(n[0]),A(c[0]),o(t.id),h(!0),e.next=21;break;case 18:e.prev=18,e.t2=e.catch(0),alert(new Error("Something went wrong, Please refresh the page"));case 21:case"end":return e.stop()}}),e,null,[[0,18]])})))()}}),[c]),Object(p.jsx)(te,{children:Object(p.jsxs)("main",{className:xe.a.main,children:[Object(p.jsx)("h1",{className:"header-1 ".concat(xe.a.header),children:"Checkout"}),Object(p.jsxs)("div",{className:xe.a.container,children:[Object(p.jsx)(be.Elements,{stripe:Ne,children:Object(p.jsx)(be.ElementsConsumer,{children:function(e){var t=e.stripe,a=e.elements;return Object(p.jsx)(pe,{formMethods:x,isLoaded:j,isCapturingOrder:_,onSubmit:W.bind(null,t,a),subdivisions:B,subdivision:N,onSubdivisionChagne:function(e){return w(e)},shippingOptions:Q,shippingOption:P,onShippingOptionChange:function(e){return A(e)}})}})}),c&&Object(p.jsx)(_e,{items:a.items,subtotal:a.subtotal,delivery:null===P||void 0===P?void 0:P.value.price})]})]})})},Se=function(){var e=Object(E.f)();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{className:"header-2",style:{width:"max-content",margin:"1rem auto"},children:"This page isn't available at the moment"}),Object(p.jsx)(N,{style:{width:"max-content",margin:"1rem auto",padding:"0 1rem"},onClick:function(){return e.push("/products")},children:"Go the shop"})]})},Ce=Se,Ee=Se,Be=Se,Ie=a(19),qe=a.n(Ie),Fe=Object(P.b)("fetchProducts",Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),Le=Object(P.c)({name:"products",initialState:{status:"loading",selectedProduct:"",data:null},reducers:{setSelectedProduct:function(e,t){e.selectedProduct=t.payload}},extraReducers:function(e){e.addCase(Fe.pending,(function(e){e.status="loading"})),e.addCase(Fe.fulfilled,(function(e,t){e.status="loaded",e.data=t.payload})),e.addCase(Fe.rejected,(function(e){e.status="failed",e.data=null}))}}),Te=Le.reducer,ze=Le.actions,Pe=a(58),Ae=a(43);console.log(Ae.a);var De=[{path:"/",exact:!0,component:Ce},{path:"/products/:id",component:function(){var e,t=Object(L.b)(),a=Object(E.f)(),c=Object(E.g)().id,r=z((function(e){return e.products.data.findIndex((function(e){return e.id===c}))}));r=-1===r?0:r;var i=z((function(e){return e.products.data[r]})),s=i.id,o=i.name,m=i.description,b=i.imgSrcs,j=i.available,h=i.price,f=z((function(e){return e.bag.data})),v="loaded"===z((function(e){return e.bag.status})),x=(null===f||void 0===f||null===(e=f.items.find((function(e){return e.productId===s})))||void 0===e?void 0:e.quantity)||0,g=Object(n.useState)(0),y=Object(d.a)(g,2),w=y[0],S=y[1],C=Object(n.useState)(0),B=Object(d.a)(C,2),q=B[0],F=B[1],T=Object(n.useState)(!1),P=Object(d.a)(T,2),A=P[0],D=P[1];Object(n.useEffect)((function(){return s!==c&&a.replace("/products/".concat(s)),t(ze.setSelectedProduct(s)),function(){t(ze.setSelectedProduct(""))}}),[t,s]);var J=Object(n.useState)(Boolean(localStorage.getItem("heart:".concat(s)))),Q=Object(d.a)(J,2),M=Q[0],W=Q[1];Object(n.useEffect)((function(){var e="heart:".concat(s),t=localStorage.getItem(e);M&&!t&&localStorage.setItem(e,"true"),!M&&t&&localStorage.removeItem(e)}),[M,s]);var G=Object(n.useState)(!1),H=Object(d.a)(G,2),X=H[0],Y=H[1];return v?Object(p.jsx)(te,{children:Object(p.jsxs)("main",{className:qe.a.main,children:[Object(p.jsx)("div",{className:qe.a["imgs-container"],children:b.map((function(e,t){return Object(p.jsx)("img",{className:"".concat(qe.a.img," ").concat(t===w&&qe.a["img--selected"]),onClick:function(){return S(t)},src:e,alt:""},t)}))}),Object(p.jsx)("img",{className:qe.a["selected-img"],src:b[w],alt:""}),Object(p.jsxs)("div",{className:qe.a.details,children:[Object(p.jsx)("h1",{className:"header-1",children:o}),Object(p.jsx)("h2",{className:"header-2",children:k(h)}),Object(p.jsx)("ul",{className:qe.a["description-list"],dangerouslySetInnerHTML:{__html:m}})]}),Object(p.jsxs)("div",{className:"".concat(qe.a.actions," ").concat(qe.a["actions--1"]),children:[Object(p.jsx)(O,{variant:"quaternary",onClick:function(){return W((function(e){return!e}))},children:M?Object(p.jsx)(_.e,{style:{color:"tomato"}}):Object(p.jsx)(_.f,{})}),Object(p.jsx)(Pe.CopyToClipboard,{onCopy:function(){return Y(!0)},text:"".concat(Ae.a,"#/products/").concat(s),children:Object(p.jsx)(O,{variant:"quaternary",onClick:function(){},children:Object(p.jsx)(_.g,{})})}),X&&Object(p.jsx)("span",{className:"txt-primary",children:"Copied!"})]}),Object(p.jsxs)("div",{className:"".concat(qe.a.actions," ").concat(qe.a["actions--2"]),children:[Object(p.jsx)(de,{type:"number",value:q,onChange:function(e){return F(+e.target.value)},min:0,max:j-x}),Object(p.jsx)(N,{disabled:0===q||q+x>j,isLoading:A,onClick:Object(l.a)(u.a.mark((function e(){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,D(!0),e.next=4,I.cart.add(s,q);case 4:a=e.sent,(n=f.items.find((function(e){return e.productId===s})))||t(R.add({id:a.line_item_id,productId:s,quantity:q,imgSrc:b[0],name:o,available:j,price:h})),n&&t(R.changeQuantity({id:a.line_item_id,change:q})),F(0),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),alert(new Error("Something went wrong"));case 14:D(!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])}))),children:"Add To Cart"})]})]})}):null}},{path:"/products",component:oe},{path:"/checkout",component:we},{path:"/about",component:Ee},{path:"/contact",component:Be}],Je=function(){var e=Object(E.f)();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{className:"header-2",style:{width:"max-content",margin:"1rem auto"},children:"404: This page doesn't exist"}),Object(p.jsx)(N,{style:{width:"max-content",margin:"1rem auto",padding:"0 1rem"},onClick:function(){return e.replace("/products")},children:"Go to the shop"})]})},Re=function(){var e=T(),t="loaded"===z((function(e){return e.products.status})),a=z((function(e){return e.products.data})),c="loaded"===z((function(e){return e.products.status}))&&t;return Object(n.useEffect)((function(){Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(Fe());case 2:case"end":return t.stop()}}),t)})))()}),[e]),Object(n.useEffect)((function(){t&&Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(A(a));case 2:case"end":return t.stop()}}),t)})))()}),[t,a,e]),c?Object(p.jsxs)(E.c,{children:[De.map((function(e,t){return Object(p.jsx)(E.a,Object(s.a)({},e),t)})),Object(p.jsx)(E.a,{path:"*",component:Je})]}):null},Qe=Object(P.a)({reducer:{products:Te,bag:J}});i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(L.a,{store:Qe,children:Object(p.jsx)(j.a,{basename:"/cubeshop",children:Object(p.jsx)(Re,{})})})}),document.getElementById("root"))},12:function(e,t,a){e.exports={nav:"Navbar_nav__2_gBX","mobile-nav-button":"Navbar_mobile-nav-button__2pSW2","nav-links-container":"Navbar_nav-links-container__1EIMl","nav-link":"Navbar_nav-link__2FckQ","nav-link--sm":"Navbar_nav-link--sm__1eDF4","nav-link--med":"Navbar_nav-link--med__1ySy0","nav-link--lg":"Navbar_nav-link--lg__2rs-O","nav-link--active":"Navbar_nav-link--active__3KWum","mobile-nav":"Navbar_mobile-nav__1A-XT","bag-btn-container":"Navbar_bag-btn-container__1Cxq-","menu-icon":"Navbar_menu-icon__1zk76","menu-icon__bar":"Navbar_menu-icon__bar__3_jmb","menu-icon--active":"Navbar_menu-icon--active__16d1L","nav--mobile-nav-visible":"Navbar_nav--mobile-nav-visible__1U4aW"}},16:function(e,t,a){e.exports={container:"Form_container__1m2Gn","form-group":"Form_form-group__2H7Wo","form-group__text":"Form_form-group__text__2wh6x","grid-item--full-width":"Form_grid-item--full-width__1bjcJ"}},19:function(e,t,a){e.exports={main:"product_main__2MzTj","imgs-container":"product_imgs-container__2X1nW",img:"product_img__-13Bh","img--selected":"product_img--selected__3E9pl","selected-img":"product_selected-img__1LAEw",details:"product_details__BNnrU","description-list":"product_description-list__3oCm6",actions:"product_actions__1019z","actions--1":"product_actions--1__1Act8","actions--2":"product_actions--2__3vHGS"}},23:function(e,t,a){e.exports={container:"Bag_container__iy27Q",header:"Bag_header__3-iV7",actions:"Bag_actions__1DoyW","container--empty":"Bag_container--empty__2eblS",subtotal:"Bag_subtotal__1euBi","checkout-btn":"Bag_checkout-btn__2BJ6n","continue-shopping-btn":"Bag_continue-shopping-btn__18EAH"}},30:function(e,t,a){e.exports={main:"shop_main__VZt_f",header:"shop_header__1br4a",p:"shop_p__3kIc8","products-container":"shop_products-container__3EWz_"}},31:function(e,t,a){e.exports={container:"BagItem_container__1P2tB",img:"BagItem_img__3B11w",info:"BagItem_info__iSzOw",actions:"BagItem_actions__4QOjO","quantity-controller":"BagItem_quantity-controller__duaD8"}},32:function(e,t,a){e.exports={container:"Footer_container__36YTw","footer-section":"Footer_footer-section__JZaCY","footer-section__icon-container":"Footer_footer-section__icon-container__-jLr3","social-info":"Footer_social-info__1_9j6","links-container":"Footer_links-container__2AMUN"}},34:function(e,t,a){e.exports={container:"Product_container__3hbMN",img:"Product_img__31ZBX",info:"Product_info__IuIRo",name:"Product_name__1pTft"}},37:function(e,t,a){e.exports={main:"checkout_main__1vzJp",header:"checkout_header__9hc1y",container:"checkout_container__1ZaCV"}},43:function(e){e.exports=JSON.parse('{"a":"https://yosefbeder.github.io/cubeshop/"}')},65:function(e,t,a){}},[[119,1,2]]]);
//# sourceMappingURL=main.1bd62e0b.chunk.js.map