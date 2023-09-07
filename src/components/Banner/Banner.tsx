import React from 'react';
import {Image, ImageSourcePropType, View} from 'react-native';
import {styles} from './Banner.styles';
import Button from 'src/components/Button';
import CustomTheme from 'src/theme';
import PoppinsText from '../PoppinsText/PoppinsText';

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
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={back_image} />
      <View style={styles.text_container}>
        <PoppinsText style={styles.title}>{title}</PoppinsText>
        <PoppinsText style={styles.text}>{description}</PoppinsText>
        <Button
          onPress={onButtonPress}
          title={button_title}
          width={200}
          backColor={CustomTheme.colors.light.dark_blue}
          height={38}
          colorText={CustomTheme.colors.light.light}
        />
      </View>
    </View>
  );
};

export default Banner;
