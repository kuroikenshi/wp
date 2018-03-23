import _ from 'lodash';
import './style.css';
import './style2.less';
import Icon from './icon.png';

function component() {
	var element = document.createElement('div');

	element.innerHTML = _.join(['Hello', 'Webpack', 'zzz'], ' ');
	element.classList.add('hello');

	var myIcon = new Image();
	myIcon.src = Icon;

	element.appendChild(myIcon);

	return element;
}

document.body.appendChild(component());
