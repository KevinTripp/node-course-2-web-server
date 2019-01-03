
let trainedNet;

function encode(arg) {
   return arg.split('').map(x => (x.charCodeAt(0) / 255));
}

function processTrainingData(data) {
   return data.map(d => {
       return {
           input: encode(d.input),
           output: d.output
       }
   })
}

function train(data) {
   let net = new brain.NeuralNetwork();
   net.train(processTrainingData(data));
   trainedNet = net.toFunction();
   console.log('Finished training...');
};

function execute(input) {
   let results = trainedNet(encode(input));
   let output;
   results.vanilla > results.notVanilla ? output = 'vanilla' : output = 'notVanilla';
   return output;
}

train(trainingData);

console.log(execute("CMC 2 PT 22 first strike"));
console.log(execute("CMC 6 P/T 4/4 "));
console.log(execute("CMC 2 P/T 1/4 "));
