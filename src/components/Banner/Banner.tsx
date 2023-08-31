import React from 'react';
import {Image, ImageSourcePropType, Text, View} from 'react-native';
import {getStyle} from './Banner.styles';
import Button from 'src/components/Button';
import CustomTheme from 'src/theme';
import {useAppSelector} from 'src/redux/hooks';

type Props = {
  back_image: ImageSourcePropType;
  title: string;
  description: string;
  button_title: string;
  onButtonPress: () => void;
};

const Banner: React.FC<Props> = ({
  back_image,
  title,
  description,
  button_title,
  onButtonPress,
}: Props) => {
  const theme = useAppSelector(state => state.appData.theme);
  const styles = getStyle({theme});

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={back_image} />
      <View style={styles.text_container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{description}</Text>
        <Button
          onPress={onButtonPress}
          title={button_title}
          width={200}
          backColor={CustomTheme.colors['light'].dark_blue}
          height={38}
          colorText={CustomTheme.colors['light'].light}
        />
      </View>
    </View>
  );
};

export default Banner;
