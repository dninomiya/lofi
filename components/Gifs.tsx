import { GiphyFetch } from '@giphy/js-fetch-api';
import useSWR from 'swr';

const gf = new GiphyFetch('XSJFd70foPAHg5MvUQbmuAzXd5rO66wQ');

const Gifs = () => {
  const { data } = useSWR('gifs', async () => {
    const result = await gf.search('lofi', {
      limit: 1,
    });
    console.log(result.data[0].url);
    return result.data;
  });

  return (
    <div>
      {data?.length && (
        <p>
          <img src={data[0].images.original.url} alt="" />
        </p>
      )}
    </div>
  );
};

export default Gifs;
