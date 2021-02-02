import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  :root {
    --accent-blue: ${({ theme }) => theme.accentBlue};
    --accent-blue-light: ${({ theme }) => theme.accentBlueLight};
    --accent-blue-opaque: ${({ theme }) => theme.accentBlueOpaque};
    --danger-red: ${({ theme }) => theme.dangerRed};
    --danger-red-light: ${({ theme }) => theme.dangerRedLight};
    --danger-red-opaque: ${({ theme }) => theme.dangerRedOpaque};
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
    font-size: 16px;
    background-color: var(--palette-shade-1);
    color: var(--text-color);
    transition: background-color 0.5s linear, color 0.5s linear;
  }
`;