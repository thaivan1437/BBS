import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import { isMobile } from "react-device-detect";

import Title from "./Title";
import Body from "./Body";

class Parment extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return <Container style={{ paddingTop: 100, marginBottom: 200 }}>
            <Title header="MICROBLADING EYEBROWS" />
            <Body imgUrl="https://belmontbeautysalon.com/wp-content/uploads/2018/11/1-1.jpg" top={5} reverse={false} text="Microblading (also know as eyebrow embroidery or feathering) originated in Far East Asia. This method is the finest form of eyebrow tattooing using a pen-like device with disposable microblade attached to stroke very thin lines of pigment into the skin. These thin lines flow in the same direction as your own hairs, and create the most natural results. This method is different from the traditional tattoo done by machine." />
            <Title header="OMBRE POWDER EYEBROWS" />
            <Body imgUrl="https://belmontbeautysalon.com/wp-content/uploads/2018/11/2.jpg" top={0} reverse={true} text="Ombre Powder Brows is a form of tattooing, but it is different from the traditional method. It is a more modern method because it is surface work meaning it is on the epidermis layer of the skin. The technique is described by its name-the results are more powdery and fluffy with a faded front and a crisp tail and it looks like you have a makeup on! Since it does not penetrate deep into the dermis layer of the skin, the results will last up to 1-3 years depending on skin type and lifestyle." />
            <Title header="PERMANENT MAKEUP EYEBROWS" />
            <Body imgUrl="https://belmontbeautysalon.com/wp-content/uploads/2018/11/3.jpg" top={70} reverse={false} text="Permanent makeup is a cosmetic technique which employs tattoos (permanent pigmentation of the dermis) as a means of producing designs that resemble makeup, such as eyebrows." />
            <Title header="PERMANENT MAKEUP LIPS" />
            <Body imgUrl="https://belmontbeautysalon.com/wp-content/uploads/2018/11/4.jpg" top={isMobile ? 0 : 70} reverse={true} text="Permanent makeup is a cosmetic technique which employs tattoos (permanent pigmentation of the dermis) as a means of producing designs that resemble makeup,such as lips." />
            <Title header="PERMANENT MAKEUP EYELINERS" />
            <Body imgUrl="https://belmontbeautysalon.com/wp-content/uploads/2018/11/5.jpg" top={70} reverse={false} text="Permanent makeup is a cosmetic technique which employs tattoos (permanent pigmentation of the dermis) as a means of producing designs that resemble makeup, such as eye-lining." />
        </Container>
    }
}

export default Parment;