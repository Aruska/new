import { ref } from 'vue'

const isPlaying = ref(false)
let playerInstance = null

export function useYoutubeBg() {
  const setPlayer = (player) => {
    playerInstance = player
  }

  const clearPlayer = () => {
    playerInstance = null
    isPlaying.value = false
  }

  const togglePlayback = () => {
    if (!playerInstance) return

    // YouTube PlayerState: 1 = PLAYING, 2 = PAUSED
    const state = playerInstance.getPlayerState?.()
    if (state === 1) {
      playerInstance.pauseVideo()
    } else {
      playerInstance.playVideo()
    }
  }

  return {
    isPlaying,
    setPlayer,
    clearPlayer,
    togglePlayback
  }
}