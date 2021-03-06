import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: ${({ theme }) => theme.primaryColor};
    --primary-color-light: ${({ theme }) => theme.primaryColorLight};
    --primary-color-opaque: ${({ theme }) => theme.primaryColorOpaque};
    --success-color: ${({ theme }) => theme.successColor};
    --success-color-light: ${({ theme }) => theme.successColorLight};
    --accent-color: ${({ theme }) => theme.accentColor};
    --accent-color-light: ${({ theme }) => theme.accentColorLight};
    --danger-color: ${({ theme }) => theme.dangerColor};
    --danger-color-light: ${({ theme }) => theme.dangerColorLight};
    --danger-color-opaque: ${({ theme }) => theme.dangerColorOpaque};
    --warning-color: ${({ theme }) => theme.warningColor};
    --warning-color-light: ${({ theme }) => theme.warningColorLight};
    --warning-color-opaque: ${({ theme }) => theme.warningColor};
    --text-color: ${({ theme }) => theme.textColor};
    --text-color-shade: ${({ theme }) => theme.textColorShade};
    --text-color-opaque: ${({ theme }) => theme.textColorOpaque};
    --palette-shade-0: ${({ theme }) => theme.paletteShade0};
    --palette-shade-1: ${({ theme }) => theme.paletteShade1};
    --palette-shade-2: ${({ theme }) => theme.paletteShade2};
    --palette-shade-3: ${({ theme }) => theme.paletteShade3};
    --palette-shade-4: ${({ theme }) => theme.paletteShade4};
    --palette-shade-5: ${({ theme }) => theme.paletteShade5};
    --interactable-shade-1 ${({ theme }) => theme.interactableShade1};
    --interactable-shade-1-hover ${({ theme }) => theme.interactableShade1Hover};
    --background-overlay: ${({ theme }) => theme.backgroundOverlay};
    --background-color: ${({ theme }) => theme.backgroundColor};
    --card-background: ${({ theme }) => theme.cardBackground};
    --toast-background: ${({ theme }) => theme.toastBackground};
    font-size: 16px;
    background-color: rgba(var(--background-color));
    color: rgba(var(--text-color));
    transition: background-color 0.5s linear, color 0.5s linear;
  }
`