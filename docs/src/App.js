import React, { useState } from 'react'
import './App.css';
import { ThemeProvider } from 'styled-components';
import {
  GlobalStyles,
  LightTheme,
  DarkTheme,
  ThemeToggler,
  useDarkMode,
  ActionButton,
  Divider,
  FlexGroup,
  FlexItem,
  InputField,
  PanelCard,
  TextField,
  SelectField,
  ContextMenu,
  FormFields,
  Toolbar,
  Modal,
  IconButton,
  Sidenav
} from 'react-play-ui';

const App = () => {

  const [theme, themeToggler] = useDarkMode();
  const [search, setSearch] = useState('');
  const [message, setMessage] = useState('');
  const [selectedBank, setSelectedBank] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [sidenavOpen, setSidenavOpen] = useState(false);
  const themeMode = theme === 'light' ? LightTheme : DarkTheme;

  const panels = [
    {
      id: 0,
      title: 'Create',
      items: [
        {
          name: 'Account',
          icon: 'collection',
          label: 'Account',
          onClick: () => {
            return
          }
        },
        {
          name: 'Credit',
          icon: 'cash',
          label: 'Credit',
          onClick: () => {
            return
          }
        },
        {
          name: 'Transaction',
          icon: 'switchHorizontal',
          label: 'Transaction',
          sublabel: 'More Options',
          panel: 1,
          onClick: () => {
            return
          }
        },
        {
          name: 'Insight',
          icon: 'lightbulb',
          label: 'Insight',
          onClick: () => {
            return
          }
        }
      ]
    },
    {
      id: 1,
      title: 'Transaction',
      items: [
        {
          name: 'Transfer',
          label: 'Transfer',
          icon: 'paperAirplane',
          onClick: () => {
            return
          }
        },
        {
          name: 'Deposit',
          label: 'Deposit',
          icon: 'plusCircle',
          onClick: () => {
            return
          }
        },
        {
          name: 'Withdrawal',
          label: 'Withdrawal',
          icon: 'minusCircle',
          onClick: () => {
            return
          }
        }
      ]
    }
  ]

  const sidenavPanels = [
    {
      id: 0,
      items: [
        {
          name: 'Account',
          icon: 'collection',
          label: 'Account',
          onClick: () => {
            return
          }
        },
        {
          name: 'Credit',
          icon: 'cash',
          label: 'Credit',
          onClick: () => {
            return
          }
        },
        {
          name: 'Transaction',
          icon: 'switchHorizontal',
          label: 'Transaction',
          sublabel: 'More Options',
          panel: 1,
          onClick: () => {
            return
          }
        },
        {
          name: 'Insight',
          icon: 'lightbulb',
          label: 'Insight',
          onClick: () => {
            return
          }
        }
      ]
    },
    {
      id: 1,
      title: 'Transaction',
      items: [
        {
          name: 'Transfer',
          label: 'Transfer',
          icon: 'paperAirplane',
          onClick: () => {
            return
          }
        },
        {
          name: 'Deposit',
          label: 'Deposit',
          icon: 'plusCircle',
          onClick: () => {
            return
          }
        },
        {
          name: 'Withdrawal',
          label: 'Withdrawal',
          icon: 'minusCircle',
          onClick: () => {
            return
          }
        }
      ]
    }
  ]

  const bankOptions = [
    {
      value: 1,
      label: 'Banorte'
    },
    {
      value: 2,
      label: 'BBVA'
    },
    {
      value: 3,
      label: 'Scotiabank'
    },
    {
      value: 4,
      label: 'BanRegio'
    }
  ]

  const toolbarItems = [
    {
      id: 1,
      items: [
        {
          id: 1,
          content: <IconButton onClick={() => setSidenavOpen(true)} icon="menu" />
        }
      ]
    },
    {
      id: 2,
      items: [
        {
          id: 1,
          content: (
            <ActionButton
              color="primary"
              onClick={() => setModalOpen(true)}
              size="compact"
            >
              OPEN MODAL
            </ActionButton>
          )
        },
        {
          id: 2,
          content: <ThemeToggler theme={theme} toggleTheme={themeToggler} />
        }
      ]
    }
  ]

  const sidenavItems = [
    {
      id: 1,
      onClick: () => {},
      label: "Dashboard",
      icon: "viewGrid",
    },
    {
      id: 2,
      onClick: () => {},
      label: "Toolbar",
      icon: "adjustments",
    },
    {
      id: 3,
      onClick: () => {},
      label: "Action Buttons",
      icon: "collection",
      sublabel: "1 notification"
    },
    {
      id: 4,
      onClick: () => {},
      label: "Icons",
      icon: "cog",
    },
    {
      id: 5,
      onClick: () => {},
      label: "Select",
      icon: "annotation",
    },
    {
      id: 6,
      onClick: () => {},
      label: "Input Forms",
      icon: "minusCircle",
    },
    {
      id: 7,
      onClick: () => {},
      label: "Panel Card",
      icon: "check",
    },
    {
      id: 8,
      onClick: () => {},
      label: "Modals",
      icon: "academicCap",
    },
    {
      id: 9,
      onClick: () => {},
      label: "Context Menu",
      icon: "home",
    },
    {
      id: 10,
      onClick: () => {},
      label: "Sidenav",
      icon: "tag",
    },
  ]

  let modalInstance;
  if (modalOpen) {
    modalInstance = (
      <Modal
        onClose={() => setModalOpen(false)}
        title="Modal Demo"
        icon="academicCap"
      >
        <FlexGroup direction="column">
          <FlexItem>
          <FlexGroup>
              <FlexItem>
                <FormFields>
                  <InputField
                    icon='search'
                    placeholder='Search'
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    type="text"
                  />
                  <SelectField
                    icon='library'
                    label='Bank'
                    options={bankOptions}
                    onChange={setSelectedBank}
                    value={selectedBank}
                  />
                  <TextField
                    placeholder="Your message here..."
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                  />
                </FormFields>
              </FlexItem>
              <FlexItem>
                <ContextMenu width="100%" initialPanelId={0} panels={panels} />
              </FlexItem>
            </FlexGroup>
          </FlexItem>
        </FlexGroup>
      </Modal>
    )
  }

  let sidenavInstance;
  if (sidenavOpen) {
    sidenavInstance = (
      <Sidenav onClose={() => setSidenavOpen(false)} panels={sidenavPanels} />
    )
  }

  return (

    <ThemeProvider theme={themeMode}>
      <GlobalStyles theme={themeMode} />
      <div className="App">
        {sidenavInstance}
        {modalInstance}
        <Toolbar sections={toolbarItems} />
        <FlexGroup responsive={false}>
          <FlexItem>
            <ActionButton color="secondary" onClick={() =>{}}>CLICK!</ActionButton>
          </FlexItem>
          <FlexItem>
            <ActionButton color="primary" onClick={() =>{}}>CLICK!</ActionButton>
          </FlexItem>
          <FlexItem>
            <ActionButton color="danger" onClick={() =>{}}>CLICK!</ActionButton>
          </FlexItem>
          <FlexItem>
            <ActionButton fill={false} color="primary" onClick={() =>{}}>CLICK!</ActionButton>
          </FlexItem>
        </FlexGroup>
        <Divider />
          <PanelCard>
            Hello
          </PanelCard>
      </div>
    </ThemeProvider>
  );
}

export default App;
