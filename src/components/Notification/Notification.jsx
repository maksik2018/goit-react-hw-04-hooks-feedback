import React from "react";
import PropTypes from "prop-types";
import { Title } from '../Notification/Notification.styled';

const NotificationMessage = ({ message }) => (
     <Title>{message}</Title>
);

NotificationMessage.propTypes={
    message: PropTypes.string.isRequired
};

export default NotificationMessage;