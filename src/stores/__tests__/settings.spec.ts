import { setActivePinia, createPinia } from 'pinia';
import { useSettingsStore } from '@/stores/settings';
import { describe, it, expect, beforeEach } from 'vitest';

// 1. Setup the testing environment
beforeEach(() => {
  // Create a fresh Pinia instance before each test
  // This ensures tests are isolated
  setActivePinia(createPinia());
});

// 2. Define the test suite
describe('Settings Store', () => {
  it('resets all settings to default values', () => {
    const settingsStore = useSettingsStore();

    // 3. Arrange: Change some values from the default settings
    settingsStore.restGraphqlBaseUrl = 'http://test-server.com:8080';
    settingsStore.paginationMode = 'cursor';

    // Verify they are changed
    expect(settingsStore.restGraphqlBaseUrl).toBe('http://test-server.com:8080');
    expect(settingsStore.paginationMode).toBe('cursor');

    // 4. Act: Call the reset action
    settingsStore.resetSettings();

    // 5. Assert: Check if values are back to defaults (defined in settings.ts)
    expect(settingsStore.restGraphqlBaseUrl).toBe('http://localhost:3000');
    expect(settingsStore.paginationMode).toBe('offset');
  });

  it('correctly sets new URLs using the setUrls action', () => {
    const settingsStore = useSettingsStore();
    const newUrls = {
      restGraphqlBaseUrl: 'https://prod-api.com',
      websocketUrl: 'wss://prod-ws.com',
      grpcUrl: 'https://prod-grpc.com',
    };

    settingsStore.setUrls(newUrls);

    expect(settingsStore.restGraphqlBaseUrl).toBe('https://prod-api.com');
    expect(settingsStore.websocketUrl).toBe('wss://prod-ws.com');
    expect(settingsStore.grpcUrl).toBe('https://prod-grpc.com');
  });
});