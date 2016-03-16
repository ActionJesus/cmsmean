var mongoose = require('mongoose');

var TestSchema = {
  tagname: String,
  tagtext: String,
  author: String
};

var Test = mongoose.model("test", TestSchema, "test");


/*Content.remove({}, function(err, data) {
  Content.create(
    {
      title: "Hello World",
      text: "From the other side",
      author: "niha"
    },
    {
      title: "Hello Cruel World",
      text: "From the inside",
      author: "ahin"
    }    
  )
})
*/

module.exports = Test;