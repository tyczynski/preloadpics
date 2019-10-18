/*!
 * @package preloadpics
 * @version v1.0.0
 * @author Przemysław Tyczyński | https://tyczynski.pl
 * @license MIT
 */
var preloadpics=function(){"use strict";function n(n){return new Promise((r,o)=>{const e=new Image;e.onload=r,e.onerror=o,e.src=n})}return function(r=[]){const o=[];for(let e=0;e<r.length;e+=1){const t=r[e];o.push(n(t))}return Promise.all(o)}}();
