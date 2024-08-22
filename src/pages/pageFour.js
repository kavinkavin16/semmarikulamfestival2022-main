/* eslint-disable react/prop-types */
/* eslint-disable import/order */
/* eslint-disable react/jsx-key */
// @mui
import {Container, Typography} from '@mui/material';
// hooks
import { LazyLoadImage } from 'react-lazy-load-image-component';
import useSettings from '../hooks/useSettings';

// components
import Page from '../components/Page';
import AppData from './files.json';
// ----------------------------------------------------------------------
import 'react-lazy-load-image-component/src/effects/blur.css';
// eslint-disable-next-line import/no-unresolved
import UserImages from 'src/utils/images';

const MyImage = ({ image }) => (
  <LazyLoadImage
    alt={image.alt}
    effect="blur"
    wrapperProps={{
      style: { transitionDelay: '1s' },
    }}
    width={image.width}
    height={image.height}
    src={UserImages[image.src]}
  />
);

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="412"
      height="350"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default function PageFour() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Page Four">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography>Photos</Typography>
        {AppData.photos.map((image) => (
          <MyImage image={image} />
        ))}
        <Typography>Videos</Typography>
        {AppData.videos.map((item) => (
          <YoutubeEmbed embedId={item} />
        ))}
      </Container>
    </Page>
  );
}
