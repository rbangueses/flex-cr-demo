import React from 'react';
import { withTaskContext } from '@twilio/flex-ui';
import { Box } from '@twilio-paste/core';
import {Callout, CalloutHeading, CalloutText} from '@twilio-paste/core/callout';

class ConversationRelayComponent extends React.Component {
    constructor(props) {
        super(props);
    }
  
    render () {
        const { task } = this.props;
        // Access the call summary from task attributes
        console.log("task attributes");
        console.log(task.attributes);
        const callSummary = task.attributes.callSummary;
        const sentiment = task.attributes.sentiment;
        const reason = task.attributes.reason;

        return (
            <Box>
               <Callout variant='new'>
                    <CalloutHeading as="h2">Handover reason: {reason} </CalloutHeading>
                    <CalloutHeading as="h2">Call Summary </CalloutHeading>
                    <CalloutText>{callSummary}</CalloutText>
                    <CalloutHeading as="h2">Sentiment is {sentiment}</CalloutHeading>
                </Callout>
            </Box>
          );
    }
};

export default withTaskContext(ConversationRelayComponent);