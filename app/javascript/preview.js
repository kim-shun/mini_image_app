document.addEventListener('DOMContentLoaded', function(){
  if ( document.getElementById('message_image')){
    const ImageList = document.getElementById('image-list');
    document.getElementById('message_image').addEventListener('change', function(e){
      const imageContent = document.querySelector('img'); //画像が表示されている場合のみ、すでに存在している画像を削除する、画像を編集可能にする
      if (imageContent){
        imageContent.remove();
      }
      const file = e.target.files[0];
      const blob = window.URL.createObjectURL(file);

      const imageElement = document.createElement('div'); //画像を表示するためのdiv要素を生成
      const blobImage = document.createElement('img'); //表示する画像を生成
      blobImage.setAttribute('src', blob);

      //生成したHTMLの要素をブラウザに表示、指定した親要素の中に要素を追加するメソッド
      imageElement.appendChild(blobImage);
      ImageList.appendChild(imageElement);
    });
  };
});