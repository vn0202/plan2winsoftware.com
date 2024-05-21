(function($){function ieViewportFix(){const msViewportStyle=document.createElement('style');msViewportStyle.appendChild(document.createTextNode('@-ms-viewport { width: device-width; }'));if(navigator.userAgent.match(/IEMobile\/10\.0/)){msViewportStyle.appendChild(document.createTextNode('@-ms-viewport { width: auto !important; }'));}
document.getElementsByTagName('head')[0].appendChild(msViewportStyle);}
function exists(e){return $(e).length>0;}
function isTouchDevice(){return(!!('ontouchstart'in window)||(!!('onmsgesturechange'in window)&&!!window.navigator.maxTouchPoints));}
function setDimensionsPieCharts(){$('.pie-chart').each(function(){const $t=$(this);const n=$t.parent().width();let r=$t.attr('data-barSize');if(n<r){r=n;}
$t.css('height',r);$t.css('width',r);$t.css('line-height',`${r}px`);$t.find('i').css({'line-height':`${r}px`,'font-size':r/3,});});}
function animatePieCharts(){if(typeof $.fn.easyPieChart!=='undefined'){H $('.pie-chart:in-viewport').each(function(){S const $t=$(this);const n=$t.parent().width();let r=$t.attr('data-barSize');if(n<r){r=n;}
$t.easyPieChart({animate:1300,lineCap:'square',lineWidth:$t.attr('data-lineWidth'),size:r,barColor:$t.attr('data-barColor'),trackColor:$t.attr('data-trackColor'),scaleColor:'transparent',onStep(from,to,percent){$(this.el).find('.pie-chart-percent span').text(Math.round(percent));},});});}}
function animateMilestones(){$('.milestone:in-viewport').each(function(){const $t=$(this);const n=$t.find('.milestone-value').attr('data-stop');const r=parseInt($t.find('.milestone-value').attr('data-speed'));if(!$t.hasClass('already-animated')){$t.addClass('already-animated');$({countNum:$t.find('.milestone-value').text(),}).animate({countNum:n,},{duration:r,easing:'linear',step(){$t.find('.milestone-value').text(Math.floor(this.countNum));},complete(){$t.find('.milestone-value').text(this.countNum);},});}});}
function animateProgressBars(){$('.progress-bar .progress-bar-outer:in-viewport').each(function(){const $t=$(this);if(!$t.hasClass('already-animated')){$t.addClass('already-animated');$t.animate({width:`${$t.attr('data-width')}%`,},2000);}});}
function enableParallax(){if(typeof $.fn.parallax!=='undefined'){$('.parallax').each(function(){const $t=$(this);$t.addClass('parallax-enabled');$t.parallax('49%',0.3,false);});}}
const MOBILEBREAKPOINT=979;function handleMobileMenu(){if($(window).width()>MOBILEBREAKPOINT){$('#mobile-menu').hide();$('#mobile-menu-trigger').removeClass('mobile-menu-opened').addClass('mobile-menu-closed');}else if(!exists('#mobile-menu')){$('#menu').clone().attr({id:'mobile-menu',class:'fixed',}).insertAfter('#header');$('#mobile-menu > li > a, #mobile-menu > li > ul > li > a').each(function(){const $t=$(this);if($t.next().hasClass('sub-menu')||$t.next().is('ul')){$t.append('<span class="fa fa-angle-down mobile-menu-submenu-arrow mobile-menu-submenu-closed"></span>');}});$('.mobile-menu-submenu-arrow').click(function(event){const $t=$(this);if($t.hasClass('mobile-menu-submenu-closed')){$t.parent().siblings('ul').slideDown(300);$t.removeClass('mobile-menu-submenu-closed fa-angle-down').addClass('mobile-menu-submenu-opened fa-angle-up');}else{$t.parent().siblings('ul').slideUp(300);$t.removeClass('mobile-menu-submenu-opened fa-angle-up').addClass('mobile-menu-submenu-closed fa-angle-down');}
event.preventDefault();});$('#mobile-menu li, #mobile-menu li a, #mobile-menu ul').attr('style','');}}
function showHideMobileMenu(){$('#mobile-menu-trigger').click(function(event){const $t=$(this);const $n=$('#mobile-menu');if($t.hasClass('mobile-menu-opened')){$t.removeClass('mobile-menu-opened').addClass('mobile-menu-closed');$n.slideUp(300);}else{$t.removeClass('mobile-menu-closed').addClass('mobile-menu-opened');$n.slideDown(300);}
event.preventDefault();});}
$.fn.equalCols=function(){const sortNumber=function(a,b){return b-a;};const heights=[];$(this).each(function(){heights.push($(this).height());});heights.sort(sortNumber);const maxHeight=heights[0];return this.each(function(){$(this).css({'min-height':maxHeight,});});};function handleequalCols(){if($(window).width()>767){$('.left-side, .separator').equalCols();}else{$('.left-side, .right-side, .separator').css({'min-height':0,});}
if($(window).width()>767){$('.left-side, .right-side, .separator').css({'min-height':0,});$('.left-side, .right-side, .separator').equalCols();}else{$('.left-side, .right-side, .separator').css({'min-height':0,});}}
H==========================================================================When document is ready,do==========================================================================*/$(document).ready(function(){ieViewportFix();setDimensionsPieCharts();animatePieCharts();animateMilestones();animateProgressBars();if(!isTouchDevice()){H enableParallax();}
handleMobileMenu();showHideMobileMenu();handleequalCols();H
$('.timeline-nav .read-more').click(function(){let page=parseInt($(this).attr('data-page'));page++;$(this).attr('data-page',page);H
const ajaxPath=`${siteURL}/wp-admin/admin-ajax.php`;const $leftSide=$('.timeline .left-side');const $rightSide=$('.timeline .right-side');const leftCount=$('.timeline .left-side .blog-post').size();const rightCount=$('.timeline .left-side .blog-post').size();$.post(ajaxPath,{action:'ewf_blog_timelinePosts',page},function(response){if(response.data.state==1){let index=0;for(index=0;index<response.data.posts.length;++index){console.log(response.data.posts[index]);}}},'json');return false;});});$(window).scroll(function(){animateMilestones();animatePieCharts();animateProgressBars();});setTimeout(function(){jQuery([document.documentElement,document.body]).animate({scrollTop:jQuery('#gform_confirmation_wrapper_3').offset().top},2000);},1000);$(window).resize(function(){handleMobileMenu();handleequalCols();});})(window.jQuery);
