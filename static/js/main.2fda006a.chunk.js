(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,n){e.exports={item:"ImageGalleryItem_item__1l-UL",item_image:"ImageGalleryItem_item_image__htJ68"}},12:function(e,t,n){e.exports={backdrop:"Modal_backdrop__TEkBX",content:"Modal_content__2RfG3"}},14:function(e,t,n){e.exports={button:"Button_button__3vdwo"}},16:function(e,t,n){e.exports={ImageGallery:"ImageGallery_ImageGallery__2DcbQ"}},22:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),o=n.n(r),c=n(7),i=n.n(c),s=(n(22),n(3)),l=n(4),u=n(6),h=n(5),m=n(8),d=n.n(m),g=n(9),p=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={request:""},e.handleInputChange=function(t){e.setState({request:t.target.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault();var n=e.state.request;n.trim().length>0?e.props.transRequest(n):g.b.dark("Search-field is empty!"),e.resetInput()},e.resetInput=function(){e.setState({request:""})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("header",{className:d.a.Searchbar,children:Object(a.jsxs)("form",{className:d.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(a.jsx)("button",{type:"submit",className:d.a.SearchFormBtn,children:Object(a.jsx)("span",{className:d.a.SearchFormBtn_label,children:"Search"})}),Object(a.jsx)("input",{className:d.a.SearchFormInput,type:"text",value:this.state.request,onChange:this.handleInputChange,placeholder:"Search images and photos"})]})})}}]),n}(r.Component),b=n(13),j=n(11),f=n.n(j);var v=function(e){var t=e.tags,n=e.webformatURL,r=e.largeImageURL,o=e.onImgClick;return Object(a.jsx)("li",{className:f.a.item,onClick:function(){return o(r,t)},children:Object(a.jsx)("img",{src:n,alt:t,className:f.a.item_image})})},O=n(14),y=n.n(O);var _=function(e){var t=e.onClick,n=e.disabled;return Object(a.jsx)("button",{type:"button",className:y.a.button,onClick:t,disabled:n,children:"Load more"})},S=n(12),k=n.n(S),x=document.querySelector("#modal-root"),w=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(a.jsx)("div",{className:k.a.backdrop,onClick:this.handleBackdropClick,children:Object(a.jsx)("div",{className:k.a.content,children:this.props.children})}),x)}}]),n}(r.Component),I=n(15),C=n.n(I),B=n(16),F=n.n(B),q=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={hits:[],loading:!1,showModal:!1,modalImg:null,error:null},e.URL="https://pixabay.com/api/",e.APIKey="19367568-bec790f08eb1ec18688a31f32",e.imgPerPage=12,e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.onImgClick=function(t,n){e.setState({modalImg:{link:t,tag:n}}),e.toggleModal()},e.scroll=function(){setTimeout((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),700)},e}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(e,t){var n=this,a=e.query,r=this.props.query,o=e.page,c=this.props.page;r===a&&c===o||(this.setState({loading:!0,error:null}),fetch("".concat(this.URL,"?q=").concat(r,"&page=").concat(c,"&key=").concat(this.APIKey,"&image_type=photo&orientation=horizontal&per_page=").concat(this.imgPerPage)).then((function(e){if(e.ok)return e.json()})).then((function(e){var t=e.hits;return t.length>0?n.setState((function(e){return r!==a?{hits:t}:{hits:[].concat(Object(b.a)(e.hits),Object(b.a)(t))}})):Promise.reject(new Error('"'.concat(r,'" - not found!!!')))})).catch((function(e){n.setState({hits:[],error:e})})).finally((function(){n.setState({loading:!1}),n.scroll()})))}},{key:"render",value:function(){var e=this,t=this.state,n=t.loading,r=t.hits,o=t.showModal,c=t.modalImg,i=t.error;return Object(a.jsxs)("div",{children:[r.length>0&&Object(a.jsx)("ul",{className:F.a.ImageGallery,children:r.map((function(t){var n=t.id,r=t.tags,o=t.webformatURL,c=t.largeImageURL;return Object(a.jsx)(v,{tags:r,webformatURL:o,largeImageURL:c,onImgClick:e.onImgClick},n)}))}),n&&Object(a.jsx)(C.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80,timeout:3e3}),r.length>0&&Object(a.jsx)(_,{onClick:this.props.onBtnClick,disabled:n}),o&&Object(a.jsx)(w,{onClose:this.toggleModal,children:Object(a.jsx)("img",{src:c.link,alt:c.tag})}),i&&Object(a.jsx)("h2",{children:i.message})]})}}]),n}(r.Component),L=(n(44),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={request:"",page:1},e.addRequest=function(t){e.setState({request:t,page:1})},e.nextPage=function(){e.setState((function(e){var t=e.page;return{page:t+=1}}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.request,n=e.page;return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(p,{transRequest:this.addRequest}),Object(a.jsx)(q,{query:t,page:n,onBtnClick:this.nextPage}),Object(a.jsx)(g.a,{autoClose:4e3})]})}}]),n}(r.Component)),N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))};i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(L,{})}),document.getElementById("root")),N()},8:function(e,t,n){e.exports={Searchbar:"SearchBar_Searchbar__27TuN",SearchForm:"SearchBar_SearchForm__GXkTB",SearchFormBtn:"SearchBar_SearchFormBtn__1jGuk",SearchFormBtn_label:"SearchBar_SearchFormBtn_label__3gvn-",SearchFormInput:"SearchBar_SearchFormInput__3eTqj"}}},[[45,1,2]]]);
//# sourceMappingURL=main.2fda006a.chunk.js.map