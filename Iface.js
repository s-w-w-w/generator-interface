    /*
    Iface - provide inderface for AndB class
        Properties:
            see constructor() descs    
        Methods:
        constructor() - object instantiation method 
    */
    class Iface{        

        /* 
        constructor() - object instantiation method 
        */
        constructor(){
             
            // state 
            self = this;
            // generator and 
            this.generatorStart = 0;
            this.generatorEnd = Infinity;
            this.generatorStep = 5;   
            this.generator = null;
            
            
            ////interface controls
            // destination ctrl for a value  
            this.currentValueCtrl = document.getElementById('current-value');
            this.nextValueCtrl = document.getElementById('next-value');
            this.resetCtrl = document.getElementById('reset');
            
            this.generatorStartCtrl = document.getElementById('generator-start');
            this.generatorEndCtrl = document.getElementById('generator-end');
            this.generatorStepCtrl = document.getElementById('generator-step');
            this.generatorApplySettings = document.getElementById('apply-settings');

            //  
            //this.setGeneratorCallback();
            //this.setCurrentValueCallback(); 
            this.resetCallback()


            // activate a-related controls
            this.nextValueCtrl.addEventListener(
                'click',
                function(e){
                    self.setCurrentValueCallback();
                },
                false
            );
            
            // activate a-related controls
            this.resetCtrl.addEventListener(
                'click',
                function(e){
                    self.resetCallback();
                },
                false
            );           
            
            this.generatorApplySettings.addEventListener(
                'click',
                function(e){
                    self.getGeneratorSettingsCallback();
                    self.resetCallback();
                },
                false
            )
        }
     
        /*
          reset generator 
        */  
        resetCallback(){
          self.setGeneratorCallback();
          self.setGeneratorPropsCallback();
          self.setCurrentValueCallback();
        }
     
        /* 
          set visible generator properties
        */  
        setGeneratorPropsCallback(){
          self.generatorStartCtrl.value = self.generatorStart
          self.generatorEndCtrl.value = self.generatorEnd
          self.generatorStepCtrl.value = self.generatorStep      
        }
     
     
        /*
        set next generated value value
        */
        setCurrentValueCallback(){
          let nextObj = self.generator.next(); 
           
          if(!nextObj.done){
            self.currentValueCtrl.innerHTML = nextObj.value;
          } else {
            self.currentValueCtrl.innerHTML = "Done";
          }
          
        }
        
        /* set generator callback */
        setGeneratorCallback(){
            const sg = new SequenceGenerators();
            const g1 = sg.generator1();
            self.generator = g1(
                self.generatorStart,
                self.generatorEnd,
                self.generatorStep
            )          
        }
        
        /*
        getGeneratorSettingsCallback() - set new generator settings
        */
        getGeneratorSettingsCallback(){
            let start = parseInt(self.generatorStartCtrl.value);
            let end = parseInt(self.generatorEndCtrl.value);
            let step = parseInt(self.generatorStepCtrl.value);
            
            // validate start variable
            if(Number.isInteger(start)){
                self.generatorStart = start;               
            }
            
            // validate end variable
            if(Number.isInteger(end)){
                self.generatorEnd = end;               
            } else {
                self.generatorEnd = Infinity
            }
            
            // validate step variable
            if(Number.isInteger(step)){
                self.generatorStep = step;               
            }
        }                     
    }
