import { Info } from 'phosphor-react';
import { useState } from 'react';
import { useTheme } from 'styled-components';
import { Target, Tooltip, WrapperContainer } from './styles';

interface OverlayTooltipProps {
  message: string | undefined
}

export function OverlayTooltip({ message }: OverlayTooltipProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const theme = useTheme()

  function handleMouseEnter() {
    setShowTooltip(true);
  }

  function handleMouseLeave() {
    setShowTooltip(false);
  }

  return (
    <WrapperContainer>
      <Target
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Info size={16} color={theme.colors.danger} />
      </Target>
      {showTooltip && <Tooltip>{message}</Tooltip>}
    </WrapperContainer>
  );
}