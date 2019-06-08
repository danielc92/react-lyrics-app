(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a.p+"static/media/guitar-1245856_1920.ec58acb9.jpg"},35:function(e,t,a){e.exports=a(61)},61:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(30),s=a.n(l),r=a(13),i=a(11),o=a(4),m=a(5),u=a(7),h=a(6),p=a(8),d=a(34),b=a(12),E=a.n(b),f=c.a.createContext(),g=function(e,t){switch(t.type){case"SEARCH_TRACKS":return Object(d.a)({},e,{track_list:t.payload,heading:"Search Results"});default:return e}},y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={track_list:[],heading:"Top 10 tracks",dispatch:function(e){return a.setState(function(t){return g(t,e)})}},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=".concat("43b5f20c777dcf1db97e39f81ab80ad5")).then(function(t){console.log(t.data),e.setState({track_list:t.data.message.body.track_list})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return c.a.createElement(f.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),k=f.Consumer,N=function(e){var t=e.track;return c.a.createElement("div",{className:"column is-full"},c.a.createElement("div",{className:"notification is-white",style:{borderRadius:0,boxShadow:"0 3px 6px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}},c.a.createElement("div",{className:"columns"},c.a.createElement("div",{className:"column is-two-fifths"},c.a.createElement("h3",{className:"title is-uppercase",style:{fontWeight:"bold"}},t.track_name),c.a.createElement("h6",{className:"title is-uppercase",style:{fontWeight:"bold",color:"#1878d4"}},"BY: ",t.artist_name),c.a.createElement("p",null,c.a.createElement("i",{className:"fas fa-star"})," ",c.a.createElement("strong",null,t.track_rating))),c.a.createElement("div",{className:"column is-two-fifths"},c.a.createElement("p",{className:"help"},"Album: ",c.a.createElement("strong",null,t.album_name)),c.a.createElement("p",{className:"help"},"Album ID: ",c.a.createElement("strong",null,t.album_id)),c.a.createElement("p",{className:"help"},"Modified: ",c.a.createElement("strong",null,t.updated_time)),c.a.createElement("p",{className:"help"},"Subtitle Availability: ",1===t.has_subtitles?c.a.createElement("span",{className:"tag is-info"},"available"):c.a.createElement("span",{className:"tag is-danger"},"unavailable"))),c.a.createElement("div",{className:"column is-one-fith"},c.a.createElement("a",{style:{marginBottom:"1rem"},className:"button is-fullwidth is-dark is-outlined",href:t.track_share_url},"Visit Musixmatch"),1===t.has_lyrics?c.a.createElement(r.b,{data:t,className:"button is-fullwidth is-dark is-outlined",to:"/lyrics/track/".concat(t.track_id)},"View Lyrics"):c.a.createElement("code",{style:{backgroundColor:"transparent",color:"black",paddingLeft:0}},"No lyrics exist for this track")))))},v=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement(k,null,function(e){return void 0===e.track_list|0===e.track_list.length?c.a.createElement("section",{className:"section",style:{height:"900px"}},c.a.createElement("section",{className:"container"},c.a.createElement("section",{className:"content"},c.a.createElement("h2",{className:"title is-uppercase has-text-centered",style:{fontWeight:"bold"}},"Loading Data  ",c.a.createElement("span",{className:"fa-1x"},c.a.createElement("i",{className:"fas fa-spinner fa-spin"})))))):c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"section"},c.a.createElement("section",{className:"container"},c.a.createElement("section",{className:"content"},c.a.createElement("h2",{style:{color:"#3f3b3b",fontWeight:"bold"},className:"has-text-centered title is-uppercase"},e.heading.toUpperCase()),c.a.createElement("section",{className:"is-multiline columns"},e.track_list.map(function(e){return c.a.createElement(N,{key:e.track.track_id,track:e.track})}))))))})}}]),t}(n.Component),w=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"section"},c.a.createElement("section",{className:"container"},c.a.createElement("section",{className:"content"},c.a.createElement("h2",{style:{color:"#3f3b3b",fontWeight:"bold"},className:"has-text-centered title"},"ABOUT"),c.a.createElement("p",null,"This application was built in order to start using the Context API to gain a better understanding of global context usage in React, as well as usage of third party API integration with React. Building this posed some challenges as I have not done API integration with React or used the Context API before. The application is currently being served by github pages."),c.a.createElement("p",null,"I followed ",c.a.createElement("a",{href:"https://www.youtube.com/watch?v=NDEt0KdDbhk"},"Traverys tutorials")," closely and made a lot of adjustments through the project, such as using a different layout, CSS framework and theming."),c.a.createElement("p",null,"In general the application encompasses the following technical aspects"),c.a.createElement("ul",null,c.a.createElement("li",null,"Use of ",c.a.createElement("strong",null,"axios")," library to make API calls to musixmatch service"),c.a.createElement("li",null,"Use of global context using the Context API"),c.a.createElement("li",null,"Creating and using dispatchers, reducers, Providers and Consumers"),c.a.createElement("li",null,"Integrating search functionality by passing url parameters to the API call")),c.a.createElement("p",null,"This application allows the user upon the first request, to view top 10 tracks in the United States. They can also view lyrics and stats relating to songs that show up in the 'Track List'. Users can also search through the musicmatch database via API calls using the search form to locate track titles of interest."))))}}]),t}(n.Component),_=a(33),x=a.n(_),j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={trackTitle:""},a.onChange=function(e){var t=e.target.value;a.setState({trackTitle:t})},a.locateTrack=function(e,t){t.preventDefault(),E.a.get("https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=".concat(a.state.trackTitle,"&page=1&page_size=10&country=us&apikey=").concat("43b5f20c777dcf1db97e39f81ab80ad5")).then(function(t){console.log(t.data.message.body.track_list),e({type:"SEARCH_TRACKS",payload:t.data.message.body.track_list}),a.setState({trackTitle:""});var n=document.domain;window.location.href="localhost"==n?"http://localhost:3000/#/":"https://danielc92.github.io/react-lyrics-app/#/"}).catch(function(e){return console.log(e)})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(k,null,function(t){var a=t.dispatch;return c.a.createElement("form",{onSubmit:e.locateTrack.bind(e,a),className:"form"},c.a.createElement("div",{className:"field is-grouped"},c.a.createElement("p",{className:"control is-expanded"},c.a.createElement("input",{onChange:e.onChange,value:e.state.trackTitle,className:"input",name:"song_title",type:"text",placeholder:"Search for song title"})),c.a.createElement("p",{className:"control"},c.a.createElement("button",{type:"submit",className:"button is-link"},"Search"))))})}}]),t}(n.Component);function O(){return c.a.createElement("section",{className:"hero is-medium",style:{backgroundSize:"contain",backgroundImage:"url(".concat(x.a,")")}},c.a.createElement("div",{className:"hero-head"},c.a.createElement("nav",{className:"navbar"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"navbar-brand"},c.a.createElement("p",{className:"navbar-item"},c.a.createElement("strong",{style:{color:"white"}},"LYRIC APP")),c.a.createElement("span",{className:"navbar-burger burger","data-target":"navbarMenu"},c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null))),c.a.createElement("div",{id:"navbarMenu",className:"navbar-menu",style:{backgroundColor:"transparent"}},c.a.createElement("div",{className:"navbar-end"},c.a.createElement("span",{className:"navbar-item"},c.a.createElement(r.b,{className:"button is-link is-outlined",exact:!0,to:"/"},c.a.createElement("span",{className:"icon"},c.a.createElement("i",{className:"fa fa-home"})),"\xa0\xa0Home")),c.a.createElement("span",{className:"navbar-item"},c.a.createElement(r.b,{className:"button is-link is-outlined",exact:!0,to:"/about"},c.a.createElement("span",{className:"icon"},c.a.createElement("i",{className:"fas fa-info-circle"})),"\xa0\xa0About")),c.a.createElement("span",{className:"navbar-item"},c.a.createElement("a",{className:"button is-link is-outlined",href:"https://github.com/danielc92/react-lyrics-app"},c.a.createElement("span",{className:"icon"},c.a.createElement("i",{className:"fab fa-github"})),c.a.createElement("span",null,"View Source")))))))),c.a.createElement("div",{className:"hero-body"},c.a.createElement("div",{className:"container has-text-centered"},c.a.createElement("div",{className:"column is-6 is-offset-3",style:{backgroundColor:"rgba(0,0,0,.6)"}},c.a.createElement("h1",{style:{color:"white"},className:"title is-size-1"},"Lyric App"),c.a.createElement("p",{style:{color:"white"},className:"subtitle"},"This app allows users to search for songs and lyric data. This is made possible through the integration of the ",c.a.createElement("span",{style:{fontWeight:"bold"}},"musixmatch")," API back-end. The front-end is built with ",c.a.createElement("span",{style:{fontWeight:"bold"}},"React"),"."),c.a.createElement("div",{className:"box",style:{padding:"1rem",backgroundColor:"transparent"}},c.a.createElement(j,null))))))}var C=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={track:{},lyrics:{}},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=".concat(this.props.match.params.id,"&apikey=").concat("43b5f20c777dcf1db97e39f81ab80ad5")).then(function(t){return e.setState({lyrics:t.data.message.body.lyrics}),E.a.get("https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=".concat(e.props.match.params.id,"&apikey=").concat("43b5f20c777dcf1db97e39f81ab80ad5"))}).then(function(t){console.log(t.data.message.body.track),e.setState({track:t.data.message.body.track})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return c.a.createElement("section",{className:"section"},c.a.createElement("section",{className:"container"},c.a.createElement("section",{className:"content"},c.a.createElement("h1",null,this.state.track.track_name),c.a.createElement("p",null,"By ",c.a.createElement("span",{className:"tag is-dark"},this.state.track.artist_name)),c.a.createElement("p",null,"Artist ID: ",this.state.track.artist_id),c.a.createElement("p",null,"Album ID: ",this.state.track.album_id),c.a.createElement("p",null,c.a.createElement("code",{style:{backgroundColor:"transparent"}},"Track last updated at: ",this.state.track.updated_time)),c.a.createElement("h2",null,"Lyrics"),c.a.createElement("p",null," ",this.state.lyrics.lyrics_body),c.a.createElement("p",{className:"help"}," ",this.state.lyrics.lyrics_copyright),c.a.createElement("p",null,c.a.createElement("code",{style:{backgroundColor:"transparent"}},"Lyrics last updated at: ",this.state.lyrics.updated_time)))))}}]),t}(n.Component),A=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"content has-text-centered"},c.a.createElement("p",null,"Developed by ",c.a.createElement("strong",null,"Daniel Corcoran")),c.a.createElement("p",null,"Styled with ",c.a.createElement("a",{href:"https://bulma.io/"},"Bulma CSS Framework")),c.a.createElement("p",null,"Images from ",c.a.createElement("a",{href:"https://pixabay.com/"},"Pixabay")),c.a.createElement("p",null,"Icons from ",c.a.createElement("a",{href:"https://fontawesome.com/"},"Fontawesome")))))}}]),t}(n.Component);var S=function(){return c.a.createElement(y,null,c.a.createElement(r.a,null,c.a.createElement(c.a.Fragment,null,c.a.createElement(O,null),c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",component:v}),c.a.createElement(i.a,{exact:!0,path:"/about",component:w}),c.a.createElement(i.a,{exact:!0,path:"/lyrics/track/:id",component:C})),c.a.createElement(A,null))))};s.a.render(c.a.createElement(S,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.e8e12d52.chunk.js.map