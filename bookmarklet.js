(function(n,g,q,c,f)%7Bvar s=document,l=s.onclick,h="ws_cmbm-"+f,b=s.getElementById(h),d="ws_cmbms-"+f,p=s.getElementById(d),e=null,o,a=%7Btl:%7Bleft:"10px",top:"10px"%7D,tr:%7Bright:"10px",top:"10px"%7D,bl:%7Bleft:"10px",bottom:"10px"%7D,br:%7Bright:"10px",bottom:"10px"%7D%7D,k,m=".ws_cmbmc%7Bposition:fixed;z-index:10123456;width:200px;display:block;visibility:hidden;border:1px solid #b0b0b0;background:#fff;padding:3px 0 3px 3px;text-align:left;border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;box-shadow:2px 2px 3px #777;-moz-box-shadow:2px 2px 3px #777;-webkit-box-shadow:2px 2px 3px #777;%7D.ws_cmbmc a%7Bdisplay:block;float:left;margin:0;width:191px;border:none;padding:8px 0 8px 6px;background:#fff;color:black;text-decoration:none;font:normal normal normal 12px/100%25 Verdana,sans-serif;letter-spacing:normal;word-spacing:normal;%7D.ws_cmbmc a:hover%7Bbackground:#a0a0a0;color:white;border:none;text-decoration:none;font:normal normal normal 12px/100%25 Verdana,sans-serif;letter-spacing:normal;word-spacing:normal;%7D";function r()%7Bb.style.visibility="hidden"%7Dfunction j()%7Bb.style.visibility="visible"%7Dif(b)%7Bif(b.style.visibility=="visible")%7Br()%7Delse%7Bj()%7Dreturn%7Dif(!p)%7Bm=m.replace(/.ws_cmbmc/g,"#"+h);p=s.createElement("style");p.type="text/css";p.id=d;p.appendChild(s.createTextNode(m));s.getElementsByTagName("head")%5B0%5D.appendChild(p)%7Db=s.createElement("div");b.setAttribute("id",h);b.className="ws_cmbmc";for(o=0;o<n.length;o++)%7Be=s.createElement("a");e.appendChild(s.createTextNode(n%5Bo%5D.title));e.setAttribute("href",n%5Bo%5D.url);e.onclick=(function(i)%7Bif(q)%7Br()%7D%7D);b.appendChild(e)%7Ds.getElementsByTagName("body")%5B0%5D.appendChild(b);if(a.hasOwnProperty(g))%7Bfor(k in a%5Bg%5D)%7Bb.style%5Bk%5D=a%5Bg%5D%5Bk%5D%7D%7Delse%7Bif(g=="c")%7Bb.style.left=Math.round((window.innerWidth-b.offsetWidth)/2)+"px";b.style.top=Math.round((window.innerHeight-b.offsetHeight)/2)+"px"%7D%7Dif(c)%7Bs.onclick=(function()%7Br();if(typeof l=="function")%7Bl()%7D%7D);b.onclick=(function(i)%7Bi.stopPropagation()%7D)%7Dj()%7D)(%5B%7Btitle:"Rainbow",url:"javascript:(function()%7Bvar d=document,id=%5Cx27AAR24pxBkmklt%5Cx27,el=d.getElementById(id),f=d.querySelectorAll(%5Cx27iframe%5Cx27),i=0,l=f.length;if(el)%7Bfunction removeFromShadows(root)%7Bfor(var el of root.querySelectorAll(%5Cx27*%5Cx27))%7Bif(el.shadowRoot)%7Bel.shadowRoot.getElementById(id).remove();removeFromShadows(el.shadowRoot);%7D%7D%7Del.remove();if(l)%7Bfor(i=0;i<l;i++)%7Btry%7Bf%5Bi%5D.contentWindow.document.getElementById(id).remove();removeFromShadows(f%5Bi%5D.contentWindow.document);%7Dcatch(e)%7Bconsole.log(e)%7D%7D%7DremoveFromShadows(d);%7Delse%7Bs=d.createElement(%5Cx27style%5Cx27);s.id=id;s.appendChild(d.createTextNode(%2527*%7B cursor: url(https://l413.github.io/Cursor-Changer/icons/rainbow.gif) 12 12, auto !important%7D%2527));function applyToShadows(root)%7Bfor(var el of root.querySelectorAll(%5Cx27*%5Cx27))%7Bif(el.shadowRoot)%7Bel.shadowRoot.appendChild(s.cloneNode(true));applyToShadows(el.shadowRoot);%7D%7D%7Dd.getElementsByTagName(%5Cx27head%5Cx27)%5B0%5D.appendChild(s);for(i=0;i<l;i++)%7Btry%7Bf%5Bi%5D.contentWindow.document.getElementsByTagName(%5Cx27head%5Cx27)%5B0%5D.appendChild(s.cloneNode(true));applyToShadows(f%5Bi%5D.contentWindow.document);%7Dcatch(e)%7Bconsole.log(e)%7D%7DapplyToShadows(d);%7D%7D)();"%7D%5D,"tr",false,true,1677983154312)
