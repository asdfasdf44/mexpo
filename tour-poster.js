[
  { card: 1, file: 'poster_1.png', alt: '첫 번째 전시 포스터' },
  { card: 2, file: 'poster_2.png', alt: 'CORETIK 제몽 온라인 팝업 포스터' }
].forEach(function(item) {
  const tourVisual = document.querySelector('.tour-card:nth-child(' + item.card + ') .visual');
  const poster = document.createElement('img');
  poster.src = item.file;
  poster.alt = item.alt;
  poster.className = 'tour-poster';
  tourVisual.appendChild(poster);
});
