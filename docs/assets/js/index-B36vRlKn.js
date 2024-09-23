import{M as e,c as a,a as t,n as l,F as s,r,b as o,w as n,B as d,D as i,o as c,d as u,e as h,f as m,I as p,g as f,R as y,h as w,T as z,i as x,j as v}from"./vendor-BnMgjEoh.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&a(e)})).observe(document,{childList:!0,subtree:!0})}function a(e){if(e.ep)return;e.ep=!0;const a=function(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?a.credentials="include":"anonymous"===e.crossOrigin?a.credentials="omit":a.credentials="same-origin",a}(e);fetch(e.href,a)}}();const U={class:"maze"},g={class:"maze-box"},S=["innerHTML"],b=["innerHTML"],M=["innerHTML"],_={class:"controls"};const L=v(((e,a)=>{const t=e.__vccOpts||e;for(const[l,s]of a)t[l]=s;return t})({data:()=>({show:!1,rows:41,maze:[],player:{x:1,y:1},mazeSetUp:{end:"🏁",rows:41,player:"😃",arrival:"🥰",deadEnd:20,endLocation:"center"},errorMessage:"",hasReachedEnd:!1}),computed:{end(){const{rows:e,endLocation:a}=this.mazeSetUp,t=Math.floor(e/2),l=[{x:1,y:e-2},{x:e-2,y:1},{x:t,y:t},{x:e-2,y:e-2}];switch(a){case"rightTop":return l[1];case"leftDown":return l[0];case"rightDown":return l[3];case"center":return l[2];case"random":return l[Math.floor(Math.random()*l.length)];default:return}}},mounted(){this.generateMaze(),window.addEventListener("keydown",this.move)},methods:{saveSettings(){this.generateMaze(),e.success("地图数据设置成功~")},generateMaze(){this.show=!1,this.maze=Array(this.mazeSetUp.rows*this.mazeSetUp.rows).fill().map(((e,a)=>({x:a%this.mazeSetUp.rows,y:Math.floor(a/this.mazeSetUp.rows),wall:!0})));this.carveMaze(1,1),this.maze.find((e=>1===e.x&&1===e.y)).wall=!1,this.maze.find((e=>e.x===this.end.x&&e.y===this.end.y)).wall=!1,this.createDeadEnds()},carveMaze(e,a){const t=this.coordinateArray(2);t.sort((()=>Math.random()-.5)),t.forEach((t=>{const l=e+t.x,s=a+t.y;if(l>0&&l<this.mazeSetUp.rows-1&&s>0&&s<this.mazeSetUp.rows-1){const r=this.maze.find((e=>e.x===l&&e.y===s));if(r&&r.wall){const o=e+t.x/2,n=a+t.y/2,d=this.maze.find((e=>e.x===o&&e.y===n));d&&(d.wall=!1),r.wall=!1,this.carveMaze(l,s)}}}))},createDeadEnds(){const e=this.maze.filter((e=>!e.wall)),a=Math.floor(e.length*(this.mazeSetUp.deadEnd/100));for(let t=0;t<a;t++){const a=e[Math.floor(Math.random()*e.length)];1===this.getNeighbors(a).filter((e=>!e.wall)).length&&(this.maze.find((e=>e.x===a.x&&e.y===a.y)).wall=!0)}},getCellClass:e=>({cell:!0,wall:e.wall,path:!e.wall}),move(e){const{x:a,y:t}=this.player;let l=a,s=t;switch(e="string"==typeof e?e:e.key){case"w":case"up":case"ArrowUp":t>0&&s--;break;case"s":case"down":case"ArrowDown":t<this.mazeSetUp.rows-1&&s++;break;case"a":case"left":case"ArrowLeft":a>0&&l--;break;case"d":case"right":case"ArrowRight":a<this.mazeSetUp.rows-1&&l++;break;default:return}this.maze.find((e=>e.x===l&&e.y===s)).wall||(this.player.x=l,this.player.y=s,this.hasReachedEnd=this.player.x===this.end.x&&this.player.y===this.end.y)},getNeighbors(e){const a=this.coordinateArray(1),t=[];return a.forEach((a=>{const l=e.x+a.x,s=e.y+a.y;if(l>=0&&l<this.mazeSetUp.rows&&s>=0&&s<this.mazeSetUp.rows){const e=this.maze.find((e=>e.x===l&&e.y===s));e.wall||t.push(e)}})),t},coordinateArray:e=>[{x:0,y:-e},{x:0,y:e},{x:-e,y:0},{x:e,y:0}],xyRadius(e,a){const t=this.mazeSetUp.rows-1;return 0==e&&0==a?"border-top-left-radius: 2px":e==t&&0==a?"border-top-right-radius: 2px":0==e&&a==t?"border-bottom-left-radius: 2px":e==t&&a==t?"border-bottom-right-radius: 2px":""}}},[["render",function(e,v,L,k,V,E){const T=d,C=p,A=f,D=y,H=w,R=z,O=x,K=i;return c(),a("div",U,[t("div",g,[t("div",{class:"maze-container",style:l({gridTemplateColumns:"repeat("+V.rows+", 10px)"})},[(c(!0),a(s,null,r(V.maze,((e,t)=>(c(),a("div",{key:t,style:l(E.xyRadius(e.x,e.y)),class:u(E.getCellClass(e))},[V.player.x!==e.x||V.player.y!==e.y||V.hasReachedEnd?h("",!0):(c(),a("span",{key:0,innerHTML:V.mazeSetUp.player},null,8,S)),E.end.x!==e.x||E.end.y!==e.y||V.hasReachedEnd?h("",!0):(c(),a("span",{key:1,innerHTML:V.mazeSetUp.end},null,8,b)),V.hasReachedEnd&&E.end.x===e.x&&E.end.y===e.y?(c(),a("span",{key:2,innerHTML:V.mazeSetUp.arrival},null,8,M)):h("",!0)],6)))),128))],4),t("div",_,[o(T,{onClick:v[0]||(v[0]=e=>E.move("up"))},{default:n((()=>v[11]||(v[11]=[m("上"),t("span",{class:"shortcutKeys"},"(W)",-1)]))),_:1}),o(T,{onClick:v[1]||(v[1]=e=>E.move("down"))},{default:n((()=>v[12]||(v[12]=[m("下"),t("span",{class:"shortcutKeys"},"(S)",-1)]))),_:1}),o(T,{onClick:v[2]||(v[2]=e=>E.move("left"))},{default:n((()=>v[13]||(v[13]=[m("左"),t("span",{class:"shortcutKeys"},"(A)",-1)]))),_:1}),o(T,{onClick:v[3]||(v[3]=e=>E.move("right"))},{default:n((()=>v[14]||(v[14]=[m("右"),t("span",{class:"shortcutKeys"},"(D)",-1)]))),_:1}),o(T,{onClick:v[4]||(v[4]=e=>V.show=!0)},{default:n((()=>v[15]||(v[15]=[m("设置")]))),_:1})]),o(K,{width:"40%",title:"迷宫设置",visible:V.show,onOk:E.saveSettings,unmountOnClose:""},{default:n((()=>[o(O,{model:V.mazeSetUp,layout:"vertical"},{default:n((()=>[o(A,{field:"rows",label:"迷宫大小"},{extra:n((()=>v[16]||(v[16]=[t("div",null,"迷宫大小必须为单数, 数字越大生成的迷宫就越大",-1)]))),default:n((()=>[o(C,{modelValue:V.mazeSetUp.rows,"onUpdate:modelValue":v[5]||(v[5]=e=>V.mazeSetUp.rows=e),placeholder:"迷宫大小"},null,8,["modelValue"])])),_:1}),o(A,{field:"deadEnd",label:"死胡同数量占比"},{extra:n((()=>v[17]||(v[17]=[t("div",null,"填写百分比",-1)]))),default:n((()=>[o(C,{modelValue:V.mazeSetUp.deadEnd,"onUpdate:modelValue":v[6]||(v[6]=e=>V.mazeSetUp.deadEnd=e),placeholder:"死胡同数量占比"},null,8,["modelValue"])])),_:1}),o(A,{field:"endLocation",label:"终点位置"},{default:n((()=>[o(H,{modelValue:V.mazeSetUp.endLocation,"onUpdate:modelValue":v[7]||(v[7]=e=>V.mazeSetUp.endLocation=e),type:"button"},{default:n((()=>[o(D,{value:"rightTop"},{default:n((()=>v[18]||(v[18]=[m("右上角")]))),_:1}),o(D,{value:"leftDown"},{default:n((()=>v[19]||(v[19]=[m("左下角")]))),_:1}),o(D,{value:"center"},{default:n((()=>v[20]||(v[20]=[m("中间")]))),_:1}),o(D,{value:"rightDown"},{default:n((()=>v[21]||(v[21]=[m("右下角")]))),_:1}),o(D,{value:"random"},{default:n((()=>v[22]||(v[22]=[m("随机")]))),_:1})])),_:1},8,["modelValue"])])),_:1}),o(A,{field:"player",label:"玩家图标"},{extra:n((()=>v[23]||(v[23]=[t("div",null,"支持填写HTML标签",-1)]))),default:n((()=>[o(R,{modelValue:V.mazeSetUp.player,"onUpdate:modelValue":v[8]||(v[8]=e=>V.mazeSetUp.player=e),placeholder:"玩家图标"},null,8,["modelValue"])])),_:1}),o(A,{field:"end",label:"终点图标"},{extra:n((()=>v[24]||(v[24]=[t("div",null,"支持填写HTML标签",-1)]))),default:n((()=>[o(R,{modelValue:V.mazeSetUp.end,"onUpdate:modelValue":v[9]||(v[9]=e=>V.mazeSetUp.end=e),placeholder:"终点图标"},null,8,["modelValue"])])),_:1}),o(A,{field:"arrival",label:"抵达终点图标"},{extra:n((()=>v[25]||(v[25]=[t("div",null,"支持填写HTML标签",-1)]))),default:n((()=>[o(R,{modelValue:V.mazeSetUp.arrival,"onUpdate:modelValue":v[10]||(v[10]=e=>V.mazeSetUp.arrival=e),placeholder:"抵达终点图标"},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1},8,["visible","onOk"])])])}],["__scopeId","data-v-ef0c46b7"]]));L.config.productionTip=!1,L.mount("#app");
