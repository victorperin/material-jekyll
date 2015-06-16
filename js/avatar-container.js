'use strict';

class AvatarContainer extends HTMLElement {
    createdCallback() {
        var home_page = this.getAttribute('home_page');
        var name = this.getAttribute('name');
        var subtitle = this.getAttribute('subtitle');
        var size = this.getAttribute('image-size');
        var url = 'http://www.gravatar.com/avatar/' + encodeURI(this.getAttribute('email_hash')) + '?s=' + ((size)?size:'200');

        this.setAttribute('style','text-align: center;');
        var shadow = this.createShadowRoot();
        var div = shadow.appendChild(document.createElement('div'));
        div.setAttribute('style','text-align: center;padding-top: 20px;padding-bottom: 20px;');
        var innerString="<a class='avatar-link' href=\""+home_page+"\">";
        innerString+="<img src=\""+url+"\" style=\"display: block;margin-left: auto;margin-right: auto;border-radius: 100%;\"/>";
        innerString+="<h2>"+name+"</h2>";
        innerString+="<p>"+subtitle+"</p>";
        innerString+="</a>";
        innerString+="<style>a.avatar-link,a.avatar-link:hover,a.avatar-link:visited {color:#fff;text-decoration: none;}</style>";
        div.innerHTML=innerString;
    }
}

var Mytag = document.registerElement('avatar-container', {
    prototype: AvatarContainer.prototype,
});
