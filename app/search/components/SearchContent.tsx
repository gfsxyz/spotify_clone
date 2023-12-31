"use client";

import LikeButton from "@/components/LikeButton";
import MediaItem from "@/components/MediaItem";
import useOnPlay from "@/hooks/useOnPlay";
import { Song } from "@/types";

interface SearchContentProps {
  songs: Song[];
}

const SearchContent: React.FC<SearchContentProps> = ({ songs }) => {
  const onPlay = useOnPlay(songs);

  return (
    <>
      {songs.length === 0 ? (
        <div className="flex flex-col w-full px-6 gap-y-2 text-neutral-600">
          No songs found.
        </div>
      ) : (
        <div className="flex flex-col w-full px-6 gap-y-2">
          {songs.map((song) => (
            <div key={song.id} className="flex items-center w-full gap-x-4">
              <div className="flex-1">
                <MediaItem onClick={(id: string) => onPlay(id)} data={song} />
              </div>
              <LikeButton songId={song.id} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};
export default SearchContent;
