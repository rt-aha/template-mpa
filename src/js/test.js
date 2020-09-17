import otherFile from '@/js/otherFile.js'

const testFunc = () => {
  console.log('testFunc');
  otherFile();

  const a = [1,2,3,4];
  const b = [5,6,7,8]
  const ab = [...a, ...b];
  console.log('ab--',ab)
}

export default testFunc