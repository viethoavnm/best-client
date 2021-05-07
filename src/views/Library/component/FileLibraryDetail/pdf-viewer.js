import { memo } from 'react';

const PdfViewer = ({ height, url }) => {
  if (height > 0 && url && url !== '')
    return (
      <iframe
        src={`https://drive.google.com/viewerng/viewer?embedded=true&url=${url}#toolbar=0&scrollbar=0`}
        frameBorder="0"
        scrolling="auto"
        height={height}
        width="100%"></iframe>
    );
  return null;
};
export default memo(PdfViewer);
