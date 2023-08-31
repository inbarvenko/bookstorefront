import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useAppDispatch, useAppSelector} from 'src/redux/hooks';
import {setTheme} from 'src/redux/slices/appReducer';
import Configure from 'src/assets/icons/dark/Configure.svg';
import ConfigureLight from 'src/assets/icons/light/Configure_light.svg';
import {getStyle} from './Toggler.styles';

const Toggler: React.FC = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(state => state.appData.theme);
  const styles = getStyle({theme});

  const handleSwitchTheme = () => {
    if (theme === 'dark') {
      dispatch(setTheme({theme: 'light'}));
    } else {
      dispatch(setTheme({theme: 'dark'}));
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleSwitchTheme}>
      {theme === 'light' ? (
        <Configure width={30} height={30} />
      ) : (
        <ConfigureLight width={30} height={30} />
      )}
    </TouchableOpacity>
  );
};

export default Toggler;
