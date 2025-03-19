/*参考：https://naruweb.com/coding/scrollheader/ */

$(window).scroll(function () {           /* スクロールされた時 */
    var pos = $('main').offset();          /* mvを過ぎたmainタグの高さを取得して変数[pos]に格納 */
    if ($(this).scrollTop() > pos.top) {   /* 変数[pos]より、スクロールされていたら */
      $('header').fadeIn();                /* ヘッダーをふわっと表示 */
    } else {                               /* それ以外の場合 */
      $('header').fadeOut();               /* ヘッダーをふわっと非表示 */
    }
  });
  
  $(function () {
    $('#js-hamburger-menu, .navigation__link').on('click', function () {
      $('.navigation').slideToggle(500)
      $('.hamburger-menu').toggleClass('hamburger-menu--open')
    });
  });
  