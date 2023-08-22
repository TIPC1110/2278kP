import { CommandInteraction, EmbedBuilder, SlashCommandBuilder } from "discord.js";
import { i18n } from "../utils/i18n";
import { bot } from "../index";

export default {
  data: new SlashCommandBuilder().setName("help").setDescription(i18n.__("Help.description")),
  async execute(interaction: CommandInteraction) {
    let commands = bot.slashCommandsMap;

    let HelpEmbed = new EmbedBuilder()
      .setTitle(i18n.__mf("Help.embedTitle", { botname: interaction.client.user!.username }))
      .setImage("https://cdn.discordapp.com/attachments/917227261139255326/1143095416792031312/721f240d6fa4e974e29d0a92a820a41e.png")
      .setDescription(i18n.__("Help.embedDescription"))
      .setColor("#F8AA2A");

    commands.forEach((cmd) => {
      HelpEmbed.addFields({
        name: `**${cmd.data.name}**`,
        value: `${cmd.data.description}`,
        inline: true
      });
    });

    HelpEmbed.setTimestamp();

    return interaction.reply({ embeds: [HelpEmbed] }).catch(console.error);
  }
};
