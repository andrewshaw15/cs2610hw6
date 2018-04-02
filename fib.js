// Set the document title
document.title = 'Dynamic Fibonacci Sequence in JavaScript';

// Create a red div in the body
var div = document.createElement('div');
div.setAttribute('class', 'red shadowed stuff-box');
document.querySelector('body').appendChild(div);

// Create form
var form = document.createElement('form');
form.setAttribute('action', '');
form.setAttribute('method', 'post');
div.appendChild(form);

// Add slider
var slider = document.createElement('input');
slider.setAttribute('class', 'red shadowed stuff-box');
slider.setAttribute('type', 'range');
slider.setAttribute('min', '0');
slider.setAttribute('max', '50');
slider.setAttribute('value', '0');
slider.setAttribute('step', '1');
slider.setAttribute('onchange', 'showVal(slider.value)');
form.appendChild(slider);

function showVal(newVal)
{
	slider.value = newVal;
	slider_text.textContent = "Fib(" + slider.value + ")";
	calcFib(newVal);
}

// Add slider value text
var slider_text = document.createElement('p');
slider_text.textContent = "Fib(" + slider.value + ")";
div.appendChild(slider_text);

//Create Fibonacci Sequence Array
var fibArray = [0, 1];

for (i = 2; i <= 50; i++)
{
	fibArray.push(fibArray[i - 2] + fibArray[i - 1]);
}

//Create and add fib div
var fib_text = document.createElement('div');
fib_text.setAttribute('id', 'parent');
div.appendChild(fib_text);

var ind_fib = document.createElement('div');
ind_fib.textContent = "Fib(" + slider.value + ") = " + fibArray[slider.value];
fib_text.appendChild(ind_fib);

calcFib(slider.value);

function calcFib(value)
{
	var parent = document.getElementById('parent');
	parent.remove();

	var fib_text = document.createElement('div');
	fib_text.setAttribute('id', 'parent');
	div.appendChild(fib_text);

	var ind_fib = document.createElement('div');
	ind_fib.textContent = "Fib(0) = " + fibArray[0];
	fib_text.appendChild(ind_fib);

	for (i = 1; i <= value; i++)
	{
		var ind_fib1 = document.createElement('div');
		ind_fib1.textContent = "Fib(" + i + ") = " + fibArray[i];
		fib_text.appendChild(ind_fib1);
	}
}