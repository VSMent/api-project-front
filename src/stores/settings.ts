import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    // Base URL for your API Gateway (where REST/GraphQL lives)
    restGraphqlBaseUrl: 'http://localhost:3000',
    // WebSocket URL (for chat)
    websocketUrl: 'ws://localhost:3000',
    // gRPC-Web URL (for internal logs)
    grpcUrl: 'http://localhost:8080',
    // Default pagination type for testing
    paginationMode: 'offset' as 'offset' | 'cursor',
  }),
  actions: {
    // Action to easily update settings from the Settings page
    setUrls(urls: { restGraphqlBaseUrl: string, websocketUrl: string, grpcUrl: string }) {
      this.restGraphqlBaseUrl = urls.restGraphqlBaseUrl
      this.websocketUrl = urls.websocketUrl
      this.grpcUrl = urls.grpcUrl
    },
    setPaginationMode(mode: 'offset' | 'cursor') {
      this.paginationMode = mode
    },
    resetSettings() {
      this.$reset()
    }
  },
  persist: true
})
