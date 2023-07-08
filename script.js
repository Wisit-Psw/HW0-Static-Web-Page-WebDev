window.addEventListener('DOMContentLoaded', function() {
    // ข้อมูลข่าวสาร (สามารถเปลี่ยนแปลงได้ตามต้องการ)
    var newsData = [
      {
        title: 'ข่าวสารที่ 1',
        content: 'เนื้อหาข่าวสารที่ 1'
      },
      {
        title: 'ข่าวสารที่ 2',
        content: 'เนื้อหาข่าวสารที่ 2'
      },
      {
        title: 'ข่าวสารที่ 3',
        content: 'เนื้อหาข่าวสารที่ 3'
      }
    ];
  
    var newsContainer = document.getElementById('news');
  
    // สร้างโค้ด HTML สำหรับแสดงข่าว
    var newsHTML = '';
    for (var i = 0; i < newsData.length; i++) {
      var newsItem = newsData[i];
      newsHTML += '<div class="article">';
      newsHTML += '<h2 class="title">' + newsItem.title + '</h2>';
      newsHTML += '<p class="content">' + newsItem.content + '</p>';
      newsHTML += '</div>';
    }
  
    // แทรกโค้ด HTML ลงในเว็บ
    newsContainer.innerHTML = newsHTML;
  });
  var slideIndex = 0;
      var slides = document
        .getElementsByClassName("slideshow")[0]
        .getElementsByClassName("slide");
      showSlides(0);
      function showSlides(x) {
        slides[slideIndex].style.display = "none";
        slideIndex = x;
        slides[x].style.display = "block";
      }