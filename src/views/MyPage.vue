<template>
  <div class="myPage">
    <img class="rounded-circle" :src="images.img" alt="프로필 사진" style="box-shadow: 5px 5px 20px grey;"/>
    <h1 class="h1-text">안녕하세요.</h1>
    <blockquote style="margin-top: 20px">
      <b>Name</b> <a>양윤재</a> <br>
      <b>Tel</b> <a>010-6830-2913</a> <br>
      <b>E-mail</b> <a>2004yyj@naver.com</a> <br>
      <b>Stack</b> <a>Android, Spring Boot</a>
    </blockquote>
    <a class="no-line-a" href="https://www.facebook.com/profile.php?id=100007922641078">
      <img :src="images.facebook" alt="페이스북" width="20px" height="20px"/>
    </a>
    <a class="no-line-a" href="https://github.com/2004yyj">
      <img :src="images.github" class="no-line-a" style="text-decoration: none" alt="깃허브" width="20px" height="20px">
    </a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: {
        img: require('./static/img.png'),
        github: require("./static/github.png"),
        facebook: require("./static/facebook.svg")
      }
    }
  }
}
</script>