/* eslint-disable react/jsx-key */
// @mui
import { Box, Stack, Container, Typography, Card, CardContent } from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';

// components
import Page from '../components/Page';
import AppData from './data.json';
import AppData2023 from './data2023.json';
import useYears from '../hooks/useYears';
// ----------------------------------------------------------------------

export default function PageThree() {
  const { year } = useYears();
  const DataLoad = year === 2022 ? AppData : AppData2023;
  const { themeStretch } = useSettings();

  return (
    <Page title="Page Three">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        {DataLoad.expenseData.map((item, i) => (
          <Card sx={{ width: '100%', mt: i === 0 ? 0 : 2 }}>
            <CardContent>
              <Typography textTransform={'uppercase'} fontWeight={'bold'}>
                {`${item.name}`}
              </Typography>
              {item.sonof && <Typography>{`S/O. ${item.sonof}`}</Typography>}
              <Stack flex={'1'} justifyContent="space-between" flexDirection={'row'}>
                <Box>
                  <Typography>Total Amount</Typography>
                  {item.advance && <Typography>Advance Paid</Typography>}
                </Box>
                <Box marginX={2}>
                  <Typography fontWeight={'bold'} color={'black'}>
                     {`₹${new Intl.NumberFormat('en-IN').format(item.totalAmount)}`}
                  </Typography>
                  {item.advance && (
                    <Typography fontWeight={'bold'} color={'black'}>
                      {`₹${new Intl.NumberFormat('en-IN').format(item.advanceAmount)}`}
                    </Typography>
                  )}
                </Box>
              </Stack>
              <Typography>{item.note}</Typography>
            </CardContent>
          </Card>
        ))}
      </Container>
    </Page>
  );
}
