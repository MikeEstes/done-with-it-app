import Bugsnag from '@bugsnag/expo';

//const log = (error) => Bugsnag.notify(error);
const log = (error) => console.log(error);
//const start = () => Bugsnag.start();
const start = () => console.log('Started!');

export default { log, start };
