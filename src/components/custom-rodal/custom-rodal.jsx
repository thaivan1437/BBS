import React from 'react';
import { S } from '@components/custom-rodal/custom-rodal.styles';

const CustomRodal = ({ children, showModal, setShowModal, selectedStyle }) => {
  return (
    <S.CustomRodal
      visible={showModal}
      animation="flip"
      closeMaskOnClick={false}
      showCloseButton={false}
      width={900}
      height={420}
      onClose={() => setShowModal(false)}
    >
      <S.CloseIconText onClick={() => setShowModal(false)}>
        Close
      </S.CloseIconText>
      <S.CloseIcon
        src={`https://widgets.salonmanager.net/icons/${selectedStyle}/close-button.png`}
        role="button"
        onClick={() => setShowModal(false)}
      />
      <S.DialogCycle top />
      <S.DialogCycle bottom />

      <S.ModalContentWrapper>{children}</S.ModalContentWrapper>
    </S.CustomRodal>
  );
};

export default CustomRodal;
