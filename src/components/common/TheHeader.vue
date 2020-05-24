<template>
  <!-- 縦軸中央ぞろえ -->
  <header class="height-4 d-flex flex-column justify-content-around bg-black c-white">
    <div class="row wm-90 justify-content-between align-items-center">
      <h1 class="b-font-28 pointer">タイピングゲーム</h1>

      <!-- sp(navbar-darkが必要) -->
      <div class="sp navbar-dark bg-dark">
        <button
          type="button"
          class="navbar-toggler"
          data-target="#nav-list"
          data-toggle="collapse"
          aria-expanded="false">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      <!-- pc -->
      <ul class="pc row">
        <li class="ml-1 pointer">
          <a class="c-white" href="#">スコア</a>
        </li>
        <li class="ml-1 pointer">
          <a class="c-white" href="#">コース選択</a>
        </li>
        <li class="ml-1 pointer">
          <a class="c-white" href="#">マイページ</a>
        </li>
      </ul>
    </div>
  </header>
</template>


<script>
export default {
}
</script>
