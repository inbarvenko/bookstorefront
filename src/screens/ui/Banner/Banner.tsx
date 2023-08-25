import {Image, ImageSourcePropType, Text, View} from 'react-native';
import {styles} from './Banner.module';
import Button from '../Button/Button';

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
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{description}</Text>
        <Button
          onPress={onButtonPress}
          title={button_title}
          width={200}
          height={38}
        />
      </View>
    </View>
  );
};

export default Banner;
