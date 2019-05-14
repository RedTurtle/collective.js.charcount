/**
 *  Character Count Plugin - jQuery plugin
 *  Dynamic character count for text areas and input fields
 *  written by Alen Grakalic
 *  http://cssglobe.com/post/7161/jquery-plugin-simplest-twitterlike-dynamic-character-count-for-textareas
 *
 *  Copyright (c) 2009 Alen Grakalic (http://cssglobe.com)
 *  Dual licensed under the MIT (MIT-LICENSE.txt)
 *  and GPL (GPL-LICENSE.txt) licenses.
 *
 *  Built for jQuery library
 *  http://jquery.com
 *  @license
 */
require(["jquery"],function(c){"use strict";c.fn.charCount=function(e){var s=c.extend({allowed:140,warning:25,css:"counter",counterElement:"span",cssWarning:"warning",cssExceeded:"exceeded",counterText:""},e);function n(e){var n=c(e).val().length,t=s.allowed-n;t<=s.warning&&0<=t?c(e).next().addClass(s.cssWarning):c(e).next().removeClass(s.cssWarning),t<0?c(e).next().addClass(s.cssExceeded):c(e).next().removeClass(s.cssExceeded),c(e).next().html(s.counterText+t)}this.each(function(){c(this).after("<"+s.counterElement+' class="'+s.css+'">'+s.counterText+"</"+s.counterElement+">"),n(this),c(this).keyup(function(){n(this)}),c(this).change(function(){n(this)})})}});