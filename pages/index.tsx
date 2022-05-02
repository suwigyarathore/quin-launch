import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import { Alert, LinearProgress } from '@mui/material';
import { LaunchMap, LaunchFilter, FilterChanges } from '../src/components';
import { Box } from '@mui/material';
import {dehydrate, QueryClient, useQuery} from 'react-query';
import { Launch, Pad } from '../src/types/launch';
import { getAllLaunch } from '../src/service/getAllLaunch';
import { isAfter, isBefore } from 'date-fns';

const Home: NextPage = () => {

  const {data, isLoading, error} = useQuery<Launch[]>('launch', getAllLaunch);
  const [filter, setFilter] = React.useState<FilterChanges>();
  
  const launchLocations = React.useMemo<Pad[] | undefined>(() => {
    
    let filteredLaunches :Launch [] | undefined;
    if(!filter) {
       filteredLaunches =  data;
    } else {
      filteredLaunches = data?.filter(l => isAfter(filter.startDate, l.window_start))
                             .filter(l => isBefore(filter.startDate, l.window_end))
                             .filter(l => filter.agency? l.pad.name===filter.agency : true )
    }

    
    return filteredLaunches?.map(l=> l).map(l => l.pad) 
  
  }, [data, filter])


  const launchAgencies = React.useMemo<Pad[] | undefined>(() => data?.map(l => l.pad),[data]);

  const onFilterChange = (changes: FilterChanges) => {
    setFilter(changes);
  }

  if(isLoading){
   return <LinearProgress />
  }

  return (
    <Container maxWidth="lg">
      <>
          {error ? (
            <Alert severity="error">This is an error alert — check it out!</Alert>
          ) : 
          <Box width="1200px" height="800px">
            <LaunchFilter pad={launchAgencies} onFilterChange={onFilterChange}/>
            <LaunchMap launchLocations={launchLocations}/>
          </Box>}
          
      </>
    </Container>
  );
};

export default Home;

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery<Launch[]>('launch',getAllLaunch);

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }

}