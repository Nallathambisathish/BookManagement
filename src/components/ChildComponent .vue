<template>
  <div>
    <h2>Child Component</h2>
    <button @click="passValueToParent">Pass Value to Parent</button>
  </div>
</template>

<script>
export default {
  methods: {
    passValueToParent() {
      const valueToPass = 'Hello from Child!';
      this.$emit('childEvent', valueToPass);
    },
  },
};
</script>
