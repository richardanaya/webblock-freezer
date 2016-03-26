var WebBlock = require("webblock");
var Freezer = require("freezer-js");
WebBlock({
  tag:"data-freezer",
  render:function(){
    return ""
  },
  init:function(initData){
    this.freezer = new Freezer(initData);
    this.data = this.freezer.get();
    var _this = this;
    this.freezer.on('update', function( newValue ){
       _this.data = newValue;
    });
  },
  createdCallback:function(){
    var initData = {};
    if(this.content.length==1&&this.content[0].nodeName=="#text"){
      initData = JSON.parse(this.content[0].textContent)

    }
    this.init(initData);
  },
  attributes:{
    data:Object
  }
})
