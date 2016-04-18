CKEDITOR.dialog.add('comment', function(editor) {
  return {
    title : 'Вставить комментарий',
    minWidth : 400,
    minHeight : 200,
    onOk: function() {
      var nam = this.getContentElement( 'comment', 'name').getInputElement().getValue();
      var hed = this.getContentElement( 'comment', 'header').getInputElement().getValue();
      var txt = this.getContentElement( 'comment', 'text').getInputElement().getValue();
      editor.insertHtml(
        '<table border="0" cellpadding="1" cellspacing="1" style="border-bottom:solid; border-color:rgb(193, 140, 243); line-height:20.8px; width:620px">'+
  			'	<tbody>'+
  			'		<tr>'+
  			'			<td style="text-align:center"><img alt="" src="/ckeditor_assets/pictures/7674/content_personnd_1.png" style="height:150px; width:150px" /><br />'+
  			'			<strong><span style="font-size:20px"><span style="font-family:georgia,serif">'+
          nam + '</span></span></strong><br />'+
  			'			<br />'+
  			'			<span style="font-size:18px"><em><span style="font-family:georgia,serif">'+
          hed + '</span></em></span><br />'+
  			'			&nbsp;</td>'+
  			'		</tr>'+
  			'	</tbody>'+
  			'</table>'+
			  '<table border="0" cellpadding="1" cellspacing="1" style="border-bottom:solid; border-color:rgb(193, 140, 243); line-height:20.8px; width:620px">'+
		  	'	<tbody>'+
		  	'		<tr>'+
	  		'			<td>'+
	  		'			<p>&laquo;' + txt + '&raquo;</p>'+
	  		'			</td>'+
	  		'		</tr>'+
	  		'	</tbody>'+
	  		'</table>'+
        '<p>&nbsp;</p>'+
        '<p>&nbsp;</p>' );
    },
    contents : [{
      id : 'comment',
      label : 'First Tab',
      title : 'First Tab',
      elements : [{
        id : 'name',
        type : 'text',
        label : 'Имя',
      },
      {
        id : 'header',
        type : 'text',
        label : 'Описание',
      },
      {
        id : 'text',
        type : 'text',
        label : 'Текст',
      }]
    }]
  };
});
