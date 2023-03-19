import { useEffect, useState } from 'react'
import { useStore } from '@/utilities/store'

type AudioVariantsType = {
  [variant: string]: string
}

export const useAudio = () => {
  const [store, updateStore] = useStore()

  const variants: AudioVariantsType = {
    '1up': '/audio/1up/1up.mp3',
    box: '/audio/box/box.mp3',
    brick: '/audio/brick/brick.mp3',
    clear: '/audio/clear/clear.mp3',
    coin: '/audio/coin/coin.mp3',
    death: '/audio/death/death.mp3',
    enter: '/audio/enter/enter.mp3',
    fire: '/audio/fire/fire.mp3',
    gameOver: '/audio/gameOver/gameOver.mp3',
    hurry: '/audio/hurry/hurry.mp3',
    inventory: '/audio/inventory/inventory.mp3',
    jump: '/audio/jump/jump.mp3',
    kick: '/audio/kick/kick.mp3',
    mushroom: '/audio/mushroom/mushroom.mp3',
    pause: '/audio/pause/pause.mp3',
    pipe: '/audio/pipe/pipe.mp3',
    powerUp: '/audio/powerUp/powerUp.mp3',
    stomp: '/audio/stomp/stomp.mp3',
  }

  // Fetch Audio
  useEffect(() => {
    updateStore({ type: 'FETCH_AUDIO' })
  }, [updateStore])

  // Set Audio
  const setAudio = (val: number) => {
    updateStore({ type: 'UPDATE_AUDIO', payload: val })
  }

  // Play Audio
  const playAudio = (type: string) => {
    if (variants[type] && store.audio > 0) {
      const sound = new Audio(variants[type])
      sound.volume = store.audio / 100
      sound.play()
    }
  }

  return {
    audio: store.audio,
    playAudio,
    setAudio,
  }
}
