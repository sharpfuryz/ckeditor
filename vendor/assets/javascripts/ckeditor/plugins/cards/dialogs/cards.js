CKEDITOR.dialog.add('cards', function(editor) {
  return {
    title : 'Вставить карточку',
    minWidth : 400,
    minHeight : 200,
    onOk: function() {
      var num = this.getContentElement( 'cards', 'number').getInputElement().getValue();
      var hed = this.getContentElement( 'cards', 'header').getInputElement().getValue();
      var txt = this.getContentElement( 'cards', 'text').getInputElement().getValue();
      var element = CKEDITOR.dom.element.createFromHtml(
        '<div style="line-height: 20.8px; position: relative; box-shadow: rgba(50, 50, 50, 0.74902) 2px 2px 8px 0px; left: 10px; top: 10px; vertical-align: top; width: 600px;">'+
        '<div style="position: relative; min-height: 88px; background-color: rgb(193, 140, 243);">'+
        '<div style="font-weight: 600; position: absolute; font-size: 18px; line-height: 48px; vertical-align: middle; top: 20px; right: 20px; color: rgb(255, 255, 255); text-align: center; width: 48px; height: 48px; border-radius: 50%; border: 2px solid rgb(255, 255, 255);">'+
        num + '</div>'+
        '<div style="color: rgb(255, 255, 255); margin: auto; position: relative; top: 20px; left: 20px; padding-bottom: 40px;"><span style="font-size:20px">'+
        hed + '</span></div>'+
        '</div>'+
        '<div style="position: relative; top: 20px; left: 20px; padding-bottom: 40px;">'+
        '<table border="0" cellpadding="10" cellspacing="1" style="width:560px">'+
        '	<tbody>'+
        '		<tr>'+
        '			<td>'+
        '			<p>' + txt + '</p>'+
        '			</td>'+
        '		</tr>'+
        '	</tbody>'+
        '</table>'+
        '</div>'+
        '</div>' );
      editor.insertElement( element );
      editor.insertHtml( '<p>&nbsp;</p><p>&nbsp;</p>' );
    },
    contents : [{
      id : 'cards',
      label : 'First Tab',
      title : 'First Tab',
      elements : [{
        id : 'number',
        type : 'text',
        label : 'Номер',
      },
      {
        id : 'header',
        type : 'text',
        label : 'Заголовок',
      },
      {
        id : 'text',
        type : 'text',
        label : 'Текст',
      }]
    }]
  };
});
