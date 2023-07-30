<template>
  <div>
    <h1>Parent Component</h1>
    <p>Value from Child: {{ childValue }}</p>
    <ChildComponent @childEvent="handleChildEvent" />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent,
  },
  data() {
    return {
      childValue: null,
    };
  },
  methods: {
    handleChildEvent(valueFromChild) {
      this.childValue = valueFromChild;
    },
  },
};
</script>
