import * as mime from 'react-native-mime-types';

/**
 * Makes an image object for FormData
 * @param {string} uri - image uri.
 */
export default function getImageObject(uri) {
  const type = mime.lookup(uri) || 'image/jpeg';
  const extension = mime.extension(type);
  const imageObject = {
    uri,
    type,
    name: `${new Date().getTime()}.${extension}`,
  };
  return imageObject;
}
