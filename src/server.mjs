import express from 'express';

function start (port, directory){
    port = port || 3000;
    express()
      .use(express.static(directory + '/'))
      .listen(port, () => console.log(`Listening on ${ port }`));
};

export { start };