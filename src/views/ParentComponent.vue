<template>
  <div class="Parent">
    <h4>Parent Componet</h4>
    <child-component :message="message" />
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
      message: 'Hello from parent!',
    };
  },
};
</script>
