import PropTypes from 'prop-types';
import { SectionBlock, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionBlock>
      <Title>{title}</Title>
      <main>{children}</main>
    </SectionBlock>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
