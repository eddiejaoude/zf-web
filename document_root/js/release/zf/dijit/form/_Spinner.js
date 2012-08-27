/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dijit.form._Spinner"]){dojo._hasResource["dijit.form._Spinner"]=true;dojo.provide("dijit.form._Spinner");dojo.require("dijit.form.ValidationTextBox");dojo.declare("dijit.form._Spinner",dijit.form.RangeBoundTextBox,{defaultTimeout:500,timeoutChangeRate:0.9,smallDelta:1,largeDelta:10,templateString:dojo.cache("dijit.form","templates/Spinner.html","<div class=\"dijit dijitReset dijitInlineTable dijitLeft\"\n\tid=\"widget_${id}\" waiRole=\"presentation\"\n\t><div class=\"dijitInputLayoutContainer\"\n\t\t><div class=\"dijitReset dijitSpinnerButtonContainer\"\n\t\t\t>&nbsp;<div class=\"dijitReset dijitLeft dijitButtonNode dijitArrowButton dijitUpArrowButton\"\n\t\t\t\tdojoAttachPoint=\"upArrowNode\"\n\t\t\t\t><div class=\"dijitArrowButtonInner\">&thinsp;</div\n\t\t\t\t><div class=\"dijitArrowButtonChar\">&#9650;</div\n\t\t\t></div\n\t\t\t><div class=\"dijitReset dijitLeft dijitButtonNode dijitArrowButton dijitDownArrowButton\"\n\t\t\t\tdojoAttachPoint=\"downArrowNode\"\n\t\t\t\t><div class=\"dijitArrowButtonInner\">&thinsp;</div\n\t\t\t\t><div class=\"dijitArrowButtonChar\">&#9660;</div\n\t\t\t></div\n\t\t></div\n\t\t><div class=\"dijitReset dijitValidationIcon\"><br></div\n\t\t><div class=\"dijitReset dijitValidationIconText\">&Chi;</div\n\t\t><div class=\"dijitReset dijitInputField\"\n\t\t\t><input class='dijitReset' dojoAttachPoint=\"textbox,focusNode\" type=\"${type}\" dojoAttachEvent=\"onkeypress:_onKeyPress\"\n\t\t\t\twaiRole=\"spinbutton\" autocomplete=\"off\" ${nameAttrSetting}\n\t\t/></div\n\t></div\n></div>\n"),baseClass:"dijitTextBox dijitSpinner",cssStateNodes:{"upArrowNode":"dijitUpArrowButton","downArrowNode":"dijitDownArrowButton"},adjust:function(_1,_2){return _1;},_arrowPressed:function(_3,_4,_5){if(this.disabled||this.readOnly){return;}this._setValueAttr(this.adjust(this.attr("value"),_4*_5),false);dijit.selectInputText(this.textbox,this.textbox.value.length);},_arrowReleased:function(_6){this._wheelTimer=null;if(this.disabled||this.readOnly){return;}},_typematicCallback:function(_7,_8,_9){var _a=this.smallDelta;if(_8==this.textbox){var k=dojo.keys;var _b=_9.charOrCode;_a=(_b==k.PAGE_UP||_b==k.PAGE_DOWN)?this.largeDelta:this.smallDelta;_8=(_b==k.UP_ARROW||_b==k.PAGE_UP)?this.upArrowNode:this.downArrowNode;}if(_7==-1){this._arrowReleased(_8);}else{this._arrowPressed(_8,(_8==this.upArrowNode)?1:-1,_a);}},_wheelTimer:null,_mouseWheeled:function(_c){dojo.stopEvent(_c);var _d=_c.detail?(_c.detail*-1):(_c.wheelDelta/120);if(_d!==0){var _e=this[(_d>0?"upArrowNode":"downArrowNode")];this._arrowPressed(_e,_d,this.smallDelta);if(!this._wheelTimer){clearTimeout(this._wheelTimer);}this._wheelTimer=setTimeout(dojo.hitch(this,"_arrowReleased",_e),50);}},postCreate:function(){this.inherited(arguments);this.connect(this.domNode,!dojo.isMozilla?"onmousewheel":"DOMMouseScroll","_mouseWheeled");this._connects.push(dijit.typematic.addListener(this.upArrowNode,this.textbox,{charOrCode:dojo.keys.UP_ARROW,ctrlKey:false,altKey:false,shiftKey:false,metaKey:false},this,"_typematicCallback",this.timeoutChangeRate,this.defaultTimeout));this._connects.push(dijit.typematic.addListener(this.downArrowNode,this.textbox,{charOrCode:dojo.keys.DOWN_ARROW,ctrlKey:false,altKey:false,shiftKey:false,metaKey:false},this,"_typematicCallback",this.timeoutChangeRate,this.defaultTimeout));this._connects.push(dijit.typematic.addListener(this.upArrowNode,this.textbox,{charOrCode:dojo.keys.PAGE_UP,ctrlKey:false,altKey:false,shiftKey:false,metaKey:false},this,"_typematicCallback",this.timeoutChangeRate,this.defaultTimeout));this._connects.push(dijit.typematic.addListener(this.downArrowNode,this.textbox,{charOrCode:dojo.keys.PAGE_DOWN,ctrlKey:false,altKey:false,shiftKey:false,metaKey:false},this,"_typematicCallback",this.timeoutChangeRate,this.defaultTimeout));if(dojo.isIE){var _f=this;(function resize(){var sz=_f.upArrowNode.parentNode.offsetHeight;if(sz){_f.upArrowNode.style.height=sz>>1;_f.downArrowNode.style.height=sz-(sz>>1);_f.focusNode.parentNode.style.height=sz;}})();this.connect(this.domNode,"onresize",function(){setTimeout(function(){resize();_f._setStateClass();},0);});this._layoutHackIE7();}}});}