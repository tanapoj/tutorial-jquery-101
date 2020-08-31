## Query Elements

### First Match Element
```js
//jQuery
$('.ele').first()
$('.ele:first')

//Vanilla
document.querySelector('.box')
```

### All Elements
```js
//jQuery
$('.ele')

//Vanilla
document.querySelectorAll('.box')
```

### Nested Element
```js
//jQuery
let container = $('#container')
container.find('.box')

//Vanilla
let container = document.querySelector('.container')
container.querySelector('.box')
```

### Action on Elements
```js
//jQuery
$(".box").hide()

//Vanilla
document.querySelectorAll(".box").forEach(box => { box.style.display = "none" })
```


### DOM Traversal
```js
//jQuery
box.next()
box.prev()
box.parent()
box.siblings()

//Vanilla
box.nextElementSibling
box.previousElementSibling
box.parentElement
box.parentNode.children.filter(el => el !== box)
```


```js
//jQuery
$(el).children()
$(el).parent()

//Vanilla
el.children
el.parentNode
```

### Event Handling
```js
//jQuery
ele.click(function(event){})
ele.on('click', function(event){})
ele.on('mouseenter', function(event){})
ele.on('keyup', function(event){})
ele.off('click', function(event){})

//Vanilla
ele.addEventListener('click', (e) => {})
ele.addEventListener('mouseenter', (e) => {})
ele.addEventListener('keyup', (e) => {})
ele.removeEventListener('click', (e) => {})
```


### Delegate
```js
//jQuery
container.on('click', '.box', function(event){})

//Vanilla
container.addEventListener('click', function(event){
  if(event.target.matches('.box')){}
})
```

### Create Event
```js
//jQuery
ele.trigger('click')

//Vanilla
ele.dispatchEvent(new Event('click'))
```

### Styling
```js
//jQuery
ele.css('color', '#000')
ele.css({
  'color': '#000',
  'background': '#FFF',
})

//Vanilla
ele.style.color = '#000'
ele.style.background = '#FFF'
ele.style.cssText = 'color: #000, background: #FFF'
```

```js
//jQuery
box.hide()
box.show()

//Vanilla
box.style.display = 'none'
box.style.display = 'block'
```

### Document Ready
```js
//jQuery
$(document).ready(function(){ /*...*/ })

//Vanilla
(function(callback){
  if (document.readyState != "loading") callback()
  else document.addEventListener("DOMContentLoaded", callback)
})(function(){
   /*...*/
})
```

### Class Properties
```js
//jQuery
box.addClass('active focus')
box.removeClass('active')
box.toggleClass('active')

//Vanilla
box.classList.add('active', 'focus')
box.classList.remove('active')
box.classList.toggle('active')
box.classList.replace('active', 'blur')
```

```js
//jQuery
box.hasClass('active')

//Vanilla
box.classList.contains('active')
```

### Create Virtual Element
```js
//jQuery
let div = $('<div>')
div.text('Hello World!')
div.html('Hello World!')

//Vanilla
let div = document.createElement('div')
div.textContent = 'Hello World!'
div.innerHTML = 'Hello World!'
```

### DOM Manipulate


```js
//jQuery
el.replaceWith('x')
el.html('x')

//Vanilla
el.outerHTML = 'x'
el.innserHTML = 'x'
```

```js
//jQuery
ul.append($('<li>'))
ul.prepend($('<li>'))

//Vanilla
ul.appendChild(document.createElement('li'))
ul.insertBefore(document.createElement('li'), parent.firstChild)
```

```js
//jQuery
el.remove()

//Vanilla
el.parentNode.removeChild(el)
```


```js
//jQuery
$(target).after(element)
$(target).before(element)

//Vanilla
target.insertAdjacentElement('afterend', element)
target.insertAdjacentElement('beforebegin', element)
```



```js
//jQuery
$(el).clone()

//Vanilla
el.cloneNode(true)
```

### Attribute
```js
//jQuery
el.prop('data-x')
el.attr('data-x')
el.data('x')

//Vanilla
el['data-x']
```

```js
//jQuery
el.removeAttr('x')

//Vanilla
el.removeAttribute('x')
```

### Effect
```js
//jQuery
$(el).fadeOut()

//Vanilla
el.classList.add('hide')
el.classList.remove('show')
```
```css
/* With this CSS */
.show {
  opacity: 1;
}
.hide {
  opacity: 0;
  transition: opacity 400ms;
}
```
