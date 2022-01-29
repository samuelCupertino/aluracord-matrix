import * as faceapi from 'face-api.js';

Promise.all([
  faceapi.nets.faceRecognitionNet.loadFromUri('/face-api-models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('/face-api-models'),
  faceapi.nets.ssdMobilenetv1.loadFromUri('/face-api-models')
])

const dataURLtoFile = async (dataUrl, fileName='image') => {
  const fetchData = await fetch(dataUrl)
  const dataBlob = await fetchData.blob()
  const file = new File([dataBlob], fileName, {type: "image/jpg"})
  return file
}

export const faceDetection = async (img) => {
  const image = img.includes('data:image/jpeg;base64,')
    ? await faceapi.bufferToImage(await dataURLtoFile(img))
    : await faceapi.fetchImage(img)

  const detection = await faceapi.detectSingleFace(image).withFaceLandmarks().withFaceDescriptor()
  return detection
}

export const faceMatch = async (image1, image2) => {  
  const detectionFace1 = await faceDetection(image1)
  const detectionFace2 = await faceDetection(image2)

  if(!detectionFace1 || !detectionFace2) return false

  const faceMatcher = new faceapi.FaceMatcher(detectionFace1, 1)
  const result = faceMatcher.findBestMatch(detectionFace2.descriptor)

  return result._distance < 0.6
}
