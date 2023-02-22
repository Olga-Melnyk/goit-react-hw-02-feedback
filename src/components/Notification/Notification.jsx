import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <p>{message}</p>;
};

Notification.protoType = {
  message: PropTypes.string.isRequired,
};
