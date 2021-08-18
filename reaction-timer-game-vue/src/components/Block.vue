<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
    click me if you can!
  </div>
</template>

<script>
export default {
  props: ["delay"],
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer);
      console.log(this.reactionTime);
      this.$emit("end", this.reactionTime);
    },
  },
};
</script>

<style>
.block {
  width: 18rem;
  padding: 2rem 0;
  margin: 1rem auto;
  color: #27272b;
  background-color: #fad161;
  text-align: center;
  border-radius: 0.5rem;
}
</style>
