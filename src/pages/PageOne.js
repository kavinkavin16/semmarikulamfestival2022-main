/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-key */
// @mui
import { Box, Stack, Container, Typography, Card, CardContent, TextField, Avatar } from '@mui/material';
// hooks
import { useState } from 'react';
import image from '../assets/kovilDefault.jpg'
import UserImages from '../utils/images'
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import AppData from './data.json';
import AppData2023 from './data2023.json';
import useYears from '../hooks/useYears';
// ----------------------------------------------------------------------

export default function PageOne() {
  const { year } = useYears();
  const DataLoad = year === 2022 ? AppData : AppData2023;
  const { themeStretch } = useSettings();
  const [filterText, setFilteredText] = useState('');

  const handleChange = (event) => {
    // Access input value
    const query = event.target.value;
    // Trigger render with updated values
    setFilteredText(query);
  };

  const newFilter = DataLoad.collection
    .filter(({ name }) => name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0)
    .sort((a, b) => b.amount - a.amount)
    .map((item) => (
      <Card sx={{ width: '100%', mt: 2 }}>
        <CardContent>
          <Stack flex={1} flexDirection={'row'}>
            <Avatar
              src={item.img?  UserImages[item.img] : image}
              alt={`${item.name}`}
              sx={{ width: 100, height: 100 }}
              variant="square"
            >
              {`${item.name}`}
            </Avatar>
            <Stack mx={2} >
              <Typography textTransform={'uppercase'} fontWeight={'bold'}>
                {`${item.name}`}
              </Typography>
              {item.sonof && <Typography>{`S/O. ${item.sonof}`}</Typography>}
              <Stack flex={'1'} justifyContent="space-between" flexDirection={'row'}>
                <Box>
                  <Typography>Amount</Typography>
                  <Typography>Phone</Typography>
                </Box>
                <Box marginX={2}>
                  <Typography fontWeight={'bold'}>{`₹${new Intl.NumberFormat('en-IN').format(
                    item.amount
                  )}`}</Typography>
                  <a href={`tel:${item.phone}`}>{item.phone}</a>
                  {/* <Link to="tel:9876543210"><Typography fontWeight={'bold'}>{item.phone? item.phone: ''}</Typography></Link>               */}
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    ));

  return (
    <Page title="Page One">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <TextField
          id="search"
          type="search"
          label="Search"
          value={filterText}
          onChange={handleChange}
          sx={{ width: '100%' }}
        />
        {newFilter}
      </Container>
    </Page>
  );
}
