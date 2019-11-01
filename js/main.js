$(function(){
  $('textPath').on('click',function(){
    console.log($(this).attr('xlink:href'));
    $('.wrapper').removeClass('one two three four five six seven eight nine ten eleven twelve');
    switch ($(this).attr('xlink:href')) {
      case "#curve-1":
        $('.wrapper').addClass('one');
        break;
      case "#curve-2":
        $('.wrapper').addClass('two');
        break;
      case "#curve-3":
        $('.wrapper').addClass('three');
        break;
      case "#curve-4":
        $('.wrapper').addClass('four');
        break;
      case "#curve-5":
        $('.wrapper').addClass('five');
        break;
      case "#curve-6":
        $('.wrapper').addClass('six');
        break;
      case "#curve-7":
        $('.wrapper').addClass('seven');
        break;
      case "#curve-8":
        $('.wrapper').addClass('eight');
        break;
      case "#curve-9":
        $('.wrapper').addClass('nine');
        break;
      case "#curve-10":
        $('.wrapper').addClass('ten');
        break;
      case "#curve-11":
        $('.wrapper').addClass('eleven');
        break;
      case "#curve-12":
        $('.wrapper').addClass('twelve');
        break;
        
}
  });
});