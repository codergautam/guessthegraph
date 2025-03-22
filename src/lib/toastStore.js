import { writable } from 'svelte/store';

// Create a toast store that can be imported anywhere
export const toastStore = writable({
  visible: false,
  type: 'success', // 'success', 'error', 'warning'
  message: '',
  duration: 3000 // default duration in milliseconds
});

let timeout;

// Function to show toast notification
export function showToast(type, message, duration = 3000) {
  if (timeout) clearTimeout(timeout);

  toastStore.set({
    visible: true,
    type,
    message,
    duration
  });

  timeout = setTimeout(() => {
    toastStore.update(t => ({ ...t, visible: false }));
  }, duration);
}
