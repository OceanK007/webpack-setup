import {createHTMLElement} from './service';

//console.log(createElement());
document.querySelector('body').appendChild(createElement('Ocean'));

// Creating element.
function createElement(name)
{
    const element = createHTMLElement(`<h1><span>Hello ${name}<span></h1>`);
    //console.log(element);
    
    element.querySelector('span').addEventListener('click', function() {
        console.log("Hello");
    })

    return element;
};