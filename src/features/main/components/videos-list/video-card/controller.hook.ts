import { Movie } from '@models/movie.model';
import buildStaticFileUrl from '@utils/build-static-file-url.util';
import { useEffect, useState } from 'react';

const useController = (movie: Movie) => {
  const [snapshotPath, setSnapshotPath] = useState<string | null>('');
  const [snapshotIndex, setSnapshotIndex] = useState<number>(0);
  const [snapshotInterval, setSnapshotInterval] = useState<NodeJS.Timer>();

  useEffect(() => {
    const snapshotsLength = movie.snapshots?.length;
    if (!snapshotsLength) return;

    if (snapshotIndex > snapshotsLength - 1) setSnapshotIndex(0);

    const builtSnapshotPath = buildStaticFileUrl(movie, snapshotIndex);
    setSnapshotPath(builtSnapshotPath);
  }, [movie, snapshotIndex]);

  function handleOnMouseOver() {
    setSnapshotInterval(
      setInterval(() => {
        setSnapshotIndex((prevIndex) => prevIndex + 1);
      }, 1000 * 1),
    );
  }

  function handleOnMouseOut() {
    clearInterval(snapshotInterval);
    setSnapshotIndex(0);
  }

  return { snapshotPath, handleOnMouseOver, handleOnMouseOut };
};

export default useController;
