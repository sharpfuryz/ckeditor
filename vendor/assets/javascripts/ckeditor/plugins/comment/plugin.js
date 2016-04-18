CKEDITOR.plugins.add('comment', {
  requires: 'dialog',
  icons: 'comment',
  init: function(editor){
    var command = editor.addCommand('comment', new CKEDITOR.dialogCommand('comment'));
    command.modes = {wysiwyg:1, source:1};
    command.canUndo = true;

    editor.ui.addButton('comment', {
      label: 'Вставить комментарий',
      command: 'comment',
      toolbar: 'comment'
    });

  CKEDITOR.dialog.add('comment', this.path + 'dialogs/comment.js');
}
});
