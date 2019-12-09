import React from 'react';
import { Search } from '@material-ui/icons';
import { InputBase } from '@material-ui/core';
import { FieldProps } from 'formik';

import useStyles from './useStyles';

const SearchField: React.FC<FieldProps> = ({ field }) => {
  const styles = useStyles();

  return (
    <div className={styles.search}>
      <div className={styles.searchIcon}>
        <Search />
      </div>
      <InputBase
        {...field}
        classes={{
          root: styles.inputRoot,
          input: styles.inputInput
        }}
        placeholder="Search"
      />
    </div>
  );
};

export default SearchField;
