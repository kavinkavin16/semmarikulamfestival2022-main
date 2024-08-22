// @mui
import { Box, Stack, Container, Typography, Card, CardHeader, CardContent, Divider, CardActions } from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

export default function PageTwo() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Page Two">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Card sx={{ width: '100%' }}>
          <CardHeader title="Digital Payment" />
          <CardContent>
            <Stack flex={'1'} flexDirection={'row'}>
              <Box>
                <Typography>Account Number</Typography>
                <Typography>IFSC Code</Typography>
                <Typography>Bank Name</Typography>
                <Typography>Account Holder</Typography>
              </Box>
              <Box  marginX={2}>
                <Typography>666033655</Typography>
                <Typography>IDIB000M315</Typography>
                <Typography>Indian Bank</Typography>
                <Typography>RT. Gowtham</Typography>
              </Box>
            </Stack>
            <Divider />
            <Typography mt={2} fontWeight={'bold'}>Gpay</Typography>
            <Stack flex={'1'} flexDirection={'row'}>
              <Box>
                <Typography>Phone Number</Typography>
              </Box>
              <Box  marginX={2}>
                <Typography>6382451322</Typography>
              </Box>
            </Stack>
            <Divider />
            <Typography mt={2} fontWeight={'bold'}>UPI ID</Typography>
            <Stack flex={'1'} flexDirection={'row'}>
              <Box>
                <Typography>ID</Typography>
              </Box>
              <Box  marginX={2}>
                <Typography>rtgautham@okaxis</Typography>
              </Box>
            </Stack>
          </CardContent>
          <CardActions>
          <Stack m={2} flex={'1'} flexDirection={'column'}>
            <Box>
            <Typography color={'red'} fontWeight={'bold'}>Note:</Typography>
            <Typography>Update Gowtham after sending money. Any clarification feel free to call.</Typography>
            </Box>
            <Box>
            <Typography color={'red'} fontWeight={'bold'}>Mobile:</Typography>
            <Typography>+91-9500207295</Typography>
            </Box>
            </Stack>
          </CardActions>
        </Card>
      </Container>
    </Page>
  );
}
