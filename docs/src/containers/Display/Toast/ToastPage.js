import React from 'react';
import { FlexGrid, FlexItem, FlexGroup, Toast } from 'react-play-ui';

export const ToastPage = (props) => {

  return (
    <div>
      <h2>Toast</h2>
      <FlexGrid columns={3}>
        <FlexItem>
          <FlexGroup alignItems="center" justifyContent="center">
            <FlexItem grow={false}>
              <Toast onClose={()=>{}} color="primary" icon="academicCap" title="Toast to this!">
                <p style={{margin: 0, marginTop: 6}}>
                  The quick brown fox jumped over the lazy dog.
                  So the dog got up and chased after the fox.
                </p>
              </Toast>
            </FlexItem>
          </FlexGroup>
        </FlexItem>

        <FlexItem>
          <FlexGroup alignItems="center" justifyContent="center">
            <FlexItem grow={false}>
              <Toast color="success" title="Title only!" icon="checkCircle" />
            </FlexItem>
          </FlexGroup>
        </FlexItem>

        <FlexItem>
          <FlexGroup alignItems="center" justifyContent="center">
            <FlexItem grow={false}>
              <Toast color="accent">
                Hi there!
              </Toast>
            </FlexItem>
          </FlexGroup>
        </FlexItem>

        <FlexItem>
          <FlexGroup alignItems="center" justifyContent="center">
            <FlexItem grow={false}>
              <Toast color="warning">
                Hi there!
              </Toast>
            </FlexItem>
          </FlexGroup>
        </FlexItem>

        <FlexItem>
          <FlexGroup alignItems="center" justifyContent="center">
            <FlexItem grow={false}>
              <Toast color="danger">
                Hi there!
              </Toast>
            </FlexItem>
          </FlexGroup>
        </FlexItem>

        <FlexItem>
          <FlexGroup alignItems="center" justifyContent="center">
            <FlexItem grow={false}>
              <Toast color="default" onClose={()=>{}}>
                Hi there!
              </Toast>
            </FlexItem>
          </FlexGroup>
        </FlexItem>

      </FlexGrid>

    </div>
  )
}