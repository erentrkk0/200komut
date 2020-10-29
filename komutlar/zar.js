const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Zar Atılıyor...').then(message => {
      var zarlar = [':game_die:**Çıkan Sayı: 1**',':game_die:**Çıkan Sayı: 2**',':game_die:**Çıkan Sayı: 3**',':game_die:**Çıkan Sayı: 4**',':game_die:**Çıkan Sayı: 5**',':game_die:**Çıkan Sayı: 6**'];
      var zar = zarlar[Math.floor(Math.random() * zarlar.length)];
            message.edit(`${zar}`);
 });
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['zarat', 'zar-at', 'atzar', 'atbizar'],
  permLevel: 0
};

exports.help = {
  name: 'zar-at',
  description: 'Zar atarsın.',
  usage: 'zar-at',
};
