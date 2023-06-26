import { Player } from '@livepeer/react';

import Image from 'next/image';

const playbackId =
    '170b18cvf35ga3t9';

import blenderPoster from '../public/images/godOfWar.jpg';

const PosterImage = () => {
    return (
        <Image
            src={blenderPoster}
            layout="fill"
            objectFit="cover"
            priority
            placeholder="blur"
        />
    );
};

const StreamPlayer = () => {
    console.log("playbackId", playbackId,"id" )
    return (
        <Player
            title="Waterfalls"
            playbackId={playbackId}
            showPipButton
            showTitle={false}
            aspectRatio="16to9"
            controls={{
                autohide: 3000,
            }}
            theme={{
                borderStyles: { containerBorderStyle: 'hidden' },
                radii: { containerBorderRadius: '10px' },
            }}
        />
    );
};

export default StreamPlayer;