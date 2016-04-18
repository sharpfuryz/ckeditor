CKEDITOR.plugins.add('cards', {
  requires: 'dialog',
  icons: 'cards',
  init: function(editor){
    var command = editor.addCommand('cards', new CKEDITOR.dialogCommand('cards'));
    command.modes = {wysiwyg:1, source:1};
    command.canUndo = true;

    editor.ui.addButton('cards', {
      label: 'Вставить карточку',
      command: 'cards',
      toolbar: 'cards'
    });

  CKEDITOR.dialog.add('cards', this.path + 'dialogs/cards.js');
}
});
