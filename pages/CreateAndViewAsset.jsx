import { Player, useAssetMetrics, useCreateAsset } from '@livepeer/react';
import { useCallback, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const Asset = () => {
  const [video, setVideo] = useState(undefined);
  const {
    mutate: createAsset,
    data: asset,
    status,
    progress,
    error,
  } = useCreateAsset(
    video
      ? {
          sources: [{ name: video.name, file: video }],
        }
      : null
  );
  const { data: metrics } = useAssetMetrics({
    assetId: asset?.[0].id,
    refetchInterval: 30000,
  });

  const onDrop = useCallback(async (acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length > 0 && acceptedFiles?.[0]) {
      setVideo(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'video/*': ['*.mp4'],
    },
    maxFiles: 1,
    onDrop,
  });

  const isLoading = useMemo(
    () =>
      status === 'loading' ||
      (asset?.[0] && asset[0].status?.phase !== 'ready'),
    [status, asset]
  );

  const progressFormatted = useMemo(() => {
    if (progress?.[0]?.phase === 'failed') {
      return 'Failed to process video.';
    } else if (progress?.[0]?.phase === 'waiting') {
      return 'Waiting...';
    } else if (progress?.[0]?.phase === 'uploading') {
      return `Uploading: ${Math.round(progress?.[0]?.progress * 100)}%`;
    } else if (progress?.[0]?.phase === 'processing') {
      return `Processing: ${Math.round(progress?.[0].progress * 100)}%`;
    } else {
      return null;
    }
  }, [progress]);

  return (
    <div className="container">
      <div className="center">
        {!asset && (
          <div className="dropzone" {...getRootProps()}>
            <input {...getInputProps()} />
            <button className="browse-button">Browse Files</button>

            {error?.message && <p>{error.message}</p>}
          </div>
        )}

        {asset?.[0]?.playbackId && (
          <Player title={asset[0].name} playbackId={asset[0].playbackId} />
        )}

        <div>
          {metrics?.metrics?.[0] && (
            <p>Views: {metrics?.metrics?.[0]?.startViews}</p>
          )}

          {video ? <p>{video.name}</p> : <p>Select a video file to upload.</p>}

          {progressFormatted && <p>{progressFormatted}</p>}

          {!asset?.[0].id && (
            <button
              onClick={() => {
                createAsset?.();
              }}
              disabled={isLoading || !createAsset}
              className="upload-button"
            >
              Upload
            </button>
          )}
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: black;
        }

        .center {
          text-align: center;
        }

        .dropzone {
          border: 2px dashed darkblue;
          padding: 20px;
          border-radius: 50%;
          width: 200px;
          height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-bottom: 20px;
        }

        .dropzone p {
          margin: 0;
        }

        .browse-button {
          background-color: dark;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .upload-button {
          background-color: darkblue;
          color: white;
          margin-top: 10px;
          border-radius: 20px;
          width: 200px;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default Asset;
