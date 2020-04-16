
import Helper from './helper';

 
// LOAD HEADER MENU TO MODAL
!function initLoadNavbarToModal() {
    let headerNavbar = document.querySelector('.header__nav');
    let modalMenuNavbar = document.querySelector('.modal-menu__nav');
 
    if(Helper.elementExists(headerNavbar) && Helper.elementExists(modalMenuNavbar)) {
        headerNavbar = headerNavbar.cloneNode(true);
    }
    else return;
    headerNavbar.firstElementChild.classList.remove('row-mg');
    
    modalMenuNavbar.innerHTML = headerNavbar.innerHTML.replace(/header/ig, "modal-menu");

    [...modalMenuNavbar.querySelectorAll('.navbar-item--sub')].forEach(item => {
    
        item.firstElementChild.addEventListener('click', function(e) {
           e.preventDefault();
        })
    })
}();





// SVG SPRITE

;( function( window, document ) {
 
    const file = 'img/svg/svg-map.html',
        revision = 1;
 
    if( !document.createElementNS || !document.createElementNS( 'http://www.w3.org/2000/svg', 'svg' ).createSVGRect )
        return true;
 
    let isLocalStorage = 'localStorage' in window && window[ 'localStorage' ] !== null,
        request,
        data,
        insertIT = function()
        {
            document.body.insertAdjacentHTML( 'afterbegin', data );
        },
        insert = function()
        {
            if( document.body ) insertIT();
            else document.addEventListener( 'DOMContentLoaded', insertIT );
        };
 
    if( isLocalStorage && localStorage.getItem( 'inlineSVGrev' ) == revision )
    {
        data = localStorage.getItem( 'inlineSVGdata' );
        if( data )
        {
            insert();
            return true;
        }
    }
 
    try
    {
        request = new XMLHttpRequest();
        request.open( 'GET', file, true );
        request.onload = function()
        {
            if( request.status >= 200 && request.status < 400 )
            {
                data = request.responseText;
                insert();
                if( isLocalStorage )
                {
                    localStorage.setItem( 'inlineSVGdata',  data );
                    localStorage.setItem( 'inlineSVGrev',   revision );
                }
            }
        }
        request.send();
    }
    catch( e ){}
 
}( window, document ) );



