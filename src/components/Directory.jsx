import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySection } from '../redux/Directory';
import MenuItem from './MenuItem';

const DirectoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Directory = ({ sections }) => {
  return (
    <DirectoryContainer>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection,
});

export default connect(mapStateToProps)(Directory);
