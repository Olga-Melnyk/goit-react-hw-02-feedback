import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      <main>{children}</main>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
