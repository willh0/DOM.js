#DOM

A tiny DOM templating engine for javascript.

Syntax is stolen from [MochiKit](http://MochiKit.com/), because I think it's the friendliest way to represent DOM elements with Javascript.

Syntax looks like
```
document.getElementById("content").innerHTML = DIV({"id":"someId"}, 
	P{"class":"someClass"}, "hello there ", A({"href":"http://google.com"}click me))
);

```

