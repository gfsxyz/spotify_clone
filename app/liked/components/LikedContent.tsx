"use client";

import LikeButton from "@/components/LikeButton";
import MediaItem from "@/components/MediaItem";
import useOnPlay from "@/hooks/useOnPlay";
import { useUser } from "@/hooks/useUser";
import { Song } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface LikedContentProps {
  songs: Song[];
}
const LikedContent: React.FC<LikedContentProps> = ({ songs }) => {
  const router = useRouter();
  const { isLoading, user } = useUser();
  const onPlay = useOnPlay(songs);

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/");
    }
  }, [isLoading, router, user]);

  return (
    <>
      {songs.length === 0 ? (
        <div className="flex flex-col w-full px-6 gap-y-2 text-neutral-400">
          No liked songs.
        </div>
      ) : (
        <div className="flex flex-col w-full p-6 gap-y-2">
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
export default LikedContent;
