<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useSettingsStore } from '@/stores/settings'
import axios from 'axios'
import { Event, PaginatedResponse } from '@/types/event'

const settings = useSettingsStore()
const events = ref<Event[]>([])
const currentPage = ref(1)

const fetchEvents = async (page: number) => {
  const url = `${settings.restGraphqlBaseUrl}/events`

  try {
    let params: any = { limit: 10 }

    if (settings.paginationMode === 'offset') {
      params.offset = (page - 1) * 10
    } else {
      params.cursor = ''
    }

    const response: PaginatedResponse<Event> = await axios.get(url, { params })
    events.value = response.data
    currentPage.value = page

  } catch (e) {
    console.error('Error fetching events:', e)
  }

}

onMounted(() => {
  fetchEvents(1)
})
</script>

<template>
  <h2>Events List (API Practice)</h2>
  <p>Mode: {{ settings.paginationMode }}</p>
  <div v-if="events.length">
    <p v-for="event in events" :key="event.id">
      Test paragraph for event ID: {{ event.id }}
    </p>
  </div>
  <p v-else>Loading events or list is empty...</p>
</template>

<style scoped>

</style>