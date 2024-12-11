import React from 'react';
import { FlexPlugin } from '@twilio/flex-plugin';
import ConversationRelayComponent from './components/ConversationRelayComponent';
import { CustomizationProvider } from "@twilio-paste/core/customization";

const PLUGIN_NAME = 'FlexCrDemoPlugin';

export default class FlexCrDemoPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   */
  async init(flex, manager) {

    flex.setProviders({
      PasteThemeProvider: CustomizationProvider
    });

    //add call summary component
    flex.CallCanvas.Content.add(<ConversationRelayComponent key="cr-component" />, {
      sortOrder: -1, // Set a low sortOrder value to place it at the top
      if: (props) => props.task.attributes !== undefined,
    });
  }
}
