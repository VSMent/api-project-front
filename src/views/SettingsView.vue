<script setup lang="ts">
import { useSettingsStore } from '@/stores/settings'

const settings = useSettingsStore()
const saveSettings = () => {
  alert('saved')
}
</script>

<template>
  <div class="settings-container">
    <h2>⚙️ API & Configuration Settings</h2>

    <div class="input-group">
      <label>REST / GraphQL Base URL:</label>
      <input type="text" v-model="settings.restGraphqlBaseUrl" />
    </div>

    <div class="input-group">
      <label>WebSocket URL (Chat):</label>
      <input type="text" v-model="settings.websocketUrl" />
    </div>

    <div class="input-group">
      <label>Pagination Mode:</label>
      <select v-model="settings.paginationMode">
        <option value="offset">Offset-Based (Page/Limit)</option>
        <option value="cursor">Cursor-Based (Seek)</option>
      </select>
    </div>

    <button @click="saveSettings">Save</button>
  </div>
</template>

<style scoped>

</style>