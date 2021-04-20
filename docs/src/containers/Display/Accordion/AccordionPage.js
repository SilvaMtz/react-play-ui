import React from "react";
import { Accordion, ActionButton, PanelCard } from "react-play-ui";

export const AccordionPage = (props) => {
  return (
    <div>
      <h2>Accordion</h2>
      <Accordion
        icon="collection"
        buttonPaddingSize="s"
        paddingSize="xl"
        arrowDisplay="right"
        id="accordion1"
        buttonContent="Click me to toggle"
      >
        <PanelCard>
          Any content inside of <strong>Accordion</strong> will appear here.
        </PanelCard>
      </Accordion>
      <br/>
      <Accordion
        buttonPaddingSize="l"
        extraAction={
          <ActionButton color="primary" onClick={() => {}}>
            ACTION!
          </ActionButton>
        }
        paddingSize="m"
        arrowDisplay="left"
        id="accordion2"
        buttonContent="I am a plain accordion with extra action"
      >
        <PanelCard>
          Any content inside of <strong>Accordion</strong> will appear here.
        </PanelCard>
      </Accordion>
      <br/>
      <h3>Loading Accordion</h3>
      <Accordion
        buttonPaddingSize="l"
        paddingSize="m"
        arrowDisplay="left"
        id="accordion3"
        buttonContent="I am a loading Accordion"
        isLoading={true}
      >
        <PanelCard>
          Any content inside of <strong>Accordion</strong> will appear here.
        </PanelCard>
      </Accordion>
    </div>
  );
};
