const async = require('jquery');
function fileChange(event) {
  var $title = this.$('file-picker');
  // Default 'title' -- remove C:\fakepath if it is added
  $title.val(this.$('file-picker')[0].value.replace('C:\\fakepath\\', ''));
}
