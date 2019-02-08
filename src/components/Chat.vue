<template>
  <div class="chat container">
    <h2 class="center teal-text">Ninja Chat</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages" v-chat-scroll>
          <li v-for="(message, i) in messages" :key="i">
            <span class="teal-text" style="text-transform: capitalize;">{{ message.name }}</span>
            <span class="grey-text text-darken-3">{{ message.message }}</span>
            <span class="grey-text time">{{ moment(message.date).fromNow() }}</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <NewMessage :name="name"/>
      </div>
    </div>
  </div>
</template>

<script>
import NewMessage from "@/components/NewMessage";
import db from "@/firebase/init";
import moment from "moment";
export default {
  name: "Chat",
  components: {
    NewMessage
  },
  props: ["name"],
  data() {
    return {
      messages: [],
      moment
    };
  },
  created() {
    db.collection("messages")
      .orderBy("date")
      .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(doc => {
          if (doc.type === "added") {
            this.messages.push({
              id: doc.doc.id,
              ...doc.doc.data()
            });
          }
        });
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.messages {
  max-height: 300px;
  overflow: auto;
}
.messages::-webkit-scrollbar {
  width: 3px;
}
.messages::-webkit-scrollbar-track {
  background: #dddddd;
}
.messages::-webkit-scrollbar-thumb {
  background: #aaaaaa;
}
.messages li {
  margin-top: 1em;
}
.chat h2 {
  font-size: 2.6em;
  margin-bottom: 40px;
}
.chat span {
  font-size: 1.4em;
}
.time {
  display: block;
  font-size: 1em !important;
}
</style>
