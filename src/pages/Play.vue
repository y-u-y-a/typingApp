<template>
  <div id="play" class="row justify-content-around">

    <template v-if="!is_clicked_space">
      <div class="width-25 m-auto text-center">
        <header class="p-2 b-font-24">タイピングスタート！</header>
        <div class="p-1 bg-white solid-black-2 radius-5">
          スペースを押すとスタートします
        </div>
      </div>
    </template>

    <template v-if="is_clicked_space">
      <div class="width-25 m-auto text-center">
        <header class="p-2 b-font-24">時間：00：30</header>
        <!-- 単語 -->
        <ul v-for="(word, i) in words" :key="i">
          <li
            v-if="word_index == i"
            class="p-2 bg-white solid-black-2 radius-5">
              <div class ="mb-2 font-20">{{ word.ja }}</div>
              <!-- 文字 -->
              <ul class="row justify-content-around font-50">
                <li
                  v-for="(char, j) in word.en"
                  :key="j"
                  :id="`${word.en}_${j}`"
                  class="circle-font c-accent"
                >{{ char }}</li>
              </ul>
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>


<script>

export default {

  data(){
    return {
      words: [
        { ja: "携帯電話", en: "phone" },
        { ja: "りんご", en: "apple" },
        { ja: "ノートパソコン", en: "laptop" },
        { ja: "窓", en: "window" },
        { ja: "ぞう", en: "elephant" }
      ],
      word_index: 0,
      char_index: 0,
      is_clicked_space: false
    }
  },

  computed: {
    target_word() {
      return this.words[this.word_index].en;
    },
    target_char() {
      return this.target_word[this.char_index];
    }
  },

  mounted(){
    window.addEventListener("keydown", this.gameStart, false);
  },

  methods: {

    gameStart ( event ) {

      this.is_clicked_space = event.code == "Space"
        ? true
        : false;

      if( this.is_clicked_space ){
        window.removeEventListener( "keydown", this.gameStart );
        window.addEventListener( "keydown", this.checkTyping, false );
      }
    },

    checkTyping ( event ){

      let typed_char = event.key;
      let target_id = `${this.target_word}_${this.char_index}`;
      let el = document.getElementById(target_id);


      if( typed_char == this.target_char ){

        // 文字色変更
        el.classList.remove("c-accent");
        el.classList.add("c-white");
        // 単語の更新
        if( this.isLastChar() ){

          this.char_index = 0; // reset
          this.word_index += 1;

          // 最後の単語
          if( this.isLastWord() ){
            location.href = "/";
          }
          return;
        }
        // 文字の更新
        this.char_index += 1;
        return;
      }
    },

    // 最後の文字
    isLastChar () {
      let last_index = this.target_word.length -1;
      return this.char_index == last_index
        ? true
        : false;
    },
    // 最後の単語
    isLastWord () {
      let last_index = this.words.length;
      return this.word_index == last_index
        ? true
        : false;
    },
  }
}
</script>


<style lang="scss" scoped>

@import '../assets/sass/colors';

#play{
  min-height: calc(100vh - 10rem);
}
.circle-font {
  text-shadow:
    1px 1px 0 $black,
    -1px 1px 0 $black,
    1px -1px 0 $black,
    -1px -1px 0 $black;
}
</style>
