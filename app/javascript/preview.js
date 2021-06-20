document.addEventListener('DOMContentLoaded', function(){
  if ( document.getElementById('message_image')){
    const ImageList = document.getElementById('image-list');

    const createImageHTML = (blob) => { //選択した画像を表示する関数
      const imageElement = document.createElement('div'); //画像を表示するためのdiv要素を生成
      imageElement.setAttribute('class', "image-element")
      let imageElementNum = document.querySelectorAll('.image-element').length

      const blobImage = document.createElement('img'); //表示する画像を生成
      blobImage.setAttribute('src', blob);

      const inputHTML = document.createElement('input') //ファイル選択ボタンを生成
      inputHTML.setAttribute('id', `message_image_${imageElementNum}`)
      inputHTML.setAttribute('name', 'message[images][]')
      inputHTML.setAttribute('type', 'file')

      //↑<input id="message_image_[番号]" name="message[images][]" type="file">を生成

      //生成したHTMLの要素をブラウザに表示、指定した親要素の中に要素を追加するメソッド
      imageElement.appendChild(blobImage);
      imageElement.appendChild(inputHTML)
      ImageList.appendChild(imageElement);
    };

    document.getElementById('message_image').addEventListener('change', function(e){
      
      const file = e.target.files[0];
      const blob = window.URL.createObjectURL(file);

      createImageHTML(blob);
    });
  };
});