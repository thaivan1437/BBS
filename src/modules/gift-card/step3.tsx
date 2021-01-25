import React, {FC, useState } from 'react';
import {
  Subject,
  WrapInput,
  BaseInput,
} from '@modules/gift-card/gift-card.styles';

const Step3: FC<PromotionsProps> = ({
  setReceiptCallback,
  error,
  receiptInit,
}) => {

  const handleSetValue = (e) => {
    const { value } = e.target;
    setReceiptCallback({...receiptInit, nameCard: value});
  }

  return(
    <>
      <Subject>eGift Cards</Subject>

      <WrapInput className="pt-85">
        <div>Sender</div>
        <BaseInput
          type="text"
          id="name"
          name="name"
          value={receiptInit?.nameCard}
          className={error.nameCard ? "error" : ""}
          placeholder="Enter your name"
          onChange={(e) => handleSetValue(e)}
        />
        <label htmlFor="name">Your name will appear on the eGift card</label>
      </WrapInput>
    </>
  );
};

export default Step3;

export type PromotionsProps = {
  setReceiptCallback: (e) => void;
  color?: string;
  error?: errorInit;
  receiptInit?: receiptData;
};

export type errorInit = {
  nameCard?: boolean;
};

export type receiptData = {
  nameCard?: string;
};