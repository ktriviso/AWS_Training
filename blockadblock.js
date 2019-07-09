/** Copyright 2019 Amazon.com Inc. or its affiliates. All Rights Reserved. **/
!function(a){var b=function(b){this._options={checkOnLoad:!1,resetOnEnd:!1,loopCheckTime:50,loopMaxNumber:5,baitClass:"pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links",baitStyle:"width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;",debug:!1},this._var={version:"3.2.0",bait:null,checking:!1,loop:null,loopNumber:0,event:{detected:[],notDetected:[]}},void 0!==b&&this.setOption(b);var c=this,d=function(){setTimeout(function(){!0===c._options.checkOnLoad&&(!0===c._options.debug&&c._log("onload->eventCallback","A check loading is launched"),null===c._var.bait&&c._creatBait(),setTimeout(function(){c.check()},1))},1)};void 0!==a.addEventListener?a.addEventListener("load",d,!1):a.attachEvent("onload",d)};b.prototype._options=null,b.prototype._var=null,b.prototype._bait=null,b.prototype._log=function(a,b){console.log("[BlockAdBlock]["+a+"] "+b)},b.prototype.setOption=function(a,b){if(void 0!==b){var c=a;a={},a[c]=b}for(var d in a)this._options[d]=a[d],!0===this._options.debug&&this._log("setOption",'The option "'+d+'" he was assigned to "'+a[d]+'"');return this},b.prototype._creatBait=function(){var b=document.createElement("div");b.setAttribute("class",this._options.baitClass),b.setAttribute("style",this._options.baitStyle),this._var.bait=a.document.body.appendChild(b),this._var.bait.offsetParent,this._var.bait.offsetHeight,this._var.bait.offsetLeft,this._var.bait.offsetTop,this._var.bait.offsetWidth,this._var.bait.clientHeight,this._var.bait.clientWidth,!0===this._options.debug&&this._log("_creatBait","Bait has been created")},b.prototype._destroyBait=function(){a.document.body.removeChild(this._var.bait),this._var.bait=null,!0===this._options.debug&&this._log("_destroyBait","Bait has been removed")},b.prototype.check=function(a){if(void 0===a&&(a=!0),!0===this._options.debug&&this._log("check","An audit was requested "+(!0===a?"with a":"without")+" loop"),!0===this._var.checking)return!0===this._options.debug&&this._log("check","A check was canceled because there is already an ongoing"),!1;this._var.checking=!0,null===this._var.bait&&this._creatBait();var b=this;return this._var.loopNumber=0,!0===a&&(this._var.loop=setInterval(function(){b._checkBait(a)},this._options.loopCheckTime)),setTimeout(function(){b._checkBait(a)},1),!0===this._options.debug&&this._log("check","A check is in progress ..."),!0},b.prototype._checkBait=function(b){var c=!1;if(null===this._var.bait&&this._creatBait(),null===a.document.body.getAttribute("abp")&&null!==this._var.bait.offsetParent&&0!=this._var.bait.offsetHeight&&0!=this._var.bait.offsetLeft&&0!=this._var.bait.offsetTop&&0!=this._var.bait.offsetWidth&&0!=this._var.bait.clientHeight&&0!=this._var.bait.clientWidth||(c=!0),void 0!==a.getComputedStyle){var d=a.getComputedStyle(this._var.bait,null);"none"!=d.getPropertyValue("display")&&"hidden"!=d.getPropertyValue("visibility")||(c=!0)}!0===this._options.debug&&this._log("_checkBait","A check ("+(this._var.loopNumber+1)+"/"+this._options.loopMaxNumber+" ~"+(1+this._var.loopNumber*this._options.loopCheckTime)+"ms) was conducted and detection is "+(!0===c?"positive":"negative")),!0===b&&++this._var.loopNumber>=this._options.loopMaxNumber&&this._stopLoop(),!0===c?(this._stopLoop(),this._destroyBait(),this.emitEvent(!0),!0===b&&(this._var.checking=!1)):null!==this._var.loop&&!1!==b||(this._destroyBait(),this.emitEvent(!1),!0===b&&(this._var.checking=!1))},b.prototype._stopLoop=function(a){clearInterval(this._var.loop),this._var.loop=null,this._var.loopNumber=0,!0===this._options.debug&&this._log("_stopLoop","A loop has been stopped")},b.prototype.emitEvent=function(a){!0===this._options.debug&&this._log("emitEvent","An event with a "+(!0===a?"positive":"negative")+" detection was called");var b=this._var.event[!0===a?"detected":"notDetected"];for(var c in b)!0===this._options.debug&&this._log("emitEvent","Call function "+(parseInt(c)+1)+"/"+b.length),b.hasOwnProperty(c)&&b[c]();return!0===this._options.resetOnEnd&&this.clearEvent(),this},b.prototype.clearEvent=function(){this._var.event.detected=[],this._var.event.notDetected=[],!0===this._options.debug&&this._log("clearEvent","The event list has been cleared")},b.prototype.on=function(a,b){return this._var.event[!0===a?"detected":"notDetected"].push(b),!0===this._options.debug&&this._log("on",'A type of event "'+(!0===a?"detected":"notDetected")+'" was added'),this},b.prototype.onDetected=function(a){return this.on(!0,a)},b.prototype.onNotDetected=function(a){return this.on(!1,a)},a.BlockAdBlock=b,void 0===a.blockAdBlock&&(a.blockAdBlock=new b({checkOnLoad:!0,resetOnEnd:!0}))}(window);