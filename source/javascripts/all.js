$(document).ready(function(){
 $(".toggle__btn").click(function () {
     $('.menu').toggleClass("active");
 });

var copyBtn = document.querySelector('.copyBtn');
  copyBtn.addEventListener('click', function(event){
    // Выборка текста скрипта
    var script = document.querySelector('.copyCode');
    var range = document.createRange();
    range.selectNode(script);
    window.getSelection().addRange(range);
    try{
      // Теперь, когда мы выбрали текст, выполним команду копирования
      var successful = document.execCommand('copy');
      var msg = successful ? 'скопирован' : 'не скопирован';
      console.log('Текст был ' + msg);
    }
    catch(err){
      console.log('Текст не скопирован');
    }
    // Снятие выделения
    window.getSelection().removeAllRanges();
  });

});
