/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.charting.plot2d.Bubble"],["require","dojox.charting.plot2d.Base"],["require","dojox.lang.functional"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.charting.plot2d.Bubble"]){_4._hasResource["dojox.charting.plot2d.Bubble"]=true;_4.provide("dojox.charting.plot2d.Bubble");_4.require("dojox.charting.plot2d.Base");_4.require("dojox.lang.functional");(function(){var df=_6.lang.functional,du=_6.lang.utils,dc=_6.charting.plot2d.common,_7=df.lambda("item.purgeGroup()");_4.declare("dojox.charting.plot2d.Bubble",_6.charting.plot2d.Base,{defaultParams:{hAxis:"x",vAxis:"y"},optionalParams:{},constructor:function(_8,_9){this.opt=_4.clone(this.defaultParams);du.updateWithObject(this.opt,_9);this.series=[];this.hAxis=this.opt.hAxis;this.vAxis=this.opt.vAxis;},calculateAxes:function(_a){this._calc(_a,dc.collectSimpleStats(this.series));return this;},render:function(_b,_c){this.dirty=this.isDirty();if(this.dirty){_4.forEach(this.series,_7);this.cleanGroup();var s=this.group;df.forEachRev(this.series,function(_d){_d.cleanGroup(s);});}var t=this.chart.theme,_e,_f,_10,_11,_12,ht=this._hScaler.scaler.getTransformerFromModel(this._hScaler),vt=this._vScaler.scaler.getTransformerFromModel(this._vScaler),_13=this.events();this.resetEvents();for(var i=this.series.length-1;i>=0;--i){var run=this.series[i];if(!this.dirty&&!run.dirty){continue;}run.cleanGroup();if(!run.data.length){run.dirty=false;continue;}if(typeof run.data[0]=="number"){console.warn("dojox.charting.plot2d.Bubble: the data in the following series cannot be rendered as a bubble chart; ",run);continue;}var s=run.group,_14=_4.map(run.data,function(v,i){return {x:ht(v.x)+_c.l,y:_b.height-_c.b-vt(v.y),radius:this._vScaler.bounds.scale*(v.size/2)};},this);if(run.fill){_10=run.fill;}else{if(run.stroke){_10=run.stroke;}else{_10=run.dyn.color=new _4.Color(t.next("color"));}}run.dyn.fill=_10;_e=run.dyn.stroke=run.stroke?dc.makeStroke(run.stroke):dc.augmentStroke(t.series.stroke,_10);var _15=null,_16=null,_17=null;if(this.opt.shadows&&_e){var sh=this.opt.shadows,_12=new _4.Color([0,0,0,0.2]),_11=_4.clone(_f?_f:_e);_11.color=_12;_11.width+=sh.dw?sh.dw:0;run.dyn.shadow=_11;var _18=_4.map(_14,function(_19){var sh=this.opt.shadows;return s.createCircle({cx:_19.x+sh.dx,cy:_19.y+sh.dy,r:_19.radius}).setStroke(_11).setFill(_12);},this);}if(run.outline||t.series.outline){_f=dc.makeStroke(run.outline?run.outline:t.series.outline);_f.width=2*_f.width+_e.width;run.dyn.outline=_f;_16=_4.map(_14,function(_1a){s.createCircle({cx:_1a.x,cy:_1a.y,r:_1a.radius}).setStroke(_f);},this);}_15=_4.map(_14,function(_1b){return s.createCircle({cx:_1b.x,cy:_1b.y,r:_1b.radius}).setStroke(_e).setFill(_10);},this);if(_13){_4.forEach(_15,function(s,i){var o={element:"circle",index:i,run:run,plot:this,hAxis:this.hAxis||null,vAxis:this.vAxis||null,shape:s,outline:_16&&_16[i]||null,shadow:_17&&_17[i]||null,x:run.data[i].x,y:run.data[i].y,r:run.data[i].size/2,cx:_14[i].x,cy:_14[i].y,cr:_14[i].radius};this._connectEvents(s,o);},this);}run.dirty=false;}this.dirty=false;return this;}});})();}}};});