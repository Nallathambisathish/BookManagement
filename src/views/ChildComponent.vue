<template>
  <div class="Child">
    <!--<h4>Child Component</h4>-->
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
};
</script>
