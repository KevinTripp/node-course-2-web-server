const trainingData = [
   {
       input: "CMC 2 P/T 2/2",
       output: { vanilla: 1 }
   },{
      input: "CMC 3 P/T 3/3",
      output: { vanilla: 1 }
   },{
       input: "CMC 3 P/T 2/2",
       output: { notVanilla: 1 }
   },{
      input: "CMC 3 P/T 2/2 first strike",
      output: { notVanilla: 1 }
   },{
     input: "CMC 2 P/T 2/2 first strike",
     output: { vanilla: 1 }
   },{
     input: "CMC 3 P/T 3/3 first strike",
     output: { vanilla: 1 }
   },{
     input: "CMC 2 P/T 1/4",
     output: { vanilla: 1 }
   },{
      input: "CMC 6 P/T 4/4",
      output: { notVanilla: 1 }
   }
]
