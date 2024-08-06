import ExamplePlugin from "./main";
import { App, PluginSettingTab, Setting } from "obsidian";

export class ExampleSettingTab extends PluginSettingTab {
  plugin: ExamplePlugin;

  constructor(app: App, plugin: ExamplePlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    let { containerEl } = this;

    containerEl.empty();
    containerEl.createEl("h1", {text: "Action Item Settings"})

    new Setting(containerEl)
        .setName("Date format")
        .setDesc("Default date format")
        .addText((item) =>
        item
            .setPlaceholder("MMMM dd, yyyy")
            .setValue(this.plugin.settings.dateFormat)
            .onChange(async (value) => {
                this.plugin.settings.dateFormat = value;
                await this.plugin.saveSettings();
            })
        )

    new Setting(containerEl)
        .setName("Insert Text")
        .setDesc("Default text to insert")
        .addText((item) =>
        item
            .setPlaceholder("Text to insert")
            .setValue(this.plugin.settings.insertText)
            .onChange(async (value) => {
                this.plugin.settings.insertText = value;
                await this.plugin.saveSettings();
            })
        )

        new Setting(containerEl)
        .setName("GOAT")
        .setDesc("Are you the Greatest Of All Time?")
        .addToggle((item) =>
        item
            .setValue(this.plugin.settings.goat)
            .onChange(async (value) => {
                this.plugin.settings.goat = value;
                await this.plugin.saveSettings();
            })
        )
    }
}