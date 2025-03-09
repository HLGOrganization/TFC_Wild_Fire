// 原代码源自Qi_Month的New Create
// 开发者用户信息
const playerNames = [
  "hk11238981",
  "AzureCrab",
  "awhites"
];

const isDeveloper = (playerUsername) => playerNames.includes(playerUsername);

ItemEvents.rightClicked((event) => {
  const { item, player, server } = event;
  if (player.crouching && player.mainHandItem !== "minecraft:air" && isDeveloper(player.username)) {
    if (player.mainHandItem === item.id) {
      player.runCommandSilent("kubejs hand");
    }
  }
});

const handleChatCommand = (event, command, message, target) => {
  const { player, server } = event;
  if (isDeveloper(player.username)) {
    switch (command) {
      case "-efg":
        player.runCommandSilent("effect give @s minecraft:night_vision infinite 255 true");
        player.runCommandSilent("effect give @s minecraft:strength infinite 255 true");
        player.runCommandSilent("effect give @s minecraft:resistance infinite 255 true");
        player.runCommandSilent(`tellraw @s "§6已获得所有BUFF"`);
        event.cancel();
        break;
      case "-efc":
        player.runCommandSilent("effect clear");
        player.runCommandSilent(`tellraw @s "§4已清除所有BUFF"`);
        event.cancel();
        break;
    }
  }
};

PlayerEvents.chat((event) => {
  const { player, message, server } = event;
  const trimmedMessage = message.trim().toLowerCase();
  const target = trimmedMessage.startsWith("-kle") ? "@a" : "@s";
  handleChatCommand(event, trimmedMessage, message, target);
});

PlayerEvents.loggedIn((event) => {
  const { player } = event;
  if (isDeveloper(player.username)) {
    player.tell(Text.translate("message.kubejs.debug", [player.username]));
    player.tell(Text.translate("message.kubejs.conventcommand", [player.username]));
  }
});
