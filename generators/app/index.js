'use strict';

// Add ability to create directories
var mkdirp = require('mkdirp');

const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the wonderful ' + chalk.red('tads') + ' generator!'
    ));

    const prompts = [
      {
        type: 'list',
        name: 'projecttype',
        message: 'What type of application do you want to create?',
        choices: [
            {
              name: 'adv3 Application',
              value: 'adv3'
            },
            {
              name: 'adv3Lite Application',
              value: 'adv3lite'
            }
        ]
      },
      {
        type: 'input',
        name: 'name',
        message: 'Project Name: Cannot contain \ / : * ? " < > | or <space> characters. This is the project filename.',
        default: this.appname
      },
      {
        type: 'input',
        name: 'author',
        message: 'Authors Name',
        store: true
      },
      {
        type: 'input',
        name: 'email',
        message: 'Authors Email Address',
        store: true
      },
      {
        type: 'input',
        name: 'title',
        message: 'The Title of your interactive fiction game'
      },
      {
        type: 'input',
        name: 'desc',
        message: 'The Text description of your interactive fiction game'
      },
      {
        type: 'input',
        name: 'htmldesc',
        message: 'The HTML description of your interactive fiction game'
      },
      {
        type: 'input',
        name: 'ifid',
        message: 'The IFID for your interactive fiction game. This must be unique for each game the same way as an ISBN is unique for each book. You can get an IFID at http://www.tads.org/ifidgen/ifidgen'
      },
      {
        type: 'input',
        name: 'libpath',
        message: 'The root path to third-party extensions like adv3Lite: Do not add a trailing / E.g. ../extensions',
        default: '../extensions',
        store: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {

    // Create the required directories
    mkdirp(this.destinationPath('debug'));
    mkdirp(this.destinationPath('web'));
    mkdirp(this.destinationPath('obj'));
    mkdirp(this.destinationPath('scripts'));

    // Project Specific Files

    // adv3 Project Files
    if (this.props.projecttype == 'adv3') {
      this.fs.copyTpl(
        this.templatePath('adv3/adv3.t'),
        this.destinationPath(this.props.name + '.t'),
        {
          name: this.props.name,
          title: this.props.title,
          author: this.props.author,
          email: this.props.email,
          desc: this.props.desc,
          htmldesc: this.props.htmldesc,
          ifid: this.props.ifid  
        }
      );

      this.fs.copyTpl(
        this.templatePath('adv3/adv3.t3m'),
        this.destinationPath('Makefile.t3m'),
        {
          name: this.props.name
        }
      );

      this.fs.copyTpl(
        this.templatePath('adv3web/adv3web.t3m'),
        this.destinationPath('Makefile-web.t3m'),
        {
          name: this.props.name
        }
      );
    }

    // adv3Lite Project Files
    else if (this.props.projecttype == 'adv3lite') {
      this.fs.copyTpl(
        this.templatePath('adv3Lite/adv3Lite.t'),
        this.destinationPath(this.props.name + '.t'),
        {
          name: this.props.name,
          title: this.props.title,
          author: this.props.author,
          email: this.props.email,
          desc: this.props.desc,
          htmldesc: this.props.htmldesc,
          ifid: this.props.ifid  
        }
      );

      this.fs.copyTpl(
        this.templatePath('adv3Lite/adv3Lite.t3m'),
        this.destinationPath('Makefile.t3m'),
        {
          name: this.props.name,
          libpath: this.props.libpath
        }
      );

      this.fs.copyTpl(
        this.templatePath('adv3Liteweb/adv3Liteweb.t3m'),
        this.destinationPath('Makefile-web.t3m'),
        {
          name: this.props.name,
          libpath: this.props.libpath
        }
      );
    } 
  }

  /*
  install() {
    this.installDependencies();
  }
  */
};
