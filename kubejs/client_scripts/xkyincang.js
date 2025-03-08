ClientEvents.tick(event => {
    const player = event.player; // 获取当前玩家对象
  
    // 检查玩家是否有药水效果
    if (player.potionEffects.length > 0) {
      // 隐藏药水效果图标
      const effectsContainer = document.querySelector('.inventory .potion-effects');
      if (effectsContainer) {
        effectsContainer.style.display = 'none'; // 隐藏效果图标
      }
    }
  });