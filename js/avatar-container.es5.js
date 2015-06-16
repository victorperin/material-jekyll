'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var AvatarContainer = (function (_HTMLElement) {
    function AvatarContainer() {
        _classCallCheck(this, AvatarContainer);

        if (_HTMLElement != null) {
            _HTMLElement.apply(this, arguments);
        }
    }

    _inherits(AvatarContainer, _HTMLElement);

    _createClass(AvatarContainer, [{
        key: 'createdCallback',
        value: function createdCallback() {
            var home_page = this.getAttribute('home_page');
            var name = this.getAttribute('name');
            var subtitle = this.getAttribute('subtitle');
            var size = this.getAttribute('image-size');
            var url = 'http://www.gravatar.com/avatar/' + encodeURI(this.getAttribute('email_hash')) + '?s=' + (size ? size : '200');

            this.setAttribute('style', 'text-align: center;');
            var shadow = this.createShadowRoot();
            var div = shadow.appendChild(document.createElement('div'));
            div.setAttribute('style', 'text-align: center;padding-top: 20px;padding-bottom: 20px;');
            var innerString = '<a class=\'avatar-link\' href="' + home_page + '">';
            innerString += '<img src="' + url + '" style="display: block;margin-left: auto;margin-right: auto;border-radius: 100%;"/>';
            innerString += '<h2>' + name + '</h2>';
            innerString += '<p>' + subtitle + '</p>';
            innerString += '</a>';
            innerString += '<style>a.avatar-link,a.avatar-link:hover,a.avatar-link:visited {color:#fff;text-decoration: none;}</style>';
            div.innerHTML = innerString;
        }
    }]);

    return AvatarContainer;
})(HTMLElement);

var Mytag = document.registerElement('avatar-container', {
    prototype: AvatarContainer.prototype });
