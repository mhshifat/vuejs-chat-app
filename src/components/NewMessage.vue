<template>
  <div class="new-message">
    <form @submit.prevent="addMessage">
      <label for="new-message">New Message (enter to add):</label>
      <input type="text" autofocus name="new-message" v-model="message">
      <p class="red-text" v-if="feedback">{{ feedback }}</p>
    </form>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "NewMessage",
  props: ["name"],
  data() {
    return {
      message: null,
      feedback: null
    };
  },
  methods: {
    addMessage() {
      if (!this.message) {
        this.feedback = "Please type a message before pressing enter";
      } else {
        this.feedback = null;
        db.collection("messages")
          .add({
            name: this.name,
            message: this.message,
            date: Date.now()
          })
          .catch(err => {
            console.log(err);
          });
        this.message = null;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
