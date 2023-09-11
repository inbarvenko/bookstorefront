import {ImageSourcePropType} from 'react-native';
import {images} from '../images';

export type OnboardingDataType = {
  title: string;
  descr: string;
  image: ImageSourcePropType;
};

const onboardingData: OnboardingDataType[] = [
  {
    title: 'Happy to see you in our app!',
    descr:
      'It is the first time I see you here. Lets see some of our features!',
    image: images.picture_auth,
  },
  {
    title: 'We have screen with your favorite books.',
    descr:
      'You will be able to save them and buy one day! Hope, you will have an oportunity ... ',
    image: images.onboarding_book,
  },
  {
    title: 'We have Cart for you!',
    descr: 'You will be able to buy books and see how much money you need! ',
    image: images.human_going,
  },
];

export default onboardingData;
