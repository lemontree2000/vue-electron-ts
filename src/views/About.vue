<template>
  <div class="about">
    <webview
      id="foo"
      src="https://ross-sit-local.baozun.com"
      autosize
      min-width="1200"
      style="height: 700px"
      webpreferences="contextIsolation=false"
      nodeintegration
    ></webview>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import { ipcRenderer } from "electron";

@Component({
  mounted() {
    console.log(document.getElementById("foo"));
    // ipcRenderer.sendSync("synchronous-message", "ping");
  },
})
export default class About extends Vue {}
</script>
