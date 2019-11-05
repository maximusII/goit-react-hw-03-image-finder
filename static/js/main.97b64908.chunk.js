(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{2:function(e,t,a){e.exports={photoCard:"PhotoCard_photoCard__12-er",stats:"PhotoCard_stats__FqDCr",statsItem:"PhotoCard_statsItem__20Vb9",fullscreenButton:"PhotoCard_fullscreenButton__3I56G"}},22:function(e,t,a){e.exports={searchForm:"SearchForm_searchForm__1T9RL"}},23:function(e,t,a){e.exports={gallery:"Gallery_gallery__3C6TW"}},24:function(e,t,a){e.exports=a(47)},29:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),l=a.n(o),c=(a(29),a(10)),s=a(3),i=a(4),m=a(6),u=a(5),d=a(7),h=a(8),p=a.n(h),g=a(21),f=a.n(g),y="https://pixabay.com/api/?key=14073931-175cead39f199f74b34025e26&q=",b=12,E="&image_type=photo&orientation=horizontal",v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ukraine",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return f.a.get("".concat(y+e,"&per_page=").concat(b)+"&page=".concat(t).concat(E))},_=a(22),w=a.n(_),O=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={query:""},a.handleChange=function(e){a.setState({query:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.onSubmit(a.state.query),a.setState({query:""})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.query;return r.a.createElement("form",{className:w.a.searchForm,onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",autoComplete:"off",value:e,onChange:this.handleChange,placeholder:"Search images..."}))}}]),t}(n.Component),k=a(23),C=a.n(k),I=a(2),N=a.n(I),L=function(e){var t=e.webformatURL,a=e.likes,n=e.views,o=e.comments,l=e.downloads,c=e.onFullscreenClick;return r.a.createElement("div",{className:N.a.photoCard,onClick:c},r.a.createElement("img",{src:t,alt:""}),r.a.createElement("div",{className:N.a.stats},r.a.createElement("p",{className:N.a.statsItem},r.a.createElement("i",{className:"material-icons"},"thumb_up"),a),r.a.createElement("p",{className:N.a.statsItem},r.a.createElement("i",{className:"material-icons"},"visibility"),n),r.a.createElement("p",{className:N.a.statsItem},r.a.createElement("i",{className:"material-icons"},"comment"),o),r.a.createElement("p",{className:N.a.statsItem},r.a.createElement("i",{className:"material-icons"},"cloud_download"),l)),r.a.createElement("button",{type:"button",className:N.a.fullscreenButton},r.a.createElement("i",{className:"material-icons"},"zoom_out_map")))},j=function(e){var t=e.galleryItems,a=e.onFullscreenClick;return r.a.createElement(n.Fragment,null,r.a.createElement("ul",{className:C.a.gallery},t.map((function(e){var t=e.id,n=e.webformatURL,o=e.largeImageURL,l=e.likes,c=e.views,s=e.comments,i=e.downloads;return r.a.createElement("li",{key:t},r.a.createElement(L,{webformatURL:n,largeImageURL:o,likes:l,views:c,comments:s,downloads:i,onFullscreenClick:a}))}))))},S=function(e){var t=e.text;return r.a.createElement("div",null,r.a.createElement("p",null,"Oops, something went wrong: ",t))},M=a(9),R=a.n(M),U=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.props.handleEscKey)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.props.handleEscKey)}},{key:"render",value:function(){return r.a.createElement("div",{tabIndex:"0",className:R.a.overlay,onClick:this.props.onFullscreenClick,id:"overlay"},r.a.createElement("div",{className:R.a.modal},r.a.createElement("img",{src:this.props.largeImageURL,alt:""})))}}]),t}(n.Component),F=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={galleryItems:[],error:null,isModalOpen:!1,largeImageURL:"",currentQuery:"",currentPageNumber:1},a.fetchPhotos=function(e){v(e).then((function(t){var n=t.data;a.setState({galleryItems:n.hits,currentQuery:e})})).catch((function(e){return a.setState({error:e})}))},a.handleModalOpening=function(e){if("button"===e.target.parentNode.type){var t=e.currentTarget.firstElementChild.src,n=a.state.galleryItems.find((function(e){return e.webformatURL===t})).largeImageURL;a.setState({largeImageURL:n,isModalOpen:!0})}"overlay"===e.target.id&&a.setState({isModalOpen:!1})},a.handleEscKey=function(e){"Escape"===e.key&&a.setState({isModalOpen:!1})},a.handleLoadMore=function(){v(a.state.currentQuery,a.state.currentPageNumber+1).then((function(e){var t=e.data;a.setState({galleryItems:[].concat(Object(c.a)(a.state.galleryItems),Object(c.a)(t.hits)),currentPageNumber:a.state.currentPageNumber+1}),window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})})).catch((function(e){return a.setState({error:e})}))},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetchPhotos()}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.galleryItems,o=e.isModalOpen,l=e.largeImageURL;return r.a.createElement(n.Fragment,null,t&&r.a.createElement(S,{text:t.message}),o&&r.a.createElement(U,{largeImageURL:l,onFullscreenClick:this.handleModalOpening,handleEscKey:this.handleEscKey}),a.length>0&&r.a.createElement("div",{className:p.a.app},r.a.createElement(O,{onSubmit:this.fetchPhotos}),r.a.createElement(j,{galleryItems:a,onFullscreenClick:this.handleModalOpening,isModalOpen:o,handleEscKey:this.handleEscKey,largeImageURL:l}),r.a.createElement("button",{type:"button",className:p.a.button,onClick:this.handleLoadMore},"Load more")))}}]),t}(n.Component);l.a.render(r.a.createElement(F,null),document.getElementById("root"))},8:function(e,t,a){e.exports={app:"App_app__yKE2A",button:"App_button__z1eoE"}},9:function(e,t,a){e.exports={overlay:"Modal_overlay__1d6Gz",modal:"Modal_modal__1mw5o"}}},[[24,1,2]]]);
//# sourceMappingURL=main.97b64908.chunk.js.map