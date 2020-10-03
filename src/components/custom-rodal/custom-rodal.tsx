import React, { FC } from 'react';
// @ts-ignore
import { CONFIGS } from '@environment';
import { useMediaQuery } from 'react-responsive';
import { S } from './custom-rodal.styles';

const CustomRodal: FC<CustomRodalProps> = ({
  children,
  showModal,
  setShowModal,
  selectedStyle,
  halfMode,
  width,
}) => {
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1024px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });
  return (
    <S.CustomRodal
      visible={showModal}
      animation="flip"
      closeMaskOnClick={false}
      showCloseButton={false}
      width={isTablet ? 600 : isMobile ? 360 : 900}
      height={isTablet ? 650 : isMobile ? 600 : 420}
      onClose={() => setShowModal(false)}
    >
      <S.CloseIconText onClick={() => setShowModal(false)}>
        Close
      </S.CloseIconText>
      {selectedStyle ? (
        <S.CloseIcon
          src={`https://cdn.salonmanager.${CONFIGS.domainExtension}/widgets/icons/${selectedStyle}/close-button.png`}
          role="button"
          onClick={() => setShowModal(false)}
        />
      ) : null}

      {width ? null : (
        <>
          {halfMode ? <S.HalfModalDialogCycle top /> : <S.DialogCycle top />}
          {halfMode ? (
            <S.HalfModalDialogCycle bottom />
          ) : (
            <S.DialogCycle bottom />
          )}
        </>
      )}

      <S.ModalContentWrapper>{children}</S.ModalContentWrapper>
    </S.CustomRodal>
  );
};

export type CustomRodalProps = {
  children: any;
  showModal: boolean;
  setShowModal: (showModel: boolean) => void;
  selectedStyle?: string;
  halfMode?: boolean;
  width?: number;
};

export default CustomRodal;