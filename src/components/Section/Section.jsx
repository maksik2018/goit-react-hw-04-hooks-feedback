import React from "react";
import PropTypes from "prop-types";
import { MainTitle } from "./Section.styled";

const Section = ({ title, children }) => (
    <div>
        <MainTitle>{title}</MainTitle>
        {children}
    </div>
)
Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
};

export default Section;