import styled from 'styled-components';
import { COLORS, INPUT_COLORS } from '@common/colors';

interface BaseContentStyleProps {
  color?: string;
  bColor?: string;
  activeColor?: string;

}
interface BaseInput {
  hasError?: boolean;
  color?: string;
}

export const BaseContentStyle = styled.div`
  color: ${(props) => (props.color ? props.color : COLORS.DOVE_GRAY)};
  text-align: center;
`;

export const BaseInput = styled.input<BaseInput>`
  color: ${(props) => (props.color ? props.color : COLORS.DOVE_GRAY)};
  text-align: center;
`;

export const WrapInput = styled.div<BaseInput>`
  display:block;
  width: 100%;

  &.pt-85 {
    padding-top : 30px;

    @media (max-width: 768px) {
      padding : 0 15px 40px;
    }
  }

  input {
    width: 400px;
    font-size: 22px;
    border-radius: 10px;
    padding: 12px;
    border: solid 1px #ccc;
    color: ${(props) =>
      props.hasError ? COLORS.ERROR : INPUT_COLORS.TEXT_COLOR};
    background-color: ${INPUT_COLORS.BACKGROUND_COLOR};
    line-height: 2;
    text-align: left;


    &.no-radius-bottom {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
    &.no-radius-top {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }

    ::placeholder {
      color: ${(props) =>
        props.hasError ? COLORS.ERROR : INPUT_COLORS.HIT_TEXT};
    }
    ::-moz-placeholder {
      color: ${(props) =>
        props.hasError ? COLORS.ERROR : INPUT_COLORS.HIT_TEXT};
      opacity: 1;
    }

    &.error, &.error::placeholder {
      color: ${COLORS.ERROR};
    }

    @media (max-width: 768px) {
      width: 100%;
      font-size: 17px;
    }

  }

  .title {
    font-size: 20px;
  }

  input::placeholder {
    color: #babbc0;
  }

  label {
    color: ${COLORS.DOVE_GRAY1};
    font-size: 14px;
  }
`

export const ButtonWrap2 = styled.div`
  display:flex;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;

  @media (min-width: 768px) and (max-width: 1024px) {
    &.step4 {
      bottom: -75px;
    }
  }

  @media (max-width: 768px) {
    position: unset;
    padding: 0 15px;
  }

`
export const GroupInputRadio = styled.div`
  display:flex;

  label {
    margin: 0 0 0 15px;
    color: initial;
    cursor: pointer;
  }
  svg {
    cursor: pointer;
  }

  &.wrap--date {
    position:relative;
  }
  .input--date {
    display:none;
    position: absolute;
    bottom: 50px;
    left: -50%;
    width: auto;
    height:auto;
  }
  &.wrap--date.active .input--date {
    display:block;
  }

  &.margin-left {
    margin-left: 80px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    &.margin-left {
      margin-left: 0;
    }
  }
`

export const DFlex = styled(BaseContentStyle)`
  display:flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  &.step1 {
    position: absolute;
    bottom: 0;
    left: 0;

    @media (min-width:768px ) and (max-width: 1024px) {
      bottom: -50px;
    }
  }

  @media (max-width: 768px ) {
    &.step1 {
      padding: 0 15px;
      position: unset;
    }
  }
`;

export const FWrap = styled(DFlex)`
  flex-wrap: wrap;
`;

export const Subject = styled.div`
  padding: 0px 0px 30px 40px;
  text-align: left;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  font-size: 23px;
  color: ${(props) => (props?.color ? props?.color : COLORS.ROOT)};

  &.no-paddingBottom {
    padding-bottom: 0;
  }

  &.step4 {
    padding: 0 0 5px 40px;
  }
`

export const Title = styled.div`
  padding: 18px 0;
  text-align: center;
  font-size: 20px;
  color: ${(props) => (props?.color ? props?.color : COLORS.ROOT)};

  &.step2 {
    padding: 0 0 18px;
  }

  &.step4 {
    padding: 0 0 10px;
    text-align: left;
    width: 100%;
  }

  @media (max-width: 768px) {
    padding: 0 0 15px;
  }
`

export const WrapButton = styled.div<BaseContentStyleProps>`
  display:flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;

  button,input {
    padding: 15px 30px;
    border: solid 1px #ccc;
    margin: 0 10px;
    border-radius: 10px;
    font-size: 20px;
    color: ${(props) => (props?.color ? props?.color : COLORS.ROOT)};
    background-color: ${(props) => (props?.bColor ? props?.bColor : COLORS.BLACK)};
    margin-bottom: 15px;

    &.active {
      background-color: ${(props) => (props?.activeColor ? props?.activeColor : COLORS.DOVE_GRAY)};
      border: solid 1px ${(props) => (props?.activeColor ? props?.activeColor : COLORS.DOVE_GRAY)};
      color: white;
      font-weight: 700;
    }

    @media (max-width: 768px) {
      padding: 8px 30px;
    }
  }

  .wrap--customAmount {
    position: relative;
    text-align:center;

    input {
      margin-bottom: 0;
    }

    label {
      font-size: 14px;
      color: ${COLORS.DOVE_GRAY1};
      text-align: left;
      display:block;
      margin-left: 10px;
    }

    label.customAmount {
      position: absolute;
      top: 20px;
      left: calc(50% - 35px);
      color: #fff;
      font-size: 20px;
    }

    &.error input, &.error label{
      color: ${COLORS.ERROR}
    }

    label.error{
      color: ${COLORS.ERROR}
    }
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

`
export const WrapReceipt = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  label {
    color: #aaa;
    margin-bottom: 0.5rem;
  }

  &.step3 {
    margin-top: 15px;
  }

  .w25 {
    width: 25%;
  }

  .w100 {
    width: 120px;
  }

  .w150 {
    width: 180px;
  }

  .relative {
    position: relative;
    height: 100%;

    label {
      position: absolute;
      margin: 0;
      top:0;
      left: 0;
      width: 100%;
      padding-left: 30px;
    }
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

`
export const WrapInformation = styled.div`
  position: relative;
  font-size: 14px;

  .info-gift {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    text-align: center;
    cursor: pointer;
  }

  .company-name {
    color: red;
    font-weight: bold;
  }

  .phone {
    font-weight: 700;
    font-size: 13px;
  }

  .address {
    font-size: 12px;
    line-height: 12px;
  }

  .redeem-code {
    position: absolute;
    font-size: 13px;
    left: calc(50% - 75px);
    bottom: 46px;
    color: ${COLORS.DOVE_GRAY4};

    &.gift {
      bottom: 58px;
    }
  }

  @media (max-width: 768px) {
    .info-gift {
      padding: 15px;
    }

    .address {
      font-size: 10px;
    }

    .redeem-code {
      bottom: 38px;
      font-size: 11px;
      left: calc(50% - 64px);

      &.gift {
        bottom: 47px;
        font-size: 11px;
        left: calc(50% - 63px);
      }
    }
  }

`
