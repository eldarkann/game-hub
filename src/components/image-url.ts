const getCroppedImageUrl = (url: string) => {
    const idx = url.indexOf('media/');

    return url.substring(0, idx + 5) + "/crop/600/400/" + url.substring(idx+6);
}

export default getCroppedImageUrl;