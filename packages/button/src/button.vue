<template>
  <div>
    <button @click="handleClick"><slot></slot></button>
  </div>
</template>
<script>
export default {
  name: 'LgButton',
  methods: {
    handleClick(e) {
      e.preventDefault();
      this.$emit('click', e)
    }
  },
}
</script>
<style scoped>

</style>