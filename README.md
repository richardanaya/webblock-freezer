A simple web component for immutable data

```html
<data-freezer id="model">{"count":1}</data-freezer>
```

initialized with json as its content all updates run through the property "data"

```javascript
var el = document.getElementById("model");
el.data.count // 1
el.observe("data",function(newData){
  console.log(newData)
})
el.data.set("count",2);
```
