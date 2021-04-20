import React from 'react';
import { Accordion, PanelCard } from 'react-play-ui'

export const AccordionPage = (props) => {

  return (
    <div>
      <h2>Accordion</h2>
      <Accordion id="accordion1" buttonContent="Click me to toggle">
        <PanelCard>
          Any content inside of <strong>Accordion</strong> will appear here.
        </PanelCard>
      </Accordion>
    </div>
  )
}