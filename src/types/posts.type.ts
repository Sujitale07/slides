type InstagramPostProps = {
    id: string;
    media_url: string;
    timestamp: string;
    caption?: string;
    mediaType: 'IMAGE' | 'VIDEO' | 'CAROSEL_ALBUM';
}