import inquirer from 'inquirer';
import fs from 'fs';
import pkg from 'statuses';
const { message } = pkg;

inquirer.prompt([
    {
        type:'input',
        message:"What's the project title?",
        name:'title',
        validate: (value)=>{if(value){return true} else {return 'I need a value to continue'}},
    },
    {
        type:'input',
        message:"How do you install your app?",
        name:'installation',
        validate: (value)=>{if(value){return true} else {return 'I need a value to continue'}},
    },
    {
        type:'input',
        message:"Instruction to be follow?",
        name:'instructions',
        validate: (value)=>{if(value){return true} else {return 'I need a value to continue'}},
    },
    {
        type:'input',
        message:"Any creits?",
        name:'installation',
        validate: (value)=>{if(value){return true} else {return 'I need a value to continue'}},
    },
    {
        type:'input',
        message:"How do you use your app?",
        name:'usage',
        validate: (value)=>{if(value){return true} else {return 'I need a value to continue'}},
    },
    {
        type:'list',
        message:"What lisense did you use?",
        name:'license',
        choices:['The MIT License','The GPL License','Apache License','GNU License','N/A'],
        validate: (value)=>{if(value){return true} else {return 'I need a value to continue'}},
    },
    {
        type:'input',
        message:"GitHub username:",
        name:'git',
        validate: (value)=>{if(value){return true} else {return 'I need a value to continue'}},
    },
    {
        type:'input',
        message:"Email:",
        name:'email',
        validate: (value)=>{if(value){return true} else {return 'I need a value to continue'}},
    }
]
).then(({
    title,
    installation,
    instructions,
    credit,
    license,
    git,
    linkedin,
    email,
    usage,
    contribution
}) => {
    
    const template = `# ${title}

    * [installation](#installation)
    * [Usage](#usage)
    * [Contribution](#contribution)
    * [Credits](#credits)
    * [License](#license)
    # Installation
    ${installation}
    ## Usage
    ${usage}
    ## Contribution
    ${contribution}
    ### instructions
    ${instructions}
    ## Credits
    ${credit}
    ## License
    ${license}

    # Contact
    * GitHub : ${git}
    * Linkedin: ${linkedin}
    * E-mail: ${email}`;
    
    createNewFile(title,template);
}
);

function createNewFile(fileName,data){

    fs.writeFile(`./${fileName.toLowerCase().split(' ').join("")}.md`,data,(err)=>{
        if(err){
            console.log(err)
        }
        console.log("Your README has been generated");
    })
}

