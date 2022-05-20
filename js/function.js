$(function(){
  
  const $gnb = $('header > nav > .gnb > li');
  const $lnb = $gnb.children('.lnb-container');
  
  const $search = $('header > nav > .search');
  const $searchClose = $('header > nav > .searchClose');
  const $searchText = $('header > .search-container');
  
  const $btnClr = $('article > .clr');
  
  let idx = null;
  
  //메뉴 - mouseenter, mouseleave
  $gnb.on('mouseenter', function(){

    idx = $gnb.index(this);
    
    $gnb.eq(idx).siblings().children('a').css({color:'#949494'});

    $lnb.eq(idx).show();

  });

  $gnb.on('mouseleave', function(){

    idx = $gnb.index(this);

    $gnb.eq(idx).siblings().children('a').css({color:'#000'});

    $lnb.hide();
  })
  
  //검색 - slideDown
  $search.on('click', function(evt){
    evt.preventDefault();
    
    $search.hide();
    $searchClose.show();
    $searchText.stop().slideDown();
    
  });
  
  $searchClose.on('click', function(evt){
    evt.preventDefault();
    
    $searchClose.hide();
    $search.show();
    $searchText.stop().slideUp();

  });
  
  //관람예약 - slideUp
  $btnClr.on('click', function(evt){
    evt.preventDefault();
    
    $('article').slideUp();
    $('.bar').show();
  });
  
  //top버튼
  $('aside').children('.top').on('click', function(evt){
    evt.preventDefault();

    $('html, body').stop().animate({
      scrollTop:0
    });

  });

  //슬라이드
  const $slide = $('.slide > .slide-container > p');
  const $indicator = $('.slide > .indicator > li > a');

  const $btnPrev = $('.prev');
  const $btnNext = $('.next');
  
  let nowIdx = Math.floor(Math.random()*4);
  console.log(nowIdx);
  
  $slide.eq(nowIdx).show();
  $indicator.eq(nowIdx).parent().addClass('on');
  
  const fadeFn = function(){
     $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
     $slide.eq(nowIdx).fadeIn(700).siblings().fadeOut(700);
  };
  
  //인디케이터
  $indicator.on('click', function(evt){
     evt.preventDefault();
     nowIdx = $indicator.index(this);
     
     fadeFn();
  });

  //이전버튼
  $btnPrev.on('click', function(evt){
     evt.preventDefault();

     if(nowIdx>0){
        nowIdx--;
     }else{
        nowIdx=$indicator.length-1;
     }
     fadeFn();
  });

  //다음
  $btnNext.on('click', function(evt){
     evt.preventDefault();

     if(nowIdx<$indicator.length-1){
        nowIdx++;
     }else{
        nowIdx=0;
     }
     fadeFn();
  });



});
