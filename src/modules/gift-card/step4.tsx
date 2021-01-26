import React, {FC, useState } from 'react';
import {
  Subject,
  WrapInput,
  BaseInput,
  GroupInputRadio,
  WrapReceipt,
  Title,
} from '@modules/gift-card/gift-card.styles';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import IconOptionChecked from '@common/icons/icon-option-checked';
import IconOptionUnChecked from '@common/icons/icon-option-unchecked';

const Step4: FC<PromotionsProps> = ({
  setDeliverCallback,
  error,
  deliverInit,
  closeDate
}) => {

  const handleSetValue = (e) => {
    const { value, name } = e.target;

    if (name === "phone") {
      const { value } = e.target;
      let processedValue = value.replace(/[^\d]/g, '');

      if (processedValue.length <= 10) {
        const formatterPattern1 = '($1';
        const formatterPattern2 = '($1) $2';
        const formatterPattern3 = '($1) $2-$3';

        let selectedPattern = formatterPattern1;

        if (processedValue.length > 3) {
          selectedPattern = formatterPattern2;
        }

        if (processedValue.length > 6) {
          selectedPattern = formatterPattern3;
        }

        processedValue = processedValue.replace(
          /(\d{1,3})(\d{0,3})(\d{0,4})/,
          selectedPattern
        );

        setDeliverCallback({ ...deliverInit, phone: processedValue, action: '' });
      }
    }

    if (name === "email") {
      setDeliverCallback({ ...deliverInit, email: value , action: ''});
    }

    if (name === "message") {
      setDeliverCallback({ ...deliverInit, message: value , action: ''});
    }

  }

  const changeMethodReceipt = (e) => {
    e.stopPropagation()
    const id  =  e.target.getAttribute('data-id');
    // reset useState when change method input
    if (id === "phone") {

      setDeliverCallback({
        ...deliverInit,
        email: '',
        phone: '',
        type: id,
        action: ''
      });
    }
    if (id === "email") {
      setDeliverCallback({
        ...deliverInit,
        email: '',
        phone: '',
        type: id,
        action: ''
      });
    }

    if (id === "now") {
      setDeliverCallback({
        ...deliverInit,
        typeDeliver: id,
        default: true,
      });
    }

    if (id === "schedule") {
      setDeliverCallback({
        ...deliverInit,
        typeDeliver: id,
        action: 'key',
        default: true,
      });
    }

  };

  const handleSetDate = (date) => {
    setDeliverCallback({ ...deliverInit, schedule: date, default: false });
  };

  return(
    <>
      <Subject className="step4">eGift Cards</Subject>
      <Title className="step4">Recipient</Title>
      <WrapReceipt>
        <label className="w100">Delivery By:</label>
        <GroupInputRadio className="w100 relative">
          {deliverInit?.type === "email" ? <IconOptionChecked /> : <IconOptionUnChecked/>}
          <label className="weight" id="email" data-id="email" onClick={(e) => changeMethodReceipt(e)}>Email</label>
        </GroupInputRadio>
        <GroupInputRadio className="w150 relative" data-id="phone" onClick={(e) => changeMethodReceipt(e)}>
          {deliverInit?.type === "phone" ? <IconOptionChecked /> : <IconOptionUnChecked/>}
          <label className="weight" id="phone" data-id="phone" onClick={(e) => changeMethodReceipt(e)}>Text message</label>
        </GroupInputRadio>

      </WrapReceipt>

      <WrapInput>
        <BaseInput
          type={deliverInit?.type === "phone" ? "tel" : "email"}
          name={deliverInit?.type === "phone" ? "phone" : "email"}
          value={deliverInit?.type === "phone" ? deliverInit?.phone : deliverInit?.email}
          className={`${(error?.phone || error?.email) ? "error" : ""} no-radius-bottom`}
          placeholder={deliverInit?.type === "phone" ? "Enter recipient phone (000) 000-0000" : "Enter recipient email"}
          onChange={(e) => handleSetValue(e)}
        />
        <BaseInput
          type="text"
          name="message"
          value={deliverInit?.message}
          className="no-radius-top"
          placeholder="Enter short message for the recipient"
          onChange={(e) => handleSetValue(e)}
        />
      </WrapInput>

      <WrapReceipt className="mt-half">
        <label className="w100">Delivery Date:</label>
        <GroupInputRadio className="w100 relative">
          {deliverInit?.typeDeliver === "now" ? <IconOptionChecked /> : <IconOptionUnChecked/>}
          <label className="weight" id="now" data-id="now" onClick={(e) => changeMethodReceipt(e)}>Now</label>
        </GroupInputRadio>
        <GroupInputRadio className={`relative w150 wrap--date ${(
            deliverInit.typeDeliver === "schedule" &&
            closeDate.value === false &&
            deliverInit.action !==""
          ) ? 'active' : ''}`}>
            {deliverInit?.typeDeliver === "schedule" ? <IconOptionChecked /> : <IconOptionUnChecked/>}
          <label
            className="weight"
            id="schedule"
            data-id="schedule" onClick={(e) => changeMethodReceipt(e)}
          >
            {(deliverInit?.schedule && !deliverInit?.default) ? deliverInit?.schedule.toDateString() : "Schedule"}
          </label>
          <div className="input--date">
            <DatePicker
              selected={deliverInit.schedule}
              onChange={(date) => handleSetDate(date)}
              isClearable={true}
              inline
            />
          </div>

        </GroupInputRadio>
      </WrapReceipt>
    </>
  );
};

export default Step4;

export type PromotionsProps = {
  setDeliverCallback: (e) => void;
  color?: string;
  error?: errorInit;
  deliverInit?: deliverDataType;
  closeDate?: {
    value?: boolean;
  };
};
export type errorInit = {
  phone?: boolean;
  email?: boolean;
}

export type deliverDataType = {
  phone?: string;
  email?: string;
  message?: string;
  type?: string;
  typeDeliver?: string;
  schedule?: Date;
  action?: string;
  default?: boolean;
}
